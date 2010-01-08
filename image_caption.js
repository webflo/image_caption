/*$Id$*/
$(document).ready(function(){
  $("img.caption").each(function(i) {
    var imgwidth = $(this).width();
    var imgheight = $(this).height();
    var captiontext = $(this).attr('title');
    var style = $(this).attr('style');
    var alignment = $(this).attr('align');
    //Clear image styles to prevent conflicts with parent div
    $(this).attr('style','');
    $(this).wrap("<span class=\"image-caption-container\" style=\"display:block;" + style + "; text-align: " + alignment + "\"></span>");
    if(imgwidth != 'undefined' && imgwidth != 0){
      $(this).parent().width(imgwidth);
    }
    $(this).parent().append("<span style=\"display:block;\" class=\"image-caption\">" + captiontext + "</span>");
  });
});