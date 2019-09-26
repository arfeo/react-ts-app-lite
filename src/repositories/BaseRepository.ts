import { HttpDataSource } from '../sources/HttpDataSource';

class BaseRepository<TProps extends {} = {}> {
  protected props: TProps | undefined;
  protected http: HttpDataSource;

  protected constructor() {
    this.http = new HttpDataSource();
  }
}

export { BaseRepository };
