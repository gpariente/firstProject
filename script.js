const token = "5834958234:AAFXLPX4F7f9Iqmsozvp8CeugFAZCTypSz0";
const CHAT_ID = "496192745";

const sendMessage = async () => {
  const message = document.getElementById("message").value;

  const response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`
  );

  const result = await response.json();
  console.log(result);
};
