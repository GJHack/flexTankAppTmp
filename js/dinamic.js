const $topInput = document.querySelector(`#topInput`),
      $doItMessage = document.querySelector(`#doIt`),
      $buttonSend = document.querySelector(`#fakeButton`);

$topInput.addEventListener('focusin',() => rewriteMessage('Ты в шаге от чуда!'));
$topInput.addEventListener('focusout',() => rewriteMessage('Зарегистрируйся '));
$buttonSend.addEventListener('mouseenter',() => $buttonSend.textContent = "Отправить" );
$buttonSend.addEventListener('mouseleave',() => $buttonSend.textContent = "Регистрация" );

let count = 0,
    isCD = false;
function rewriteMessage(text) {
  if(count===0 && isCD == false) {
    count = 1;
    isCD = true;
    console.log(count);
    setTimeout(() => $doItMessage.textContent = text,100);
    style = $doItMessage.style;
    style.padding = '10px';
    style.transition = `all .5s`;
    style.backgroundColor = '#77c344';
    style.borderRadius = "10px";
    setTimeout(() => {
      style.filter = "opacity(0)"
      style.backgroundColor = '0'
      },1000);
    setTimeout(() => {
        style.marginLeft = "-100vw"
        isCD = false;
      },1200);
  } else {
    if(isCD == false) {
      count = 0;
      isCD = true;
      console.log(count);
      setTimeout(() => $doItMessage.textContent = text,100);
      setTimeout(() => style.marginLeft = "0",10);
      style.filter = "opacity(1)"
      style.padding = "5px"
      style = $doItMessage.style;
      style.backgroundColor = '#ffce54';
      setTimeout(() => {
        isCD = false
        style.backgroundColor = '';
        style.padding = '';
        $doItMessage.innerHTML +=  `<span class="free"> Бесплатно </span>`
      }, 400)
    }
  }
}
