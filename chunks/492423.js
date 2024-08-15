var r = n(735250),
  i = n(512722),
  a = n.n(i),
  s = n(481060);
t.Z = {
  openGameProfileModal: function(e) {
let {
  applicationId: t,
  gameProfileModalChecks: i,
  source: o,
  sourceUserId: l
} = e;
a()(i.shouldOpenGameProfile, 'Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?'), a()(i.applicationId === t, 'Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?'), (0, s.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('51182'),
    n.e('89287')
  ]).then(n.bind(n, 644941));
  return n => (0, r.jsx)(e, {
    applicationId: t,
    source: o,
    sourceUserId: l,
    ...n
  });
});
  }
};