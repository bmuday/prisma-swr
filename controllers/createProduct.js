import prisma from "./prisma";

export default async function createProduct(req, res) {
  const { name, price } = req.body;
  console.log("body", name, price);
  try {
    const data = await prisma.product.create({
      data: {
        name,
        price,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: "Error While Creating Product: " + error });
  }
}
