"use strict";
s.r(t), s.d(t, {
  MessageBlockColors: function() {
    return r
  },
  default: function() {
    return u
  }
});
var n = s("735250");
s("470079");
var l = s("803997"),
  a = s.n(l),
  o = s("481060"),
  i = s("789718");
let r = {
  RED: i.redMessageBlock,
  YELLOW: i.yellowMessageBlock,
  BROWN: i.brownMessageBlock
};

function u(e) {
  let {
    color: t,
    icon: s,
    children: l,
    className: r
  } = e;
  return (0, n.jsx)(o.FormErrorBlock, {
    icon: e => (0, n.jsx)(s, {
      height: 20,
      width: 20,
      ...e
    }),
    iconClassName: i.messageBlockIcon,
    className: a()(t, r),
    children: l
  })
}