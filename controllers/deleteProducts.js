import prisma from "./prisma";

export default async function deleteProducts(req, res) {
  try {
    const data = await prisma.product.deleteMany();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error1: "Error While Deleting Products: " + error });
  }
}
