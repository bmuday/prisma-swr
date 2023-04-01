import prisma from "./prisma";

export default async function deleteProduct(req, res) {
  const { id } = req.query;
  try {
    const data = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    if (!data) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error While Deleting Product: " + error });
  }
}
