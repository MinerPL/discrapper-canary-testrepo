"use strict";
n.r(t), n("47120");
var i, r, a = n("735250"),
  s = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("442837"),
  d = n("481060"),
  _ = n("906732"),
  c = n("318374"),
  E = n("522289"),
  I = n("314897"),
  T = n("346656");
n("5192");
var f = n("342656"),
  S = n("785717"),
  h = n("706327"),
  A = n("285470"),
  m = n("171368"),
  N = n("228168"),
  p = n("689938"),
  O = n("498106");
(r = i || (i = {}))[r.NOT_CHECKED = 0] = "NOT_CHECKED", r[r.NOT_OVERFLOWING = 1] = "NOT_OVERFLOWING", r[r.OVERFLOWING_LARGE_ONLY = 2] = "OVERFLOWING_LARGE_ONLY", r[r.OVERFLOWING_ALL = 3] = "OVERFLOWING_ALL";
let C = s.memo(function(e) {
  let {
    user: t,
    mutualFriends: n,
    mutualGuilds: i,
    onClose: r,
    analyticsLocation: o,
    maxIcons: u = 3,
    underlineTextOnHover: I = !1,
    showTooltips: f = !0
  } = e, {
    analyticsLocations: h
  } = (0, _.default)(), {
    guildId: A,
    channelId: C,
    messageId: R,
    roleId: g
  } = (0, S.useUserProfileAnalyticsContext)(), L = s.useMemo(() => {
    var e;
    return null !== (e = null == n ? void 0 : n.map(e => {
      let {
        user: t
      } = e;
      return t
    })) && void 0 !== e ? e : []
  }, [n]), v = s.useMemo(() => {
    var e;
    return null !== (e = null == i ? void 0 : i.map(e => {
      let {
        guild: t
      } = e;
      return t
    })) && void 0 !== e ? e : []
  }, [i]), D = s.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
    count: L.length
  }), [L]), M = s.useMemo(() => p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
    count: v.length
  }), [v]), y = s.useRef(null), [P, U] = s.useState(!1), [b, G] = s.useState(!1), w = s.useCallback(() => {
    if (null != y.current) {
      var e;
      G((null === (e = y.current) || void 0 === e ? void 0 : e.clientHeight) > 19), U(!0)
    }
  }, []), k = s.useCallback(e => () => {
    (0, m.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: h,
      guildId: A,
      channelId: C,
      messageId: R,
      roleId: g,
      section: e,
      analyticsLocation: o
    }), null == r || r()
  }, [o, h, r, t.id, A, C, R, g]);
  s.useEffect(() => {
    w()
  }, [w, D]);
  let B = L.length > 0,
    V = v.length > 0;
  return (0, a.jsxs)("div", {
    className: l()(O.compactItemContainer, !P && O.hideElement),
    ref: y,
    children: [B && (() => {
      let e = (0, a.jsxs)(d.Clickable, {
        onClick: k(N.UserProfileSections.MUTUAL_FRIENDS),
        className: l()(O.avatarAndTextContainer, O.__invalid_friendsContainer),
        children: [(0, a.jsx)("div", {
          className: O.__invalid_avatars,
          children: (0, a.jsx)(c.default, {
            maxUsers: u,
            users: L,
            size: d.AvatarSizes.SIZE_16,
            hideOverflowCount: !0,
            disableUsernameTooltip: !0
          })
        }), (0, a.jsx)(d.Text, {
          className: l()(O.itemizedListText, I && O.underlineOnHover),
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: D
        })]
      });
      return f ? (0, a.jsx)(d.TooltipContainer, {
        text: p.default.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
        children: e
      }) : e
    })(), B && V && (0, a.jsx)("div", {
      "aria-hidden": "true",
      className: O.dotSpacer
    }), V && (() => {
      let e = (0, a.jsxs)(d.Clickable, {
        onClick: k(N.UserProfileSections.MUTUAL_GUILDS),
        className: l()(O.avatarAndTextContainer, O.serverContainer),
        children: [!b && (0, a.jsx)("div", {
          className: O.__invalid_avatars,
          children: (0, a.jsx)(E.default, {
            maxGuilds: u,
            guilds: v,
            size: T.default.Sizes.SMOL,
            hideOverflowCount: !0,
            disableGuildNameTooltip: !0
          })
        }), (0, a.jsx)(d.Text, {
          className: l()(O.itemizedListText, I && O.underlineOnHover),
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: M
        })]
      });
      return f ? (0, a.jsx)(d.TooltipContainer, {
        text: p.default.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
        children: e
      }) : e
    })()]
  })
});
t.default = s.memo(function(e) {
  var t, n;
  let {
    user: i,
    onClose: r,
    className: s,
    sourceAnaylticsLocations: o
  } = e, {
    analyticsLocations: c
  } = (0, _.default)(), E = null !== (n = null !== (t = null == o ? void 0 : o[0]) && void 0 !== t ? t : null == c ? void 0 : c[0]) && void 0 !== n ? n : null, T = (0, u.useStateFromStores)([I.default], () => I.default.getId()), S = i.id === T, m = i.bot || S, {
    enabled: N
  } = (0, f.useProfileMutualsExperiment)({
    autoTrackExposure: !1,
    location: E,
    disable: m
  }), R = (0, A.useMutualGuilds)(i), g = (0, h.useMutualFriends)(i);
  return !N || m || (null == g || 0 === g.length) && 0 === R.length ? null : (0, a.jsxs)("div", {
    className: l()(O.mainContainer, s),
    children: [(0, a.jsx)(d.Heading, {
      variant: "eyebrow",
      className: O.__invalid_title,
      children: p.default.Messages.USER_PROFILE_MUTUALS_TITLE
    }), (0, a.jsx)(C, {
      user: i,
      mutualFriends: g,
      mutualGuilds: R,
      onClose: r
    })]
  })
})