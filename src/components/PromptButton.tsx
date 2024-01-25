import * as React from 'react';

export interface IPrompButtonProps {
    onClick: (promptText: string) => void
    promptText: string
}

export default class PrompButton extends React.Component<IPrompButtonProps> {
    public render() {
        return (
        <div>
            <button onClick={() => this.props.onClick(this.props.promptText)}>{this.props.promptText}</button>
        </div>
        );
    }
}
