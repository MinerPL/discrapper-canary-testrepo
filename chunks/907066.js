n.d(t, { Z: () => d });
var r = n(200651),
    s = n(359013),
    o = n(26141),
    a = n(401258),
    i = n(477839),
    c = n(364491),
    l = n(239956),
    u = n(658327);
function d(e) {
    let { isPaused: t } = e,
        n = s.Mq[i.yN.ORCHID];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Z, {
                interval: 1000,
                pointsPerInterval: n.points,
                isPaused: t,
                itemId: i.yN.ORCHID
            }),
            (0, r.jsx)(o.Z, {
                className: c.orchid,
                isPaused: t,
                interval: 1000,
                sources: [l, u]
            })
        ]
    });
}
