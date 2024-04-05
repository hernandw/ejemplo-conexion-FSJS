-- se crea la BBDD
create database empresabd;

--se crea la tabla productos
CREATE TABLE productos (
 id serial PRIMARY KEY,
 nombre VARCHAR(50) NOT NULL,
 precio DECIMAL(10, 2) NOT NULL,
 imagen varchar,
 categoria VARCHAR(50),
 editorial varchar(60),
 autor varchar(60),
 stock INT
);

-- Se insertan los registros
INSERT INTO productos (nombre, precio, categoria, editorial, autor, stock)
VALUES
 ('Viaje a las Estrellas', 19.99, 'Libros', 'Espacio Editorial', 'A. Futurista', 50),
 ('Camiseta Básica', 9.99, 'Ropa', 'Moda Casual', 'Diseñador Textil', 100),
 ('Taza Elegante', 7.50, 'Hogar', 'Cerámica Fina', 'Artesano', 30),
 ('Reloj Clásico', 49.99, 'Accesorios', 'Tiempo Perfecto', 'Maestro Relojero', 20),
 ('Aventura en la Isla', 29.99, 'Juguetes', 'Diversión en Familia', 'Juegos Creativos', 40),
 ('Zapatos Deportivos', 59.99, 'Calzado', 'Deportes Extremos', 'Diseñador de Calzado', 50),
 ('Cámara Réflex Digital', 499.00, 'Electrónica', 'Fotografía Avanzada', 'Experto en Fotografía', 10),
 ('Manta de Lana', 39.95, 'Hogar', 'Textiles Suaves', 'Tejedor Artesanal', 30),
 ('Guitarra Acústica', 199.99, 'Instrumentos Musicales', 'Melodías Eternas', 'Luthier', 15),
 ('Set de Maquillaje', 29.50, 'Belleza', 'Cosméticos Modernos', 'Maquilladora Profesional', 40),
 ('Mochila para Excursiones', 79.99, 'Accesorios', 'Aventuras al Aire Libre', 'Explorador Intrépido', 25);

postgres://empredb_user:8jLQud3XiVSwyyb9ezohQWA9Tj7hvXVa@dpg-co7lm1779t8c73em6k90-a.oregon-postgres.render.com/empredb