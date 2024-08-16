n.d(t, {
    Z: function () {
        return r;
    }
});
var s = n(735250);
n(470079);
var a = n(481060),
    i = n(70529);
function r(e) {
    let { title: t, settings: n } = e;
    return (0, s.jsxs)('div', {
        children: [
            (0, s.jsx)(a.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: i.header,
                children: t
            }),
            n.map((e) => e.renderComponent())
        ]
    });
}
