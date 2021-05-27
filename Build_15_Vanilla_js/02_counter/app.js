// set initail count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach( (btn) => {
  btn.addEventListener('click', (e) => {
    //console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;

    if(styles.contains('decrease')) {   //contains()  true or false
      count--;
      value.style.color = 'blue';
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'blue';
    }
    if (count <0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
})
