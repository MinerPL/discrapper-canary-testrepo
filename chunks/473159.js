n.d(t, {
  O: function() {
return s;
  }
}), n(47120);
var r = n(284737),
  i = n(228488),
  a = n(830917),
  o = n(919570);

function s(e) {
  let t = e.document,
n = (0, a.Ig)(e);

  function s() {
(0, o.gK)(n);
  }

  function l() {
setTimeout(() => {
  (0, o.HQ)(n);
}, 0);
  }
  for (let n of (e.addEventListener('resize', function() {
  (0, r.dx)(e);
}), e.addEventListener('focus', function() {
  (0, r.T_)(e, !0);
}), e.addEventListener('blur', function() {
  !e.document.hasFocus() && (0, r.T_)(e, !1);
}), e.addEventListener('unload', function() {
  (0, r.Rz)(e);
}), e.addEventListener('visibilitychange', function() {
  (0, r.CO)(e);
}), o.wu))
t.addEventListener(n, s, !0), t.addEventListener(n, l, !1);
  (0, i.uF)(t, function() {
(0, r.gH)(e);
  }), (0, r.S1)(e);
}