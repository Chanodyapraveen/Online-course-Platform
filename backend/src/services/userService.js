const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.createUser = async (data) => prisma.user.create({ data });
exports.getAllUsers = async () => prisma.user.findMany();
exports.getUserById = async (id) => prisma.user.findUnique({ where: { id: Number(id) } });
exports.getUserByEmail = async (email) => prisma.user.findUnique({ where: { email } });
exports.updateUser = async (id, data) => prisma.user.update({ where: { id: Number(id) }, data });
exports.deleteUser = async (id) => prisma.user.delete({ where: { id: Number(id) } });
