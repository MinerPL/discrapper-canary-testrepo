"use strict";
n.r(t), n.d(t, {
  default: function() {
    return e3
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  u = n.n(r),
  o = n("917351"),
  d = n.n(o),
  c = n("90915"),
  f = n("446674"),
  h = n("151426"),
  m = n("551042"),
  p = n("77078"),
  E = n("272030"),
  g = n("942722"),
  S = n("561963"),
  C = n("264732"),
  _ = n("738073"),
  I = n("737960"),
  T = n("734575"),
  v = n("84339"),
  x = n("191225"),
  N = n("169920"),
  A = n("420444"),
  M = n("191145"),
  R = n("494286"),
  j = n("850391"),
  L = n("992207"),
  y = n("269936"),
  O = n("69927"),
  P = n("40635"),
  D = n("10641"),
  b = n("499520"),
  U = n("327432"),
  w = n("579425"),
  F = n("336804"),
  V = n("928265"),
  k = n("744568"),
  H = n("257869"),
  B = n("848848"),
  G = n("93252"),
  W = n("661455"),
  Y = n("230035"),
  z = n("155832"),
  K = n("353054"),
  Z = n("262956"),
  X = n("723431"),
  Q = n("977983"),
  q = n("539938"),
  J = n("557809"),
  $ = n("853189"),
  ee = n("718091"),
  et = n("922164"),
  en = n("391751"),
  ea = n("148205"),
  el = n("969103"),
  es = n("361572"),
  ei = n("267567"),
  er = n("23033"),
  eu = n("393414"),
  eo = n("144491"),
  ed = n("200745"),
  ec = n("56778"),
  ef = n("208021"),
  eh = n("582713"),
  em = n("716214"),
  ep = n("58343"),
  eE = n("445375"),
  eg = n("38861"),
  eS = n("31673"),
  eC = n("338273"),
  e_ = n("861570"),
  eI = n("970366"),
  eT = n("401642"),
  ev = n("514917"),
  ex = n("223170"),
  eN = n("59811"),
  eA = n("824135"),
  eM = n("982108"),
  eR = n("42203"),
  ej = n("474643"),
  eL = n("341542"),
  ey = n("247013"),
  eO = n("305961"),
  eP = n("824563"),
  eD = n("744983"),
  eb = n("18494"),
  eU = n("162771"),
  ew = n("697218"),
  eF = n("800762"),
  eV = n("980423"),
  ek = n("439932"),
  eH = n("679653"),
  eB = n("176347"),
  eG = n("665182"),
  eW = n("61918"),
  eY = n("656612"),
  ez = n("624027"),
  eK = n("49111"),
  eZ = n("272505"),
  eX = n("99795"),
  eQ = n("994428"),
  eq = n("237542"),
  eJ = n("837979"),
  e$ = n("782340"),
  e0 = n("250455");
let e1 = (0, y.makeLazy)({
  createPromise: () => n.el("479273").then(n.bind(n, "479273")),
  webpackId: "479273",
  renderLoader: () => (0, a.jsx)("div", {
    className: e0.loader,
    children: (0, a.jsx)(p.Spinner, {})
  }),
  name: "ForumChannel"
});
class e2 extends l.PureComponent {
  componentDidMount() {
    (0, eI.trackAppUIViewed)("guild_channel")
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
    u(null != t, "Missing channel in Channel.openChannelContextMenu"), u(null != l, "Missing guild in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("229233").then(n.bind(n, "229233"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t,
        guild: l
      })
    })
  }
  openThreadContextMenu(e, t) {
    u(null != t, "Missing channel in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("994827").then(n.bind(n, "994827"));
      return n => (0, a.jsx)(e, {
        ...n,
        channel: t
      })
    })
  }
  openDMContextMenu(e, t) {
    u(null != t, "Missing channel in Channel.openDMContextMenu");
    let l = ew.default.getUser(t.getRecipientId());
    u(null != l, "Missing user in Channel.openDMContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("130074").then(n.bind(n, "130074"));
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
    if (u(null != e, "Missing channel in Channel.renderCall"), (null == e ? void 0 : e.isNSFW()) && (!n || !l) || !t) return null;
    switch (e.type) {
      case eK.ChannelTypes.GUILD_STAGE_VOICE:
        return (0, a.jsx)(ep.default, {
          channel: e
        }, e.id);
      case eK.ChannelTypes.GUILD_VOICE:
      case eK.ChannelTypes.DM:
      case eK.ChannelTypes.GROUP_DM:
      case eK.ChannelTypes.PUBLIC_THREAD:
      case eK.ChannelTypes.PRIVATE_THREAD:
        let s = this.props.height - 200;
        return (0, a.jsx)(R.default, {
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
    return (0, a.jsx)(N.default, {
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
    if (u(null != e, "Missing channel in Channel.renderChat"), s) return (u(null != n, "premium channels must exist within a guild"), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel()) ? (0, a.jsx)(G.default, {
      guildId: n.id
    }) : (0, a.jsx)(H.GroupListingsFetchContextProvider, {
      guildId: n.id,
      children: (0, a.jsx)(W.default, {
        channelId: e.id,
        guildId: n.id
      })
    });
    if (e.isNSFW() && (!l || !t)) return (0, a.jsx)(_.default, {
      guild: n
    });
    if (e.isGuildVocal()) return null;
    if (e.isDirectory()) return u(null != n, "directory channels must exist within a guild"), (0, a.jsx)(P.default, {
      channel: e,
      guild: n
    });
    if (e.isForumLikeChannel()) {
      u(null != n, "forum channels must exist within a guild");
      let t = {
        isThreadSidebarFloating: this.state.isThreadSidebarFloating,
        threadSidebarWidth: this.state.threadSidebarWidth
      };
      return (0, a.jsx)(e1, {
        channel: e,
        guild: n,
        sidebarState: t
      }, e.id)
    }
    return (0, a.jsx)(eB.default, {
      channel: e,
      guild: n,
      chatInputType: j.ChatInputTypes.NORMAL
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
    if (u(null != t, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s);
    else if (i === eK.ChannelSections.PROFILE && t.isPrivate()) return (0, a.jsx)(ev.default, {
      channel: t,
      showCall: r
    }, "private-channel-profile-".concat(t.id));
    else if (i === eK.ChannelSections.MEMBERS) switch (t.type) {
      case eK.ChannelTypes.GROUP_DM:
        return (0, a.jsx)(g.default, {
          channel: t
        }, "private-channel-recipients-".concat(t.id));
      case eK.ChannelTypes.GUILD_DIRECTORY:
      case eK.ChannelTypes.GUILD_FORUM:
      case eK.ChannelTypes.GUILD_MEDIA:
      case eK.ChannelTypes.GUILD_ANNOUNCEMENT:
      case eK.ChannelTypes.GUILD_TEXT:
        var o;
        if (null != l && l.hasFeature(eK.GuildFeatures.CLAN)) return (0, a.jsx)(w.default, {
          guildId: l.id,
          channel: t
        }, "clan-sidebar-".concat(t.id));
        let d = !0 === eK.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (o = t.guild_id) && void 0 !== o ? o : t.id;
        return (0, a.jsx)(eW.default, {
          channel: t
        }, "channel-members-".concat(d));
      case eK.ChannelTypes.ANNOUNCEMENT_THREAD:
        if (null != n) return (0, a.jsx)(eW.default, {
          channel: n
        }, "channel-members-".concat(n.id));
        break;
      case eK.ChannelTypes.PUBLIC_THREAD:
      case eK.ChannelTypes.PRIVATE_THREAD:
        if (!t.isArchivedThread() && null != l) return (0, a.jsx)(S.default, {
          channel: t,
          guild: l
        }, "channel-members-".concat(t.id))
    } else if (i === eK.ChannelSections.SEARCH && null != e) return (0, a.jsx)(ec.default, {
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
      showRealNameModal: u
    } = this.props;
    return null == e || null == t || r || l ? null : (u && (0, p.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("278999").then(n.bind(n, "278999"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => V.default.viewPrompt(eq.GuildPrompts.REAL_NAME_PROMPT, t),
      modalKey: "Guild Hub Real Name Modal"
    }), s && (0, p.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("900257").then(n.bind(n, "900257"));
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
      width: u
    } = this.props;
    if (null == s && null == l) return null;
    if (n === eK.ChannelSections.SIDEBAR_CHAT && null != l) {
      if ((null == t ? void 0 : t.isNSFW()) && (!r || !i)) return null;
      switch (l.type) {
        case eh.SidebarType.CREATE_THREAD:
          if (null == t ? void 0 : t.isForumLikeChannel()) return null;
          e = (0, a.jsx)(eE.default, {
            parentChannelId: l.parentChannelId,
            parentMessageId: l.parentMessageId,
            location: l.location
          });
          break;
        case eh.SidebarType.VIEW_THREAD:
          let n = (null == t ? void 0 : t.isForumLikeChannel()) ? U.default : e_.default;
          e = (0, a.jsx)(n, {
            channelId: l.channelId
          });
          break;
        case eh.SidebarType.VIEW_CHANNEL:
        case eh.SidebarType.VIEW_MESSAGE_REQUEST:
        default:
          return null
      }
    }
    if (null != s && null == e) {
      if (s.type === eh.GuildSidebarType.GUILD_MEMBER_MOD_VIEW) {
        let {
          guildId: e,
          userId: t
        } = s.details;
        return (0, a.jsx)("div", {
          style: {
            width: eK.DEFAULT_CHAT_SIDEBAR_WIDTH
          },
          children: (0, a.jsx)(k.default, {
            guildId: e,
            userId: t,
            onClose: () => ef.default.closeGuildSidebar(e)
          })
        })
      } else return null
    }
    if (null == e) return null;
    let o = (null == t ? void 0 : t.type) != null && eK.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
      d = u - eK.CHANNEL_SIDEBAR_WIDTH - o;
    return (0, a.jsx)(eG.default, {
      sidebarType: (null == t ? void 0 : t.type) != null && eK.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? eG.ChatSidebarType.PostSidebar : eG.ChatSidebarType.ThreadSidebar,
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
      section: u,
      hasModalOpen: o,
      guildSidebarState: d
    } = this.props, {
      threadSidebarWidth: c,
      isThreadSidebarFloating: f
    } = this.state;
    if (s) return (0, a.jsx)(eY.default, {});
    if (null == e) return (0, a.jsx)(ez.default, {
      channelId: this.props.channelId
    });
    let h = u === eK.ChannelSections.SIDEBAR_CHAT,
      m = null != d && !h,
      p = !e.isForumLikeChannel() && !o,
      E = null == t ? void 0 : t.name;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(O.AppPageTitle, {
        location: E,
        subsection: null != n ? n : void 0
      }), (0, a.jsxs)("div", {
        className: i(e0.chat, {
          [e0.threadSidebarOpen]: h || m,
          [e0.threadSidebarFloating]: h && f
        }),
        children: [p ? (0, a.jsx)(C.default, {
          style: {
            right: h ? c : void 0
          },
          className: e0.uploadArea,
          channel: e,
          draftType: ej.DraftType.ChannelMessage
        }) : null, l ? null : this.renderHeaderBar(), this.renderCall(), this.renderEmbeddedActivityPanel(), (0, a.jsxs)("div", {
          className: i(e0.content, {
            [e0.noChat]: r === eK.ChannelLayouts.NO_CHAT
          }),
          children: [this.renderChat(), this.renderSidebar()]
        })]
      }), this.renderThreadSidebar(), (0, a.jsx)(Y.default, {})]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      topicExpanded: !1,
      threadSidebarWidth: void 0,
      isThreadSidebarFloating: !1
    }, this.handleTitleParentClick = () => {
      let {
        parentChannel: e
      } = this.props;
      null != e && (0, eo.transitionToChannel)(e.id)
    }, this._handleContextMenu = (e, t) => {
      switch (t.type) {
        case eK.ChannelTypes.GUILD_VOICE:
        case eK.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eK.ChannelTypes.GUILD_TEXT:
        case eK.ChannelTypes.GUILD_FORUM:
        case eK.ChannelTypes.GUILD_MEDIA:
          this.openChannelContextMenu(e, t);
          break;
        case eK.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eK.ChannelTypes.PUBLIC_THREAD:
        case eK.ChannelTypes.PRIVATE_THREAD:
          this.openThreadContextMenu(e, t);
          break;
        case eK.ChannelTypes.DM:
          this.openDMContextMenu(e, t)
      }
    }, this.handleContextMenu = e => {
      u(null != this.props.channel, "Missing channel in Channel.handleContextMenu"), this._handleContextMenu(e, this.props.channel)
    }, this.handleParentContextMenu = e => {
      u(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"), this._handleContextMenu(e, this.props.parentChannel)
    }, this.handleThreadSidebarResize = (e, t) => {
      this.setState({
        threadSidebarWidth: e,
        isThreadSidebarFloating: t
      })
    }, this.openUserProfile = () => {
      let {
        channel: e
      } = this.props;
      u(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"), (0, eT.openUserProfileModal)({
        userId: e.getRecipientId(),
        guildId: e.guild_id,
        channelId: e.id,
        analyticsLocation: {
          section: eK.AnalyticsSections.CHANNEL_HEADER
        }
      })
    }, this.renderClipsEnabledIndicatorToolbarItem = () => {
      let {
        inCall: e,
        voiceChannel: t
      } = this.props;
      return e ? (0, a.jsx)(L.default, {
        channelId: null != t ? t.id : null
      }) : null
    }, this.renderStreamQualityLiveIndicatorToolbarItem = () => {
      let {
        selectedParticipant: e
      } = this.props;
      return (null == e ? void 0 : e.type) !== eX.ParticipantTypes.STREAM ? null : (0, a.jsx)(F.default, {
        size: eV.default.Sizes.LARGE,
        participant: e,
        showQuality: !0
      }, "live-indicator")
    }, this.renderHeaderToolbar = () => {
      let {
        channel: e,
        parentChannel: t,
        isLurking: n,
        showCall: l
      } = this.props;
      u(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let s = [];
      if (e.isSystemDM()) return s;
      switch (e.type) {
        case eK.ChannelTypes.GUILD_STAGE_VOICE:
        case eK.ChannelTypes.GUILD_VOICE:
          break;
        case eK.ChannelTypes.DM:
          s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)($.default, {
            channel: e
          }, "calls")), s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)(ee.default, {
            channel: e,
            tooltip: e$.default.Messages.GROUP_DM_ADD_FRIENDS
          }, "invite")), s.push((0, a.jsx)(et.default, {
            channel: e,
            showCall: l
          }, "profile")), s.push((0, a.jsx)(en.default, {
            channel: e
          }, "safety_tools"));
          break;
        case eK.ChannelTypes.GROUP_DM:
          if (s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)($.default, {
              channel: e
            }, "calls")), s.push((0, a.jsx)(Z.default, {
              channel: e
            }, "pins")), !e.isManaged()) {
            let t = e$.default.Messages.GROUP_DM_ADD_FRIENDS;
            s.push((0, a.jsx)(ee.default, {
              channel: e,
              tooltip: t
            }, "invite"))
          }
          s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case eK.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eK.ChannelTypes.PRIVATE_THREAD:
        case eK.ChannelTypes.PUBLIC_THREAD:
          null != t && !t.isForumLikeChannel() && s.push((0, a.jsx)(eg.default, {
            channel: t
          }, "browser")), e.isVocalThread() && s.push((0, a.jsx)(ea.default, {
            channel: e
          }, "thread-call")), s.push((0, a.jsx)(eS.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "pins")), !e.isArchivedThread() && s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members")), null != t && (0, T.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(X.default, {
            channel: e
          }, "summaries")), s.push((0, a.jsx)(eC.default, {
            channel: e
          }, "threads-overflow"));
          break;
        case eK.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eK.ChannelTypes.GUILD_TEXT:
          s.push((0, a.jsx)(b.default, {
            channel: e
          }, "favorites")), s.push((0, a.jsx)(eg.default, {
            channel: e
          }, "browser")), !n && s.push((0, a.jsx)(K.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members")), (0, T.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(X.default, {
            channel: e
          }, "summaries"));
          break;
        case eK.ChannelTypes.GUILD_FORUM:
        case eK.ChannelTypes.GUILD_MEDIA:
          !n && (s.push((0, a.jsx)(Q.default, {
            channel: e
          }, "forum-onboarding")), s.push((0, a.jsx)(K.default, {
            channel: e
          }, "notifications"))), !__OVERLAY__ && s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case eK.ChannelTypes.GUILD_DIRECTORY:
          s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"))
      }
      return s
    }, this.renderMobileToolbar = () => {
      let {
        channel: e
      } = this.props;
      u(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let t = [];
      if (e.isSystemDM()) return t;
      switch (e.type) {
        case eK.ChannelTypes.GUILD_STAGE_VOICE:
        case eK.ChannelTypes.GUILD_VOICE:
        case eK.ChannelTypes.DM:
          break;
        case eK.ChannelTypes.GROUP_DM:
          t.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case eK.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eK.ChannelTypes.PRIVATE_THREAD:
        case eK.ChannelTypes.PUBLIC_THREAD:
          !e.isArchivedThread() && t.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case eK.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eK.ChannelTypes.GUILD_TEXT:
        case eK.ChannelTypes.GUILD_FORUM:
        case eK.ChannelTypes.GUILD_MEDIA:
        case eK.ChannelTypes.GUILD_DIRECTORY:
          t.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"))
      }
      return t
    }, this.renderFollowButton = () => {
      let {
        showFollowButton: e,
        channel: t
      } = this.props;
      return e ? (0, a.jsx)(p.Button, {
        size: p.Button.Sizes.MIN,
        color: p.Button.Colors.PRIMARY,
        className: e0.followButton,
        onClick: () => (0, p.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("996177").then(n.bind(n, "996177"));
          return n => (0, a.jsx)(e, {
            channel: t,
            ...n
          })
        }),
        children: e$.default.Messages.FOLLOW
      }) : null
    }, this.renderHeaderBar = () => {
      let {
        channel: e,
        channelName: t,
        parentChannel: n,
        guild: l,
        guildId: s,
        showCall: r,
        hasVideo: o,
        headerGuildBreadcrumbPosition: d,
        isFavorites: c
      } = this.props;
      u(null != e, "Missing channel in Channel.renderHeaderBar"), u(null != t, "Should not be null if channel is not null.");
      let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
        h = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
      return (0, a.jsxs)("div", {
        className: e0.subtitleContainer,
        children: [(0, a.jsxs)(q.default, {
          guildId: s,
          channelId: e.id,
          channelType: e.type,
          hideSearch: e.isDirectory() || c && !(0, ed.isFavoriteSearchEnabled)(),
          showDivider: c && !(0, ed.isFavoriteSearchEnabled)(),
          toolbar: this.renderHeaderToolbar(),
          mobileToolbar: this.renderMobileToolbar(),
          className: i(e0.title, o && r ? (0, ek.getThemeClass)(eK.ThemeTypes.DARK) : null),
          transparent: r,
          "aria-label": e$.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
          children: ["left" === d && (0, a.jsx)(J.HeaderGuildBreadcrumb, {
            channel: e,
            guild: l,
            caretPosition: "right"
          }), (0, J.renderTitle)({
            channel: e,
            channelName: t,
            parentChannel: n,
            guild: l,
            hasVideo: o,
            handleContextMenu: this.handleContextMenu,
            handleParentContextMenu: this.handleParentContextMenu,
            handleClick: f,
            handleParentClick: h,
            renderFollowButton: this.renderFollowButton
          }), "right" === d && (0, a.jsx)(J.HeaderGuildBreadcrumb, {
            channel: e,
            guild: l,
            caretPosition: "left"
          }), (0, J.renderTopic)(e, l)]
        }, "header-".concat(e.id)), (0, a.jsx)(er.default, {
          channelId: e.id
        })]
      })
    }
  }
}
let e4 = (0, I.default)(e2);
var e3 = l.memo(function(e) {
  var t;
  let {
    providedChannel: n
  } = e, [s, i] = l.useState(null), r = (0, f.useStateFromStores)([eb.default], () => eb.default.getChannelId()), u = (0, f.useStateFromStores)([eb.default], () => eb.default.getVoiceChannelId()), o = (0, f.useStateFromStores)([eR.default], () => null != n ? n : eR.default.getChannel(r), [r, n]), p = (0, f.useStateFromStores)([eR.default], () => eR.default.getChannel(u), [u]), E = null == o ? void 0 : o.parent_id, g = (0, f.useStateFromStores)([eR.default], () => eR.default.getChannel(E), [E]), S = (0, f.useStateFromStores)([eO.default], () => eO.default.getGuild(null == o ? void 0 : o.guild_id), [o]), {
    needSubscriptionToAccess: C
  } = (0, B.default)(null !== (t = null == o ? void 0 : o.id) && void 0 !== t ? t : void 0), _ = (0, f.useStateFromStores)([M.default], () => {
    let e = null != r ? M.default.getParticipants(r) : [],
      t = null != r ? M.default.getActivityParticipants(r) : [];
    return e.length - t.length > 0
  }, [r]), I = (0, f.useStateFromStores)([x.default], () => {
    var e;
    return x.default.getSelfEmbeddedActivityForChannel(null !== (e = null == o ? void 0 : o.id) && void 0 !== e ? e : eK.EMPTY_STRING_SNOWFLAKE_ID)
  }), N = (0, f.useStateFromStores)([x.default], () => x.default.getActivityPanelMode()), R = null != I && !(0, A.default)(null == o ? void 0 : o.id) && N === eZ.ActivityPanelModes.PANEL, j = (0, f.useStateFromStores)([eF.default], () => null != o && o.isVocalThread() && !d.isEmpty(eF.default.getVoiceStatesForChannel(o.id)), [o]), L = (null == o ? void 0 : o.isGuildVocal()) || R || _ || j, {
    welcomeModalChannelId: y
  } = (0, c.useLocation)(), O = (0, f.useStateFromStores)([ei.default], () => null != o && ei.default.isLurking(o.guild_id), [o]), P = (0, f.useStateFromStores)([eN.default], () => eN.default.hasSeen(null == o ? void 0 : o.guild_id, O), [o, O]), b = (0, f.useStateFromStores)([M.default, x.default], () => null != x.default.getConnectedActivityChannelId() && x.default.getActivityPanelMode() === eZ.ActivityPanelModes.PANEL ? x.default.getFocusedLayout() === eZ.FocusedActivityLayouts.NO_CHAT ? eK.ChannelLayouts.NO_CHAT : eK.ChannelLayouts.NORMAL : null != r ? M.default.getLayout(r) : eK.ChannelLayouts.NORMAL, [r]), U = (0, f.useStateFromStores)([M.default], () => null != o ? M.default.getSelectedParticipant(o.id) : null), w = (0, f.useStateFromStores)([ew.default], () => ew.default.getCurrentUser()), F = (0, el.default)(S), V = (0, eA.default)(y, null == S ? void 0 : S.id), {
    section: k,
    channelSidebarState: H
  } = (0, f.useStateFromStoresObject)([eM.default], () => ({
    section: eM.default.getSection(r, null == o ? void 0 : o.isDM()),
    channelSidebarState: eM.default.getSidebarState(r)
  }), [r, o]), G = null == S ? void 0 : S.id, W = (0, f.useStateFromStores)([eM.default], () => eM.default.getGuildSidebarState(G), [G]), Y = (0, f.useStateFromStores)([eU.default], () => eU.default.getGuildId()), z = Y === eK.FAVORITES, K = (0, eH.default)(o), Z = (0, eH.default)(o, !0), X = null != o && u === o.id, Q = null != o && o.isGuildStageVoice();
  l.useEffect(() => {
    var e, t, n;
    let a = (0, eu.getHistory)();
    if ((null == a ? void 0 : null === (e = a.location) || void 0 === e ? void 0 : e.state) === eJ.STAGE_INVITE_STATE_KEY) {
      let {
        channelId: e
      } = null !== (n = (0, es.tryParseChannelPath)(null == a ? void 0 : null === (t = a.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
      null != e && i(e)
    }
  }, []), l.useEffect(() => {
    null != s && null != o && Q && o.id === s && !X && ((0, em.connectAndOpen)(o), i(null))
  }, [s, Q]);
  let q = (0, T.useChannelSummariesExperiment)(o),
    J = null != o && o.isPrivate(),
    $ = (0, v.default)(J),
    ee = (0, v.default)(null == o ? void 0 : o.id);
  l.useEffect(() => {
    let e = $ && !J,
      t = $ && J && (null == o ? void 0 : o.id) !== ee;
    (e || t) && (0, D.markDismissibleContentAsDismissed)(h.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
      dismissAction: eQ.ContentDismissActionType.AUTO
    })
  }, [null == o ? void 0 : o.id, ee, J, $]);
  let et = (0, m.useHasAnyModalOpen)();
  return (0, a.jsx)(e4, {
    guildId: null == o ? void 0 : o.guild_id,
    channelId: r,
    channel: o,
    channelName: K,
    formattedChannelName: Z,
    parentChannel: g,
    voiceChannel: p,
    layout: b,
    needSubscriptionToAccess: C,
    isLurking: O,
    hasModalOpen: et,
    section: k,
    channelSidebarState: H,
    guildSidebarState: W,
    guild: S,
    searchId: (0, f.useStateFromStores)([eD.default], () => eD.default.getCurrentSearchId()),
    showCall: !C && L,
    nsfwAgree: (0, f.useStateFromStores)([ey.default], () => ey.default.didAgree(null == o ? void 0 : o.guild_id)),
    isMobile: (0, f.useStateFromStores)([eP.default], () => (null == o ? void 0 : o.type) === eK.ChannelTypes.DM && eP.default.isMobileOnline(o.getRecipientId()), [o]),
    isUnavailable: (0, f.useStateFromStores)([eL.default], () => (null == o ? void 0 : o.guild_id) != null && eL.default.isUnavailable(o.guild_id), [o]),
    showRealNameModal: F,
    showWelcomeModal: !P && V,
    showFollowButton: (null == o ? void 0 : o.type) === eK.ChannelTypes.GUILD_ANNOUNCEMENT && (null == S ? void 0 : S.hasFeature(eK.GuildFeatures.NEWS)) || !1,
    ...(0, f.useStateFromStoresObject)([eF.default], () => ({
      hasVideo: null != o && eF.default.hasVideo(o.id)
    }), [o]),
    inCall: X,
    selectedParticipant: U,
    nsfwAllowed: (null == w ? void 0 : w.nsfwAllowed) === !0,
    showChannelSummaries: q,
    isFavorites: z,
    headerGuildBreadcrumbPosition: z ? "left" : "right"
  })
})