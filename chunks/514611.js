n(47120);
var i, s = n(735250), a = n(470079), r = n(120356), l = n.n(r), o = n(622535), c = n(481060), d = n(239091), u = n(556017), _ = n(879484), E = n(26580), h = n(206887), I = n(134432), m = n(695346), p = n(768581), g = n(900849), T = n(940627), S = n(806519), C = n(981631), N = n(689938), f = n(785196), A = n(129512), Z = n(330065), L = n(755386);
function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class O extends (i = a.PureComponent) {
    getDefaultSplashURL(e, t) {
        if (t)
            return L;
        switch (e) {
        case C.BRd.DARK:
            return A;
        case C.BRd.LIGHT:
            return Z;
        }
    }
    render() {
        var e;
        let {
                guild: t,
                className: n,
                theme: i,
                onTagClick: a
            } = this.props, {
                loaded: r,
                hasBeenSeen: d,
                isVisible: A,
                submitting: Z
            } = this.state, {
                name: L,
                description: v,
                presenceCount: O,
                memberCount: R,
                keywords: x
            } = t, P = null === (e = t.features) || void 0 === e ? void 0 : e.has(C.oNc.HUB), b = p.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, I.x_)()
            }), M = null != b ? b : this.getDefaultSplashURL(i, P), D = p.ZP.getGuildIconURL({
                id: t.id,
                icon: t.icon,
                size: 40
            });
        _.w.trackExposure({ location: 'de1ef6_1' });
        let {shouldDisplayTags: y} = _.w.getCurrentConfig({ location: 'de1ef6_2' }, { autoTrackExposure: !1 }), {canSeeInAppReportingButtons: j} = u.N.getCurrentConfig({ location: 'de1ef6_3' }, { autoTrackExposure: !1 });
        u.N.trackExposure({ location: 'de1ef6_4' });
        let U = m.Sb.getSetting();
        return (0, s.jsx)(o.$, {
            active: !A,
            onChange: this.setIsVisible,
            threshold: 0.1,
            children: A ? (0, s.jsx)(o.$, {
                onChange: this.handleVisibilityChange,
                active: !d,
                threshold: 0.55,
                children: (0, s.jsxs)('div', {
                    className: l()(n, {
                        [f.loaded]: r,
                        [f.loading]: !r
                    }),
                    children: [
                        Z ? (0, s.jsx)(c.Spinner, {
                            type: c.Spinner.Type.PULSING_ELLIPSIS,
                            className: f.spinner
                        }) : null,
                        (0, s.jsxs)(c.Clickable, {
                            onClick: this.handleClickView,
                            className: l()(f.card, {
                                [f.submitting]: Z,
                                [f.cardWithTags]: y
                            }),
                            onContextMenu: this.handleContextMenu,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: f.cardHeader,
                                    children: [
                                        (0, s.jsx)('div', {
                                            className: f.splash,
                                            children: (0, s.jsx)('img', {
                                                src: M,
                                                alt: '',
                                                className: l()(f.splashImage, { [f.splashImageHeight]: !P }),
                                                onLoad: () => this.setState({ loaded: !0 })
                                            })
                                        }),
                                        U || j ? (0, s.jsx)('div', {
                                            className: f.actionButtons,
                                            children: (0, s.jsx)(h.Z, { guild: t })
                                        }) : null,
                                        (0, s.jsx)('div', {
                                            className: f.guildIcon,
                                            children: (0, s.jsx)(S.ZP, {
                                                mask: S.ZP.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, s.jsx)('div', {
                                                    className: f.iconMask,
                                                    children: (0, s.jsx)(S.ZP, {
                                                        mask: S.ZP.Masks.SQUIRCLE,
                                                        width: 40,
                                                        height: 40,
                                                        children: (0, s.jsx)('img', {
                                                            src: D,
                                                            alt: '',
                                                            className: f.avatar
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                (0, s.jsxs)('div', {
                                    className: f.guildInfo,
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: f.title,
                                            children: [
                                                (0, s.jsx)(T.Z, {
                                                    className: f.guildBadge,
                                                    guild: t,
                                                    tooltipColor: c.Tooltip.Colors.PRIMARY
                                                }),
                                                (0, s.jsx)(c.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    className: f.guildName,
                                                    children: L
                                                })
                                            ]
                                        }),
                                        (0, s.jsx)(c.Text, {
                                            className: f.description,
                                            variant: 'text-sm/normal',
                                            color: 'header-secondary',
                                            children: v
                                        }),
                                        y && null != x && null != a && (0, s.jsx)(E.F, {
                                            tags: x,
                                            onTagClick: e => a(e, t.id),
                                            guildId: t.id,
                                            section: g.P1.POPULAR
                                        }),
                                        (0, s.jsxs)('div', {
                                            className: f.memberInfo,
                                            children: [
                                                null != O && (0, s.jsxs)('div', {
                                                    className: f.memberCount,
                                                    children: [
                                                        (0, s.jsx)('div', { className: f.dotOnline }),
                                                        (0, s.jsx)(c.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-secondary',
                                                            children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: O })
                                                        })
                                                    ]
                                                }),
                                                null != R && (0, s.jsxs)('div', {
                                                    className: f.memberCount,
                                                    children: [
                                                        (0, s.jsx)('div', { className: f.dotOffline }),
                                                        (0, s.jsx)(c.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-secondary',
                                                            children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: R })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }) : (0, s.jsx)('div', { className: l()(f.card, { [f.cardWithTags]: y }) })
        });
    }
    constructor(...e) {
        super(...e), v(this, 'state', {
            loaded: !1,
            hasBeenSeen: !1,
            isVisible: !1,
            submitting: !1
        }), v(this, 'handleClickView', async e => {
            let {className: t} = e.target;
            if (t.includes('Menu'))
                return;
            let {
                onView: n,
                guild: i
            } = this.props;
            e.stopPropagation(), this.setState({ submitting: !0 });
            try {
                null != n && await n(i.id);
            } finally {
                this.setState({ submitting: !1 });
            }
        }), v(this, 'handleVisibilityChange', e => {
            let {
                onGuildCardSeen: t,
                guild: n
            } = this.props;
            null != n && !this.state.hasBeenSeen && e && (this.setState({ hasBeenSeen: e }), null != t && t(n.id));
        }), v(this, 'handleContextMenu', e => {
            (0, d.jW)(e, async () => {
                let {default: e} = await Promise.resolve().then(n.bind(n, 455839));
                return t => (0, s.jsx)(e, {
                    ...t,
                    guild: this.props.guild
                });
            });
        }), v(this, 'setIsVisible', e => {
            this.setState({ isVisible: e });
        });
    }
}
v(O, 'Placeholder', e => (0, s.jsx)('div', { className: l()(e.className, f.cardPlaceholder) })), t.Z = O;
