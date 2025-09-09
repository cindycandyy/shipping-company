-- Insert sample fleet data
INSERT INTO fleet_vessels (name, type, capacity, capacity_unit, year_built, flag, status, current_location, next_available, specifications) VALUES
('MV Ocean Pioneer', 'container', 14000, 'TEU', 2019, 'Singapore', 'active', 'Port of Singapore', '2024-02-15', '{"length": 366, "beam": 51, "draft": 16, "speed": 22}'),
('MV Maritime Express', 'container', 8500, 'TEU', 2021, 'Panama', 'active', 'Port of Rotterdam', '2024-02-20', '{"length": 334, "beam": 43, "draft": 14.5, "speed": 24}'),
('MV Bulk Carrier One', 'bulk', 75000, 'DWT', 2018, 'Liberia', 'active', 'Port of Shanghai', '2024-02-25', '{"length": 225, "beam": 32, "draft": 12.8, "speed": 14}'),
('MV Tanker Supreme', 'tanker', 115000, 'DWT', 2020, 'Marshall Islands', 'maintenance', 'Dry Dock - Dubai', '2024-03-01', '{"length": 274, "beam": 48, "draft": 17.2, "speed": 16}'),
('MV RoRo Navigator', 'roro', 2500, 'Lane Meters', 2022, 'Cyprus', 'active', 'Port of Piraeus', '2024-02-18', '{"length": 199, "beam": 26, "draft": 6.5, "speed": 20}');

-- Insert sample admin user (password: admin123 - should be hashed in production)
INSERT INTO admin_users (username, email, password_hash, role) VALUES
('admin', 'admin@oceanlink-maritime.com', '$2b$10$example_hash_here', 'admin');

-- Insert sample inquiries
INSERT INTO inquiries (type, name, email, phone, company, message, origin, destination, cargo_type, cargo_weight, status) VALUES
('quote', 'John Smith', 'john@tradecorp.com', '+1-555-0123', 'Trade Corp International', 'Need shipping quote for electronics', 'Shanghai, China', 'Los Angeles, USA', 'Electronics', 15000.00, 'pending'),
('general', 'Maria Garcia', 'maria@logistics.com', '+34-600-123456', 'European Logistics', 'Inquiry about regular shipping routes to South America', NULL, NULL, NULL, NULL, 'in-progress'),
('charter', 'Ahmed Hassan', 'ahmed@oiltrading.ae', '+971-50-1234567', 'Gulf Oil Trading', 'Charter inquiry for crude oil transport', 'Kuwait', 'Singapore', 'Crude Oil', 80000.00, 'pending');
