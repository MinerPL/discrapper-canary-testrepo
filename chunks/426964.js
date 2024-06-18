"use strict";
var i = n(735250),
  r = n(470079),
  s = n(704215),
  o = n(481060),
  a = n(442837),
  l = n(100527),
  u = n(231467),
  _ = n(605236),
  d = n(246364),
  c = n(937111),
  E = n(741606),
  I = n(703656),
  T = n(314897),
  h = n(271383),
  S = n(594174),
  f = n(87888),
  N = n(63063),
  A = n(970606),
  m = n(645896),
  O = n(905362),
  R = n(353093),
  C = n(954138),
  p = n(169559),
  g = n(284019),
  L = n(308083),
  v = n(981631),
  D = n(689938),
  M = n(534856);

function P(e) {
  e.stopPropagation()
}
t.Z = r.memo(function(e) {
  var t;
  let {
    clan: n,
    isLoading: y,
    onClose: U,
    profileViewedAnalytics: b
  } = e, G = null == n ? void 0 : n.identityGuildId, w = (0, m.Cc)(null != G ? G : null), k = null == n ? void 0 : n.tag, B = (0, p.Z)("clan_guild_profile"), x = (0, C.Z)("base_clan_tag_chiplet"), V = (0, a.e7)([T.default], () => T.default.getId()), Z = (0, a.e7)([h.ZP], () => null != G ? h.ZP.getMember(G, V) : null, [G, V]), H = (0, a.e7)([c.Z], () => {
    var e;
    return (null == w ? void 0 : w.id) != null && (null === (e = c.Z.getRequest(w.id)) || void 0 === e ? void 0 : e.applicationStatus) === d.wB.SUBMITTED
  }), F = null != w && w.memberCount >= L.Du, Y = (0, _.wE)(s.z.CLAN_TAG_WAITLIST), j = (0, a.e7)([S.default], () => S.default.getUser(V), [V]), W = (null == Z ? void 0 : Z.joinedAt) != null, K = (0, R.Z4)(G, null == j ? void 0 : j.clan), z = null != (0, E.Z)(G);
  r.useEffect(() => {
    null != G && (0, A.u0)({
      guildId: G,
      hasJoinRequest: z,
      ...b,
      location: l.Z.CLAN_GUILD_PROFILE
    })
  }, [G, z, b]);
  let q = r.useCallback(() => {
      if (!Y)(0, A.pl)({
        originGuildId: null == b ? void 0 : b.guildId,
        tagGuildId: G,
        messageId: null == b ? void 0 : b.messageId,
        tagUserId: null == b ? void 0 : b.tagUserId,
        location: l.Z.CLAN_GUILD_PROFILE
      }), (0, o.showToast)((0, o.createToast)(D.Z.Messages.CLAN_USER_WAITLIST_TOAST_SUCCESS, o.ToastType.SUCCESS))
    }, [G, Y, b]),
    X = r.useCallback(e => {
      if (null != G) e.stopPropagation(), e.preventDefault(), null == U || U(), (0, O.S)(G)
    }, [G, U]),
    Q = r.useCallback(e => {
      if (null == w || null == G) return;
      if (e.stopPropagation(), e.preventDefault(), null == U || U(), !z)(0, O.q)(G, w, {
        source: null == b ? void 0 : b.source,
        messageId: null == b ? void 0 : b.messageId,
        tagUserId: null == b ? void 0 : b.tagUserId,
        location: l.Z.CLAN_GUILD_PROFILE
      })
    }, [w, G, z, U, b]),
    J = r.useCallback(() => {
      open(N.Z.getArticleURL(v.BhN.CLANS_FAQ))
    }, []),
    $ = r.useCallback(() => {
      if (null != G)(0, I.uL)(v.Z5c.GUILD_MEMBER_VERIFICATION(G))
    }, [G]),
    ee = r.useCallback(() => {
      if (null != G)(0, I.XU)(G)
    }, [G]),
    et = r.useMemo(() => {
      var e, t;
      return {
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.SMALL,
        fullWidth: !0,
        className: M.button,
        themeColor: null !== (t = null == w ? void 0 : null === (e = w.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
      }
    }, [null == w ? void 0 : null === (t = w.branding) || void 0 === t ? void 0 : t.primaryColor]),
    en = r.useMemo(() => {
      switch (!0) {
        case !x:
          return null;
        case !W && !B && !Y:
          return (0, i.jsx)(o.Button, {
            onClick: q,
            color: o.Button.Colors.PRIMARY,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            children: D.Z.Messages.CLAN_USER_WAITLIST_CTA
          });
        case !W && !B && Y:
          return (0, i.jsxs)(o.Button, {
            innerClassName: M.waitlistedButton,
            onClick: J,
            color: o.Button.Colors.PRIMARY,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            children: [D.Z.Messages.CLAN_USER_WAITLISTED, (0, i.jsx)(f.Z, {})]
          });
        case !W && z:
          return (0, i.jsx)(g.Z, {
            onClick: $,
            ...et,
            children: D.Z.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
          });
        case !W:
          return (0, i.jsx)(g.Z, {
            onClick: Q,
            ...et,
            children: D.Z.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
          });
        case W && !K:
          return (0, i.jsx)(g.Z, {
            onClick: X,
            ...et,
            children: D.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
          });
        case W && K:
          return (0, i.jsx)(g.Z, {
            onClick: ee,
            ...et,
            children: D.Z.Messages.CLAN_USER_GO_TO_CLAN_CTA
          });
        default:
          return null
      }
    }, [et, X, Q, $, ee, z, K, B, Y, q, J, x, W]),
    ei = r.useMemo(() => ({
      className: M.container,
      onClick: P
    }), []);
  return null == k || null == w || null == G || y ? (0, i.jsx)("div", {
    ...ei,
    children: (0, i.jsx)(o.Spinner, {})
  }) : (0, i.jsxs)("div", {
    ...ei,
    children: [(0, i.jsx)(u.xV, {
      clan: w,
      className: M.cardContainer,
      isMember: W,
      hasPendingJoinRequest: H,
      atMaxMemberCapacity: F
    }), null != en && (0, i.jsx)("div", {
      className: M.buttonContainer,
      children: en
    })]
  })
})