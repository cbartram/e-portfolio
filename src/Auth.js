

export default class Auth {
    //TODO CHANGE IN Production
    static check() {
        fetch('http://localhost:3001/auth', {
            method: 'GET',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then(body => {
            console.log(body)
        });
    }
}