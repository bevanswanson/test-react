import * as React from 'react';
import PrompButton from './components/PromptButton';
import TextField from './components/TextField';
import { text } from 'stream/consumers';

export interface IAppProps {
}

export interface IAppState {
  text: string
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      text: ''
    }
  }

  handleClick = (buttonValue: string) => this.setState({text: buttonValue})

  handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value
    });
  }

  public render() {
    return (
      <div>
        <PrompButton promptText='test prompt 100' onClick={this.handleClick} />
        <PrompButton promptText='test prompt 2' onClick={this.handleClick} />
        <PrompButton promptText='test prompt 3' onClick={this.handleClick} />
        <PrompButton promptText='test prompt 4' onClick={this.handleClick} />

        <TextField value={this.state.text} onChange={this.handleTextChange} />
      </div>
    );
  }
}
