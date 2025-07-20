# 1. Clona el repositorio
git clone <URL_DEL_REPO>
cd personal-library-with-auth

# 2. Instala dependencias del backend
cd backend
npm install

# 3. Crea el archivo .env en backend (si no existe)
# Ejemplo de contenido:
# MONGO_URI=mongodb://localhost:00000/personal_library
# JWT_SECRET=supersecretoexample
# PORT=0001

# 4. Inicia el backend
node server.js
# o con nodemon si lo tienes instalado:
# npx nodemon server.js

# 5. En otra terminal, instala dependencias del frontend
cd ../frontend
npm install

# 6. Inicia el frontend
npm run dev

# 7. Abre el navegador en http://localhost:5173
