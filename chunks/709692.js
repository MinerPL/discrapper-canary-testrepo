"use strict";
n.d(t, {
  Y0: function() {
    return l.Y0
  },
  hz: function() {
    return l.hz
  },
  mz: function() {
    return l.mz
  },
  u_: function() {
    return u
  },
  xB: function() {
    return l.xB
  }
}), n(47120);
var i = n(470079),
  r = n(97613),
  s = n.n(r),
  o = n(952265),
  a = n(307616),
  l = n(466377);

function u(e) {
  let {
    renderModal: t,
    onCloseRequest: n,
    onCloseCallback: r
  } = e, [l] = i.useState(() => s()()), u = (0, a.v)();
  i.useLayoutEffect(() => ((0, o.h7)(t, {
    modalKey: l,
    onCloseRequest: n,
    onCloseCallback: r
  }, u), () => {
    (0, o.Mr)(l, u)
  }), []);
  let _ = i.useRef(!0);
  return i.useLayoutEffect(() => {
    !_.current && (0, o.o)(l, t, n, r, u), _.current = !1
  }, [t, n]), null
}