import { serialize } from 'cookie';

export default async function handler(request, response) {
    // Clear the cookie
    const cookie = serialize('auth_token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: -1,
        path: '/'
    });

    response.setHeader('Set-Cookie', cookie);
    return response.status(200).json({ success: true, message: 'Logged out' });
}
