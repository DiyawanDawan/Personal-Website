/* eslint-disable no-undef */
// sitemap-generator.js
const { createRoutesFromElements, Route } = require('react-router-dom');
const Router = require('react-router-sitemap').default;
const path = require('path');
const { default: MainLayout } = require('./src/layouts/MainLayout');
const { default: HomePage } = require('./src/page/HomePage');
const { default: ProyeksPage } = require('./src/page/ProyeksPage');
const { default: ServicesPage } = require('./src/page/ServicesPage');
const { default: SertifikasiPage } = require('./src/page/SertifikasiPage');
const { default: ProyekPage } = require('./src/page/ProyekPage');
const { default: EditProyekPage } = require('./src/page/EditJProyekPage');
const { default: AddProyekPage } = require('./src/page/AddProyekPage');
const { default: NotFoudPage } = require('./src/page/NotFoudPage');


// Routes used in the application
const routes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/proyek" element={<ProyeksPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/chertification" element={<SertifikasiPage />} />
    <Route path="/proyek/:id" element={<ProyekPage />} />
    <Route path="/edit-job/:id" element={<EditProyekPage />} />
    <Route path="/add-job" element={<AddProyekPage />} />
    <Route path="*" element={<NotFoudPage />} />
  </Route>
);

// Generate sitemap.xml inside the public folder
new Router(routes)
  .build('https://awancode.netlify.app')  // Replace with your domain
  .save(path.resolve(__dirname, 'public/sitemap.xml'));
