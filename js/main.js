document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userName = document.querySelector("#userName").value;
  const inputValue= userName.split(' ').join('')

  console.log(inputValue);
  fetch(`/api?word=${inputValue}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#personName").textContent = data.palindrome
    });
}
