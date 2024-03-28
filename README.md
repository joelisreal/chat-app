# Chat App

This is a simple chat application built with Express.js, Node.js, Socket.IO, and React.js.

## Features

- Real-time messaging using Socket.IO
- User authentication and registration
- Chat room functionality
- Emoji support

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/joelisreal/chat-app.git
2. Navigate into the project directory:

   ```bash
   cd chat-app
## Running the Application
This application uses Docker Compose for easy setup and running. Ensure you have Docker installed on your machine.

To start the application, run:

   ```bash
   docker compose up
   ```
This command will start all services defined your docker-compose.yml file in detached mode.
mode.

To watch the logs of the running services, use:

   ```bash
   docker compose logs -follow
   ```

To stop the application, run:
   ```bash
   docker compose down
   ```

Enjoy chatting!