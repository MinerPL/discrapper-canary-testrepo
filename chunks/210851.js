s(47120);
var n = s(735250), a = s(470079), i = s(481060), r = s(763610), o = s(614771);
t.Z = function (e) {
    var t, s;
    let {
            assetKey: l,
            filters: c,
            initialValue: d,
            onFileChange: _,
            title: E
        } = e, [u, T] = a.useState(null), [I, S] = a.useState(!1);
    return (0, n.jsxs)(i.FormItem, {
        children: [
            (0, n.jsx)(i.FormTitle, {
                tag: i.FormTitleTags.H5,
                children: (0, n.jsxs)('div', {
                    className: o.headingWithTooltip,
                    children: [
                        E,
                        (0, n.jsx)(i.Tooltip, {
                            text: 'Supported asset formats: '.concat(c.join(', ')),
                            children: e => (0, n.jsx)(i.CircleInformationIcon, {
                                size: 'xs',
                                ...e
                            })
                        })
                    ]
                })
            }),
            (0, n.jsx)(r.Z, {
                filename: null !== (s = null !== (t = null == u ? void 0 : u.name) && void 0 !== t ? t : d) && void 0 !== s ? s : '',
                filters: [{
                        name: E,
                        extensions: c
                    }],
                buttonText: 'Browse',
                placeholder: 'Select an asset',
                onFileSelect: function (e) {
                    if (T(null != e ? e : null), null == e)
                        return;
                    S(!0);
                    let t = new FileReader();
                    t.onload = function () {
                        'string' == typeof t.result && (_(l, t.result), S(!1));
                    }, t.onerror = function (e) {
                        console.error(e);
                    }, t.readAsDataURL(e);
                }
            })
        ]
    });
};
