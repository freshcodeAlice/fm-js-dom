/* JSON - JavaScript Object Notation) */


const user = {
    firstName: 'John',
    lastName: 'Doe',
    avatar: '',
    age: 20,
    footSize: 46,
    address: {
        street: 'Central',
        house: 34
    },
    sayHello: function() { //function will be ignored!
        console.log(`${this.firstName} say: Hello!`)
    },
    nickName: undefined, // will be ignored
    superPower: null,
    isSubscribe: true,
    [Symbol()]: 'unique',  // will be ignored
    friends: [{
        firstName: 'Spiderman'
    }, {}]
}