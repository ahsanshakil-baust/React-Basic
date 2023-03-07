const bable = React.createElement(
    "div",
    { className: "counter" },
    React.createElement("h1", null, "0"),
    React.createElement(
        "div",
        { className: "process" },
        React.createElement("button", null, "-"),
        React.createElement("button", null, "+")
    )
);

const Counter = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
        };
    },
    increment: function () {
        this.setState({ count: this.state.count + 1 });
    },
    decrement: function () {
        this.setState({ count: this.state.count - 1 });
    },
    render: function () {
        return (
            <div className="counter">
                <h1>{this.state.count} </h1>
                <div className="process">
                    <button onClick={this.decrement} type="button">
                        -
                    </button>
                    <button onClick={this.increment} type="button">
                        +
                    </button>
                </div>
            </div>
        );
    },
});

ReactDOM.render(<Counter />, document.body);
