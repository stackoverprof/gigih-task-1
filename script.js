const handleSubmit = (e) => {
  //prevent default action to server communication
  e.preventDefault();

  //read values
  const title = e.target[0].value;
  const description = e.target[1].value;

  //trigger alert
  alert(
    `SUBMITTED, THANK YOU! \n Title: ${title} \n Description: ${description}`
  );

  //reset the data after submitted
  e.target.reset();
};

//dom the form
const form = document.getElementById("form");

//listen to a submit event and run the function handleSubmit
form.addEventListener("submit", handleSubmit);
