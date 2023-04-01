import prisma from "./prisma";

export default async function getProducts(req, res) {
  try {
    const data = await prisma.product.findMany();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Products: " + error });
  }
}
