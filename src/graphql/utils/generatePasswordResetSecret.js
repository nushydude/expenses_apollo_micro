// @flow
import jwt from 'jsonwebtoken';
import type { UserMongooseRecord } from '../../mongoose/types/User';

export const CONFIG = {
  algorithm: 'HS256',
  expiresIn: '30m',
  issuer: process.env.JWT_ISSUER,
};

export function generatePasswordResetSecret(user: UserMongooseRecord): string {
  const userID = user._id.toString();

  return jwt.sign({ userID }, process.env.PASSWORD_RESET_SECRET, CONFIG);
}
