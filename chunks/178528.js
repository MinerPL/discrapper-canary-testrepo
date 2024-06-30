n.d(t, {
    Z: function () {
        return j;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(920906), o = n(442837), r = n(481060), l = n(619915), c = n(554747), d = n(373274), u = n(315174), h = n(840780), p = n(905423), f = n(680089), _ = n(58468), g = n(796974), m = n(324067), E = n(984933), Z = n(888369), I = n(430824), S = n(496675), C = n(878884), v = n(19780), x = n(944486), T = n(9156), N = n(938475), O = n(547881), A = n(669083), y = n(711553), R = n(981631), M = n(647086), b = n(689938), L = n(449924);
function P(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let D = 54;
class w extends s.PureComponent {
    static getDerivedStateFromProps(e) {
        let {guild: t} = e;
        return null == t || null == t.banner ? {
            renderBanner: !1,
            bannerVisible: !1
        } : null;
    }
    componentDidMount() {
        let {guildId: e} = this.props, {scrollTop: t} = g.Z.getGuildDimensions(e);
        this.setAnimatedValue(null != t ? t : 0);
    }
    componentDidUpdate(e) {
        let {
            guild: t,
            guildId: n
        } = this.props;
        if (e.guild !== t) {
            let {scrollTop: e} = g.Z.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
        }
    }
    renderSettings(e) {
        let {closePopout: t} = e;
        return (0, i.jsx)(A.Z, { onClose: t });
    }
    setAnimatedValue(e) {
        let {guild: t} = this.props, n = null == t ? void 0 : t.hasCommunityInfoSubheader();
        if (null != t && (null != t.banner || !!n))
            null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e);
    }
    setAnimatedValueForBanner(e) {
        let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            controller: s
        } = this.state;
        (e >= D && i || e < D && !i) && (i = !i), (e >= 78 && !t || e < 78 && t) && (t = !t), n = i, (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) && this.setState({
            renderBanner: t,
            bannerVisible: i,
            communityInfoVisible: n
        }), s.update({
            value: Math.min(1, Math.max(0, 1 - e / 78)),
            immediate: !0
        }).start();
    }
    setAnimatedValueForCommunityInfo(e) {
        let {
            communityInfoVisible: t,
            controller: n
        } = this.state;
        (e >= 20 && t || e < 20 && !t) && this.setState({ communityInfoVisible: !t }), n.update({
            value: Math.min(1, Math.max(0, 1 - e / 20)),
            immediate: !0
        }).start();
    }
    render() {
        let {
                onDragStart: e,
                ...t
            } = this.props, {guild: n} = t, {
                controller: s,
                renderBanner: a,
                bannerVisible: o,
                communityInfoVisible: l
            } = this.state, c = n.id === M._ ? d.j : d.E;
        return (0, i.jsxs)(y.Z, {
            header: (0, i.jsx)(u.ZP, {
                guild: n,
                controller: s,
                renderBanner: a,
                bannerVisible: o,
                className: L.guildHeader,
                headerClassName: L.guildHeaderInner,
                onMouseDown: e,
                disableBannerAnimation: !1,
                communityInfoVisible: l,
                children: (0, i.jsx)(r.Popout, {
                    position: 'right',
                    renderPopout: this.renderSettings,
                    children: e => (0, i.jsx)(O.ZP.Icon, {
                        icon: r.SettingsIcon,
                        label: b.Z.Messages.SETTINGS,
                        ...e
                    })
                })
            }),
            children: [
                (0, i.jsx)('div', {
                    className: L.channelList,
                    children: (0, i.jsx)(c, {
                        ...t,
                        guild: n,
                        disableManageChannels: !0,
                        onScroll: null != n && null != n.banner ? this.handleScroll : null
                    })
                }),
                (0, i.jsx)('section', {
                    className: L.panels,
                    'aria-label': b.Z.Messages.ACCOUNT_A11Y_LABEL,
                    children: (0, i.jsx)(h.Z, { guildId: n.id })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), P(this, 'state', {
            controller: new a.Controller({
                value: 1,
                immediate: !0
            }),
            renderBanner: !1,
            bannerVisible: !1,
            communityInfoVisible: !1
        }), P(this, 'handleScroll', e => {
            let {scrollTop: t} = e;
            this.setAnimatedValue(t);
        });
    }
}
function j(e) {
    var t;
    let {guildId: n} = e, s = (0, o.e7)([I.Z], () => I.Z.getGuild(n)), a = (0, o.e7)([E.ZP], () => E.ZP.getChannels(n)), r = (0, o.e7)([m.Z], () => m.Z.getCategories(n)), {
            mutedChannels: d,
            collapseMuted: u
        } = (0, o.cj)([T.ZP], () => ({
            mutedChannels: T.ZP.getMutedChannels(n),
            collapseMuted: T.ZP.isGuildCollapsed(n)
        })), h = (0, o.e7)([N.ZP], () => N.ZP.getVoiceStates(n)), O = (0, o.e7)([_.Z], () => _.Z.getCollapsed()), {scrollTo: A} = (0, o.e7)([g.Z], () => g.Z.getGuildDimensions(n)), y = (0, p.Z)(e => {
            let {channelId: t} = e;
            return t;
        }), M = (0, o.e7)([x.Z], () => x.Z.getVoiceChannelId()), b = (0, o.e7)([S.Z], () => S.Z.getGuildVersion(n)), L = (0, o.e7)([f.Z], () => f.Z.version), P = (0, o.e7)([Z.default], () => Z.default.getGuildChangeSentinel(n)), D = (0, l.QN)(null == s ? void 0 : s.id), j = (0, c.gM)(null == s ? void 0 : s.id), k = null !== (t = null == s ? void 0 : s.hasFeature(R.oNc.COMMUNITY)) && void 0 !== t && t, V = (0, o.e7)([v.Z], () => v.Z.getChannelId()), B = (0, o.e7)([C.Z], () => C.Z.desyncedVoiceStatesCount);
    return (0, i.jsx)(w, {
        guildId: n,
        guild: s,
        channels: a,
        categories: r,
        mutedChannels: d,
        scrollToChannel: A,
        selectedChannelId: y,
        selectedVoiceChannelId: M,
        voiceStates: h,
        rtcConnectedChannelId: V,
        rtcDesyncedVoiceStatesCount: B,
        collapsedChannels: O,
        collapseMuted: u,
        guildReadStateSentinel: P,
        permissionVersion: b,
        categoryCollapseVersion: L,
        embeddedAppsByChannel: D,
        activeEventsByChannel: j,
        showNewUnreadsBar: k,
        optInEnabled: !1
    });
}
