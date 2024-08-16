n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(470079),
    i = n(442837),
    a = n(481060),
    s = n(40851),
    o = n(819640),
    l = n(574254),
    u = n(981631);
function c() {
    let e = (0, a.useModalsStore)(
            (e) =>
                !Object.entries(e).every((e) => {
                    let [t, n] = e;
                    return 0 === n.length;
                })
        ),
        t = (0, i.e7)([l.Z], () => l.Z.isOpen()),
        n = (0, i.e7)([o.Z], () => o.Z.hasLayers()),
        [c, d] = r.useState(!1),
        _ = (0, s.Aq)();
    return (
        r.useEffect(() => {
            function e() {
                d(!0);
            }
            function t() {
                d(!1);
            }
            return (
                _.subscribe(u.CkL.POPOUT_SHOW, e),
                _.subscribe(u.CkL.POPOUT_HIDE, t),
                () => {
                    _.unsubscribe(u.CkL.POPOUT_SHOW, e), _.unsubscribe(u.CkL.POPOUT_HIDE, t);
                }
            );
        }, [_]),
        e || t || c || n
    );
}
