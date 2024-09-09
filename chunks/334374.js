n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120),
    n(571269),
    n(298267);
var i = n(735250),
    s = n(470079),
    a = n(414910),
    l = n(226961),
    r = n(987500);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        o = (0, a.Z)(n.type),
        [c, u] = s.useState(),
        [d, h] = s.useState(),
        [m, p] = s.useState(),
        _ = n.id.split(':').at(-1),
        f = t === _,
        E = s.useCallback((e, t, n) => {
            var i, s, a;
            let r = n ? l.ZP.getOutboundStats(t) : l.ZP.getInboundStats(e, t);
            u(null !== (i = null == r ? void 0 : r.codec) && void 0 !== i ? i : 'unknown'), h(void 0 === (s = null == r ? void 0 : r.resolution) || (0 === s.width && 0 === s.height) ? 'unknown' : s.width + ' x ' + s.height), p((null == r ? void 0 : r.bitrateEstimate) !== void 0 ? ((a = r.bitrateEstimate), ''.concat((a / 1000).toFixed(2), ' Kbps')) : 'unknown');
        }, []);
    return (
        s.useEffect(() => {
            let e = () => E(_, o, f);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [f, _, o, E]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: r.streamInfoContainer,
                children: [
                    (0, i.jsx)('div', { children: (0, i.jsx)('strong', { children: 'Stream Info' }) }),
                    (0, i.jsxs)('div', {
                        className: r.infoRow,
                        children: [(0, i.jsx)('span', { children: 'Video Codec: ' }), (0, i.jsx)('strong', { children: c })]
                    }),
                    (0, i.jsxs)('div', {
                        className: r.infoRow,
                        children: [(0, i.jsx)('span', { children: 'Resolution: ' }), (0, i.jsx)('strong', { children: d })]
                    }),
                    f &&
                        (0, i.jsxs)('div', {
                            className: r.infoRow,
                            children: [(0, i.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, i.jsx)('strong', { children: m })]
                        })
                ]
            })
        })
    );
}
