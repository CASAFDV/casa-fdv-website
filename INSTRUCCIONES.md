# 🙏 CASA FDV - Iglesia Fuente de la Vida

## Sitio Web Institucional

### 📋 Requisitos Previos

Antes de ejecutar el proyecto, necesitas tener instalado:

1. **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
2. **Bun** (gestor de paquetes) - Instalar con:
   ```bash
   npm install -g bun
   ```

### 🚀 Instrucciones de Instalación

1. **Descomprimir el archivo**
   ```bash
   tar -xzvf CASA-FDV-Website.tar.gz
   cd my-project
   ```

2. **Instalar dependencias**
   ```bash
   bun install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   bun run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### 📁 Estructura del Proyecto

```
my-project/
├── public/
│   └── images/          # Imágenes del sitio (incluye tu logo)
├── src/
│   ├── app/
│   │   ├── page.tsx     # Página principal
│   │   ├── layout.tsx   # Layout general
│   │   └── globals.css  # Estilos globales
│   └── components/      # Componentes UI
├── package.json         # Dependencias
└── tailwind.config.ts   # Configuración de estilos
```

### 🎨 Características del Sitio

- **Barra de navegación negra** con tu logo
- **Colores del Pacto** (Rojo, Azul, Dorado metálicos oscuros)
- **9 secciones completas:**
  1. Inicio - Hero con imagen de congregación
  2. Sobre FDV - Misión, Visión y Pastoras
  3. Prédicas - Enlace a YouTube
  4. Ramas - 5 ministerios
  5. Discipulado - 5 niveles de formación
  6. Ranking Semanal - Estilo VS de box
  7. Voluntariado - Servolution
  8. Casa Hogar - Donaciones
  9. Contáctanos - Formulario de contacto

### ✏️ Personalización

- **Cambiar logo:** Reemplaza `public/images/logo-fdv.png`
- **Cambiar imágenes:** Reemplaza los archivos en `public/images/`
- **Modificar textos:** Edita `src/app/page.tsx`
- **Cambiar colores:** Edita las variables CSS en `src/app/globals.css`

### 📞 Soporte

Si tienes algún problema, verifica:
1. Que Node.js esté instalado correctamente (`node --version`)
2. Que Bun esté instalado (`bun --version`)
3. Que el puerto 3000 no esté siendo usado por otra aplicación

---

**¡Dios te bendiga! 🙏**
