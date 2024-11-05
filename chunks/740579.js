e.r(n),
    e.d(n, {
        default: function () {
            return s;
        }
    });
var i = e(200651),
    o = e(192379),
    r = e(481060),
    l = e(239091),
    a = e(167675),
    u = e(249453),
    d = e(991249),
    c = e(388032);
function s(t) {
    let { onSelect: n, onClose: e, widget: s } = t,
        f = (0, a.Z)(),
        Z = (0, u.Z)(s),
        p = o.useRef(e),
        g = (0, d.Z)(s.id, 'boolean' != typeof s.meta.horizontal || s.meta.horizontal);
    return (
        o.useEffect(() => void (p.current = e)),
        o.useEffect(() => () => p.current(), []),
        (0, i.jsxs)(r.Menu, {
            navId: 'overlay-video-widget-context-menu',
            onClose: l.Zy,
            'aria-label': c.intl.string(c.t.tPfVWl),
            onSelect: n,
            children: [f, g, Z]
        })
    );
}
