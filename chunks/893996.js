n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(921801),
    l = n(607922);
function a(e) {
    let { children: t, title: n, description: a, webSetting: o } = e;
    return (0, i.jsx)(r.F, {
        setting: o,
        children: (0, i.jsxs)('div', {
            className: l.category,
            children: [
                (0, i.jsxs)('div', {
                    className: l.categoryHeader,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: n
                        }),
                        null != a
                            ? (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: a
                              })
                            : null
                    ]
                }),
                (0, i.jsx)('div', {
                    className: l.categoryContent,
                    children: t
                }),
                (0, i.jsx)(s.FormDivider, { className: l.categoryDivider })
            ]
        })
    });
}
