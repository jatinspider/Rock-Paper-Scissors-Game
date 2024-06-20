
      let cartquantitity = 0;

      let display = "";
      let ans = 0;

      
      const myobj ={
        name:"jatin",
        age:24,
        subject:"english"
      }

      //destructure 
      const {age,name}=myobj;
      console.log(age)
      console.log(name)

      /* const JSONs = JSON.stringify(myobj);
      console.log(JSON.stringify(myobj));
      console.log(JSON.parse(JSONs)) */

      document.title='few';
    document.querySelector(".btn"). innerHTML="text changed using js"
  
   function Subscribe(){
   const subbutton =document.querySelector('.sub_button');
   if (subbutton.innerText==='Subscribe'){
   subbutton.innerText='Subscribed'
   subbutton.classList.add('subscribed');
   }
   else {subbutton.innerText='Subscribe';
    subbutton.classList.remove('subscribed')
   }
  }
   
   function shipping(){
    let amount=Number(document.querySelector('.amount').value)*100
    if (amount<4000){
      total_amount=amount+1000;
      document.querySelector('.total').innerText=`${total_amount/100}$`;
    }
    else{
      document.querySelector('.total').innerText=`${amount/100}$`;

    }
   }


 
