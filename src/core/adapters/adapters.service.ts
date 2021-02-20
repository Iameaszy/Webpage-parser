import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvTypes } from 'src/config/types';

@Injectable()
export class AdapterService {
    constructor(private config: ConfigService<EnvTypes>) { }
    public generateOTP() {
        return Math.floor(100000 + Math.random() * 900000);
    }
}
