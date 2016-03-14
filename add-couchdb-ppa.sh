#!/bin/bash
# install the ppa-finding tool
# for 12.04 release or older
#sudo apt-get install python-software-properties -y
# for 14.04 release and newer
sudo apt-get install software-properties-common -y
# add the ppa - there is a ppa:couchdb/dev as well if you are feeling lucky
sudo add-apt-repository ppa:couchdb/stable -y
# update cached list of packages
sudo apt-get update -y
# remove any existing couchdb binaries
sudo apt-get remove couchdb couchdb-bin couchdb-common -yf
# see my shiny goodness - note the version number displayed and ensure its
# what you expect before upgrading
sudo apt-get install -V couchdb
