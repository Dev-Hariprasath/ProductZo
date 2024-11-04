```markdown
# Product Management Application

## Overview
This repository contains a full-stack application for managing products, featuring a React frontend and a Spring Boot backend with a MySQL database. The application allows users to view, add, update, and organize products by category, providing a complete CRUD (Create, Read, Update, Delete) experience.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Product Listing**: View a categorized list of products.
- **Add Product**: Create new product entries.
- **Update Product**: Modify details of an existing product.
- **Product Details**: View detailed information of a product.
- **Responsive UI**: A user-friendly and modern interface built with React.

## Tech Stack
### Frontend
- **Framework**: React (React Router for routing)
- **Libraries**: 
  - `axios` for HTTP requests
  - `react-icons` for icons
  - `react-slick` and `slick-carousel` for carousel components
  - `tailwindcss` for styling
- **Dev Tools**:
  - ESLint for code quality
  - Vite for fast build and development

### Backend
- **Framework**: Spring Boot
- **Dependencies**:
  - `spring-boot-starter-data-jpa` for database interactions
  - `spring-boot-starter-web` for RESTful web services
  - `mysql-connector-j` for MySQL database connection
  - `lombok` for reducing boilerplate code
  - `spring-boot-devtools` for development tools

### Database
- **MySQL**: Relational database for storing product data.

## Installation and Setup
### Prerequisites
Ensure that you have the following installed:
- **Node.js** (for the frontend)
- **Java 11 or higher** (for the backend)
- **MySQL** (for database)

### Backend Setup
1. **Clone the repository** and navigate to the backend directory.
   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name/backend
   ```
2. **Configure MySQL Database**:
   - Create a database named `product_db` in your MySQL server.
   - Update `application.properties` with your MySQL credentials.
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/product_db
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     spring.jpa.hibernate.ddl-auto=update
     ```
3. **Build and Run**:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory.
   ```bash
   cd ../frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. Access the application at [http://localhost:3000](http://localhost:3000).

## Project Structure
### Frontend
- `src/`
  - `components/`: Reusable UI components like Navbar, Footer, ProductDetails, etc.
  - `Pages/`: Main pages such as HomePage.
  - `App.jsx`: Main application file that includes routing.

### Backend
- `src/main/java/com/productzo/productzo/`
  - `Model/`: Entity class `Product.java`.
  - `Repository/`: Interface `ProductRepo.java`.
  - `ProductzoApplication.java`: Main application class.

## Usage
### Add Product
Navigate to `/products/addProduct` and fill out the form to add a new product.

### Update Product
Navigate to `/products/update/:productId` and edit the product details. Submit to update.

### View Product List
The home page lists products, grouped by category. Click on a product to see details.

## API Endpoints
### Backend (Spring Boot)
- `GET /api/products`: Retrieve all products.
- `GET /api/products/{productId}`: Get details of a product by ID.
- `POST /api/addProduct`: Add a new product.
- `PUT /updateProduct`: Update an existing product.
- `DELETE /api/products/{productId}`: Delete a product by ID.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.
```
