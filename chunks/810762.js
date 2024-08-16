var n = t(735250);
t(470079);
var a = t(873546),
    i = t(481060),
    r = t(270237),
    o = t(584825),
    l = t(892729),
    c = t(949914),
    d = t(689938),
    _ = t(24503);
s.Z = (e) => {
    let { onGoBack: s } = e,
        t = (0, l.Z)(),
        { loading: E } = (0, o.sp)(t);
    return ((0, r.Z)(a.tq ? 'role-subscriptions-user-setting' : void 0), E)
        ? (0, n.jsx)(i.Spinner, {})
        : 0 === t.length
          ? null
          : (0, n.jsxs)('div', {
                className: _.__invalid_container,
                children: [
                    (0, n.jsxs)(i.Button, {
                        look: i.Button.Looks.BLANK,
                        innerClassName: _.backButtonContents,
                        onClick: s,
                        children: [
                            (0, n.jsx)(i.ArrowSmallRightIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: _.arrowIcon
                            }),
                            d.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_PAGE_BACK_BUTTON_CTA
                        ]
                    }),
                    (0, n.jsx)(i.Spacer, { size: 10 }),
                    (0, n.jsx)(i.FormTitle, {
                        tag: 'h1',
                        children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                    }),
                    (0, n.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        className: _.pageDescription,
                        children: d.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
                    }),
                    (0, n.jsx)('div', {
                        className: _.subscriptionsContainer,
                        children: t.map((e) => (0, n.jsx)(c.Z, { subscription: e }, e.id))
                    })
                ]
            });
};
