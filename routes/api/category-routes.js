const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// GET all categories; /api/categories/
router.get("/", (req, res) => {
	// find all categories
	// be sure to include its associated Products
	Category.findAll({
		attributes: ["id", "category_name"],
		include: {
			model: Product,
			attributes: ["product_name"],
		},
	})
		.then((dbCategoryData) => {
			res.json(dbCategoryData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// GET one category by id; /api/categories/:id
router.get("/:id", (req, res) => {
	// find one category by its `id` value
	// be sure to include its associated Products
	Category.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "category_name"],
		include: {
			model: Product,
			attributes: ["product_name"],
		},
	})
		.then((dbCategoryData) => {
			if (!dbCategoryData) {
				res.status(404).json({ message: "No category found with this id" });
				return;
			}
			res.json(dbCategoryData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// POST ceate a new category; /api/categories/
router.post("/", (req, res) => {
	// create a new category
	Category.create({
		category_name: req.body.category_name,
	})
		.then((dbCategoryData) => {
			res.json(dbCategoryData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// PUT update category by id; /api/categories/:id
router.put("/:id", (req, res) => {
	// update a category by its `id` value
	Category.update(
		{
			category_name: req.body.category_name,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	)
		.then((dbCategoryData) => {
			if (!dbCategoryData) {
				res.status(404).json({ message: "No category found with this id" });
				return;
			}

			res.json(dbCategoryData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// DELETE category by id; /api/categories/:id
router.delete("/:id", (req, res) => {
	// delete a category by its `id` value
	Category.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbCategoryData) => {
			if (!dbCategoryData) {
				res.status(404).json({ message: "No category found with this id" });
				return;
			}

			res.json(dbCategoryData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
