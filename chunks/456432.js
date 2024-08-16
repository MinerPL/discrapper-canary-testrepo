n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(829820);
function r(e) {
    let { activity: t, user: n, source: r, ...l } = e,
        { label: o, tooltip: c, loading: u, disabled: d, onClick: _ } = (0, s.Lz)(t, n, r);
    return (0, i.jsx)(a.Tooltip, {
        text: c,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, i.jsx)(a.Button, {
                ...l,
                color: d ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                onClick: _,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: !u && d,
                submitting: u,
                children: o
            });
        }
    });
}
