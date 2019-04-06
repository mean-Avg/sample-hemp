window.addEventListener('load', () => {
    const el = $('#app');
  
    // Compile Handlebar Templates
    const homeTemplate = Handlebars.compile($('#home-template').html());
    const errorTemplate = Handlebars.compile($('#error-template').html());
    const aboutTemplate = Handlebars.compile($('#about-template').html());
    const productsTemplate = Handlebars.compile($('#Products-template').html());
    const contactTemplate = Handlebars.compile($('#contact-template').html());
  
    // Router Declaration
const router = new Router({
    mode: 'history',
    page404: (path) => {
      const html = errorTemplate({
        color: 'yellow',
        title: 'Error 404 - Page NOT Found!',
        message: `The path '/${path}' does not exist on this site`,
      });
      el.html(html);
    },
  });
  
  router.add('/', () => {
    let html = homeTemplate();
    el.html(html);
  });
  
  router.add('/aboutus', () => {
    let html = aboutTemplate();
    el.html(html);
  });
  
  router.add('/products', () => {
    var heading='Yarn';
    var counter = 0;

$(document).ready(function() {
    $('#car-left').on('click', function(){
        counter++;
      $(".center-img").css("transform","translateX("+counter*-33.33+"%)");
      $(".left-roll").css("transform","translateX("+counter*-45+"%)");
      $(".right-roll").css("transform","translateX("+counter*45+"%)");
      $("#car-left").removeClass("selected");
      $("#car-right").removeAttr("disabled");
      if(counter==2) $("#car-left").attr("disabled", "disabled");
    });
  });

  $(document).ready(function() {
    $('#car-right').on('click', function(){
        counter--;
        $(".center-img").css("transform","translateX("+counter*-33.33+"%)");
        $(".left-roll").css("transform","translateX("+counter*-45+"%)");
        $(".right-roll").css("transform","translateX("+counter*45+"%)");
        $("#car-right").removeClass("selected");
      $("#car-left").removeAttr("disabled");
      if(counter==0) $("#car-right").attr("disabled","disabled");
    });
  });

    let html = productsTemplate({
      heading: heading,
    });
    el.html(html);
  });


  router.add('/contactus', () => {
    let html = contactTemplate();
    el.html(html);
  });
  
  // Navigate app to current url
  router.navigateTo(window.location.pathname);
  
   // Highlight Active Menu on Refresh/Page Reload
  const link = $(`a[href$='${window.location.pathname}']`);
  
  link.addClass('active');
  
  $('a:not(.footer-anchor)').on('click', (event) => {
    // Block browser page load
    event.preventDefault();
  
    // Highlight Active Menu on Click
    const target = $(event.target);
    $('.item').removeClass('active');
    target.addClass('active');
  
    // Navigate to clicked url
    const href = target.attr('href');
    const path = href.substr(href.lastIndexOf('/'));
    router.navigateTo(path);
  });
  });

  


