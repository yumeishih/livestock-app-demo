This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development  Environment

- node 11.1.0
- npm 6.4.1

## Available Scripts

In the project directory, you can run:
### `npm run dev`

Open [http://0.0.0.0:8080](http://0.0.0.0:8080) to view it in the browser.<br>
 It will be hot-reload.

 ### `npm run dev-host`

Open [http://0.0.0.0:3000](http://0.0.0.0:3000) to view it in the browser.<br>
You can modify package.json to change the `host` and `port`

** Tips <br>
```script
ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}
```
Run the script on terminal to get the IP, therefore, others with same network can connect to your web.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`
Run eslint.

### `npm run lint-fix`
Run eslint and fix the error automatically.


