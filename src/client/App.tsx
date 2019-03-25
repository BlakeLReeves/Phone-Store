import * as React from 'react';

import './scss/app';

interface IAppProps { }

interface IAppState { }

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { };
    }

    render () {
        return (
            <main className="container">
                <h1 className="covalence-blue">Hello World!</h1>
            </main>
        )
    }
}