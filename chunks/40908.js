s.d(t, {
    Z: function () {
        return o;
    }
}), s(47120);
var n = s(470079), a = s(304445), i = s(997383);
let r = [];
function o(e) {
    let {
            visible: t,
            autocompleterResultTypes: s,
            autocompleterOptions: o,
            autocompleterBeforeCreateSearchContext: l
        } = e, [c, d] = n.useState(''), [_, E] = n.useState(r), u = n.useCallback((e, t) => {
            '' === (t = t.trim()).trim() ? E(r) : E(e);
        }, []);
    n.useEffect(() => a.Z.addRouteChangeListener(() => {
        d('');
    }), []);
    let [T] = n.useState(() => new i.Z(u, s, void 0, o));
    return n.useEffect(() => {
        t ? (null == l || l(T), T.createSearchContext()) : (T.clean(), d(''));
    }, [
        t,
        T,
        l
    ]), {
        queryResults: _,
        query: c,
        updateQuery: n.useCallback(e => {
            d(e), T.search(e);
        }, [T])
    };
}
