//const { Button } = require("selenium-webdriver");

const e = React.createElement;

const Button = () => e(
    'button',
    {onClick: () => alert("Haz hecho click!")},
    'Haz Click!'
);

const domContainer = document.querySelector('#button_container');


const root = ReactDOM.createRoot(domContainer);

root.render(e(Button))