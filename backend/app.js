const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const users = [{ id: 1, name: 'John Doe' }];
let courses = [];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/courses', (req, res) => {
  res.json(Array.isArray(courses) ? courses : []);
});

app.post('/api/courses', upload.single('image'), (req, res) => {
  const { title, description, category, price } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
  const course = {
    id: Date.now(),
    title,
    description,
    category,
    price,
    imageUrl,
    approved: false
  };
  courses.push(course);
  res.status(201).json(course);
});

app.put('/api/courses/:id/approve', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (course) {
    course.approved = true;
    res.json(course);
  } else {
    res.status(404).json({ error: 'Course not found' });
  }
});

app.listen(5000, () => console.log('Backend running on port 5000'));
