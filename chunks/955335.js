i.d(e, {
    r: function () {
        return u;
    }
});
var l = i(735250);
i(470079);
var s = i(481060),
    t = i(630388),
    r = i(981631),
    a = i(689938),
    o = i(132313);
let d = {
    size: 'md',
    color: s.tokens.colors.INTERACTIVE_NORMAL
};
function u(n) {
    let { subscriptions: e } = n,
        i = e.some((n) => (0, t.yE)(n.skuFlags, r.l4R.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, l.jsx)(s.Heading, {
        variant: 'heading-lg/semibold',
        className: o.heading,
        children: i
            ? (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(s.ServerIcon, { ...d }), a.Z.Messages.STOREFRONT_APP_SERVER_SUBSCRIPTIONS]
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(s.UserIcon, { ...d }), a.Z.Messages.STOREFRONT_APP_PERSONAL_SUBSCRIPTIONS]
              })
    });
}
