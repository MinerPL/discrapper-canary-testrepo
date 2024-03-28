"use strict";
n.r(t), n.d(t, {
  addInstallLocation: function() {
    return l
  },
  fetchMetadata: function() {
    return o
  },
  removeInstallLocation: function() {
    return i
  },
  updateInstallLocation: function() {
    return r
  }
}), n("47120");
var a = n("570140"),
  s = n("830168");

function l(e) {
  s.default.queryDirectory(e, (t, n) => {
    null == t && null != n && a.default.dispatch({
      type: "INSTALLATION_LOCATION_ADD",
      path: e,
      metadata: n
    })
  })
}

function i(e) {
  a.default.dispatch({
    type: "INSTALLATION_LOCATION_REMOVE",
    path: e
  })
}

function r(e, t) {
  let {
    label: n,
    isDefault: s
  } = t;
  a.default.dispatch({
    type: "INSTALLATION_LOCATION_UPDATE",
    path: e,
    label: n,
    isDefault: s
  })
}

function o(e) {
  let t = {},
    n = 0;
  for (let l of e) null != l && "string" == typeof l && s.default.queryDirectory(l, (s, i) => {
    ++n, null == s && null != i && (t[l] = i), n === e.length && a.default.dispatch({
      type: "INSTALLATION_LOCATION_FETCH_METADATA",
      metadataPayload: t
    })
  })
}