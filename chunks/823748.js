"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("392711"),
  d = n.n(u),
  c = n("613828"),
  f = n("848246"),
  h = n("442837"),
  m = n("524437"),
  p = n("952265"),
  E = n("481060"),
  C = n("239091"),
  g = n("377993"),
  S = n("457868"),
  _ = n("561472"),
  T = n("36311"),
  I = n("112724"),
  A = n("902840"),
  N = n("110924"),
  v = n("317381"),
  x = n("82888"),
  M = n("917107"),
  R = n("358221"),
  L = n("677601"),
  y = n("541716"),
  O = n("236091"),
  j = n("663993"),
  P = n("252618"),
  D = n("201493"),
  b = n("605236"),
  U = n("174130"),
  F = n("588322"),
  w = n("517525"),
  k = n("445384"),
  H = n("613464"),
  B = n("705563"),
  G = n("730647"),
  V = n("66999"),
  W = n("826763"),
  Y = n("180216"),
  z = n("51486"),
  K = n("168843"),
  Z = n("442336"),
  q = n("57304"),
  X = n("605953"),
  Q = n("640105"),
  J = n("984370"),
  $ = n("910611"),
  ee = n("915718"),
  et = n("518311"),
  en = n("180539"),
  ea = n("882378"),
  el = n("207868"),
  es = n("246919"),
  ei = n("754688"),
  er = n("41776"),
  eo = n("386542"),
  eu = n("134483"),
  ed = n("703656"),
  ec = n("359110"),
  ef = n("854709"),
  eh = n("14091"),
  em = n("6025"),
  ep = n("897473"),
  eE = n("922482"),
  eC = n("504185"),
  eg = n("657218"),
  eS = n("66556"),
  e_ = n("739830"),
  eT = n("377929"),
  eI = n("900157"),
  eA = n("108427"),
  eN = n("171368"),
  ev = n("123579"),
  ex = n("524329"),
  eM = n("995532"),
  eR = n("738643"),
  eL = n("433355"),
  ey = n("592125"),
  eO = n("703558"),
  ej = n("486472"),
  eP = n("731290"),
  eD = n("430824"),
  eb = n("158776"),
  eU = n("768119"),
  eF = n("944486"),
  ew = n("914010"),
  ek = n("594174"),
  eH = n("979651"),
  eB = n("368666"),
  eG = n("792125"),
  eV = n("933557"),
  eW = n("287746"),
  eY = n("325708"),
  ez = n("335615"),
  eK = n("992744"),
  eZ = n("923029"),
  eq = n("176505"),
  eX = n("981631"),
  eQ = n("918559"),
  eJ = n("354459"),
  e$ = n("921944"),
  e0 = n("440493"),
  e1 = n("157925"),
  e2 = n("689938"),
  e4 = n("749185");

function e3(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let e7 = (0, j.makeLazy)({
  createPromise: () => Promise.all([n.e("99387"), n.e("49131")]).then(n.bind(n, "434878")),
  webpackId: "434878",
  renderLoader: () => (0, a.jsx)("div", {
    className: e4.loader,
    children: (0, a.jsx)(E.Spinner, {})
  }),
  name: "ForumChannel"
});
class e5 extends l.PureComponent {
  componentDidMount() {
    (0, eA.trackAppUIViewed)("guild_channel")
  }
  componentDidUpdate(e) {
    null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({
      topicExpanded: !1
    }), this.openChannelModal()
  }
  openChannelContextMenu(e, t) {
    let {
      guild: l
    } = this.props;
    o()(null != t, "Missing channel in Channel.openChannelContextMenu"), o()(null != l, "Missing guild in Channel.openChannelContextMenu"), (0, C.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("24783")]).then(n.bind(n, "439635"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t,
        guild: l
      })
    })
  }
  openThreadContextMenu(e, t) {
    o()(null != t, "Missing channel in Channel.openChannelContextMenu"), (0, C.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("78650").then(n.bind(n, "422200"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t
      })
    })
  }
  openDMContextMenu(e, t) {
    o()(null != t, "Missing channel in Channel.openDMContextMenu");
    let l = ek.default.getUser(t.getRecipientId());
    o()(null != l, "Missing user in Channel.openDMContextMenu"), (0, C.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("22036"), n.e("56826")]).then(n.bind(n, "131404"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: l,
        channelSelected: !0,
        channel: t
      })
    })
  }
  renderCall() {
    let {
      channel: e,
      showCall: t,
      nsfwAllowed: n,
      nsfwAgree: l
    } = this.props;
    if (o()(null != e, "Missing channel in Channel.renderCall"), (null == e ? void 0 : e.isNSFW()) && (!n || !l) || !t) return null;
    switch (e.type) {
      case eX.ChannelTypes.GUILD_STAGE_VOICE:
        return (0, a.jsx)(eC.default, {
          channel: e
        }, e.id);
      case eX.ChannelTypes.GUILD_VOICE:
      case eX.ChannelTypes.DM:
      case eX.ChannelTypes.GROUP_DM:
      case eX.ChannelTypes.PUBLIC_THREAD:
      case eX.ChannelTypes.PRIVATE_THREAD:
        let s = this.props.height - 200;
        return (0, a.jsx)(L.default, {
          channel: e,
          renderExternalHeader: this.renderHeaderBar,
          maxHeight: s
        }, "call-".concat(e.id));
      default:
        return null
    }
  }
  renderEmbeddedActivityPanel() {
    let e = this.props.height - 200;
    return (0, a.jsx)(x.default, {
      maxHeight: e,
      renderExternalHeader: this.renderHeaderBar
    })
  }
  renderChat() {
    let {
      channel: e,
      nsfwAgree: t,
      guild: n,
      nsfwAllowed: l,
      needSubscriptionToAccess: s
    } = this.props;
    if (o()(null != e, "Missing channel in Channel.renderChat"), s) return (o()(null != n, "premium channels must exist within a guild"), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel()) ? (0, a.jsx)(W.default, {
      guildId: n.id
    }) : (0, a.jsx)(G.GroupListingsFetchContextProvider, {
      guildId: n.id,
      children: (0, a.jsx)(Y.default, {
        channelId: e.id,
        guildId: n.id
      })
    });
    if (e.isNSFW() && (!l || !t)) return (0, a.jsx)(T.default, {
      guild: n
    });
    if (e.isGuildVocal()) return null;
    if (e.isDirectory()) return o()(null != n, "directory channels must exist within a guild"), (0, a.jsx)(D.default, {
      channel: e,
      guild: n
    });
    if (e.isForumLikeChannel()) {
      o()(null != n, "forum channels must exist within a guild");
      let t = {
        isThreadSidebarFloating: this.state.isThreadSidebarFloating,
        threadSidebarWidth: this.state.threadSidebarWidth
      };
      return (0, a.jsx)(e7, {
        channel: e,
        guild: n,
        sidebarState: t
      }, e.id)
    }
    return (0, a.jsx)(eW.default, {
      channel: e,
      guild: n,
      chatInputType: y.ChatInputTypes.NORMAL
    }, null != n ? n.id : "home")
  }
  renderSidebar() {
    let {
      searchId: e,
      channel: t,
      parentChannel: n,
      guild: l,
      needSubscriptionToAccess: s,
      section: i,
      showCall: r
    } = this.props;
    if (o()(null != t, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s);
    else if (i === eX.ChannelSections.PROFILE && t.isPrivate()) return (0, a.jsx)(ev.default, {
      channel: t,
      showCall: r
    }, "private-channel-profile-".concat(t.id));
    else if (i === eX.ChannelSections.MEMBERS) switch (t.type) {
      case eX.ChannelTypes.GROUP_DM:
        return (0, a.jsx)(g.default, {
          channel: t
        }, "private-channel-recipients-".concat(t.id));
      case eX.ChannelTypes.GUILD_DIRECTORY:
      case eX.ChannelTypes.GUILD_FORUM:
      case eX.ChannelTypes.GUILD_MEDIA:
      case eX.ChannelTypes.GUILD_ANNOUNCEMENT:
      case eX.ChannelTypes.GUILD_TEXT:
        var u;
        let d = !0 === eX.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (u = t.guild_id) && void 0 !== u ? u : t.id;
        return (0, a.jsx)(ez.default, {
          channel: t
        }, "channel-members-".concat(d));
      case eX.ChannelTypes.ANNOUNCEMENT_THREAD:
        if (null != n) return (0, a.jsx)(ez.default, {
          channel: n
        }, "channel-members-".concat(n.id));
        break;
      case eX.ChannelTypes.PUBLIC_THREAD:
      case eX.ChannelTypes.PRIVATE_THREAD:
        if (!t.isArchivedThread() && null != l) return (0, a.jsx)(S.default, {
          channel: t,
          guild: l
        }, "channel-members-".concat(t.id))
    } else if (i === eX.ChannelSections.SEARCH && null != e) return (0, a.jsx)(eh.default, {
      searchId: e
    });
    return null
  }
  openChannelModal() {
    let {
      channel: e,
      guildId: t,
      hasModalOpen: l,
      showWelcomeModal: s,
      isLurking: i,
      isUnavailable: r,
      showRealNameModal: o
    } = this.props;
    return null == e || null == t || r || l ? null : (o && (0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("57372")]).then(n.bind(n, "784280"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => k.default.viewPrompt(e0.GuildPrompts.REAL_NAME_PROMPT, t),
      modalKey: "Guild Hub Real Name Modal"
    }), s && (0, E.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("77578")]).then(n.bind(n, "184782"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => (0, ex.welcomeScreenViewed)(t, i),
      modalKey: "Guild Welcome Screen Modal"
    }), null)
  }
  renderThreadSidebar() {
    let e;
    let {
      channel: t,
      section: n,
      channelSidebarState: l,
      guildSidebarState: s,
      nsfwAgree: i,
      nsfwAllowed: r,
      width: o
    } = this.props;
    if (null == s && null == l) return null;
    if (n === eX.ChannelSections.SIDEBAR_CHAT && null != l) {
      if ((null == t ? void 0 : t.isNSFW()) && (!r || !i)) return null;
      switch (l.type) {
        case ep.SidebarType.CREATE_THREAD:
          if (null == t ? void 0 : t.isForumLikeChannel()) return null;
          e = (0, a.jsx)(eg.default, {
            parentChannelId: l.parentChannelId,
            parentMessageId: l.parentMessageId,
            location: l.location
          });
          break;
        case ep.SidebarType.VIEW_THREAD:
          let n = (null == t ? void 0 : t.isForumLikeChannel()) ? F.default : eI.default;
          e = (0, a.jsx)(n, {
            channelId: l.channelId
          });
          break;
        case ep.SidebarType.VIEW_CHANNEL:
        case ep.SidebarType.VIEW_MESSAGE_REQUEST:
        default:
          return null
      }
    }
    if (null != s && null == e) {
      if (s.type === ep.GuildSidebarType.GUILD_MEMBER_MOD_VIEW) {
        let {
          guildId: e,
          userId: t
        } = s.details;
        return (0, a.jsx)("div", {
          style: {
            width: eX.DEFAULT_CHAT_SIDEBAR_WIDTH
          },
          children: (0, a.jsx)(H.default, {
            guildId: e,
            userId: t,
            onClose: () => em.default.closeGuildSidebar(e)
          })
        })
      } else return null
    }
    if (null == e) return null;
    let u = (null == t ? void 0 : t.type) != null && eX.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
      d = o - eX.CHANNEL_SIDEBAR_WIDTH - u;
    return (0, a.jsx)(eY.default, {
      sidebarType: (null == t ? void 0 : t.type) != null && eX.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? eY.ChatSidebarType.PostSidebar : eY.ChatSidebarType.ThreadSidebar,
      maxWidth: d,
      onWidthChange: this.handleThreadSidebarResize,
      children: e
    })
  }
  render() {
    let {
      channel: e,
      guild: t,
      formattedChannelName: n,
      showCall: l,
      isUnavailable: s,
      layout: r,
      section: o,
      hasModalOpen: u,
      guildSidebarState: d,
      hasTextActivityInPanelMode: c
    } = this.props, {
      threadSidebarWidth: f,
      isThreadSidebarFloating: h
    } = this.state;
    if (s) return (0, a.jsx)(eK.default, {});
    if (null == e) return (0, a.jsx)(eZ.default, {
      channelId: this.props.channelId
    });
    let m = o === eX.ChannelSections.SIDEBAR_CHAT,
      p = null != d && !m,
      E = !e.isForumLikeChannel() && !u,
      C = null == t ? void 0 : t.name;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(P.AppPageTitle, {
        location: C,
        subsection: null != n ? n : void 0
      }), (0, a.jsxs)("div", {
        className: i()(e4.chat, {
          [e4.threadSidebarOpen]: m || p,
          [e4.threadSidebarFloating]: m && h
        }),
        children: [E ? (0, a.jsx)(_.default, {
          style: {
            right: m ? f : void 0
          },
          className: e4.uploadArea,
          channel: e,
          draftType: eO.DraftType.ChannelMessage
        }) : null, l || e.isPrivate() && c ? null : this.renderHeaderBar(), this.renderCall(), this.renderEmbeddedActivityPanel(), (0, a.jsxs)("div", {
          className: i()(e4.content, {
            [e4.noChat]: r === eX.ChannelLayouts.NO_CHAT
          }),
          children: [this.renderChat(), this.renderSidebar()]
        })]
      }), this.renderThreadSidebar(), (0, a.jsx)(z.default, {})]
    })
  }
  constructor(...e) {
    super(...e), e3(this, "state", {
      topicExpanded: !1,
      threadSidebarWidth: void 0,
      isThreadSidebarFloating: !1
    }), e3(this, "handleTitleParentClick", () => {
      let {
        parentChannel: e
      } = this.props;
      null != e && (0, ec.transitionToChannel)(e.id)
    }), e3(this, "_handleContextMenu", (e, t) => {
      switch (t.type) {
        case eX.ChannelTypes.GUILD_VOICE:
        case eX.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eX.ChannelTypes.GUILD_TEXT:
        case eX.ChannelTypes.GUILD_FORUM:
        case eX.ChannelTypes.GUILD_MEDIA:
          this.openChannelContextMenu(e, t);
          break;
        case eX.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eX.ChannelTypes.PUBLIC_THREAD:
        case eX.ChannelTypes.PRIVATE_THREAD:
          this.openThreadContextMenu(e, t);
          break;
        case eX.ChannelTypes.DM:
          this.openDMContextMenu(e, t)
      }
    }), e3(this, "handleContextMenu", e => {
      o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"), this._handleContextMenu(e, this.props.channel)
    }), e3(this, "handleParentContextMenu", e => {
      o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"), this._handleContextMenu(e, this.props.parentChannel)
    }), e3(this, "handleThreadSidebarResize", (e, t) => {
      this.setState({
        threadSidebarWidth: e,
        isThreadSidebarFloating: t
      })
    }), e3(this, "openUserProfile", () => {
      let {
        channel: e
      } = this.props;
      o()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"), (0, eN.openUserProfileModal)({
        userId: e.getRecipientId(),
        guildId: e.guild_id,
        channelId: e.id,
        analyticsLocation: {
          section: eX.AnalyticsSections.CHANNEL_HEADER
        }
      })
    }), e3(this, "renderJoinRequestInterviewButtons", () => {
      let {
        channel: e
      } = this.props;
      return (null == e ? void 0 : e.hasFlag(eq.ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) ? (0, a.jsx)(B.default, {
        channelId: e.id,
        showTrailingDivider: !0
      }) : null
    }), e3(this, "renderClipsEnabledIndicatorToolbarItem", () => {
      let {
        inCall: e,
        voiceChannel: t
      } = this.props;
      return e ? (0, a.jsx)(O.default, {
        channelId: null != t ? t.id : null
      }) : null
    }), e3(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
      let {
        selectedParticipant: e,
        perkDemoEnabled: t
      } = this.props;
      return (null == e ? void 0 : e.type) !== eJ.ParticipantTypes.STREAM ? null : (0, a.jsx)(w.default, {
        size: eB.default.Sizes.LARGE,
        participant: e,
        showQuality: !0,
        premiumIndicator: t
      }, "live-indicator")
    }), e3(this, "renderHeaderToolbar", () => {
      let {
        channel: e,
        parentChannel: t,
        isLurking: n,
        showCall: l
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let s = [];
      if (e.isSystemDM()) return s;
      switch (e.type) {
        case eX.ChannelTypes.GUILD_STAGE_VOICE:
        case eX.ChannelTypes.GUILD_VOICE:
          break;
        case eX.ChannelTypes.DM:
          s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)(ee.default, {
            channel: e
          }, "calls")), s.push((0, a.jsx)(q.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)(et.default, {
            channel: e,
            tooltip: e2.default.Messages.GROUP_DM_ADD_FRIENDS
          }, "invite")), s.push((0, a.jsx)(en.default, {
            channel: e,
            showCall: l
          }, "profile")), s.push((0, a.jsx)(ea.default, {
            channel: e
          }, "safety_tools"));
          break;
        case eX.ChannelTypes.GROUP_DM:
          if (s.push(this.renderJoinRequestInterviewButtons()), s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)(ee.default, {
              channel: e
            }, "calls")), s.push((0, a.jsx)(q.default, {
              channel: e
            }, "pins")), !e.isManaged()) {
            let t = e2.default.Messages.GROUP_DM_ADD_FRIENDS;
            s.push((0, a.jsx)(et.default, {
              channel: e,
              tooltip: t
            }, "invite"))
          }
          s.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eX.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eX.ChannelTypes.PRIVATE_THREAD:
        case eX.ChannelTypes.PUBLIC_THREAD:
          null != t && !t.isForumLikeChannel() && s.push((0, a.jsx)(eS.default, {
            channel: t
          }, "browser")), e.isVocalThread() && s.push((0, a.jsx)(el.default, {
            channel: e
          }, "thread-call")), s.push((0, a.jsx)(e_.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(q.default, {
            channel: e
          }, "pins")), !e.isArchivedThread() && s.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members")), null != t && (0, A.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(X.default, {
            channel: e
          }, "summaries")), s.push((0, a.jsx)(eT.default, {
            channel: e
          }, "threads-overflow"));
          break;
        case eX.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eX.ChannelTypes.GUILD_TEXT:
          s.push((0, a.jsx)(U.default, {
            channel: e
          }, "favorites")), s.push((0, a.jsx)(eS.default, {
            channel: e
          }, "browser")), !n && s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(q.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members")), (0, A.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(X.default, {
            channel: e
          }, "summaries"));
          break;
        case eX.ChannelTypes.GUILD_FORUM:
        case eX.ChannelTypes.GUILD_MEDIA:
          !n && (s.push((0, a.jsx)(Q.default, {
            channel: e
          }, "forum-onboarding")), s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "notifications"))), !__OVERLAY__ && s.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eX.ChannelTypes.GUILD_DIRECTORY:
          s.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"))
      }
      return s
    }), e3(this, "renderMobileToolbar", () => {
      let {
        channel: e
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let t = [];
      if (e.isSystemDM()) return t;
      switch (e.type) {
        case eX.ChannelTypes.GUILD_STAGE_VOICE:
        case eX.ChannelTypes.GUILD_VOICE:
        case eX.ChannelTypes.DM:
          break;
        case eX.ChannelTypes.GROUP_DM:
          t.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eX.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eX.ChannelTypes.PRIVATE_THREAD:
        case eX.ChannelTypes.PUBLIC_THREAD:
          !e.isArchivedThread() && t.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"));
          break;
        case eX.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eX.ChannelTypes.GUILD_TEXT:
        case eX.ChannelTypes.GUILD_FORUM:
        case eX.ChannelTypes.GUILD_MEDIA:
        case eX.ChannelTypes.GUILD_DIRECTORY:
          t.push((0, a.jsx)(K.default, {
            channelId: e.id
          }, "members"))
      }
      return t
    }), e3(this, "renderFollowButton", () => {
      let {
        showFollowButton: e,
        channel: t
      } = this.props;
      return e ? (0, a.jsx)(E.Button, {
        size: E.Button.Sizes.MIN,
        color: E.Button.Colors.PRIMARY,
        className: e4.followButton,
        onClick: () => (0, E.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("83816")]).then(n.bind(n, "720589"));
          return n => (0, a.jsx)(e, {
            channel: t,
            ...n
          })
        }),
        children: e2.default.Messages.FOLLOW
      }) : null
    }), e3(this, "renderHeaderBar", () => {
      let {
        channel: e,
        channelName: t,
        parentChannel: n,
        guild: l,
        guildId: s,
        showCall: r,
        hasTextActivityInPanelMode: u,
        hasVideo: d,
        headerGuildBreadcrumbPosition: c,
        isFavorites: f
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderBar"), o()(null != t, "Should not be null if channel is not null.");
      let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
        m = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
      return (0, a.jsxs)("div", {
        className: e4.subtitleContainer,
        children: [(0, a.jsxs)(J.default, {
          guildId: s,
          channelId: e.id,
          channelType: e.type,
          hideSearch: e.isDirectory() || f && !(0, ef.isFavoriteSearchEnabled)(),
          showDivider: f && !(0, ef.isFavoriteSearchEnabled)(),
          toolbar: this.renderHeaderToolbar(),
          mobileToolbar: this.renderMobileToolbar(),
          className: i()(e4.title, d && r ? (0, eG.getThemeClass)(eX.ThemeTypes.DARK) : null),
          transparent: r || u && e.isPrivate(),
          "aria-label": e2.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
          children: ["left" === c && (0, a.jsx)($.HeaderGuildBreadcrumb, {
            channel: e,
            guild: l,
            caretPosition: "right"
          }), (0, $.renderTitle)({
            channel: e,
            channelName: t,
            parentChannel: n,
            guild: l,
            hasVideo: d,
            handleContextMenu: this.handleContextMenu,
            handleParentContextMenu: this.handleParentContextMenu,
            handleClick: h,
            handleParentClick: m,
            renderFollowButton: this.renderFollowButton
          }), "right" === c && (0, a.jsx)($.HeaderGuildBreadcrumb, {
            channel: e,
            guild: l,
            caretPosition: "left"
          }), (0, $.renderTopic)(e, l)]
        }, "header-".concat(e.id)), (0, a.jsx)(eu.default, {
          channelId: e.id
        })]
      })
    })
  }
}
let e9 = (0, I.default)(e5);
t.default = l.memo(function(e) {
  var t;
  let {
    providedChannel: n
  } = e, [s, i] = l.useState(null), r = (0, h.useStateFromStores)([eF.default], () => eF.default.getChannelId()), o = (0, h.useStateFromStores)([eF.default], () => eF.default.getVoiceChannelId()), u = (0, h.useStateFromStores)([ey.default], () => null != n ? n : ey.default.getChannel(r), [r, n]), E = (0, h.useStateFromStores)([ey.default], () => ey.default.getChannel(o), [o]), C = null == u ? void 0 : u.parent_id, g = (0, h.useStateFromStores)([ey.default], () => ey.default.getChannel(C), [C]), S = (0, h.useStateFromStores)([eD.default], () => eD.default.getGuild(null == u ? void 0 : u.guild_id), [u]), {
    needSubscriptionToAccess: _
  } = (0, V.default)(null !== (t = null == u ? void 0 : u.id) && void 0 !== t ? t : void 0), T = (0, h.useStateFromStores)([R.default], () => {
    let e = null != r ? R.default.getParticipants(r) : [],
      t = null != r ? R.default.getActivityParticipants(r) : [];
    return e.length - t.length > 0
  }, [r]), I = (0, h.useStateFromStores)([v.default], () => {
    var e;
    return v.default.getSelfEmbeddedActivityForChannel(null !== (e = null == u ? void 0 : u.id) && void 0 !== e ? e : eX.EMPTY_STRING_SNOWFLAKE_ID)
  }), x = (0, h.useStateFromStores)([v.default], () => v.default.getActivityPanelMode()), L = null != I && !(0, M.default)(null == u ? void 0 : u.id) && x === eQ.ActivityPanelModes.PANEL, y = (0, h.useStateFromStores)([eH.default], () => null != u && u.isVocalThread() && !d().isEmpty(eH.default.getVoiceStatesForChannel(u.id)), [u]), O = (null == u ? void 0 : u.isGuildVocal()) || L && !(null == u ? void 0 : u.isPrivate()) || T || y, {
    welcomeModalChannelId: j
  } = (0, c.useLocation)(), P = (0, h.useStateFromStores)([er.default], () => null != u && er.default.isLurking(u.guild_id), [u]), D = (0, h.useStateFromStores)([eM.default], () => eM.default.hasSeen(null == u ? void 0 : u.guild_id, P), [u, P]), U = (0, h.useStateFromStores)([R.default, v.default], () => null != v.default.getConnectedActivityChannelId() && v.default.getActivityPanelMode() === eQ.ActivityPanelModes.PANEL ? v.default.getFocusedLayout() === eQ.FocusedActivityLayouts.NO_CHAT ? eX.ChannelLayouts.NO_CHAT : eX.ChannelLayouts.NORMAL : null != r ? R.default.getLayout(r) : eX.ChannelLayouts.NORMAL, [r]), F = (0, h.useStateFromStores)([R.default], () => null != u ? R.default.getSelectedParticipant(u.id) : null), w = (0, h.useStateFromStores)([ek.default], () => ek.default.getCurrentUser()), k = (0, es.default)(S), H = (0, eR.default)(j, null == S ? void 0 : S.id), {
    section: B,
    channelSidebarState: G
  } = (0, h.useStateFromStoresObject)([eL.default], () => ({
    section: eL.default.getSection(r, null == u ? void 0 : u.isDM()),
    channelSidebarState: eL.default.getSidebarState(r)
  }), [r, u]), W = null == S ? void 0 : S.id, Y = (0, h.useStateFromStores)([eL.default], () => eL.default.getGuildSidebarState(W), [W]), z = (0, h.useStateFromStores)([ew.default], () => ew.default.getGuildId()) === eX.FAVORITES, {
    available: K,
    activated: Z,
    hqStreamingState: q
  } = (0, eo.usePerksDemo)(f.EntitlementFeatureNames.STREAM_HIGH_QUALITY), X = K && Z && q.hqStreamingIsEnabled, Q = (0, eV.default)(u), J = (0, eV.default)(u, !0), $ = null != u && o === u.id, ee = null != u && u.isGuildStageVoice();
  l.useEffect(() => {
    var e, t, n;
    let a = (0, ed.getHistory)();
    if ((null == a ? void 0 : null === (e = a.location) || void 0 === e ? void 0 : e.state) === e1.STAGE_INVITE_STATE_KEY) {
      let {
        channelId: e
      } = null !== (n = (0, ei.tryParseChannelPath)(null == a ? void 0 : null === (t = a.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
      null != e && i(e)
    }
  }, []), l.useEffect(() => {
    null != s && null != u && ee && u.id === s && !$ && ((0, eE.connectAndOpen)(u), i(null))
  }, [s, ee]);
  let et = (0, A.useChannelSummariesExperiment)(u),
    en = null != u && u.isPrivate(),
    ea = (0, N.default)(en),
    el = (0, N.default)(null == u ? void 0 : u.id);
  l.useEffect(() => {
    let e = ea && !en,
      t = ea && en && (null == u ? void 0 : u.id) !== el;
    (e || t) && (0, b.markDismissibleContentAsDismissed)(m.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
      dismissAction: e$.ContentDismissActionType.AUTO
    })
  }, [null == u ? void 0 : u.id, el, en, ea]);
  let eu = (0, p.useHasAnyModalOpen)();
  return (0, a.jsx)(e9, {
    guildId: null == u ? void 0 : u.guild_id,
    channelId: r,
    channel: u,
    channelName: Q,
    formattedChannelName: J,
    parentChannel: g,
    voiceChannel: E,
    layout: U,
    needSubscriptionToAccess: _,
    isLurking: P,
    hasModalOpen: eu,
    section: B,
    channelSidebarState: G,
    guildSidebarState: Y,
    guild: S,
    searchId: (0, h.useStateFromStores)([eU.default], () => eU.default.getCurrentSearchId()),
    showCall: !_ && O,
    nsfwAgree: (0, h.useStateFromStores)([eP.default], () => eP.default.didAgree(null == u ? void 0 : u.guild_id)),
    isMobile: (0, h.useStateFromStores)([eb.default], () => (null == u ? void 0 : u.type) === eX.ChannelTypes.DM && eb.default.isMobileOnline(u.getRecipientId()), [u]),
    isUnavailable: (0, h.useStateFromStores)([ej.default], () => (null == u ? void 0 : u.guild_id) != null && ej.default.isUnavailable(u.guild_id), [u]),
    showRealNameModal: k,
    showWelcomeModal: !D && H,
    showFollowButton: (null == u ? void 0 : u.type) === eX.ChannelTypes.GUILD_ANNOUNCEMENT && (null == S ? void 0 : S.hasFeature(eX.GuildFeatures.NEWS)) || !1,
    ...(0, h.useStateFromStoresObject)([eH.default], () => ({
      hasVideo: null != u && eH.default.hasVideo(u.id)
    }), [u]),
    inCall: $,
    selectedParticipant: F,
    nsfwAllowed: (null == w ? void 0 : w.nsfwAllowed) === !0,
    showChannelSummaries: et,
    isFavorites: z,
    headerGuildBreadcrumbPosition: z ? "left" : "right",
    perkDemoEnabled: X,
    hasTextActivityInPanelMode: L
  })
})