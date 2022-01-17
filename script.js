// Glitch Timeline Function
var $text = document.querySelector('.btn-glitch-active'),
    $filter = document.querySelector('.svg-sprite'),
    $turb = $filter.querySelector('#filter feTurbulence'),
    turbVal = { val: 0.000001 },
    turbValX = { val: 0.000001 };

var glitchTimeline = function() {
    var timeline = new TimelineMax({
        repeat: -1,
        repeatDelay: 2,
        paused: true,
        onUpdate: function () {
            $turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
        }
    });

    timeline
        .to(turbValX, 0.1, { val: 0.5 })
        .to(turbVal, 0.1, { val: 0.02 });
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });
    timeline
        .to(turbValX, 0.2, { val: 0.4 }, 0.4)
        .to(turbVal, 0.2, { val: 0.002 }, 0.4);
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });

    // console.log("duration is: " + timeline.duration());

    return {
        start: function() {
            timeline.play(0);
        },
        stop: function() {
            timeline.pause();
        }
    };
};

btnGlitch = new glitchTimeline();

$('.btn-glitch')
    .on('mouseenter', function () {
          $(this).addClass('btn-glitch-active');
          btnGlitch.start();
    })
    .on('mouseleave', function () {
        var $this = $(this);
        if ( $this.hasClass('btn-glitch-active') ) {
            $this.removeClass('btn-glitch-active');
            btnGlitch.stop();
        }
    });

    function linkedin(){
        window.open("https://www.linkedin.com/company/hackofiesta-iiitl/", "_blank")
    }
    function instagram(){
        window.open("https://www.instagram.com/hackofiesta_iiitl/", "_blank")
    }
    function twitter(){
        window.open("https://twitter.com/hof_iiitl", "_blank")
    }
    function facebook(){
        window.open("https://www.facebook.com/hackofiesta", "_blank")
    }

const $a = elem => document.querySelector(elem);
const countdown = function(_config) {
  const tarDate = $a(_config.target).getAttribute('data-date').split('-');
  const day = parseInt(tarDate[0]);
  const month = parseInt(tarDate[1]);
  const year = parseInt(tarDate[2]);
  let tarTime = $a(_config.target).getAttribute('data-time');
  let tarhour, tarmin;
  
  if (tarTime != null) {    
    tarTime = tarTime.split(':');
    tarhour = parseInt(tarTime[0]);
    tarmin = parseInt(tarTime[1]);
  }

  let dateNow = new Date();
  
  // Set the date we're counting down to
  const countDownDate = new Date(year, month-1, day, tarhour, tarmin, 0, 0).getTime();

  $a(_config.target+' .day .word').innerHTML = _config.dayWord;
  $a(_config.target+' .hour .word').innerHTML = _config.hourWord;
  $a(_config.target+' .min .word').innerHTML = _config.minWord;
  $a(_config.target+' .sec .word').innerHTML = _config.secWord; 
  
  const updateTime = () => {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is over, write some text 
    if (distance < 0) {
      $a(".countdown").innerHTML = "<h1>EXPIRED</h1>";
    } else {
      requestAnimationFrame(updateTime);

      $a(_config.target+' .day .num').innerHTML = addZero(days);
      $a(_config.target+' .hour .num').innerHTML = addZero(hours);
      $a(_config.target+' .min .num').innerHTML = addZero(minutes);
      $a(_config.target+' .sec .num').innerHTML = addZero(seconds);
    }
  }
  
  updateTime();
}

const addZero = (x) => (x < 10 && x >= 0) ? "0"+x : x;

const mylittlething_countdown = new countdown({
  target: '.countdown',
  dayWord: ' days',
  hourWord: ' hours',
  minWord: ' mins',
  secWord: ' secs'
});

const redirectreg=()=>{
    window.open("./form.html","_blank")
}
const redirectdis=()=>{
    window.open("https://discord.gg/gQxAH4YUkG","_blank")
}