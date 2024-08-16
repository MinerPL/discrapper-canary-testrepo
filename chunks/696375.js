s.d(n, {
    Z: function () {
        return o;
    }
});
var a = s(735250);
s(470079);
var t = s(481060),
    l = s(259580),
    i = s(646400);
function o(e) {
    let { url: n, text: s, onClick: o } = e;
    return (0, a.jsx)(t.Anchor, {
        href: n,
        onClick: o,
        className: i.externalLinkWrapper,
        children: (0, a.jsxs)(t.Clickable, {
            className: i.childButton,
            children: [
                (0, a.jsx)(t.Text, {
                    className: i.childText,
                    variant: 'text-md/semibold',
                    children: s
                }),
                (0, a.jsx)(l.Z, {
                    className: i.childIcon,
                    direction: l.Z.Directions.RIGHT
                })
            ]
        })
    });
}
