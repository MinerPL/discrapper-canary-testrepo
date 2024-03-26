"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
  }
}), n("222007"), n("70102");
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("446674"),
  r = n("862337"),
  o = n("77078"),
  u = n("255397"),
  d = n("272030"),
  c = n("667771"),
  f = n("650912"),
  h = n("575136"),
  C = n("843624"),
  p = n("139375"),
  m = n("481699"),
  E = n("679653"),
  g = n("242740"),
  I = n("557661"),
  S = n("261552"),
  _ = n("233322"),
  N = n("157186"),
  T = n("848848"),
  A = n("534222"),
  L = n("106346"),
  v = n("699209"),
  x = n("144491"),
  R = n("12896"),
  M = n("845579"),
  O = n("42203"),
  y = n("305961"),
  D = n("88093"),
  b = n("957255"),
  j = n("660478"),
  G = n("282109"),
  U = n("800762"),
  P = n("109264"),
  w = n("404008"),
  F = n("783735"),
  B = n("39347"),
  V = n("41594"),
  H = n("744925"),
  k = n("199334"),
  Y = n("884155"),
  K = n("49111"),
  W = n("695838"),
  z = n("782340"),
  Z = n("65369");
class X extends F.default {
  componentWillUnmount() {
    this.activitiesHideTimeout.stop()
  }
  getVoiceStatesCount() {
    var e;
    let {
      voiceStates: t
    } = this.props;
    return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0
  }
  isFull() {
    let {
      channel: e
    } = this.props;
    return (0, w.isChannelFull)(e, U.default, y.default)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    if (n) return Z.containerUserOver;
    if (null != t) return e > t ? Z.containerDragAfter : Z.containerDragBefore;
    return Z.containerDefault
  }
  renderSubtitle() {
    var e;
    let {
      channel: t,
      connected: n,
      enableHangStatus: a,
      allowChannelTopic: s
    } = this.props, i = null === (e = (0, I.getChannelSubtitle)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle, {
      hovered: r
    } = this.state;
    return (0, l.jsx)(k.default, {
      onClick: this.handleVoiceStatusClick,
      channel: t,
      connected: n,
      subtitle: i,
      hovered: r,
      enableHangStatus: a,
      allowChannelTopic: s
    })
  }
  renderVoiceUsers() {
    let {
      channel: e,
      voiceStates: t,
      collapsed: n,
      withGuildIcon: a,
      tabIndex: s
    } = this.props;
    return (0, l.jsx)(Y.default, {
      channel: e,
      collapsed: n,
      collapsedMax: 6,
      voiceStates: t,
      withGuildIcon: a,
      tabIndex: s,
      location: K.AnalyticsLocations.GUILD_CHANNEL_LIST
    })
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == e ? null : (0, l.jsx)("div", {
      className: Z.channelInfo,
      children: e
    })
  }
  render() {
    let {
      channel: e,
      selected: t,
      connected: n,
      unread: a,
      resolvedUnreadSetting: i,
      mentionCount: r,
      locked: u,
      sorting: d,
      isUserOver: c,
      connectChannelDropTarget: f,
      connectChannelDragSource: h,
      connectUserDropTarget: C,
      connectDragPreview: E,
      canReorderChannel: g,
      canMoveMembers: I,
      showTutorial: S,
      hasActiveEvent: _,
      embeddedApps: N,
      isSubscriptionGated: T,
      isFavoriteSuggestion: A,
      withGuildIcon: L
    } = this.props, {
      shouldShowActivities: v,
      shouldShowGuildVerificationPopout: x
    } = this.state, M = this.getVoiceStatesCount(), O = (0, l.jsxs)("li", {
      className: s(this.getModeClass(), {
        [Z.disabled]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: [(0, l.jsx)("div", {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: (0, l.jsx)(o.Popout, {
          position: "right",
          renderPopout: this.renderPopout,
          spacing: 0,
          onRequestClose: this.closeGuildVerificationPopout,
          shouldShow: v && !d && !c && !x || x,
          children: () => (0, l.jsx)(o.Tooltip, {
            text: this.getTooltipText(),
            children: o => {
              let {
                onClick: d,
                onContextMenu: c,
                ...f
              } = o;
              return (0, l.jsxs)(V.default, {
                className: Z.iconVisibility,
                iconClassName: s({
                  [Z.iconLive]: _
                }),
                channel: e,
                selected: !A && t,
                connected: n,
                unread: n ? a : void 0,
                resolvedUnreadSetting: i,
                mentionCount: r,
                locked: u,
                subtitle: this.renderSubtitle(),
                onClick: () => {
                  this.handleClick(), null == d || d()
                },
                onContextMenu: e => {
                  this.handleContextMenu(e), null == c || c()
                },
                connectDragPreview: E,
                isFavoriteSuggestion: A,
                "aria-label": (0, p.default)({
                  channel: e,
                  unread: a,
                  mentionCount: r,
                  userCount: M,
                  embeddedActivitiesCount: N.length,
                  isSubscriptionGated: T
                }),
                "aria-describedby": (0, m.default)({
                  channel: e,
                  embeddedApps: N
                }),
                withGuildIcon: L,
                ...f,
                children: [A && this.renderAcceptSuggestionButton(), A && this.renderRemoveSuggestionButton(), !A && this.renderOpenChatButton(), !A && this.renderInviteButton(), !A && this.renderEditButton(), !A && this.renderChannelInfo()]
              })
            }
          })
        })
      }), this.renderVoiceUsers()]
    });
    return I && (O = C(O)), g && (O = f(h(O))), S && (O = (0, l.jsx)(R.default, {
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: -20,
      children: O
    })), O
  }
  constructor(...e) {
    super(...e), this.state = {
      shouldShowActivities: !1,
      shouldShowGuildVerificationPopout: !1,
      hovered: !1
    }, this.activitiesHideTimeout = new r.Timeout, this.closeGuildVerificationPopout = () => {
      this.setState({
        shouldShowGuildVerificationPopout: !1
      })
    }, this.handleVoiceConnect = () => {
      let {
        locked: e,
        connected: t,
        channel: n,
        unverifiedAccount: l,
        needSubscriptionToAccess: a
      } = this.props;
      l && this.setState({
        shouldShowGuildVerificationPopout: !0
      }), g.default.handleVoiceConnect({
        channel: n,
        connected: t,
        needSubscriptionToAccess: a,
        locked: e
      })
    }, this.handleContextMenu = e => {
      let {
        channel: t
      } = this.props, a = y.default.getGuild(t.getGuildId());
      null != a && (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("168003").then(n.bind(n, "168003"));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: a
        })
      })
    }, this.handleMouseEnter = () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: !0,
        hovered: !0
      })
    }, this.handleMouseLeave = () => {
      this.activitiesHideTimeout.start(100, () => this.setState({
        shouldShowActivities: !1,
        hovered: !1
      }))
    }, this.closePopout = () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: !1
      })
    }, this.handleClick = () => {
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      null != t && (0, N.shouldShowMembershipVerificationGate)(t) && (0, _.openMemberVerificationModal)(t), this.handleVoiceConnect()
    }, this.handleVoiceStatusClick = e => {
      let {
        connected: t,
        channel: a
      } = this.props;
      t && (e.stopPropagation(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("843624").then(n.bind(n, "843624"));
        return t => (0, l.jsx)(e, {
          channel: a,
          ...t
        })
      }, {
        modalKey: C.VOICE_CHANNEL_STATUS_MODAL_KEY
      }))
    }, this.renderPopout = () => {
      let {
        channel: e,
        voiceStates: t,
        sorting: n,
        isUserOver: a,
        selected: s,
        guild: i
      } = this.props, {
        shouldShowActivities: r,
        shouldShowGuildVerificationPopout: o
      } = this.state;
      if (r && !n && !a && !o) {
        let n = M.ActivityRestrictedGuilds.getSetting().includes(i.id);
        return (0, l.jsx)(H.default, {
          onAction: this.closePopout,
          guild: i,
          channel: e,
          voiceStates: t,
          isChannelSelected: s,
          shouldShowSettingNudge: n
        })
      }
      if (o) return (0, l.jsx)(L.default, {
        type: L.GuildVerificationPopoutTypes.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }, this.renderOpenChatButton = () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, l.jsx)(o.Tooltip, {
        text: z.default.Messages.OPEN_CHAT,
        children: t => {
          let {
            onMouseEnter: a,
            onMouseLeave: i,
            onFocus: r,
            onBlur: d
          } = t;
          return (0, l.jsx)(o.Clickable, {
            className: s(Z.iconItem, n ? Z.alwaysShown : null),
            onClick: () => {
              u.default.updateChatOpen(e.id, !0), (0, x.transitionToChannel)(e.id)
            },
            "aria-label": z.default.Messages.OPEN_CHAT,
            onMouseEnter: a,
            onMouseLeave: i,
            onFocus: r,
            onBlur: d,
            children: (0, l.jsx)(P.default, {
              width: 16,
              height: 16,
              className: Z.actionIcon
            })
          })
        }
      })
    }, this.getTooltipText = () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? z.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null
    }
  }
}
let Q = (0, c.makeChannelSortable)((0, f.makeVoiceUserDroppable)(X));

function q(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: a,
    isFavoriteCategory: s,
    selected: r,
    collapsed: o,
    voiceStates: u
  } = e, d = (0, i.useStateFromStoresObject)([j.default], () => ({
    unread: j.default.hasUnread(n.id),
    mentionCount: j.default.getMentionCount(n.id)
  })), c = (0, i.useStateFromStores)([G.default], () => G.default.resolveUnreadSetting(n)), f = (0, i.useStateFromStoresObject)([O.default, D.default, b.default], () => {
    let e = O.default.getChannel(n.parent_id),
      l = D.default.getCheck(n.guild_id);
    return {
      canManageChannel: b.default.can(K.Permissions.MANAGE_CHANNELS, n),
      canReorderChannel: !0 !== a && (t.id === W.FAVORITES_RAW_GUILD_ID || (null != e ? b.default.can(K.Permissions.MANAGE_CHANNELS, e) : b.default.can(K.Permissions.MANAGE_CHANNELS, t))),
      canMoveMembers: b.default.can(K.Permissions.MOVE_MEMBERS, n),
      locked: !b.default.can(K.Permissions.CONNECT, n),
      bypassLimit: b.default.can(K.Permissions.MOVE_MEMBERS, n),
      unverifiedAccount: !l.canChat
    }
  }), C = (0, i.useStateFromStores)([U.default], () => U.default.hasVideo(n.id)), p = (0, h.default)(n), m = (0, E.default)(n), g = (0, A.useActiveEvent)(n.id), {
    isSubscriptionGated: I,
    needSubscriptionToAccess: _
  } = (0, T.default)(n.id), N = (0, S.default)(), L = (0, i.useStateFromStores)([G.default], () => G.default.isFavorite(t.id, n.id)), x = e.connected || (null == N ? void 0 : N.channelId) === n.id, {
    enableHangStatus: R,
    allowChannelTopic: M
  } = v.HangStatusExperiment.useExperiment({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }, {
    autoTrackExposure: !1
  }), y = (0, B.default)({
    channel: n,
    isChannelSelected: r,
    isChannelCollapsed: o,
    voiceStates: u,
    isSubscriptionGated: I,
    needSubscriptionToAccess: _,
    enableConnectedUserLimit: !0,
    enableActivities: !0
  }), P = x && null == y;
  return (0, l.jsx)(Q, {
    channelName: m,
    embeddedApps: p,
    embeddedActivityType: K.ActivityTypes.PLAYING,
    video: C,
    hasActiveEvent: null != g,
    isSubscriptionGated: I,
    needSubscriptionToAccess: _,
    ...d,
    ...f,
    ...e,
    connected: x,
    isFavoriteSuggestion: s && !L,
    forceShowButtons: P,
    channelInfo: y,
    enableHangStatus: R,
    allowChannelTopic: M,
    resolvedUnreadSetting: c
  })
}