import { API_URL } from "../config";

export default function contactFormInterface() {
 return (
  <form onSubmit={contactForm}
  action={`${API_URL}/contact`}
  method="POST">

    <div>
      <label htmlFor="name-input">Name</label>
      <input id="name-input" id="name" type="text"/>
    </div>

    <div>
      <label htmlFor="email-input">Email</label>
      <input id="email-input" id="email" type="email"/>
    </div>

    <div>
      <label htmlFor="message-input">Message</label>
      <textarea id="message-input" name="message"></textarea>
    </div>
    <div>
      <button>Send</button>
    </div>

  </form>
 )

}
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