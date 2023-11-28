# Project: Shared shopping list

## Link to launched web application: https://wsd-project-i-bnpu.onrender.com

## Overview

This application allows users to create shopping lists, add items, mark items as collected, and deactivate shopping lists. 

Main page contains statistics for created shopping lists and items. It also has a link to the lists page.

lists page contains a submit feature to add lists, deactivate them and acces to a individual list page. 

individual list pages contain the feature to add items and mark them collected. 

## Project Structure

The "flyway" folder contains SQL scripts used to initialize the database automatically when launching the project.  

shopping-lists folder contains application code.

e2e-playwright folder contains tests.

The application code is organized within the "shopping-lists" folder, docker-compose-yml is used to launch the project.

## Running the Project Locally

1. Download the project folder.
2. Navigate to the `shopping-lists` folder.
3. Run the application using Docker Compose: docker-compose up
