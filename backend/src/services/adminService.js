const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createAdmin = async (data) => prisma.user.create({ data: { ...data, role: 'ADMIN' } });
exports.getAllAdmins = async () => prisma.user.findMany({ where: { role: 'ADMIN' } });
exports.getAdminById = async (id) => prisma.user.findUnique({ where: { id: Number(id), role: 'ADMIN' } });
exports.updateAdmin = async (id, data) => prisma.user.update({ where: { id: Number(id), role: 'ADMIN' }, data });
exports.deleteAdmin = async (id) => prisma.user.delete({ where: { id: Number(id), role: 'ADMIN' } });
