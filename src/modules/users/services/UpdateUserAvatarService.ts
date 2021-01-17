import path from 'path';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';
import upload from '@config/upload';

import AppError from '@shared/errors/AppError';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProviders';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}
@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ user_id, avatarFilename }: IRequest): Promise<void> {}
}

export default UpdateUserAvatarService;
