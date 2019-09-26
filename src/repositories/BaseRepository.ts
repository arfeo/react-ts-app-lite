import { HttpDataSource } from '../utils/HttpDataSource';

class BaseRepository<TProps extends {} = {}> {
  protected http: HttpDataSource;

  protected constructor() {
    this.http = new HttpDataSource();
  }
}

export { BaseRepository };
