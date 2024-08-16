r.d(t, {
    BO: function () {
        return E;
    },
    Cd: function () {
        return p;
    },
    HY: function () {
        return N;
    },
    Jd: function () {
        return _;
    },
    KQ: function () {
        return R;
    },
    R: function () {
        return c;
    },
    V$: function () {
        return u;
    },
    f4: function () {
        return l;
    },
    gv: function () {
        return s;
    },
    mL: function () {
        return d;
    },
    zQ: function () {
        return A;
    }
});
var n = r(967752),
    a = r(202811),
    o = r(370336),
    i = r(899517);
function _(e, t = []) {
    return [e, t];
}
function E(e, t) {
    let [r, n] = e;
    return [r, [...n, t]];
}
function s(e, t) {
    for (let r of e[1]) {
        let e = r[0].type;
        if (t(r, e)) return !0;
    }
    return !1;
}
function c(e, t) {
    return s(e, (e, r) => t.includes(r));
}
function I(e) {
    return i.n.__SENTRY__ && i.n.__SENTRY__.encodePolyfill ? i.n.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e);
}
function u(e) {
    let [t, r] = e,
        n = JSON.stringify(t);
    function o(e) {
        'string' == typeof n ? (n = 'string' == typeof e ? n + e : [I(n), e]) : n.push('string' == typeof e ? I(e) : e);
    }
    for (let e of r) {
        let [t, r] = e;
        if (
            (o(`
${JSON.stringify(t)}
`),
            'string' == typeof r || r instanceof Uint8Array)
        )
            o(r);
        else {
            let e;
            try {
                e = JSON.stringify(r);
            } catch (t) {
                e = JSON.stringify((0, a.Fv)(r));
            }
            o(e);
        }
    }
    return 'string' == typeof n
        ? n
        : (function (e) {
              let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                  r = 0;
              for (let n of e) t.set(n, r), (r += n.length);
              return t;
          })(n);
}
function l(e) {
    let t = 'string' == typeof e ? I(e) : e;
    function r(e) {
        let r = t.subarray(0, e);
        return (t = t.subarray(e + 1)), r;
    }
    function n() {
        var e;
        let n = t.indexOf(10);
        return n < 0 && (n = t.length), JSON.parse(((e = r(n)), i.n.__SENTRY__ && i.n.__SENTRY__.decodePolyfill ? i.n.__SENTRY__.decodePolyfill(e) : new TextDecoder().decode(e)));
    }
    let a = n(),
        o = [];
    for (; t.length; ) {
        let e = n(),
            t = 'number' == typeof e.length ? e.length : void 0;
        o.push([e, t ? r(t) : n()]);
    }
    return [a, o];
}
function R(e) {
    return [{ type: 'span' }, e];
}
function A(e) {
    let t = 'string' == typeof e.data ? I(e.data) : e.data;
    return [
        (0, o.Jr)({
            type: 'attachment',
            length: t.length,
            filename: e.filename,
            content_type: e.contentType,
            attachment_type: e.attachmentType
        }),
        t
    ];
}
let T = {
    session: 'session',
    sessions: 'session',
    attachment: 'attachment',
    transaction: 'transaction',
    event: 'error',
    client_report: 'internal',
    user_report: 'default',
    profile: 'profile',
    profile_chunk: 'profile',
    replay_event: 'replay',
    replay_recording: 'replay',
    check_in: 'monitor',
    feedback: 'feedback',
    span: 'span',
    statsd: 'metric_bucket'
};
function d(e) {
    return T[e];
}
function N(e) {
    if (!e || !e.sdk) return;
    let { name: t, version: r } = e.sdk;
    return {
        name: t,
        version: r
    };
}
function p(e, t, r, a) {
    let i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...(t && { sdk: t }),
        ...(!!r && a && { dsn: (0, n.RA)(a) }),
        ...(i && { trace: (0, o.Jr)({ ...i }) })
    };
}
