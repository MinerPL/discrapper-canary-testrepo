"use strict";
n.r(t), n.d(t, {
  fetchStoreDirectoryLayout: function() {
    return s
  }
});
var i = n("544891"),
  r = n("570140"),
  l = n("981631");

function s(e) {
  return i.HTTP.get({
    url: l.Endpoints.STORE_LAYOUT(e)
  }).then(t => (r.default.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
    applicationId: e,
    listings: t.body
  }), t.body))
}