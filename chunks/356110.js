n(47120);
var r = n(735250), i = n(470079), a = n(481060), o = n(112225), s = n(331651);
let l = e => {
    let {
            element: t,
            onChange: n,
            initialOption: l
        } = e, [u, c] = i.useState('');
    i.useEffect(() => {
        c(null != l ? l : '');
    }, [l]);
    let d = t.name, {
            title: _,
            options: E
        } = t.data, f = i.useCallback(e => {
            null != e && (c(e), n(e));
        }, [n]);
    return (0, r.jsxs)('div', {
        className: s.marginBottom8,
        children: [
            null != _ && (0, r.jsx)('div', {
                className: s.marginBottom8,
                children: (0, r.jsxs)(a.Text, {
                    variant: 'text-sm/bold',
                    children: [
                        _,
                        t.should_submit_data && (0, r.jsx)('span', {
                            className: o.required,
                            children: '*'
                        })
                    ]
                })
            }),
            (0, r.jsx)(a.SingleSelect, {
                value: u,
                onChange: f,
                options: E
            })
        ]
    }, d);
};
t.Z = e => {
    let {
            elements: t,
            onChange: n,
            state: i
        } = e, a = t.map(e => {
            var t, a;
            let o = e.name;
            return (0, r.jsx)(l, {
                element: e,
                initialOption: null !== (a = null == i ? void 0 : null === (t = i[o]) || void 0 === t ? void 0 : t.value) && void 0 !== a ? a : void 0,
                onChange: e => n(o, e)
            }, o);
        });
    return (0, r.jsx)('div', { children: a });
};
