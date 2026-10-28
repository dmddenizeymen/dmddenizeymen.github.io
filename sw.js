// Telefona "uygulama olarak yükle" özelliği için gerekli en küçük servis çalışanı.
// İsteklerin arasına hiç girmez (fetch dinleyicisi yok): sayfa doğrudan internetten gelir.
// Eskiden her isteği aracılık ederek alıyordu; bazı telefonlarda bu siyah ekranda takılmaya yol açıyordu.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
