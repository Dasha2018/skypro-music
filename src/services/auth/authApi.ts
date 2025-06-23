const API_URL = 'https://webdev-music-003b5b991590.herokuapp.com';

interface AuthResponse {
  email: string;
  username: string;
  _id: number;
}

interface ErrorResponse {
  message: string;
}

export async function login(email: string, password: string): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/user/login/`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err: ErrorResponse = await res.json();
    throw new Error(err.message || 'Ошибка входа');
  }

  return res.json();
}

export async function signup(email: string, password: string): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/user/signup/`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err: ErrorResponse = await res.json();
    throw new Error(err.message || 'Ошибка регистрации');
  }

  return res.json();
}