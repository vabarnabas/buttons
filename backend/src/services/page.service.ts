import { prisma } from "../prisma";
import { CreatePage, UpdatePage } from "../types/page.types";

export function PageService() {
  async function findById(id: string) {
    return await prisma.page.findUnique({
      where: {
        id,
      },
      include: {
        groups: {
          include: {
            links: true,
          },
        },
      },
    });
  }

  async function findByUserId(userId: string) {
    return await prisma.page.findMany({
      where: {
        userId,
      },
      include: {
        groups: {
          include: {
            links: true,
          },
        },
      },
    });
  }

  async function create(data: CreatePage & { userId: string }) {
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
    findById,
    findByUserId,
    create,
    update,
    remove,
  };
}
