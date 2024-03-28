"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("392711"),
  d = n.n(u),
  c = n("613828"),
  f = n("442837"),
  h = n("524437"),
  m = n("952265"),
  p = n("481060"),
  E = n("239091"),
  C = n("377993"),
  g = n("457868"),
  S = n("561472"),
  _ = n("36311"),
  T = n("112724"),
  I = n("902840"),
  A = n("110924"),
  v = n("317381"),
  N = n("82888"),
  x = n("917107"),
  M = n("358221"),
  R = n("677601"),
  L = n("541716"),
  y = n("236091"),
  O = n("663993"),
  j = n("252618"),
  P = n("201493"),
  D = n("605236"),
  b = n("174130"),
  U = n("588322"),
  F = n("874950"),
  w = n("517525"),
  k = n("445384"),
  H = n("613464"),
  B = n("730647"),
  G = n("66999"),
  V = n("826763"),
  W = n("180216"),
  Y = n("51486"),
  z = n("168843"),
  Z = n("442336"),
  K = n("57304"),
  X = n("605953"),
  q = n("374306"),
  Q = n("984370"),
  J = n("910611"),
  $ = n("915718"),
  ee = n("518311"),
  et = n("180539"),
  en = n("882378"),
  ea = n("207868"),
  el = n("246919"),
  es = n("754688"),
  ei = n("41776"),
  er = n("134483"),
  eo = n("703656"),
  eu = n("359110"),
  ed = n("854709"),
  ec = n("14091"),
  ef = n("6025"),
  eh = n("897473"),
  em = n("922482"),
  ep = n("504185"),
  eE = n("657218"),
  eC = n("66556"),
  eg = n("739830"),
  eS = n("377929"),
  e_ = n("900157"),
  eT = n("108427"),
  eI = n("171368"),
  eA = n("123579"),
  ev = n("524329"),
  eN = n("995532"),
  ex = n("738643"),
  eM = n("433355"),
  eR = n("592125"),
  eL = n("703558"),
  ey = n("486472"),
  eO = n("731290"),
  ej = n("430824"),
  eP = n("158776"),
  eD = n("768119"),
  eb = n("944486"),
  eU = n("914010"),
  eF = n("594174"),
  ew = n("979651"),
  ek = n("368666"),
  eH = n("792125"),
  eB = n("933557"),
  eG = n("287746"),
  eV = n("325708"),
  eW = n("335615"),
  eY = n("992744"),
  ez = n("923029"),
  eZ = n("981631"),
  eK = n("918559"),
  eX = n("354459"),
  eq = n("921944"),
  eQ = n("440493"),
  eJ = n("157925"),
  e$ = n("689938"),
  e0 = n("121950");

function e1(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let e2 = (0, O.makeLazy)({
  createPromise: () => Promise.all([n.e("99387"), n.e("49131")]).then(n.bind(n, "434878")),
  webpackId: "434878",
  renderLoader: () => (0, a.jsx)("div", {
    className: e0.loader,
    children: (0, a.jsx)(p.Spinner, {})
  }),
  name: "ForumChannel"
});
class e4 extends l.PureComponent {
  componentDidMount() {
    (0, eT.trackAppUIViewed)("guild_channel")
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
    o()(null != t, "Missing channel in Channel.openChannelContextMenu"), o()(null != l, "Missing guild in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
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
    o()(null != t, "Missing channel in Channel.openChannelContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
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
    let l = eF.default.getUser(t.getRecipientId());
    o()(null != l, "Missing user in Channel.openDMContextMenu"), (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("56826")]).then(n.bind(n, "131404"));
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
      case eZ.ChannelTypes.GUILD_STAGE_VOICE:
        return (0, a.jsx)(ep.default, {
          channel: e
        }, e.id);
      case eZ.ChannelTypes.GUILD_VOICE:
      case eZ.ChannelTypes.DM:
      case eZ.ChannelTypes.GROUP_DM:
      case eZ.ChannelTypes.PUBLIC_THREAD:
      case eZ.ChannelTypes.PRIVATE_THREAD:
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
    if (o()(null != e, "Missing channel in Channel.renderChat"), s) return (o()(null != n, "premium channels must exist within a guild"), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel()) ? (0, a.jsx)(V.default, {
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
    if (e.isDirectory()) return o()(null != n, "directory channels must exist within a guild"), (0, a.jsx)(P.default, {
      channel: e,
      guild: n
    });
    if (e.isForumLikeChannel()) {
      o()(null != n, "forum channels must exist within a guild");
      let t = {
        isThreadSidebarFloating: this.state.isThreadSidebarFloating,
        threadSidebarWidth: this.state.threadSidebarWidth
      };
      return (0, a.jsx)(e2, {
        channel: e,
        guild: n,
        sidebarState: t
      }, e.id)
    }
    return (0, a.jsx)(eG.default, {
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
    if (o()(null != t, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s);
    else if (i === eZ.ChannelSections.PROFILE && t.isPrivate()) return (0, a.jsx)(eA.default, {
      channel: t,
      showCall: r
    }, "private-channel-profile-".concat(t.id));
    else if (i === eZ.ChannelSections.MEMBERS) switch (t.type) {
      case eZ.ChannelTypes.GROUP_DM:
        return (0, a.jsx)(C.default, {
          channel: t
        }, "private-channel-recipients-".concat(t.id));
      case eZ.ChannelTypes.GUILD_DIRECTORY:
      case eZ.ChannelTypes.GUILD_FORUM:
      case eZ.ChannelTypes.GUILD_MEDIA:
      case eZ.ChannelTypes.GUILD_ANNOUNCEMENT:
      case eZ.ChannelTypes.GUILD_TEXT:
        var u;
        if (null != l && l.hasFeature(eZ.GuildFeatures.CLAN)) return (0, a.jsx)(F.default, {
          guildId: l.id,
          channel: t
        }, "clan-sidebar-".concat(t.id));
        let d = !0 === eZ.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (u = t.guild_id) && void 0 !== u ? u : t.id;
        return (0, a.jsx)(eW.default, {
          channel: t
        }, "channel-members-".concat(d));
      case eZ.ChannelTypes.ANNOUNCEMENT_THREAD:
        if (null != n) return (0, a.jsx)(eW.default, {
          channel: n
        }, "channel-members-".concat(n.id));
        break;
      case eZ.ChannelTypes.PUBLIC_THREAD:
      case eZ.ChannelTypes.PRIVATE_THREAD:
        if (!t.isArchivedThread() && null != l) return (0, a.jsx)(g.default, {
          channel: t,
          guild: l
        }, "channel-members-".concat(t.id))
    } else if (i === eZ.ChannelSections.SEARCH && null != e) return (0, a.jsx)(ec.default, {
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
    return null == e || null == t || r || l ? null : (o && (0, p.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("57372")]).then(n.bind(n, "784280"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => k.default.viewPrompt(eQ.GuildPrompts.REAL_NAME_PROMPT, t),
      modalKey: "Guild Hub Real Name Modal"
    }), s && (0, p.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("90542")]).then(n.bind(n, "184782"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t
      })
    }, {
      onCloseCallback: () => (0, ev.welcomeScreenViewed)(t, i),
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
    if (n === eZ.ChannelSections.SIDEBAR_CHAT && null != l) {
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
            width: eZ.DEFAULT_CHAT_SIDEBAR_WIDTH
          },
          children: (0, a.jsx)(H.default, {
            guildId: e,
            userId: t,
            onClose: () => ef.default.closeGuildSidebar(e)
          })
        })
      } else return null
    }
    if (null == e) return null;
    let u = (null == t ? void 0 : t.type) != null && eZ.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
      d = o - eZ.CHANNEL_SIDEBAR_WIDTH - u;
    return (0, a.jsx)(eV.default, {
      sidebarType: (null == t ? void 0 : t.type) != null && eZ.ChannelTypesSets.GUILD_THREADS_ONLY.has(t.type) ? eV.ChatSidebarType.PostSidebar : eV.ChatSidebarType.ThreadSidebar,
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
    if (s) return (0, a.jsx)(eY.default, {});
    if (null == e) return (0, a.jsx)(ez.default, {
      channelId: this.props.channelId
    });
    let h = o === eZ.ChannelSections.SIDEBAR_CHAT,
      m = null != d && !h,
      p = !e.isForumLikeChannel() && !u,
      E = null == t ? void 0 : t.name;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(j.AppPageTitle, {
        location: E,
        subsection: null != n ? n : void 0
      }), (0, a.jsxs)("div", {
        className: i()(e0.chat, {
          [e0.threadSidebarOpen]: h || m,
          [e0.threadSidebarFloating]: h && f
        }),
        children: [p ? (0, a.jsx)(S.default, {
          style: {
            right: h ? c : void 0
          },
          className: e0.uploadArea,
          channel: e,
          draftType: eL.DraftType.ChannelMessage
        }) : null, l ? null : this.renderHeaderBar(), this.renderCall(), this.renderEmbeddedActivityPanel(), (0, a.jsxs)("div", {
          className: i()(e0.content, {
            [e0.noChat]: r === eZ.ChannelLayouts.NO_CHAT
          }),
          children: [this.renderChat(), this.renderSidebar()]
        })]
      }), this.renderThreadSidebar(), (0, a.jsx)(Y.default, {})]
    })
  }
  constructor(...e) {
    super(...e), e1(this, "state", {
      topicExpanded: !1,
      threadSidebarWidth: void 0,
      isThreadSidebarFloating: !1
    }), e1(this, "handleTitleParentClick", () => {
      let {
        parentChannel: e
      } = this.props;
      null != e && (0, eu.transitionToChannel)(e.id)
    }), e1(this, "_handleContextMenu", (e, t) => {
      switch (t.type) {
        case eZ.ChannelTypes.GUILD_VOICE:
        case eZ.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eZ.ChannelTypes.GUILD_TEXT:
        case eZ.ChannelTypes.GUILD_FORUM:
        case eZ.ChannelTypes.GUILD_MEDIA:
          this.openChannelContextMenu(e, t);
          break;
        case eZ.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eZ.ChannelTypes.PUBLIC_THREAD:
        case eZ.ChannelTypes.PRIVATE_THREAD:
          this.openThreadContextMenu(e, t);
          break;
        case eZ.ChannelTypes.DM:
          this.openDMContextMenu(e, t)
      }
    }), e1(this, "handleContextMenu", e => {
      o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"), this._handleContextMenu(e, this.props.channel)
    }), e1(this, "handleParentContextMenu", e => {
      o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"), this._handleContextMenu(e, this.props.parentChannel)
    }), e1(this, "handleThreadSidebarResize", (e, t) => {
      this.setState({
        threadSidebarWidth: e,
        isThreadSidebarFloating: t
      })
    }), e1(this, "openUserProfile", () => {
      let {
        channel: e
      } = this.props;
      o()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"), (0, eI.openUserProfileModal)({
        userId: e.getRecipientId(),
        guildId: e.guild_id,
        channelId: e.id,
        analyticsLocation: {
          section: eZ.AnalyticsSections.CHANNEL_HEADER
        }
      })
    }), e1(this, "renderClipsEnabledIndicatorToolbarItem", () => {
      let {
        inCall: e,
        voiceChannel: t
      } = this.props;
      return e ? (0, a.jsx)(y.default, {
        channelId: null != t ? t.id : null
      }) : null
    }), e1(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
      let {
        selectedParticipant: e
      } = this.props;
      return (null == e ? void 0 : e.type) !== eX.ParticipantTypes.STREAM ? null : (0, a.jsx)(w.default, {
        size: ek.default.Sizes.LARGE,
        participant: e,
        showQuality: !0
      }, "live-indicator")
    }), e1(this, "renderHeaderToolbar", () => {
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
        case eZ.ChannelTypes.GUILD_STAGE_VOICE:
        case eZ.ChannelTypes.GUILD_VOICE:
          break;
        case eZ.ChannelTypes.DM:
          s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)($.default, {
            channel: e
          }, "calls")), s.push((0, a.jsx)(K.default, {
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
        case eZ.ChannelTypes.GROUP_DM:
          if (s.push(this.renderClipsEnabledIndicatorToolbarItem()), s.push(this.renderStreamQualityLiveIndicatorToolbarItem()), s.push((0, a.jsx)($.default, {
              channel: e
            }, "calls")), s.push((0, a.jsx)(K.default, {
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
        case eZ.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eZ.ChannelTypes.PRIVATE_THREAD:
        case eZ.ChannelTypes.PUBLIC_THREAD:
          null != t && !t.isForumLikeChannel() && s.push((0, a.jsx)(eC.default, {
            channel: t
          }, "browser")), e.isVocalThread() && s.push((0, a.jsx)(ea.default, {
            channel: e
          }, "thread-call")), s.push((0, a.jsx)(eg.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(K.default, {
            channel: e
          }, "pins")), !e.isArchivedThread() && s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members")), null != t && (0, I.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(X.default, {
            channel: e
          }, "summaries")), s.push((0, a.jsx)(eS.default, {
            channel: e
          }, "threads-overflow"));
          break;
        case eZ.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eZ.ChannelTypes.GUILD_TEXT:
          s.push((0, a.jsx)(b.default, {
            channel: e
          }, "favorites")), s.push((0, a.jsx)(eC.default, {
            channel: e
          }, "browser")), !n && s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "notifications")), s.push((0, a.jsx)(K.default, {
            channel: e
          }, "pins")), s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members")), (0, I.canSeeChannelSummaries)(e) && s.push((0, a.jsx)(X.default, {
            channel: e
          }, "summaries"));
          break;
        case eZ.ChannelTypes.GUILD_FORUM:
        case eZ.ChannelTypes.GUILD_MEDIA:
          !n && (s.push((0, a.jsx)(q.default, {
            channel: e
          }, "forum-onboarding")), s.push((0, a.jsx)(Z.default, {
            channel: e
          }, "notifications"))), !__OVERLAY__ && s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case eZ.ChannelTypes.GUILD_DIRECTORY:
          s.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"))
      }
      return s
    }), e1(this, "renderMobileToolbar", () => {
      let {
        channel: e
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
      let t = [];
      if (e.isSystemDM()) return t;
      switch (e.type) {
        case eZ.ChannelTypes.GUILD_STAGE_VOICE:
        case eZ.ChannelTypes.GUILD_VOICE:
        case eZ.ChannelTypes.DM:
          break;
        case eZ.ChannelTypes.GROUP_DM:
          t.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case eZ.ChannelTypes.ANNOUNCEMENT_THREAD:
        case eZ.ChannelTypes.PRIVATE_THREAD:
        case eZ.ChannelTypes.PUBLIC_THREAD:
          !e.isArchivedThread() && t.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"));
          break;
        case eZ.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eZ.ChannelTypes.GUILD_TEXT:
        case eZ.ChannelTypes.GUILD_FORUM:
        case eZ.ChannelTypes.GUILD_MEDIA:
        case eZ.ChannelTypes.GUILD_DIRECTORY:
          t.push((0, a.jsx)(z.default, {
            channelId: e.id
          }, "members"))
      }
      return t
    }), e1(this, "renderFollowButton", () => {
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
          } = await Promise.all([n.e("99387"), n.e("83816")]).then(n.bind(n, "720589"));
          return n => (0, a.jsx)(e, {
            channel: t,
            ...n
          })
        }),
        children: e$.default.Messages.FOLLOW
      }) : null
    }), e1(this, "renderHeaderBar", () => {
      let {
        channel: e,
        channelName: t,
        parentChannel: n,
        guild: l,
        guildId: s,
        showCall: r,
        hasVideo: u,
        headerGuildBreadcrumbPosition: d,
        isFavorites: c
      } = this.props;
      o()(null != e, "Missing channel in Channel.renderHeaderBar"), o()(null != t, "Should not be null if channel is not null.");
      let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
        h = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
      return (0, a.jsxs)("div", {
        className: e0.subtitleContainer,
        children: [(0, a.jsxs)(Q.default, {
          guildId: s,
          channelId: e.id,
          channelType: e.type,
          hideSearch: e.isDirectory() || c && !(0, ed.isFavoriteSearchEnabled)(),
          showDivider: c && !(0, ed.isFavoriteSearchEnabled)(),
          toolbar: this.renderHeaderToolbar(),
          mobileToolbar: this.renderMobileToolbar(),
          className: i()(e0.title, u && r ? (0, eH.getThemeClass)(eZ.ThemeTypes.DARK) : null),
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
            hasVideo: u,
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
    })
  }
}
let e3 = (0, T.default)(e4);
t.default = l.memo(function(e) {
  var t;
  let {
    providedChannel: n
  } = e, [s, i] = l.useState(null), r = (0, f.useStateFromStores)([eb.default], () => eb.default.getChannelId()), o = (0, f.useStateFromStores)([eb.default], () => eb.default.getVoiceChannelId()), u = (0, f.useStateFromStores)([eR.default], () => null != n ? n : eR.default.getChannel(r), [r, n]), p = (0, f.useStateFromStores)([eR.default], () => eR.default.getChannel(o), [o]), E = null == u ? void 0 : u.parent_id, C = (0, f.useStateFromStores)([eR.default], () => eR.default.getChannel(E), [E]), g = (0, f.useStateFromStores)([ej.default], () => ej.default.getGuild(null == u ? void 0 : u.guild_id), [u]), {
    needSubscriptionToAccess: S
  } = (0, G.default)(null !== (t = null == u ? void 0 : u.id) && void 0 !== t ? t : void 0), _ = (0, f.useStateFromStores)([M.default], () => {
    let e = null != r ? M.default.getParticipants(r) : [],
      t = null != r ? M.default.getActivityParticipants(r) : [];
    return e.length - t.length > 0
  }, [r]), T = (0, f.useStateFromStores)([v.default], () => {
    var e;
    return v.default.getSelfEmbeddedActivityForChannel(null !== (e = null == u ? void 0 : u.id) && void 0 !== e ? e : eZ.EMPTY_STRING_SNOWFLAKE_ID)
  }), N = (0, f.useStateFromStores)([v.default], () => v.default.getActivityPanelMode()), R = null != T && !(0, x.default)(null == u ? void 0 : u.id) && N === eK.ActivityPanelModes.PANEL, L = (0, f.useStateFromStores)([ew.default], () => null != u && u.isVocalThread() && !d().isEmpty(ew.default.getVoiceStatesForChannel(u.id)), [u]), y = (null == u ? void 0 : u.isGuildVocal()) || R || _ || L, {
    welcomeModalChannelId: O
  } = (0, c.useLocation)(), j = (0, f.useStateFromStores)([ei.default], () => null != u && ei.default.isLurking(u.guild_id), [u]), P = (0, f.useStateFromStores)([eN.default], () => eN.default.hasSeen(null == u ? void 0 : u.guild_id, j), [u, j]), b = (0, f.useStateFromStores)([M.default, v.default], () => null != v.default.getConnectedActivityChannelId() && v.default.getActivityPanelMode() === eK.ActivityPanelModes.PANEL ? v.default.getFocusedLayout() === eK.FocusedActivityLayouts.NO_CHAT ? eZ.ChannelLayouts.NO_CHAT : eZ.ChannelLayouts.NORMAL : null != r ? M.default.getLayout(r) : eZ.ChannelLayouts.NORMAL, [r]), U = (0, f.useStateFromStores)([M.default], () => null != u ? M.default.getSelectedParticipant(u.id) : null), F = (0, f.useStateFromStores)([eF.default], () => eF.default.getCurrentUser()), w = (0, el.default)(g), k = (0, ex.default)(O, null == g ? void 0 : g.id), {
    section: H,
    channelSidebarState: B
  } = (0, f.useStateFromStoresObject)([eM.default], () => ({
    section: eM.default.getSection(r, null == u ? void 0 : u.isDM()),
    channelSidebarState: eM.default.getSidebarState(r)
  }), [r, u]), V = null == g ? void 0 : g.id, W = (0, f.useStateFromStores)([eM.default], () => eM.default.getGuildSidebarState(V), [V]), Y = (0, f.useStateFromStores)([eU.default], () => eU.default.getGuildId()) === eZ.FAVORITES, z = (0, eB.default)(u), Z = (0, eB.default)(u, !0), K = null != u && o === u.id, X = null != u && u.isGuildStageVoice();
  l.useEffect(() => {
    var e, t, n;
    let a = (0, eo.getHistory)();
    if ((null == a ? void 0 : null === (e = a.location) || void 0 === e ? void 0 : e.state) === eJ.STAGE_INVITE_STATE_KEY) {
      let {
        channelId: e
      } = null !== (n = (0, es.tryParseChannelPath)(null == a ? void 0 : null === (t = a.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
      null != e && i(e)
    }
  }, []), l.useEffect(() => {
    null != s && null != u && X && u.id === s && !K && ((0, em.connectAndOpen)(u), i(null))
  }, [s, X]);
  let q = (0, I.useChannelSummariesExperiment)(u),
    Q = null != u && u.isPrivate(),
    J = (0, A.default)(Q),
    $ = (0, A.default)(null == u ? void 0 : u.id);
  l.useEffect(() => {
    let e = J && !Q,
      t = J && Q && (null == u ? void 0 : u.id) !== $;
    (e || t) && (0, D.markDismissibleContentAsDismissed)(h.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, {
      dismissAction: eq.ContentDismissActionType.AUTO
    })
  }, [null == u ? void 0 : u.id, $, Q, J]);
  let ee = (0, m.useHasAnyModalOpen)();
  return (0, a.jsx)(e3, {
    guildId: null == u ? void 0 : u.guild_id,
    channelId: r,
    channel: u,
    channelName: z,
    formattedChannelName: Z,
    parentChannel: C,
    voiceChannel: p,
    layout: b,
    needSubscriptionToAccess: S,
    isLurking: j,
    hasModalOpen: ee,
    section: H,
    channelSidebarState: B,
    guildSidebarState: W,
    guild: g,
    searchId: (0, f.useStateFromStores)([eD.default], () => eD.default.getCurrentSearchId()),
    showCall: !S && y,
    nsfwAgree: (0, f.useStateFromStores)([eO.default], () => eO.default.didAgree(null == u ? void 0 : u.guild_id)),
    isMobile: (0, f.useStateFromStores)([eP.default], () => (null == u ? void 0 : u.type) === eZ.ChannelTypes.DM && eP.default.isMobileOnline(u.getRecipientId()), [u]),
    isUnavailable: (0, f.useStateFromStores)([ey.default], () => (null == u ? void 0 : u.guild_id) != null && ey.default.isUnavailable(u.guild_id), [u]),
    showRealNameModal: w,
    showWelcomeModal: !P && k,
    showFollowButton: (null == u ? void 0 : u.type) === eZ.ChannelTypes.GUILD_ANNOUNCEMENT && (null == g ? void 0 : g.hasFeature(eZ.GuildFeatures.NEWS)) || !1,
    ...(0, f.useStateFromStoresObject)([ew.default], () => ({
      hasVideo: null != u && ew.default.hasVideo(u.id)
    }), [u]),
    inCall: K,
    selectedParticipant: U,
    nsfwAllowed: (null == F ? void 0 : F.nsfwAllowed) === !0,
    showChannelSummaries: q,
    isFavorites: Y,
    headerGuildBreadcrumbPosition: Y ? "left" : "right"
  })
})