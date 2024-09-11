const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// GET a single category by id
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: [Product],
  })
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json(category);
    })
    .catch((err) => res.status(500).json(err));
});

// POST a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(201).json(category))
    .catch((err) => res.status(400).json(err));
});

// PUT update a category by id
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((rowsUpdated) => {
      if (rowsUpdated[0] === 0) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json({ message: 'Category updated successfully' });
    })
    .catch((err) => res.status(400).json(err));
});

// DELETE a category by id
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json({ message: 'Category deleted successfully' });
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
