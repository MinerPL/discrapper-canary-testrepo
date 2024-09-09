s.d(t, {
    Z: function () {
        return m;
    }
});
var n = s(735250);
s(470079);
var i = s(120356),
    a = s.n(i),
    r = s(442837),
    o = s(481060),
    l = s(230711),
    u = s(706454),
    c = s(346585),
    d = s(347649),
    E = s(981631),
    _ = s(689938),
    g = s(740080);
function m(e) {
    let { onClose: t, handleStartFlow: s } = e,
        i = (0, d.CC)(),
        m = (0, r.e7)([u.default], () => u.default.locale);
    return (0, n.jsxs)('div', {
        className: g.infoContainer,
        children: [
            (0, n.jsx)(o.Heading, {
                className: a()(g.finishTitle, { [g.finishTitlePadding]: i }),
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: i ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format({ date: (0, c.IE)(m) }) : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE
            }),
            (0, n.jsx)(o.Text, {
                className: g.subtitleFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: i ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format({ date: (0, c.IE)(m) }) : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1
            }),
            (0, n.jsx)(o.Text, {
                className: g.promptFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                    onClick: () => {
                        t(), l.Z.open(E.oAB.ACCOUNT);
                    }
                })
            }),
            (0, n.jsx)(o.Button, {
                className: g.button,
                type: 'button',
                size: o.Button.Sizes.SMALL,
                onClick: i ? s : t,
                children: i ? _.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT : _.Z.Messages.INVITES_DISABLED_CONFIRMATION
            })
        ]
    });
}
