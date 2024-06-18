"use strict";
n.d(t, {
  h: function() {
    return o
  }
});
var i = n(544891),
  r = n(570140),
  s = n(981631);

function o(e, t, n) {
  return r.Z.dispatch({
    type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
    applicationId: e,
    branchId: t,
    flags: n
  }), i.tn.patch({
    url: s.ANM.LIBRARY_APPLICATION_BRANCH(e, t),
    body: {
      flags: n
    },
    oldFormErrors: !0
  }).then(e => {
    r.Z.dispatch({
      type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
      libraryApplication: e.body
    })
  })
}