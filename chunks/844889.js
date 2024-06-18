"use strict";
n.d(t, {
  Gg: function() {
    return d
  },
  Hg: function() {
    return E
  },
  fr: function() {
    return _
  }
});
var i = n(772848),
  r = n(433517);
let s = "LATEST_SESSION_TIMESTAMP",
  o = "LATEST_SESSION_UUID",
  a = "LATEST_SESSION_INITIALIZED_TIMESTAMP",
  l = Promise.resolve(),
  u = !1;

function _(e) {
  u = e
}

function d() {
  return l = l.then(async () => {
    let e = await c();
    if (null == e || function(e) {
        return 18e5 + e.lastUsed - Date.now() <= 0
      }(e)) {
      if (!u) return null;
      let t = {
        uuid: (0, i.Z)(),
        initialized: Date.now(),
        lastUsed: Date.now()
      };
      r.K.set(o, t.uuid), r.K.set(a, t.initialized.toString()), r.K.set(s, Date.now().toString()), e = t
    } else u && r.K.set(s, Date.now().toString());
    return e
  })
}
async function c() {
  let e = await r.K.getAfterRefresh(o),
    t = await r.K.getAfterRefresh(a).then(E),
    n = await r.K.getAfterRefresh(s).then(E);
  return null != e && null != t ? {
    uuid: e,
    initialized: t,
    lastUsed: n
  } : null
}

function E(e) {
  return null != e ? Number(e) : 0
}