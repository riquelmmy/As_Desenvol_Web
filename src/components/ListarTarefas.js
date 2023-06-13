import React, { useEffect, useState } from "react";
import axios from "axios";

function ListarTarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    fetchTarefas();
  }, []);

  const fetchTarefas = async () => {
    try {
      const response = await axios.get("http://localhost:3002/tarefas");
      setTarefas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleCheck = async (id, feito, nome) => {
    try {
      const updatedTarefas = tarefas.map((tarefa) => {
        if (tarefa.id === id) {
          return {
            ...tarefa,
            feito: feito === 1 ? 0 : 1,
          };
        }
        return tarefa;
      });

      setTarefas(updatedTarefas);
      await axios.put(`http://localhost:3002/tarefas/${id}`, { feito: feito === 1 ? 0 : 1, nome:nome });
    } catch (error) {
      console.error(error);
    }
  };
  const atualizarPagina = () => {
    window.location.reload();
  };

  return (
    <div>
      {tarefas.map((tarefa) => (
        <div key={tarefa.id}>
          <input
            type="checkbox"
            checked={tarefa.feito === 1}
            onChange={() => handleToggleCheck(tarefa.id, tarefa.feito, tarefa.nome)}
          />
          <span>{tarefa.nome}</span>
        </div>
      ))}
      <button onClick={atualizarPagina}>Atualizar</button>
    </div>
  );
}

export default ListarTarefas;
