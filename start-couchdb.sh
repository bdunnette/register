#!/bin/bash
[ -d /var/run/couchdb ] || sudo mkdir /var/run/couchdb
sudo couchdb -b -A /etc/couchdb/ -o ~/couchdb.log
