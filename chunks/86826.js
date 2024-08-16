var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(44315),
    l = n(600164),
    o = n(120998),
    c = n(353042),
    d = n(689938),
    u = n(78555);
t.Z = function (e) {
    var t;
    let { title: n, className: a, color: _, animate: E, gradientStopColor: h, getHistoricalTotalBytes: m } = e,
        I = (0, r.Sl)(_).hex,
        g = null === (t = (0, r.Sl)(h)) || void 0 === t ? void 0 : t.hex;
    return (0, i.jsx)(c.Z, {
        getHistoricalTotalBytes: m,
        children: (e, t, r) => {
            var c;
            return (0, i.jsx)('div', {
                className: s()(u.monitor, a),
                children: (0, i.jsxs)(l.Z, {
                    align: l.Z.Align.CENTER,
                    children: [
                        (0, i.jsxs)(l.Z, {
                            className: u.text,
                            direction: l.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)('div', {
                                    className: u.title,
                                    children: n
                                }),
                                (0, i.jsx)('div', {
                                    className: u.rate,
                                    children: (c = (e[e.length - 1] / t) * 1000) > 1000 ? d.Z.Messages.FILE_RATE_MB.format({ size: Math.round(c / 1000) }) : d.Z.Messages.FILE_RATE_KB.format({ size: Math.round(c) })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: u.overflowContainer,
                            children: (0, i.jsx)(o.Z, {
                                data: e,
                                maxValue: Math.max(Math.max.apply(null, e), 1000),
                                className: u.sparkChart,
                                updateInterval: t,
                                color: I,
                                gradientStopColor: g,
                                numUpdatesToShow: r,
                                animate: E,
                                pixelWidth: 600,
                                pixelHeight: 48,
                                lineWidth: 4
                            })
                        })
                    ]
                })
            });
        }
    });
};
