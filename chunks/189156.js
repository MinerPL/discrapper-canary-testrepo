n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(502762),
    s = n(63063),
    o = n(689938),
    l = n(511582);
let u = {
    profile: {
        Wrapper: a.Z.Overlay,
        className: l.profile,
        headerVariant: 'heading-sm/semibold',
        bodyVariant: 'text-xs/medium'
    },
    profile_modal: {
        Wrapper: a.Z.Overlay,
        className: l.profile,
        headerVariant: 'text-xs/semibold',
        bodyVariant: 'text-sm/normal'
    },
    channel_header: {
        Wrapper: 'div',
        className: l.channelHeader,
        headerVariant: 'text-md/semibold',
        bodyVariant: 'text-md/normal'
    }
};
function c(e) {
    let { look: t } = e,
        { Wrapper: n, className: a, headerVariant: c, bodyVariant: d } = u[t];
    return (0, r.jsx)(n, {
        className: a,
        children: (0, r.jsxs)('div', {
            className: l.layoutContainer,
            children: [
                (0, r.jsx)(i.CircleInformationIcon, {
                    size: 'md',
                    className: l.icon
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(i.Heading, {
                            variant: c,
                            color: 'text-normal',
                            children: o.Z.Messages.PROVISIONAL_ACCOUNT
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: d,
                            color: 'text-normal',
                            children: o.Z.Messages.PROVISIONAL_ACCOUNT_EXPLAINER_BODY.format({ helpdeskArticle: s.Z.getArticleURL('') })
                        })
                    ]
                })
            ]
        })
    });
}
