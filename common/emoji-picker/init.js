import"./index.js";$(".textarea-emoji-picker emoji-picker").dataSource="./data.json",$(document).ready((function(){$(document).on("emoji-click",".textarea-emoji-picker emoji-picker",(function(e){let i=$(this).parents(".textarea-emoji-picker").find("textarea"),t=$(this).data("button");insertTextAtCursor(i,e.detail.unicode),void 0!==t&&$(".btnSavePost").removeAttr("disabled")})),$(document).on("click",".emoji-picker-button",(function(e){var i=$(this).parents(".textarea-emoji-picker").find(".emoji-picker");$(".emoji-picker").not(i).hide(),i.toggle()})),$(document).on("click","emoji-picker, .emoji-picker, .emoji-picker-button",(function(e){e.stopPropagation()})),$(document).click((function(){$(".emoji-picker").hide()}))}));