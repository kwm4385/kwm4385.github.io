function attachHoverListener(img_element, img_label) {
    img_label.hide();
    $(img_element).hover(
      function() {
        $(img_label).fadeIn();
      }, function() {
        $(img_label).fadeOut();
      }
    );
}

$(document).ready(function() {
    attachHoverListener($("#em-img"), $("#em-label"));
    attachHoverListener($("#gh-img"), $("#gh-label"));
    attachHoverListener($("#li-img"), $("#li-label"));
});