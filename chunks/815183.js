var n = t(735250);
t(470079);
var r = t(481060),
    a = t(153867),
    i = t(410030),
    l = t(583901),
    o = t(231338);
s.Z = function () {
    let e = (0, i.ZP)();
    return (0, n.jsxs)(r.FormItem, {
        children: [
            (0, n.jsx)(r.FormTitle, {
                tag: r.FormTitleTags.H5,
                children: 'Theme'
            }),
            (0, n.jsxs)('div', {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    (0, n.jsx)(l.bD, {
                        theme: o.BR.LIGHT,
                        isSelected: e === o.BR.LIGHT,
                        onSelect: () => (0, a.ZI)({ theme: o.BR.LIGHT })
                    }),
                    (0, n.jsx)(l.bD, {
                        theme: o.BR.DARK,
                        isSelected: e === o.BR.DARK,
                        onSelect: () => (0, a.ZI)({ theme: o.BR.DARK })
                    })
                ]
            })
        ]
    });
};
