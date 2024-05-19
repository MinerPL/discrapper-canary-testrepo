"use strict";
n.r(t), n.d(t, {
  BaseClanTagChiplet: function() {
    return m
  },
  ClanTagBadge: function() {
    return A
  },
  useShouldDisplayClanTag: function() {
    return p
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("442837"),
  l = n("481060"),
  u = n("715903"),
  d = n("271383"),
  _ = n("594174"),
  c = n("645896"),
  E = n("353093"),
  I = n("954138"),
  T = n("426964"),
  f = n("308083"),
  S = n("689938"),
  h = n("53408");
let A = r.memo(function(e) {
    let {
      src: t,
      className: n,
      size: r = f.ClanTagBadgeSize.SIZE_16
    } = e;
    return null == t ? null : (0, i.jsx)("img", {
      src: t,
      alt: S.default.Messages.CLAN_BADGE,
      className: s()(h.badge, n),
      width: r,
      height: r
    })
  }),
  m = r.memo(function(e) {
    let {
      clanTag: t,
      clanBadge: n,
      className: r,
      textClassName: a,
      badgeClassName: o,
      onClick: u,
      onMouseEnter: d,
      textVariant: _ = "text-xs/medium",
      textColor: c = "text-normal",
      badgeSize: E = f.ClanTagBadgeSize.SIZE_12,
      inline: T = !0
    } = e;
    return (0, I.default)("base_clan_tag_chiplet") ? (0, i.jsx)(l.Clickable, {
      tag: "span",
      tabIndex: null == u ? -1 : void 0,
      onClick: u,
      onMouseEnter: d,
      className: s()(h.chipletContainerInner, T && h.chipletContainerInline, null != u && h.clickable, r),
      children: (0, i.jsxs)(l.Text, {
        variant: _,
        color: c,
        tag: "span",
        className: s()(h.text, a),
        children: [null != n && "string" == typeof n ? (0, i.jsx)(A, {
          src: n,
          size: E,
          className: o
        }) : n, t]
      })
    }) : null
  }),
  N = r.memo(function(e) {
    var t, n;
    let {
      clan: a,
      userId: s,
      children: u,
      profileViewedAnalytics: d
    } = e, E = (0, o.useStateFromStores)([_.default], () => _.default.getUser(s), [s]), I = null !== (t = null == E ? void 0 : E.clan) && void 0 !== t ? t : a, [f, S] = (0, c.useFetchClanInfo)(null !== (n = null == I ? void 0 : I.identityGuildId) && void 0 !== n ? n : null), A = r.useCallback(() => {
      S()
    }, [S]);
    return (0, i.jsx)(l.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(T.default, {
          isLoading: f,
          clan: I,
          onClose: t,
          profileViewedAnalytics: d
        })
      },
      position: "top",
      animationPosition: "top",
      spacing: 16,
      children: e => (0, i.jsx)(l.Clickable, {
        className: h.clickable,
        tag: "span",
        ...e,
        onClick: t => {
          var n;
          null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation()
        },
        onMouseEnter: () => {
          var t;
          A(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        children: u
      })
    })
  });

function p(e, t) {
  let n = (0, o.useStateFromStores)([_.default], () => _.default.getUser(e), [e]),
    i = (0, o.useStateFromStores)([d.default], () => {
      if (null == t || null == e) return null;
      let n = d.default.getMember(t, e);
      return (0, u.hasAutomodQuarantinedProfile)(n)
    }, [t, e]),
    {
      tag: r,
      guildId: a
    } = (0, E.getUserClanData)(null == n ? void 0 : n.clan);
  return !!(0, I.default)("clan_tag_chiplet") && null != a && null != r && !i && !0
}
t.default = r.memo(function(e) {
  var t;
  let {
    clan: n,
    userId: r,
    contextGuildId: a,
    className: l,
    textVariant: u,
    textColor: d,
    badgeSize: c,
    disableTooltip: I = !1,
    inline: T = !0,
    profileViewedAnalytics: f
  } = e, S = (0, o.useStateFromStores)([_.default], () => _.default.getUser(r), [r]), A = null !== (t = null == S ? void 0 : S.clan) && void 0 !== t ? t : n, {
    tag: O,
    badge: C,
    guildId: R
  } = (0, E.getUserClanData)(A);
  if (!p(r, a) || null == R) return null;
  let g = (0, E.getClanBadgeUrl)(R, C, c);
  return I ? (0, i.jsx)(m, {
    clanTag: O,
    clanBadge: g,
    className: s()(h.noTooltip, l),
    textVariant: u,
    textColor: d,
    badgeSize: c,
    inline: T
  }) : (0, i.jsx)(N, {
    clan: A,
    userId: r,
    profileViewedAnalytics: f,
    children: (0, i.jsx)(m, {
      clanTag: O,
      clanBadge: g,
      className: l,
      textVariant: u,
      textColor: d,
      badgeSize: c,
      inline: T
    })
  })
})