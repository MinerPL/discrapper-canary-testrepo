var i = n(735250);
n(470079);
var s = n(120356), a = n.n(s), o = n(481060), r = n(547881), l = n(981631), c = n(689938), d = n(230505);
t.Z = function (e) {
    let t;
    let {
        title: n,
        header: s,
        children: u,
        renderSettings: h,
        onDragStart: p
    } = e;
    return t = null != n ? (0, i.jsxs)(r.ZP.Bar, {
        className: a()(d.header, d.draggableStartArea),
        onMouseDown: p,
        children: [
            (0, i.jsx)(r.ZP.Content, {
                className: a()(d.headerTitle, d.draggableStartArea),
                dynamicSize: !0,
                children: n
            }),
            (0, i.jsx)(r.ZP.Content, {
                children: (0, i.jsx)(o.Popout, {
                    position: 'right',
                    renderPopout: null != h ? h : l.dG4,
                    autoInvert: !1,
                    children: e => (0, i.jsx)(r.ZP.Icon, {
                        ...e,
                        icon: o.SettingsIcon,
                        label: c.Z.Messages.SETTINGS
                    })
                })
            })
        ]
    }) : s, (0, i.jsxs)('div', {
        className: d.sidebar,
        children: [
            t,
            (0, i.jsx)('div', {
                className: d.children,
                children: u
            })
        ]
    });
};
