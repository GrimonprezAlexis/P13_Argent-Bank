const cors = require('cors');
const axios = require('axios');

module.exports = (router) => {

    router.post('/user/login', (req, res) => {

        console.log(req);
        axios.post('http://localhost:3001/api/v1/user/login', req.body)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.error(error);
        });
    });
    return router;
}