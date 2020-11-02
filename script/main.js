(function () {
  var store = {
    font: '',
    color: '',
    image: ''
  };

  var visuallyClass = 'visually-impaired';
  var body = $('body');
  var classList;

  function getFromStore() {
    store.font = localStorage.getItem('font');
    store.color = localStorage.getItem('color');
    store.image = localStorage.getItem('image');
  }

  function saveToStore(key, className) {
    getFromStore();


    if (store[key] === className) {
      localStorage.removeItem(key);
    } else {
      store[key] = className;

      if (store[key]) {
        localStorage.setItem(key, store[key]);
      }

      if (!store.font && !store.color && !store.image) {
        localStorage.clear();
      }
    }
  }

  function storeEmpty() {
    return !store.font && !store.color && !store.image;
  }

  function addClassTo(key, classString) {
    if (store[key]) {
      return classString+' '+store[key];
    }

    return classString;
  }

  function getClassList() {
    getFromStore();

    if (storeEmpty()) {
      return visuallyClass;
    } else {
      var classString = visuallyClass;

      classString = addClassTo('color', classString);
      classString = addClassTo('font', classString);
      classString = addClassTo('image', classString);

      return classString;
    }
  }

  function initImpaired() {
    classList = getClassList();
    body.prop('className', classList);
  }

  $(document).ready(function() {
    initImpaired();
  });

  $(".visually-impaired-menu-button").click(function () {
    $('.visually-impaired-navigation').toggleClass('visually-impaired-navigation--show');
    if(!body.hasClass("visually-impaired")){
      body.toggleClass('visually-impaired');
    }
  });

  $('.visually-impaired-font__item').click(function () {
    $('.visually-impaired-font__item').removeClass('visually-impaired-font__item--active');
    $(this).toggleClass('visually-impaired-font__item--active');

    saveToStore('font', $(this).data('font'));
    initImpaired();
  });

  $('.visually-impaired-color__item').click(function () {
    saveToStore('color', $(this).data('color'));
    initImpaired();
  });

  $('.visually-impaired-image__item').click(function () {
    $('.visually-impaired-image__item').removeClass('visually-impaired-image__item--active');
    $(this).toggleClass('visually-impaired-image__item--active');

    saveToStore('image', $(this).data('image'));
    initImpaired();
  });
}());

$('.mentors-list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
