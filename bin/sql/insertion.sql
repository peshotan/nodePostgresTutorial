CREATE TABLE monsters(
    id serial,
    name character varying(50),
    behaviour character varying(50)
);


CREATE TABLE heros(
    id serial,
    name character varying(50),
    strength int
);

CREATE TABLE winners(
    id serial,
    monster character varying(50),
    hero character varying(50),
    winner character varying(2)
);

INSERT INTO monsters(name, behavous)
VALUES
('Fluffy', 'erratic'),
('Noodles', 'angry'),
('Rusty', 'passionate');

INSERT INTO heros(name, strength)
VALUES
('Captain', 92),
('Iron_Man', 99);

INSERT INTO winners(monster, hero, winner)
VALUES
('Fluffy', 'Captain', 'F'),
('Noodles','Captain', 'C'),
('Fluffy', 'Iron_Man', 'IM'),
('Rusty', 'Iron_Man', 'R);

