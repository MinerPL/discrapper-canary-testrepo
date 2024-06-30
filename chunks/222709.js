var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(528963), o = n(143740), c = n(727218), d = n(212342), u = n(689938), _ = n(969297);
t.Z = e => {
    let {
            channelId: t,
            messageId: n
        } = e, E = (0, s.e7)([d.Z], () => d.Z.shouldShowBump(n), [n]), m = a.useCallback(() => {
            r.Z.dismissPublishBump(n), (0, o.Z)(t, n);
        }, [
            t,
            n
        ]), I = a.useCallback(() => {
            r.Z.dismissPublishBump(n);
        }, [n]), T = a.useCallback(() => {
            r.Z.permanentlyHidePublishBump(t);
        }, [t]);
    return E ? (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsxs)('div', {
                className: _.bumpBox,
                children: [
                    (0, i.jsx)(l.AnnouncementsIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: _.icon
                    }),
                    (0, i.jsx)(c.Z, {
                        className: _.tagline,
                        size: c.Z.Sizes.SIZE_14,
                        children: u.Z.Messages.NEWS_CHANNEL_PUBLISH_BUMP
                    }),
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.LINK,
                        look: l.Button.Looks.LINK,
                        size: l.Button.Sizes.MIN,
                        className: _.publish,
                        onClick: m,
                        children: u.Z.Messages.NEWS_CHANNEL_PUBLISH
                    }),
                    (0, i.jsx)(l.Clickable, {
                        onClick: I,
                        children: (0, i.jsx)(l.CircleXIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: _.closeIcon
                        })
                    })
                ]
            }),
            (0, i.jsx)(l.Text, {
                color: 'text-muted',
                className: _.hidePermanently,
                variant: 'text-sm/normal',
                children: (0, i.jsx)(l.Clickable, {
                    onClick: T,
                    children: u.Z.Messages.NEWS_CHANNEL_PUBLISH_BUMP_HIDE_PERMANENTLY
                })
            })
        ]
    }) : null;
};
