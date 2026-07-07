import { useState } from "react";
import "./App.css";

export default function App() {
    // 1. Lista de tarefas
    const [tarefas, setTarefas] = useState([
        { id: 1, texto: "Aprender sobre Props", concluida: true },
        { id: 2, texto: "Entender useState", concluida: false },
        { id: 3, texto: "Estudar Web Components", concluida: false },
    ]);

    // Guarda o texto do input. Começa vazio ("")
    const [textoDigitado, setTextoDigitado] = useState("");

    // Guarda o ID da tarefa que estamos editando. Começa vazia (null)
    const [idEmEdicao, setIdEmEdicao] = useState(null);

    // ---> FUNÇÃO EXCLUIR
    const excluirTarefa = (idParaExcluir) => {
        // Filtra a lista: "Deixe ficar todo mundo que tiver o ID DIFERENTE do que eu quero apagar"
        const listaAtualizada = tarefas.filter((tarefa) => tarefa.id !== idParaExcluir);

        // Se excluir a tarefa que estava sendo editada, limpa a edição
        if (idEmEdicao === idParaExcluir) {
            setIdEmEdicao(null);
            setTextoDigitado("");
        }

        setTarefas(listaAtualizada); // Recarrega a lista
    };

    // ---> FUNÇÃO ADICIONAR/EDITAR
    const salvarTarefa = () => {
        if (textoDigitado.trim() === "") return;

        if (idEmEdicao !== null) {
            // MODO EDIÇÃO: 
            // O .map() passa por cada tarefa. Se achar o ID igual ao que estamos editando,
            // ele altera o texto. Se for diferente, ele deixa a tarefa como estava.
            const listaEditada = tarefas.map((tarefa) =>
                tarefa.id === idEmEdicao ? { ...tarefa, texto: textoDigitado } : tarefa
            );

            setTarefas(listaEditada); // Recarrega a lista
            setIdEmEdicao(null); // Sai do modo de edição
        } else {
            // MODO ADICIONAR:
            const novaTarefa = {
                id: Date.now(),
                texto: textoDigitado
            };
            setTarefas([...tarefas, novaTarefa]);
        }

        setTextoDigitado(""); // Limpa o input
    };

    // ---> FUNÇÃO PREPARAR EDIÇÃO:
    const prepararEdicao = (tarefa) => {
        setTextoDigitado(tarefa.texto); // Joga o texto da tarefa no input
        setIdEmEdicao(tarefa.id); // Guarda o ID para saber qual alterar
    };

    // ---> FUNÇÃO ALTERNAR CONCLUÍDA
    const alternarConcluida = (idParaAlternar) => {
        // O .map vai passar por todas as tarefas. 
        // Se achar o ID clicado, ele inverte o valor de 'concluida' (se tava true vira false, se tava false vira true).
        // Se for outro ID, ele deixa a tarefa idêntica.
        const listaAtualizada = tarefas.map((tarefa) =>
            tarefa.id === idParaAlternar ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        );

        setTarefas(listaAtualizada);
    };

    return (
        <div className="container">

            <div className="card">

                <h2>Lista de Tarefas</h2>

                {/* LISTA DE TAREFAS */}
                <ul>
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id} className="item-tarefa">
                            <span
                                onClick={() => alternarConcluida(tarefa.id)}
                                className={`texto-tarefa ${tarefa.concluida ? "tarefa-concluida" : ""}`}
                            >
                                {tarefa.texto}
                            </span>
                            <button onClick={() => prepararEdicao(tarefa)} className="botao-editar">
                                Editar
                            </button>
                            <button onClick={() => excluirTarefa(tarefa.id)} className="botao-excluir">
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>

                {/* FORMULÁRIO DE CADASTRO/EDIÇÃO */}
                <div className="formulario">
                    <input
                        type="text"
                        placeholder="Nova tarefa..."
                        value={textoDigitado}
                        onChange={(e) => setTextoDigitado(e.target.value)}
                        className="campo-texto"
                    />

                    <button onClick={salvarTarefa} className="botao-principal">
                        {idEmEdicao !== null ? "Salvar" : "Adicionar"}
                    </button>

                    {idEmEdicao !== null && (
                        <button
                            onClick={() => { setIdEmEdicao(null); setTextoDigitado(""); }}
                            className="botao-cancelar"
                        >
                            Cancelar
                        </button>
                    )}
                </div>

            </div>

        </div>
    );
}