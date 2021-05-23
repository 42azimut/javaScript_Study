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

4. Pop up
- button
- click on button to activate popup
- popup container
- popup with text
- close btn popup with click event

```
open.addEventListener('click', () => {
  container.classList.add('active');
})

close.addEventListener('click', () => {
  container.classList.remove('active');
})
```

5. Purple Heart Rain
- heart css
- falling animation
- create heart
- add class
- add it to body
- interval

6. Background Change (random)
- button w/ click
- generate color
- change bg color on click

```
return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
```

7. Dark Mode Toggle
- text
- css for dark mode
- toggle
- toggle event
```
document.body.classList.toggle('dark', 
    e.target.checked)
```

8. img Carousel
- 3/4 images
- carousel container
- images with fixed width and hegith
- index
- automatic swtich index and update

9. Sound Board
- sounds (HAVE THESE READY SIR)
- array with names
- loop over array
- create buttons w/ text
- play sound on click

10. Zoom effect
- image
- track mouse movement
- set transform origin on hover

```
container.addEventListener('mousemove', (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;
  console.log(e.clientX);
  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = "scale(2)";
})

container.addEventListener('mouseleave', () => {
  img.style.transformOrigin = 'center center';
  img.style.transform = 'scale(1)';
})
```