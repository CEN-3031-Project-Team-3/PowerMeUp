import React from "react";

class Form extends React.Component {
    state = {
        selected: [],
    };

    selectButton = (name) => {
        const tempSelected = { ...this.state.selected };
        tempSelected.push(name);
        this.setState({ selected: tempSelected });
    };
    isSelected = (name) => {
        return this.state.selected.includes(name);
    };

    render() {
        return (
            <>
                <button onClick={(e) => this.props.selectButton("A")} className={this.isSelected("A") ? "selected" : ""}>
                    A
                </button>
                <button onClick={(e) => this.props.selectButton("B")} className={this.isSelected("B") ? "selected" : ""}>
                    B
                </button>
                <button onClick={(e) => this.props.selectButton("C")} className={this.isSelected("C") ? "selected" : ""}>
                    C
                </button>
                <button onClick={(e) => this.props.selectButton("D")} className={this.isSelected("D") ? "selected" : ""}>
                    D
                </button>
            </>
        );
    }
}


export default Form