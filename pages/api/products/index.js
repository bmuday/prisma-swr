import { getProducts, createProduct, deleteProducts } from "@/controllers";

export default async function handler(req, res) {
  // type of request
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
    case "POST":
      await createProduct(req, res);
      break;
    case "DELETE":
      await deleteProducts(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
