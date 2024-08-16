n.d(t, {
    Y0: function () {
        return l.Y0;
    },
    hz: function () {
        return l.hz;
    },
    mz: function () {
        return l.mz;
    },
    u_: function () {
        return u;
    },
    xB: function () {
        return l.xB;
    }
}),
    n(47120);
var r = n(470079),
    i = n(97613),
    a = n.n(i),
    s = n(952265),
    o = n(307616),
    l = n(466377);
function u(e) {
    let { renderModal: t, onCloseRequest: n, onCloseCallback: i } = e,
        [l] = r.useState(() => a()()),
        u = (0, o.v)();
    r.useLayoutEffect(
        () => (
            (0, s.h7)(
                t,
                {
                    modalKey: l,
                    onCloseRequest: n,
                    onCloseCallback: i
                },
                u
            ),
            () => {
                (0, s.Mr)(l, u);
            }
        ),
        []
    );
    let c = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            !c.current && (0, s.o)(l, t, n, i, u), (c.current = !1);
        }, [t, n]),
        null
    );
}
