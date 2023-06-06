create database simpsorama;
use simpsorama;

drop database simpsorama;


create table personagem(
idpersonagem int primary key auto_increment,
nome varchar(45)
);

create table usuario(
id int primary key auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(50),
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


alter table usuario modify column senha varchar(512);

insert into usuario values
(null , 'Lucas' , 'lucas@gmail.com' , '12345678' , 1);

insert into pontuacoes values
(null , 5 , 2);
