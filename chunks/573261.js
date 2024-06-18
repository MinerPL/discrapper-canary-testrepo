"use strict";
var i = n(544891),
  r = n(626135);

function s(e, t, n) {
  let {
    trackedActionData: i,
    ...s
  } = t, o = {
    url: s.url,
    request_method: n
  };
  return new Promise((t, n) => {
    e(s).then(e => {
      let n = i.properties;
      "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
        status_code: e.status,
        ...o,
        ...n
      }), t(e)
    }).catch(e => {
      var t, s;
      let a = i.properties;
      "function" == typeof i.properties && (a = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
        status_code: e.status,
        error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
        error_message: null === (s = e.body) || void 0 === s ? void 0 : s.message,
        ...o,
        ...a
      }), n(e)
    })
  })
}
t.Z = {
  get: function(e) {
    return s(i.tn.get, e, "get")
  },
  post: function(e) {
    return s(i.tn.post, e, "post")
  },
  put: function(e) {
    return s(i.tn.put, e, "put")
  },
  patch: function(e) {
    return s(i.tn.patch, e, "patch")
  },
  delete: function(e) {
    return s(i.tn.del, e, "del")
  }
}