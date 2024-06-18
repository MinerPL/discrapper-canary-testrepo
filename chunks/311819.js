"use strict";
n.d(t, {
  J: function() {
    return r
  }
}), n(47120);
var i = n(981631);

function r(e) {
  let {
    id: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: s
  } = e;
  if (null != n) return n;
  let o = {};
  o.client_id = t;
  let a = null != s && Object.values(s).some(e => (null == e ? void 0 : e.oauth2_install_params) != null);
  if (null != r && !a) {
    let {
      permissions: e,
      scopes: t
    } = r;
    null != e && (o.permissions = e), null != t && (o.scope = t.join(" "))
  }
  let l = Object.entries(o).map(e => {
    let [t, n] = e;
    return "".concat(t, "=").concat(encodeURIComponent(n))
  }).join("&");
  return "".concat(location.protocol, "//").concat(location.host).concat(i.Z5c.OAUTH2_AUTHORIZE, "?").concat(l)
}