//ES sáu

//template string

var photnem="Nhat";
var latnem="Nhon";

var phunnem=`${photnem} ${latnem}`;

console.log(phunnem);

var phunnem2=`Cách dùng template string là thêm \\\${}`;

console.log(phunnem2);

{
	var phunnem3='Hai';
}
console.log(phunnem3);

let amem=["a","á","ớ"];
amem.forEach((member,index)=>{
	console.log(`${index} : ${member}`);
});

let acoc=[
	{
		a1:"db",
		a2:"c"
	},
	{
		a1:"cốt",
		a2:"xi"
	},
	{
		a1:"cốt",
		a2:"xi cộng cộng"
	}
]

const a=acoc.filter((course,index)=>{
	return course.a1==="cốt";
})

console.log(a);

const b=acoc.map((course,index)=>{
	return {
		a1: `*Code* ${course.a1}`,
		a2: `${course.a2} thăng`
	}
})

console.log(b);
