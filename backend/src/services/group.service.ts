import { prisma } from "../prisma";
import { CreateGroup, UpdateGroup } from "../types/group.types";

export function GroupService() {
  async function create(data: CreateGroup) {
    return await prisma.group.create({
      data,
    });
  }

  async function update(id: string, data: UpdateGroup) {
    return await prisma.group.update({
      where: {
        id,
      },
      data,
    });
  }

  async function remove(id: string) {
    return await prisma.group.delete({
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
