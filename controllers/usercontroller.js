import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  const { nomUser, prenom, email, age, sexe, goutMusical, boisson } = req.body;
  const user = await prisma.user.create({
    data: { nomUser, prenom, email, age, sexe, goutMusical, boisson },
  });
  res.json(user);
};

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nomUser, prenom, email, age, sexe, goutMusical, boisson } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { nomUser, prenom, email, age, sexe, goutMusical, boisson },
  });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json({ message: "User deleted successfully" });
};
