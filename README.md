/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                   - START INFO -

To Run the app do following npm commands

npm run start-app

(this will run two scripts one to Start the app and one to start json-server)

If a port is already open you can use following command to close/kill the port in terminal:

npx kill-port 3000
npx kill-port 9000

The number should be whatever port you are trying to accsess

Current ports that should open when you run the command is "3000" and "9000"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                Bundrop-db was inspired by a resturant called Max from following url
        ===> https://order.max.se/se/sv-se/categories?menuType=eatin&categoryId=14444&storeId=209


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                PACKAGES
npm install wait-on --save-dev
npm install concurrently --save-dev
npm install react-router-dom
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
kill-port@2.0.1

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                -INFO PAY-

VISA PAY : its for user who does not need to be logged in, but if they want to they can be logged in if so the Pay information would be saved. In this case that function not implemented.

Swish: its for Users who are registered on the webiste and provided personal information beforehand. But in this situation the user has the same location always until they update their current
personal information. But login function is not implemented.

this are scenarios based on functions.

this APP is only for training purpose on REACT, so app will only provide Choose burgers and store data and aswell GET,POST to db.json
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
