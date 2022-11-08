CREATE TABLE shoes(
    id SERIAL PRIMARY KEY NOT NULL,
    color VARCHAR(40) NOT NULL,
    brand VARCHAR(40) NOT NULL,
    size  decimal(3,1) NOT NULL,
    price decimal(10,2) NOT NULL,
    in_stock INT NOT NULL
);

INSERT INTO shoes(color, brand , size , price, in_stock) 
VALUES ('Black', 'Nike', 7, 1350, 4);