import { SetMetadata } from '@nestjs/common';
import { AuthType } from '../enum/authType.enum';
import { AUTH_TYPE_KEY } from '../constants/auth.constants';

export const Auth = (...authTypes: AuthType[]) =>
  SetMetadata(AUTH_TYPE_KEY, authTypes);
