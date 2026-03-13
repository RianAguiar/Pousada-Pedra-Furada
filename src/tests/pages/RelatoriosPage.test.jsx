import { render, screen } from "@testing-library/react";
import RelatoriosPage from "../../pages/RelatoriosPage";

describe("RelatoriosPage", () => {
  it("deve renderizar o título da página", () => {
    render(<RelatoriosPage />);
    expect(screen.getByText("Relatórios de Desempenho")).toBeInTheDocument();
  });

  it("deve renderizar os dados do relatório", () => {
    render(<RelatoriosPage />);
    expect(screen.getByText("Total de tarefas: 10")).toBeInTheDocument();
    expect(screen.getByText("Concluídas: 6")).toBeInTheDocument();
    expect(screen.getByText("Em andamento: 3")).toBeInTheDocument();
    expect(screen.getByText("Pendentes: 1")).toBeInTheDocument();
  });
});
