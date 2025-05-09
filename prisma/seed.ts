import { PrismaClient, Role, Condition } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Checking defaultClubs:');
  console.log('Seeding the databasedb');
  const password = await hash('changeme', 10);
  config.defaultAccounts.forEach(async (account) => {
    const role = account.role as Role || Role.USER;
    console.log(`  Creating user: ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        password,
        role,
      },
    });
    // console.log(`  Created user: ${user.email} with role: ${user.role}`);
  });
  for (const data of config.defaultPosts) {
    const likes = 0;
    const comments: string[] = [];
    console.log(`  Adding Post: ${JSON.stringify(data)}`);
    // eslint-disable-next-line no-await-in-loop
    await prisma.post.upsert({
      where: {
        id: config.defaultPosts.indexOf(data) + 1,
      },
      update: {},
      create: {
        title: data.title,
        owner: data.owner,
        image: data.image,
        content: data.content,
        author: data.author,
        likes,
        comments,
      },
    });
  }
  for (const data of config.defaultClubs) {
    console.log(`  Adding club: ${JSON.stringify(data)}`);
    // eslint-disable-next-line no-await-in-loop
    await prisma.club.upsert({
      where: {
        id: config.defaultClubs.indexOf(data) + 1,
      },
      update: {},
      create: {
        name: data.name,
        description: data.description,
        creator: data.creator,
        email: data.email,
        image: data.image,
      },
    });
  }
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
