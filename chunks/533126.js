function i(e) {
    let t = '=='.slice(0, (4 - (e.length % 4)) % 4),
        n = atob(e.replace(/-/g, '+').replace(/_/g, '/') + t),
        i = new ArrayBuffer(n.length),
        r = new Uint8Array(i);
    for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
    return i;
}
function r(e) {
    let t = new Uint8Array(e),
        n = '';
    for (let e of t) n += String.fromCharCode(e);
    return btoa(n).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
n.d(t, {
    U2: function () {
        return _;
    },
    wz: function () {
        return p;
    }
});
var s = 'copy',
    a = 'convert';
function l(e, t, n) {
    if (t === s) return n;
    if (t === a) return e(n);
    if (t instanceof Array) return n.map((n) => l(e, t[0], n));
    if (t instanceof Object) {
        let i = {};
        for (let [r, s] of Object.entries(t)) {
            if (s.derive) {
                let e = s.derive(n);
                void 0 !== e && (n[r] = e);
            }
            if (!(r in n)) {
                if (s.required) throw Error(`Missing key: ${r}`);
                continue;
            }
            if (null == n[r]) {
                i[r] = null;
                continue;
            }
            i[r] = l(e, s.schema, n[r]);
        }
        return i;
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
        type: c(s),
        id: c(a),
        transports: u(s)
    },
    h = {
        appid: u(s),
        appidExclude: u(s),
        credProps: u(s)
    },
    g = {
        appid: u(s),
        appidExclude: u(s),
        credProps: u(s)
    };
c({
    rp: c(s),
    user: c({
        id: c(a),
        name: c(s),
        displayName: c(s)
    }),
    challenge: c(a),
    pubKeyCredParams: c(s),
    timeout: u(s),
    excludeCredentials: u([d]),
    authenticatorSelection: u(s),
    attestation: u(s),
    extensions: u(h)
}),
    u(s),
    c(s),
    c(s),
    c(a),
    u(s),
    c({
        clientDataJSON: c(a),
        attestationObject: c(a),
        transports: o(s, (e) => {
            var t;
            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
        })
    }),
    o(g, (e) => e.getClientExtensionResults());
var f = {
        mediation: u(s),
        publicKey: c({
            challenge: c(a),
            timeout: u(s),
            rpId: u(s),
            allowCredentials: u([d]),
            userVerification: u(s),
            extensions: u(h)
        }),
        signal: u(s)
    },
    m = {
        type: c(s),
        id: c(s),
        rawId: c(a),
        authenticatorAttachment: u(s),
        response: c({
            clientDataJSON: c(a),
            authenticatorData: c(a),
            signature: c(a),
            userHandle: c(a)
        }),
        clientExtensionResults: o(g, (e) => e.getClientExtensionResults())
    };
function p(e) {
    return l(i, f, e);
}
async function _(e) {
    let t = await navigator.credentials.get(e);
    return (t.toJSON = () => l(r, m, t)), t;
}
