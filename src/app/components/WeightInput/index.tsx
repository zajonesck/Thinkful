import * as React from 'react';

export namespace WeightInput {
  export interface Props {
    text: number;
    placeholder?: string;
    onSave: (text: number) => void;
  }

  export interface State {
    text: number;
  }
}

export class WeightInput extends React.Component<WeightInput.Props, WeightInput.State> {
  constructor(props: WeightInput.Props, context?: any) {
    super(props, context);
    this.state = { text: this.props.text };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    // 13 is the enter key
    if (event.which === 13) {
      const text = Number(event.currentTarget.value.trim());
      this.props.onSave(text);
    }
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: Number(event.target.value) });
  }

  handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const text = Number(event.target.value.trim());
    // if (!this.props.newTodo) {
      this.props.onSave(text);
    // }
  }

  render() {

    return (
      <input
        type="number"
        autoFocus
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}
