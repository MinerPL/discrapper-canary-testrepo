n(47120);
var a = n(735250), s = n(470079), r = n(120356), l = n.n(r), i = n(920906), o = n(442837), c = n(481060), d = n(787014), u = n(607070), m = n(454585), h = n(456269), _ = n(470623), g = n(981631), x = n(689938), C = n(782197), f = n(622322);
t.Z = s.memo(function (e) {
    let {
            channel: t,
            onChange: r
        } = e, p = (0, _.AF)(), {guidelinesOpen: T} = (0, _.xH)(e => {
            let {guidelinesOpen: t} = e;
            return { guidelinesOpen: t };
        }), I = (0, h.r_)(t), [E, N] = s.useState(!1), b = s.useCallback(e => {
            if (null == e)
                return;
            let t = e.clientHeight >= 220;
            t !== E && N(t);
        }, [E]);
    s.useLayoutEffect(() => {
        setTimeout(r, 350);
    }, [
        T,
        r
    ]);
    let v = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), [S, M] = s.useState(!T), A = (0, i.useSpring)({
            opacity: T ? 1 : 0,
            maxHeight: T ? 500 : 0,
            config: { duration: 300 },
            immediate: v,
            onRest: () => M(!T)
        });
    return null != t.topic && t.topic.length > 0 ? (0, a.jsx)(i.animated.div, {
        style: A,
        className: S ? C.hiddenVisually : void 0,
        children: (0, a.jsxs)('div', {
            className: C.container,
            children: [
                (0, a.jsxs)('div', {
                    className: C.headerContainer,
                    children: [
                        (0, a.jsxs)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            className: C.guidelinesHeader,
                            children: [
                                (0, a.jsx)(c.BookCheckIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20
                                }),
                                x.Z.Messages.FORUM_POST_GUIDELINES_TITLE,
                                I && (0, a.jsx)(c.Clickable, {
                                    onClick: () => {
                                        d.ZP.open(t.id, void 0, g.ZfP.TOPIC);
                                    },
                                    tag: 'span',
                                    className: C.clickable,
                                    children: (0, a.jsx)(c.PencilIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                })
                            ]
                        }),
                        (0, a.jsx)(c.Clickable, {
                            'aria-label': x.Z.Messages.CLOSE,
                            className: C.clickable,
                            onClick: () => {
                                p.getState().setGuidelinesOpen(!1);
                            },
                            children: (0, a.jsx)(c.CloseSmallIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: C.descriptionContainer,
                    children: [
                        (0, a.jsx)(c.Text, {
                            selectable: !0,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            style: { maxHeight: 220 },
                            className: l()(C.guidelines, f.markup),
                            children: (0, a.jsx)('div', {
                                ref: b,
                                children: m.Z.parseForumPostGuidelines(t.topic, !0, {
                                    channelId: t.id,
                                    allowHeading: !0,
                                    allowList: !0
                                })
                            })
                        }),
                        E && (0, a.jsxs)('div', {
                            className: C.showMore,
                            children: [
                                (0, a.jsx)('div', { className: C.gradient }),
                                (0, a.jsx)('div', {
                                    className: C.linkContainer,
                                    children: (0, a.jsx)(c.Clickable, {
                                        className: C.showMoreLink,
                                        onClick: () => {
                                            (0, c.openModalLazy)(async () => {
                                                let {default: e} = await n.e('78712').then(n.bind(n, 223164));
                                                return n => (0, a.jsx)(e, {
                                                    ...n,
                                                    channel: t
                                                });
                                            });
                                        },
                                        children: (0, a.jsxs)(c.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-brand',
                                            className: C.showMoreText,
                                            children: [
                                                x.Z.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL,
                                                (0, a.jsx)(c.MaximizeIcon, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: C.showMoreIcon
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }) : null;
});
