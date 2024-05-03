"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("749210"),
  d = n("110924"),
  c = n("58540"),
  f = n("100527"),
  h = n("906732"),
  m = n("527379"),
  p = n("484459"),
  E = n("318661"),
  C = n("502762"),
  g = n("271383"),
  S = n("594174"),
  _ = n("189357"),
  T = n("718617"),
  I = n("327250"),
  A = n("228168"),
  N = n("725409");

function v(e) {
  let {
    userId: t,
    guildId: n,
    onClose: s,
    className: v,
    infoPanelClassName: x,
    style: M
  } = e, R = (0, _.useCanAccessGuildMemberModView)(n), L = (0, r.useStateFromStores)([S.default], () => S.default.getUser(t), [t]), y = (0, r.useStateFromStores)([g.default], () => g.default.getMember(n, t), [n, t]), [O, j] = l.useState(null == L || null == y), P = (0, d.default)(y), D = l.useRef(null), {
    analyticsLocations: b
  } = (0, h.default)(f.default.GUILD_MEMBER_MOD_VIEW), U = (0, E.default)(t, n);
  return (l.useEffect(() => {
    !R && s()
  }, [R, s]), l.useEffect(() => {
    null != P && null == y && !O && s()
  }, [O, y, s, P]), l.useEffect(() => {
    null != L && null != y && j(!1)
  }, [L, y]), l.useEffect(() => {
    let e = null == y;
    return !O && e && (D.current = window.setTimeout(s, 500)), () => {
      null != D.current && window.clearTimeout(D.current)
    }
  }, [O, y, s]), (0, c.useSubscribeGuildMembers)({
    [n]: [t]
  }), l.useEffect(() => {
    (async function e() {
      let e = [u.default.requestMembersById(n, [t]), (0, m.getMemberSupplemental)(n, [t]), (0, p.maybeFetchUserProfileForPopout)(t, void 0, {
        guildId: n,
        dispatchWait: !0
      })];
      await Promise.all(e), j(!1)
    })()
  }, [n, t]), R) ? O || null == L || null == y ? (0, a.jsx)("div", {
    className: i()(N.sidebarContianer, N.loadingContainer, v),
    style: M,
    children: (0, a.jsx)(o.Spinner, {
      animated: !0,
      type: O ? o.Spinner.Type.SPINNING_CIRCLE : o.Spinner.Type.CHASING_DOTS
    })
  }) : (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: b,
    children: (0, a.jsx)("div", {
      className: i()(N.sidebarContianer, v),
      style: M,
      children: (0, a.jsx)(C.default, {
        user: L,
        displayProfile: U,
        profileType: A.UserProfileTypes.MODAL,
        forceShowPremium: !0,
        className: i()(N.profileThemedContainer),
        children: (0, a.jsxs)("div", {
          className: i()(N.innerContainer),
          children: [(0, a.jsx)(I.default, {
            userId: t,
            guildId: n,
            onClose: s
          }), (0, a.jsx)(T.default, {
            userId: t,
            guildId: n,
            onClose: s,
            className: x
          })]
        })
      })
    })
  }) : null
}