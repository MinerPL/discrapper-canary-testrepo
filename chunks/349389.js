"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("37983");
s("884691");
var l = s("160864"),
  n = s("527382"),
  i = s("782340"),
  r = function(e) {
    let {
      className: t,
      style: s,
      onDrop: r
    } = e;
    return (0, a.jsx)(l.default, {
      className: t,
      style: s,
      title: i.default.Messages.UPLOAD_EMOJI,
      description: i.default.Messages.UPLOAD_EMOJI_INSTRUCTIONS,
      icons: n.EMOJI_FILE_UPLOAD_ICONS,
      onDrop: r
    })
  }