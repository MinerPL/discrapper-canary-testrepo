a.d(t, {
    Z: function () {
        return m;
    }
});
var n = a(735250);
a(470079);
var s = a(120356),
    i = a.n(s),
    r = a(481060),
    o = a(63063),
    l = a(773446),
    u = a(572264),
    d = a(981631),
    c = a(689938),
    E = a(740080),
    _ = a(849399);
function m(e) {
    let { user: t } = e;
    return (0, n.jsxs)('div', {
        className: E.infoContainer,
        children: [
            (0, n.jsx)('img', {
                className: E.infoPicture,
                alt: '',
                src: _
            }),
            (0, n.jsx)(r.Heading, {
                className: E.title,
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({ n: t.tag })
            }),
            (0, n.jsx)(r.Text, {
                className: E.subtitleInfo,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format()
            }),
            (0, n.jsx)(r.Text, {
                className: E.prompt,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({ helpdeskArticle: o.Z.getArticleURL(d.BhN.POMELO_FAQ) })
            }),
            (0, n.jsxs)('div', {
                className: i()([E.infoItem, E.infoItemSpacing]),
                children: [
                    (0, n.jsx)('div', {
                        className: E.infoIcon,
                        children: (0, n.jsx)(r.FriendsIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, n.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format()
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: i()([E.infoItem, E.infoItemSpacing]),
                children: [
                    (0, n.jsx)('div', {
                        className: E.infoIcon,
                        children: (0, n.jsx)(l.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, n.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format()
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: E.infoItem,
                children: [
                    (0, n.jsx)('div', {
                        className: E.infoIcon,
                        children: (0, n.jsx)(u.Z, {
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, n.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/medium',
                        children: c.Z.Messages.UNIQUE_USERNAME_EXISTING_FLOW_PROMPT_ITEM_3.format({ username: t.tag })
                    })
                ]
            })
        ]
    });
}
