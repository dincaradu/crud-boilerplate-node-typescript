import { Log, Warn } from '../../lib/helpers/pretty-logging.helper';

const login = (req: Request, res: any) => {
  Warn( 'Login has been called' );
  res.json({message: 'Login has been called'});
}

const register = (req: Request, res: any) => {
  Warn( 'Register has been called' );
  res.json({message: 'Register has been called'});
}

const resetPassword = (req: Request, res: any) => {
  Warn( 'Register has been called' );
  res.json({message: 'Register has been called'});
}

const updatePassword = (req: Request, res: any) => {
  Warn( 'Register has been called' );
  res.json({message: 'Register has been called'});
}

const getProfile = (req: Request, res: any) => {
  Warn( 'Register has been called' );
  res.json({message: 'Register has been called'});
}

const updateProfile = (req: Request, res: any) => {
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
