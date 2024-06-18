"use strict";
n.d(t, {
  E: function() {
    return _
  },
  T: function() {
    return u
  }
});
var i, r = n(470079),
  s = n(802498),
  o = n(442837),
  a = n(607070);
let l = null !== (i = document.getElementById("app-mount")) && void 0 !== i ? i : document;

function u(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    i = (0, o.e7)([a.Z], () => a.Z.keyboardModeEnabled),
    u = r.useRef(!1);
  return u.current = !i, (0, s.ZP)(e, {
    ...n,
    disableReturnRef: u,
    attachTo: null !== (t = n.attachTo) && void 0 !== t ? t : l,
    returnRef: n.returnRef
  })
}

function _(e) {
  return u(e.containerRef), e.children
}