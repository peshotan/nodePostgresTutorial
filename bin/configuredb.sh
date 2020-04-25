#!/usr/bin/env bash
dbname="monstersdb"

echo "Configuring database : $dbname"

dropdb -U node_user $dbname
createdb -U node_user $dbname

psql -U node_user $dbname < ./bin/sql/insertion.sql

echo "$dbname configured"


