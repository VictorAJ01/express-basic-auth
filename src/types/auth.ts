import express from 'express';
import type { IUser } from '../models/user.ts';

export interface AuthRequest extends express.Request {
  user?: IUser;
}

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
};

export type JwtPayload = {
  userId: string;
  email: string;
};
