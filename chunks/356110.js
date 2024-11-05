n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(387640),
    o = n(113207);
let l = (e) => {
    let { element: t, onChange: n, initialOption: l } = e,
        [u, c] = i.useState('');
    i.useEffect(() => {
        c(null != l ? l : '');
    }, [l]);
    let d = t.name,
        { title: f, options: _ } = t.data,
        h = i.useCallback(
            (e) => {
                null != e && (c(e), n(e));
            },
            [n]
        );
    return (0, r.jsxs)(
        'div',
        {
            className: o.marginBottom8,
            children: [
                null != f &&
                    (0, r.jsx)('div', {
                        className: o.marginBottom8,
                        children: (0, r.jsxs)(a.Text, {
                            variant: 'text-sm/bold',
                            children: [
                                f,
                                t.should_submit_data &&
                                    (0, r.jsx)('span', {
                                        className: s.required,
                                        children: '*'
                                    })
                            ]
                        })
                    }),
                (0, r.jsx)(a.SingleSelect, {
                    value: u,
                    onChange: h,
                    options: _
                })
            ]
        },
        d
    );
};
t.Z = (e) => {
    let { elements: t, onChange: n, state: i } = e,
        a = t.map((e) => {
            var t, a;
            let s = e.name;
            return (0, r.jsx)(
                l,
                {
                    element: e,
                    initialOption: null !== (a = null == i ? void 0 : null === (t = i[s]) || void 0 === t ? void 0 : t.value) && void 0 !== a ? a : void 0,
                    onChange: (e) => n(s, e)
                },
                s
            );
        });
    return (0, r.jsx)('div', { children: a });
};
