const arr = [
    {name:"cahndhu", age:"24"},
{name:"Tomm", age:"21"},
{name:"Harry", age:"20"},
{name:"jerry", age:"28"}
]
function add(a){
    return function(b){
        return a+b;
    }
}
const d= add(1)(2)
console.log(d)