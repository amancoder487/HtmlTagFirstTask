document.getElementById('my_butt').onclick =function(){
    alert("Aman")
}

document.getElementById('my_random').onclick=function(){
    let x = Math.floor((Math.random()*100)+1)
    alert(x)
    let y = Math.floor((Math.random()*10)+1)
    alert(y)
    let z = Math.floor((Math.random()*5)+1)
    alert(z)
    
}


document.getElementById('my_random3').onclick=function(){
    
    let z = Math.floor((Math.random()*5)+1)
    alert(z)
    
}
document.getElementById('max').onclick=function(){
    let x=[10,13,23,54,67,88,99]
     let max =Math.max(...x)
     alert(max)
}

document.getElementById('min').onclick=function(){
    let x=[10,13,23,54,67,88,99]
     let min =Math.min(...x)
     alert(min)
}

function show_now(){
    var my_date=new Date()
    document.getElementById('display').innerHTML=my_date

}


document.getElementById("date").onclick=function(){
    var my_date =new Date()
    var str= (my_date.getDate())+'/'+(my_date.getMonth()+1)+'/'+(my_date.getFullYear() +'and time '+my_date.getHours()+"-"+my_date.getMinutes()+ "-"+my_date.getSeconds())
    alert(str)
}


document.getElementById("loop").onclick=function(){
    let arr=[];
    for(let i=1 ;i<=10;i++){
        arr.push(i)
    }
    alert(arr)
}

document.getElementById('sort').onclick=function(){
    let arr =['BMW', 'Audi', 'Porsche', 'Thar', 
    'Lamborghini']
    alert(arr.sort())
}

document.getElementById('json').onclick=function(){
    let data={"employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
      ]}
      for(i=0;i<=2;i++){
        let rool = data.employees[i].firstName+""+data.employees[i].lastName
        
    }
      

    }

document.getElementById('pr').onclick=function(){
    let x=[{name:'Tv',price:2300,type:'one' },{name:'Tvcdcdcd',price:2300,type:'one' },{name:'Fan',price:2300,type:'one' },{name:'phone',price:2000,type:'one' }]


    //  let fill=x.slice(1,2)
    // console.log(fill)

    
    x.splice(1,1)
    console.log(x)
    

    // // alert( x.length)
    // let fil= x.filter((p)=>{
    //     return(
    //         p.name=='Tv'
    //     )
    // })
    // console.log(fil)


    
    // let fil= x.some((p)=>{
    //     return(
    //         p.price=='2300'
    //     )
    // })
    // console.log(fil)


    // let fil= x.map((p)=>{
        
    //         p.price=  p.price+2300
    //         return p
    // })
    // console.log(fil)

    // let fil= x.map((p)=>{
        
    //     p.price=  p.price+2300
    //     return p
    // })
    // console.log(fil)

    
    // let fil= x.find((p)=>{
        
    //     return p.price= 2300
        
    // })
    // console.log(fil)

    // let fil= x.findIndex((p)=>{
        
    //     return p.price= 2300
        
    // })
    // console.log(fil)


    
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  
  // let { name, category } = companies[0];
  // let x = [];
  
  // //  [{ ...x }]
  // x.push({ name, category });
  
  
  // let getname = (x) => {
  //    return x[0].name;
  // };
  // // console.log((getname(x)))
  
  // x.getname =getname(x)
  // // console.log(x.getname)
  
  // var x=new Array(5);
  // for (var i=0 ; i<x.length;i++){
  //    x[i]=prompt("enter number");
  
  // }
  // let y=x.map((n)=>{
  //  return Number(n)
  // })
  // let sum = 0;
  
  // for (let i = 0; i < y.length; i++) {
  //     sum += y[i];
  // }
  // console.log(sum);
  
  
  
  
  
  // const get =(...y)=>{
    
  //     let sum =0
  //     y.forEach(n =>{
  //       return sum =sum+n 
  //     })
  //     return sum;
      
  //   } 
  
  
  // console.log(get(12,34,32,15
  
  
  
  
  
  
  
  
  
  
  
  
  // let y =[{...x,getname:getname()}]
  // console.log(y)
  // const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  // const person = {
  //   name: "Costas",
  //   address: {
  //     street: "Lalaland 12"
  //   }
  // };
  
  // companies.forEach((p) => {
  //   return console.log(p.name);
  // });
  
  // var a = companies.filter((p) => {
  //   return p.start > 1987;
  // });
  
  // a.forEach((p) => {
  //   return console.log(p.name);
  // });
  


}






// const employees ={
//     name:'yash',
//     age:23,
//     salary:2344,
//     desigation:'clerk',
//     experenci :3 ,

//     getFullName:function(){
//         return `${this.name} ${this.age}` 
//     },
//     promot :function(){
//         var eligible;
//         if(this.experenci >= 3){
//             eligible=true;
//             this.salary+=12222;
//             this.desigation='Maanger';

//         }
//         else{
//             eligible=false;
//         }
//         return eligible;
//     }
// }


// if(employees.promot()  == true){
//     console.log(`congrtulation ${employees.name} your salary now ${employees.salary}`)
// }
// else{
//     console.log('sorry')
// }

// console.log(employees.getFullName())


const employees ={
    name:'yash',
    age:23,
    salary:2344,
    desigation:'clerk',
    experenci :3 ,

    getFullName:function(){
        return `${this.name} ${this.age}` 
    },
}


// var { name: na ,age:as ,experenci:ex }=employees

// // console.log(na)
// // console.log(as)
// //  console.log(ex)
//  console.log(get)




// function emp({name,age:as }){
//     console.log(as)

// }

// emp(employees)




