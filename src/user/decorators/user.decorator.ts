import { ExpressRequestInterface } from './../../types/expressRequest.interface';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<ExpressRequestInterface>();

  if (!request) {
    return null;
  }

  if (data) {
    return request.user[data] ?? null;
  }

  return request.user;
});
