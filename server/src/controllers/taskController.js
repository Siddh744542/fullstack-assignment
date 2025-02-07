import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new task
export const createTask = async (req, res) => {
  try {
    const { task_name, task_description, due_date, status } = req.body;
    if (!task_name || !task_description) {
      return res
        .status(400)
        .json({ error: "Task name and description are required" });
    }
    const task = await prisma.task.create({
      data: {
        task_name,
        task_description,
        due_date: due_date ? new Date(due_date) : null,
        status,
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task_name, task_description, due_date, status } = req.body;
    const task = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        task_name,
        task_description,
        due_date: due_date ? new Date(due_date) : null,
        status,
      },
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
