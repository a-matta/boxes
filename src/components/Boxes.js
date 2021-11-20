import React, { Component } from "react";
import Box from "./Box";

class Boxes extends Component {
    state = {
        persons: [
            { id: 1, name: "Suzana", age: 35, title: "CEO" },
            { id: 2, name: "Tuli", age: 38, title: "Developer" },
            { id: 3, name: "Katrina", age: 42, title: "SM" },
            { id: 4, name: "Selva", age: 49, title: "PO" },
        ],
    };

    changeNameHandler = () => {
        console.log("WOW");
    };
    render() {
        return (
            <>
                {this.state.persons.map((item) => (
                    <Box
                        key={item.id}
                        name={item.name}
                        age={item.age}
                        title={item.title}
                    />
                ))}
            </>
        );
    }
}

export default Boxes;