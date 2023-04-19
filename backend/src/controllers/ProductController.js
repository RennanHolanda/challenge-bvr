const { Product } = require("../models");
const sequelize = require("sequelize");

const ProductController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll();
      return res.send(products);
    } catch (error) {
      console.log(error);
    }
  },

  store: async (req, res) => {
    try {
      const { title, description, value } = req.body;

      const result = await Product.create({
        title,
        description,
        value,
      });
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const { title, description, value } = req.body;
      const result = await Product.update(
        {
          title,
          description,
          value,
        },
        {
          where: { id },
        }
      );
      return res.send("Porduto atualizado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;

      await Product.destroy({
        where: {
          id: id,
        },
      });
      return res.send("Produto deletado");
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ProductController;
