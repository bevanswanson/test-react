import * as React from 'react';

export interface ITextFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class TextField extends React.Component<ITextFieldProps> {
    public render() {
        return (
            <input value={this.props.value} onChange={this.props.onChange}/>
        );
    }
}
