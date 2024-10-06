t.d(e, {
    Z: function () {
        return r;
    }
});
var u = t(735250);
t(470079);
var i = t(481060),
    s = t(906732),
    c = t(453925),
    o = t(821564),
    l = t(632304);
function r() {
    let { analyticsLocations: n } = (0, s.ZP)();
    return [
        (0, u.jsx)(i.MenuGroup, { children: (0, o.Z)(n) }, 'input-mode-items'),
        (0, u.jsxs)(
            i.MenuGroup,
            {
                children: [(0, c.Z)(n), (0, l.Z)(n)]
            },
            'input-output'
        )
    ];
}
