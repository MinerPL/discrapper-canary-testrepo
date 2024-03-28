"use strict";
n.r(t), n.d(t, {
  OmniButtonNuxAnimation: function() {
    return T
  },
  useActivitiesInTextOnboardingVisibility: function() {
    return I
  }
});
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("500923"),
  o = n.n(r),
  u = n("442837"),
  d = n("524437"),
  c = n("607070"),
  f = n("802171"),
  h = n("605236"),
  m = n("175355"),
  p = n("160683"),
  E = n("921944"),
  C = n("545528");

function g(e) {
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

function S() {
  return (0, s.jsx)("div", {
    ref: g(a || (a = n.t(m, 2))),
    className: C.glow
  })
}

function _() {
  return (0, s.jsx)("div", {
    ref: g(l || (l = n.t(p, 2))),
    className: C.trinkets
  })
}
let T = e => {
  let {
    children: t
  } = e;
  return i.useEffect(() => {
    setTimeout(() => (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX, {
      dismissAction: E.ContentDismissActionType.AUTO_DISMISS
    }), 1e4)
  }, []), (0, s.jsxs)("div", {
    className: C.animation,
    children: [(0, s.jsx)(S, {}), (0, s.jsx)("div", {
      className: C.circleLayer
    }), (0, s.jsx)("div", {
      className: C.omniButton,
      children: t
    }), (0, s.jsx)(_, {})]
  })
};

function I(e, t) {
  let n = f.default.getCurrentConfig({
      location: t,
      guildId: null == e ? void 0 : e.guild_id
    }, {
      autoTrackExposure: !1
    }),
    a = n.entryPointEnabled;
  return n.activitiesInTextEnabled && a ? {
    desktopThrobberEnabled: "desktopThrobberEnabled" in n && n.desktopThrobberEnabled
  } : null
}