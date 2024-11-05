n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(34674),
    l = n(823379),
    s = n(448021),
    o = n(405411),
    c = n(215453),
    d = n(24746),
    u = n(669401),
    h = n(829499);
function m(e) {
    let { application: t } = e,
        n = r.useMemo(() => {
            var e, n, i;
            return null !== (i = (null !== (n = null === (e = t.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(a.RF).filter(l.lm)) && void 0 !== i ? i : [];
        }, [t]);
    return (0, i.jsxs)('div', {
        className: h.aboutContainer,
        children: [
            (0, i.jsx)(s.Z, {
                application: t,
                carouselItems: n
            }),
            (0, i.jsx)(d.Z, { application: t }),
            (0, i.jsx)(o.Z, { application: t }),
            (0, i.jsx)(u.Z, { application: t }),
            (0, i.jsx)(c.Z, { application: t })
        ]
    });
}
