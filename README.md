# 자바스크립트 중급 강좌

[코딩앙마 자바스크립트 중급 유튜브 재생목록](https://www.youtube.com/playlist?list=PLZKTXPmaJk8JZ2NAC538UzhY_UNqMdZB4)

[Florin Popp _ 10 JavaScript Projects in 1 Hour - Coding Challenge 🔥](https://www.youtube.com/watch?v=8GPPJpiLqHk&t=2308s)

1. Hamburger Button & Hidden Menu
  - button + hamburger icon
  - menu > li > a -> hidden
  - toggle on click
  - animation
  ```
  클래스가 존재하는지 체크, 없으면 더하고 ,있으면 제거
  nav.classList.toggle('act')

  ```

2. Toast Notification
  - toast container floating
  - toast design
  - button
  - click show random toast message
  ```
  - document.getElementyById(#id)
  - document.createElement(div)
  - var.classList.add('toast')
  - var.innerText = 'my text to put something in';
  - var.appendChild(child)  //var 안에 추가
  ```
3. Auto Write Text
  - text
  - index
  - show text based on index
  - increment index
```
function writeText() {
  document.body.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }
}
setInterval(writeText, 200);
```
