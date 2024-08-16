n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var l = n(481060),
    r = n(703656),
    a = n(434479),
    s = n(981631),
    o = n(176505),
    c = n(689938);
function u(e) {
    let { guild: t, selected: n } = e;
    return (0, i.jsx)(a.m, {
        id: 'home-tab-'.concat(t.id),
        renderIcon: (e) =>
            (0, i.jsx)(l.SignPostIcon, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        text: c.Z.Messages.SERVER_GUIDE,
        selected: n,
        onClick: function () {
            (0, r.uL)(s.Z5c.CHANNEL(t.id, o.oC.GUILD_HOME));
        }
    });
}
