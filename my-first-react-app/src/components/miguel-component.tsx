import * as React from 'react';
import { MiguelDisplay } from './miguel/miguel-display';
import { MiguelButton } from './miguel/miguel-button';
import { MiguelButtonFlush } from './miguel/miguel-button-flush';

export class MiguelComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            text: '',
            clicks: 0
        }
    }
    // Add 'Hi' word
    addText(word: number) {
        this.setState({
            text: this.state.text + word,
            clicks: this.state.clicks + 1
        });
    }
    // Clear the text
    flush() {
        this.setState({
            text: "",
            clicks: 0
        });
    }

    render() {
        return (
            <div>
                <MiguelDisplay text={this.state.text} nClicks={this.state.clicks} />
                <MiguelButton addText={(w: any) => this.addText(w)} />
                <MiguelButtonFlush flush={() => this.flush()} />
            </div>
        );
    }
}