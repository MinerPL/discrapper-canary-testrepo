"use strict";
n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(442837),
  _ = n(481060),
  d = n(906732),
  c = n(318374),
  E = n(522289),
  I = n(314897),
  T = n(346656);
n(5192);
var h = n(342656),
  S = n(785717),
  f = n(726059),
  N = n(162267),
  A = n(171368),
  m = n(228168),
  O = n(689938),
  R = n(498106);
(r = i || (i = {}))[r.NOT_CHECKED = 0] = "NOT_CHECKED", r[r.NOT_OVERFLOWING = 1] = "NOT_OVERFLOWING", r[r.OVERFLOWING_LARGE_ONLY = 2] = "OVERFLOWING_LARGE_ONLY", r[r.OVERFLOWING_ALL = 3] = "OVERFLOWING_ALL";
let C = o.memo(function(e) {
  let {
    user: t,
    mutualFriends: n,
    mutualGuilds: i,
    onClose: r,
    analyticsLocation: a,
    maxIcons: u = 3,
    underlineTextOnHover: I = !1,
    showTooltips: h = !0
  } = e, {
    analyticsLocations: f
  } = (0, d.ZP)(), {
    guildId: N,
    channelId: C,
    messageId: p,
    roleId: g
  } = (0, S.KZ)(), L = o.useMemo(() => {
    var e;
    return null !== (e = null == n ? void 0 : n.map(e => {
      let {
        user: t
      } = e;
      return t
    })) && void 0 !== e ? e : []
  }, [n]), v = o.useMemo(() => {
    var e;
    return null !== (e = null == i ? void 0 : i.map(e => {
      let {
        guild: t
      } = e;
      return t
    })) && void 0 !== e ? e : []
  }, [i]), D = o.useMemo(() => O.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
    count: L.length
  }), [L]), M = o.useMemo(() => O.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
    count: v.length
  }), [v]), P = o.useRef(null), [y, U] = o.useState(!1), [b, G] = o.useState(!1), w = o.useCallback(() => {
    if (null != P.current) {
      var e;
      G((null === (e = P.current) || void 0 === e ? void 0 : e.clientHeight) > 19), U(!0)
    }
  }, []), k = o.useCallback(e => () => {
    (0, A.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: f,
      guildId: N,
      channelId: C,
      messageId: p,
      roleId: g,
      section: e,
      analyticsLocation: a
    }), null == r || r()
  }, [a, f, r, t.id, N, C, p, g]);
  o.useEffect(() => {
    w()
  }, [w, D]);
  let B = L.length > 0,
    x = v.length > 0;
  return (0, s.jsxs)("div", {
    className: l()(R.compactItemContainer, !y && R.hideElement),
    ref: P,
    children: [B && (() => {
      let e = (0, s.jsxs)(_.Clickable, {
        onClick: k(m.oh.MUTUAL_FRIENDS),
        className: l()(R.avatarAndTextContainer, R.__invalid_friendsContainer),
        children: [(0, s.jsx)("div", {
          className: R.__invalid_avatars,
          children: (0, s.jsx)(c.Z, {
            maxUsers: u,
            users: L,
            size: _.AvatarSizes.SIZE_16,
            hideOverflowCount: !0,
            disableUsernameTooltip: !0
          })
        }), (0, s.jsx)(_.Text, {
          className: l()(R.itemizedListText, I && R.underlineOnHover),
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: D
        })]
      });
      return h ? (0, s.jsx)(_.TooltipContainer, {
        text: O.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
        children: e
      }) : e
    })(), B && x && (0, s.jsx)("div", {
      "aria-hidden": "true",
      className: R.dotSpacer
    }), x && (() => {
      let e = (0, s.jsxs)(_.Clickable, {
        onClick: k(m.oh.MUTUAL_GUILDS),
        className: l()(R.avatarAndTextContainer, R.serverContainer),
        children: [!b && (0, s.jsx)("div", {
          className: R.__invalid_avatars,
          children: (0, s.jsx)(E.Z, {
            maxGuilds: u,
            guilds: v,
            size: T.Z.Sizes.SMOL,
            hideOverflowCount: !0,
            disableGuildNameTooltip: !0
          })
        }), (0, s.jsx)(_.Text, {
          className: l()(R.itemizedListText, I && R.underlineOnHover),
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: M
        })]
      });
      return h ? (0, s.jsx)(_.TooltipContainer, {
        text: O.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
        children: e
      }) : e
    })()]
  })
});
t.ZP = o.memo(function(e) {
  var t, n;
  let {
    user: i,
    onClose: r,
    className: o,
    sourceAnaylticsLocations: a
  } = e, {
    analyticsLocations: c
  } = (0, d.ZP)(), E = null !== (n = null !== (t = null == a ? void 0 : a[0]) && void 0 !== t ? t : null == c ? void 0 : c[0]) && void 0 !== n ? n : null, T = (0, u.e7)([I.default], () => I.default.getId()), S = i.id === T, A = i.bot || S, {
    enabled: m
  } = (0, h.qI)({
    autoTrackExposure: !1,
    location: E,
    disable: A
  }), {
    mutualGuilds: p
  } = (0, N.Z)(i.id), {
    mutualFriends: g
  } = (0, f.Z)(i.id);
  return !m || A || (null == g || 0 === g.length) && (null == p || 0 === p.length) ? null : (0, s.jsxs)("div", {
    className: l()(R.mainContainer, o),
    children: [(0, s.jsx)(_.Heading, {
      variant: "eyebrow",
      className: R.__invalid_title,
      children: O.Z.Messages.USER_PROFILE_MUTUALS_TITLE
    }), (0, s.jsx)(C, {
      user: i,
      mutualFriends: g,
      mutualGuilds: p,
      onClose: r
    })]
  })
})