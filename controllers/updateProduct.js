import prisma from "./prisma";

export default async function updateProduct(req, res) {
  const { id } = req.query;
  const { name, price } = req.body;
  try {
    const data = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        price,
      },
    });
    if (!data) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error While Updating Product: " + error });
  }
}
