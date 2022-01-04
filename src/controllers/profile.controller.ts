import { Log, Warn } from '../lib/pretty-logging';

const login = (req: any, res: any) => {
  Warn( 'Login has been called' );
  res.json({message: 'Login has been called'});
}

const register = (req: any, res: any) => {
  Warn( 'Register has been called' );
  res.json({message: 'Register has been called'});
}

const resetPassword = (req: any, res: any) => {
  Warn( 'Register has been called' );
  res.json({message: 'Register has been called'});
}

const updatePassword = (req: any, res: any) => {
  Warn( 'Register has been called' );
  res.json({message: 'Register has been called'});
}

const getProfile = (req: any, res: any) => {
  Warn( 'Register has been called' );
  res.json({message: 'Register has been called'});
}

const updateProfile = (req: any, res: any) => {
  Warn( 'Register has been called' );
  res.json({message: 'Register has been called'});
}

export const ProfileController = {
  login,
  register,
  resetPassword,
  updatePassword,
  getProfile,
  updateProfile
};