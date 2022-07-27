-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: buenafusion
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nameCategory` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Libros en general'),(2,'Suspenso'),(3,'Terror'),(4,'Novela');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_FK` (`estado_id`),
  CONSTRAINT `orders_FK` FOREIGN KEY (`estado_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_products`
--

DROP TABLE IF EXISTS `orders_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(45) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_products_FK` (`order_id`),
  KEY `orders_products_FK_1` (`product_id`),
  CONSTRAINT `orders_products_FK` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `orders_products_FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_products`
--

LOCK TABLES `orders_products` WRITE;
/*!40000 ALTER TABLE `orders_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `discount` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `stock` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`category_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Corazon-Delator',2700,'Libro autentico, edicion limitada',1,10,'1656372396011_img_.jpg',1),(2,'El Principito editado devuelta',4500,'Libro El Principito, edicion limitada',1,20,'1656372490104_img_.jpg',1),(3,'Harry Potter',1500,'Libro HArry Potter, edicion limitada',1,10,'1656372532967_img_.jpg',1),(4,'La Bella Durmiente',7000,'La bella durmiente un cuento de fantasías.',1,10,'1656367204403_img_.jpg',1),(6,'El psicoanalista - John Katzenbach',3099,'«Feliz aniversario, doctor. Bienvenido al primer día de su muerte.»\r\n\r\n\r\n\r\nAsí comienza el anónimo que recibe el psicoanalista Frederick Starks, y que le obliga a emplear toda su astucia y rapidez para, en quince días, averiguar quién es el autor de esa amenazadora misiva que promete hacerle la vida imposible.\r\n\r\nDe no conseguir su objetivo, deberá elegir entre suicidarse o ser testigo de cómo, uno tras otro, sus familiares y conocidos mueren por obra de un psicópata decidido a llevar hasta el final su sed de venganza.\r\n\r\nDando un inesperado giro a la relación entre médico y paciente, John Katzenbach nos ofrece una novela emblemática del mejor suspense psicológico.',1,10,'1656377676864_img_.png',1),(7,'El mal menor - C E Feiling',3000,'Inés Gaos advierte que cuando un acontecimiento extraño irrumpe en su vida parece precipitar una serie. Las fuerzas del bien y del mal comienzan a disputarse los territorios compartidos a veces por la vigilia y el sueño. Nelson Floreal, un cincuentón florido que habita el barrio de San Cristóbal, no es ajeno a los hechos. El mal de esta novela de C. E. Feiling, aun el mal menor, es enorme. Inevitable, secreto y concreto: avasallante. Ocupa cada partícula de la realidad que la ficción trata de proteger o aislar. Leerla es encontrar un espacio y un género deshabitados por la novela argentina: el terror, cuya dramática emergencia se encarga la novela de C. E. Feiling de subrayar. ¿O de atenuar? Desde la primera insinuación (“Los tacos, los taquitos”) con que surge hasta las de la extrema tragedia (un vuelo nocturno por la ciudad de Buenos Aires) con las que precipita su conclusión, El mal menor establece las leyes de un género en el que tanto la ambigüedad como la arbitrariedad se alternan o superponen. El mal, su caudaloso régimen de variantes de grado y malas noticias, ocupa todo, hasta las predicciones, sobre todo las buenas intenciones; acaso y por sobre todas las cosas, los acontecimientos.',1,10,'1656377398820_img_.png',1),(8,'La manada - Maria del Mar Ramon',2090,'¿Hasta dónde somos capaces de llegar por pertenecer?\r\n\r\nHache lleva poco menos de un año en su nuevo colegio -masculino, religioso- y se acerca a los chicos más rebeldes del grupo. Como cualquier adolescente en busca de pertenencia, hace todo lo posible para ser aceptado por ellos, sin saber qué significará eso para su destino.\r\n\r\nUn jueves a la tarde, después de un trabado partido de fútbol en el colegio, borrachos y enardecidos, los amigos deciden vengarse de uno de los jugadores rivales. Sin que Hache comprenda bien cómo ni por qué, una serie de hechos vertiginosos culmina en un acto grupal que tendrá consecuencias irreparables.\r\n\r\nDespués de su ensayo Coger y comer sin culpa. El placer es feminista, María del Mar Ramón construye una ficción alrededor de un ataque en manada que involucra al protagonista y a su mejor amigo. Esta exploración novelística de las motivaciones y las frustraciones de un puñado de muchachos extraviados es, al mismo tiempo, el retrato de una sociedad horrorizada ante la imagen que le devuelve el espejo deforme de la violencia.',1,10,'1656378072909_img_.png',1),(9,'A fuego lento - Paula Hawkins',2860,'Con la misma intensidad con la que ha cautivado a 27 millones de lectores en todo el mundo la autora de La chica del tren, Paula Hawkins, nos ofrece un brillante thriller sobre las heridas que provocan los secretos que ocultamos.\r\n\r\n\r\n\r\nEl descubrimiento del cuerpo de un joven asesinado brutalmente en una casa flotante de Londres desencadena sospechas sobre tres mujeres. Laura es la chica conflictiva que quedó con la víctima la noche en que murió; Carla, aún de luto por la muerte de un familiar, es la tía del joven; y Miriam es la indiscreta vecina que oculta información sobre el caso a la policía. Tres mujeres que no se conocen, pero que tienen distintas conexiones con la víctima. Tres mujeres que, por diferentes razones, viven con resentimiento y que, consciente o inconscientemente, esperan el momento de reparar el daño que se les ha hecho.\r\n\r\nMira lo que has provocado.',1,10,'1656378294545_img_.png',1),(10,'La chica del tren - Paula Hawkins',1950,'El thriller que se ha convertido en un fenómeno editorial en todo el mundo.\r\n\r\nRachel toma siempre el tren de las 8.04 h. Cada mañana lo mismo: el mismo paisaje, las mismas casas… y la misma parada en la señal roja. Son solo unos segundos, pero le permiten observar a una pareja que desayuna tranquilamente en su terraza. Siente que los conoce y se inventa unos nombres para ellos: Jess y Jason. Su vida es perfecta, no como la suya. Pero un día ve algo. Sucede muy deprisa, pero es suficiente. ¿Y si Jess y Jason no son tan felices como ella cree? ¿Y si nada es lo que parece?',1,10,'1656378487016_img_.png',1),(11,'El hogar de niñas indeseadas - Joanna Goodman',2690,'Philomena y El tren de los huérfanos confluyen en esta desgarradora historia sobre el lazo irrompible entre una madre y su hija. Una novela inspirada en hechos reales.\r\n\r\n\r\n\r\nEn el Quebec de los años cincuenta, los franceses y los ingleses se toleran a duras penas.\r\n\r\nMaggie es hija de un angloparlante y de una francocanadiense, y entre las ambiciones de su padre no existe la posibilidad de que su hija se case con Gabriel Phénix, un joven francés y de clase baja, que vive en la granja de al lado. Sin embargo, el corazón de Maggie le pertenece por completo. Cuando Maggie se queda embarazada a los quince años, sus padres la obligan a dar en adopción a Elodie apenas nace, para «reencaminar» su vida.\r\n\r\nElodie crece en el «hogar de niñas indeseadas», un sitio al que van todos los bebés nacidos «en pecado», que forma parte del empobrecido sistema de orfanatos de Quebec.\r\n\r\nLa vida de Elodie es bastante inestable y da un giro trágico cuando ella y miles de huérfanos son declarados enfermos mentales como consecuencia de una nueva ley que provee más fondos para los hospitales psiquiátricos que para los orfanatos.\r\n\r\nMaggie, que ahora está casada con un banquero que desea empezar una familia, no puede olvidar a la hija que fue obligada a abandonar. Y el pasado parece empeñado en visitarla una y otra vez, hasta que, diez años más tarde, un reencuentro fortuito con Gabriel la enfrenta a una decisión desgarradora.\r\n\r\nA lo largo de los años, las vidas de Maggie y Elodie se entrecruzan, pero parece que nunca llegarán a tocarse.\r\n\r\n\r\n\r\n«Un estudio de cómo el amor persiste incluso en los momentos más difíciles. Una novela profunda y significativa, que captura la atención del lector hasta el final.» Booklist',1,10,'1656378738015_img_.png',1),(12,'La dama de negro - Susan Hill',2550,'Viajar a un remoto pueblo rodeado de marismas brumosas para asistir al entierro de una anciana no parece un plan muy interesante. Pero nada permite al joven y ambicioso abogado Arthur Kipps atisbar siquiera lo que semejante encargo profesional le puede deparar...\r\n\r\n\r\n\r\nSusan Hill demuestra conocer muy bien tanto los elementos más recurrentes de la novela gótica como los mecanismos que hacen que resulten tan efectivos. Sin embargo, su verdadero talento consiste en dotar de una modernidad asombrosa todos estos recursos y conseguir que el lector se sorprenda y atemorice como si fuera la primera vez que lee una historia de fantasmas. Tras haber vendido más de un millón de ejemplares en todo el mundo, llevada a los escenarios reiteradamente y con enorme éxito, y adaptada tanto a la radio como a la televisión, esta estremecedora historia ha sido adaptada para la gran pantalla en una espectacular versión dirigida por James Watkins y protagonizada por Daniel Radcliffe.',1,10,'1656378963354_img_.png',1),(13,'Los nadadores nocturnos - Peter Rock',1700,'En Los nadadores nocturnos, Peter Rock explora una de sus pasiones: nadar en aguas abiertas, que juega un papel preponderante en el desarrollo de su historia personal. Es su primera novela autobiográfica, en la que además aparece de fondo, su extraña relación con la señora Abel, una vecina con la que comparte momentos de nado y que un día, misteriosamente, desaparece en medio de la noche.\r\n\r\n \r\n\r\nNadar con otra persona —en aguas abiertas, de noche, una larga distancia sin detenerse— es como salir a caminar sin el peso, sin la presión de mantener una conversación, de tener que sacar afuera lo que está adentro. Imagina estar con alguien en una habitación en silencio, la tensión en el aire; el agua es más densa y no puedes hablar, no puedes dejar de moverte. Vas acompañándote en el esfuerzo, solo ves la silueta del brazo o de la cabeza del otro un segundo, cuando girás la cabeza para respirar, reconfirmando que no estás solo del todo.',1,10,'1656379425133_img_.png',1),(27,'Libro prueba',3000,'jsdb',1,10,'default-image.png',1),(28,'libro modificado',30303,'La descripcion debe tener al menos 20 caracteres',1,10,'default-image.png',0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolsusers`
--

DROP TABLE IF EXISTS `rolsusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rolsusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolsusers`
--

LOCK TABLES `rolsusers` WRITE;
/*!40000 ALTER TABLE `rolsusers` DISABLE KEYS */;
INSERT INTO `rolsusers` VALUES (1,'Usuario'),(2,'Administrador');
/*!40000 ALTER TABLE `rolsusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `telefono` int(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `pass` varchar(70) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `roluser_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`roluser_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`roluser_id`) REFERENCES `rolsusers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (41,'Carlos Osmar','Caceres','1988-02-17',1133500257,'omarcaceres@live.com','$2a$10$KvqNvtBo5SBmBufEqDb.vOH/pQGfB7Gku0nLF1aBNOE622DGk8bne','1657852591921_img_.jpg',1),(42,'Carlos Osmar','Caceres','1988-02-17',1133500257,'admin1@live.com','$2a$10$xY9cM7wyiyS3U7aydUN8gOGn3Wrexu/UXvPcFxskIeU.u.6E5m8KK','avatar.jpg',2),(44,'Franco','Choque','1988-02-17',1133500257,'admin2@live.com','$2a$10$bFbNhx.3Iz6Dc2Fy462V0.EqQP3NQdntdCdmLbXWmSw5WbUBlIkAS','avatar.jpg',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'buenafusion'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-25 19:16:06
