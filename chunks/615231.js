"use strict";

function s(e) {
  let t = "==".slice(0, (4 - e.length % 4) % 4),
    n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
    s = new ArrayBuffer(n.length),
    r = new Uint8Array(s);
  for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
  return s
}

function r(e) {
  let t = new Uint8Array(e),
    n = "";
  for (let e of t) n += String.fromCharCode(e);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
n.d(t, {
  U2: function() {
    return f
  },
  wz: function() {
    return g
  }
});
var i = "copy",
  a = "convert";

function l(e, t, n) {
  if (t === i) return n;
  if (t === a) return e(n);
  if (t instanceof Array) return n.map(n => l(e, t[0], n));
  if (t instanceof Object) {
    let s = {};
    for (let [r, i] of Object.entries(t)) {
      if (i.derive) {
        let e = i.derive(n);
        void 0 !== e && (n[r] = e)
      }
      if (!(r in n)) {
        if (i.required) throw Error(`Missing key: ${r}`);
        continue
      }
      if (null == n[r]) {
        s[r] = null;
        continue
      }
      s[r] = l(e, i.schema, n[r])
    }
    return s
  }
}

function o(e, t) {
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

function c(e) {
  return {
    required: !1,
    schema: e
  }
}
var d = {
    type: u(i),
    id: u(a),
    transports: c(i)
  },
  h = {
    appid: c(i),
    appidExclude: c(i),
    credProps: c(i)
  },
  E = {
    appid: c(i),
    appidExclude: c(i),
    credProps: c(i)
  };
u({
  rp: u(i),
  user: u({
    id: u(a),
    name: u(i),
    displayName: u(i)
  }),
  challenge: u(a),
  pubKeyCredParams: u(i),
  timeout: c(i),
  excludeCredentials: c([d]),
  authenticatorSelection: c(i),
  attestation: c(i),
  extensions: c(h)
}), c(i), u(i), u(i), u(a), c(i), u({
  clientDataJSON: u(a),
  attestationObject: u(a),
  transports: o(i, e => {
    var t;
    return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
  })
}), o(E, e => e.getClientExtensionResults());
var _ = {
    mediation: c(i),
    publicKey: u({
      challenge: u(a),
      timeout: c(i),
      rpId: c(i),
      allowCredentials: c([d]),
      userVerification: c(i),
      extensions: c(h)
    }),
    signal: c(i)
  },
  m = {
    type: u(i),
    id: u(i),
    rawId: u(a),
    authenticatorAttachment: c(i),
    response: u({
      clientDataJSON: u(a),
      authenticatorData: u(a),
      signature: u(a),
      userHandle: u(a)
    }),
    clientExtensionResults: o(E, e => e.getClientExtensionResults())
  };

function g(e) {
  return l(s, _, e)
}
async function f(e) {
  let t = await navigator.credentials.get(e);
  return t.toJSON = () => l(r, m, t), t
}