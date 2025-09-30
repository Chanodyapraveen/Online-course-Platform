const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const email = 'admin@example.com';
  const password = 'admin123';
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const admin = await prisma.user.create({
      data: {
        name: 'Admin User',
        email,
        password: hashedPassword,
        role: 'ADMIN',
      },
    });
    console.log('Admin user created:', admin);
  } catch (err) {
    console.error('Error creating admin:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();