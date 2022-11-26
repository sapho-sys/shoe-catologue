import express from "express";
import exphbs from "express-handlebars";
import session from "express-session";
import bodyParser from "body-parser";
import flash from "express-flash";
import DataFactory from "./services/data-factory.js";
import ShoeAPI from "./shoe_api/products_api.js";
import ProductService from "./routes/routes.js";
import pgPromise from "pg-promise";
const app = express();
const pgp = pgPromise({});

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:sap123@localhost:5432/my_shoes';

const config = { 
	connectionString
}

if (process.env.NODE_ENV == 'production') {
	config.ssl = { 
		rejectUnauthorized : false
	}
}

const db = pgp(config);

//config express as middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//css public in use
app.use(express.static('public'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

// initialise session middleware - flash-express depends on it
app.use(session({
    secret: 'djfhsdflbasf',
    resave: false,
    saveUninitialized: true   
}));

// initialise the flash middleware
app.use(flash());


const dataFactory = DataFactory(db);
const ProductRoute = ProductService(dataFactory,db);
const shoeAPI = ShoeAPI(dataFactory);

//API end-points
app.get('/api/shoes', shoeAPI.getData);
app.get('/api/shoes/size/:size', shoeAPI.getBySize);
app.get('/api/shoes/brand/:brand', shoeAPI.getByBrand);
app.get('/api/shoes/color/:color', shoeAPI.getByColor);
app.get('/api/shoes/color/:color/brand/:brand/size/:size', shoeAPI.getByAll);


app.get('/', ProductRoute.fetchData);
app.get('/products/shoes/size/:size', ProductRoute.fetchBySize);
app.get('/products/shoes/brand/:brand', ProductRoute.fetchByBrand);
app.get('/products/shoes/color/:color', ProductRoute.fetchByColor);
app.get('/products/shoes/color/:color/brand/:brand/size/:size', ProductRoute.fetchByAll);




//start the server
const PORT = process.env.PORT || 3012;

app.listen(PORT, function () {
    console.log("App running at http://localhost:" + PORT)
});