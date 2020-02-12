#!/bin/bash
echo -e "start running the setup script for FETHER app\n"

read -p "Who are you? " username

echo -e "\n$username start setup script\n"

read -p "Do you want to install npm and node? Enter [y/n]: " option

echo -e "\n"

if [ "$option" == "y" -o "$option" == "Y" ]
then
  install_npm_node() {
    echo -e "started installing nodejs\n"
    sudo apt install nodejs
    echo -e "\n started installing npm"
    sudo apt install npm
  }
  install_npm_node
elif [ "$option" == "n" -o "$option" == "N" ]
then
  echo "It seems you have already installed npm and node on your system"
else
  echo "Please provide valid option"
  exit 0
fi

read -p "Do you want to install mongoDB? Enter [y/n]: " opts

echo -e "\n"

if [ "$opts" == "y" -o "$opts" == "Y" ]
then
  install_mongo() {
    echo -e "started installing mongoDB\n"
    sudo apt install mongodb
  }
  install_mongo
elif [ "$opts" == "n" -o "$opts" == "N" ]
then
  echo "It seems you have already installed mongoDB on your system"
else
  echo "Please provide valid option"
  exit 0
fi