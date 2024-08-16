n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(395361),
    s = n(829820),
    o = n(316865);
function l(e) {
    let { activity: t, user: n, source: l, className: u, size: c, look: d, color: _, fullWidth: E, onAction: f } = e,
        { label: h, tooltip: p, loading: m, disabled: I, onClick: T } = (0, s.Ih)(t, n, l),
        g = () => {
            null == f || f(), T();
        };
    return (0, r.jsx)(i.Tooltip, {
        text: p,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, r.jsxs)(i.Button, {
                className: u,
                innerClassName: o.playButtonInner,
                size: c,
                look: d,
                color: _,
                fullWidth: E,
                onClick: g,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: I,
                submitting: m,
                children: [
                    (0, r.jsx)(a.Z, {
                        width: 16,
                        height: 16
                    }),
                    h
                ]
            });
        }
    });
}
