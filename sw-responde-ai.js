// Service Worker básico para PWA do Responde AI

self.addEventListener('install', event => {
  // Pode adicionar pré-cache aqui se quiser
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('fetch', event => {
  // Estratégia bem simples: deixa o navegador cuidar de tudo
});
