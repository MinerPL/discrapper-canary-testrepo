"use strict";
n.r(t), n.d(t, {
  OmniButtonNuxAnimation: function() {
    return _
  }
});
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("500923"),
  o = n.n(r),
  u = n("442837"),
  d = n("524437"),
  c = n("607070"),
  f = n("605236"),
  h = n("175355"),
  m = n("160683"),
  p = n("921944"),
  E = n("444473");

function C(e) {
  let t = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    n = i.useRef(null);
  return i.useEffect(() => {
    let a;
    return null != n.current && (a = o().loadAnimation({
      container: n.current,
      renderer: "svg",
      loop: !0,
      autoplay: !t,
      animationData: JSON.parse(JSON.stringify(e))
    })), () => {
      null == a || a.destroy()
    }
  }, [n, t, e]), n
}

function g() {
  return (0, s.jsx)("div", {
    ref: C(a || (a = n.t(h, 2))),
    className: E.glow
  })
}

function S() {
  return (0, s.jsx)("div", {
    ref: C(l || (l = n.t(m, 2))),
    className: E.trinkets
  })
}
let _ = e => {
  let {
    children: t
  } = e;
  return i.useEffect(() => {
    setTimeout(() => (0, f.markDismissibleContentAsDismissed)(d.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
      dismissAction: p.ContentDismissActionType.AUTO_DISMISS
    }), 1e4)
  }, []), (0, s.jsxs)("div", {
    className: E.animation,
    children: [(0, s.jsx)(g, {}), (0, s.jsx)("div", {
      className: E.circleLayer
    }), (0, s.jsx)("div", {
      className: E.omniButton,
      children: t
    }), (0, s.jsx)(S, {})]
  })
}