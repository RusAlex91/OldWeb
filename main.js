for (let i = 1; i < 27; i++) {
  const markup = `
<div class="window  bannerSmall${[i]} small">
  <div class="title-bar">
    <div class="title-bar-text">Netscape Navigator</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button class="close-btn" aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body">
    <div class="small">
      <img class="bottom-banner_1" src="img/small/small (${[i]}).gif" alt="">
    </div>
  </div>
</div>

`
  const varBanner = `bannerPlaseholder${i}`
  document.getElementsByClassName(varBanner)[0].innerHTML = markup
}

// win98 desktop

$('.browser-wrapper').draggable()
$('.window').draggable()
$('.bannersmalldrag').draggable()
$('.icon').draggable()

// var hidden = false;
// $(".close-btn").on("click", function() {
//   if (hidden === false){
//     debugger
//   $(".close-btn").closest(".window").addClass("hidden")
//   hidden = true;
//   }
// hidden = false
// })
const btns = document.querySelectorAll('.close-btn')
btns.forEach((item, i) => {
  item.addEventListener('click', function () {
    $(item)
      .closest('.window')
      .addClass('hidden')
  })
})

$('.cancel, .close').on('click', function (e) {
  e.preventDefault()
  $('.window').hide()
})

$('.ok').on('click', function (e) {
  e.preventDefault()
  $('.overlay').toggleClass('on')
  $('.power-button').fadeIn()
})

$('.start-btn').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('active')
  $('.start-menu').toggleClass('open')
})

$('.windows-update').on('click', function () {
  $('.overlay').addClass('on')
  $('.start-menu').removeClass('open')
  $('.start-btn').removeClass('active')
  $('.window').hide()
  $('.power-button').hide()
  setTimeout(function () {
    $('.desktop').addClass('windowsXP')
    $('.overlay').removeClass('on')
  }, 3000)
})

$('.turn-on-computer').on('click', function () {
  $('.power-button').addClass('on')
  $('.window').hide()
  $('.start-menu').removeClass('open')
  $('.start-btn').removeClass('active')
  setTimeout(function () {
    $('.power-button').removeClass('on')
    $('.power-button').fadeOut()
  }, 2000)
  setTimeout(function () {
    $('.overlay').removeClass('on')
  }, 3000)
})
// const minibanners = document.getElementsByClassName("partner-banner")
//

// async function blink() {
//   for (var i = 0; i < minibanners.length; i++) {
//     if (i % 2 == 0) {
//       minibanners[i].classList.toggle("hide")
//
//       await timer(1000)
//     } else {
//       minibanners[i].classList.toggle("hide")
//
//       await timer(1000)
//     }
//   }
// }
// blink()
// setInterval(blink, 20000);

function timer (v) {
  return new Promise(function (r) {
    return setTimeout(r, v)
  })
}
async function showBannerModale () {
  const banners = document.getElementsByClassName('window')
  for (let i = 0; i < banners.length; i++) {
    banners[i].classList.remove('hidden')
    await timer(4000)
  }
}
setTimeout(showBannerModale, 5000)

async function showBannerSmall () {
  const banners = document.getElementsByClassName('bannersmalldrag')
  for (let i = 0; i < banners.length; i++) {
    await timer(4500)
    banners[i].classList.remove('hidden')
  }
}
setTimeout(showBannerSmall, 5000)
