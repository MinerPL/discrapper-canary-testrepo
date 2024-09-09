r.d(t, {
    $p: function () {
        return _;
    },
    pT: function () {
        return i;
    }
});
var n = r(285883),
    a = r(394798);
let o = RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$');
function i(e, t) {
    let r = (function (e) {
            let t;
            if (!e) return;
            let r = e.match(o);
            if (!!r)
                return (
                    '1' === r[3] ? (t = !0) : '0' === r[3] && (t = !1),
                    {
                        traceId: r[1],
                        parentSampled: t,
                        parentSpanId: r[2]
                    }
                );
        })(e),
        i = (0, n.EN)(t),
        { traceId: _, parentSpanId: E, parentSampled: s } = r || {};
    return r
        ? {
              traceId: _ || (0, a.DM)(),
              parentSpanId: E || (0, a.DM)().substring(16),
              spanId: (0, a.DM)().substring(16),
              sampled: s,
              dsc: i || {}
          }
        : {
              traceId: _ || (0, a.DM)(),
              spanId: (0, a.DM)().substring(16)
          };
}
function _(e = (0, a.DM)(), t = (0, a.DM)().substring(16), r) {
    let n = '';
    return void 0 !== r && (n = r ? '-1' : '-0'), `${e}-${t}${n}`;
}
