const x=
[
    {"id":1,"name":"xyz"},
    {"id":2,"name":"abc"},
    {"id":3,"name":"pqr"},
    {"id":4,"name":"uvw"}

]
function arr()
{
    var y;
    y = x.find(a => a.name === "uvw")
    console.log(y);
    y = x.findIndex(row => row.name === "pqr")
    console.log(y);
    y = x.map( row => inc(row, 1))
    console.log(y);
    y = x.filter( row => check(row))
    console.log(y);
    y = x.map(b => {b.role = "student"; return b;})
    console.log(y);
}
arr();
function inc(data,val)
{
    data.id = data.id+val;
    return data;
}
function check(data)
{
    let r = delete data.name;
    return (r);
}
