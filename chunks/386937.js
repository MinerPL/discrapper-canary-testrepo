n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(392711), o = n.n(l), c = n(442837), d = n(477690), u = n(481060), _ = n(179360), E = n(129861), I = n(999382), T = n(899667), m = n(271383), N = n(594174), S = n(575000), h = n(409216), g = n(267642), C = n(624138), x = n(981631), p = n(689938), R = n(633046);
function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let L = (0, C.Mg)(d.Z.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class O extends a.Component {
    componentDidMount() {
        this.measure();
        let {guildId: e} = this.props;
        null != e && (0, _.C0)(e), window.addEventListener('resize', this.measure);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.measure);
    }
    componentDidUpdate() {
        if (!(null != this.state.tierPositions || Object.values(this.tierRefs).some(e => null == e)))
            this.measure();
    }
    getSubscriptionCount() {
        let {subscriptions: e} = this.props;
        return null != e ? e.length : 0;
    }
    renderProgressBar(e) {
        let {tierPositions: t} = this.state, {guildId: n} = this.props, a = this.getSubscriptionCount();
        if (null == t || null == n)
            return null;
        let i = {
                numRequired: 0,
                y: 0,
                key: S.x
            }, r = (0, g.vn)(n), l = e.map(e => {
                var n;
                return {
                    numRequired: r[e.tier],
                    name: (0, g.nW)(e.tier),
                    y: null !== (n = t[e.tier]) && void 0 !== n ? n : 0,
                    key: e.tier
                };
            });
        return (0, s.jsx)(S.Z, {
            className: a > 0 ? R.progressWithSubscriptions : R.progress,
            progress: a,
            tiers: [
                i,
                ...l
            ],
            initialAnimationDelay: 500,
            onAnimatedTierMaker: this.handleAnimatedTier
        });
    }
    renderTierNone() {
        return (0, s.jsxs)('div', {
            className: R.tierDefaultUnlocked,
            ref: this.defaultTierRef,
            children: [
                (0, s.jsx)(u.FormText, {
                    type: u.FormText.Types.LABEL_BOLD,
                    children: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_NONE
                }),
                (0, s.jsx)(u.FormText, {
                    type: u.FormText.Types.DESCRIPTION,
                    className: R.tierDefaultUnlockedDescription,
                    children: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_DESCRIPTION_NONE
                })
            ]
        });
    }
    renderSubscribers() {
        let {
            subscribers: e,
            subscriberCount: t,
            guildId: n
        } = this.props;
        return (0, s.jsxs)('div', {
            ref: this.defaultTierRef,
            className: R.subscribers,
            children: [
                (0, s.jsx)(h.Z, {
                    guildId: null != n ? n : void 0,
                    users: e,
                    renderUser: this.renderSubscriber,
                    renderMoreUsers: this.renderMoreSubscribers,
                    max: 5
                }),
                (0, s.jsx)('div', {
                    className: R.subscriberCount,
                    children: p.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_COUNT_SUBSCRIBERS.format({ count: t })
                })
            ]
        });
    }
    render() {
        let {
            guildId: e,
            renderTier: t,
            subscriptions: n,
            subscriberCount: a,
            tiers: i
        } = this.props;
        if (null == n)
            return (0, s.jsx)(u.Spinner, { type: u.Spinner.Type.SPINNING_CIRCLE });
        if (null == e)
            return null;
        let r = (0, g.vn)(e);
        return (0, s.jsx)('div', {
            children: (0, s.jsxs)('div', {
                className: R.content,
                children: [
                    this.renderProgressBar(i),
                    (0, s.jsxs)('div', {
                        className: R.tiers,
                        children: [
                            0 === a ? this.renderTierNone() : this.renderSubscribers(),
                            i.map((n, s, a) => t({
                                tier: n,
                                tiers: a,
                                tierIndex: s,
                                onSetRef: this.setTierRef,
                                isAnimatedTo: r[this.state.animatedTier] >= r[n.tier],
                                subscriptionCount: this.getSubscriptionCount(),
                                guildId: e
                            }))
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e), f(this, 'tierRefs', {}), f(this, 'defaultTierRef', a.createRef()), f(this, 'state', {
            tierPositions: null,
            animatedTier: x.Eu4.NONE
        }), f(this, 'measure', () => {
            let {subscriberCount: e} = this.props, t = this.defaultTierRef.current;
            if (null == t)
                return;
            let {top: n} = t.getBoundingClientRect(), s = {};
            for (let [t, a] of Object.entries(this.tierRefs)) {
                if (null == a)
                    return;
                let {top: i} = a.getBoundingClientRect(), r = e > 0 ? L : 0;
                s[t] = i - n + 32 - r;
            }
            this.setState({ tierPositions: s });
        }), f(this, 'setTierRef', (e, t) => {
            this.tierRefs[t.tier] = e;
        }), f(this, 'handleAnimatedTier', e => {
            this.setState({ animatedTier: e.key });
        }), f(this, 'renderSubscriber', (e, t, n) => {
            var a;
            return null == e ? null : (0, s.jsx)(u.Tooltip, {
                text: (0, s.jsx)(E.Z, {
                    user: e.user,
                    nick: e.nick
                }),
                'aria-label': null !== (a = e.nick) && void 0 !== a ? a : e.user.tag,
                children: n => (0, s.jsx)(u.Avatar, {
                    ...n,
                    tabIndex: -1,
                    src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
                    className: r()(R.avatar, t, null != t ? R.subscriberMask : null),
                    size: u.AvatarSizes.SIZE_32
                })
            }, n);
        }), f(this, 'renderSubscribersPopout', () => (0, s.jsx)(u.Scroller, {
            className: R.subscribersPopout,
            children: this.props.subscribers.map(e => (0, s.jsxs)('div', {
                className: R.subscribersPopoutUser,
                children: [
                    (0, s.jsx)(u.Avatar, {
                        src: e.user.getAvatarURL(this.props.guildId, 32),
                        'aria-label': e.user.username,
                        size: u.AvatarSizes.SIZE_32,
                        className: R.avatar
                    }),
                    (0, s.jsx)('div', {
                        className: R.subscribersPopoutUsername,
                        children: (0, s.jsx)(E.Z, {
                            user: e.user,
                            nick: e.nick
                        })
                    })
                ]
            }, e.user.id))
        })), f(this, 'renderMoreSubscribers', (e, t, n) => (0, s.jsx)(u.Popout, {
            renderPopout: this.renderSubscribersPopout,
            position: 'bottom',
            autoInvert: !1,
            children: t => (0, s.jsx)('div', {
                className: R.moreSubscribers,
                ...t,
                children: e
            })
        }, n));
    }
}
let A = c.ZP.connectStores([
    I.Z,
    N.default,
    T.Z,
    m.ZP
], () => {
    let e = I.Z.getGuildId(), t = null != e ? T.Z.getAppliedGuildBoostsForGuild(e) : null, n = o()(null != t ? t : []).uniqBy(e => e.userId), s = n.map(t => ({
            user: N.default.getUser(t.userId),
            nick: m.ZP.getNick(e, t.userId)
        })).filter(e => null != e.user).value();
    return {
        guildId: e,
        subscriptions: t,
        subscribers: s,
        subscriberCount: n.size()
    };
})(O);
t.Z = A;
