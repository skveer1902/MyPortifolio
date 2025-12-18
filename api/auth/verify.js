import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'skvb-portfolio-secure-key-change-this-in-env';

export default async function handler(request, response) {
    if (request.method !== 'GET') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const { cookies } = request;
    const token = cookies.auth_token;

    if (!token) {
        return response.status(401).json({ authenticated: false });
    }

    try {
        jwt.verify(token, JWT_SECRET);
        return response.status(200).json({ authenticated: true });
    } catch (error) {
        return response.status(401).json({ authenticated: false });
    }
}
