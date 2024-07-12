t.d(n, {
  k: function() {
return r;
  }
});
var i = t(544891),
  a = t(570140),
  o = t(981631);

function r(e) {
  return a.Z.dispatch({
type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING',
applicationId: e
  }), i.tn.get({
url: o.ANM.STORE_LAYOUT(e)
  }).then(n => (a.Z.dispatch({
type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS',
applicationId: e,
listings: n.body
  }), n.body)).catch(() => {
a.Z.dispatch({
  type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED',
  applicationId: e
});
  });
}