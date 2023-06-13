import React, { useState } from "react";
import axios from "axios";


function CriarTarefa() {
    const [nome, setNome] = useState("");
  
    const handleUpload = async () => {
      try {
        const response = await axios.post("http://localhost:3002/tarefas", { nome });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      window.location.reload();
    };
  
    const handleChange = (event) => {
      setNome(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={nome} onChange={handleChange} placeholder="Nome da Tarefa"/>
        <button onClick={handleUpload}>Enviar</button>
      </div>
    );
  }
  
  export default CriarTarefa;