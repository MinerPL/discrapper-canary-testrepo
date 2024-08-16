n.d(t, {
    Z: function () {
        return eS;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(392711),
    r = n.n(s),
    l = n(338545),
    o = n(442837),
    c = n(704215),
    d = n(846519),
    u = n(481060),
    _ = n(570140),
    E = n(239091),
    h = n(269128),
    m = n(711237),
    I = n(110924),
    g = n(100527),
    p = n(906732),
    T = n(211242),
    S = n(536687),
    f = n(745837),
    C = n(13228),
    N = n(1259),
    A = n(211644),
    v = n(605236),
    Z = n(243778),
    L = n(492162),
    O = n(818634),
    R = n(596557),
    x = n(817520),
    b = n(999309),
    P = n(408987),
    M = n(130734),
    D = n(499137),
    y = n(258871),
    j = n(972264),
    U = n(11352),
    G = n(304445),
    k = n(344185),
    w = n(155409),
    B = n(10401),
    H = n(970731),
    V = n(210887),
    F = n(592125),
    Y = n(796974),
    W = n(486472),
    z = n(984933),
    K = n(650774),
    q = n(430824),
    Q = n(819640),
    X = n(496675),
    J = n(878884),
    $ = n(19780),
    ee = n(594174),
    et = n(74538),
    en = n(374023),
    ei = n(373274),
    ea = n(547042),
    es = n(315174),
    er = n(577718),
    el = n(156978),
    eo = n(591190),
    ec = n(981631),
    ed = n(652785),
    eu = n(921944),
    e_ = n(647086),
    eE = n(689938),
    eh = n(764842);
function em(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let eI = 64,
    eg = 'server-settings',
    ep = {
        origin: {
            x: -8,
            y: -48
        },
        targetWidth: 40,
        targetHeight: 40,
        offset: {
            x: 0,
            y: 0
        }
    };
class eT extends a.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n
            ? {
                  renderBanner: !1,
                  bannerVisible: !1
              }
            : null;
    }
    componentDidMount() {
        var e;
        this.setAnimatedValue(0), _.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = G.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = G.Z.getHistory();
        (null === (e = t.state) || void 0 === e ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), _.Z.unsubscribe('LAYER_PUSH', this.closeAllHeaderNotices);
    }
    getGuildBannerHash() {
        let { guild: e, hasChannelNotice: t } = this.props;
        return null == e || t ? null : e.banner;
    }
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: a } = this.props,
            { shouldShowSubscribeTooltip: s } = this.state;
        if (n)
            return (0, i.jsx)('div', {
                onClick: (t) => (e ? null : t.stopPropagation()),
                children: (0, i.jsx)(w.Z, {
                    tutorialId: eg,
                    position: 'bottom',
                    inlineSpecs: ep,
                    children: this.renderGuildHeaderDropdownButton(e)
                })
            });
        if (t)
            return (0, i.jsx)(u.Tooltip, {
                forceOpen: !0,
                color: u.TooltipColors.BRAND,
                position: 'bottom',
                shouldShow: !e && !a,
                text: eE.Z.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
                'aria-label': eE.Z.Messages.GUILD_TEMPLATES_UNSYNCED_TOOLTIP,
                children: () => this.renderGuildHeaderDropdownButton(e)
            });
        if (!a && !e)
            return s
                ? (0, i.jsx)(u.Popout, {
                      renderPopout: () =>
                          (0, i.jsx)('div', {
                              onClick: (e) => e.stopPropagation(),
                              children: (0, i.jsx)(H.ZP, {
                                  header: eE.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_HEADER,
                                  content: eE.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_TEXT,
                                  buttonCTA: eE.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_HEADER_SUBSCRIBE_TOOLTIP_CLOSE,
                                  onClick: this.handleCloseSubscribeTooltip
                              })
                          }),
                      position: 'bottom',
                      align: 'center',
                      animation: u.Popout.Animation.TRANSLATE,
                      shouldShow: !0,
                      children: () => this.renderGuildHeaderDropdownButton(e)
                  })
                : this.renderGuildHeaderUpsellPopout(e);
        return this.renderGuildHeaderDropdownButton(e);
    }
    renderGuildHeader(e) {
        let { guild: t, isHeaderPopoutOpen: n, showGuildHeaderTutorial: a, showGuildTemplateDirtyTooltip: s, isGuildHeaderDismissibleTooltipShown: r, headerAnalyticsLocations: l } = this.props,
            { controller: o, renderBanner: c, bannerVisible: d, bannerVisibleHeight: _, communityInfoVisible: E } = this.state,
            h = a || s || r;
        return null == t
            ? null
            : (0, i.jsx)(p.Gt, {
                  value: l,
                  children: (0, i.jsx)(u.LazyPopout, {
                      renderPopout: this.renderMenuPopout,
                      position: 'bottom',
                      align: 'center',
                      animation: u.Popout.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, O.l)(!1);
                      },
                      children: (a) => {
                          let { onClick: s, ...r } = a;
                          return (0, i.jsx)(es.ZP, {
                              guild: t,
                              controller: o,
                              renderBanner: c,
                              hasSubheader: e,
                              bannerVisible: d,
                              communityInfoVisible: E,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: h,
                              animationOverlayHeight: _,
                              ...r,
                              children: this.renderGuildHeaderNotices(n)
                          });
                      }
                  })
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            i = null == t ? void 0 : t.hasCommunityInfoSubheader();
        if (null != t && (!!n || !!i)) n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e);
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, bannerVisibleHeight: a, controller: s } = this.state;
        ((e >= eI && i) || (e < eI && !i)) && (i = !i),
            ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
            (a = Math.max(88 - e, 0)),
            (n = i),
            (t !== this.state.renderBanner || i !== this.state.bannerVisible || a !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) &&
                this.setState({
                    renderBanner: t,
                    bannerVisible: i,
                    bannerVisibleHeight: a,
                    communityInfoVisible: n
                }),
            s
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 88)),
                    immediate: !0
                })
                .start();
    }
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 20)),
                    immediate: !0
                })
                .start();
    }
    renderChannelList() {
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: a, ...s } = this.props;
        if (e || null == t) return (0, i.jsx)(eo.Z, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        if (t.hasFeature(ec.oNc.HUB) && !a)
            return (0, i.jsx)('div', {
                className: eh.hubContainer,
                children: (0, i.jsx)(y.Z, {
                    guild: t,
                    channel: null != n ? n : z.ZP.getDefaultChannel(t.id)
                })
            });
        {
            let e = t.id === e_._ ? ei.j : ei.E;
            return (0, i.jsx)(e, {
                guild: t,
                ...s,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll: null != t && (null != this.getGuildBannerHash() || t.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
            });
        }
    }
    renderFooter() {
        let { selectedChannelId: e, shouldRenderClipsEducation: t } = this.props;
        return (0, i.jsx)(Z.ZP, {
            contentTypes: [],
            children: (n) => {
                let { visibleContent: a, markAsDismissed: s } = n;
                switch (a) {
                    case c.z.BASH_OUT_COACH_MARK:
                        return (0, i.jsx)(ea.V, {
                            channelId: null != e ? e : void 0,
                            markAsDismissed: s,
                            tutorialType: ea._.BASH_OUT
                        });
                    case c.z.ACTIVITIES_COACH_MARK_GAME_NIGHT:
                        return (0, i.jsx)(ea.V, {
                            channelId: null != e ? e : void 0,
                            markAsDismissed: s,
                            tutorialType: ea._.GAME_NIGHT
                        });
                    default:
                        if (t) return (0, i.jsx)(f.Z, {});
                        return (0, i.jsx)(i.Fragment, {});
                }
            }
        });
    }
    render() {
        let { guild: e, footerAnalyticsLocations: t } = this.props;
        return (0, i.jsxs)('nav', {
            className: eh.container,
            onContextMenu: this.handleContextMenu,
            'aria-label': eE.Z.Messages.GUILD_SIDEBAR_A11Y_LABEL.format({ guildName: null != e ? e.toString() : '' }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(el.Z, {
                        guild: e,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e })
                    }),
                this.renderChannelList(),
                (0, i.jsx)(p.Gt, {
                    value: t,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            em(this, 'historyUnlisten', () => {}),
            em(this, 'showTimeout', new d.V7()),
            em(this, 'state', {
                controller: new l.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
                shouldShowSubscribeTooltip: !1,
                bannerVisibleHeight: 88,
                hasGuildSubheader: !1
            }),
            em(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            em(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, O.l)(!t), this.closeAllHeaderNotices();
            }),
            em(this, 'handleContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, E.jW)(e, async () => {
                        let { default: e } = await n.e('92795').then(n.bind(n, 652171));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: t
                            });
                    });
            }),
            em(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, E.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('96427'), n.e('33053'), n.e('37581'), n.e('7654'), n.e('44156'), n.e('14203'), n.e('85552'), n.e('58227'), n.e('75531'), n.e('33213'), n.e('12303')]).then(n.bind(n, 545135));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: t
                            });
                    });
            }),
            em(this, 'closeAllHeaderNotices', () => {
                this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            em(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, v.un)(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(ec.oNc.HUB);
                !t && n && (0, v.EW)(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eu.L.AUTO });
            }),
            em(this, 'handleCloseSubscribeTooltip', () => {
                this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            em(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && P.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            em(this, 'renderMenuPopout', async () => {
                let { default: e } = await n.e('46826').then(n.bind(n, 859432));
                return (t) => {
                    let { closePopout: n } = t,
                        { guild: a } = this.props;
                    return (
                        null != a &&
                        (0, i.jsx)(e, {
                            onClose: n,
                            guild: a
                        })
                    );
                };
            }),
            em(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: a, showDiscoveryTooltip: s, showInviteSplashUpsell: r, showDiscoveryLandingPageSettingsUpsell: l, showHubPrivacySettingsTooltip: o, showActiveThreadsNotice: d, showGuildSoundboardPermissionUpsell: u, showMediaChannelUpsell: _, showTierTemplatesUpsell: E, shouldRenderCustomNotificationSoundsCoachmark: h, guild: m, theme: I } = this.props;
                if (null == m) return this.renderGuildHeaderDropdownButton(e);
                let g = [];
                return (o && g.push(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), d && g.push(c.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && g.push(c.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && g.push(c.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), a && g.push(c.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), u && g.push(c.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), r && g.push(c.z.GUILD_HEADER_INVITE_SPLASH), s && g.push(c.z.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP), l && g.push(c.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === g.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (_ && g.push(c.z.MEDIA_CHANNEL_UPSELL),
                      E && g.push(c.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      h && g.push(c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, i.jsx)(er.Z, {
                          contentTypes: g,
                          theme: I,
                          guild: m,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            em(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, i.jsx)(h.Z, {
                    open: e,
                    className: eh.dropdownButton
                })
            ),
            em(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eS(e) {
    var t;
    let { guildId: n, hideSelectedChannel: s, selectedChannelId: l } = e,
        d = (0, o.e7)([q.Z], () => q.Z.getGuild(n));
    (0, m.J_)(n);
    let _ = (0, L.Z)(n),
        E = (0, o.e7)([Y.Z], () => Y.Z.getGuildDimensions(n).scrollTo),
        h = (0, o.e7)([$.Z], () => $.Z.getChannelId()),
        [f, Z, P] = (0, o.Wu)([X.Z], () => [X.Z.can(ec.Plq.MANAGE_GUILD, d), X.Z.can(ec.Plq.MANAGE_ROLES, d), X.Z.can(ec.Plq.MANAGE_THREADS, d)]),
        y = (0, o.e7)([W.Z], () => W.Z.isUnavailable(n)),
        G = (0, o.e7)([ee.default], () => ee.default.getCurrentUser()),
        w = (0, o.e7)([V.Z], () => (V.Z.darkSidebar ? ec.BRd.DARK : V.Z.theme)),
        { enableStudyGroup: H } = (0, D.s)(d),
        z = (0, A.ZP)((e) => e.currentlyShown.has(c.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [ei, ea] = a.useState(!z),
        es = (0, I.Z)(n),
        { analyticsLocations: er } = (0, p.ZP)(g.Z.GUILD_HEADER),
        { analyticsLocations: el } = (0, p.ZP)(g.Z.GUILD_CHANNEL_LIST_FOOTER);
    a.useEffect(() => {
        n !== es && ea(!z);
    }, [n, es, z]);
    let [eo, e_] = (0, A.ZP)((e) => [ed.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eu.R.GUILD_HEADER_TOOLTIPS)]),
        eE = (0, S.Z)(d),
        eh = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
        em = (0, o.e7)([Q.Z], () => Q.Z.hasLayers()),
        eI = (0, o.e7)([B.Z], () => B.Z.shouldShow(eg)),
        ep = f && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !en.s.isDisallowPopupsSet(),
        eS = (0, o.e7)([K.Z], () => K.Z.getMemberCount(n)),
        ef = f && null != eS && eS >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !en.s.isDisallowPopupsSet(),
        eC = Z && null != d && (d.hasFeature(ec.oNc.COMMUNITY) || (null != eS && eS > 50)),
        eN = (0, b.Z)(n),
        eA = (0, N._)(n),
        ev = (null == d ? void 0 : d.hasFeature(ec.oNc.HUB)) === !0,
        eZ = f && (null == d ? void 0 : d.hasFeature(ec.oNc.DISCOVERABLE)) === !0,
        eL = (0, T.Q)(),
        eO = (f || (null == d ? void 0 : d.premiumTier) === ec.Eu4.NONE) && !en.s.isDisallowPopupsSet() && !eL,
        eR = (0, o.e7)([M.Z, Q.Z], () => null != d && null != G && f && !Q.Z.hasLayers() && M.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        ex = (0, o.e7)([F.Z], () => F.Z.getChannel(l)),
        { isPopoutOpen: eb } = (0, O.y)(),
        eP = null !== (t = null == d ? void 0 : d.hasFeature(ec.oNc.COMMUNITY)) && void 0 !== t && t,
        eM = (0, o.e7)([k.Z], () => !r().isEmpty(k.Z.getThreadsForGuild(n))),
        eD = et.ZP.isNewUser(G),
        ey = ei && !eD,
        ej = (0, C.Z)(G);
    (0, R.Z)(d);
    let eU = (0, v.wE)(c.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eG = (0, j.Z)(n),
        ek = (0, x.Z)(n),
        ew = (0, o.e7)([$.Z], () => $.Z.getChannelId()),
        eB = (0, o.e7)([J.Z], () => J.Z.desyncedVoiceStatesCount),
        eH = U.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled;
    return (0, i.jsx)(eT, {
        guildId: n,
        hideSelectedChannel: s,
        guild: d,
        scrollToChannel: E,
        selectedChannelId: s ? null : l,
        selectedChannel: ex,
        selectedVoiceChannelId: h,
        voiceStates: _,
        rtcConnectedChannelId: ew,
        rtcDesyncedVoiceStatesCount: eB,
        isUnavailable: y,
        theme: w,
        user: G,
        hasChannelNotice: null != eE || eo,
        anyLayerOpen: eh || em,
        showGuildBoostingProgressBarUpsell: ep,
        showGuildBoostingProgressBarSizeUpsell: ef,
        showInviteSplashUpsell: eO,
        showDiscoveryLandingPageSettingsUpsell: eZ,
        showGuildHeaderTutorial: eI,
        showGuildTemplateDirtyTooltip: eR,
        showRoleSubscriptionUpsell: eN,
        showDiscoveryTooltip: eA,
        showHubPrivacySettingsTooltip: ev,
        showNewUnreadsBar: eP,
        showActiveThreadsNotice: P && null != eS && eS >= 200 && eM,
        showGuildSoundboardPermissionUpsell: eC,
        showMediaChannelUpsell: eG,
        showTierTemplatesUpsell: ek,
        isHeaderPopoutOpen: eb,
        enableStudyGroup: H,
        isGuildHeaderDismissibleTooltipShown: e_,
        canShowCoachMarkAtBottom: ei,
        headerAnalyticsLocations: er,
        footerAnalyticsLocations: el,
        shouldRenderClipsEducation: ej,
        isTutorialHighlightDismissed: eU,
        shouldRenderBurstCoachmark: ey,
        shouldRenderCustomNotificationSoundsCoachmark: eH
    });
}
