let name = "Naresh";
//let name ="Punit"; It will throw the error

var data =1233;
var data = 678900;

console.log(name);
console.log(data);

async function showServiceCost() {
    try {
       let user = await getUser(100);
       let services = await getServices(user);
       let cost = await getServiceCost(services);
       console.log(`The service cost is ${cost}`);
    } catch(error) {
       console.log(error);
    }
}