t.d(n, {
    I: function () {
        return c;
    }
});
var i = t(735250),
    a = t(470079),
    s = t(481060),
    l = t(296023),
    r = t(768581),
    o = t(585835);
function c(e) {
    var n;
    let { channel: c, application: d, showApplicationImage: u, ...I } = e,
        m = (0, l.w)(c),
        _ = a.useCallback(
            () =>
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await t.e('14089').then(t.bind(t, 262528));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: c,
                            application: d
                        });
                }),
            [d, c]
        ),
        N = u ? (null !== (n = d.getIconURL(48)) && void 0 !== n ? n : r.pK['0']) : void 0;
    return (0, i.jsx)(o.Z, {
        imageSrc: N,
        onButtonClick: _,
        details: null != m ? [{ text: m }] : void 0,
        ...I
    });
}
