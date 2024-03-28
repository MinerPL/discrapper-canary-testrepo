"use strict";
n.r(t), n.d(t, {
  GuildSelector: function() {
    return g
  },
  default: function() {
    return x
  }
}), n("733860");
var r = n("735250"),
  l = n("470079"),
  a = n("803997"),
  i = n.n(a),
  o = n("442837"),
  u = n("481060"),
  s = n("993413"),
  d = n("430824"),
  c = n("771845"),
  f = n("346656"),
  m = n("823379"),
  h = n("778825"),
  v = n("689938"),
  S = n("570211");

function x(e) {
  let {
    guildId: t,
    className: n,
    globalOption: l,
    hideDivider: a = !1,
    onChange: o,
    renderOptionSuffix: u
  } = e;
  return (0, r.jsx)(s.default, {
    className: i()(S.section, n),
    title: v.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
    hideDivider: a,
    forcedDivider: !0,
    children: (0, r.jsx)(g, {
      guildId: t,
      onChange: o,
      renderOptionSuffix: u,
      globalOption: l
    })
  })
}

function g(e) {
  let {
    guildId: t,
    globalOption: n,
    onChange: a,
    renderOptionSuffix: i
  } = e, s = (0, o.useStateFromStores)([h.default], () => h.default.showNotice()), x = (0, o.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()), g = (0, o.useStateFromStores)([d.default], () => d.default.getGuilds()), C = l.useMemo(() => {
    let e = x.map(e => {
      let t = g[e];
      return null == t ? null : {
        label: t.name,
        value: t.id
      }
    }).filter(m.isNotNullish);
    return null != n && e.unshift(n), e
  }, [x, g, n]), F = l.useCallback(e => {
    let t = (null == e ? void 0 : e.label) === (null == n ? void 0 : n.label) && (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value);
    return null == e || "" === e.value || t ? null : (0, r.jsx)(f.default, {
      className: S.guildSelectOptionIcon,
      guild: g[e.value],
      size: f.default.Sizes.SMOL,
      active: !0
    })
  }, [g, n]);
  return (0, r.jsx)(u.SearchableSelect, {
    isDisabled: s,
    onChange: e => {
      if ("" === e || e === (null == n ? void 0 : n.value)) {
        a(null);
        return
      }
      let t = g[e];
      null != t && a(t)
    },
    value: t,
    options: C,
    renderOptionPrefix: F,
    renderOptionSuffix: i,
    placeholder: v.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER
  })
}