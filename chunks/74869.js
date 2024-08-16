t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var o = t(735250),
    r = t(470079),
    a = t(348327),
    i = t.n(a),
    c = t(658722),
    l = t.n(c),
    u = t(442837),
    s = t(481060),
    d = t(492435),
    _ = t(353926),
    S = t(499533),
    g = t(689938);
function E(e) {
    let { id: n, experiment: t, currentBucket: r } = e;
    return (0, o.jsxs)(
        s.MenuItem,
        {
            id: n,
            label: t.title,
            action: () => (0, d.rX)(n, null),
            children: [
                t.buckets.map((e) =>
                    (0, o.jsx)(
                        s.MenuCheckboxItem,
                        {
                            id: ''.concat(e),
                            label: S.Z.getExperimentBucketName(e),
                            checked: e === r,
                            action: () => (0, d.rX)(n, e)
                        },
                        ''.concat(e)
                    )
                ),
                (0, o.jsx)(s.MenuGroup, {
                    children:
                        -1 !== r &&
                        (0, o.jsx)(s.MenuItem, {
                            id: 'clear-override',
                            label: 'Clear Override',
                            color: 'danger',
                            icon: s.TrashIcon,
                            action: () => (0, d.rX)(n, null)
                        })
                })
            ]
        },
        n
    );
}
function m() {
    let e = (0, u.e7)(
            [_.Z, _.Z],
            () => {
                let e = _.Z.getRegisteredExperiments();
                return Object.keys(e).map((n) => {
                    let t = e[n],
                        o = _.Z.getExperimentOverrideDescriptor(n);
                    return {
                        id: n,
                        experiment: t,
                        currentBucket: null != o ? o.bucket : -1
                    };
                });
            },
            [],
            i()
        ),
        [n, t] = r.useState(''),
        [a, c] = r.useState([]);
    r.useEffect(() => {
        if (0 === n.trim().length) {
            c(e);
            return;
        }
        c(e.filter((e) => l()(n, e.experiment.title.toLowerCase())));
    }, [e, n]);
    let d = r.useMemo(
            () =>
                a.filter((e) => {
                    let { currentBucket: n } = e;
                    return -1 !== n;
                }),
            [a]
        ),
        S = r.useMemo(
            () =>
                a.filter((e) => {
                    let { currentBucket: n } = e;
                    return -1 === n;
                }),
            [a]
        ),
        m = r.useMemo(() => d.map(E), [d]),
        I = r.useMemo(() => S.map(E), [S]);
    return [
        (0, o.jsx)(
            s.MenuControlItem,
            {
                id: 'experiments-search',
                control: (e, r) =>
                    (0, o.jsx)(s.MenuSearchControl, {
                        ...e,
                        query: n,
                        onChange: t,
                        ref: r,
                        placeholder: g.Z.Messages.SEARCH
                    })
            },
            'experiments-search'
        ),
        (0, o.jsx)(s.MenuSeparator, {}, 'separator'),
        ...m,
        m.length > 0 ? (0, o.jsx)(s.MenuSeparator, {}, 'separator-2') : null,
        ...I
    ];
}
