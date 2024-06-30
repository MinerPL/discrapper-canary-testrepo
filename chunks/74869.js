t.d(n, {
    Z: function () {
        return T;
    }
}), t(47120);
var o = t(735250), r = t(470079), a = t(348327), c = t.n(a), i = t(658722), l = t.n(i), s = t(442837), u = t(481060), d = t(492435), _ = t(353926), S = t(499533), E = t(689938);
function m(e) {
    let {
        id: n,
        experiment: t,
        currentBucket: r
    } = e;
    return (0, o.jsxs)(u.MenuItem, {
        id: n,
        label: t.title,
        action: () => (0, d.rX)(n, null),
        children: [
            t.buckets.map(e => (0, o.jsx)(u.MenuCheckboxItem, {
                id: ''.concat(e),
                label: S.Z.getExperimentBucketName(e),
                checked: e === r,
                action: () => (0, d.rX)(n, e)
            }, ''.concat(e))),
            (0, o.jsx)(u.MenuGroup, {
                children: -1 !== r && (0, o.jsx)(u.MenuItem, {
                    id: 'clear-override',
                    label: 'Clear Override',
                    color: 'danger',
                    icon: u.TrashIcon,
                    action: () => (0, d.rX)(n, null)
                })
            })
        ]
    }, n);
}
function T() {
    let e = (0, s.e7)([
            _.Z,
            _.Z
        ], () => {
            let e = _.Z.getRegisteredExperiments();
            return Object.keys(e).map(n => {
                let t = e[n], o = _.Z.getExperimentOverrideDescriptor(n);
                return {
                    id: n,
                    experiment: t,
                    currentBucket: null != o ? o.bucket : -1
                };
            });
        }, [], c()), [n, t] = r.useState(''), [a, i] = r.useState([]);
    r.useEffect(() => {
        if (0 === n.trim().length) {
            i(e);
            return;
        }
        i(e.filter(e => l()(n, e.experiment.title.toLowerCase())));
    }, [
        e,
        n
    ]);
    let d = r.useMemo(() => a.filter(e => {
            let {currentBucket: n} = e;
            return -1 !== n;
        }), [a]), S = r.useMemo(() => a.filter(e => {
            let {currentBucket: n} = e;
            return -1 === n;
        }), [a]), T = r.useMemo(() => d.map(m), [d]), I = r.useMemo(() => S.map(m), [S]);
    return [
        (0, o.jsx)(u.MenuControlItem, {
            id: 'experiments-search',
            control: (e, r) => (0, o.jsx)(u.MenuSearchControl, {
                ...e,
                query: n,
                onChange: t,
                ref: r,
                placeholder: E.Z.Messages.SEARCH
            })
        }, 'experiments-search'),
        (0, o.jsx)(u.MenuSeparator, {}, 'separator'),
        ...T,
        T.length > 0 ? (0, o.jsx)(u.MenuSeparator, {}, 'separator-2') : null,
        ...I
    ];
}
