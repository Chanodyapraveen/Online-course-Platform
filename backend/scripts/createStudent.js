const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const email = 'student@example.com';
  const password = 'student123';
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const student = await prisma.user.create({
      data: {
        name: 'Student User',
        email,
        password: hashedPassword,
        role: 'STUDENT',
      },
    });
    console.log('Student user created:', student);
  } catch (err) {
    console.error('Error creating student:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();