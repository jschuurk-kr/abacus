CREATE TABLE polling_station_data_entries
(
    polling_station_id INTEGER NOT NULL,
    entry_number       INTEGER NOT NULL,
    progress           INTEGER NOT NULL,
    data               BLOB,
    client_state       BLOB,
    updated_at         INTEGER NOT NULL DEFAULT (unixepoch()),
    finalised_at       INTEGER,

    PRIMARY KEY (entry_number, polling_station_id),
    FOREIGN KEY (polling_station_id) REFERENCES polling_stations (id)
);

CREATE INDEX polling_station_id_index
    ON polling_station_data_entries (polling_station_id);
