n.d(t, {
    Y: function () {
        return L;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(481060), o = n(239091), c = n(906732), d = n(134432), u = n(451603), _ = n(885714), E = n(940627), h = n(806519), I = n(768581), m = n(900849), p = n(556017), g = n(879484), T = n(26580), S = n(206887), C = n(981631), N = n(689938), f = n(565001), A = n(129512), Z = n(330065);
let L = () => (0, i.jsx)('div', { className: f.placeholder });
t.Z = e => {
    var t;
    let {
            guild: a,
            theme: L,
            onView: v,
            onTagClick: O
        } = e, {
            id: R,
            discoverySplash: x,
            icon: P,
            name: b,
            description: M,
            presenceCount: D,
            memberCount: y,
            keywords: j
        } = a, [U, G] = s.useState(!1), [w, k] = s.useState(!1), {analyticsLocations: B} = (0, c.ZP)(), H = I.ZP.getGuildDiscoverySplashURL({
            id: R,
            splash: x,
            size: 240 * (0, d.x_)()
        }), V = null != H ? H : function (e) {
            switch (e) {
            case C.BRd.DARK:
                return A;
            case C.BRd.LIGHT:
                return Z;
            }
        }(L), F = null !== (t = I.ZP.getGuildIconURL({
            id: R,
            icon: P,
            size: 32
        })) && void 0 !== t ? t : void 0, Y = async e => {
            let {className: t} = e.target;
            if (!t.includes('Menu')) {
                if ((0, u.yU)()) {
                    (0, _.Z)({
                        analyticsSource: { page: C.ZY5.GUILD_DISCOVERY },
                        analyticsLocation: {
                            page: C.ZY5.GUILD_DISCOVERY,
                            section: C.jXE.GUILD_CAP_UPSELL_MODAL
                        },
                        analyticsLocations: B
                    });
                    return;
                }
                k(!0);
                try {
                    null != v && await v(a.id);
                } finally {
                    k(!1);
                }
            }
        };
    s.useEffect(() => g.w.trackExposure({ location: '4302e4_1' }));
    let {shouldDisplayTags: W} = g.w.useExperiment({ location: '4302e4_2' }, { autoTrackExposure: !1 }), z = (0, p.I)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: f.card,
                children: [
                    w ? (0, i.jsx)(l.Spinner, {
                        type: l.Spinner.Type.PULSING_ELLIPSIS,
                        className: f.spinner
                    }) : null,
                    (0, i.jsxs)(l.Clickable, {
                        className: r()(f.container, {
                            [f.hover]: U,
                            [f.submitting]: w
                        }),
                        onClick: Y,
                        onContextMenu: e => {
                            (0, o.jW)(e, async () => {
                                let {default: e} = await Promise.resolve().then(n.bind(n, 455839));
                                return t => (0, i.jsx)(e, {
                                    ...t,
                                    guild: a
                                });
                            });
                        },
                        onMouseEnter: () => G(!0),
                        onMouseLeave: () => G(!1),
                        children: [
                            (0, i.jsx)('div', {
                                className: r()(f.splashContainer, { [f.splashContainerWithTags]: W }),
                                children: (0, i.jsx)('img', {
                                    src: V,
                                    alt: '',
                                    className: f.splashImage,
                                    width: 240
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: r()(f.content, { [f.contentWithTags]: W }),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: f.header,
                                        children: [
                                            (0, i.jsx)(h.ZP, {
                                                mask: h.ZP.Masks.SQUIRCLE,
                                                width: 32,
                                                height: 32,
                                                children: (0, i.jsx)('img', {
                                                    src: F,
                                                    alt: '',
                                                    className: f.avatar
                                                })
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: f.headerName,
                                                children: [
                                                    (0, i.jsx)('div', {
                                                        children: (0, i.jsx)(E.Z, {
                                                            guild: a,
                                                            className: f.guildBadge,
                                                            size: 16
                                                        })
                                                    }),
                                                    (0, i.jsx)(l.Heading, {
                                                        variant: 'heading-md/semibold',
                                                        className: f.headerTitle,
                                                        children: b
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        className: f.description,
                                        variant: 'text-sm/normal',
                                        children: M
                                    }),
                                    W && null != j && null != O && (0, i.jsx)(T.F, {
                                        guildId: a.id,
                                        discoveryTagStyle: T.B.ALT,
                                        onTagClick: e => O(e, a.id),
                                        tags: j,
                                        section: m.P1.SEARCH
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: f.memberInfo,
                                        children: [
                                            null != D && (0, i.jsx)('div', {
                                                className: f.memberCount,
                                                children: (0, i.jsx)(l.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: D })
                                                })
                                            }),
                                            null != y && (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)('div', { className: f.dotSeparator }),
                                                    (0, i.jsx)('div', {
                                                        className: f.memberCount,
                                                        children: (0, i.jsx)(l.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-secondary',
                                                            children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: y })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            z ? (0, i.jsx)('div', {
                                className: f.actionButtons,
                                children: (0, i.jsx)(S.Z, { guild: a })
                            }) : null
                        ]
                    })
                ]
            }),
            (0, i.jsx)('hr', { className: f.separator })
        ]
    });
};
