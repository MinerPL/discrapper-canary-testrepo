"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("205822"),
  n = s("731994"),
  i = s("689938");
t.default = function(e) {
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