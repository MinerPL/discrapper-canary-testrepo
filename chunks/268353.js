var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(928518),
    o = n(451478),
    l = n(228488),
    u = n(871499),
    c = n(689938);
t.Z = i.ZP.connectStores([o.Z, s.Z], (e) => {
    let { node: t, guestWindow: n } = e;
    return { enabled: (0, l.rB)(t, null == n ? void 0 : n.document) };
})(function (e) {
    let { enabled: t, ...n } = e,
        i = t ? c.Z.Messages.EXIT_FULL_SCREEN : c.Z.Messages.FULL_SCREEN,
        s = t ? a.FullscreenExitIcon : a.FullscreenEnterIcon;
    return (0, r.jsx)(u.Z, {
        label: i,
        iconComponent: s,
        ...n
    });
});
