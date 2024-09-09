t.d(s, {
    Z: function () {
        return S;
    }
}),
    t(47120),
    t(642549);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(772848),
    l = t(481060),
    c = t(53281),
    d = t(451593),
    _ = t(694539),
    u = t(792461);
let E = (e) => {
        var s, t, a;
        let { effect: i, onClick: o } = e,
            { deleteConfig: c } = (0, d.E)();
        return (0, n.jsxs)(l.Clickable, {
            className: u.previewCard,
            onClick: () => {
                o(i);
            },
            children: [
                (0, n.jsx)('div', {
                    className: u.previewCardImage,
                    style: { backgroundImage: 'url('.concat(null === (a = i.config) || void 0 === a ? void 0 : null === (t = a.effects) || void 0 === t ? void 0 : null === (s = t[0]) || void 0 === s ? void 0 : s.base64, ')') }
                }),
                (0, n.jsxs)('div', {
                    className: r()(u.previewCardFooter, u.row),
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/bold',
                            children: i.name
                        }),
                        (0, n.jsx)(l.Button, {
                            color: l.ButtonColors.RED,
                            look: l.ButtonLooks.LINK,
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), c(i.id);
                            },
                            children: 'Delete'
                        })
                    ]
                })
            ]
        });
    },
    T = () => {
        let e = (0, o.Z)();
        return {
            id: e,
            name: 'New Profile Effect',
            config: { effects: [] }
        };
    };
function S() {
    let { profileEffects: e, upsertConfig: s } = (0, d.E)(),
        [t, i] = a.useState(),
        o = a.useRef(null),
        S = (e) => {
            (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE));
        };
    return (0, n.jsxs)('div', {
        className: u.root,
        children: [
            null == t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)('div', {
                            className: u.col,
                            children: [
                                (0, n.jsx)('div', {
                                    className: u.section,
                                    children: (0, n.jsx)(l.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: 'Profile Effects'
                                    })
                                }),
                                (0, n.jsx)('div', {
                                    className: u.grid,
                                    children: Object.values(e).map((e) =>
                                        (0, n.jsx)(
                                            E,
                                            {
                                                effect: e,
                                                onClick: (e) => {
                                                    i(e);
                                                }
                                            },
                                            e.id
                                        )
                                    )
                                })
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            className: r()(u.row, u.end, u.section),
                            children: [
                                (0, n.jsxs)('div', {
                                    className: u.uploadButton,
                                    children: [
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            color: 'always-white',
                                            children: 'Import Shared Config'
                                        }),
                                        (0, n.jsx)(c.Z, {
                                            ref: o,
                                            onChange: (e) => {
                                                let t = e.currentTarget.files;
                                                if (null == t) return;
                                                let n = t[0],
                                                    a = new FileReader();
                                                (a.onload = (e) => {
                                                    if (null == e.target || 'string' != typeof e.target.result) return S('Something went wrong, try again!');
                                                    let [t, n] = e.target.result.split(',');
                                                    if (!t.includes('text/plain')) return S("Make sure you're only uploading text files!");
                                                    s(JSON.parse(atob(n))), (0, l.showToast)((0, l.createToast)('Profile Effect (maybe??) imported!', l.ToastType.SUCCESS));
                                                }),
                                                    a.readAsDataURL(n);
                                            },
                                            multiple: !1
                                        })
                                    ]
                                }),
                                (0, n.jsx)(l.Button, {
                                    onClick: () => {
                                        s(T());
                                    },
                                    children: 'Create New Effect'
                                })
                            ]
                        })
                    ]
                }),
            null != t &&
                (0, n.jsx)(_.Z, {
                    effect: t,
                    back: () => {
                        i(void 0);
                    }
                })
        ]
    });
}
