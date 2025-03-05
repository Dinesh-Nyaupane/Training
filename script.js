const container = React.createElement('div',{},[
    React.createElement('h1',{id:'heading'},'This is heading'),
    React.createElement('p',{id:'paragraph'},'This is a paragraph')
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);