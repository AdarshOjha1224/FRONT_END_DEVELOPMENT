const accountId = 1004
let accountEmail = "adarsh@gmail.com"
var accountPassword = "24122004"
accountCity = "Jaipur"
let accountState

/*
    accountId = 1003  NOT ALLOWED
    {} <- SCOPE
    var <- prefer not to use var 
           because of issue in block scope and functional scope.
*/

accountEmail = "hello@123gmail.com"
accountPassword = "1234"
accountCity = "Gwalior"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
