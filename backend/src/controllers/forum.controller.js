const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllForumPosts = async (req, res) => {
  try {
    const posts = await prisma.forumPost.findMany();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getForumPostById = async (req, res) => {
  try {
    const post = await prisma.forumPost.findUnique({ where: { id: Number(req.params.id) } });
    if (!post) return res.status(404).json({ error: 'Forum post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createForumPost = async (req, res) => {
  try {
    const post = await prisma.forumPost.create({ data: req.body });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateForumPost = async (req, res) => {
  try {
    const post = await prisma.forumPost.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteForumPost = async (req, res) => {
  try {
    await prisma.forumPost.delete({ where: { id: Number(req.params.id) } });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
