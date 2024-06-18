"use strict";

function n(e) {
  let r = "==".slice(0, (4 - e.length % 4) % 4),
    t = atob(e.replace(/-/g, "+").replace(/_/g, "/") + r),
    n = new ArrayBuffer(t.length),
    a = new Uint8Array(n);
  for (let e = 0; e < t.length; e++) a[e] = t.charCodeAt(e);
  return n
}

function a(e) {
  let r = new Uint8Array(e),
    t = "";
  for (let e of r) t += String.fromCharCode(e);
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
t.d(r, {
  U2: function() {
    return w
  },
  Ue: function() {
    return y
  }
});
var i = "copy",
  o = "convert";

function f(e, r, t) {
  if (r === i) return t;
  if (r === o) return e(t);
  if (r instanceof Array) return t.map(t => f(e, r[0], t));
  if (r instanceof Object) {
    let n = {};
    for (let [a, i] of Object.entries(r)) {
      if (i.derive) {
        let e = i.derive(t);
        void 0 !== e && (t[a] = e)
      }
      if (!(a in t)) {
        if (i.required) throw Error(`Missing key: ${a}`);
        continue
      }
      if (null == t[a]) {
        n[a] = null;
        continue
      }
      n[a] = f(e, i.schema, t[a])
    }
    return n
  }
}

function s(e, r) {
  return {
    required: !0,
    schema: e,
    derive: r
  }
}

function c(e) {
  return {
    required: !0,
    schema: e
  }
}

function l(e) {
  return {
    required: !1,
    schema: e
  }
}
var u = {
    type: c(i),
    id: c(o),
    transports: l(i)
  },
  d = {
    appid: l(i),
    appidExclude: l(i),
    credProps: l(i)
  },
  v = {
    appid: l(i),
    appidExclude: l(i),
    credProps: l(i)
  },
  h = {
    publicKey: c({
      rp: c(i),
      user: c({
        id: c(o),
        name: c(i),
        displayName: c(i)
      }),
      challenge: c(o),
      pubKeyCredParams: c(i),
      timeout: l(i),
      excludeCredentials: l([u]),
      authenticatorSelection: l(i),
      attestation: l(i),
      extensions: l(d)
    }),
    signal: l(i)
  },
  p = {
    type: c(i),
    id: c(i),
    rawId: c(o),
    authenticatorAttachment: l(i),
    response: c({
      clientDataJSON: c(o),
      attestationObject: c(o),
      transports: s(i, e => {
        var r;
        return (null == (r = e.getTransports) ? void 0 : r.call(e)) || []
      })
    }),
    clientExtensionResults: s(v, e => e.getClientExtensionResults())
  },
  g = {
    mediation: l(i),
    publicKey: c({
      challenge: c(o),
      timeout: l(i),
      rpId: l(i),
      allowCredentials: l([u]),
      userVerification: l(i),
      extensions: l(d)
    }),
    signal: l(i)
  },
  b = {
    type: c(i),
    id: c(i),
    rawId: c(o),
    authenticatorAttachment: l(i),
    response: c({
      clientDataJSON: c(o),
      authenticatorData: c(o),
      signature: c(o),
      userHandle: c(o)
    }),
    clientExtensionResults: s(v, e => e.getClientExtensionResults())
  };
async function y(e) {
  let r = await navigator.credentials.create(f(n, h, e));
  return f(a, p, r)
}
async function w(e) {
  let r = await navigator.credentials.get(f(n, g, e));
  return f(a, b, r)
}