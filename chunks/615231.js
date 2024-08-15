function s(e) {
  let t = '=='.slice(0, (4 - e.length % 4) % 4),
n = atob(e.replace(/-/g, '+').replace(/_/g, '/') + t),
s = new ArrayBuffer(n.length),
r = new Uint8Array(s);
  for (let e = 0; e < n.length; e++)
r[e] = n.charCodeAt(e);
  return s;
}

function r(e) {
  let t = new Uint8Array(e),
n = '';
  for (let e of t)
n += String.fromCharCode(e);
  return btoa(n).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
n.d(t, {
  U2: function() {
return I;
  },
  wz: function() {
return p;
  }
});
var i = 'copy',
  a = 'convert';

function l(e, t, n) {
  if (t === i)
return n;
  if (t === a)
return e(n);
  if (t instanceof Array)
return n.map(n => l(e, t[0], n));
  if (t instanceof Object) {
let s = {};
for (let [r, i] of Object.entries(t)) {
  if (i.derive) {
    let e = i.derive(n);
    void 0 !== e && (n[r] = e);
  }
  if (!(r in n)) {
    if (i.required)
      throw Error(`Missing key: ${ r }`);
    continue;
  }
  if (null == n[r]) {
    s[r] = null;
    continue;
  }
  s[r] = l(e, i.schema, n[r]);
}
return s;
  }
}

function o(e, t) {
  return {
required: !0,
schema: e,
derive: t
  };
}

function c(e) {
  return {
required: !0,
schema: e
  };
}

function u(e) {
  return {
required: !1,
schema: e
  };
}
var d = {
type: c(i),
id: c(a),
transports: u(i)
  },
  _ = {
appid: u(i),
appidExclude: u(i),
credProps: u(i)
  },
  h = {
appid: u(i),
appidExclude: u(i),
credProps: u(i)
  };
c({
  rp: c(i),
  user: c({
id: c(a),
name: c(i),
displayName: c(i)
  }),
  challenge: c(a),
  pubKeyCredParams: c(i),
  timeout: u(i),
  excludeCredentials: u([d]),
  authenticatorSelection: u(i),
  attestation: u(i),
  extensions: u(_)
}), u(i), c(i), c(i), c(a), u(i), c({
  clientDataJSON: c(a),
  attestationObject: c(a),
  transports: o(i, e => {
var t;
return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
  })
}), o(h, e => e.getClientExtensionResults());
var E = {
mediation: u(i),
publicKey: c({
  challenge: c(a),
  timeout: u(i),
  rpId: u(i),
  allowCredentials: u([d]),
  userVerification: u(i),
  extensions: u(_)
}),
signal: u(i)
  },
  g = {
type: c(i),
id: c(i),
rawId: c(a),
authenticatorAttachment: u(i),
response: c({
  clientDataJSON: c(a),
  authenticatorData: c(a),
  signature: c(a),
  userHandle: c(a)
}),
clientExtensionResults: o(h, e => e.getClientExtensionResults())
  };

function p(e) {
  return l(s, E, e);
}
async function I(e) {
  let t = await navigator.credentials.get(e);
  return t.toJSON = () => l(r, g, t), t;
}