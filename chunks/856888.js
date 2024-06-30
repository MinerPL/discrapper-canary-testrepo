var n = s(735250);
s(470079);
var a = s(442837), i = s(481060), r = s(78839), o = s(270144), l = s(238847), c = s(689938), d = s(637295);
t.Z = e => {
    let {onGoBack: t} = e, s = (0, a.e7)([r.ZP], () => {
            var e;
            return null !== (e = r.ZP.getActiveApplicationSubscriptions()) && void 0 !== e ? e : [];
        }), {loading: _} = (0, o.sp)(s), {loadState: E} = (0, o.qz)();
    return _ || E !== o.jd.LOADED ? (0, n.jsx)(i.Spinner, {}) : 0 === s.length ? null : (0, n.jsxs)('div', {
        className: d.__invalid_container,
        children: [
            (0, n.jsxs)(i.Button, {
                look: i.Button.Looks.BLANK,
                innerClassName: d.backButtonContents,
                onClick: t,
                children: [
                    (0, n.jsx)(i.ArrowSmallRightIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: d.arrowIcon
                    }),
                    c.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_BACK_CTA
                ]
            }),
            (0, n.jsx)(i.Spacer, { size: 10 }),
            (0, n.jsx)(i.FormTitle, {
                tag: 'h1',
                children: c.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_TITLE
            }),
            (0, n.jsx)(i.Text, {
                variant: 'text-sm/normal',
                className: d.pageDescription,
                children: c.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
            }),
            (0, n.jsx)('div', {
                className: d.subscriptionsContainer,
                children: s.map(e => (0, n.jsx)(l.Z, { subscription: e }, e.id))
            })
        ]
    });
};
