import app from './app.js';

const main = () => {
    app.listen(app.get("port"));
    console.log('Server on in port ' + app.get("port"));
}

main();