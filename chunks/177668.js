"use strict";
n.d(e, {
  RA: function() {
    return s
  },
  U4: function() {
    return a
  },
  vK: function() {
    return u
  }
});
var r = n(529866);
let i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function s(t, e = !1) {
  let {
    host: n,
    path: r,
    pass: i,
    port: s,
    projectId: a,
    protocol: o,
    publicKey: u
  } = t;
  return `${o}://${u}${e&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${a}`
}

function a(t) {
  let e = i.exec(t);
  if (!e) {
    console.error(`Invalid Sentry Dsn: ${t}`);
    return
  }
  let [n, r, s = "", a, u = "", l] = e.slice(1), c = "", d = l, h = d.split("/");
  if (h.length > 1 && (c = h.slice(0, -1).join("/"), d = h.pop()), d) {
    let t = d.match(/^\d+/);
    t && (d = t[0])
  }
  return o({
    host: a,
    pass: s,
    path: c,
    projectId: d,
    port: u,
    protocol: n,
    publicKey: r
  })
}

function o(t) {
  return {
    protocol: t.protocol,
    publicKey: t.publicKey || "",
    pass: t.pass || "",
    host: t.host,
    port: t.port || "",
    path: t.path || "",
    projectId: t.projectId
  }
}

function u(t) {
  let e = "string" == typeof t ? a(t) : o(t);
  if (!!e && !! function(t) {
      var e;
      if (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__)) return !0;
      let {
        port: n,
        projectId: i,
        protocol: s
      } = t;
      if (["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (r.kg.error(`Invalid Sentry Dsn: ${e} missing`), !0))) return !1;
      if (!i.match(/^\d+$/)) return r.kg.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), !1;
      return "http" === (e = s) || "https" === e ? !(n && isNaN(parseInt(n, 10))) || (r.kg.error(`Invalid Sentry Dsn: Invalid port ${n}`), !1) : (r.kg.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), !1)
    }(e)) return e
}