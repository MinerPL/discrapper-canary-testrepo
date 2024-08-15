t.d(n, {
  Z: function() {
return o;
  }
});
var l = t(735250);
t(470079);
var i = t(442837),
  u = t(481060),
  s = t(889161),
  r = t(924301),
  a = t(554747),
  d = t(981631),
  E = t(689938);

function o(e, n, o) {
  var c;
  let {
canManageGuildEvent: _
  } = (0, s.XJ)(null != o ? o : n), T = (0, i.e7)([r.ZP], () => r.ZP.getGuildScheduledEvent(e), [e]), N = _(T), I = null != (0, a.qY)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : d.lds), Z = null != T && (0, r.xt)(T);
  return N && !Z && !I ? (0, l.jsx)(u.MenuItem, {
id: E.Z.Messages.START_EVENT,
label: E.Z.Messages.START_EVENT,
action: function() {
  null != T && (0, u.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      t.e('84722'),
      t.e('36121')
    ]).then(t.bind(t, 296864));
    return n => (0, l.jsx)(e, {
      ...n,
      event: T
    });
  });
}
  }) : null;
}