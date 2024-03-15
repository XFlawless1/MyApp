# MyApp

A web application, "MyApp," consists of independent components developed in Go, Next.js (TypeScript), and WordPress.

## How to run?

To run the built apps locally:

1. Clone the repository.
2. Change the WordPress user and database config in `docker-compose.yml`.
3. Open your CLI and run the following command: `docker-compose up`.

## How does this work?
Everytime a code change is detected in one of the folders, their following workflow is triggered, which runs the required tests, lints and then builds and pushes the image to the repo.