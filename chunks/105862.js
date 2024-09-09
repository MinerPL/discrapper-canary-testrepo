t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(735250),
    a = t(470079),
    l = t(780384),
    o = t(481060),
    r = t(410030),
    s = t(782568),
    c = t(63063),
    d = t(827498),
    u = t(888617),
    m = t(981631),
    p = t(689938),
    _ = t(778762),
    C = t(983008),
    f = t(478408);
function h() {
    let e = (0, r.ZP)(),
        n = (0, l.ap)(e) ? f : C,
        t = a.useCallback(() => {
            (0, s.Z)(c.Z.getArticleURL(m.BhN.LAUNCHING_APPS_WITH_SHAPES_BUTTON));
        }, []),
        { trackSectionImpressionRef: h } = (0, u.Z)({
            sectionName: d.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1
        });
    return (0, i.jsxs)('div', {
        ref: (e) => (h.current = e),
        className: _.container,
        children: [
            (0, i.jsx)('img', {
                className: _.image,
                src: n,
                alt: '',
                'aria-hidden': !0
            }),
            (0, i.jsxs)('div', {
                className: _.body,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        children: p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY
                    })
                ]
            }),
            (0, i.jsx)(o.Button, {
                size: o.Button.Sizes.MEDIUM,
                'aria-label': p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE_ARIA_LABEL.format({
                    sectionTitle: p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE,
                    sectionBody: p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY
                }),
                onClick: t,
                children: p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE
            })
        ]
    });
}
