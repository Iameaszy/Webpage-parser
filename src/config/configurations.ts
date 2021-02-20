import { resolve } from 'path';
import { Environment, EnvTypes } from './types';

export default (): EnvTypes => {
    const environment = (process.env.NODE_ENV as Environment) || 'development';
    return {
        port: parseInt(process.env.PORT || '3000', 10),
        secret: process.env.SECRET || 'secret',
        environment,
        rootDir: resolve(__dirname, '../../'),
        workDir: resolve(__dirname, '../'),
        uploadDir: resolve(__dirname, '../', 'upload'),
    };
};
