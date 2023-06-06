create database simpsorama;
use simpsorama;

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
idaviso int primary key auto_increment,
titulo varchar(45),
descricao varchar(250),
fkusuario int,
foreign key(fkusuario) references usuario(id)
);
create table pontuacoes(
idpontuacao int primary key auto_increment,
pontos_loteria_simpsorama int,
qtd_episodios_assistidos float
);


insert into personagem values
(null , 'Bart'),
(null , 'Lisa'),
(null , 'Maggie'),
(null , 'Marge'),
(null , 'Homer');

