n.d(t, {
  k: function() {
return r;
  }
});
var i = n(544891),
  a = n(570140),
  s = n(981631);

function r(e) {
  return a.Z.dispatch({
type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING',
applicationId: e
  }), i.tn.get({
url: s.ANM.STORE_LAYOUT(e)
  }).then(t => (a.Z.dispatch({
type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS',
applicationId: e,
listings: t.body
  }), t.body)).catch(() => {
a.Z.dispatch({
  type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED',
  applicationId: e
});
  });
}