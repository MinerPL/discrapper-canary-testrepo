var i = n(735250),
    a = n(470079),
    s = n(252618),
    r = n(106075),
    l = n(121711),
    o = n(823379),
    c = n(571457),
    d = n(766219),
    u = n(917039),
    _ = n(49898),
    E = n(623641);
t.Z = function () {
    let e = (0, u.Z)(),
        t = (function (e) {
            switch (e) {
                case _.F$.SERVERS:
                    return (0, i.jsx)(r.Z, {});
                case _.F$.QUESTS:
                    return (0, i.jsx)(l.Z, {});
                default:
                    (0, o.vE)(e);
            }
        })(e);
    return (
        a.useEffect(() => {
            (0, c.RI)({ selectedTab: e });
        }, [e]),
        (0, i.jsxs)('section', {
            className: E.container,
            children: [(0, i.jsx)(s.yY, { location: (0, d.s)(e) }), (0, i.jsx)('div', { className: E.dragRegion }), t]
        })
    );
};
