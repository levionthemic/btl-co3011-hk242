import express from 'express'
import { authController } from '~/controllers/authController'
import { authValidation } from '~/validations/authValidation'

const Router = express.Router()

Router.route('/login')
  .post(authController.login)

Router.route('/register')
  .post(authValidation.register, authController.register)

Router.route('/logout')
  .delete(authController.logout)

Router.route('/refresh-token')
  .get(authController.refreshToken)

export const authRoute = Router