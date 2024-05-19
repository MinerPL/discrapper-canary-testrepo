"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  a = n("524437"),
  s = n("481060"),
  o = n("442837"),
  l = n("100527"),
  u = n("231467"),
  d = n("605236"),
  _ = n("741606"),
  c = n("703656"),
  E = n("314897"),
  I = n("271383"),
  T = n("594174"),
  f = n("87888"),
  S = n("63063"),
  h = n("970606"),
  A = n("645896"),
  m = n("905362"),
  N = n("353093"),
  p = n("954138"),
  O = n("169559"),
  C = n("284019"),
  R = n("981631"),
  g = n("689938"),
  L = n("534856");

function v(e) {
  e.stopPropagation()
}
t.default = r.memo(function(e) {
  var t;
  let {
    clan: n,
    isLoading: D,
    onClose: M,
    profileViewedAnalytics: y
  } = e, P = null == n ? void 0 : n.identityGuildId, U = (0, A.useClanInfo)(null != P ? P : null), b = null == n ? void 0 : n.tag, G = (0, O.default)("clan_guild_profile"), w = (0, p.default)("base_clan_tag_chiplet"), k = (0, o.useStateFromStores)([E.default], () => E.default.getId()), B = (0, o.useStateFromStores)([I.default], () => null != P ? I.default.getMember(P, k) : null, [P, k]), V = (0, d.useIsDismissibleContentDismissed)(a.DismissibleContent.CLAN_TAG_WAITLIST), x = (0, o.useStateFromStores)([T.default], () => T.default.getUser(k), [k]), F = (null == B ? void 0 : B.joinedAt) != null, H = (0, N.isGuildAdoptedUserClanIdentity)(P, null == x ? void 0 : x.clan), Y = null != (0, _.default)(P);
  r.useEffect(() => {
    null != P && (0, h.trackClanProfileViewed)({
      guildId: P,
      hasJoinRequest: Y,
      ...y,
      location: l.default.CLAN_GUILD_PROFILE
    })
  }, [P, Y, y]);
  let j = r.useCallback(() => {
      !V && ((0, h.trackClanApplyWaitlist)({
        originGuildId: null == y ? void 0 : y.guildId,
        tagGuildId: P,
        messageId: null == y ? void 0 : y.messageId,
        tagUserId: null == y ? void 0 : y.tagUserId,
        location: l.default.CLAN_GUILD_PROFILE
      }), (0, s.showToast)((0, s.createToast)(g.default.Messages.CLAN_USER_WAITLIST_TOAST_SUCCESS, s.ToastType.SUCCESS)))
    }, [P, V, y]),
    W = r.useCallback(e => {
      null != P && (e.stopPropagation(), e.preventDefault(), null == M || M(), (0, m.openAdoptClanIdentityModal)(P))
    }, [P, M]),
    K = r.useCallback(e => {
      if (null != U && null != P) e.stopPropagation(), e.preventDefault(), null == M || M(), !Y && (0, m.openClanApplyFlow)(P, U, {
        source: null == y ? void 0 : y.source,
        messageId: null == y ? void 0 : y.messageId,
        tagUserId: null == y ? void 0 : y.tagUserId,
        location: l.default.CLAN_GUILD_PROFILE
      })
    }, [U, P, Y, M, y]),
    z = r.useCallback(() => {
      open(S.default.getArticleURL(R.HelpdeskArticles.CLANS_FAQ))
    }, []),
    Z = r.useCallback(() => {
      null != P && (0, c.transitionTo)(R.Routes.GUILD_MEMBER_VERIFICATION(P))
    }, [P]),
    X = r.useCallback(() => {
      null != P && (0, c.transitionToGuild)(P)
    }, [P]),
    Q = r.useMemo(() => {
      var e, t;
      return {
        color: s.Button.Colors.BRAND,
        size: s.Button.Sizes.SMALL,
        fullWidth: !0,
        className: L.button,
        themeColor: null !== (t = null == U ? void 0 : null === (e = U.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
      }
    }, [null == U ? void 0 : null === (t = U.branding) || void 0 === t ? void 0 : t.primaryColor]),
    q = r.useMemo(() => {
      switch (!0) {
        case !w:
          return null;
        case !F && !G && !V:
          return (0, i.jsx)(s.Button, {
            onClick: j,
            color: s.Button.Colors.PRIMARY,
            size: s.Button.Sizes.SMALL,
            fullWidth: !0,
            children: g.default.Messages.CLAN_USER_WAITLIST_CTA
          });
        case !F && !G && V:
          return (0, i.jsxs)(s.Button, {
            innerClassName: L.waitlistedButton,
            onClick: z,
            color: s.Button.Colors.PRIMARY,
            size: s.Button.Sizes.SMALL,
            fullWidth: !0,
            children: [g.default.Messages.CLAN_USER_WAITLISTED, (0, i.jsx)(f.default, {})]
          });
        case !F && Y:
          return (0, i.jsx)(C.default, {
            onClick: Z,
            ...Q,
            children: g.default.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
          });
        case !F:
          return (0, i.jsx)(C.default, {
            onClick: K,
            ...Q,
            children: g.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
          });
        case F && !H:
          return (0, i.jsx)(C.default, {
            onClick: W,
            ...Q,
            children: g.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
          });
        case F && H:
          return (0, i.jsx)(C.default, {
            onClick: X,
            ...Q,
            children: g.default.Messages.CLAN_USER_GO_TO_CLAN_CTA
          });
        default:
          return null
      }
    }, [Q, W, K, Z, X, Y, H, G, V, j, z, w, F]),
    J = r.useMemo(() => ({
      className: L.container,
      onClick: v
    }), []);
  return null == b || null == U || null == P || D ? (0, i.jsx)("div", {
    ...J,
    children: (0, i.jsx)(s.Spinner, {})
  }) : (0, i.jsxs)("div", {
    ...J,
    children: [(0, i.jsx)(u.ClanDiscoveryCardView, {
      clan: U,
      className: L.cardContainer,
      isMember: F
    }), null != q && (0, i.jsx)("div", {
      className: L.buttonContainer,
      children: q
    })]
  })
})