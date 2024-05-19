"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
  }
}), n("47120"), n("411104");
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  i = n("442837"),
  r = n("846519"),
  o = n("481060"),
  u = n("475179"),
  d = n("239091"),
  c = n("146773"),
  f = n("888651"),
  h = n("619915"),
  m = n("339340"),
  C = n("201895"),
  p = n("718589"),
  g = n("933557"),
  E = n("557135"),
  _ = n("873696"),
  S = n("446226"),
  I = n("305325"),
  N = n("281956"),
  T = n("66999"),
  A = n("554747"),
  L = n("506936"),
  v = n("574176"),
  x = n("359110"),
  R = n("155409"),
  M = n("695346"),
  y = n("592125"),
  O = n("430824"),
  D = n("607744"),
  b = n("496675"),
  j = n("306680"),
  P = n("9156"),
  G = n("979651"),
  U = n("974029"),
  w = n("934415"),
  B = n("98597"),
  F = n("648501"),
  H = n("473403"),
  V = n("830993"),
  k = n("653577"),
  Y = n("207055"),
  W = n("981631"),
  K = n("647086"),
  z = n("689938"),
  Z = n("513285");

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class Q extends B.default {
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
    return (0, w.isChannelFull)(e, G.default, O.default)
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
    } = this.props, i = null === (e = (0, _.getChannelSubtitle)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle, {
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
      location: W.AnalyticsLocations.GUILD_CHANNEL_LIST
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
      connectUserDropTarget: m,
      connectDragPreview: g,
      canReorderChannel: E,
      canMoveMembers: _,
      showTutorial: S,
      hasActiveEvent: I,
      embeddedApps: N,
      isSubscriptionGated: T,
      isFavoriteSuggestion: A,
      withGuildIcon: L
    } = this.props, {
      shouldShowActivities: v,
      shouldShowGuildVerificationPopout: x
    } = this.state, M = this.getVoiceStatesCount(), y = (0, l.jsxs)("li", {
      className: s()(this.getModeClass(), {
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
              return (0, l.jsxs)(H.default, {
                className: Z.iconVisibility,
                iconClassName: s()({
                  [Z.iconLive]: I
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
                connectDragPreview: g,
                isFavoriteSuggestion: A,
                "aria-label": (0, C.default)({
                  channel: e,
                  unread: a,
                  mentionCount: r,
                  userCount: M,
                  embeddedActivitiesCount: N.length,
                  isSubscriptionGated: T
                }),
                "aria-describedby": (0, p.default)({
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
    return _ && (y = m(y)), E && (y = f(h(y))), S && (y = (0, l.jsx)(R.default, {
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: -20,
      children: y
    })), y
  }
  constructor(...e) {
    super(...e), X(this, "state", {
      shouldShowActivities: !1,
      shouldShowGuildVerificationPopout: !1,
      hovered: !1
    }), X(this, "activitiesHideTimeout", new r.Timeout), X(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: !1
      })
    }), X(this, "handleVoiceConnect", () => {
      let {
        locked: e,
        connected: t,
        channel: n,
        unverifiedAccount: l,
        needSubscriptionToAccess: a
      } = this.props;
      l && this.setState({
        shouldShowGuildVerificationPopout: !0
      }), E.default.handleVoiceConnect({
        channel: n,
        connected: t,
        needSubscriptionToAccess: a,
        locked: e
      })
    }), X(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, a = O.default.getGuild(t.getGuildId());
      null != a && (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("8137"), n.e("83331")]).then(n.bind(n, "213202"));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: a
        })
      })
    }), X(this, "handleMouseEnter", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: !0,
        hovered: !0
      })
    }), X(this, "handleMouseLeave", () => {
      this.activitiesHideTimeout.start(100, () => this.setState({
        shouldShowActivities: !1,
        hovered: !1
      }))
    }), X(this, "closePopout", () => {
      this.activitiesHideTimeout.stop(), this.setState({
        shouldShowActivities: !1
      })
    }), X(this, "handleClick", () => {
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      null != t && (0, N.shouldShowMembershipVerificationGate)(t) && (0, I.openMemberVerificationModal)(t), this.handleVoiceConnect()
    }), X(this, "handleVoiceStatusClick", e => {
      let {
        connected: t,
        channel: a
      } = this.props;
      t && (e.stopPropagation(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "339340"));
        return t => (0, l.jsx)(e, {
          channel: a,
          ...t
        })
      }, {
        modalKey: m.VOICE_CHANNEL_STATUS_MODAL_KEY
      }))
    }), X(this, "renderPopout", () => {
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
        return (0, l.jsx)(V.default, {
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
    }), X(this, "renderOpenChatButton", () => {
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
            className: s()(Z.iconItem, n ? Z.alwaysShown : null),
            onClick: () => {
              u.default.updateChatOpen(e.id, !0), (0, x.transitionToChannel)(e.id)
            },
            "aria-label": z.default.Messages.OPEN_CHAT,
            onMouseEnter: a,
            onMouseLeave: i,
            onFocus: r,
            onBlur: d,
            children: (0, l.jsx)(U.default, {
              width: 16,
              height: 16,
              className: Z.actionIcon
            })
          })
        }
      })
    }), X(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? z.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null
    })
  }
}
let J = (0, c.makeChannelSortable)((0, f.makeVoiceUserDroppable)(Q));

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
  })), c = (0, i.useStateFromStores)([P.default], () => P.default.resolveUnreadSetting(n)), f = (0, i.useStateFromStoresObject)([y.default, D.default, b.default], () => {
    let e = y.default.getChannel(n.parent_id),
      l = D.default.getCheck(n.guild_id);
    return {
      canManageChannel: b.default.can(W.Permissions.MANAGE_CHANNELS, n),
      canReorderChannel: !0 !== a && (t.id === K.FAVORITES_RAW_GUILD_ID || (null != e ? b.default.can(W.Permissions.MANAGE_CHANNELS, e) : b.default.can(W.Permissions.MANAGE_CHANNELS, t))),
      canMoveMembers: b.default.can(W.Permissions.MOVE_MEMBERS, n),
      locked: !b.default.can(W.Permissions.CONNECT, n),
      bypassLimit: b.default.can(W.Permissions.MOVE_MEMBERS, n),
      unverifiedAccount: !l.canChat
    }
  }), m = (0, i.useStateFromStores)([G.default], () => G.default.hasVideo(n.id)), C = (0, h.default)(n), p = (0, g.default)(n), E = (0, A.useActiveEvent)(n.id), {
    isSubscriptionGated: _,
    needSubscriptionToAccess: I
  } = (0, T.default)(n.id), N = (0, S.default)(), L = (0, i.useStateFromStores)([P.default], () => P.default.isFavorite(t.id, n.id)), x = e.connected || (null == N ? void 0 : N.channelId) === n.id, {
    enableHangStatus: R,
    allowChannelTopic: M
  } = v.HangStatusExperiment.useExperiment({
    guildId: n.guild_id,
    location: "VoiceChannel"
  }, {
    autoTrackExposure: !1
  }), O = (0, F.default)({
    channel: n,
    isChannelSelected: r,
    isChannelCollapsed: o,
    voiceStates: u,
    isSubscriptionGated: _,
    needSubscriptionToAccess: I,
    enableConnectedUserLimit: !0,
    enableActivities: !0
  }), U = x && null == O;
  return (0, l.jsx)(J, {
    channelName: p,
    embeddedApps: C,
    embeddedActivityType: W.ActivityTypes.PLAYING,
    video: m,
    hasActiveEvent: null != E,
    isSubscriptionGated: _,
    needSubscriptionToAccess: I,
    ...d,
    ...f,
    ...e,
    connected: x,
    isFavoriteSuggestion: s && !L,
    forceShowButtons: U,
    channelInfo: O,
    enableHangStatus: R,
    allowChannelTopic: M,
    resolvedUnreadSetting: c
  })
}