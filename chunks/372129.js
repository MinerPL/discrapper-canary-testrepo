n.d(t, {
    _: function () {
        return u;
    }
}),
    n(411104),
    n(653041),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(481060),
    r = n(53281),
    l = n(813197),
    o = n(426642),
    c = n(869783);
async function d(e) {
    try {
        var t;
        let n = await ((t = e),
            new Promise((e, n) => {
                if (null != t) {
                    let s = new FileReader();
                    (s.onload = (t) => {
                        var s;
                        'string' == typeof (null === (s = t.target) || void 0 === s ? void 0 : s.result) ? e(t.target.result) : n(Error('Failed to read file'));
                    }),
                        s.readAsDataURL(t);
                }
            })),
            s = new Image();
        return (
            (s.src = n),
            await s.decode(),
            {
                image: s,
                dataURI: n
            }
        );
    } catch {
        throw o.d.WRONG_TYPE;
    }
}
async function u(e, t) {
    let n = [];
    for (let s = 0; s < e.length; s++) {
        let a = e[s];
        try {
            let { image: e, dataURI: s } = await d(a),
                i = a.type === c.m.MP4 ? await t(s, a) : await t(s, a, e);
            null != i &&
                n.push({
                    type: i,
                    filename: a.name
                });
        } catch (e) {
            n.push({
                type: e,
                filename: a.name
            });
        }
    }
    n.length > 0 && _(n);
}
let _ = (e) => {
    (0, i.openModalLazy)(async () => {
        let { default: t } = await n.e('68720').then(n.bind(n, 70846));
        return (n) =>
            (0, s.jsx)(t, {
                errors: e,
                ...n
            });
    });
};
t.Z = (e) => {
    let { onChange: t, multiple: o = !0, disabled: c, className: d, tabIndex: _ = -1, 'aria-label': I, filters: E, setLoading: T } = e,
        m = a.createRef(),
        N = a.useRef(null),
        [S, h] = a.useState(!1);
    a.useEffect(() => {
        S && g();
    }, [S]);
    let g = () => {
            null !== N.current && ((0, i.closeModal)(N.current), (N.current = null));
        },
        C = async (e) => {
            null == T || T(!0), await u(e, t), h(!0), null == T || T(!1);
        },
        x = async (e) => {
            var t, a, r;
            if ((e.stopPropagation(), e.preventDefault(), (null === (t = e.currentTarget) || void 0 === t ? void 0 : t.files) == null || (null === (r = e.currentTarget) || void 0 === r ? void 0 : null === (a = r.files) || void 0 === a ? void 0 : a.length) === 0)) return;
            let l = e.currentTarget.files;
            N.current = await (0, i.openModalLazy)(async () => {
                let { default: e } = await n.e('16169').then(n.bind(n, 935333));
                return (t) =>
                    (0, s.jsx)(e, {
                        processFiles: () => C(l),
                        ...t
                    });
            });
        };
    return (0, s.jsx)(r.Z, {
        onChange: x,
        filters: null != E ? E : (0, l.Zj)(),
        multiple: o,
        disabled: c,
        className: d,
        tabIndex: _,
        'aria-label': I,
        ref: m
    });
};
