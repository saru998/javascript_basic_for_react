//destructuring array
const a = [1,2,3]
const b = a[0]
const c = a[1]
const d = a[2]
console.log("1",b,c,d)

const [x,y,z]=a //destructuring
console.log("2",x,y,z)


//destructuring object
const e = {a1:1,b1:2}
const {b1,a1} = e
console.log("3",a1,b1)


//spread operator
const g = [1, 2, 3];
const h = [4,5,6,...g]
console.log("4",h)

const i = {a1:1,b1:5}
const j = {...i,c1:10}
console.log("6",j)