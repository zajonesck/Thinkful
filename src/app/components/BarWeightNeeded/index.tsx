import * as React from 'react';

export namespace BarWeightNeeded {
  export interface Props {
    barWeight: number;
    bodyWeight: number;
    goalWilks: number;
    isMale: boolean;
  }
}

export class BarWeightNeeded extends React.Component<BarWeightNeeded.Props> {
  constructor(props: BarWeightNeeded.Props, context?: any) {
    super(props, context);
  }

  getBarText() {
    if (this.props.bodyWeight > 0 && this.props.goalWilks > 0 && this.props.barWeight > 0) {
      return <div>A {this.getGender()} weighing {this.props.bodyWeight}kg who wants a {this.props.goalWilks} wilks
        needs to lift {this.props.barWeight}kg.</div>
    } else {
      return <div>Enter your body weight and goal Wilks.</div>
    }
  }

  getGender() {
    if (this.props.isMale) {
      return 'male';
    } else {
      return 'female';
    }
  }

  render() {
    return (
      <div>
        {this.getBarText()}
      </div>
    );
  }
}
