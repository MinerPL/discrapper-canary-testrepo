var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(115849),
    l = n(645792),
    o = n(787642),
    c = n(437314),
    d = n(981631),
    u = n(689938),
    _ = n(663046);
function E() {
    return (0, i.jsxs)('header', {
        className: _.header,
        children: [
            (0, i.jsx)(s.FormTitle, {
                tag: 'h2',
                className: _.title,
                children: u.Z.Messages.ADD_FRIEND
            }),
            (0, i.jsx)(r.Z, {})
        ]
    });
}
t.Z = function () {
    return (0, i.jsxs)(a.Fragment, {
        children: [
            (0, i.jsx)(E, {}),
            (0, l.b)() && (0, i.jsx)(o.Z, {}),
            (0, i.jsx)('div', {
                className: _.emptyState,
                children: (0, i.jsx)(c.Z, { type: d.pJs.ADD_FRIEND })
            })
        ]
    });
};
