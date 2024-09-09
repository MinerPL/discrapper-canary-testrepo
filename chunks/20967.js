n.d(t, {
    J: function () {
        return a;
    },
    z: function () {
        return _;
    }
});
var i,
    a,
    s = n(735250);
n(470079);
var r = n(990547),
    l = n(481060),
    o = n(213609),
    c = n(689938),
    d = n(719658),
    u = n(837753);
((i = a || (a = {})).GUILD_NOT_ELIGIBLE = 'guild_not_eligible'), (i.NOT_GUILD_MEMBER = 'not_guild_member');
let _ = (e) => {
    let { errorType: t } = e;
    return (
        (0, o.Z)({
            type: r.ImpressionTypes.PAGE,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
            properties: { error_page_type: t }
        }),
        (0, s.jsx)('div', {
            className: d.errorPageContainer,
            children: (0, s.jsxs)('div', {
                className: d.errorPageContent,
                children: [
                    (0, s.jsx)('img', {
                        src: u,
                        alt: '',
                        className: d.errorPageIllo
                    }),
                    (0, s.jsx)(l.Heading, {
                        variant: 'heading-xl/extrabold',
                        className: d.errorPageTitle,
                        children: 'guild_not_eligible' === t ? c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_GUILD_NOT_ELIGIBLE_TITLE : c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_NOT_GUILD_MEMBER_TITLE
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        className: d.errorPagSubtitle,
                        children: 'guild_not_eligible' === t ? c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_GUILD_NOT_ELIGIBLE_SUBTITLE : c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_NOT_GUILD_MEMBER_SUBTITLE
                    })
                ]
            })
        })
    );
};
