import { prisma } from "../prisma";
import { CreatePage, UpdatePage } from "../types/page.types";

export function PageService() {
  async function findAll() {
    return await prisma.page.findMany();
  }

  async function findById(id: string) {
    return await prisma.page.findUnique({
      where: {
        id,
      },
      include: {
        groups: true,
      },
    });
  }

  async function findByUserId(userId: string) {
    return await prisma.page.findMany({
      where: {
        userId,
      },
      include: {
        groups: true,
      },
    });
  }

  async function create(data: CreatePage) {
    return await prisma.page.create({
      data,
    });
  }

  async function update(id: string, data: UpdatePage) {
    return await prisma.page.update({
      where: {
        id,
      },
      data,
    });
  }

  async function remove(id: string) {
    return await prisma.page.delete({
      where: {
        id,
      },
    });
  }

  return {
    findAll,
    findById,
    findByUserId,
    create,
    update,
    remove,
  };
}
