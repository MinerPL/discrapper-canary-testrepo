n.d(t, {
    o: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(230711), o = n(266843), c = n(981631), d = n(689938), u = n(342101), _ = n(87181);
function E() {
    return (0, i.jsx)('div', {
        className: u.buttonContainer,
        children: (0, i.jsx)(l.Button, {
            className: u.button,
            color: l.ButtonColors.BRAND,
            onClick: () => {
                r.Z.open(c.oAB.INVENTORY);
            },
            children: d.Z.Messages.GIFT_INVENTORY
        })
    });
}
function m() {
    let {
        containerRef: e,
        size: t
    } = (0, o.h)();
    return (0, i.jsxs)('div', {
        ref: t => e.current = t,
        className: s()(u.container, {
            [u.wide]: 'lg' === t,
            [u.tall]: 'lg' !== t
        }),
        children: [
            (0, i.jsxs)('div', {
                className: u.contentContainer,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'lg' === t ? 'heading-xl/bold' : 'heading-lg/bold',
                        color: 'header-primary',
                        children: d.Z.Messages.QUESTS_EMBED_INVALID_HEADING
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'lg' === t ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-normal',
                        className: u.__invalid_mobileWebCopy,
                        children: d.Z.Messages.QUESTS_EMBED_INVALID_BODY_2
                    }),
                    (0, i.jsx)(E, {})
                ]
            }),
            (0, i.jsx)('div', {
                className: u.imgContainer,
                children: (0, i.jsx)('img', {
                    src: _,
                    alt: '',
                    className: u.missingQuestImage
                })
            })
        ]
    });
}
