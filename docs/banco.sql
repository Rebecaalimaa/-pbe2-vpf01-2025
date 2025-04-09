CREATE DATABASE Pizzaria;
USE Pizzaria;


CREATE TABLE Cliente (
    cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    telefone VARCHAR(20),
    logradouro VARCHAR(100),
    numero VARCHAR(10),
    bairro VARCHAR(50),
    referencia VARCHAR(100)
);


CREATE TABLE Pizza (
    pizza_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao TEXT,
    valor DECIMAL(10,2)
);


CREATE TABLE Pedido (
    pedido_id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    data DATE,
    hora TIME,
    valor DECIMAL(10,2),
    FOREIGN KEY (cliente_id) REFERENCES Cliente(cliente_id)
);


CREATE TABLE Contem (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT,
    pizza_id INT,
    quantidade INT,
    valor DECIMAL(10,2),
    subtotal DECIMAL(10,2),
    FOREIGN KEY (pedido_id) REFERENCES Pedido(pedido_id),
    FOREIGN KEY (pizza_id) REFERENCES Pizza(pizza_id)
);
