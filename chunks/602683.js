s(47120);
var n = s(735250), a = s(470079), i = s(481060);
t.Z = function (e) {
    let {
            assetKey: t,
            initialValue: s,
            onMessageChange: r,
            title: o
        } = e, [l, c] = a.useState('');
    return a.useEffect(() => {
        c(null != s ? s : '');
    }, [s]), (0, n.jsxs)(i.FormItem, {
        children: [
            (0, n.jsx)(i.FormTitle, {
                tag: i.FormTitleTags.H5,
                children: o
            }),
            (0, n.jsx)(i.FormText, {
                children: (0, n.jsx)(i.TextInput, {
                    value: l,
                    onChange: function (e) {
                        c(e), r(t, e);
                    }
                })
            })
        ]
    });
};
