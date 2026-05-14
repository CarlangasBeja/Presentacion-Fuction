🚗 Sistema de Ventas de Autos con Functions SQL

Proyecto web interactivo desarrollado para explicar el funcionamiento de las Functions en Bases de Datos mediante ejemplos prácticos en SQL y simulaciones visuales.

📌 Descripción

Este proyecto tiene como objetivo enseñar:

Qué es una Function
Diferencias entre Function y Procedure
Uso de funciones SQL en consultas
Aplicación de cálculos automáticos
Simulación de ejecución SQL en una interfaz web moderna

La temática utilizada es un sistema de ventas de autos, incluyendo tablas, relaciones, restricciones y consultas aplicadas.

⚙️ Tecnologías utilizadas
HTML5
CSS3
JavaScript
SQL
MySQL / Oracle (compatible conceptualmente)
🗄️ Base de Datos

El sistema incluye las siguientes entidades:

CLIENTE
AUTO
VENTA
DETALLE_VENTA

Además se implementan:

PRIMARY KEY
FOREIGN KEY
NOT NULL
CHECK
🧠 Functions implementadas
Function descuento()

Calcula automáticamente un descuento del 10%.

CREATE FUNCTION descuento(precio DECIMAL)
RETURNS DECIMAL
BEGIN
RETURN precio - (precio * 0.10);
END;
Function total_venta()

Calcula el total de venta multiplicando precio × cantidad.

CREATE FUNCTION total_venta(precio DECIMAL, cantidad INT)
RETURNS DECIMAL
BEGIN
RETURN precio * cantidad;
END;
🧪 Ejercicios incluidos
Aplicar descuento a vehículos
Calcular total de ventas
Consultas con JOIN
SUM y GROUP BY
Ejercicios propuestos para estudiantes
Pistas y soluciones interactivas
🎨 Características de la interfaz
Diseño moderno estilo dashboard
Animaciones suaves
Simulación visual de ejecución SQL
Consola interactiva
Resultados dinámicos en tablas
Secciones ocultas para ejercicios
🚀 Cómo ejecutar el proyecto
Descargar o clonar el repositorio
git clone URL_DEL_REPOSITORIO
Abrir el archivo:
index.html
Navegar por la teoría y ejercicios interactivos.
👨‍💻 Autor

Proyecto desarrollado por Carlos para prácticas y exposición universitaria sobre Functions en Bases de Datos.

📚 Objetivo académico

Este proyecto fue creado con fines educativos para reforzar conceptos de:

SQL
Bases de Datos Relacionales
Functions
Consultas SQL
Diseño de interfaces web interactivas
