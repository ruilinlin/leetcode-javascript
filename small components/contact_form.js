import { API_URL } from "../config";

async function contactForm(event) {
  const form = event.target;

  try{
    if (form.action !== `${API_URL}/contact`){
      throw new Error("Incorrect form action");
    }
    if (form.method !== "POST"){
      throw new Error("Incorrect form method");
    }
  
  const formData = new FormData(form);
  const response =  await fetch( `${API_URL}/contact`, {
    method: "POST",
    body: JSON.stringify(
      {name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      },
      headers: {
        'Content-Type':'application/json'
      },
    ),
})

const text = await response.text();
alert(text);
} catch (error) {
  console.error("Form is not valid");
}

}