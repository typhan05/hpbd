(function ($) {
  'use strict';
  function typingHappy() {
    var options = {
      strings: ['Có được vợ trong cuộc đời này là một điều thật ngọt ngào và may mắn nhất đối với anh. Cảm ơn em đã luôn ở bên ủng hộ và quan tâm anh. Chúc vợ meo yêu có một ngày sinh nhật tuyệt vời, một tuổi mới với nhiều may mắn, sức khoẻ, thành công và ngày càng xinh đẹp vợ nhé!'],
      typeSpeed: 40
    };
    var typed = new Typed('#intro', options);
  }
  function autoNext() {
    setTimeout(function() {
      $('.section-2').addClass('show');
      $('#myVideo').get(0).pause();
    }, 30000);
  }
  function countDown() {
    var countdownNumberEl = document.getElementById('countdown-number');
    var countdown = 30;

    countdownNumberEl.textContent = countdown;

    setInterval(function() {
      countdown = --countdown <= 0 ? 30 : countdown;

      countdownNumberEl.textContent = countdown;
    }, 1000);
  }
  $(document).ready(function () {
    typingHappy();
    autoNext();
    countDown();
  });

})(jQuery);