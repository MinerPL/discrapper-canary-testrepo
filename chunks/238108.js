n(47120);
var s = n(470079);
t.Z = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        [t, n] = s.useState(!1),
        [a, r] = s.useState(0),
        [i, l] = s.useState(!1),
        [o, c] = s.useState(0);
    return (
        s.useEffect(() => {
            a >= e && (l(!0), c(Math.floor(a / e)));
            let t = setTimeout(() => {
                r(0);
            }, 1000);
            return () => clearTimeout(t);
        }, [a, e]),
        s.useEffect(() => {
            if (!t) {
                let e = setTimeout(() => {
                    l(!1), c(0);
                }, 1000);
                return () => clearTimeout(e);
            }
            r((e) => e + 1);
        }, [t]),
        {
            onHover: () => {
                n(!0);
            },
            onUnhover: () => {
                n(!1);
            },
            isEasterEggTriggered: i,
            easterEggLevel: o
        }
    );
};
