n.d(e, {
    GL: function () {
        return o;
    },
    Jq: function () {
        return i;
    },
    O0: function () {
        return d;
    },
    U5: function () {
        return y;
    },
    XG: function () {
        return h;
    },
    hE: function () {
        return b;
    },
    iA: function () {
        return u;
    },
    kb: function () {
        return p;
    },
    l1: function () {
        return l;
    },
    np: function () {
        return s;
    },
    oY: function () {
        return c;
    }
});
var r = n(180450);
let i = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
    o = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
    s = (t, e) => (t << (32 - e)) | (t >>> e),
    h = (t, e) => (t << e) | ((t >>> (32 - e)) >>> 0),
    u = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
    f = (t) => ((t << 24) & 4278190080) | ((t << 8) & 16711680) | ((t >>> 8) & 65280) | ((t >>> 24) & 255);
function l(t) {
    for (let e = 0; e < t.length; e++) t[e] = f(t[e]);
}
let a = async () => {};
async function c(t, e, n) {
    let r = Date.now();
    for (let i = 0; i < t; i++) {
        n(i);
        let t = Date.now() - r;
        (!(t >= 0) || !(t < e)) && (await a(), (r += t));
    }
}
function d(t) {
    return (
        'string' == typeof t &&
            (t = (function (t) {
                if ('string' != typeof t) throw Error(`utf8ToBytes expected string, got ${typeof t}`);
                return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
        (0, r.aI)(t),
        t
    );
}
class p {
    clone() {
        return this._cloneInto();
    }
}
let g = {}.toString;
function y(t, e) {
    if (void 0 !== e && '[object Object]' !== g.call(e)) throw Error('Options should be object or undefined');
    return Object.assign(t, e);
}
function b(t) {
    let e = (e) => t().update(d(e)).digest(),
        n = t();
    return (e.outputLen = n.outputLen), (e.blockLen = n.blockLen), (e.create = () => t()), e;
}
