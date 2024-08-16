n.d(t, {
    o: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(481060),
    l = n(471985),
    o = n(266843),
    c = n(341907),
    u = n(46140),
    d = n(689938),
    _ = n(695623),
    E = n(87181);
function I() {
    let e = (0, l.Z)(u.dr.EMBED_DESKTOP);
    return (0, i.jsx)('div', {
        className: _.buttonContainer,
        children: (0, i.jsx)(r.Button, {
            className: _.button,
            color: r.ButtonColors.BRAND,
            onClick: () => {
                (0, c.navigateToQuestHome)(u.dr.EMBED_DESKTOP);
            },
            children: e ? d.Z.Messages.QUESTS : d.Z.Messages.GIFT_INVENTORY
        })
    });
}
function m() {
    let { containerRef: e, size: t } = (0, o.h)();
    return (0, i.jsxs)('div', {
        ref: (t) => (e.current = t),
        className: s()(_.container, {
            [_.wide]: 'lg' === t,
            [_.tall]: 'lg' !== t
        }),
        children: [
            (0, i.jsxs)('div', {
                className: _.contentContainer,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: d.Z.Messages.QUESTS_EMBED_INVALID_HEADING
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: _.__invalid_mobileWebCopy,
                        children: d.Z.Messages.QUESTS_EMBED_INVALID_BODY_2
                    }),
                    (0, i.jsx)(I, {})
                ]
            }),
            (0, i.jsx)('div', {
                className: _.imgContainer,
                children: (0, i.jsx)('img', {
                    src: E,
                    alt: '',
                    className: _.missingQuestImage
                })
            })
        ]
    });
}
