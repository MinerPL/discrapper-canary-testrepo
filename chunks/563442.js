n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(481060), o = n(63063), c = n(981631), d = n(689938), u = n(214003);
function _(e) {
    let {children: t} = e, n = s.useCallback(() => {
            window.open(o.Z.getArticleURL(c.BhN.QUESTS_LEARN_MORE));
        }, []);
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsx)('div', { className: r()(u.image) }),
            (0, i.jsx)('div', { className: r()(u.leftToRightGradient) }),
            (0, i.jsx)('div', { className: r()(u.gradient) }),
            (0, i.jsx)('div', {
                className: u.contents,
                children: (0, i.jsxs)('div', {
                    className: u.textContainer,
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: 'eyebrow',
                            color: 'text-brand',
                            className: u.eyebrow,
                            children: d.Z.Messages.QUESTS_HOME_HERO_EYEBROW
                        }),
                        (0, i.jsx)(l.Heading, {
                            variant: 'display-md',
                            color: 'always-white',
                            className: u.header,
                            children: d.Z.Messages.QUESTS_HOME_HERO_TITLE
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            children: d.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION
                        }),
                        (0, i.jsxs)(l.Button, {
                            size: 'medium',
                            className: u.button,
                            onClick: n,
                            innerClassName: u.innerButton,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'always-white',
                                    className: u.externalLinkText,
                                    children: d.Z.Messages.LEARN_MORE
                                }),
                                (0, i.jsx)(l.LinkExternalSmallIcon, {
                                    className: u.icon,
                                    color: 'var(--white-500)'
                                })
                            ]
                        })
                    ]
                })
            }),
            t
        ]
    });
}
