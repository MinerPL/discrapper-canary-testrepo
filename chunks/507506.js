"use strict";
n.d(e, {
  U: function() {
    return a
  },
  h: function() {
    return o
  }
});
var r = n(442853),
  i = n(177668);

function s(t) {
  let e = t.protocol ? `${t.protocol}:` : "",
    n = t.port ? `:${t.port}` : "";
  return `${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
}

function a(t, e = {}) {
  var n, i, a;
  let o = "string" == typeof e ? e : e.tunnel,
    u = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
  return o || `${n=t,`${s(n)}${n.projectId}/envelope/`}?${i=t,a=u,(0,r._j)({sentry_key:i.publicKey,sentry_version:"7",...a&&{sentry_client:`${a.name}/${a.version}`}})}`
}

function o(t, e) {
  let n = (0, i.vK)(t);
  if (!n) return "";
  let r = `${s(n)}embed/error-page/`,
    a = `dsn=${(0,i.RA)(n)}`;
  for (let t in e) {
    if ("dsn" !== t)
      if ("user" === t) {
        let t = e.user;
        if (!t) continue;
        t.name && (a += `&name=${encodeURIComponent(t.name)}`), t.email && (a += `&email=${encodeURIComponent(t.email)}`)
      } else a += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`
  }
  return `${r}?${a}`
}