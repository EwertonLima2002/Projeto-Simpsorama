create database simpsorama;
use simpsorama;

-- drop database simpsorama;


create table personagem(
idpersonagem int primary key auto_increment,
nome varchar(45)
);

create table usuario(
id int primary key auto_increment,
nome varchar(100),
email varchar(100) unique,
senha varchar(100),
fkpersonagem int,
foreign key(fkpersonagem) references personagem(idpersonagem)
);

create table aviso(
id int primary key auto_increment,
titulo varchar(45),
descricao varchar(250),
fkusuario int,
foreign key(fkusuario) references usuario(id)
);
create table pontuacoes(
idpontuacao int primary key auto_increment,
pontos_loteria_simpsorama int,
fk_usuario int,
foreign key(fk_usuario) references usuario(id)
);


insert into personagem values
(null , 'Lisa'),
(null , 'Homer'),
(null , 'Marge'),
(null , 'Bart'),
(null , 'Maggie');

insert into usuario values
(null , 'Lucas' , 'lucas@gmail.com' , '12345678' , 1),
(null , 'Ewerton' , 'ewerton@gmail.com' , '87654321' , 2),
(null , 'Gustavo' , 'gustavo@gmail.com' , '460820' , 3),
(null , 'Luana' , 'luana@gmail.com' , '989766323' , 4),
(null , 'Eliana' , 'eliana@gmail.com' , '964782563' , 5),
(null , 'Geovanna' , 'geovanna@gmail.com' , '389297648' , 1),
(null , 'Anna' , 'anna@gmail.com' , '3293778236' , 2),
(null , 'Will' , 'will@gmail.com' , '782736263A' , 3),
(null , 'Luigi' , 'luigi@gmail.com' , '460820Ab@' , 4),
(null , 'Davi' , 'davi@gmail.com' , '37346723' , 5),
(null , 'Julia' , 'julia@gmail.com' , '39293764' , 1);


insert into pontuacoes values
(null , 5 , 1),
(null , 5 , 2),
(null , 5 , 3),
(null , 5 , 4),
(null , 5 , 5),
(null , 5 , 6),
(null , 5 , 7),
(null , 5 , 1),
(null , 5 , 2),
(null , 5 , 11),
(null , 5 , 7),
(null , 5 , 6),
(null , 5 , 2),
(null , 5 , 1),
(null , 5 , 3),
(null , 5 , 1),
(null , 5 , 3),
(null , 5 , 4),
(null , 5 , 5),
(null , 5 , 1),
(null , 5 , 6),
(null , 5 , 3),
(null , 5 , 2),
(null , 5 , 5),
(null , 5 , 6),
(null , 5 , 3),
(null , 5 , 2),
(null , 5 , 1);
