"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
});
var l = i("735250"),
  a = i("470079"),
  n = i("481060"),
  s = i("768581"),
  r = i("924489"),
  o = i("950854"),
  c = i("491576"),
  d = i("719491");

function u(e) {
  var t, i, u, p, m;
  let {
    application: _,
    className: f,
    childrenClassName: h,
    animatesOnHover: I,
    onClick: g,
    ...v
  } = e, A = s.default.getApplicationIconURL({
    id: _.id,
    icon: _.icon,
    size: 48
  }), E = (0, c.default)({
    application: _
  }), C = null === (t = _.categories) || void 0 === t ? void 0 : t[0], R = (null !== (p = null === (i = _.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== p ? p : 0) > 0 || E.length > 0, N = a.useCallback(() => {
    g({
      mutualGuilds: E
    })
  }, [g, E]), T = (0, l.jsx)(r.default, {
    application: _,
    textVariant: "text-xs/normal",
    mutualGuilds: E,
    mutualGuildShownMax: 3,
    guildIconSize: r.GuildIconSize.SMALL,
    compact: !0
  });
  return (0, l.jsxs)(o.default, {
    className: f,
    onClick: N,
    iconSrc: A,
    header: _.name,
    subheader: null != C && (0, l.jsx)(n.Text, {
      tag: "span",
      color: "header-secondary",
      variant: "text-xs/normal",
      children: C.name
    }),
    animatesOnHover: I,
    ...v,
    children: [(null != _.description || null != h) && (0, l.jsx)("div", {
      className: h,
      children: (0, l.jsx)(n.Text, {
        className: d.listingDescription,
        variant: "text-sm/normal",
        lineClamp: 2,
        children: null !== (m = null === (u = _.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== m ? m : _.description
      })
    }), R && (0, l.jsx)("div", {
      className: d.bottomGuildCountContainer,
      children: T
    })]
  })
}