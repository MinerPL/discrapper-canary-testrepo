t(47120), t(315314), t(610138), t(216116), t(78328), t(815648);
var n = t(735250),
    r = t(470079),
    a = t(481060),
    i = t(763610),
    l = t(720778);
s.Z = function (e) {
    var s, t;
    let { assetKey: o, filters: d, initialValue: c, onFileChange: u, title: m } = e,
        [h, g] = r.useState(null),
        x = r.useRef(null);
    return (
        r.useEffect(
            () => () => {
                null != x.current && URL.revokeObjectURL(x.current);
            },
            []
        ),
        (0, n.jsxs)(a.FormItem, {
            children: [
                (0, n.jsx)(a.FormTitle, {
                    tag: a.FormTitleTags.H5,
                    children: (0, n.jsxs)('div', {
                        className: l.headingWithTooltip,
                        children: [
                            m,
                            (0, n.jsx)(a.Tooltip, {
                                text: 'Supported asset formats: '.concat(d.join(', ')),
                                children: (e) =>
                                    (0, n.jsx)(a.CircleInformationIcon, {
                                        size: 'xs',
                                        ...e
                                    })
                            })
                        ]
                    })
                }),
                (0, n.jsx)(i.Z, {
                    filename: null !== (t = null !== (s = null == h ? void 0 : h.name) && void 0 !== s ? s : c) && void 0 !== t ? t : '',
                    filters: [
                        {
                            name: m,
                            extensions: d
                        }
                    ],
                    buttonText: 'Browse',
                    placeholder: 'Select an asset',
                    onFileSelect: function (e) {
                        if ((g(null != e ? e : null), null == e)) return;
                        let s = URL.createObjectURL(e);
                        x.current = s;
                        let t = new URL(s);
                        t.searchParams.append('mimetype', e.type), t.searchParams.append('name', e.name), u(o, t.toString());
                    }
                })
            ]
        })
    );
};
