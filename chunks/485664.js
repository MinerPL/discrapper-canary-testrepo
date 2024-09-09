_.d(E, {
    o: function () {
        return i;
    }
}),
    _(47120);
var t = _(470079),
    T = _(399606),
    I = _(823162),
    n = _(706454),
    s = _(914788),
    A = _(880257);
let r = new Set(['US']),
    a = new Set(['en-US', 'es-ES']),
    i = () => {
        let e = (0, A.Z)(),
            E = (0, T.e7)([s.Z], () => s.Z.getUserCountry()),
            _ = (0, T.e7)([n.default], () => n.default.locale);
        return (
            t.useEffect(() => {
                null == E && (0, I.hi)();
            }, [E]),
            !e && null != E && r.has(E.alpha2) && a.has(_)
        );
    };
