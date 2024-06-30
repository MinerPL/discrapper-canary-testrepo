n.d(t, {
    d: function () {
        return d;
    },
    h: function () {
        return c;
    }
});
var r = n(735250), i = n(470079), a = n(887024), o = n(399606), s = n(607070), l = n(981631);
let u = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => l.dG4,
        removeClickListener: l.dG4
    }, c = i.createContext(u);
function d(e) {
    let {
            children: t,
            confettiCanvas: n,
            spriteCanvas: l,
            baseConfig: d,
            addClickListener: _,
            removeClickListener: E
        } = e, f = (0, a.uR)(n, l), h = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), p = i.useMemo(() => h ? u : {
            confettiCanvas: n,
            cannon: f,
            createConfetti: (e, t) => f.createConfetti({
                ...d,
                ...e
            }, t),
            createConfettiAt: (e, t, n, r) => f.createConfetti({
                ...d,
                position: {
                    type: 'static',
                    value: {
                        x: e,
                        y: t
                    }
                },
                ...n
            }, r),
            createMultipleConfetti: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n = arguments.length > 2 ? arguments[2] : void 0;
                return f.createMultipleConfetti({
                    ...d,
                    ...e
                }, t, n);
            },
            createMultipleConfettiAt: function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20, i = arguments.length > 4 ? arguments[4] : void 0;
                return f.createMultipleConfetti({
                    ...d,
                    position: {
                        type: 'static',
                        value: {
                            x: e,
                            y: t
                        }
                    },
                    ...n
                }, r, i);
            },
            addClickListener: _,
            removeClickListener: E
        }, [
            _,
            d,
            f,
            n,
            h,
            E
        ]);
    return (0, r.jsx)(c.Provider, {
        value: p,
        children: t
    });
}
