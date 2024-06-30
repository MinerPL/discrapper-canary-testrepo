n.d(t, {
    Z: function () {
        return s;
    }
}), n(757143), n(47120);
var r = n(735250);
n(470079);
var i = n(481060), a = n(660199), o = n(945401);
function s(e, t) {
    if (!('type' in e))
        return null;
    if ('timestamp' === e.type)
        return (0, r.jsx)(l, {
            ...t,
            timestamp: e.parsed
        });
    return null;
}
function l(e) {
    var t;
    let {
            timestamp: n,
            replace: s
        } = e, l = e => {
            let {
                    timestamp: t,
                    format: r
                } = e, i = null != t ? Math.floor(t.getTime() / 1000) : n.timestamp, o = null != r ? r : n.format;
            s((0, a.He)(i, o));
        };
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)(i.DateInput, {
                value: n.parsed,
                onSelect: e => {
                    l({ timestamp: e.toDate() });
                }
            }),
            (0, r.jsx)(i.TimeInput, {
                value: n.parsed,
                onChange: e => {
                    l({ timestamp: e.toDate() });
                }
            }),
            (0, r.jsx)(i.RadioGroup, {
                options: Object.entries(a.Qh).map(e => {
                    let [t, r] = e;
                    return {
                        name: r(n.parsed),
                        value: t
                    };
                }),
                value: null !== (t = n.format) && void 0 !== t ? t : a.K_,
                size: i.RadioGroup.Sizes.SMALL,
                onChange: e => {
                    let {value: t} = e;
                    l({ format: t });
                }
            })
        ]
    });
}
