var r = n(735250),
  i = n(512722),
  a = n.n(i),
  o = n(481060);
t.Z = {
  openGameProfileModal: function(e) {
let {
  applicationId: t,
  gameProfileModalChecks: i,
  source: s,
  sourceUserId: l
} = e;
a()(i.shouldOpenGameProfile, 'Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?'), a()(i.applicationId === t, 'Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?'), (0, o.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('30676'),
    n.e('91026'),
    n.e('35575')
  ]).then(n.bind(n, 644941));
  return n => (0, r.jsx)(e, {
    applicationId: t,
    source: s,
    sourceUserId: l,
    ...n
  });
});
  }
};