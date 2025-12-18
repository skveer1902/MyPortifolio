import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'skvb-portfolio-secure-key-change-this-in-env';
const OWNER_PASSWORD = process.env.OWNER_PASSWORD;

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { password } = request.body;

        if (!OWNER_PASSWORD) {
            console.error('OWNER_PASSWORD not set in environment variables');
            return response.status(500).json({ error: 'Server misconfiguration' });
        }

        if (password === OWNER_PASSWORD) {
            // Generate JWT
            const token = jwt.sign({ role: 'owner' }, JWT_SECRET, { expiresIn: '1h' });

            // Set HttpOnly Cookie
            const cookie = serialize('auth_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 3600, // 1 hour
                path: '/'
            });

            response.setHeader('Set-Cookie', cookie);
            return response.status(200).json({ success: true, message: 'Login successful' });
        } else {
            return response.status(401).json({ error: 'Invalid password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
