import * as React from 'react';
import {WeightInput} from 'app/components/WeightInput';
import {WilksActions} from 'app/actions';
import {GenderInput} from "app/components/GenderInput";

export namespace Header {
  export interface Props {
    barWeight: number;
    bodyWeight: number;
    goalWilks: number;
    isMale: boolean;
    updateBodyWeight: typeof WilksActions.updateBodyWeight;
    updateGoalWilks: typeof WilksActions.updateGoalWilks;
    calculateBarWeight: typeof WilksActions.calculateBarWeight;
  }

  export interface State {
    barWeight: number;
    bodyWeight: number;
    goalWilks: number;
    isMale: boolean;
  }
}

export class Header extends React.Component<Header.Props, Header.State> {
  constructor(props: Header.Props, context?: any) {
    super(props, context);
    this.state = {
      barWeight: this.props.barWeight,
      bodyWeight: this.props.bodyWeight,
      goalWilks: this.props.goalWilks,
      isMale: this.props.isMale,
    };

    this.handleBodyWeightInput = this.handleBodyWeightInput.bind(this);
    this.handleWilksInput = this.handleWilksInput.bind(this);
    this.calculateBarWeight = this.calculateBarWeight.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
  }

  handleBodyWeightInput(text: number) {
    // this.props.updateBodyWeight({bodyWeight: text});
    this.setState({bodyWeight: text});
  }

  handleWilksInput(text: number) {
    // this.props.updateGoalWilks({goalWilks: text});
    this.setState({goalWilks: text});
  }

  handleGenderChange(isMale: boolean) {
    this.setState({isMale: isMale});
  }

  calculateBarWeight() {
    this.props.calculateBarWeight({
      bodyWeight: this.state.bodyWeight,
      goalWilks: this.state.goalWilks,
      isMale: this.state.isMale,
    });
  }

  render() {
    return (
      <header>
        <div>Your body weight</div><WeightInput
        onSave={this.handleBodyWeightInput}
        placeholder="Your Body Weight"
        text={this.state.bodyWeight}
      />
        <div>Your goal Wilks</div><WeightInput
        onSave={this.handleWilksInput}
        text={this.state.goalWilks}
        placeholder="Desired Wilks" />

        <div>Your gender</div><GenderInput isMale={this.state.isMale} onSave={this.handleGenderChange}/>

        <button onClick={this.calculateBarWeight}>Find Bar Weight</button>
      </header>
    );
  }
}
