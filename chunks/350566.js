var E = a(544891),
  _ = a(570140),
  t = a(38618),
  n = a(769654),
  r = a(430824),
  L = a(981631);
s.Z = {
  acceptGuildTemplate: (e, s, a) => (_.Z.dispatch({
type: 'GUILD_TEMPLATE_ACCEPT',
code: e
  }), new Promise((l, i) => {
E.tn.post({
  url: L.ANM.UNRESOLVED_GUILD_TEMPLATE(e),
  body: {
    name: s,
    icon: a
  },
  oldFormErrors: !0
}).then(s => {
  let a = s.body;
  _.Z.dispatch({
    type: 'GUILD_TEMPLATE_ACCEPT_SUCCESS',
    code: e,
    guild: a
  }), t.Z.isConnected() ? r.Z.addConditionalChangeListener(() => {
    if (null != r.Z.getGuild(a.id))
      return (0, n.X)(a.id), l(a), !1;
  }) : ((0, n.X)(a.id), l(a));
}, s => {
  _.Z.dispatch({
    type: 'GUILD_TEMPLATE_ACCEPT_FAILURE',
    code: e
  }), i(s.body);
});
  }))
};