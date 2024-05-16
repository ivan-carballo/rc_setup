Use rc_setup;

-- Insertar datos en la tabla surface
INSERT INTO surface (surface_id, surface) VALUES
(1, 'tarmac'), 
(2, 'gravel'),
(3, 'wet');

-- Insertar datos en la tabla style
INSERT INTO style (style_id, style) VALUES
(1, 'understeer'), 
(2, 'neutral'), 
(3, 'oversteer');

-- Insertar datos en la tabla chasis
INSERT INTO chasis (chasis_id, chasis) VALUES
(1, 'EB4-S2'),
(2, 'EB4-S2.5'),
(3, 'EB4-S3'),
(4, 'ST-1'),
(5, 'MTA-4');

-- Insertar datos en la tabla user
INSERT INTO user (user_id, username, name, password, rol, email) VALUES
(1, 'karis', 'karis', '123', 'admin', 'ivan@ivan.com');