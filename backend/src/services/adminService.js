const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.createAdmin = async (data) => {
	return await prisma.admin.create({
		data: {
			name: data.name,
			email: data.email,
			password: data.password, // ⚠️ hash this later with bcrypt
			role: data.role || "ADMIN"
		}
	});
};

exports.getAllAdmins = async () => {
	return await prisma.admin.findMany();
};

exports.getAdminById = async (id) => {
	return await prisma.admin.findUnique({ where: { id } });
};

exports.updateAdmin = async (id, data) => {
	return await prisma.admin.update({
		where: { id },
		data,
	});
};

exports.deleteAdmin = async (id) => {
	return await prisma.admin.delete({ where: { id } });
};
