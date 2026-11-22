# Publicar Juank Café en GitHub Pages

Esta aplicación usa Vite y React Router. El workflow de GitHub Actions construye el sitio, genera el fallback `404.html` para las rutas de la SPA y publica el contenido de `dist/`.

## 1. Crear el repositorio

En GitHub crea un repositorio **público** llamado, por ejemplo, `juank-cafe`. No marques las opciones para agregar README, `.gitignore` o licencia: el proyecto ya contiene sus archivos y así evitas un primer conflicto de Git.

## 2. Subir el proyecto

Abre una terminal dentro de la carpeta del proyecto, donde están `package.json` y `vite.config.ts`.

Si todavía no has inicializado Git en esa carpeta:

```bash
git init
git add .
git commit -m "Preparar sitio Juank Café para GitHub Pages"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
git push -u origin main
```

Reemplaza `TU_USUARIO` y `NOMBRE_REPO` por los valores reales de tu cuenta y del repositorio.

Si el proyecto **ya tiene Git configurado** y el remoto apunta al repositorio correcto, no repitas `git init` ni `git remote add`:

```bash
git add .
git commit -m "Actualizar sitio Juank Café"
git push
```

Puedes revisar el remoto configurado con `git remote -v`.

## 3. Activar GitHub Pages

En el repositorio de GitHub entra a **Settings → Pages → Build and deployment**. En **Source**, selecciona **GitHub Actions**. No selecciones `Deploy from a branch`.

## 4. Comprobar la publicación

Abre la pestaña **Actions**, entra al workflow **Deploy Juank Café to GitHub Pages** y verifica que termine correctamente. Al finalizar, GitHub mostrará la dirección publicada. Para un repositorio de proyecto suele tener esta forma:

```text
https://TU_USUARIO.github.io/NOMBRE_REPO/
```

El workflow detecta automáticamente `GITHUB_REPOSITORY` y configura el prefijo del repositorio. Para un repositorio especial `TU_USUARIO.github.io`, usa la raíz del dominio.

## 5. Publicar cambios posteriores

Cada actualización sigue el mismo ciclo:

```bash
git add .
git commit -m "Describir el cambio"
git push
```

El envío a la rama `main` activa el workflow. Revisa **Actions** para confirmar el despliegue.

## Desarrollo y comprobación local

Con Node.js LTS instalado, desde la carpeta del proyecto ejecuta:

```bash
npm ci
npm run dev
```

Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

El comando `build` ejecuta TypeScript, crea `dist/` y genera `dist/404.html`. En GitHub Actions se vuelve a copiar `dist/index.html` a `dist/404.html` antes de publicar.

## Seguridad

No subas archivos `.env`, claves API, contraseñas, tokens ni credenciales. No incluyas datos personales de clientes en el repositorio. Si en el futuro agregas variables secretas para un proceso de compilación, configúralas como **Actions secrets** y nunca las escribas directamente en el código.
