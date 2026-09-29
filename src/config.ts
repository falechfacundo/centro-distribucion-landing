// URL del producto deployado (app). Cambiar con PUBLIC_APP_URL o acá.
export const APP_URL: string = import.meta.env.PUBLIC_APP_URL ?? 'https://flowboard.vercel.app';
export const REGISTER_URL = `${APP_URL}/register`;
export const LOGIN_URL = `${APP_URL}/login`;
// Email de contacto que se muestra en el sitio. Reemplazar por el real.
export const CONTACT_EMAIL: string = import.meta.env.PUBLIC_CONTACT_EMAIL ?? 'hola@flowboard.app';
export const SITE_NAME = 'FlowBoard';
