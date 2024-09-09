t.d(s, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var n = t(470079),
    a = t(304445),
    i = t(997383);
let r = [];
function o(e) {
    let { visible: s, autocompleterResultTypes: t, autocompleterOptions: o, autocompleterBeforeCreateSearchContext: l } = e,
        [c, d] = n.useState(''),
        [_, E] = n.useState(r),
        u = n.useCallback((e, s) => {
            '' === (s = s.trim()).trim() ? E(r) : E(e);
        }, []);
    n.useEffect(
        () =>
            a.Z.addRouteChangeListener(() => {
                d('');
            }),
        []
    );
    let [I] = n.useState(() => new i.Z(u, t, void 0, o));
    return (
        n.useEffect(() => {
            s ? (null == l || l(I), I.createSearchContext()) : (I.clean(), d(''));
        }, [s, I, l]),
        {
            queryResults: _,
            query: c,
            updateQuery: n.useCallback(
                (e) => {
                    d(e), I.search(e);
                },
                [I]
            )
        }
    );
}
