n.d(t, {
    Z: function () {
        return _;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(497505), o = n(918701), c = n(439826), d = n(43779), u = n(137124);
function _(e) {
    var t;
    let {quest: n} = e, a = (0, o.zi)(n), [_, E] = s.useState(!1);
    return (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? null : (0, i.jsxs)('div', {
        className: r()(u.container, {
            [u.expired]: a,
            [u.live]: !a
        }),
        onMouseEnter: () => E(!0),
        onMouseLeave: () => E(!1),
        children: [
            (0, i.jsx)(c.Z, {
                quest: n,
                isHovering: _
            }),
            (0, i.jsx)(d.Z, {
                quest: n,
                questContent: l.jn.QUEST_HOME_DESKTOP
            })
        ]
    });
}
