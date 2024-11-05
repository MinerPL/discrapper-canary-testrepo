n.d(t, {
    r: function () {
        return c;
    }
});
var r = n(192379),
    i = n(298503),
    a = n(632590),
    s = n(283209),
    o = function () {},
    l = function () {
        return Promise.resolve(null);
    },
    u = [];
function c(e) {
    var t = e.placement,
        n = void 0 === t ? 'bottom' : t,
        c = e.strategy,
        d = void 0 === c ? 'absolute' : c,
        f = e.modifiers,
        _ = void 0 === f ? u : f,
        h = e.referenceElement,
        p = e.onFirstUpdate,
        m = e.innerRef,
        g = e.children,
        E = r.useContext(i.C8),
        v = r.useState(null),
        I = v[0],
        S = v[1],
        T = r.useState(null),
        b = T[0],
        y = T[1];
    r.useEffect(
        function () {
            (0, a.k$)(m, I);
        },
        [m, I]
    );
    var A = r.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: p,
                    modifiers: [].concat(_, [
                        {
                            name: 'arrow',
                            enabled: null != b,
                            options: { element: b }
                        }
                    ])
                };
            },
            [n, d, p, _, b]
        ),
        N = (0, s.D)(h || E, I, A),
        C = N.state,
        R = N.styles,
        O = N.forceUpdate,
        D = N.update,
        L = r.useMemo(
            function () {
                return {
                    ref: S,
                    style: R.popper,
                    placement: C ? C.placement : n,
                    hasPopperEscaped: C && C.modifiersData.hide ? C.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: C && C.modifiersData.hide ? C.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: R.arrow,
                        ref: y
                    },
                    forceUpdate: O || o,
                    update: D || l
                };
            },
            [S, y, n, C, R, D, O]
        );
    return (0, a.$p)(g)(L);
}
