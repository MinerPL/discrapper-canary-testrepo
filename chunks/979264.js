"use strict";
n.d(t, {
  KQ: function() {
    return S
  },
  aG: function() {
    return f
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(594174),
  _ = n(645896),
  d = n(353093),
  c = n(954138),
  E = n(426964),
  I = n(308083),
  T = n(689938),
  h = n(53408);
let S = r.memo(function(e) {
    let {
      src: t,
      tag: n,
      className: r,
      size: s = I.NC.SIZE_16
    } = e;
    return null == t ? null : (0, i.jsx)("img", {
      src: t,
      alt: T.Z.Messages.CLAN_BADGE_ALT.format({
        tag: n
      }),
      className: o()(h.badge, r),
      width: s,
      height: s
    })
  }),
  f = r.memo(function(e) {
    let {
      guildId: t,
      clanTag: n,
      clanBadge: r,
      className: s,
      textClassName: a,
      badgeClassName: u,
      onClick: _,
      onMouseEnter: E,
      textVariant: T = "text-xs/semibold",
      textColor: f = "text-normal",
      badgeSize: N = I.NC.SIZE_12,
      inline: A = !0
    } = e;
    return (0, c.Z)("base_clan_tag_chiplet") ? (0, i.jsx)(l.Clickable, {
      tag: "span",
      tabIndex: null == _ ? -1 : void 0,
      onClick: _,
      onMouseEnter: E,
      className: o()(h.chipletContainerInner, A && h.chipletContainerInline, null != _ && h.clickable, s),
      children: (0, i.jsxs)(l.Text, {
        variant: T,
        color: f,
        tag: "span",
        className: o()(h.text, a),
        children: [null != r && "string" == typeof r ? (0, i.jsx)(S, {
          src: (0, d.ky)(t, r, N),
          tag: null == n ? void 0 : n.toString(),
          size: N,
          className: u
        }) : r, (0, i.jsx)("span", {
          className: h.unselectable,
          children: n
        })]
      })
    }) : null
  }),
  N = r.memo(function(e) {
    var t, n;
    let {
      clan: s,
      userId: o,
      children: d,
      profileViewedAnalytics: c
    } = e, I = (0, a.e7)([u.default], () => u.default.getUser(o), [o]), T = null !== (t = null == I ? void 0 : I.clan) && void 0 !== t ? t : s, [S, f] = (0, _.L_)(null !== (n = null == T ? void 0 : T.identityGuildId) && void 0 !== n ? n : null), N = r.useCallback(() => {
      f()
    }, [f]);
    return (0, i.jsx)(l.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(E.Z, {
          isLoading: S,
          clan: T,
          onClose: t,
          profileViewedAnalytics: c
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
          N(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        children: d
      })
    })
  });
t.ZP = r.memo(function(e) {
  var t;
  let {
    clan: n,
    userId: r,
    contextGuildId: s,
    className: l,
    textVariant: _,
    textColor: c,
    badgeSize: E,
    disableGuildProfile: I = !1,
    inline: T = !0,
    profileViewedAnalytics: S
  } = e, A = (0, a.e7)([u.default], () => u.default.getUser(r), [r]), m = null !== (t = null == A ? void 0 : A.clan) && void 0 !== t ? t : n, {
    tag: O,
    badge: R,
    guildId: C
  } = (0, d.vh)(m);
  return (0, d.p0)(r, s) && null != C ? I ? (0, i.jsx)(f, {
    guildId: C,
    clanTag: O,
    clanBadge: R,
    className: o()(h.noTooltip, l),
    textVariant: _,
    textColor: c,
    badgeSize: E,
    inline: T
  }) : (0, i.jsx)(N, {
    clan: m,
    userId: r,
    profileViewedAnalytics: S,
    children: (0, i.jsx)(f, {
      guildId: C,
      clanTag: O,
      clanBadge: R,
      className: l,
      textVariant: _,
      textColor: c,
      badgeSize: E,
      inline: T
    })
  }) : null
})