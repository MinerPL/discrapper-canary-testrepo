n.d(t, {
    Y: function () {
        return I;
    }
}),
    n(47120);
var i,
    s,
    a = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(212433),
    u = n(481060),
    d = n(542094),
    h = n(182906),
    p = n(556505),
    m = n(513202),
    _ = n(981631),
    f = n(689938),
    E = n(967960);
let g = ['embedded_cover'],
    C = {
        tension: 800,
        friction: 24
    };
function I(e) {
    var t;
    let { channel: n, activityItem: i, onClick: s, aspectRatio: r = 0, animatedDivClass: I, commandOrigin: T } = e,
        {
            onActivityItemSelected: x,
            imageBackground: S,
            activityAction: v,
            labelType: N
        } = (0, d.ZP)({
            channel: n,
            activityItem: i,
            guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
            locationObject: {},
            onActivityItemSelected: s,
            embeddedActivitiesManager: m.Z,
            assetNames: g,
            commandOrigin: T
        }),
        [A, Z] = l.useState(!1),
        M = l.useCallback(() => {
            Z(!0);
        }, [Z]),
        b = l.useCallback(() => {
            Z(!1);
        }, [Z]),
        R = l.useMemo(
            () =>
                (0, a.jsx)('div', {
                    className: E.overlayBadge,
                    children: (0, a.jsx)('div', {
                        className: E.badgeContainer,
                        children: (0, a.jsx)(p.Z, {
                            name: i.application.name,
                            labelType: N
                        })
                    })
                }),
            [i.application.name, N]
        ),
        L = l.useMemo(() => {
            switch (v) {
                case d.JS.JOIN:
                    return (0, a.jsx)('div', {
                        className: E.activityAction,
                        children: (0, a.jsx)('div', {
                            className: E.activityActionButton,
                            children: (0, a.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: f.Z.Messages.JOIN
                            })
                        })
                    });
                case d.JS.LEAVE:
                    return (0, a.jsx)('div', {
                        className: E.activityAction,
                        children: (0, a.jsx)('div', {
                            className: o()(E.activityActionButton, E.activityActionButtonDanger),
                            children: (0, a.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: f.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE
                            })
                        })
                    });
                case d.JS.START:
                default:
                    return (0, a.jsx)(a.Fragment, {});
            }
        }, [v]);
    return (0, a.jsx)(u.Button, {
        onClick: x,
        color: 'transparent',
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        onFocus: M,
        onBlur: b,
        onMouseEnter: M,
        onMouseLeave: b,
        innerClassName: E.activityItemButtonInnerClass,
        children: (0, a.jsx)(u.Spring, {
            config: C,
            from: { value: 0 },
            to: { value: A ? 1 : 0 },
            children: (e) => {
                let { value: t } = e;
                return (0, a.jsx)(u.ThemeProvider, {
                    theme: _.BRd.DARK,
                    children: (e) =>
                        (0, a.jsx)(c.animated.div, {
                            className: o()(e, E.activityItem, I, {
                                [E.activityItem_13_11]: 0 === r,
                                [E.activityItem_16_9]: 1 === r
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => 'scale('.concat(e, ')'))
                            },
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(h.Z, {
                                        imageBackground: S,
                                        applicationName: i.application.name,
                                        imageClassName: E.activitySuggestionImage,
                                        imageNotFoundClassName: E.brokenImageIconWrapper
                                    }),
                                    R,
                                    L
                                ]
                            })
                        })
                });
            }
        })
    });
}
((s = i || (i = {}))[(s.THIRTEEN_BY_ELEVEN = 0)] = 'THIRTEEN_BY_ELEVEN'), (s[(s.SIXTEEN_BY_NINE = 1)] = 'SIXTEEN_BY_NINE'), (I.AspectRatio = i);
