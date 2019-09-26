import { BaseRepository } from './BaseRepository';

export interface AppRepositoryInterface {
  getAppName(): string;
}

class AppRepository extends BaseRepository implements AppRepositoryInterface {
  public getAppName(): string {
    return 'React TS App Lite';
  }
}

export { AppRepository };
