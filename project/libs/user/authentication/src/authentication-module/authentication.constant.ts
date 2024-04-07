export enum AUTH_USER {
  EXISTS = 'User with this email exists',
  NOT_FOUND = 'User not found',
  PASSWORD_WRONG = 'User password is wrong'
}

export const AuthenticationResponseMessage = {
  LoggedSuccess: 'User has been successfully logged.',
  LoggedError: 'Password or Login is wrong.',
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with the email already exists',
  UserCreated: 'The new user has been successfully created.',
} as const;
