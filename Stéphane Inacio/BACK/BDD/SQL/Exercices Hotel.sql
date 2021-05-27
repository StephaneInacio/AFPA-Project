--                                      /// Exercice Hotel NCode \\\ --


--          *** LOT 1 ***

-- 1 - Afficher la liste des hôtels. Le résultat doit faire apparaître le nom de l’hôtel et la ville

SELECT hot_nom, hot_ville 
FROM `hotel`


-- 2 - Afficher la ville de résidence de Mr White Le résultat doit faire apparaître le nom, le prénom, et l'adresse du client

SELECT cli_prenom, cli_nom, cli_adresse 
FROM `client`
WHERE cli_nom = 'White'


-- 3 - Afficher la liste des stations dont l’altitude < 1000 Le résultat doit faire apparaître le nom de la station et l'altitude

SELECT sta_altitude 
FROM `station` 
WHERE sta_altitude < 1000



-- 4 - Afficher la liste des chambres ayant une capacité > 1 Le résultat doit faire apparaître le numéro de la chambre ainsi que la capacité

SELECT `cha_numero`,`cha_capacite` 
FROM chambre 
WHERE `cha_capacite` > 1



-- 5 - Afficher les clients n’habitant pas à Londre Le résultat doit faire apparaître le nom du client et la ville

SELECT `cli_nom`, `cli_ville` 
FROM `client` 
WHERE NOT cli_ville = 'Londre'
-- ou
SELECT `cli_nom`, `cli_ville` 
FROM `client` 
WHERE cli_ville <> 'Londre'



-- 6 - Afficher la liste des hôtels située sur la ville de Bretou et possédant une catégorie>3 Le résultat doit faire apparaître le nom de l'hôtel, ville et la catégorie

SELECT hot_nom, hot_ville, hot_categorie 
FROM hotel 
WHERE hot_ville = 'Bretou' AND hot_categorie >3




--          *** LOT 2 ***

-- 7 - Afficher la liste des hôtels avec leur station Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, la catégorie, la ville

SELECT sta_nom, hot_ID, hot_categorie, hot_ville
FROM hotel INNER JOIN station
-- ou
SELECT sta_nom, hot_ID, hot_categorie, hot_ville
FROM hotel, station



-- 8 - Afficher la liste des chambres et leur hôtel Le résultat doit faire apparaître le nom de l’hôtel, la catégorie, la ville, le numéro de la chambre
SELECT hot_nom, hot_categorie, hot_ville, cha_numero
FROM hotel, chambre 
-- ou
SELECT hot_nom, hot_categorie, hot_ville, cha_numero
FROM hotel INNER JOIN chambre 



--9 - Afficher la liste des chambres de plus d'une place dans des hôtels situés sur la ville de Bretou Le résultat doit faire apparaître le nom de l’hôtel, la catégorie, la ville, le numéro de la chambre et sa capacité

SELECT hot_nom, hot_categorie, hot_ville, cha_numero, cha_capacite
FROM hotel, chambre
WHERE hot_ville = 'Bretou'
--ou
SELECT hot_nom, hot_categorie, hot_ville, cha_numero, cha_capacite
FROM hotel INNER JOIN chambre
ON hot_ville = 'Bretou'



-- 10 - Afficher la liste des réservations avec le nom des clients Le résultat doit faire apparaître le nom du client, le nom de l’hôtel, la date de réservation

SELECT cli_nom, hot_nom, res_date
FROM hotel, client, reservation
WHERE cli_nom = 'Squire'

-- ou

SELECT cli_nom, hot_nom, res_date
FROM hotel
INNER JOIN client, reservation
WHERE cli_nom = 'Squire'



-- 11 - Afficher la liste des chambres avec le nom de l’hôtel et le nom de la station Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, le numéro de la chambre et sa capacité

SELECT sta_nom, hot_nom, cha_ID, cha_capacite
FROM hotel, station, chambre 
-- ou
SELECT sta_nom, hot_nom, cha_ID, cha_capacite
FROM hotel INNER JOIN station, chambre 



-- 12 - Afficher les réservations avec le nom du client et le nom de l’hôtel AVEC datediff Le résultat doit faire apparaître le nom du client, le nom de l’hôtel, la date de début du séjour et la durée du séjour


SELECT cli_nom, hot_nom, res_date_debut, res_date_fin, DATEDIFF (res_date_fin, res_date_debut) -- en indiquant la date de début avant la date de fin, j'obtiens un entier négatif, d'où l'inversion des clés
FROM hotel, client, reservation 



--          *** LOT 3 ***


-- 13 - Compter le nombre d’hôtels par station

select count(hot_id) as 'Nombre d''hôtels', sta_nom as 'Station'
from hotel 
join station on sta_id = hot_sta_id
group by sta_id


-- 14 - Compter le nombre de chambres par station

select count(cha_id) as 'Nombre de chambres', sta_nom as 'Station'
from station 
join hotel on hot_sta_id = sta_id
join chambre on cha_hot_id = sta_id
group by sta_nom


-- 15 - Compter le nombre de chambres par station ayant une capacité > 1

select count(cha_id) as 'Nombre de chambres', sta_nom as 'Station'
from station 
join hotel on hot_sta_id = sta_id
join chambre on cha_hot_id = sta_id
WHERE cha_capacite > 1
group by sta_nom


-- 16 - Afficher la liste des hôtels pour lesquels Mr Squire a effectué une réservation

SELECT DISTINCT hot_nom, cli_nom
FROM hotel, client
WHERE cli_nom = 'Squire'

-- Ici, j'utilise DISTINCT pour éviter les doublons dans les noms d'hôtels
-- Ce client a réservé plusieurs fois dans différents hôtels, comme l'indique le code ci-dessous :


SELECT hot_nom, cli_nom, res_date
FROM hotel, client, reservation
WHERE cli_nom = 'Squire'


-- 17 - Afficher la durée moyenne des réservations par station



