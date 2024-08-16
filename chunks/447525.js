n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(757143),
    n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(660199),
    s = n(408444);
function o(e, t) {
    if (!('type' in e)) return null;
    if ('timestamp' === e.type)
        return (0, r.jsx)(l, {
            ...t,
            timestamp: e.parsed
        });
    return null;
}
function l(e) {
    var t;
    let { timestamp: n, replace: o } = e,
        l = (e) => {
            let { timestamp: t, format: r } = e,
                i = null != t ? Math.floor(t.getTime() / 1000) : n.timestamp,
                s = null != r ? r : n.format;
            o((0, a.He)(i, s));
        };
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsx)(i.DateInput, {
                value: n.parsed,
                onSelect: (e) => {
                    l({ timestamp: e.toDate() });
                }
            }),
            (0, r.jsx)(i.TimeInput, {
                value: n.parsed,
                onChange: (e) => {
                    l({ timestamp: e.toDate() });
                }
            }),
            (0, r.jsx)(i.RadioGroup, {
                options: Object.entries(a.Qh).map((e) => {
                    let [t, r] = e;
                    return {
                        name: r(n.parsed),
                        value: t
                    };
                }),
                value: null !== (t = n.format) && void 0 !== t ? t : a.K_,
                size: i.RadioGroup.Sizes.SMALL,
                onChange: (e) => {
                    let { value: t } = e;
                    l({ format: t });
                }
            })
        ]
    });
}
