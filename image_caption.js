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
    $(this).wrap("<div class=\"image-caption-container\" style=\"" + style + "; text-align: " + alignment + "\"></div>");
    $(this).parent().width(imgwidth);
    $(this).parent().append("<div class=\"image-caption\">" + captiontext + "</div>");
  });
});