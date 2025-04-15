const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const pizza = await prisma.pizza.create({
            data: req.body
        });
        return res.status(201).json(pizza);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const pizza = await prisma.pizza.findMany();
    return res.json(pizza);
}

const readOne = async (req, res) => {
    try {
        const pizza = await prisma.pizza.findUnique({
            where: {
                pizza_id: Number(req.params.id)
            }
        });
        return res.json(pizza);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const pizza = await prisma.pizza.update({
            where: {
                pizza_id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(pizza);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.pizza.delete({
            where: {
                pizza_id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { 
    create, 
    read, 
    readOne, 
    update, 
    remove
};

