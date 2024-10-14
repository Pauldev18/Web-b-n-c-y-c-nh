DROP DATABASE IF EXISTS webbancaycanh;
CREATE DATABASE webbancaycanh;
USE webbancaycanh;
create table category
(
	idCate int auto_increment primary key,
    nameCate nvarchar(255) not null,
    description nvarchar(255) not null,
    isDelete bit
);
create table product
(
	idProduct int auto_increment primary key,
    nameProduct nvarchar(255) not null,
    description nvarchar(255) not null,
    inventoryQuantity int,
    image longtext,
    importPrice float,
    sellingPrice float,
    idCate int,
    foreign key(idCate) references category(idCate),
	isDelete bit
);
create table customer
(
	username nvarchar(255) primary key not null,
    password nvarchar(255) not null,
    fullName nvarchar(255) not null,
    email nvarchar(255) not null,
    sdt nvarchar(255) not null,
	isDelete bit
);
create table orders
(
    idOrder int auto_increment primary key,
    orderDate datetime not null,
    totalPrice float not null,
    username nvarchar(255),
	paymentMethod NVARCHAR(255) NOT NULL,   -- Payment method (e.g., credit card, PayPal, cash)
    paymentStatus NVARCHAR(50) NOT NULL,    -- Status (e.g., completed, pending, failed)
     -- Shipping Information
    shippingAddress NVARCHAR(255) NOT NULL,          -- Shipping address
    shippingCity NVARCHAR(255) NOT NULL,             -- City
    shippingDetails NVARCHAR(255),   
    shippingNote NVARCHAR(255),   
    shippingStatus NVARCHAR(50) NOT NULL,            -- Shipping status (e.g., pending, shipped, delivered)
    foreign key(username) references customer(username)
);

create table orderdetails
(
    idOrderDetails int auto_increment primary key,
    idOrder int not null,
    idProduct int not null,
    quantity int not null,
    unitPrice float not null,
    foreign key(idOrder) references orders(idOrder),
    foreign key(idProduct) references product(idProduct)
);
CREATE TABLE cart
(
    idCart INT AUTO_INCREMENT PRIMARY KEY,
    username NVARCHAR(255),                        
    idProduct INT NOT NULL,                          
    quantity INT NOT NULL,
    FOREIGN KEY(username) REFERENCES customer(username),
    FOREIGN KEY(idProduct) REFERENCES product(idProduct)
);




