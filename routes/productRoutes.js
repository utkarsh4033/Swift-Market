import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  // brainTreeController,
  // brainTreePaymentController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountControoler,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductCOntroller,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//  get products
router.get("/get-product", getProductController);
//  single product
router.get("/get-product/:slug", getSingleProductController);
// get photo
router.get("/product-photo/:pid", productPhotoController);
// delete router
router.delete("/delete-product/:pid", deleteProductController);
// update router
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
// Filter product
router.post("/product-filter", productFilterController);
router.get("/product-count", productCountControoler);
router.get('/product-list/:page',productListController)
router.get('/search/:keyword',searchProductCOntroller)
router.get('/related-product/:pid/:cid', relatedProductController)
router.get('/product-category/:slug', productCategoryController)
// paymenty routes
// router.get('/braintree/token',brainTreeController)
// router.post('/braintree/payment',requireSignIn,brainTreePaymentController)
export default router;
