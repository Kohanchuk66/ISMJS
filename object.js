// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// alert(user.surname);


// function isEmpty(obj) {
//     for ( let key in obj ){
//         return false;
//     }
//     return true;
// }
// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) );


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;
// for ( let key in salaries ){
//     if ( typeof salaries[key] == "number" ){
//         sum += salaries[key];
//     }
// }
// alert(sum);


function multiplyNumeric( obj ) {
    for ( let key in obj ) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric( menu );
for ( let key in menu ) {
    if ( typeof menu[key] == "number" ){
        alert( menu[key] );
    }
}