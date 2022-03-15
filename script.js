const handleSubmit = (e) => {
  e.preventDefault();
  const title = e.target[0].value;
  const description = e.target[1].value;
  alert(
    `SUBMITTED, THANK YOU! \n Title: ${title} \n Description: ${description}`
  );
};

const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);
