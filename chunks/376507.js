"use strict";

function r(e) {
  let t = "==".slice(0, (4 - e.length % 4) % 4),
    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
    r = atob(n),
    i = new ArrayBuffer(r.length),
    o = new Uint8Array(i);
  for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
  return i
}

function i(e) {
  let t = new Uint8Array(e),
    n = "";
  for (let e of t) n += String.fromCharCode(e);
  let r = btoa(n),
    i = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return i
}
n.r(t), n.d(t, {
  create: function() {
    return m
  },
  get: function() {
    return y
  }
}), n("781738"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("222007"), n("70102");
var o = "copy",
  s = "convert";

function a(e, t, n) {
  if (t === o) return n;
  if (t === s) return e(n);
  if (t instanceof Array) return n.map(n => a(e, t[0], n));
  if (t instanceof Object) {
    let r = {};
    for (let [i, o] of Object.entries(t)) {
      if (o.derive) {
        let e = o.derive(n);
        void 0 !== e && (n[i] = e)
      }
      if (!(i in n)) {
        if (o.required) throw Error("Missing key: ".concat(i));
        continue
      }
      if (null == n[i]) {
        r[i] = null;
        continue
      }
      r[i] = a(e, o.schema, n[i])
    }
    return r
  }
}

function c(e, t) {
  return {
    required: !0,
    schema: e,
    derive: t
  }
}

function u(e) {
  return {
    required: !0,
    schema: e
  }
}

function d(e) {
  return {
    required: !1,
    schema: e
  }
}
var l = {
    type: u(o),
    id: u(s),
    transports: d(o)
  },
  f = {
    appid: d(o),
    appidExclude: d(o),
    credProps: d(o)
  },
  p = {
    appid: d(o),
    appidExclude: d(o),
    credProps: d(o)
  },
  h = {
    publicKey: u({
      rp: u(o),
      user: u({
        id: u(s),
        name: u(o),
        displayName: u(o)
      }),
      challenge: u(s),
      pubKeyCredParams: u(o),
      timeout: d(o),
      excludeCredentials: d([l]),
      authenticatorSelection: d(o),
      attestation: d(o),
      extensions: d(f)
    }),
    signal: d(o)
  },
  g = {
    type: u(o),
    id: u(o),
    rawId: u(s),
    authenticatorAttachment: d(o),
    response: u({
      clientDataJSON: u(s),
      attestationObject: u(s),
      transports: c(o, e => {
        var t;
        return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
      })
    }),
    clientExtensionResults: c(p, e => e.getClientExtensionResults())
  },
  b = {
    mediation: d(o),
    publicKey: u({
      challenge: u(s),
      timeout: d(o),
      rpId: d(o),
      allowCredentials: d([l]),
      userVerification: d(o),
      extensions: d(f)
    }),
    signal: d(o)
  },
  v = {
    type: u(o),
    id: u(o),
    rawId: u(s),
    authenticatorAttachment: d(o),
    response: u({
      clientDataJSON: u(s),
      authenticatorData: u(s),
      signature: u(s),
      userHandle: u(s)
    }),
    clientExtensionResults: c(p, e => e.getClientExtensionResults())
  };
async function m(e) {
  let t = await navigator.credentials.create(a(r, h, e));
  return a(i, g, t)
}
async function y(e) {
  let t = await navigator.credentials.get(a(r, b, e));
  return a(i, v, t)
}