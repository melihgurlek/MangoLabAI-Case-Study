# Task Management API - Mini Case Study

Bu proje in memory veri yapısı kullanan basit bir RESTful API servisidir.

## Kurulum ve Çalıştırma

Projeyi lokalinizde veya Docker üzerinden kolayca çalıştırabilirsiniz.
```markdown
### Lokal Ortamda Çalıştırma
```bash
# 1. Projeyi klonlayın.
git clone https://github.com/melihgurlek/MangoLabAI-Case-Study.git

# 2. Dependencyleri yükleyin
npm install

# 3. Geliştirme modunda başlatın
npm run dev

# Veya doğrudan production modunda başlatın
npm start

```

*Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.*

### Docker ile Çalıştırma

```bash
# İmajı oluşturun
docker build -t task-management-api .

# Containeri başlatın
docker run -p 3000:3000 task-management-api

```

### Testleri Çalıştırma

Projede ekstra kütüphane dependency yaratmamak için `assert` modülü ile unit testleri yazılmıştır.

```bash
npm test

```

---

## Geliştirme Süreci ve Alınan Kararlar

Vaka çalışmasında benden istenen gereksinimlere istinaden projeyi şekillendirirken aşağıdaki konulara odaklandım:

### 1. Nasıl Bir Yol İzledim?

* **MVP Yaklaşımı:** "In-memory" bir veritabanı istenmesine rağmen, tüm kodu tek bir `server.js` dosyasına yığmaktan kaçındım. Projeyi modüler ve teste uygun hale getirmek için Controller, Model ve Route katmanlarına ayırdım.
* **Bağımsızlık (Decoupling):** Express uygulamasının konfigürasyonu (`app.js`) ile uygulamanın portu dinlediği ana dosyayı (`server.js`) birbirinden ayırdım. Bu yaklaşım network katmanı olmadan kodun test edilebilmesini sağladı.

### 2. Odaklandığım Noktalar

* **Birim Test (Unit Test) Kararı:** Vaka çalışmasında ekstra (opsiyonel) olarak küçük bir test yazılması istenmişti. Basit bir in-memory API için Jest veya Supertest gibi ağır dependencyler eklemek yerine, Node.js'in kendi `assert` modülünü kullanarak zero-dependency ve hafif bir test yazmaya karar verdim.
* **Hata Yönetimi ve Geliştirici Deneyimi (DX):** `server.js` içerisinde en sık karşılaşılan port çakışması hatalarını (EADDRINUSE) yakalayan bir listener ekledim.
* **Docker Optimizasyonu:** `Dockerfile` içerisinde `node:20-alpine` kullanarak hafif bir imaj elde ettim. İmaj boyutunu küçük ve güvenli tutmak için `npm ci --omit=dev` komutuyla sadece production dependencylerinin kurulmasını sağladım.
* **Model Validasyonu:** İsteğe bağlı olsa da, API'ye hatalı veri girilmesini önlemek için Controller katmanında gelen `title` değişkenini denetleme mekanizmaları ekledim.

### 3. AI Araçlarını Hangi Aşamalarda Kullandım?

Geliştirme sürecini hızlandırmak ve best-practice'leri doğrulamak için yapay zeka araçlarını şu noktalarda kullandım:

* Uygulamanın temel klasör düzeni ve katmanların (MVC) sorumluluk sınırlarını doğrulamak için bir yardımcı olarak.
* Boilerplate konfigürasyon dosyalarının (örneğin `.dockerignore` kuralları ve standart Express sunucu ayağa kaldırma blokları) hızlıca oluşturulması için.
