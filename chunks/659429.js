n.d(t, {
  $: function() {
return l;
  }
});
var i = n(544891),
  s = n(570140),
  a = n(34756),
  r = n(981631);
async function l(e) {
  s.Z.dispatch({
type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_START',
applicationId: e
  });
  try {
let t = (await i.tn.get({
  url: r.ANM.APPLICATION_ACTIVITY_STATISTICS(e),
  oldFormErrors: !0
})).body;
return s.Z.dispatch({
  type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS',
  statistics: t,
  applicationId: e
}), t;
  } catch (t) {
throw s.Z.dispatch({
  type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL',
  applicationId: e
}), new a.Z(t);
  }
}