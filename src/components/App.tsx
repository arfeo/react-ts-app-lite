import * as React from 'react';

import { Inject } from '../utils/Inject/Inject';

import { Services } from '../services';

type Props = Pick<Services, 'AppService'>;

class AppComponent extends React.Component<Props> {
  public render(): React.ReactElement {
    return (
      <>
        This is {this.props.AppService.getAppName()}
      </>
    );
  }
}

export const App = Inject<Props, {}>(['AppService'])(AppComponent);
