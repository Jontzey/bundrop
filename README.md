/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                   - START INFO -

To Run the app do following npm commands

npm run start-app        //Important! u need to install a package that can run two script at same time --> npm install concurrently --save-dev

(this will run two scripts one to Start the app and one to start json-server)
If u want to run them independently use "npm run" and then the script "Bundrop-db" or "start"

If a port is already open you can use following command to close/kill the port in terminal:

npx kill-port 3000
npx kill-port 9000

The number should be whatever port you are trying to accsess

Current ports that should open when you run the app is "3000" and "9000"

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

                                                                -Known Issues-

1. User can accsess payment route without items in Cart by writing in Url /payment --> fix would be to make the component check if there are items in cart.
2. Reciept component if its empty does not tell user its empty --> fix would be add a condition.
3. Swish component can make a post request with only filling in number field --> fix would be to add number in the form as a input instead of having it outside.
4. Cart item icon does not look good with placement or when page the is at a certain resolution

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                        FIGMA
This project Started by doing a simple design by a design tool, In the process of coding alot of design that I didnt think about would appear in code form and not in figma design, like modals.

https://www.figma.com/file/6H0jsspOepmekZYbWkGZGz/Untitled?type=design&node-id=0%3A1&t=LZ0QtNDEB8f4Faly-1
