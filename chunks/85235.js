"use strict";
var i = n(544891),
  r = n(570140),
  s = n(718745),
  o = n(981631);
t.Z = {
  search(e, t) {
    if (null == s.Z.getResults(e, t)) r.Z.dispatch({
      type: "INTEGRATION_QUERY",
      integration: e,
      query: t
    }), i.tn.get({
      url: o.ANM.INTEGRATION_SEARCH("tenor"),
      query: {
        q: t
      },
      oldFormErrors: !0
    }).then(n => {
      r.Z.dispatch({
        type: "INTEGRATION_QUERY_SUCCESS",
        integration: e,
        query: t,
        results: n.body
      })
    }, () => r.Z.dispatch({
      type: "INTEGRATION_QUERY_FAILURE",
      integration: e,
      query: t
    }))
  }
}