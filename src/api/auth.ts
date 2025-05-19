export type AuthResponse = { success: boolean; error?: string };

const BASE_URL = 'https://fakestoreapi.com';

export async function login(username: string, password: string): Promise<AuthResponse> {
    try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password}),
        });

        const data = await res.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', username);
            return {success: true};
        }

        return {success: false, error: 'Invalid username or password'};
    } catch (error) {
        console.error('[auth] Login error:', error);
        return {success: false, error: 'Login failed. Please try again.'};
    }
}

export async function register(username: string, email: string, password: string): Promise<AuthResponse> {
    try {
        const res = await fetch(`${BASE_URL}/users`);
        const users = await res.json();
        console.log('[Fetched Users]:', users);
    } catch (error) {
        console.error('[auth] Error fetching users:', error);
    }
    try {
        const res = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password}),
        });

        const data = await res.json();

        if (data?.id && username && password) {
            // ✅ Fix: Call login with separate arguments, not an object
            return await login(username, password);
        }

        return {success: false, error: 'Registration failed'};
    } catch (error) {
        console.error('[auth] Registration error:', error);
        return {success: false, error: 'Registration failed. Please try again.'};
    }

}
