# 🚀 API REST de Productos

Backend desarrollado con **Node.js, Express y PostgreSQL**, siguiendo buenas prácticas de arquitectura (routes, controllers, services) y validación de datos con **Joi**.

---
🌐 **Demo en vivo:**
GET:

 https://mi-api-pg.onrender.com/productos
 
---

## 🧠 Descripción

Esta API permite gestionar un catálogo de productos mediante operaciones CRUD completas:

* 📦 Crear productos (POST)
* 🔍 Listar productos (GET All)
* 🆔 Obtener producto por ID (GET by ID)
* 📝 Actualizar productos (PUT)
* 🗑️ Eliminar productos (DELETE)

Incluye:

* Conexión a base de datos PostgreSQL
* Validaciones robustas con Joi
* Middleware reutilizable
* Manejo centralizado de errores
* Estructura escalable tipo backend profesional

---

## 🏗️ Arquitectura del proyecto

```
mi-api-pg-rcs/
│
├── server.js
├── db.js
│
├── routes/
│   └── productos.routes.js
│
├── controllers/
│   └── productos.controller.js
│
├── services/
│   └── productos.service.js
│
├── validators/
│   └── productos.validator.js
│
├── middlewares/
│   ├── validate.middleware.js
│   └── error.middleware.js
```

---

## ⚙️ Tecnologías utilizadas

* Node.js
* Express.js
* PostgreSQL
* Joi
* dotenv

---

## 🔐 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=3000

CORS_ORIGIN=http://localhost:3000,http://mydomain.com

DATABASE_URL=postgresql://USER:PASSWORD@HOST/DATABASE

DB_SSL_REJECT_UNAUTHORIZED=false
```

> ⚠️ No subir este archivo al repositorio (`.gitignore`).

---

## ▶️ Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/TU-USUARIO/TU-REPO.git
cd TU-REPO
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el servidor:

```bash
npm start
```

Servidor disponible en:

```
http://localhost:3000
```

---

## 🧪 Endpoints

### 📦 Obtener todos los productos

```
GET /productos
```

---

### 🔍 Obtener producto por ID

```
GET /productos/:id
```

---

### ➕ Crear producto

```
POST /productos
```

Body:

```json
{
  "nombre": "Mouse",
  "precio": 20
}
```

---

### ✏️ Actualizar producto

```
PUT /productos/:id
```

Body:

```json
{
  "nombre": "Teclado mecánico",
  "precio": 40
}
```

---

### 🗑️ Eliminar producto

```
DELETE /productos/:id
```

---

## ✅ Validaciones

Se implementan validaciones con **Joi**:

* Nombre obligatorio (mínimo 3 caracteres)
* Precio positivo
* Rechazo de campos no permitidos

---

## 🛡️ Manejo de errores

* Middleware centralizado
* Respuestas HTTP claras (400, 404, 500)
* Separación de responsabilidades

---

## 🌐 Deploy

La API está preparada para ser desplegada en servicios como:

* Render
* Railway

Incluye configuración para variables de entorno y conexión remota a PostgreSQL.

---

## 📌 Próximas mejoras

* 🔐 Autenticación con JWT
* 👥 Roles de usuario
* 📄 Documentación con Swagger
* 🧪 Tests automatizados

---

## 👩‍💻 Autor

**Magally Silva**


* 💼 LinkedIn: https://www.linkedin.com/in/magallys/
* 💻 GitHub: https://github.com/magysil

---

## ⭐ Notas

Este proyecto fue desarrollado como práctica para fortalecer habilidades en:

* Desarrollo backend
* Arquitectura de APIs
* Manejo de bases de datos
* Buenas prácticas de código

---

✨ *Proyecto en constante evolución*
