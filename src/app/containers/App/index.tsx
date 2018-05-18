import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { WilksActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { omit } from 'app/utils';
import { Header, Footer } from 'app/components';
import {BarWeightNeeded} from "app/components/BarWeightNeeded";

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    wilks: RootState.WilksState;
    wilksActions: WilksActions;
  }
}

@connect(
  (state: RootState): Pick<App.Props, 'wilks'> => {
    return { wilks: state.wilks };
  },
  (dispatch: Dispatch<RootState>) => (
    {
      wilksActions: bindActionCreators(omit(WilksActions, 'Type'), dispatch),
    }
  )
)

export class App extends React.Component<App.Props> {
  static defaultProps: Partial<App.Props> = {
  //   filter: TodoModel.Filter.SHOW_ALL
  };

  constructor(props: App.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { wilks, wilksActions } = this.props;
    const bodyWeight = wilks.bodyWeight;
    const goalWilks = wilks.goalWilks;
    const barWeight = wilks.barWeight;
    const isMale = wilks.isMale;

    return (
      <div className={style.normal}>
        <Header updateBodyWeight={wilksActions.updateBodyWeight}
                updateGoalWilks={wilksActions.updateGoalWilks}
                calculateBarWeight={wilksActions.calculateBarWeight}
                isMale={isMale}
                bodyWeight={bodyWeight}
                goalWilks={goalWilks}
                barWeight={barWeight}
        />
        <BarWeightNeeded bodyWeight={bodyWeight} goalWilks={goalWilks} barWeight={barWeight} isMale={isMale}/>
        <Footer/>
      </div>
    );
  }
}
