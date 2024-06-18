"use strict";
n.d(t, {
  O: function() {
    return a
  }
}), n(47120);
var i = n(284737),
  r = n(228488),
  s = n(830917),
  o = n(919570);

function a(e) {
  let t = e.document,
    n = (0, s.Ig)(e);

  function a() {
    (0, o.gK)(n)
  }

  function l() {
    setTimeout(() => {
      (0, o.HQ)(n)
    }, 0)
  }
  for (let n of (e.addEventListener("resize", function() {
      (0, i.dx)(e)
    }), e.addEventListener("focus", function() {
      (0, i.T_)(e, !0)
    }), e.addEventListener("blur", function() {
      !e.document.hasFocus() && (0, i.T_)(e, !1)
    }), e.addEventListener("unload", function() {
      (0, i.Rz)(e)
    }), e.addEventListener("visibilitychange", function() {
      (0, i.CO)(e)
    }), o.wu)) t.addEventListener(n, a, !0), t.addEventListener(n, l, !1);
  (0, r.uF)(t, function() {
    (0, i.gH)(e)
  }), (0, i.S1)(e)
}