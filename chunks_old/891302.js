"use strict";
n.r(t), n.d(t, {
  OmniButtonNuxAnimation: function() {
    return A
  },
  useActivitiesInTextOnboardingVisibility: function() {
    return _
  }
});
var s, a, l = n("37983"),
  i = n("884691"),
  r = n("865981"),
  o = n.n(r),
  u = n("446674"),
  d = n("151426"),
  c = n("206230"),
  f = n("75789"),
  h = n("10641"),
  C = n("876868"),
  p = n("670883"),
  m = n("994428"),
  E = n("821102");

function g(e) {
  let t = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    n = i.useRef(null);
  return i.useEffect(() => {
    let s;
    return null != n.current && (s = o.loadAnimation({
      container: n.current,
      renderer: "svg",
      loop: !0,
      autoplay: !t,
      animationData: JSON.parse(JSON.stringify(e))
    })), () => {
      null == s || s.destroy()
    }
  }, [n, t, e]), n
}

function S() {
  return (0, l.jsx)("div", {
    ref: g(s || (s = n.t(C, 2))),
    className: E.glow
  })
}

function T() {
  return (0, l.jsx)("div", {
    ref: g(a || (a = n.t(p, 2))),
    className: E.trinkets
  })
}
let A = e => {
  let {
    children: t
  } = e;
  return i.useEffect(() => {
    setTimeout(() => (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX, {
      dismissAction: m.ContentDismissActionType.AUTO_DISMISS
    }), 1e4)
  }, []), (0, l.jsxs)("div", {
    className: E.animation,
    children: [(0, l.jsx)(S, {}), (0, l.jsx)("div", {
      className: E.circleLayer
    }), (0, l.jsx)("div", {
      className: E.omniButton,
      children: t
    }), (0, l.jsx)(T, {})]
  })
};

function _(e, t) {
  let n = f.default.getCurrentConfig({
      location: t,
      guildId: null == e ? void 0 : e.guild_id
    }, {
      autoTrackExposure: !1
    }),
    s = n.entryPointEnabled;
  return n.activitiesInTextEnabled && s ? {
    desktopThrobberEnabled: "desktopThrobberEnabled" in n && n.desktopThrobberEnabled
  } : null
}