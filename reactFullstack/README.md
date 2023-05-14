## This project is made up of two parts; the backend and the frontend.


## Technologies involved in the backend:
	bcrypt: 
		For password encryption
##      npm install bcrypt
	bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
        // Store hash in your password DB.
        });

	cors:
		To help make requests accessible from frontend
	express:
		The backend Framework/server for the project
	jsonwebtoken:
		For authentication
	mysql2:
		Mysql database
	sequelize:
		The ORM to interract with the mysql database
	sequelize-cli:
		The ORM the works with sequelize
	
## Technologies involved in the frontend:
	axios:
		It contains crud methods that help the frontend to communicate with the backend part of the application
	formik:
		A library that makes it easy to create a form in react application
	react:
		 The frontend framework for the application
	react-router-dom:
		It allows for the creation of links and  routes to other parts of the component
	yup:
		This library helps make formik validation for the application
