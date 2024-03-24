"use strict";
n.r(t), n.d(t, {
  sendContentImageReply: function() {
    return l
  }
});
var a = n("526409");
let l = e => {
  let {
    reply: t,
    user: n,
    altText: l,
    file: s
  } = e;
  return (0, a.sendReply)({
    file: s,
    altText: l,
    user: n,
    reply: t
  })
}