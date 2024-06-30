var n = s(735250);
s(470079);
var a = s(873546), i = s(481060), r = s(270237), o = s(584825), l = s(892729), c = s(949914), d = s(689938), _ = s(488895);
t.Z = e => {
    let {onGoBack: t} = e, s = (0, l.Z)(), {loading: E} = (0, o.sp)(s);
    return ((0, r.Z)(a.tq ? 'role-subscriptions-user-setting' : void 0), E) ? (0, n.jsx)(i.Spinner, {}) : 0 === s.length ? null : (0, n.jsxs)('div', {
        className: _.__invalid_container,
        children: [
            (0, n.jsxs)(i.Button, {
                look: i.Button.Looks.BLANK,
                innerClassName: _.backButtonContents,
                onClick: t,
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
                children: s.map(e => (0, n.jsx)(c.Z, { subscription: e }, e.id))
            })
        ]
    });
};
