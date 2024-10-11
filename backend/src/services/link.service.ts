import { prisma } from "../prisma";
import { CreateLink, UpdateLink } from "../types/link.types";

export function LinkService() {
  async function create(data: CreateLink) {
    return await prisma.link.create({
      data,
    });
  }

  async function update(id: string, data: UpdateLink) {
    return await prisma.link.update({
      where: {
        id,
      },
      data,
    });
  }

  async function remove(id: string) {
    return await prisma.link.delete({
      where: {
        id,
      },
    });
  }

  return {
    create,
    update,
    remove,
  };
}
