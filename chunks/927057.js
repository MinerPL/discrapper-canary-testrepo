"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("471445"),
  u = n("592125"),
  o = n("430824"),
  i = n("286908"),
  r = n("970184"),
  d = n("811654"),
  c = n("344991"),
  m = n("981631"),
  p = n("41865");

function f(e) {
  var t;
  let {
    channelTypes: n
  } = e, f = (0, r.useComponentStateContext)(), E = null == f ? void 0 : null === (t = f.message) || void 0 === t ? void 0 : t.getChannelId(), C = u.default.getChannel(E), S = o.default.getGuild(null == C ? void 0 : C.getGuildId()), T = a.useMemo(() => (0, d.getSnowflakeSelectDefaultValues)(e.defaultValues, null == S ? void 0 : S.id, n), [e.defaultValues, S, n]);
  return (0, l.jsx)(c.default, {
    selectActionComponent: e,
    queryOptions: e => (0, d.queryChannels)(e, E, n),
    renderIcon: (e, t) => {
      let n = u.default.getChannel(null == e ? void 0 : e.value);
      if (null == n) return null;
      let a = n.type === m.ChannelTypes.GUILD_CATEGORY ? i.default : (0, s.getChannelIconComponent)(n);
      return null != a ? (0, l.jsx)(a, {
        width: t,
        height: t
      }) : null
    },
    renderOptionLabel: e => (0, l.jsx)("span", {
      className: p.label,
      children: e.label
    }),
    defaultValues: T
  })
}