n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var s = n(481060), a = n(230711), r = n(931547), l = n(981631), o = n(526761), c = n(689938);
function d(e) {
    let {subscription: t} = e;
    return null == t ? null : t.status === l.O0b.PAST_DUE ? (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Spacer, { size: 16 }),
            (0, i.jsx)(r.Z, {
                message: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
                ctaMessage: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_CTA,
                onClick: () => {
                    a.Z.open(l.oAB.SUBSCRIPTIONS, o.cP);
                }
            })
        ]
    }) : null;
}
