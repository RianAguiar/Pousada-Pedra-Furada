import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "../../pages/TarefasPage";

describe("TarefasPage", () => {
  it("deve renderizar a lista de tarefas", () => {
    render(<TarefasPage />);
    expect(screen.getByText("Tarefas do Dia")).toBeInTheDocument();
    expect(screen.getByText(/Arrumar quarto 101/)).toBeInTheDocument();
  });

  it("deve atualizar o status da tarefa ao clicar no botão Atualizar", () => {
    render(<TarefasPage />);
    const botao = screen.getAllByText("Atualizar")[0];
    fireEvent.click(botao);
    expect(screen.getByText(/Em andamento|Concluída/)).toBeInTheDocument();
  });
});
