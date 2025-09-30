const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function listAdmins() {
  try {
    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN' },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    if (admins.length === 0) {
      console.log("❌ No admin users found in database");
    } else {
      console.log("✅ Found admin users:");
      console.log("==========================================");
      admins.forEach((admin, index) => {
        console.log(`${index + 1}. Name: ${admin.name}`);
        console.log(`   Email: ${admin.email}`);
        console.log(`   Role: ${admin.role}`);
        console.log(`   ID: ${admin.id}`);
        console.log(`   Created: ${admin.createdAt}`);
        console.log("------------------------------------------");
      });
    }
  } catch (error) {
    console.error("❌ Error fetching admin users:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

listAdmins();