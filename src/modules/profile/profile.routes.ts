import express from 'express';
import { ProfileController } from './profile.controller';

export const ProfileRoutes = (app: any) => {
  const router = express.Router();

  // I believe the routes are self-explanatory
  router.post("/login", ProfileController.login);

  router.post("/register", ProfileController.register);

  router.post("/reset-password", ProfileController.resetPassword);

  router.post("/update-password", ProfileController.updatePassword);

  router.get("/profile", ProfileController.getProfile);

  router.put("/profile", ProfileController.updateProfile);

  app.use('/api/', router);
};
