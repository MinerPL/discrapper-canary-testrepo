s.d(t, {
    Z: function () {
        return g;
    }
});
var n = s(735250);
s(470079);
var i = s(120356),
    a = s.n(i),
    r = s(481060),
    o = s(63063),
    l = s(773446),
    u = s(572264),
    c = s(981631),
    d = s(689938),
    E = s(740080),
    _ = s(849399);
function g(e) {
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
                children: d.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({ n: t.tag })
            }),
            (0, n.jsx)(r.Text, {
                className: E.subtitleInfo,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: d.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format()
            }),
            (0, n.jsx)(r.Text, {
                className: E.prompt,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: d.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({ helpdeskArticle: o.Z.getArticleURL(c.BhN.POMELO_FAQ) })
            }),
            (0, n.jsxs)('div', {
                className: a()([E.infoItem, E.infoItemSpacing]),
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
                        children: d.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format()
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: a()([E.infoItem, E.infoItemSpacing]),
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
                        children: d.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format()
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
                        children: d.Z.Messages.UNIQUE_USERNAME_EXISTING_FLOW_PROMPT_ITEM_3.format({ username: t.tag })
                    })
                ]
            })
        ]
    });
}
