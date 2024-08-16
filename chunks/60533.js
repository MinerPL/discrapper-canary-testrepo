n.d(t, {
    Z: function () {
        return c;
    }
});
var s = n(735250);
n(470079);
var a = n(442837),
    i = n(481060),
    r = n(90815),
    l = n(594174),
    o = n(562606);
function c(e) {
    let { guild: t } = e,
        n = (0, a.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return null != e && (null == t ? void 0 : t.isOwner(e)) === !0;
        }),
        c = () => {
            (0, r.q)(t.id, { demonetized: !0 });
        };
    return (0, s.jsxs)('div', {
        className: o.container,
        children: [
            (0, s.jsx)(i.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: 'Monetization Temporarily Disabled'
            }),
            (0, s.jsx)(i.Spacer, { size: 24 }),
            (0, s.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: "This server is overdue for accepting our new terms of service so we've had to temporarily suspend monetization. Don't worry, existing subscribers can still access their benefits and renew their subscription. However, new subscriptions cannot be made until the owner accepts our new terms of service."
            }),
            (0, s.jsx)(i.Spacer, { size: 24 }),
            (0, s.jsx)(i.Tooltip, {
                text: 'Only the server owner can accept new terms',
                shouldShow: !n,
                children: (e) =>
                    (0, s.jsx)(i.Button, {
                        disabled: !n,
                        ...e,
                        onClick: c,
                        children: 'Accept New Terms'
                    })
            })
        ]
    });
}
