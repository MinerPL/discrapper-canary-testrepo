t.d(s, {
    Z: function () {
        return o;
    }
});
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(921801),
    r = t(56309);
function o(e) {
    let { children: s, title: t, webSetting: o } = e;
    return (0, n.jsx)(i.F, {
        setting: o,
        children: (0, n.jsxs)('div', {
            className: r.category,
            children: [
                (0, n.jsx)(a.Heading, {
                    variant: 'heading-lg/normal',
                    color: 'text-normal',
                    className: r.categoryHeader,
                    children: t
                }),
                (0, n.jsx)('div', {
                    className: r.categoryContent,
                    children: s
                }),
                (0, n.jsx)(a.FormDivider, { className: r.categoryDivider })
            ]
        })
    });
}
