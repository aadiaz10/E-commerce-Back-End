# E-commerce-Back-End
E-commerce Back-End
Description
The E-commerce Back-End project is a Node.js application designed to manage an e-commerce platform's server-side operations. This project uses Express.js for routing, Sequelize ORM for database interactions, and PostgreSQL as the database system. It provides API endpoints for managing products, orders, and users, enabling the development of a fully functional e-commerce application.


Installation
Clone the repository:

bash
Copy code
git clone https://github.com/aadiaz10/E-commerce-Back-End
cd E-commerce-Back-End
Install dependencies: Ensure you have node and npm installed. Run:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root directory of the project and add your environment variables. Example:

env
Copy code
DB_HOST=localhost
DB_USER=your-username
DB_PASS=your-password
DB_NAME=ecommerce_db
Run migrations and seed the database:

bash
Copy code
npm run seed
Start the server:

bash
Copy code
npm start
or

bash
Copy code
node server.js

Testing
To test the API endpoints, you can use tools like Insomnia or Postman. Ensure that your server is running before performing the tests.

Contributing
Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test thoroughly.
Submit a pull request with a clear description of your changes.
License
This project is licensed under the MIT License - see the LICENSE file for details.

