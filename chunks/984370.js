"use strict";
n.r(t), n.d(t, {
  handleDoubleClick: function() {
    return A
  }
});
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("873546"),
  r = n("442837"),
  o = n("100527"),
  u = n("906732"),
  d = n("320007"),
  c = n("141321"),
  f = n("208450"),
  E = n("594174"),
  _ = n("502568"),
  T = n("358085"),
  m = n("998502"),
  I = n("300986"),
  p = n("314451"),
  h = n("35583"),
  N = n("981631"),
  S = n("176505"),
  C = n("210652");
async function A() {
  if ((0, T.isMac)() && T.isPlatformEmbedded) {
    var e, t, n;
    let s = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
    "Minimize" === s ? m.default.minimize() : "Maximize" === s && m.default.maximize()
  }
}

function g(e) {
  let {
    children: t,
    className: n,
    channelId: a,
    guildId: l,
    innerClassname: o,
    transparent: u = !1,
    toolbar: T,
    mobileToolbar: m,
    "aria-label": N,
    "aria-labelledby": S,
    scrollable: g,
    role: M,
    hideSearch: R,
    showDivider: O
  } = e, v = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), L = (null == v ? void 0 : v.isStaff()) || (null == v ? void 0 : v.isStaffPersonal()) || !1;
  return (0, s.jsx)(_.default, {
    className: n,
    innerClassName: o,
    toolbar: function() {
      if (null == T) return null;
      let e = null != a && !R;
      return i.isMobile ? m : (0, s.jsxs)(s.Fragment, {
        children: [T, e ? (0, s.jsx)(f.default, {
          className: C.search
        }, null != l ? l : a) : null, O && (0, s.jsx)(_.default.Divider, {}), (0, s.jsx)(h.default, {}), (0, s.jsx)(d.default, {
          canShowReminder: !0
        }), (0, s.jsx)(c.default, {}), L ? (0, s.jsx)(p.default, {}) : (0, s.jsx)(I.default, {})]
      })
    }(),
    transparent: u,
    onDoubleClick: A,
    "aria-label": N,
    "aria-labelledby": S,
    role: M,
    scrollable: g,
    children: t
  })
}

function M(e) {
  let {
    children: t,
    className: n,
    "aria-label": a,
    "aria-labelledby": l,
    role: i
  } = e;
  return (0, s.jsx)(_.default, {
    className: n,
    onDoubleClick: A,
    "aria-label": a,
    "aria-labelledby": l,
    role: i,
    children: t
  })
}

function R(e) {
  let {
    isAuthenticated: t = !0,
    ...n
  } = e, {
    analyticsLocations: a
  } = (0, u.default)(o.default.HEADER_BAR), i = l()(n.className, {
    [C.forumOrHome]: null != n.channelType && N.ChannelTypesSets.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === S.StaticChannelRoute.GUILD_HOME
  });
  return (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: a,
    children: t ? (0, s.jsx)(g, {
      ...n,
      className: i
    }) : (0, s.jsx)(M, {
      ...n,
      className: i
    })
  })
}
R.Title = _.default.Title, R.Icon = _.default.Icon, R.Divider = _.default.Divider, R.Caret = _.default.Caret, t.default = R