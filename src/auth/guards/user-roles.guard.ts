import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import exceptions from '../../common/constants/exceptions';


@Injectable()
export class UserRolesGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = context.getHandler()?.constructor?.prototype?.roles;
    if (!roles) {
      return true;
    }

    console.log(`Маршрут доступен для ролей: ${roles}`);

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.replace(/Bearer\s/, '');
    const decoded: any = this.jwtService.decode(token);

    console.log(`Пользователь извлечен из токена для получения его роли: ${decoded}`);

    if (!decoded || !decoded.role) {
      throw new UnauthorizedException(exceptions.auth.unauthorized);
    }

    return roles.some((role) => role === decoded.role);
  }
}