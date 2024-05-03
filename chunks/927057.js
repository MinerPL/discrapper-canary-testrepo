"use strict";
t.r(n), t.d(n, {
  default: function() {
    return f
  }
});
var l = t("735250"),
  a = t("470079"),
  r = t("471445"),
  u = t("592125"),
  s = t("430824"),
  o = t("286908"),
  i = t("970184"),
  d = t("811654"),
  c = t("344991"),
  m = t("981631"),
  p = t("743002");

function f(e) {
  var n;
  let {
    channelTypes: t
  } = e, f = (0, i.useComponentStateContext)(), C = null == f ? void 0 : null === (n = f.message) || void 0 === n ? void 0 : n.getChannelId(), S = u.default.getChannel(C), E = s.default.getGuild(null == S ? void 0 : S.getGuildId()), v = a.useMemo(() => (0, d.getSnowflakeSelectDefaultValues)(e.defaultValues, null == E ? void 0 : E.id, t), [e.defaultValues, E, t]);
  return (0, l.jsx)(c.default, {
    selectActionComponent: e,
    queryOptions: e => (0, d.queryChannels)(e, C, t),
    renderIcon: (e, n) => {
      let t = u.default.getChannel(null == e ? void 0 : e.value);
      if (null == t) return null;
      let a = t.type === m.ChannelTypes.GUILD_CATEGORY ? o.default : (0, r.getChannelIconComponent)(t);
      return null != a ? (0, l.jsx)(a, {
        width: n,
        height: n
      }) : null
    },
    renderOptionLabel: e => (0, l.jsx)("span", {
      className: p.label,
      children: e.label
    }),
    defaultValues: v
  })
}