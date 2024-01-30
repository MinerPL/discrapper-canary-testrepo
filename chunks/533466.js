"use strict";
n.r(t), n.d(t, {
  default: function() {
    return e4
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("917351"),
  d = n.n(u),
  c = n("90915"),
  f = n("446674"),
  h = n("151426"),
  p = n("551042"),
  m = n("77078"),
  E = n("272030"),
  C = n("942722"),
  S = n("561963"),
  g = n("264732"),
  _ = n("738073"),
  I = n("737960"),
  T = n("789394"),
  v = n("734575"),
  x = n("84339"),
  N = n("191225"),
  A = n("169920"),
  M = n("420444"),
  R = n("191145"),
  j = n("494286"),
  L = n("850391"),
  O = n("992207"),
  y = n("269936"),
  P = n("69927"),
  b = n("40635"),
  D = n("10641"),
  U = n("499520"),
  w = n("327432"),
  F = n("336804"),
  k = n("928265"),
  V = n("744568"),
  B = n("257869"),
  H = n("848848"),
  G = n("93252"),
  W = n("661455"),
  Y = n("230035"),
  z = n("155832"),
  K = n("353054"),
  Z = n("262956"),
  X = n("723431"),
  J = n("977983"),
  q = n("539938"),
  Q = n("557809"),
  $ = n("853189"),
  ee = n("718091"),
  et = n("922164"),
  en = n("148205"),
  ea = n("969103"),
  el = n("361572"),
  es = n("267567"),
  ei = n("393414"),
  er = n("144491"),
  eo = n("200745"),
  eu = n("56778"),
  ed = n("208021"),
  ec = n("582713"),
  ef = n("716214"),
  eh = n("58343"),
  ep = n("445375"),
  em = n("38861"),
  eE = n("31673"),
  eC = n("338273"),
  eS = n("861570"),
  eg = n("970366"),
  e_ = n("401642"),
  eI = n("514917"),
  eT = n("223170"),
  ev = n("59811"),
  ex = n("824135"),
  eN = n("982108"),
  eA = n("42203"),
  eM = n("474643"),
  eR = n("341542"),
  ej = n("247013"),
  eL = n("305961"),
  eO = n("824563"),
  ey = n("744983"),
  eP = n("18494"),
  eb = n("162771"),
  eD = n("697218"),
  eU = n("800762"),
  ew = n("980423"),
  eF = n("439932"),
  ek = n("679653"),
  eV = n("176347"),
  eB = n("665182"),
  eH = n("681393"),
  eG = n("61918"),
  eW = n("656612"),
  eY = n("624027"),
  ez = n("49111"),
  eK = n("272505"),
  eZ = n("99795"),
  eX = n("994428"),
  eJ = n("237542"),
  eq = n("837979"),
  eQ = n("782340"),
  e$ = n("305794");
let e0 = (0, y.makeLazy)({
  createPromise: () => n.el("479273").then(n.bind(n, "479273")),
  webpackId: "479273",
  renderLoader: () => (0, a.jsx)("div", {
    className: e$.loader,
    children: (0, a.jsx)(m.Spinner, {})
  }),
  name: "ForumChannel"
});
class e1 extends l.PureComponent {
  componentDidMount() {
    (0, eg.trackAppUIViewed)("guild_channel")
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
    o(null != t, "Missing channel in Channel.openChannelContextMenu"), o(null != l, "Missing guild in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
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
    o(null != t, "Missing channel in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
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
    o(null != t, "Missing channel in Channel.openDMContextMenu");
    let l = eD.default.getUser(t.getRecipientId());
    o(null != l, "Missing user in Channel.openDMContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
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
    if (o(null != e, "Missing channel in Channel.renderCall"), (null == e ? void 0 : e.isNSFW()) && (!n || !l) || !t) return null;
    switch (e.type) {
      case ez.ChannelTypes.GUILD_STAGE_VOICE:
        return (0, a.jsx)(eh.default, {
          channel: e
        }, e.id);
      case ez.ChannelTypes.GUILD_VOICE:
      case ez.ChannelTypes.DM:
      case ez.ChannelTypes.GROUP_DM:
      case ez.ChannelTypes.PUBLIC_THREAD:
      case ez.ChannelTypes.PRIVATE_THREAD:
        let s = this.props.height - 200;
        return (0, a.jsx)(j.default, {
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
    return (0, a.jsx)(A.default, {
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
    if (o(null != e, "Missing channel in Channel.renderChat"), s) return (o(null != n, "premium channels must exist within a guild"), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel()) ? (0, a.jsx)(G.default, {
      guildId: n.id
    }) : (0, a.jsx)(B.GroupListingsFetchContextProvider, {
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
    if (e.isDirectory()) return o(null != n, "directory channels must exist within a guild"), (0, a.jsx)(b.default, {
      channel: e,
      guild: n
    });
    if (e.isForumLikeChannel()) {
      o(null != n, "forum channels must exist within a guild");
      let t = {
        isThreadSidebarFloating: this.state.isThreadSidebarFloating,
        threadSidebarWidth: this.state.threadSidebarWidth
      };
      return (0, a.jsx)(e0, {
        channel: e,
        guild: n,
        sidebarState: t
      }, e.id)
    }
    return (0, a.jsx)(eV.default, {
      channel: e,
      guild: n,
      chatInputType: L.ChatInputTypes.NORMAL
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
    if (o(null != t, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s);
    else if (i === ez.ChannelSections.PROFILE && t.isPrivate()) return (0, a.jsx)(eI.default, {
      channel: t,
      showCall: r
    }, "private-channel-profile-".concat(t.id));
    else if (i === ez.ChannelSections.MEMBERS) switch (t.type) {
      case ez.ChannelTypes.GROUP_DM:
        return (0, a.jsx)(C.default, {
          channel: t
        }, "private-channel-recipients-".concat(t.id));
      case ez.ChannelTypes.GUILD_DIRECTORY:
      case ez.ChannelTypes.GUILD_FORUM:
      case ez.ChannelTypes.GUILD_MEDIA:
      case ez.ChannelTypes.GUILD_ANNOUNCEMENT:
      case ez.ChannelTypes.GUILD_TEXT:
        var u;
        let d = !0 === ez.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (u = t.guild_id) && void 0 !== u ? u : t.id;
        return (0, a.jsx)(eG.default, {
          channel: t
        }, "channel-members-".concat(d));
      case ez.ChannelTypes.ANNOUNCEMENT_THREAD:
        if (null != n) return (0, a.jsx)(eG.default, {
          channel: n
        }, "channel-members-".concat(n.id));
        break;
      case ez.ChannelTypes.PUBLIC_THREAD:
      case ez.ChannelTypes.PRIVATE_THREAD:
        if (!t.isArchivedThread() && null != l) return (0, a.jsx)(S.default, {
          channel: t,
          guild: l
        }, "channel-members-".concat(t.id))
    } else if (i === ez.ChannelSections.SEARCH && null != e) return (0, a.jsx)(eu.default, {
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
    return null == e || null == t || r || l ? null : (o && (0, m.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("278999").then(n.bind(n, "278999"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => k.default.viewPrompt(eJ.GuildPrompts.REAL_NAME_PROMPT, t),
      modalKey: "Guild Hub Real Name Modal"
    }), s && (0, m.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("900257").then(n.bind(n, "900257"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => (0, eT.welcomeScreenViewed)(t, i),
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
    if (n === ez.ChannelSections.SIDEBAR_CHAT && null != l) {
      if ((null == t ? void 0 : t.isNSFW()) && (!r || !i)) return null;
      switch (l.type) {
        case ec.SidebarType.CREATE_THREAD:
          if (null == t ? void 0 : t.isForumLikeChannel()) return null;
          e = (0, a.jsx)(ep.default, {
            parentChannelId: l.parentChannelId,
            parentMessageId: l.parentMessageId,
            location: l.location
          });
          break;
        case ec.SidebarType.VIEW_THREAD:
          let n = (null == t ? void 0 : t.isForumLikeChannel()) ? w.default : eS.default;
          e = (0, a.jsx)(n, {
            channelId: l.channelId
          });
          break;
        case ec.SidebarType.VIEW_CHANNEL:
        case ec.SidebarType.VIEW_MESSAGE_REQUEST:
        default:
          return null
      }
    }
    if (null != s && null == e) {
      if (s.type === ec.GuildSidebarType.GUILD_MEMBER_MOD_VIEW) {
        let {
          guildId: e,
          userId: t
        } = s.details;
        return (0, a.jsx)("div", {
          style: {
            width: ez.DEFAULT_CHAT_SIDEBAR_WIDTH
          },
          children: (0, a.jsx)(V.default, {
            guildId: e,
            userId: t,
            onClose: () => ed.default.closeGuildSidebar(e)
          })
        })
      } else return null
    }
    if (null == e) return null;
    let u = (null == t ? void 0 : t.type) != null && ez.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
      d = o - ez.CHANNEL_SIDEBAR_WIDTH - u;
    return (0, a.jsx)(eB.default, {
      sidebarType: (null == t ? void 0 : t.type) != null && ez.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? eB.ChatSidebarType.PostSidebar : eB.ChatSidebarType.ThreadSidebar,
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
      guildSidebarState: d
    } = this.props, {
      threadSidebarWidth: c,
      isThreadSidebarFloating: f
    } = this.state;
    if (s) return (0, a.jsx)(eW.default, {});
    if (null == e) return (0, a.jsx)(eY.default, {
      channelId: this.props.channelId
    });
    let h = o === ez.ChannelSections.SIDEBAR_CHAT,
      p = null != d && !h,
      m = !e.isForumLikeChannel() && !u,
      E = null == t ? void 0 : t.name;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(P.AppPageTitle, {
        location: E,
        subsection: null != n ? n : void 0
      }), (0, a.jsxs)("div", {
        className: i(e$.chat, {
          [e$.threadSidebarOpen]: h || p,
          [e$.threadSidebarFloating]: h && f
        }),
        children: [m ? (0, a.jsx)(g.default, {
          style: {
            right: h ? c : void 0
          },
          className: e$.uploadArea,
          channel: e,
          draftType: eM.DraftType.ChannelMessage
        }) : null, l ? null : this.renderHeaderBar(), this.renderCall(), this.renderEmbeddedActivityPanel(), (0, a.jsxs)("div", {
          className: i(e$.content, {
            [e$.noChat]: r === ez.ChannelLayouts.NO_CHAT
          }),
          children: [(0, a.jsx)(eH.default, {
            children: this.renderChat()
          }), this.renderSidebar()]
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
      null != e && (0, er.transitionToChannel)(e.id)
    }, this._handleContextMenu = (e, t) => {
      switch (t.type) {
        case ez.ChannelTypes.GUILD_VOICE:
        case ez.ChannelTypes.GUILD_ANNOUNCEMENT:
        case ez.ChannelTypes.GUILD_TEXT:
        case ez.ChannelTypes.GUILD_FORUM:
        case ez.ChannelTypes.GUILD_MEDIA:
          this.openChannelContextMenu(e, t);
          break;
        case ez.ChannelTypes.ANNOUNCEMENT_THREAD:
        case ez.ChannelTypes.PUBLIC_THREAD:
        case ez.ChannelTypes.PRIVATE_THREAD:
          this.openThreadContextMenu(e, t);
          break;
        case ez.ChannelTypes.DM:
          this.openDMContextMenu(e, t)
      }
    }, this.handleContextMenu = e => {
      o(null != this.props.channel, "Missing channel in Channel.handleContextMenu"), this._handleContextMenu(e, this.props.channel)
    }, this.handleParentContextMenu = e => {
      o(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"), this._handleContextMenu(e, this.props.parentChannel)
    }, this.handleThreadSidebarResize = (e, t) => {
      this.setState({
        threadSidebarWidth: e,
        isThreadSidebarFloating: t
      })
    }, this.openUserProfile = () => {
      let {
        channel: e
      } = this.props;
      o(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"), (0, e_.openUserProfileModal)({
        userId: e.getRecipientId(),
        guildId: e.guild_id,
        channelId: e.id,
        analyticsLocation: {
          section: ez.AnalyticsSections.CHANNEL_HEADER
        }
      })
    }, this.renderClipsEnabledIndicatorToolbarItem = () => {
      let {
        inCall: e,
        voiceChannel: t
      } = this.props;
      return e ? (0, a.jsx)(O.default, {
        channelId: null != t ? t.id : null
      }) : null
    }, this.renderStreamQualityLiveIndicatorToolbarItem = () => {
      let {
        selectedParticipant: e
      } = this.props;
      return (null == e ? void 0 : e.type) !== eZ.ParticipantTypes.STREAM ? null : (0, a.jsx)(F.default, {
        size: ew.default.Sizes.LARGE,
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
      o(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let s = [];
      if (e.isSystemDM()) return s;
      switch (e.type) {
        case ez.ChannelTypes.GUILD_STAGE_VOICE:
        case ez.ChannelTypes.GUILD_VOICE:
          break;
        case ez.ChannelTypes.DM:
          s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)($.default, {
            channel: e
          }, "calls")), s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)(ee.default, {
            channel: e,
            tooltip: eQ.default.Messages.GROUP_DM_ADD_FRIENDS
          }, "invite")), s.push((0, a.jsx)(et.default, {
            channel: e,
            showCall: l
          }, "profile"));
          break;
        case ez.ChannelTypes.GROUP_DM:
          if (s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)($.default, {
              channel: e
            }, "calls")), s.push((0, a.jsx)(Z.default, {
              channel: e
            }, "pins")), !e.isManaged()) {
            let t = eQ.default.Messages.GROUP_DM_ADD_FRIENDS;
            s.push((0, a.jsx)(ee.default, {
              channel: e,
              tooltip: t
            }, "invite"))
          }
          s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case ez.ChannelTypes.ANNOUNCEMENT_THREAD:
        case ez.ChannelTypes.PRIVATE_THREAD:
        case ez.ChannelTypes.PUBLIC_THREAD:
          null != t && !t.isForumLikeChannel() && s.push((0, a.jsx)(em.default, {
            channel: t
          }, "browser")), e.isVocalThread() && s.push((0, a.jsx)(en.default, {
            channel: e
          }, "thread-call")), s.push((0, a.jsx)(eE.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "pins")), !e.isArchivedThread() && s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members")), null != t && (0, v.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(X.default, {
            channel: e
          }, "summaries")), s.push((0, a.jsx)(eC.default, {
            channel: e
          }, "threads-overflow"));
          break;
        case ez.ChannelTypes.GUILD_ANNOUNCEMENT:
        case ez.ChannelTypes.GUILD_TEXT:
          s.push((0, a.jsx)(U.default, {
            channel: e
          }, "favorites")), s.push((0, a.jsx)(em.default, {
            channel: e
          }, "browser")), !n && s.push((0, a.jsx)(K.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members")), (0, v.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(X.default, {
            channel: e
          }, "summaries"));
          break;
        case ez.ChannelTypes.GUILD_FORUM:
        case ez.ChannelTypes.GUILD_MEDIA:
          !n && (s.push((0, a.jsx)(J.default, {
            channel: e
          }, "forum-onboarding")), s.push((0, a.jsx)(K.default, {
            channel: e
          }, "notifications"))), !__OVERLAY__ && s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case ez.ChannelTypes.GUILD_DIRECTORY:
          s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"))
      }
      return s
    }, this.renderMobileToolbar = () => {
      let {
        channel: e
      } = this.props;
      o(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let t = [];
      if (e.isSystemDM()) return t;
      switch (e.type) {
        case ez.ChannelTypes.GUILD_STAGE_VOICE:
        case ez.ChannelTypes.GUILD_VOICE:
        case ez.ChannelTypes.DM:
          break;
        case ez.ChannelTypes.GROUP_DM:
          t.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case ez.ChannelTypes.ANNOUNCEMENT_THREAD:
        case ez.ChannelTypes.PRIVATE_THREAD:
        case ez.ChannelTypes.PUBLIC_THREAD:
          !e.isArchivedThread() && t.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case ez.ChannelTypes.GUILD_ANNOUNCEMENT:
        case ez.ChannelTypes.GUILD_TEXT:
        case ez.ChannelTypes.GUILD_FORUM:
        case ez.ChannelTypes.GUILD_MEDIA:
        case ez.ChannelTypes.GUILD_DIRECTORY:
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
      return e ? (0, a.jsx)(m.Button, {
        size: m.Button.Sizes.MIN,
        color: m.Button.Colors.PRIMARY,
        className: e$.followButton,
        onClick: () => (0, m.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("996177").then(n.bind(n, "996177"));
          return n => (0, a.jsx)(e, {
            channel: t,
            ...n
          })
        }),
        children: eQ.default.Messages.FOLLOW
      }) : null
    }, this.renderHeaderBar = () => {
      let {
        channel: e,
        channelName: t,
        parentChannel: n,
        guild: l,
        guildId: s,
        showCall: r,
        hasVideo: u,
        channelEmojiLeftOfIcon: d,
        headerGuildBreadcrumbPosition: c,
        isFavorites: f
      } = this.props;
      o(null != e, "Missing channel in Channel.renderHeaderBar"), o(null != t, "Should not be null if channel is not null.");
      let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
        p = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
      return (0, a.jsxs)(q.default, {
        guildId: s,
        channelId: e.id,
        channelType: e.type,
        hideSearch: e.isDirectory() || f && !(0, eo.isFavoriteSearchEnabled)(),
        showDivider: f && !(0, eo.isFavoriteSearchEnabled)(),
        toolbar: this.renderHeaderToolbar(),
        mobileToolbar: this.renderMobileToolbar(),
        className: i(e$.title, u && r ? (0, eF.getThemeClass)(ez.ThemeTypes.DARK) : null),
        transparent: r,
        "aria-label": eQ.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
        children: ["left" === c && (0, a.jsx)(Q.HeaderGuildBreadcrumb, {
          channel: e,
          guild: l,
          caretPosition: "right"
        }), (0, Q.renderTitle)({
          channel: e,
          channelName: t,
          parentChannel: n,
          guild: l,
          hasVideo: u,
          handleContextMenu: this.handleContextMenu,
          handleParentContextMenu: this.handleParentContextMenu,
          handleClick: h,
          handleParentClick: p,
          renderFollowButton: this.renderFollowButton,
          channelEmojiLeftOfIcon: d
        }), "right" === c && (0, a.jsx)(Q.HeaderGuildBreadcrumb, {
          channel: e,
          guild: l,
          caretPosition: "left"
        }), (0, Q.renderTopic)(e, l)]
      }, "header-".concat(e.id))
    }
  }
}
let e2 = (0, I.default)(e1);
var e4 = l.memo(function(e) {
  var t;
  let {
    providedChannel: n
  } = e, [s, i] = l.useState(null), r = (0, f.useStateFromStores)([eP.default], () => eP.default.getChannelId()), o = (0, f.useStateFromStores)([eP.default], () => eP.default.getVoiceChannelId()), u = (0, f.useStateFromStores)([eA.default], () => null != n ? n : eA.default.getChannel(r), [r, n]), m = (0, f.useStateFromStores)([eA.default], () => eA.default.getChannel(o), [o]), E = null == u ? void 0 : u.parent_id, C = (0, f.useStateFromStores)([eA.default], () => eA.default.getChannel(E), [E]), S = (0, f.useStateFromStores)([eL.default], () => eL.default.getGuild(null == u ? void 0 : u.guild_id), [u]), {
    needSubscriptionToAccess: g
  } = (0, H.default)(null !== (t = null == u ? void 0 : u.id) && void 0 !== t ? t : void 0), _ = (0, f.useStateFromStores)([R.default], () => {
    let e = null != r ? R.default.getParticipants(r) : [],
      t = null != r ? R.default.getActivityParticipants(r) : [];
    return e.length - t.length > 0
  }, [r]), I = (0, f.useStateFromStores)([N.default], () => {
    var e;
    return N.default.getSelfEmbeddedActivityForChannel(null !== (e = null == u ? void 0 : u.id) && void 0 !== e ? e : "")
  }), A = (0, f.useStateFromStores)([N.default], () => N.default.getActivityPanelMode()), j = null != I && !(0, M.default)(null == u ? void 0 : u.id) && A === eK.ActivityPanelModes.PANEL, L = (0, f.useStateFromStores)([eU.default], () => null != u && u.isVocalThread() && !d.isEmpty(eU.default.getVoiceStatesForChannel(u.id)), [u]), O = (null == u ? void 0 : u.isGuildVocal()) || j || _ || L, {
    welcomeModalChannelId: y
  } = (0, c.useLocation)(), P = (0, f.useStateFromStores)([es.default], () => null != u && es.default.isLurking(u.guild_id), [u]), b = (0, f.useStateFromStores)([ev.default], () => ev.default.hasSeen(null == u ? void 0 : u.guild_id, P), [u, P]), U = (0, f.useStateFromStores)([R.default, N.default], () => null != N.default.getConnectedActivityChannelId() && N.default.getActivityPanelMode() === eK.ActivityPanelModes.PANEL ? N.default.getFocusedLayout() === eK.FocusedActivityLayouts.NO_CHAT ? ez.ChannelLayouts.NO_CHAT : ez.ChannelLayouts.NORMAL : null != r ? R.default.getLayout(r) : ez.ChannelLayouts.NORMAL, [r]), w = (0, f.useStateFromStores)([R.default], () => null != u ? R.default.getSelectedParticipant(u.id) : null), F = (0, f.useStateFromStores)([eD.default], () => eD.default.getCurrentUser()), k = (0, ea.default)(S), V = (0, ex.default)(y, null == S ? void 0 : S.id), {
    section: B,
    channelSidebarState: G
  } = (0, f.useStateFromStoresObject)([eN.default], () => ({
    section: eN.default.getSection(r, null == u ? void 0 : u.isDM()),
    channelSidebarState: eN.default.getSidebarState(r)
  }), [r, u]), W = null == S ? void 0 : S.id, Y = (0, f.useStateFromStores)([eN.default], () => eN.default.getGuildSidebarState(W), [W]), z = (0, f.useStateFromStores)([eb.default], () => eb.default.getGuildId()), K = z === ez.FAVORITES, Z = (0, ek.default)(u), X = (0, ek.default)(u, !0), J = null != u && o === u.id, q = null != u && u.isGuildStageVoice();
  l.useEffect(() => {
    var e, t, n;
    let a = (0, ei.getHistory)();
    if ((null == a ? void 0 : null === (e = a.location) || void 0 === e ? void 0 : e.state) === eq.STAGE_INVITE_STATE_KEY) {
      let {
        channelId: e
      } = null !== (n = (0, el.tryParseChannelPath)(null == a ? void 0 : null === (t = a.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
      null != e && i(e)
    }
  }, []), l.useEffect(() => {
    null != s && null != u && q && u.id === s && !J && ((0, ef.connectAndOpen)(u), i(null))
  }, [s, q]);
  let Q = (0, v.useChannelSummariesExperiment)(u),
    $ = null != u && u.isPrivate(),
    ee = (0, x.default)($),
    et = (0, x.default)(null == u ? void 0 : u.id);
  l.useEffect(() => {
    let e = ee && !$,
      t = ee && $ && (null == u ? void 0 : u.id) !== et;
    (e || t) && (0, D.markDismissibleContentAsDismissed)(h.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
      dismissAction: eX.ContentDismissActionType.AUTO
    })
  }, [null == u ? void 0 : u.id, et, $, ee]);
  let {
    left: en
  } = T.ChannelEmojisExperiment.useExperiment({
    location: "781dc9_2"
  }, {
    autoTrackExposure: !1
  }), er = (0, p.useHasAnyModalOpen)();
  return (0, a.jsx)(e2, {
    guildId: null == u ? void 0 : u.guild_id,
    channelId: r,
    channel: u,
    channelName: Z,
    formattedChannelName: X,
    parentChannel: C,
    voiceChannel: m,
    layout: U,
    needSubscriptionToAccess: g,
    isLurking: P,
    hasModalOpen: er,
    section: B,
    channelSidebarState: G,
    guildSidebarState: Y,
    guild: S,
    searchId: (0, f.useStateFromStores)([ey.default], () => ey.default.getCurrentSearchId()),
    showCall: !g && O,
    nsfwAgree: (0, f.useStateFromStores)([ej.default], () => ej.default.didAgree(null == u ? void 0 : u.guild_id)),
    isMobile: (0, f.useStateFromStores)([eO.default], () => (null == u ? void 0 : u.type) === ez.ChannelTypes.DM && eO.default.isMobileOnline(u.getRecipientId()), [u]),
    isUnavailable: (0, f.useStateFromStores)([eR.default], () => (null == u ? void 0 : u.guild_id) != null && eR.default.isUnavailable(u.guild_id), [u]),
    showRealNameModal: k,
    showWelcomeModal: !b && V,
    showFollowButton: (null == u ? void 0 : u.type) === ez.ChannelTypes.GUILD_ANNOUNCEMENT && (null == S ? void 0 : S.hasFeature(ez.GuildFeatures.NEWS)) || !1,
    ...(0, f.useStateFromStoresObject)([eU.default], () => ({
      hasVideo: null != u && eU.default.hasVideo(u.id)
    }), [u]),
    inCall: J,
    selectedParticipant: w,
    nsfwAllowed: (null == F ? void 0 : F.nsfwAllowed) === !0,
    showChannelSummaries: Q,
    channelEmojiLeftOfIcon: en,
    isFavorites: K,
    headerGuildBreadcrumbPosition: K ? "left" : "right"
  })
})