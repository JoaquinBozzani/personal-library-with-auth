# ----- Personal Library with Authentication ----- #
## General Description
This application allows users to manage their personal library of books. Users can register, log in, add books, mark them as read/unread, delete them, and access their library privately. It includes authentication, protected routes, and dark mode.

## Technologies Used
- **Frontend:** React
- **Backend:** Node.js, Express, MongoDB

## Installation and Execution Instructions

### 1. Clone the repository
```bash
git clone <REPO_URL>
cd personal-library-with-auth
```

### 2. Set up and run the backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder with the following content:
```
MONGO_URI=mongodb://localhost:27017/personal_library
JWT_SECRET=secretexample
PORT=5000
```
Make sure MongoDB is running locally. Then run:
```bash
node server.js
```

### 3. Set up and run the frontend
```bash
cd ../frontend
npm install
npm run dev
```
Open your browser at [http://localhost:5173]

## Other relevant information
- The frontend and backend run as independent servers..
- The project uses global CSS variables for easy style and theme customization.
- Dark mode and session preference are saved in the user's browser and can be accessed by clicking the "Settings" button.

---------------------------------------------------------------------------

# ----- Biblioteca Personal con Autenticación ----- #

## Descripción General
Esta aplicación permite a los usuarios gestionar su biblioteca personal de libros. Los usuarios pueden registrarse, iniciar sesión, agregar libros, marcarlos como leídos/no leídos, eliminarlos y acceder a su biblioteca de forma privada. Incluye autenticación, rutas protegidas y modo oscuro.

## Tecnologías Utilizadas
- **Frontend:** React
- **Backend:** Node.js, Express, MongoDB

## Instrucciones de Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPO>
cd personal-library-with-auth
```

### 2. Configurar y ejecutar el backend
```bash
cd backend
npm install
```
Crea un archivo `.env` en la carpeta `backend` con el siguiente contenido:
```
MONGO_URI=mongodb://localhost:27017/personal_library
JWT_SECRET=secretexample
PORT=5000
```
Asegúrate de tener MongoDB corriendo localmente. Luego ejecuta:
```bash
node server.js
```

### 3. Configurar y ejecutar el frontend
```bash
cd ../frontend
npm install
npm run dev
```
Abre el navegador en [http://localhost:5173]

## Otros datos relevantes
- El frontend y backend funcionan como servidores independientes.
- El proyecto utiliza variables CSS globales para facilitar la personalización de estilos y temas.
- El modo oscuro y la preferencia de sesión se guardan en el navegador del usuario y se puede acceder apretando el botón "Settings".
