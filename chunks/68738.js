e.r(n),
    e.d(n, {
        default: function () {
            return d;
        }
    });
var i = e(200651),
    o = e(192379),
    r = e(481060),
    a = e(239091),
    u = e(249453),
    l = e(991249),
    c = e(388032);
function d(t) {
    let { widget: n, onSelect: e, onClose: d } = t,
        s = (0, u.Z)(n),
        f = (0, l.Z)(n.id, 'boolean' == typeof n.meta.horizontal && n.meta.horizontal),
        p = o.useRef(d);
    return (
        o.useEffect(() => void (p.current = d)),
        o.useEffect(() => () => p.current(), []),
        (0, i.jsxs)(r.Menu, {
            navId: 'overlay-go-live-widget-context-menu',
            onClose: a.Zy,
            'aria-label': c.intl.string(c.t.tPfVWl),
            onSelect: e,
            children: [f, s]
        })
    );
}
