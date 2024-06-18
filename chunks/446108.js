"use strict";
n.d(t, {
  Mb: function() {
    return a
  },
  Z0: function() {
    return s
  },
  d1: function() {
    return u
  },
  fy: function() {
    return o
  },
  r5: function() {
    return l
  }
});
var i = n(153124),
  r = n(689938);
let s = (0, i.hQ)(),
  o = (0, i.hQ)(),
  a = (0, i.hQ)(),
  l = (0, i.hQ)();

function u() {
  [{
    id: s,
    text: ","
  }, {
    id: o,
    text: ","
  }, {
    id: a,
    text: r.Z.Messages.REACTIONS
  }, {
    id: l,
    text: r.Z.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
  }].forEach(e => {
    let {
      id: t,
      text: n
    } = e, i = document.getElementById(t);
    null == i && ((i = document.createElement("div")).setAttribute("id", t), i.innerText = n, i.style.display = "none", document.body.appendChild(i))
  })
}