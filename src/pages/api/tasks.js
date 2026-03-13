// src/pages/api/tasks.js
// Rota RESTful para gerenciamento de tarefas
// GET    /api/tasks    → lista todas as tarefas
// POST   /api/tasks    → cria uma nova tarefa
// PUT    /api/tasks    → atualiza uma tarefa
// DELETE /api/tasks    → remove uma tarefa

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      // TODO: buscar tarefas do banco via Prisma
      res.status(200).json({ tarefas: [] });
      break;

    case "POST":
      // TODO: criar tarefa no banco via Prisma
      const { titulo, descricao, local, prioridade, gestorId } = req.body;
      res.status(201).json({ mensagem: "Tarefa criada com sucesso." });
      break;

    case "PUT":
      // TODO: atualizar tarefa no banco via Prisma
      res.status(200).json({ mensagem: "Tarefa atualizada com sucesso." });
      break;

    case "DELETE":
      // TODO: remover tarefa no banco via Prisma
      res.status(200).json({ mensagem: "Tarefa removida com sucesso." });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Método ${method} não permitido.`);
  }
}
