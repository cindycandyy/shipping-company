-- Create database tables for maritime company
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50) NOT NULL, -- 'general', 'quote', 'charter'
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT,
  origin VARCHAR(255),
  destination VARCHAR(255),
  cargo_type VARCHAR(255),
  cargo_weight DECIMAL(10,2),
  cargo_dimensions VARCHAR(255),
  preferred_date DATE,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'in-progress', 'completed', 'cancelled'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS fleet_vessels (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100) NOT NULL, -- 'container', 'bulk', 'tanker', 'roro'
  capacity DECIMAL(12,2),
  capacity_unit VARCHAR(50), -- 'TEU', 'DWT', 'CBM'
  year_built INTEGER,
  flag VARCHAR(100),
  status VARCHAR(50) DEFAULT 'active', -- 'active', 'maintenance', 'inactive'
  current_location VARCHAR(255),
  next_available DATE,
  specifications JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin', -- 'admin', 'manager', 'operator'
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_type ON inquiries(type);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_fleet_vessels_status ON fleet_vessels(status);
CREATE INDEX IF NOT EXISTS idx_fleet_vessels_type ON fleet_vessels(type);
