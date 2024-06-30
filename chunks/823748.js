n(47120), n(653041);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(512722), o = n.n(r), c = n(392711), u = n.n(c), d = n(266067), h = n(848246), p = n(442837), m = n(704215), _ = n(952265), f = n(481060), E = n(239091), C = n(377993), g = n(457868), I = n(561472), x = n(36311), T = n(112724), N = n(902840), v = n(110924), S = n(317381), Z = n(82888), A = n(917107), M = n(358221), b = n(677601), R = n(541716), j = n(236091), L = n(663993), P = n(252618), O = n(201493), y = n(605236), D = n(174130), k = n(588322), U = n(517525), w = n(445384), B = n(613464), H = n(705563), G = n(730647), V = n(66999), F = n(826763), W = n(180216), z = n(51486), Y = n(168843), K = n(442336), q = n(57304), X = n(605953), Q = n(374306), J = n(984370), $ = n(910611), ee = n(915718), et = n(518311), en = n(180539), ei = n(882378), ea = n(207868), el = n(246919), es = n(754688), er = n(41776), eo = n(6242), ec = n(757692), eu = n(134483), ed = n(703656), eh = n(359110), ep = n(854709), em = n(14091), e_ = n(6025), ef = n(897473), eE = n(922482), eC = n(504185), eg = n(657218), eI = n(66556), ex = n(739830), eT = n(377929), eN = n(900157), ev = n(108427), eS = n(171368), eZ = n(346967), eA = n(524329), eM = n(995532), eb = n(738643), eR = n(433355), ej = n(592125), eL = n(703558), eP = n(486472), eO = n(731290), ey = n(430824), eD = n(158776), ek = n(768119), eU = n(944486), ew = n(914010), eB = n(594174), eH = n(979651), eG = n(368666), eV = n(74538), eF = n(792125), eW = n(933557), ez = n(287746), eY = n(325708), eK = n(335615), eq = n(992744), eX = n(923029), eQ = n(176505), eJ = n(981631), e$ = n(918559), e0 = n(354459), e1 = n(921944), e2 = n(440493), e7 = n(157925), e4 = n(689938), e3 = n(175803);
function e5(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let e6 = (0, L.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 434878)),
    webpackId: 434878,
    renderLoader: () => (0, i.jsx)('div', {
        className: e3.loader,
        children: (0, i.jsx)(f.Spinner, {})
    }),
    name: 'ForumChannel'
});
class e8 extends a.PureComponent {
    componentDidMount() {
        (0, ev.e)('guild_channel');
    }
    componentDidUpdate(e) {
        null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let {guild: a} = this.props;
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'), o()(null != a, 'Missing guild in Channel.openChannelContextMenu'), (0, E.jW)(e, async () => {
            let {default: e} = await n.e('24783').then(n.bind(n, 439635));
            return n => (0, i.jsx)(e, {
                ...n,
                channel: t,
                guild: a
            });
        });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'), (0, E.jW)(e, async () => {
            let {default: e} = await n.e('40157').then(n.bind(n, 422200));
            return n => (0, i.jsx)(e, {
                ...n,
                channel: t
            });
        });
    }
    openDMContextMenu(e, t) {
        o()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let a = eB.default.getUser(t.getRecipientId());
        o()(null != a, 'Missing user in Channel.openDMContextMenu'), (0, E.jW)(e, async () => {
            let {default: e} = await Promise.all([
                n.e('79695'),
                n.e('17400'),
                n.e('22036'),
                n.e('56826'),
                n.e('4793')
            ]).then(n.bind(n, 131404));
            return n => (0, i.jsx)(e, {
                ...n,
                user: a,
                channelSelected: !0,
                channel: t
            });
        });
    }
    shouldRenderCall() {
        let {
            channel: e,
            showCall: t,
            nsfwAllowed: n,
            nsfwAgree: i
        } = this.props;
        return (!(null == e ? void 0 : e.isNSFW()) || n && i) && t;
    }
    renderCall() {
        let {channel: e} = this.props;
        if (o()(null != e, 'Missing channel in Channel.renderCall'), !this.shouldRenderCall())
            return null;
        switch (e.type) {
        case eJ.d4z.GUILD_STAGE_VOICE:
            return (0, i.jsx)(eC.Z, { channel: e }, e.id);
        case eJ.d4z.GUILD_VOICE:
        case eJ.d4z.DM:
        case eJ.d4z.GROUP_DM:
        case eJ.d4z.PUBLIC_THREAD:
        case eJ.d4z.PRIVATE_THREAD:
            let t = this.props.height - 200;
            return (0, i.jsx)(b.Z, {
                channel: e,
                renderExternalHeader: this.renderHeaderBar,
                maxHeight: t
            }, 'call-'.concat(e.id));
        default:
            return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let {channel: e} = this.props, t = this.shouldRenderCall();
        if (o()(null != e, 'Missing channel in Channel.renderEmbeddedActivityPanel'), t)
            return null;
        let n = this.props.height - 200;
        return (0, i.jsx)(Z.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let {
            channel: e,
            nsfwAgree: t,
            guild: n,
            nsfwAllowed: a,
            needSubscriptionToAccess: l
        } = this.props;
        if (o()(null != e, 'Missing channel in Channel.renderChat'), l)
            return (o()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel()) ? (0, i.jsx)(F.Z, { guildId: n.id }) : (0, i.jsx)(G.l, {
                guildId: n.id,
                children: (0, i.jsx)(W.Z, {
                    channelId: e.id,
                    guildId: n.id
                })
            });
        if (e.isNSFW() && (!a || !t))
            return (0, i.jsx)(x.Z, { guild: n });
        if (e.isGuildVocal())
            return null;
        if (e.isDirectory())
            return o()(null != n, 'directory channels must exist within a guild'), (0, i.jsx)(O.Z, {
                channel: e,
                guild: n
            });
        if (e.isForumLikeChannel()) {
            o()(null != n, 'forum channels must exist within a guild');
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth
            };
            return (0, i.jsx)(e6, {
                channel: e,
                guild: n,
                sidebarState: t
            }, e.id);
        }
        return (0, i.jsx)(ez.Z, {
            channel: e,
            guild: n,
            chatInputType: R.I.NORMAL
        }, null != n ? n.id : 'home');
    }
    renderSidebar() {
        let {
            searchId: e,
            channel: t,
            parentChannel: n,
            guild: a,
            needSubscriptionToAccess: l,
            section: s,
            showCall: r,
            showActivityPanel: c
        } = this.props;
        if (o()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || l);
        else if (s === eJ.ULH.PROFILE && t.isPrivate() && !r && !c)
            return (0, i.jsx)(eZ.Z, {
                location: 'Channel',
                channel: t
            }, 'private-channel-profile-'.concat(t.id));
        else if (s === eJ.ULH.MEMBERS)
            switch (t.type) {
            case eJ.d4z.GROUP_DM:
                return (0, i.jsx)(C.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
            case eJ.d4z.GUILD_DIRECTORY:
            case eJ.d4z.GUILD_FORUM:
            case eJ.d4z.GUILD_MEDIA:
            case eJ.d4z.GUILD_ANNOUNCEMENT:
            case eJ.d4z.GUILD_TEXT:
                var u;
                let d = !0 === eJ.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (u = t.guild_id) && void 0 !== u ? u : t.id;
                return (0, i.jsx)(eK.Z, { channel: t }, 'channel-members-'.concat(d));
            case eJ.d4z.ANNOUNCEMENT_THREAD:
                if (null != n)
                    return (0, i.jsx)(eK.Z, { channel: n }, 'channel-members-'.concat(n.id));
                break;
            case eJ.d4z.PUBLIC_THREAD:
            case eJ.d4z.PRIVATE_THREAD:
                if (!t.isArchivedThread() && null != a)
                    return (0, i.jsx)(g.Z, {
                        channel: t,
                        guild: a
                    }, 'channel-members-'.concat(t.id));
            }
        else if (s === eJ.ULH.SEARCH && null != e)
            return (0, i.jsx)(em.Z, { searchId: e });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: t,
            hasModalOpen: a,
            showWelcomeModal: l,
            isLurking: s,
            isUnavailable: r,
            showRealNameModal: o
        } = this.props;
        return null == e || null == t || r || a ? null : (o && (0, f.openModalLazy)(async () => {
            let {default: e} = await n.e('53900').then(n.bind(n, 784280));
            return n => (0, i.jsx)(e, {
                ...n,
                guildId: t
            });
        }, {
            onCloseCallback: () => w.Z.viewPrompt(e2.r.REAL_NAME_PROMPT, t),
            modalKey: 'Guild Hub Real Name Modal'
        }), l && (0, f.openModalLazy)(async () => {
            let {default: e} = await n.e('77578').then(n.bind(n, 184782));
            return n => (0, i.jsx)(e, {
                ...n,
                guildId: t
            });
        }, {
            onCloseCallback: () => (0, eA.y0)(t, s),
            modalKey: 'Guild Welcome Screen Modal'
        }), null);
    }
    renderThreadSidebar() {
        let e;
        let {
            channel: t,
            section: n,
            channelSidebarState: a,
            guildSidebarState: l,
            nsfwAgree: s,
            nsfwAllowed: r,
            width: o
        } = this.props;
        if (null == l && null == a)
            return null;
        if (n === eJ.ULH.SIDEBAR_CHAT && null != a) {
            if ((null == t ? void 0 : t.isNSFW()) && (!r || !s))
                return null;
            switch (a.type) {
            case ef.tI.CREATE_THREAD:
                if (null == t ? void 0 : t.isForumLikeChannel())
                    return null;
                e = (0, i.jsx)(eg.Z, {
                    parentChannelId: a.parentChannelId,
                    parentMessageId: a.parentMessageId,
                    location: a.location
                });
                break;
            case ef.tI.VIEW_THREAD:
                let n = (null == t ? void 0 : t.isForumLikeChannel()) ? k.Z : eN.Z;
                e = (0, i.jsx)(n, { channelId: a.channelId });
                break;
            case ef.tI.VIEW_CHANNEL:
            case ef.tI.VIEW_MESSAGE_REQUEST:
            default:
                return null;
            }
        }
        if (null != l && null == e) {
            if (l.type === ef.jL.GUILD_MEMBER_MOD_VIEW) {
                let {
                    guildId: e,
                    userId: t
                } = l.details;
                return (0, i.jsx)('div', {
                    style: { width: eJ.$Y6 },
                    className: e3.guildSidebar,
                    children: (0, i.jsx)(B.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => e_.Z.closeGuildSidebar(e)
                    })
                });
            }
            return null;
        }
        if (null == e)
            return null;
        let c = (null == t ? void 0 : t.type) != null && eJ.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450, u = o - eJ.PrS - c;
        return (0, i.jsx)(eY.Z, {
            sidebarType: (null == t ? void 0 : t.type) != null && eJ.TPd.GUILD_THREADS_ONLY.has(t.type) ? eY.y.PostSidebar : eY.y.ThreadSidebar,
            maxWidth: u,
            onWidthChange: this.handleThreadSidebarResize,
            children: e
        });
    }
    render() {
        let {
                channel: e,
                guild: t,
                formattedChannelName: n,
                isUnavailable: a,
                layout: l,
                section: r,
                hasModalOpen: o,
                guildSidebarState: c,
                hasTextActivityInPanelMode: u
            } = this.props, {
                threadSidebarWidth: d,
                isThreadSidebarFloating: h
            } = this.state, p = this.shouldRenderCall();
        if (a)
            return (0, i.jsx)(eq.Z, {});
        if (null == e)
            return (0, i.jsx)(eX.Z, { channelId: this.props.channelId });
        let m = r === eJ.ULH.SIDEBAR_CHAT, _ = null != c && !m, f = !e.isForumLikeChannel() && !o, E = null == t ? void 0 : t.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(P.yY, {
                    location: E,
                    subsection: null != n ? n : void 0
                }),
                (0, i.jsxs)('div', {
                    className: s()(e3.chat, {
                        [e3.threadSidebarOpen]: m || _,
                        [e3.threadSidebarFloating]: m && h
                    }),
                    children: [
                        f ? (0, i.jsx)(I.Z, {
                            style: { right: m ? d : void 0 },
                            className: e3.uploadArea,
                            channel: e,
                            draftType: eL.d.ChannelMessage
                        }) : null,
                        p || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)('div', {
                            className: s()(e3.content, { [e3.noChat]: l === eJ.AEg.NO_CHAT }),
                            children: [
                                this.renderChat(),
                                this.renderSidebar()
                            ]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, i.jsx)(z.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e), e5(this, 'state', {
            topicExpanded: !1,
            threadSidebarWidth: void 0,
            isThreadSidebarFloating: !1
        }), e5(this, 'handleTitleParentClick', () => {
            let {parentChannel: e} = this.props;
            if (null != e)
                (0, eh.Kh)(e.id);
        }), e5(this, '_handleContextMenu', (e, t) => {
            switch (t.type) {
            case eJ.d4z.GUILD_VOICE:
            case eJ.d4z.GUILD_ANNOUNCEMENT:
            case eJ.d4z.GUILD_TEXT:
            case eJ.d4z.GUILD_FORUM:
            case eJ.d4z.GUILD_MEDIA:
                this.openChannelContextMenu(e, t);
                break;
            case eJ.d4z.ANNOUNCEMENT_THREAD:
            case eJ.d4z.PUBLIC_THREAD:
            case eJ.d4z.PRIVATE_THREAD:
                this.openThreadContextMenu(e, t);
                break;
            case eJ.d4z.DM:
                this.openDMContextMenu(e, t);
            }
        }), e5(this, 'handleContextMenu', e => {
            o()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
        }), e5(this, 'handleParentContextMenu', e => {
            o()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
        }), e5(this, 'handleThreadSidebarResize', (e, t) => {
            this.setState({
                threadSidebarWidth: e,
                isThreadSidebarFloating: t
            });
        }), e5(this, 'openUserProfile', () => {
            let {channel: e} = this.props;
            o()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'), (0, eS.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                analyticsLocation: { section: eJ.jXE.CHANNEL_HEADER }
            });
        }), e5(this, 'renderJoinRequestInterviewButtons', () => {
            let {channel: e} = this.props;
            return (null == e ? void 0 : e.hasFlag(eQ.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) ? (0, i.jsx)(H.Z, {
                channelId: e.id,
                showTrailingDivider: !0
            }) : null;
        }), e5(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
            let {
                inCall: e,
                voiceChannel: t
            } = this.props;
            return e ? (0, i.jsx)(j.Z, { channelId: null != t ? t.id : null }) : null;
        }), e5(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
            let {
                selectedParticipant: e,
                premiumIndicatorEnabled: t
            } = this.props;
            return (null == e ? void 0 : e.type) !== e0.fO.STREAM ? null : (0, i.jsx)(U.Z, {
                size: eG.ZP.Sizes.LARGE,
                participant: e,
                showQuality: !0,
                premiumIndicator: t
            }, 'live-indicator');
        }), e5(this, 'renderHeaderToolbar', () => {
            let {
                channel: e,
                parentChannel: t,
                isLurking: n,
                showCall: a,
                showActivityPanel: l
            } = this.props;
            o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
            let s = [];
            if (e.isSystemDM())
                return s;
            switch (e.type) {
            case eJ.d4z.GUILD_STAGE_VOICE:
            case eJ.d4z.GUILD_VOICE:
                break;
            case eJ.d4z.DM:
                s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, i.jsx)(ee.Z, { channel: e }, 'calls')), s.push((0, i.jsx)(q.Z, { channel: e }, 'pins')), s.push((0, i.jsx)(et.Z, {
                    channel: e,
                    tooltip: e4.Z.Messages.GROUP_DM_ADD_FRIENDS
                }, 'invite')), s.push((0, i.jsx)(en.Z, {
                    channel: e,
                    showCallOrActivityPanel: a || l
                }, 'profile')), s.push((0, i.jsx)(ei.Z, { channel: e }, 'safety_tools'));
                break;
            case eJ.d4z.GROUP_DM:
                if (s.push(this.renderJoinRequestInterviewButtons()), s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, i.jsx)(ee.Z, { channel: e }, 'calls')), s.push((0, i.jsx)(q.Z, { channel: e }, 'pins')), !e.isManaged()) {
                    let t = e4.Z.Messages.GROUP_DM_ADD_FRIENDS;
                    s.push((0, i.jsx)(et.Z, {
                        channel: e,
                        tooltip: t
                    }, 'invite'));
                }
                s.push((0, i.jsx)(Y.Z, { channelId: e.id }, 'members'));
                break;
            case eJ.d4z.ANNOUNCEMENT_THREAD:
            case eJ.d4z.PRIVATE_THREAD:
            case eJ.d4z.PUBLIC_THREAD:
                null != t && !t.isForumLikeChannel() && s.push((0, i.jsx)(eI.Z, { channel: t }, 'browser')), e.isVocalThread() && s.push((0, i.jsx)(ea.Z, { channel: e }, 'thread-call')), s.push((0, i.jsx)(ex.Z, { channel: e }, 'notifications')), s.push((0, i.jsx)(q.Z, { channel: e }, 'pins')), !e.isArchivedThread() && s.push((0, i.jsx)(Y.Z, { channelId: e.id }, 'members')), null != t && (0, N.Lp)(e) && s.push((0, i.jsx)(X.Z, { channel: e }, 'summaries')), s.push((0, i.jsx)(eT.Z, { channel: e }, 'threads-overflow'));
                break;
            case eJ.d4z.GUILD_ANNOUNCEMENT:
            case eJ.d4z.GUILD_TEXT:
                s.push((0, i.jsx)(D.Z, { channel: e }, 'favorites')), s.push((0, i.jsx)(eI.Z, { channel: e }, 'browser')), !n && s.push((0, i.jsx)(K.Z, { channel: e }, 'notifications')), s.push((0, i.jsx)(q.Z, { channel: e }, 'pins')), s.push((0, i.jsx)(Y.Z, { channelId: e.id }, 'members')), (0, N.Lp)(e) && s.push((0, i.jsx)(X.Z, { channel: e }, 'summaries'));
                break;
            case eJ.d4z.GUILD_FORUM:
            case eJ.d4z.GUILD_MEDIA:
                !n && (s.push((0, i.jsx)(Q.Z, { channel: e }, 'forum-onboarding')), s.push((0, i.jsx)(K.Z, { channel: e }, 'notifications'))), !__OVERLAY__ && s.push((0, i.jsx)(Y.Z, { channelId: e.id }, 'members'));
                break;
            case eJ.d4z.GUILD_DIRECTORY:
                s.push((0, i.jsx)(Y.Z, { channelId: e.id }, 'members'));
            }
            return s;
        }), e5(this, 'renderMobileToolbar', () => {
            let {channel: e} = this.props;
            o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
            let t = [];
            if (e.isSystemDM())
                return t;
            switch (e.type) {
            case eJ.d4z.GUILD_STAGE_VOICE:
            case eJ.d4z.GUILD_VOICE:
            case eJ.d4z.DM:
                break;
            case eJ.d4z.GROUP_DM:
                t.push((0, i.jsx)(Y.Z, { channelId: e.id }, 'members'));
                break;
            case eJ.d4z.ANNOUNCEMENT_THREAD:
            case eJ.d4z.PRIVATE_THREAD:
            case eJ.d4z.PUBLIC_THREAD:
                !e.isArchivedThread() && t.push((0, i.jsx)(Y.Z, { channelId: e.id }, 'members'));
                break;
            case eJ.d4z.GUILD_ANNOUNCEMENT:
            case eJ.d4z.GUILD_TEXT:
            case eJ.d4z.GUILD_FORUM:
            case eJ.d4z.GUILD_MEDIA:
            case eJ.d4z.GUILD_DIRECTORY:
                t.push((0, i.jsx)(Y.Z, { channelId: e.id }, 'members'));
            }
            return t;
        }), e5(this, 'renderFollowButton', () => {
            let {
                showFollowButton: e,
                channel: t
            } = this.props;
            return e ? (0, i.jsx)(f.Button, {
                size: f.Button.Sizes.MIN,
                color: f.Button.Colors.PRIMARY,
                className: e3.followButton,
                onClick: () => (0, f.openModalLazy)(async () => {
                    let {default: e} = await n.e('54642').then(n.bind(n, 720589));
                    return n => (0, i.jsx)(e, {
                        channel: t,
                        ...n
                    });
                }),
                children: e4.Z.Messages.FOLLOW
            }) : null;
        }), e5(this, 'renderHeaderBar', () => {
            let {
                channel: e,
                channelName: t,
                parentChannel: n,
                guild: a,
                guildId: l,
                showCall: r,
                showActivityPanel: c,
                hasVideo: u,
                headerGuildBreadcrumbPosition: d,
                isFavorites: h
            } = this.props;
            o()(null != e, 'Missing channel in Channel.renderHeaderBar'), o()(null != t, 'Should not be null if channel is not null.');
            let p = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0, m = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
            return (0, i.jsxs)('div', {
                className: e3.subtitleContainer,
                children: [
                    (0, i.jsxs)(J.Z, {
                        guildId: l,
                        channelId: e.id,
                        channelType: e.type,
                        hideSearch: e.isDirectory() || h && !(0, ep.X)(),
                        showDivider: h && !(0, ep.X)(),
                        toolbar: this.renderHeaderToolbar(),
                        mobileToolbar: this.renderMobileToolbar(),
                        className: s()(e3.title, u && r ? (0, eF.Q)(eJ.BRd.DARK) : null),
                        transparent: r || c,
                        'aria-label': e4.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                        children: [
                            'left' === d && (0, i.jsx)($.TS, {
                                channel: e,
                                guild: a,
                                caretPosition: 'right'
                            }),
                            (0, $.ud)({
                                channel: e,
                                channelName: t,
                                parentChannel: n,
                                guild: a,
                                hasVideo: u,
                                handleContextMenu: this.handleContextMenu,
                                handleParentContextMenu: this.handleParentContextMenu,
                                handleClick: p,
                                handleParentClick: m,
                                renderFollowButton: this.renderFollowButton
                            }),
                            'right' === d && (0, i.jsx)($.TS, {
                                channel: e,
                                guild: a,
                                caretPosition: 'left'
                            }),
                            (0, $.v0)(e, a)
                        ]
                    }, 'header-'.concat(e.id)),
                    (0, i.jsx)(eu.Z, { channelId: e.id })
                ]
            });
        });
    }
}
let e9 = (0, T.Z)(e8);
t.Z = a.memo(function (e) {
    var t;
    let {providedChannel: n} = e, [l, s] = a.useState(null), r = (0, p.e7)([eU.Z], () => eU.Z.getChannelId()), o = (0, p.e7)([eU.Z], () => eU.Z.getVoiceChannelId()), c = (0, p.e7)([ej.Z], () => null != n ? n : ej.Z.getChannel(r), [
            r,
            n
        ]), f = (0, p.e7)([ej.Z], () => ej.Z.getChannel(o), [o]), E = null == c ? void 0 : c.parent_id, C = (0, p.e7)([ej.Z], () => ej.Z.getChannel(E), [E]), g = (0, p.e7)([ey.Z], () => ey.Z.getGuild(null == c ? void 0 : c.guild_id), [c]), {needSubscriptionToAccess: I} = (0, V.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0), x = (0, p.e7)([M.Z], () => {
            let e = null != r ? M.Z.getParticipants(r) : [], t = null != r ? M.Z.getActivityParticipants(r) : [];
            return e.length - t.length > 0;
        }, [r]), T = (0, p.e7)([S.ZP], () => {
            var e;
            return S.ZP.getSelfEmbeddedActivityForChannel(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : eJ.lds);
        }), Z = (0, p.e7)([S.ZP], () => S.ZP.getActivityPanelMode()), b = null != T && !(0, A.Z)(null == c ? void 0 : c.id) && Z === e$.Ez.PANEL, R = (0, p.e7)([eH.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eH.Z.getVoiceStatesForChannel(c.id)), [c]), j = null != c && c.isPrivate() && !b && x, L = (null == c ? void 0 : c.isGuildVocal()) || j || R, {welcomeModalChannelId: P} = (0, d.TH)(), O = (0, p.e7)([er.Z], () => null != c && er.Z.isLurking(c.guild_id), [c]), D = (0, p.e7)([eM.Z], () => eM.Z.hasSeen(null == c ? void 0 : c.guild_id, O), [
            c,
            O
        ]), k = (0, p.e7)([
            M.Z,
            S.ZP
        ], () => null != S.ZP.getConnectedActivityChannelId() && S.ZP.getActivityPanelMode() === e$.Ez.PANEL ? S.ZP.getFocusedLayout() === e$.MI.NO_CHAT ? eJ.AEg.NO_CHAT : eJ.AEg.NORMAL : null != r ? M.Z.getLayout(r) : eJ.AEg.NORMAL, [r]), U = (0, p.e7)([M.Z], () => null != c ? M.Z.getSelectedParticipant(c.id) : null), w = (0, p.e7)([eB.default], () => eB.default.getCurrentUser()), B = (0, el.Z)(g), H = (0, eb.Z)(P, null == g ? void 0 : g.id), {
            section: G,
            channelSidebarState: F
        } = (0, p.cj)([eR.ZP], () => ({
            section: eR.ZP.getSection(r, null == c ? void 0 : c.isDM()),
            channelSidebarState: eR.ZP.getSidebarState(r)
        }), [
            r,
            c
        ]), W = null == g ? void 0 : g.id, z = (0, p.e7)([eR.ZP], () => eR.ZP.getGuildSidebarState(W), [W]), Y = (0, p.e7)([ew.Z], () => ew.Z.getGuildId()) === eJ.I_8, K = (0, eV.So)(h.q.STREAM_HIGH_QUALITY), q = (0, ec.o)(U, w), X = (0, eo.lL)('Channel', !0, w, q), Q = (0, eW.ZP)(c), J = (0, eW.ZP)(c, !0), $ = null != c && o === c.id, ee = null != c && c.isGuildStageVoice();
    a.useEffect(() => {
        var e, t, n;
        let i = (0, ed.s1)();
        if ((null == i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.state) === e7.Df) {
            let {channelId: e} = null !== (n = (0, es.Qj)(null == i ? void 0 : null === (t = i.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
            null != e && s(e);
        }
    }, []), a.useEffect(() => {
        null != l && null != c && ee && c.id === l && !$ && ((0, eE.Cq)(c), s(null));
    }, [
        l,
        ee
    ]);
    let et = (0, N.ts)(c), en = null != c && c.isPrivate(), ei = (0, v.Z)(en), ea = (0, v.Z)(null == c ? void 0 : c.id);
    a.useEffect(() => {
        let e = ei && !en, t = ei && en && (null == c ? void 0 : c.id) !== ea;
        (e || t) && (0, y.EW)(m.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e1.L.AUTO });
    }, [
        null == c ? void 0 : c.id,
        ea,
        en,
        ei
    ]);
    let eu = (0, _.f9)();
    return (0, i.jsx)(e9, {
        guildId: null == c ? void 0 : c.guild_id,
        channelId: r,
        channel: c,
        channelName: Q,
        formattedChannelName: J,
        parentChannel: C,
        voiceChannel: f,
        layout: k,
        needSubscriptionToAccess: I,
        isLurking: O,
        hasModalOpen: eu,
        section: G,
        channelSidebarState: F,
        guildSidebarState: z,
        guild: g,
        searchId: (0, p.e7)([ek.Z], () => ek.Z.getCurrentSearchId()),
        showCall: !I && L,
        showActivityPanel: b,
        nsfwAgree: (0, p.e7)([eO.Z], () => eO.Z.didAgree(null == c ? void 0 : c.guild_id)),
        isMobile: (0, p.e7)([eD.Z], () => (null == c ? void 0 : c.type) === eJ.d4z.DM && eD.Z.isMobileOnline(c.getRecipientId()), [c]),
        isUnavailable: (0, p.e7)([eP.Z], () => (null == c ? void 0 : c.guild_id) != null && eP.Z.isUnavailable(c.guild_id), [c]),
        showRealNameModal: B,
        showWelcomeModal: !D && H,
        showFollowButton: (null == c ? void 0 : c.type) === eJ.d4z.GUILD_ANNOUNCEMENT && (null == g ? void 0 : g.hasFeature(eJ.oNc.NEWS)) || !1,
        ...(0, p.cj)([eH.Z], () => ({ hasVideo: null != c && eH.Z.hasVideo(c.id) }), [c]),
        inCall: $,
        selectedParticipant: U,
        nsfwAllowed: (null == w ? void 0 : w.nsfwAllowed) === !0,
        showChannelSummaries: et,
        isFavorites: Y,
        headerGuildBreadcrumbPosition: Y ? 'left' : 'right',
        premiumIndicatorEnabled: K || X.enabled,
        hasTextActivityInPanelMode: b
    });
});
