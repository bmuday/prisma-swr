import { getProduct, updateProduct, deleteProduct } from "@/controllers";

export default async function handler(req, res) {
  // type of request
  switch (req.method) {
    case "GET":
      getProduct(req, res);
      break;
    case "PUT":
      updateProduct(req, res);
      break;
    case "DELETE":
      deleteProduct(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
