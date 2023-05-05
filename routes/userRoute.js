import  express from "express";
const router = express.Router();
import { Signup } from "../controllers/User/Signup.js";
import { Login } from "../controllers/User/Login.js";
import { updateBalance } from "../controllers/User/Fundwallet.js";
import {saveTransaction} from "../controllers/User/Transaction.js";
import {getTransactionByUser} from "../controllers/User/GetTransactionByUser.js";
import {InitializePayment} from "../controllers/User/InitializePayment.js";
import {Checkref} from "../controllers/User/Checkref.js";
import {paybackAmount} from "../controllers/User/Payback.js";
import {getAllUsers} from "../controllers/User/GetAllUsers.js";
import {getAllTransactions} from "../controllers/User/GetAllTransactions.js";
import {Suggestion} from "../controllers/User/Suggestion.js";
import {addProduct} from "../controllers/User/AddProduct.js";
import {getAllProducts} from "../controllers/User/GetAllProducts.js";
import {updateUser} from "../controllers/User/UpdateUser.js";
import {getUserById} from "../controllers/User/GetUserById.js";
import {createOrder} from "../controllers/User/CreateOrders.js";
import {paywithwallet} from "../controllers/User/Paywithwallet.js"
import { createAd } from "../controllers/User/CreateAd.js";
import { getAllAds } from "../controllers/User/GetAllAds.js";
import { createCategory } from '../controllers/Products/CreateCategory.js';
import { getAllCategory } from "../controllers/Products/GetAllCategory.js";
import { createSubCategory } from "../controllers/Products/CreateSubCategory.js";
import { getAllSubCategory } from "../controllers/Products/GetAllSubCategory.js";
import { deleteProduct } from "../controllers/Products/DeleteProduct.js";
import { deleteCategory } from "../controllers/Products/DeleteCategory.js";
import { deleteSubCategory } from "../controllers/Products/DeleteSubCategory.js";







//create user
router.post("/signup", Signup);

//login user
router.post("/login", Login);

//fund wallet
router.post("/fundwallet", updateBalance);

//save transaction
router.post("/saveTransaction", saveTransaction);

//get transaction by user
router.post("/getTransactionByUser", getTransactionByUser);

//initialize payment
router.post("/initializePayment", InitializePayment);

//check reference
router.post("/checkref", Checkref);

//payback amount
router.post("/payback", paybackAmount);

//get all users
router.get("/getAllUsers", getAllUsers);

// get user by id
router.post("/getUserById", getUserById);

// update user
router.post("/updateUser", updateUser);



//get all transactions
router.get("/getAllTransactions", getAllTransactions);

//waitlist
router.post("/suggestion", Suggestion);

//add product
router.post("/addProduct", addProduct);

//get all products
router.get("/getAllProducts", getAllProducts);

// delete product 
router.post("/deleteProduct", deleteProduct);




//create order
router.post("/createOrder",createOrder);

//paywithWallet 
// router.post("/payWithWallet",payWithWallet);

router.post("/paywithwallet", paywithwallet)

// create Ad 
router.post("/createad", createAd)

//get all adds 
router.get("/getallads", getAllAds)

// Category 

router.post("/createCategory", createCategory)
// get alll Catergory
router.get("/getAllCategory", getAllCategory)
// delete category
router.post("/deleteCategory", deleteCategory)





router.post("/createSubCategory", createSubCategory)
// get alll Catergory
router.get("/getAllSubCategory", getAllSubCategory)
// delete sub category 
router.post("/deleteSubCategory", deleteSubCategory)














export { router as userRoute };