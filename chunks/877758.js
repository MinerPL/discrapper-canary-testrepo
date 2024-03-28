"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  r = s("785997"),
  o = s("417800");

function i(e) {
  let {
    step: t
  } = e, s = t === r.NUFSlides.AGE_GATE, n = t === r.NUFSlides.CHOOSE_TEMPLATE || t === r.NUFSlides.CREATION_INTENT, i = t === r.NUFSlides.CUSTOMIZE_GUILD, c = t === r.NUFSlides.CHANNEL_PROMPT || t === r.NUFSlides.JOIN_GUILD, u = i || c, d = n || u;
  return (0, a.jsxs)("div", {
    className: o.sidebar,
    children: [(0, a.jsx)("div", {
      className: l()(o.step1, {
        [o.show]: s
      })
    }), (0, a.jsx)("div", {
      className: l()(o.step24Clouds, {
        [o.show]: d
      })
    }), (0, a.jsx)("div", {
      className: l()(o.step34Flag, {
        [o.show]: u
      })
    }), (0, a.jsx)("div", {
      className: l()(o.step24Base, {
        [o.show]: d
      })
    }), (0, a.jsx)("div", {
      className: l()(o.step24Ground, {
        [o.show]: d
      })
    }), (0, a.jsx)("div", {
      className: l()(o.step2Base, {
        [o.show]: n
      })
    }), (0, a.jsx)("div", {
      className: l()(o.step2Character, {
        [o.show]: n
      })
    }), (0, a.jsx)("div", {
      className: l()(o.step34Base, {
        [o.show]: u
      })
    }), (0, a.jsx)("div", {
      className: l()(o.step3Character, {
        [o.show]: i
      })
    }), (0, a.jsx)("div", {
      className: l()(o.step4Character, {
        [o.show]: c
      })
    }), (0, a.jsx)("div", {
      className: l()(o.step24Foreground, {
        [o.show]: d
      })
    })]
  })
}