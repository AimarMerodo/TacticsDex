# 🎯 TacticsDex

TacticsDex es una aplicación moderna diseñada para entrenadores Pokémon que buscan llevar su estrategia al siguiente nivel. Combina una Pokédex avanzada con un Constructor de Equipos (Team Builder) intuitivo y potente.

## 🚀 Stack Tecnológico

### 🎨 Frontend (Carpeta `/frontend`)
Una Single Page Application (SPA) construida con las últimas características de Angular:

* **Framework:** Angular 21+
* **Arquitectura:** Standalone Components & Signals (Sin NgModules).
* **Estilos:** Tailwind CSS (Diseño responsive y moderno).
* **Iconos:** Google Material Symbols.
* **Gestión de Estado:** Angular Signals y RxJS.
* **Datos:** Consumo optimizado de la PokeAPI.

### ⚙️ Backend (Carpeta `/BackEnd`)
Una API REST robusta construida con Laravel para la persistencia de datos:

* **Framework:** Laravel 11 (API Mode).
* **Base de Datos:** MySQL.
* **ORM:** Eloquent (Relaciones entre Usuarios, Equipos y Pokémon).
* **Seguridad:** Laravel Sanctum (Autenticación basada en Tokens).

## 📂 Estructura del Proyecto

```text
TacticsDex/
├── frontend/       # Código fuente de la aplicación Angular (Cliente)
├── BackEnd/        # Código fuente de la API Laravel (Servidor)
└── README.md       # Este archivo
```

## 🛠️ Instalación y Puesta en Marcha

Para correr este proyecto localmente, necesitarás tener instalado Node.js, PHP y Composer.

### 1. Configurar el Frontend (Angular)

```bash
# Entra en la carpeta del frontend
cd frontend

# Instala las dependencias de Node
npm install

# Inicia el servidor de desarrollo
ng serve
```
La aplicación estará disponible en: `http://localhost:4200`

### 2. Configurar el Backend (Laravel)

```bash
# Entra en la carpeta del backend
cd BackEnd

# Instala las dependencias de PHP
composer install

# Copia el archivo de entorno
cp .env.example .env

# Genera la clave de encriptación de Laravel
php artisan key:generate

# (Opcional) Configura tu base de datos en el archivo .env y ejecuta migraciones
# php artisan migrate

# Inicia el servidor de la API
php artisan serve
```
La API estará disponible en: `http://localhost:8000`

## ✨ Características Principales

* **Búsqueda Instantánea:** Motor de búsqueda optimizado cargando índices en memoria para filtrar resultados sin latencia.
* **Pokédex Detallada:** Visualización de tarjetas con tipos, estadísticas e imágenes de alta calidad (Official Artwork).
* **Paginación Inteligente:** Sistema de "Cargar más" para optimizar el rendimiento del DOM.
* **Team Builder:** (En desarrollo) Crea, edita y gestiona hasta 5 equipos de 6 Pokémon.
* **Sistema de Usuarios:** (Backend) Registro y login para guardar tus equipos en la nube.

## 📝 Licencia y Créditos

Este es un proyecto educativo y de portafolio creado por **Aimar**.

* Los datos e imágenes de Pokémon son proporcionados por **PokeAPI**.
* Pokémon y los nombres de los personajes son marcas comerciales de **Nintendo / Creatures Inc. / GAME FREAK inc.**

---
Hecho con ❤️ y mucho código.