'use server';

import { Stuff, Condition } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new stuff to the database.
 * @param stuff, an object with the following properties: name, quantity, owner, condition.
 */
export async function addStuff(stuff: { name: string; quantity: number; owner: string; condition: string }) {
  // console.log(`addStuff data: ${JSON.stringify(stuff, null, 2)}`);
  let condition: Condition = 'good';
  if (stuff.condition === 'poor') {
    condition = 'poor';
  } else if (stuff.condition === 'excellent') {
    condition = 'excellent';
  } else {
    condition = 'fair';
  }
  await prisma.stuff.create({
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition,
    },
  });
  // After adding, redirect to the list page
  redirect('/home');
}

/**
 * Adds a new stuff to the database.
 * @param feedback, an object with the following properties: name, response.
 */
export async function addFeedback(feedback: { name: string; response: string; }) {
  await prisma.feedback.create({
    data: {
      name: feedback.name,
      response: feedback.response,
    },
  });
  // After adding, redirect to the feedback page
  redirect('/feedback');
}

/**
 * Edits an existing stuff in the database.
 * @param stuff, an object with the following properties: id, name, quantity, owner, condition.
 */
export async function editStuff(stuff: Stuff) {
  // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.stuff.update({
    where: { id: stuff.id },
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition: stuff.condition,
    },
  });
  // After updating, redirect to the list page
  redirect('/list');
}

/**
 * Deletes an existing stuff from the database.
 * @param id, the id of the stuff to delete.
 */
export async function deleteStuff(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.stuff.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  redirect('/list');
}

/**
 * Adds a new stuff to the database.
 * @param post, an object with the following properties: title, image, author, time, content, likes, comments, owner.
 */
export async function makePost(post: {
  title: string; image: string; author: string;
  content: string; owner: string }) {
  // console.log(`addStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.post.create({
    data: {
      title: post.title,
      image: post.image,
      author: post.author,
      content: post.content,
      owner: post.owner,
    },
  });
  // After adding, redirect to the home page
  redirect('/home');
}

export async function likePost(id: number) {
  // console.log(`likePost id: ${id}`);
  try {
    await prisma.post.update({
      where: { id },
      data: {
        likes: { increment: 1 },
      },
    });
    // Optionally redirect after liking (if called from a server action)
    // redirect('/home');
  } catch (error) {
    console.error('Failed to like post:', error);
    redirect('/home');
  }
}

export async function CommentPost(id: number, user: string, comment: string) {
  try {
    if (!comment || comment.trim() === '') {
      throw new Error('Comment cannot be empty');
    }
    const combinedComment = `${user}: ${comment}`;
    await prisma.post.update({
      where: { id: Number(id) },
      data: { comments: { push: combinedComment } },
    });
  } catch (error) {
    console.error('Failed to add comment:', error);
    redirect('/home');
  }
}

/**
 * Deletes an existing stuff from the database.
 * @param id, the id of the stuff to delete.
 */
export async function deletePost(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.post.delete({
    where: { id },
  });
  // After deleting, redirect to the admin page
  redirect('/admin');
}

export async function makeClub(club: {
  name: string;
  description: string;
  creator: string;
  email: string;
  image: string;
}) {
  await prisma.club.create({
    data: {
      name: club.name,
      description: club.description,
      creator: club.creator,
      email: club.email,
      image: club.image,
    },
  });
}
export async function getAllClubs() {
  return prisma.club.findMany({
    orderBy: { createdAt: 'desc' },
  });
}
export async function updateClub(id: number, club: {
  name: string;
  description: string;
  creator: string;
  email: string;
  image: string;
}) {
  await prisma.club.update({
    where: { id },
    data: {
      name: club.name,
      description: club.description,
      creator: club.creator,
      email: club.email,
      image: club.image,
    },
  });
}
export async function deleteClub(id: number) {
  await prisma.club.delete({
    where: { id },
  });
}
/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
    },
  });
  redirect('/home');
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}
