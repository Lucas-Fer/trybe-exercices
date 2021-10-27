import React, { Component } from "react";

class TaskList extends Component {
  render() {
    const arrayTask = ['Estudar', 'Lazer', 'Compromisso', 'Cuidar dos dog'];

    return (
      <section>
        <h1>Minha lista de Tarefas</h1>
        <ol>
          {arrayTask.map((arrayIndex) => <li>{arrayIndex}</li>)}
        </ol>
      </section>
    );
  }
}
export default TaskList;