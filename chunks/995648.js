i.d(n, {
    Z: function () {
        return c;
    }
});
var t = i(735250);
i(470079);
var a = i(120356), r = i.n(a), o = i(481060), l = i(422559), s = i(209945);
function c(e) {
    let {
        grantedPermissions: n,
        disabledPermissions: i,
        grantedPermissionsHeader: a,
        disabledPermissionsHeader: c,
        className: d
    } = e;
    return (0, t.jsxs)('div', {
        className: r()(s.list, d),
        children: [
            null != n && n.length > 0 ? (0, t.jsxs)(t.Fragment, {
                children: [
                    null != a ? (0, t.jsx)(o.FormTitle, {
                        className: s.permissionHeader,
                        children: a
                    }) : null,
                    (0, t.jsx)('div', {
                        className: s.container,
                        children: n.map(e => (0, t.jsxs)('div', {
                            className: s.permission,
                            children: [
                                (0, t.jsx)(o.CheckmarkLargeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: s.check
                                }),
                                (0, t.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: (0, l.wt)(e)
                                })
                            ]
                        }, e.toString()))
                    })
                ]
            }) : null,
            null != i && i.length > 0 ? (0, t.jsxs)(t.Fragment, {
                children: [
                    null != c ? (0, t.jsx)(o.FormTitle, {
                        className: s.permissionHeader,
                        children: c
                    }) : null,
                    (0, t.jsx)('div', {
                        className: s.container,
                        children: i.map(e => (0, t.jsxs)('div', {
                            className: s.permission,
                            children: [
                                (0, t.jsx)(o.CloseSmallIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: s.cross
                                }),
                                (0, t.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: (0, l.wt)(e)
                                })
                            ]
                        }, e.toString()))
                    })
                ]
            }) : null
        ]
    });
}
