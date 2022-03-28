import { UserService } from '@app/user/user.service';
import { JWT_SECRET } from './../../config';
import { ExpressRequestInterface } from '@app/types/expressRequest.interface';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(
    request: ExpressRequestInterface,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    if (!request.headers.authorization) {
      request.user = null;
      next();
      return;
    }

    const token = request.headers.authorization.split(' ')[1];

    try {
      const decodeJwt = verify(token, JWT_SECRET);
      const user = await this.userService.findById(decodeJwt.id);
      request.user = user;
      next();
    } catch (err) {
      request.user = null;
      next();
    }
  }
}
