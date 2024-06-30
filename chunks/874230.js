r.d(e, {
    $p: function () {
        return E;
    },
    KA: function () {
        return o;
    },
    qG: function () {
        return i;
    }
});
var n = r(545459), _ = r(862315);
let a = RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$');
function i(t) {
    let e;
    if (!t)
        return;
    let r = t.match(a);
    if (!!r)
        return '1' === r[3] ? e = !0 : '0' === r[3] && (e = !1), {
            traceId: r[1],
            parentSampled: e,
            parentSpanId: r[2]
        };
}
function o(t, e) {
    let r = i(t), a = (0, n.EN)(e), {
            traceId: o,
            parentSpanId: E,
            parentSampled: s
        } = r || {}, c = {
            traceId: o || (0, _.DM)(),
            spanId: (0, _.DM)().substring(16),
            sampled: void 0 !== s && s
        };
    return E && (c.parentSpanId = E), a && (c.dsc = a), {
        traceparentData: r,
        dynamicSamplingContext: a,
        propagationContext: c
    };
}
function E(t = (0, _.DM)(), e = (0, _.DM)().substring(16), r) {
    let n = '';
    return void 0 !== r && (n = r ? '-1' : '-0'), `${ t }-${ e }${ n }`;
}
