t.d(n, {
    Z: function () {
        return E;
    }
});
var i = t(735250), l = t(470079), a = t(780384), r = t(481060), s = t(410030), o = t(782568), c = t(63063), u = t(981631), d = t(689938), m = t(427010), p = t(983008), _ = t(478408);
function E() {
    let e = (0, s.ZP)(), n = (0, a.ap)(e) ? _ : p, t = l.useCallback(() => {
            (0, o.Z)(c.Z.getArticleURL(u.BhN.LAUNCHING_APPS_WITH_SHAPES_BUTTON));
        }, []);
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsx)('img', {
                className: m.image,
                src: n,
                alt: '',
                'aria-hidden': !0
            }),
            (0, i.jsxs)('div', {
                className: m.body,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: d.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        children: d.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY
                    })
                ]
            }),
            (0, i.jsx)(r.Button, {
                size: r.Button.Sizes.MEDIUM,
                'aria-label': d.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE_ARIA_LABEL.format({
                    sectionTitle: d.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE,
                    sectionBody: d.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY
                }),
                onClick: t,
                children: d.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE
            })
        ]
    });
}
