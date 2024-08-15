n.d(t, {
  $: function() {
return l;
  }
});
var i = n(544891),
  a = n(570140),
  s = n(34756),
  r = n(981631);
async function l(e) {
  a.Z.dispatch({
type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_START',
applicationId: e
  });
  try {
let t = (await i.tn.get({
  url: r.ANM.APPLICATION_ACTIVITY_STATISTICS(e),
  oldFormErrors: !0
})).body;
return a.Z.dispatch({
  type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS',
  statistics: t,
  applicationId: e
}), t;
  } catch (t) {
throw a.Z.dispatch({
  type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL',
  applicationId: e
}), new s.Z(t);
  }
}