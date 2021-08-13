import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

    }
    increase = () => {
        this.setState({ count: this.state.count + 1 });

    }
    decrease = () => {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div className="counter">
                <h1 className="text">{this.state.count}</h1>
                <div className="btn py-6">
                    <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-full" onClick={this.increase}>+</button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full" onClick={this.decrease}>-</button>
                </div>
            </div>
        )

    }
}
export default ClassComponent;