// Sets user's token. ( my bot )
const TOKEN = "5834958234:AAGA9IbJQHmi4FqKW4R2jSY7_hpqfnvf56g";

const sendMessage = async () => {
  const message = document.getElementById("message").value;
  const CHAT_ID = document.getElementById("chatId").value;

  const response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`
  );

  const result = await response.json();
  console.log(result);
};
