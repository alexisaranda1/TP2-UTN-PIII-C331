
CREATE SCHEMA `ElectroTech` DEFAULT CHARACTER SET utf8;

USE `ElectroTech`;

CREATE TABLE `marca` ( 
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` TEXT,
  `createAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updateAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `producto` ( 
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` TEXT,
  `imagen` VARCHAR(255), 
  `precio` DECIMAL(10,2) NOT NULL,
  `categoria` VARCHAR(50),
  `estado` ENUM('activo', 'inactivo') DEFAULT 'activo',
  `marcaId` INT NOT NULL,
  `createAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updateAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`marcaId`) REFERENCES `marca`(`id`) ON DELETE CASCADE 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `marca` (`nombre`, `descripcion`, `createAt`, `updateAt`) 
VALUES 
('Samsung', 'Marca líder en tecnología, especialmente en dispositivos móviles y electrodomésticos.', '2024-11-25 17:49:44', '2024-11-25 17:49:44'),
('Apple', 'Famosa por sus productos innovadores como el iPhone, MacBooks, y iPads.', '2024-11-25 17:53:26', '2024-11-25 17:53:26'),
('Sony', 'Reconocida mundialmente por sus productos electrónicos, como televisores, cámaras y consolas de videojuegos.', '2024-11-25 17:53:38', '2024-11-25 17:53:38'),
('LG', 'Marca coreana conocida por sus electrodomésticos y productos electrónicos de alta calidad.', '2024-11-25 17:54:07', '2024-11-25 17:54:07'),
('Bosch', 'Especializada en la fabricación de herramientas eléctricas y electrodomésticos.', '2024-11-25 17:54:22', '2024-11-25 17:54:22');


INSERT INTO `producto` (`nombre`, `descripcion`, `imagen`, `precio`, `categoria`, `estado`, `marcaId`, `createAt`, `updateAt`) 
VALUES 
('Cafetera Bosch Tassimo', 'Cafetera Bosch Tassimo con sistema de cápsulas para preparar bebidas de café.', 'https://storage.googleapis.com/catalog-pictures-carrefour-es/catalog/pictures/hd_510x_/4242005453511_1.jpg', 123.99, 'Electrodomésticos', 'activo', 5, '2024-11-26 03:34:16', '2024-11-26 03:34:16'),
('Aspiradora Dyson V11', 'Aspiradora inalámbrica con potente succión para limpiar todo tipo de superficies.', 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_133678614?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402', 599.99, 'Electrodomésticos', 'activo', 4, '2024-11-26 00:36:19', '2024-11-26 03:46:00'),
('Parlante Bluetooth JBL Charge 5', 'Parlante portátil con sonido de alta calidad y resistencia al agua.', 'https://www.jbl.es/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa45142d3/pdp/JBL_Charge_5_Lifestyle1_904x560px.png?sw=904&sh=560', 179.99, 'Electrónica', 'activo', 1, '2024-11-26 03:49:16', '2024-11-26 03:49:16'),
('Notebook Dell Inspiron 15', 'Portátil con procesador Intel Core i5, 8GB RAM y SSD de 256GB.', 'https://acdn.mitiendanube.com/stores/001/160/892/products/1650391931_71jrnwixkbs-_ac_sl1500_1-4a28cf58bde866e7cc16891099493441-640-0.jpg', 749.99, 'Computadoras', 'activo', 2, '2024-11-27 01:39:06', '2024-11-27 01:39:06');
