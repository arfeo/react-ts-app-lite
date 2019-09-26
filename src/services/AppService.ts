import { BaseService } from './BaseService';

import { Repositories } from '../repositories';

export interface AppServiceInterface {
  getAppName(): string;
}

type Injection = Pick<Repositories, 'AppRepository'>;

class AppService extends BaseService<Injection> implements AppServiceInterface {
  protected constructor() {
    super();

    this.inject = ['AppRepository'];
  }

  public getAppName(): string {
    return this.props.AppRepository.getAppName();
  }
}

export { AppService };
