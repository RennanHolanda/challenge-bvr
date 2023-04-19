const { Request } = require("../models");

const RequestController = {
    index: async (req, res) => {
        try {
            const request = await Request.findAll();
            return res.send(request);
        } catch (error) {
            console.log(error);
        }
    },
    store: async (req, res) => {
        try {
            const { purchase_date,amont, status, total_value, product_id } = req.body
            
            const result = await Request.create({
                purchase_date: new Date(),
                amont,
                status,
                total_value,
                product_id
            })
            return res.send(result);
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            const { purchase_date,amont, status, total_value, product_id } = req.body
            const result = await Request.update(
            {
                purchase_date: new Date(),
                amont,
                status,
                total_value,
                product_id
            },
            {
                where: { id },
            }
            );
            return res.send("Pedido atualizado com sucesso!");
        } catch (error) {
            console.log(error)
        }

    },
    destroy: async (req, res) => {
        try {
            const { id } = req.params;

            await Request.destroy({
                where: { id },
            })
            return res.send("Pedido deletado!");
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = RequestController; 