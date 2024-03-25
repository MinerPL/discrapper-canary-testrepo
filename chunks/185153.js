"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  },
  GuildSelector: function() {
    return g
  }
}), n("843762");
var r = n("37983"),
  a = n("884691"),
  i = n("414456"),
  l = n.n(i),
  o = n("446674"),
  s = n("77078"),
  u = n("570697"),
  d = n("305961"),
  c = n("677099"),
  f = n("476263"),
  v = n("449008"),
  C = n("424562"),
  h = n("782340"),
  m = n("714423");

function p(e) {
  let {
    guildId: t,
    className: n,
    globalOption: a,
    hideDivider: i = !1,
    onChange: o,
    renderOptionSuffix: s
  } = e;
  return (0, r.jsx)(u.default, {
    className: l(m.section, n),
    title: h.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
    hideDivider: i,
    forcedDivider: !0,
    children: (0, r.jsx)(g, {
      guildId: t,
      onChange: o,
      renderOptionSuffix: s,
      globalOption: a
    })
  })
}

function g(e) {
  let {
    guildId: t,
    globalOption: n,
    onChange: i,
    renderOptionSuffix: l
  } = e, u = (0, o.useStateFromStores)([C.default], () => C.default.showNotice()), p = (0, o.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()), g = (0, o.useStateFromStores)([d.default], () => d.default.getGuilds()), S = a.useMemo(() => {
    let e = p.map(e => {
      let t = g[e];
      return null == t ? null : {
        label: t.name,
        value: t.id
      }
    }).filter(v.isNotNullish);
    return null != n && e.unshift(n), e
  }, [p, g, n]), x = a.useCallback(e => {
    let t = (null == e ? void 0 : e.label) === (null == n ? void 0 : n.label) && (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value);
    return null == e || "" === e.value || t ? null : (0, r.jsx)(f.default, {
      className: m.guildSelectOptionIcon,
      guild: g[e.value],
      size: f.default.Sizes.SMOL,
      active: !0
    })
  }, [g, n]);
  return (0, r.jsx)(s.SearchableSelect, {
    isDisabled: u,
    onChange: e => {
      if ("" === e || e === (null == n ? void 0 : n.value)) {
        i(null);
        return
      }
      let t = g[e];
      null != t && i(t)
    },
    value: t,
    options: S,
    renderOptionPrefix: x,
    renderOptionSuffix: l,
    placeholder: h.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER
  })
}