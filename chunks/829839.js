n.d(t, {
    AQ: function () {
        return g;
    },
    DY: function () {
        return h;
    },
    yQ: function () {
        return p;
    }
}),
    n(653041),
    n(733860);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(553813),
    c = n.n(u),
    d = n(65154);
let f = [
    {
        name: 'H265',
        encode: (null === (i = window) || void 0 === i ? void 0 : null === (r = i.DiscordNative) || void 0 === r ? void 0 : r.process.platform) !== 'darwin' || ((null === (s = window) || void 0 === s ? void 0 : null === (a = s.DiscordNative) || void 0 === a ? void 0 : a.os.arch) === 'arm64' && c().satisfies(null === (l = window) || void 0 === l ? void 0 : null === (o = l.DiscordNative) || void 0 === o ? void 0 : o.os.release, d.n4)),
        decode: !0
    },
    {
        name: 'H264',
        encode: !0,
        decode: !0
    },
    {
        name: 'VP8',
        encode: !0,
        decode: !0
    },
    {
        name: 'VP9',
        encode: !0,
        decode: !0
    }
];
function _(e, t) {
    let n = t.concat(f),
        r = [];
    return (
        n.forEach((t) => {
            let n = e.find((e) => t.name === e.codec);
            null != n &&
                r.push({
                    name: n.codec,
                    encode: n.encode && t.encode,
                    decode: n.decode && t.decode
                });
        }),
        r
    );
}
function h(e) {
    let t = [];
    return (
        e.has(d.V8.SIGNAL_AV1_DECODE)
            ? t.unshift({
                  name: 'AV1',
                  encode: !1,
                  decode: !0
              })
            : e.has(d.V8.SIGNAL_AV1) &&
              t.unshift({
                  name: 'AV1',
                  encode: !0,
                  decode: !0
              }),
        t
    );
}
function p(e, t) {
    return 'string' == typeof e
        ? _(
              JSON.parse(e).map((e) => ({
                  codec: m(e.codec),
                  encode: e.encode,
                  decode: e.decode
              })),
              t
          )
        : _(
              e.map((e) => ({
                  codec: m(e),
                  encode: !0,
                  decode: !0
              })),
              t
          );
}
function m(e) {
    return 'AV1X' === e ? 'AV1' : e;
}
function g(e) {
    return 'AV1' === e ? 'AV1X' : e;
}
