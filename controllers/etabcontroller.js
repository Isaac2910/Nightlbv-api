import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createEtablissement = async (req, res) => {
  const { nomEtablissement, adress, quartier, tel, horaires, tarif, ambiance, servicesProposes } = req.body;
  const etablissement = await prisma.etablissement.create({
    data: { nomEtablissement, adress, quartier, tel, horaires, tarif, ambiance, servicesProposes },
  });
  res.json(etablissement);
};

export const getEtablissements = async (req, res) => {
  const etablissements = await prisma.etablissement.findMany();
  res.json(etablissements);
};

export const getEtablissementById = async (req, res) => {
  const { id } = req.params;
  const etablissement = await prisma.etablissement.findUnique({
    where: { id: Number(id) },
  });
  res.json(etablissement);
};

export const updateEtablissement = async (req, res) => {
  const { id } = req.params;
  const { nomEtablissement, adress, quartier, tel, horaires, tarif, ambiance, servicesProposes } = req.body;
  const etablissement = await prisma.etablissement.update({
    where: { id: Number(id) },
    data: { nomEtablissement, adress, quartier, tel, horaires, tarif, ambiance, servicesProposes },
  });
  res.json(etablissement);
};

export const deleteEtablissement = async (req, res) => {
  const { id } = req.params;
  await prisma.etablissement.delete({
    where: { id: Number(id) },
  });
  res.json({ message: "Etablissement deleted successfully" });
};
