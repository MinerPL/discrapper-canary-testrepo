n.d(t, {
    E: function () {
        return ed;
    },
    j: function () {
        return eu;
    }
}),
    n(47120),
    n(653041);
var i,
    l = n(735250),
    r = n(470079),
    a = n(392711),
    s = n.n(a),
    o = n(91192),
    c = n(924826),
    u = n(442837),
    d = n(481060),
    h = n(925549),
    p = n(260300),
    f = n(410575),
    _ = n(607070),
    m = n(100527),
    g = n(906732),
    C = n(313201),
    I = n(362658),
    E = n(583962),
    N = n(915885),
    S = n(258871),
    x = n(216306),
    v = n(398758),
    T = n(220444),
    Z = n(31022),
    A = n(10401),
    b = n(131704),
    R = n(592125),
    M = n(796974),
    L = n(984933),
    P = n(914010),
    O = n(540126),
    y = n(734307),
    D = n(854444),
    j = n(761091),
    w = n(301342),
    U = n(906817),
    G = n(429122),
    k = n(285573),
    B = n(995993),
    V = n(910595),
    H = n(466935),
    F = n(120818),
    W = n(61642),
    z = n(848442),
    Y = n(53425),
    K = n(424785),
    q = n(770202),
    Q = n(79556),
    X = n(428127),
    J = n(950969),
    $ = n(233657),
    ee = n(831700),
    et = n(443063),
    en = n(327530),
    ei = n(981631),
    el = n(176505),
    er = n(689938),
    ea = n(774264);
function es(e, t, n) {
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
class eo extends (i = r.PureComponent) {
    componentDidMount() {
        this.setState({ initialized: !0 });
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: r } = this.state,
            { scrollTop: a } = M.Z.getGuildDimensions(i);
        null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(i)) : i !== e.guildId ? null != a && this.scrollTo(a) : l !== e.selectedChannelId ? this.scrollToChannel(l) : !t.initialized && r && (null == a && null != l ? this.scrollToChannel(l, !1, en.yE, this.handleListScroll) : this.scrollTo(null != a ? a : 0, this.handleListScroll)), this.testShouldSkipTutorial();
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    scrollTo(e, t) {
        var n;
        null === (n = this._list) ||
            void 0 === n ||
            n.scrollTo({
                to: e,
                animate: !1,
                callback: t
            });
    }
    scrollToChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : en.yE,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            r = this.getSectionRowsFromChannel(e)[0];
        if (null != r && null != l) {
            if (null != r.threadOffset) {
                let [e] = l.getScrollPosition(r.section, r.row),
                    a = r.threadOffset * en.Vf;
                l.scrollIntoViewRect({
                    start: e + a,
                    end: e + a + en.Vf,
                    padding: n,
                    animate: t,
                    callback: i
                });
            } else
                l.scrollToIndex({
                    section: r.section,
                    row: r.row,
                    animate: t,
                    padding: n,
                    callback: i
                });
        } else null == i || i();
    }
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ('row' !== n.type) return !1;
                let { section: i, row: l } = n;
                if (i < O.wd || e.isPlaceholderRow(i, l)) return !1;
                let r = e.getChannelFromSectionRow(i, l);
                if (null == r) return !1;
                let { channel: a, category: s } = r;
                return !!(0, b.vc)(a.record.type) && (!s.isCollapsed || !s.isMuted) && !a.isMuted && !!t.isItemVisible(i, l, !0) && (0, T.d)(a.record);
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: r, guildChannels: a, guildChannelsVersion: s } = this.props;
        return (0, l.jsx)('div', {
            className: ea.positionedContainer,
            children: (0, l.jsx)(J.Z, {
                ref: this.unreadTopRef,
                textUnread: er.Z.Messages.NEW_UNREADS,
                textMention: er.Z.Messages.NEW_MENTIONS,
                hide: null == e && (i || null != t || null != n),
                className: ea.unreadTop,
                barClassName: ea.unreadBar,
                guildId: r,
                guildChannels: a,
                guildChannelsVersion: s,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate
            })
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: i, isUnreadVisible: r } = this.state;
        return (0, l.jsx)(J.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: er.Z.Messages.NEW_UNREADS,
            textMention: er.Z.Messages.NEW_MENTIONS,
            hide: null == i && r,
            className: ea.unreadBottom,
            barClassName: ea.unreadBar,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate
        });
    }
    renderList() {
        let { guildChannels: e, guild: t, guildBanner: n, hasGuildSubheader: i, isRefreshEnabled: r = !1 } = this.props,
            { ref: a, ...s } = this.context,
            o = 0;
        return (
            null != n ? (o = r ? en.hl : en.Q0) : t.hasCommunityInfoSubheader() && !i && (o = en.JD),
            (0, l.jsx)(d.FocusJumpSection, {
                children: (t) =>
                    (0, l.jsx)(
                        d.List,
                        {
                            ref: this.setListRef,
                            className: ea.scroller,
                            fade: !0,
                            customTheme: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: o,
                            paddingBottom: en.$k,
                            renderSection: this.renderSection,
                            renderFooter: this.renderSectionFooter,
                            renderRow: this.renderRow,
                            onScroll: this.handleListScroll,
                            onResize: this.handleResize,
                            onContentResize: this.handleResize,
                            sections: e.getSections(!0),
                            innerAriaLabel: er.Z.Messages.CHANNELS,
                            innerTag: 'ul',
                            getAnchorId: this.getAnchorId,
                            ...s,
                            ...t
                        },
                        'guild-channels'
                    )
            })
        );
    }
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, l.jsx)(r.Fragment, {
            children: (0, l.jsx)(C.FG, {
                children: (i) =>
                    (0, l.jsx)(d.HeadingLevel, {
                        component: (0, l.jsx)(d.HiddenVisually, {
                            children: (0, l.jsx)(d.H, {
                                id: i,
                                children: er.Z.Messages.CHANNELS
                            })
                        }),
                        children: n
                            ? (0, l.jsxs)(r.Fragment, {
                                  children: [
                                      (0, l.jsx)('div', {
                                          className: ea.positionedContainer,
                                          children: (0, l.jsx)(X.Z, {
                                              position: 'top',
                                              guildChannels: e,
                                              guildChannelsVersion: t,
                                              jumpToVoiceChannels: this.jumpToVoiceChannels,
                                              jumpToChannel: this.jumpToChannel
                                          })
                                      }),
                                      this.renderList(),
                                      (0, l.jsx)(X.Z, {
                                          position: 'bottom',
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel
                                      })
                                  ]
                              })
                            : (0, l.jsxs)(r.Fragment, {
                                  children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()]
                              })
                    })
            })
        });
    }
    constructor(...e) {
        super(...e),
            es(this, '_list', null),
            es(this, 'unreadTopRef', r.createRef()),
            es(this, 'unreadBottomRef', r.createRef()),
            es(this, 'state', {
                initialized: !1,
                isUnreadVisible: !0,
                topUnread: null,
                topMention: null,
                bottomUnread: null,
                bottomMention: null
            }),
            es(this, 'setListRef', (e) => {
                var t;
                let { ref: n } = this.context;
                (n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null), (this._list = e);
            }),
            es(this, 'jumpToVoiceChannels', () => {
                var e, t, n, i;
                let { guildChannels: l, voiceStates: r } = this.props,
                    a = 0,
                    s = null !== (n = null === (e = l.getCategoryFromSection(l.voiceChannelsSectionNumber)) || void 0 === e ? void 0 : e.getShownChannelIds()) && void 0 !== n ? n : [];
                for (let e = 0; e < s.length - 1; e++)
                    if ((null !== (i = r[s[e]]) && void 0 !== i ? i : []).length > 0) {
                        a = e + 1;
                        break;
                    }
                null === (t = this._list) ||
                    void 0 === t ||
                    t.scrollToIndex({
                        section: l.voiceChannelsSectionNumber,
                        row: a,
                        animate: !0,
                        padding: en.yE
                    });
            }),
            es(this, 'jumpToChannel', (e) => this.scrollToChannel(e, !0, en.Q1)),
            es(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
                let [n, i] = t;
                return this.scrollToChannel(e, !0, null != n && null != i ? en.Q1 : en.yE);
            }),
            es(this, 'isChannelVisible', (e, t) => {
                let n = this.getSectionRowsFromChannel(e),
                    i = this._list;
                if (null == i) return !1;
                for (let { row: e, section: l } of n) {
                    let [n, r] = i.getScrollPosition(l, e),
                        a = i.getScrollerState();
                    if (t && n + r < a.scrollTop + a.offsetHeight) return !0;
                    if (!t && n > a.scrollTop) return !0;
                }
                return !1;
            }),
            es(this, 'getVisibleChannels', () => {
                let e = this._list;
                if (null == e) return [];
                let t = e.getItems(),
                    n = e.getScrollerState(),
                    i = [];
                for (var l = 0; l < t.length; l++) {
                    let r = t[l];
                    if ((0, d.isListItemRow)(r) && r.section >= this.props.guildChannels.favoritesSectionNumber) {
                        let t = this.props.guildChannels.getChannelFromSectionRow(r.section, r.row),
                            [l, a] = e.getScrollPosition(r.section, r.row);
                        null != t && l + a < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
                    }
                }
                return i;
            }),
            es(this, 'handleResize', () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != i)) {
                    let { scrollTop: e } = i;
                    this.updateChannelListScroll(e);
                }
            }),
            es(this, 'handleListScroll', () => {
                var e, t;
                let { onScroll: n } = this.props,
                    i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                if (null != i) {
                    let { scrollTop: e } = i;
                    null != n && n(i), this.updateChannelListScroll(e);
                }
                null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
            }),
            es(this, 'handleUnreadCalculate', (e, t, n) => {
                let i = this.isUnreadVisible();
                n
                    ? this.setState({
                          isUnreadVisible: i,
                          bottomUnread: t,
                          bottomMention: e
                      })
                    : this.setState({
                          isUnreadVisible: i,
                          topUnread: t,
                          topMention: e
                      });
            }),
            es(
                this,
                'updateChannelListScroll',
                s().throttle((e) => {
                    h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100)
            ),
            es(this, 'getSectionHeight', (e) => {
                let { guild: t, guildChannels: n } = this.props;
                return (0, U.EM)(e, t, n);
            }),
            es(this, 'getSectionFooterHeight', (e) => {
                let { guildChannels: t, voiceStates: n, selectedVoiceChannelId: i, selectedChannelId: l, optInEnabled: r, guildChannelsVersion: a } = this.props;
                return (0, G.dt)({
                    sectionIndex: e,
                    guildChannels: t,
                    guildChannelsVersion: a,
                    voiceStates: n,
                    selectedChannelId: l,
                    selectedVoiceChannelId: i,
                    optInEnabled: r
                });
            }),
            es(this, 'getRowHeight', (e, t) => {
                let { guildChannels: n, voiceStates: i, stageChannelSpeakerVoiceStates: l, selectedVoiceChannelId: r, selectedGuildId: a } = this.props,
                    s = en.Vf;
                if (e === O.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty() ? 0 : e.getRow(t) === et.z.GUILD_PREMIUM_PROGRESS_BAR ? (e.getRows().length > 1 ? E.aR : E.PD) : s;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let o = n.getChannelFromSectionRow(e, t);
                if (null == o) return 0;
                let { channel: c, category: u } = o;
                if (c.record.type === ei.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: d } = I.Z.getCurrentConfig({ location: 'channel_list' }, { autoTrackExposure: !0 });
                for (let e of (d && a === ei.I_8 && !c.record.isDM() && !c.record.isGroupDM() && !c.record.isGuildStageVoice() && (s = en.GQ), c.threadIds)) {
                    s += en.Vf;
                    let t = i[c.id];
                    null != t && t.length > 0 && (s += (r === e ? t.length * en.Hb : en.Hb) + en.cx);
                }
                if (c.record.isGuildVoice()) {
                    let e = i[c.id];
                    if (null != e && e.length > 0) {
                        let t = e.length * en.Hb;
                        (c.isCollapsed || u.isCollapsed) && (t = en.Hb), (s += t + en.cx);
                    }
                    c.id === this.props.rtcConnectedChannelId && (s += this.props.rtcDesyncedVoiceStatesCount * en.Hb);
                }
                if ((null != c.subtitle && (s += en.NY), c.record.isGuildStageVoice())) {
                    var h, p;
                    let e = null !== (h = i[c.id]) && void 0 !== h ? h : [],
                        t = null !== (p = l[c.id]) && void 0 !== p ? p : [];
                    if (null != e && e.length > 0) {
                        let e = t.length * en.Hb;
                        c.isCollapsed || u.isCollapsed ? (e = Math.ceil(e / en.VE)) : (e += en.Hb), (s += e + en.cx);
                    }
                }
                return s;
            }),
            es(this, 'dismissRecents', () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    i = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == i) return;
                let l = null,
                    r = i.getShownChannelAndThreadIds();
                null != n && r.includes(n) && (l = (0, x.KY)(t)), (0, x.Uo)(e.id, r, l);
            }),
            es(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: i, guild: r, selectedChannelId: a, disableManageChannels: s } = this.props;
                return (0, l.jsx)(
                    U.ZP,
                    {
                        sectionIndex: t,
                        guild: r,
                        guildChannels: n,
                        guildChannelsVersion: i,
                        selectedChannelId: a,
                        disableManageChannels: s
                    },
                    (0, U.WW)(t, n)
                );
            }),
            es(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { guild: i, selectedChannel: a, selectedChannelId: s, selectedVoiceChannel: o, selectedVoiceChannelId: c, guildChannels: u, voiceStates: d, disableManageChannels: h, stageChannelSpeakerVoiceStates: p, optInEnabled: f, withGuildIcon: _, isRefreshEnabled: m } = this.props;
                if (t === O.wZ) {
                    let e = u.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case et.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, l.jsx)(
                                S.Z,
                                {
                                    guild: i,
                                    channel: L.ZP.getDefaultChannel(i.id)
                                },
                                et.z.GUILD_HUB_HEADER_OPTIONS
                            );
                        case et.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let r = e.getRows();
                            return (0, l.jsx)(
                                E.ZP,
                                {
                                    guild: i,
                                    withMargin: r.length > 1
                                },
                                et.z.GUILD_PREMIUM_PROGRESS_BAR
                            );
                        case et.z.GUILD_HOME:
                            return (0, l.jsx)(
                                V.Z,
                                {
                                    guild: i,
                                    selected: s === el.oC.GUILD_HOME
                                },
                                et.z.GUILD_HOME
                            );
                        case et.z.GUILD_SCHEDULED_EVENTS:
                            if (m) return null;
                            return (0, l.jsx)(
                                $.Z,
                                {
                                    guild: i,
                                    selected: s === et.z.GUILD_SCHEDULED_EVENTS
                                },
                                et.z.GUILD_SCHEDULED_EVENTS
                            );
                        case et.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, l.jsx)(
                                W.Z,
                                {
                                    guild: i,
                                    selected: s === el.oC.ROLE_SUBSCRIPTIONS
                                },
                                et.z.GUILD_ROLE_SUBSCRIPTIONS
                            );
                        case et.z.GUILD_SHOP:
                            return (0, l.jsx)(
                                z.Z,
                                {
                                    guild: i,
                                    selected: s === el.oC.GUILD_SHOP
                                },
                                et.z.GUILD_SHOP
                            );
                        case et.z.GUILD_MEMBER_APPLICATIONS:
                            return (0, l.jsx)(
                                H.Z,
                                {
                                    guild: i,
                                    selected: s === el.oC.MEMBER_APPLICATIONS
                                },
                                et.z.GUILD_MEMBER_APPLICATIONS
                            );
                        case et.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, l.jsx)(F.T, { guild: i });
                        case et.z.CHANNELS_AND_ROLES:
                            if (m) return null;
                            return (0, l.jsx)(
                                B.m,
                                {
                                    guild: i,
                                    selected: s === el.oC.CHANNEL_BROWSER || s === el.oC.CUSTOMIZE_COMMUNITY
                                },
                                et.z.CHANNELS_AND_ROLES
                            );
                        case et.z.GUILD_DIRECTORY:
                            return (0, l.jsx)(
                                k.Z,
                                {
                                    guild: i,
                                    selectedChannelId: s,
                                    disableManageChannels: h
                                },
                                et.z.GUILD_DIRECTORY
                            );
                        case et.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            if (m) return null;
                            return (0, l.jsx)(
                                N.Z,
                                {
                                    guild: i,
                                    selected: s === el.oC.MEMBER_SAFETY
                                },
                                et.z.GUILD_MOD_DASH_MEMBER_SAFETY
                            );
                        default:
                            return null;
                    }
                }
                if (u.isPlaceholderRow(t, n)) return null;
                let g = u.getChannelFromSectionRow(t, n);
                if (null == g) return null;
                let { category: C, channel: I } = g,
                    x = C instanceof O.VR,
                    v = I.record,
                    T = ''.concat(t).concat(I.id);
                switch (v.type) {
                    case ei.d4z.GUILD_ANNOUNCEMENT:
                    case ei.d4z.GUILD_TEXT:
                    case ei.d4z.GUILD_FORUM:
                    case ei.d4z.GUILD_MEDIA:
                    case ei.d4z.DM:
                    case ei.d4z.GROUP_DM:
                        return (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(Q.Z, {
                                        channel: v,
                                        guild: i,
                                        position: I.position,
                                        selected: s === I.id,
                                        muted: I.isMuted,
                                        subtitle: I.subtitle,
                                        disableManageChannels: h,
                                        canBeNewChannel: f && t === u.recentsSectionNumber,
                                        isFavoriteCategory: x,
                                        withGuildIcon: _
                                    }),
                                    I.threadCount > 0
                                        ? (0, l.jsx)(Y.Z, {
                                              withGuildIcon: _,
                                              channel: v,
                                              sortedThreadIds: I.threadIds,
                                              selectedChannel: null != a && (a.id === I.id || a.parent_id === v.id) ? a : null,
                                              selectedVoiceChannelId: (null == o ? void 0 : o.parent_id) === v.id ? c : null
                                          })
                                        : null
                                ]
                            },
                            T
                        );
                    case ei.d4z.GUILD_STAGE_VOICE:
                        var Z, A;
                        return (0, l.jsx)(
                            K.Z,
                            {
                                channel: v,
                                guild: i,
                                position: I.position,
                                selected: s === I.id,
                                connected: c === I.id,
                                collapsed: I.isCollapsed || C.isCollapsed,
                                voiceStates: null !== (Z = d[I.id]) && void 0 !== Z ? Z : [],
                                speakerVoiceStates: null !== (A = p[I.id]) && void 0 !== A ? A : [],
                                disableManageChannels: h,
                                isFavoriteCategory: x
                            },
                            T
                        );
                    case ei.d4z.GUILD_VOICE:
                        return (0, l.jsx)(
                            ee.Z,
                            {
                                channel: v,
                                guild: i,
                                position: I.position,
                                selected: s === I.id,
                                connected: c === I.id,
                                collapsed: I.isCollapsed || C.isCollapsed,
                                voiceStates: d[I.id],
                                subtitle: I.subtitle,
                                disableManageChannels: h,
                                showTutorial: I.isFirstVoiceChannel,
                                isFavoriteCategory: x,
                                withGuildIcon: _
                            },
                            T
                        );
                    case ei.d4z.GUILD_STORE:
                        return (0, l.jsx)(
                            q.Z,
                            {
                                channel: v,
                                guild: i,
                                position: I.position,
                                selected: s === I.id
                            },
                            T
                        );
                    case ei.d4z.GUILD_CATEGORY:
                        if (t !== u.voiceChannelsSectionNumber) return null;
                        return (0, l.jsx)(w.kw, { channel: v }, 'readonly-'.concat(v.id));
                    case ei.d4z.PUBLIC_THREAD:
                    case ei.d4z.PRIVATE_THREAD:
                        return (0, l.jsx)(
                            Q.Z,
                            {
                                channel: v,
                                guild: i,
                                position: I.position,
                                selected: s === I.id,
                                muted: I.isMuted,
                                subtitle: I.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: !1,
                                isFavoriteCategory: !1,
                                forceTopLevelThread: !0
                            },
                            T
                        );
                    default:
                        return null;
                }
            }),
            es(this, 'renderSectionFooter', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: i, voiceStates: r, selectedChannelId: a, selectedVoiceChannelId: s, optInEnabled: o, guildId: c } = this.props;
                return (0, l.jsx)(
                    G.ZP,
                    {
                        guildId: c,
                        guildChannels: n,
                        guildChannelsVersion: i,
                        sectionIndex: t,
                        voiceStates: r,
                        selectedChannelId: a,
                        selectedVoiceChannelId: s,
                        optInEnabled: o
                    },
                    (0, G.eo)(t, n, o)
                );
            }),
            es(this, 'getAnchorId', (e, t) => {
                var n, i, l;
                let { guildChannels: r } = this.props;
                if (e !== O.wZ) {
                    if (null == t) return e === O.p2 ? 'favorites-header' : e === r.recentsSectionNumber ? 'recents-header' : e === r.voiceChannelsSectionNumber ? 'voice-channels' : e === O.wd ? 'uncategorized-header' : null === (l = r.getNamedCategoryFromSection(e)) || void 0 === l ? void 0 : l.id;
                    if (!r.isPlaceholderRow(e, t)) return null === (i = r.getChannelFromSectionRow(e, t)) || void 0 === i ? void 0 : null === (n = i.channel) || void 0 === n ? void 0 : n.id;
                }
            }),
            es(this, 'testShouldSkipTutorial', () => {
                if (!A.Z.shouldShow('voice-conversations')) return;
                let { guildChannels: e } = this.props,
                    t = e.getFirstVoiceChannel();
                if (null == t) {
                    p.Z.dismiss('voice-conversations');
                    return;
                }
                let n = this._list;
                if (null != n) for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id)) !n.isItemVisible(e, i) && p.Z.dismiss('voice-conversations');
            });
    }
}
es(eo, 'contextType', o.qB);
let ec = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        a = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        { analyticsLocations: s } = (0, g.ZP)(m.Z.GUILD_CHANNEL_LIST),
        d = (0, u.e7)([R.Z], () => R.Z.getChannel(n)),
        h = (0, u.e7)([R.Z], () => R.Z.getChannel(i)),
        p = (0, u.e7)([P.Z], () => P.Z.getGuildId()),
        C = (0, v.DM)(t),
        I = r.useRef(null),
        E = r.useCallback((e, t) => {
            let n = I.current;
            if (null != n) {
                if (ei.Xyh.test(t) || (0, el.AB)(t))
                    n.scrollToChannel(t, !1, 2 * en.yE, () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus();
                        });
                    });
                else {
                    var i;
                    null === (i = document.querySelector(e)) || void 0 === i || i.focus();
                }
            }
        }, []),
        N = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = I.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        S = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = I.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        x = (0, c.ZP)({
            id: 'channels',
            defaultFocused: null != n ? n : void 0,
            isEnabled: a,
            setFocus: E,
            scrollToStart: N,
            scrollToEnd: S
        }),
        T = x.setFocus;
    r.useEffect(() => {
        null != n && T(n);
    }, [n, T]);
    let A = (0, Z.Z)(t);
    return (0, l.jsx)(g.Gt, {
        value: s,
        children: (0, l.jsx)(f.Z, {
            section: ei.jXE.GUILD_CHANNEL_LIST,
            children: (0, l.jsx)(o.bG, {
                navigator: x,
                children: (0, l.jsx)(eo, {
                    ...e,
                    listNavigator: x,
                    ref: I,
                    selectedChannel: d,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: A,
                    selectedGuildId: p,
                    optInEnabled: C
                })
            })
        })
    });
};
function eu(e) {
    let t = (0, D.o)(),
        { isFavoritesPerk: n } = (0, I.z)('favorites-channel-list');
    return (0, l.jsx)(ec, {
        ...e,
        guildChannels: t,
        guildChannelsVersion: 0,
        withGuildIcon: n
    });
}
function ed(e) {
    let t = (0, j.Z)(e.guild),
        n = (0, u.cj)([y.Z], () => y.Z.getGuild(e.guildId, { guildActionRows: t }));
    return (0, l.jsx)(ec, {
        ...e,
        ...n
    });
}
