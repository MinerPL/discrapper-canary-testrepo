"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("851387"),
  d = n("84339"),
  c = n("750560"),
  f = n("812204"),
  h = n("685665"),
  m = n("645266"),
  p = n("506885"),
  E = n("430312"),
  g = n("26989"),
  S = n("697218"),
  C = n("459824"),
  _ = n("516832"),
  I = n("986358"),
  T = n("590456"),
  v = n("561481");

function x(e) {
  let {
    userId: t,
    guildId: n,
    onClose: s,
    className: x,
    infoPanelClassName: N,
    style: A
  } = e, M = (0, C.useCanAccessGuildMemberModView)(n), R = (0, r.useStateFromStores)([S.default], () => S.default.getUser(t), [t]), j = (0, r.useStateFromStores)([g.default], () => g.default.getMember(n, t), [n, t]), [L, y] = l.useState(null == R || null == j), O = (0, d.default)(j), P = l.useRef(null), {
    analyticsLocations: D
  } = (0, h.default)(f.default.GUILD_MEMBER_MOD_VIEW);
  return (l.useEffect(() => {
    !M && s()
  }, [M, s]), l.useEffect(() => {
    let e = null != O && null == j;
    e && !L && s()
  }, [L, j, s, O]), l.useEffect(() => {
    null != R && null != j && y(!1)
  }, [R, j]), l.useEffect(() => {
    let e = null == j;
    return !L && e && (P.current = window.setTimeout(s, 500)), () => {
      null != P.current && window.clearTimeout(P.current)
    }
  }, [L, j, s]), (0, c.useSubscribeGuildMembers)({
    [n]: [t]
  }), l.useEffect(() => {
    (async function e() {
      let e = [o.default.requestMembersById(n, [t]), (0, m.getMemberSupplemental)(n, [t]), (0, p.default)(t, void 0, {
        guildId: n,
        dispatchWait: !0
      })];
      await Promise.all(e), y(!1)
    })()
  }, [n, t]), M) ? L || null == R || null == j ? (0, a.jsx)("div", {
    className: i(v.sidebarContianer, v.loadingContainer, x),
    style: A,
    children: (0, a.jsx)(u.Spinner, {
      animated: !0,
      type: L ? u.Spinner.Type.SPINNING_CIRCLE : u.Spinner.Type.CHASING_DOTS
    })
  }) : (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: D,
    children: (0, a.jsx)("div", {
      className: i(v.sidebarContianer, x),
      style: A,
      children: (0, a.jsx)(E.default, {
        user: R,
        guildId: n,
        profileType: T.UserProfileTypes.MODAL,
        forceShowPremium: !0,
        className: i(v.profileThemedContainer),
        children: (0, a.jsxs)("div", {
          className: i(v.innerContainer),
          children: [(0, a.jsx)(I.default, {
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