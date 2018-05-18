import * as React from 'react';

export namespace GenderInput {
  export interface Props {
    isMale: boolean;
    onSave: (isMale: boolean) => void;
  }
}

export class GenderInput extends React.Component<GenderInput.Props> {
  constructor(props: GenderInput.Props, context?: any) {
    super(props, context);
    this.handleSelectMale = this.handleSelectMale.bind(this);
    this.handleSelectFemale = this.handleSelectFemale.bind(this);
  }

  handleSelectMale() {
    console.log('male selected ');


    if (!this.props.isMale) {
      this.props.onSave(true);
    }
  }

  handleSelectFemale() {
    console.log('female selected ');

    if (this.props.isMale) {
      this.props.onSave(false);
    }
  }

  render() {

    return (
      <div>
        <input
          type="radio"
          autoFocus
          checked={this.props.isMale}
          onChange={this.handleSelectMale}
        /> Male
          <input
            type="radio"
            autoFocus
            checked={!this.props.isMale}
            onChange={this.handleSelectFemale}
          /> Female
      </div>
    );
  }
}
