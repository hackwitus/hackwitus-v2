# HackWITus Site V2

## To Run The Development Server

- `cd client` to change directory into the front-end
- Setup your `.env` file in the `/src` directory of the `/client` folder with the following contents:
    ```
    REACT_APP_SERVER_ID=#DISCORD SERVER ID
    REACT_APP_CHANNEL_ID=#DISCORD CHANNEL ID
    REACT_APP_SHARD_URL=https://disweb.deploys.io # The current bot dyno we are connected to
    ```
- `npm start` to run the React development server
- Navigate to `http://localhost:3000/hackwitus-v2/`