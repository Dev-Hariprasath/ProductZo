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
