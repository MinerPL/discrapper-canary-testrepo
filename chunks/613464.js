"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
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
  E = n("747074"),
  C = n("271383"),
  g = n("594174"),
  S = n("189357"),
  _ = n("718617"),
  T = n("327250"),
  I = n("228168"),
  A = n("701744");

function v(e) {
  let {
    userId: t,
    guildId: n,
    onClose: s,
    className: v,
    infoPanelClassName: N,
    style: x
  } = e, M = (0, S.useCanAccessGuildMemberModView)(n), R = (0, r.useStateFromStores)([g.default], () => g.default.getUser(t), [t]), L = (0, r.useStateFromStores)([C.default], () => C.default.getMember(n, t), [n, t]), [y, O] = l.useState(null == R || null == L), j = (0, d.default)(L), P = l.useRef(null), {
    analyticsLocations: D
  } = (0, h.default)(f.default.GUILD_MEMBER_MOD_VIEW);
  return (l.useEffect(() => {
    !M && s()
  }, [M, s]), l.useEffect(() => {
    null != j && null == L && !y && s()
  }, [y, L, s, j]), l.useEffect(() => {
    null != R && null != L && O(!1)
  }, [R, L]), l.useEffect(() => {
    let e = null == L;
    return !y && e && (P.current = window.setTimeout(s, 500)), () => {
      null != P.current && window.clearTimeout(P.current)
    }
  }, [y, L, s]), (0, c.useSubscribeGuildMembers)({
    [n]: [t]
  }), l.useEffect(() => {
    (async function e() {
      let e = [u.default.requestMembersById(n, [t]), (0, m.getMemberSupplemental)(n, [t]), (0, p.default)(t, void 0, {
        guildId: n,
        dispatchWait: !0
      })];
      await Promise.all(e), O(!1)
    })()
  }, [n, t]), M) ? y || null == R || null == L ? (0, a.jsx)("div", {
    className: i()(A.sidebarContianer, A.loadingContainer, v),
    style: x,
    children: (0, a.jsx)(o.Spinner, {
      animated: !0,
      type: y ? o.Spinner.Type.SPINNING_CIRCLE : o.Spinner.Type.CHASING_DOTS
    })
  }) : (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: D,
    children: (0, a.jsx)("div", {
      className: i()(A.sidebarContianer, v),
      style: x,
      children: (0, a.jsx)(E.default, {
        user: R,
        guildId: n,
        profileType: I.UserProfileTypes.MODAL,
        forceShowPremium: !0,
        className: i()(A.profileThemedContainer),
        children: (0, a.jsxs)("div", {
          className: i()(A.innerContainer),
          children: [(0, a.jsx)(T.default, {
            userId: t,
            guildId: n,
            onClose: s
          }), (0, a.jsx)(_.default, {
            userId: t,
            guildId: n,
            onClose: s,
            className: N
          })]
        })
      })
    })
  }) : null
}