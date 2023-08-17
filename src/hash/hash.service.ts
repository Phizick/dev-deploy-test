import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import configuration from '../config/configuration';

@Injectable()
@Injectable()
export class HashService {
  // eslint-disable-next-line class-methods-use-this
  async generateHash(password: string): Promise<string> {
    const saltRounds = 12;
    const salt = await bcrypt.genSalt(saltRounds);
    // eslint-disable-next-line no-return-await
    return await bcrypt.hash(password, salt);
  }

  // eslint-disable-next-line class-methods-use-this
  async compareHash(password: string, hash: string): Promise<boolean> {
    // eslint-disable-next-line no-return-await
    return await bcrypt.compare(password, hash);
  }
}
