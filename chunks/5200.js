n.d(t, {
    Y: function () {
        return x;
    }
}),
    n(47120);
var i,
    s,
    a = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(180081),
    u = n(481060),
    d = n(895924),
    h = n(542094),
    m = n(182906),
    p = n(556505),
    _ = n(513202),
    f = n(981631),
    E = n(689938),
    g = n(774867);
let C = ['embedded_cover'],
    I = {
        tension: 800,
        friction: 24
    };
function x(e) {
    var t;
    let { channel: n, activityItem: i, onClick: s, aspectRatio: r = 0, animatedDivClass: x } = e,
        {
            onActivityItemSelected: T,
            imageBackground: v,
            activityAction: S,
            labelType: N
        } = (0, h.ZP)({
            channel: n,
            activityItem: i,
            guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
            locationObject: {},
            onActivityItemSelected: s,
            embeddedActivitiesManager: _.Z,
            assetNames: C,
            commandOrigin: d.bB.VOICE_UI
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
                    className: g.overlayBadge,
                    children: (0, a.jsx)('div', {
                        className: g.badgeContainer,
                        children: (0, a.jsx)(p.Z, {
                            name: i.application.name,
                            labelType: N
                        })
                    })
                }),
            [i.application.name, N]
        ),
        L = l.useMemo(() => {
            switch (S) {
                case h.JS.JOIN:
                    return (0, a.jsx)('div', {
                        className: g.activityAction,
                        children: (0, a.jsx)('div', {
                            className: g.activityActionButton,
                            children: (0, a.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: E.Z.Messages.JOIN
                            })
                        })
                    });
                case h.JS.LEAVE:
                    return (0, a.jsx)('div', {
                        className: g.activityAction,
                        children: (0, a.jsx)('div', {
                            className: o()(g.activityActionButton, g.activityActionButtonDanger),
                            children: (0, a.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: E.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE
                            })
                        })
                    });
                case h.JS.START:
                default:
                    return (0, a.jsx)(a.Fragment, {});
            }
        }, [S]);
    return (0, a.jsx)(u.Button, {
        onClick: T,
        color: 'transparent',
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        onFocus: M,
        onBlur: b,
        onMouseEnter: M,
        onMouseLeave: b,
        innerClassName: g.activityItemButtonInnerClass,
        children: (0, a.jsx)(u.Spring, {
            config: I,
            from: { value: 0 },
            to: { value: A ? 1 : 0 },
            children: (e) => {
                let { value: t } = e;
                return (0, a.jsx)(u.ThemeProvider, {
                    theme: f.BRd.DARK,
                    children: (e) =>
                        (0, a.jsx)(c.animated.div, {
                            className: o()(e, g.activityItem, x, {
                                [g.activityItem_13_11]: 0 === r,
                                [g.activityItem_16_9]: 1 === r
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => 'scale('.concat(e, ')'))
                            },
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(m.Z, {
                                        imageBackground: v,
                                        applicationName: i.application.name,
                                        imageClassName: g.activitySuggestionImage,
                                        imageNotFoundClassName: g.brokenImageIconWrapper
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
((s = i || (i = {}))[(s.THIRTEEN_BY_ELEVEN = 0)] = 'THIRTEEN_BY_ELEVEN'), (s[(s.SIXTEEN_BY_NINE = 1)] = 'SIXTEEN_BY_NINE'), (x.AspectRatio = i);
