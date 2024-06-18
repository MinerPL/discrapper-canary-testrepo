"use strict";
let i;
n.d(t, {
  M3: function() {
    return c
  },
  aD: function() {
    return u
  },
  bF: function() {
    return d
  },
  f0: function() {
    return _
  }
});
var r = n(544891),
  s = n(314897),
  o = n(12647),
  a = n(865427);
let l = "/__development/build_overrides";
async function u(e) {
  try {
    var t;
    let n = await r.tn.put({
      url: (0, a.pU)(l),
      body: {
        overrides: e,
        version: a.Ji
      },
      headers: {
        Authorization: null !== (t = s.default.getToken()) && void 0 !== t ? t : ""
      },
      oldFormErrors: !0
    });
    return await i(n), n
  } catch (e) {
    return e
  }
}
async function _(e) {
  try {
    let t = await r.tn.put({
      url: (0, a.pU)("/__development/link"),
      body: {
        payload: e,
        token: s.default.getToken(),
        version: a.Ji
      },
      oldFormErrors: !0
    });
    return await i(t), t
  } catch (e) {
    return e
  }
}
async function d() {
  let e = await r.tn.del({
    url: (0, a.pU)(l),
    oldFormErrors: !0
  });
  return await i(e), e
}

function c(e) {
  var t;
  return r.tn.post({
    url: (0, a.pU)("/__development/create_build_override_link"),
    body: e,
    headers: {
      Authorization: null !== (t = s.default.getToken()) && void 0 !== t ? t : ""
    },
    oldFormErrors: !0
  }).then(e => ({
    url: e.body.url,
    error: !1
  }), e => 400 === e.status ? {
    url: !1,
    error: e.body
  } : {
    url: !1,
    error: "Error making API request (".concat(e.status, ")")
  })
}
i = async e => {
  try {
    await o.Z.flushCookies()
  } catch (e) {}
}