const firstName =document.querySelector("#firstName");
const lastName =document.querySelector("#lastName");
const StreetAddress =document.querySelector("#StreetAddress");
const TownCity =document.querySelector("#TownCity");
const State =document.querySelector("#State");
const postCode =document.querySelector("#postCode");
const country =document.querySelector("#country");
const email =document.querySelector("#email");
const formBtn =document.querySelector("button");
const form = document.querySelector(".form");


const para = document.createElement("p");
para.innerText = "Order Completed";
form.appendChild(para);
para.style.display = "none";
//console.log(para.style.display = "none");

formBtn.addEventListener("click",async e =>{

  formBtn.innerHTML = "Processing Order..."
  formBtn.disabled = true;

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    StreetAddress: StreetAddress.value,
    TownCity: TownCity.value,
    State: State.value,
    postCode: postCode.value,
    country: country.value,
    email: email.value

  }
  console.log(formData);

  try{
     const postData = await fetch("https://jsonplaceholder.typicode.com/posts",{ 
     method:"POST",
     headers:{
      "content-type":"application/json; charset=UTF-8",
    },
     body: JSON.stringify(formData)
    },
      );
      const response = await postData.json();
      console.log("response",response);
      formBtn.innerHTML = "Order Successful"
      para.style.display = "block";

      setTimeout(()=>{
        formBtn.innerHTML = "Continue to payment"
        formBtn.disabled = false;
        para.style.display = "none";
      },3000);
      
  }catch(error){
      console.log("error", error);
      formBtn.innerHTML = "Continue to payment"
      formBtn.disabled = false;
  }

});