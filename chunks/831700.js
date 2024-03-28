"use strict";
n.r(t), n.d(t, {
  default: function() {
    return J
  }
}), n("47120"), n("411104");
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  i = n("442837"),
  r = n("846519"),
  o = n("481060"),
  u = n("475179"),
  d = n("239091"),
  c = n("146773"),
  f = n("888651"),
  h = n("619915"),
  C = n("339340"),
  p = n("201895"),
  m = n("718589"),
  g = n("933557"),
  E = n("557135"),
  S = n("873696"),
  _ = n("446226"),
  I = n("305325"),
  N = n("281956"),
  T = n("66999"),
  A = n("554747"),
  L = n("506936"),
  v = n("574176"),
  x = n("359110"),
  R = n("155409"),
  M = n("695346"),
  O = n("592125"),
  y = n("430824"),
  D = n("607744"),
  b = n("496675"),
  j = n("306680"),
  G = n("9156"),
  U = n("979651"),
  P = n("974029"),
  w = n("934415"),
  F = n("98597"),
  B = n("648501"),
  V = n("473403"),
  H = n("830993"),
  k = n("653577"),
  Y = n("207055"),
  K = n("981631"),
  W = n("647086"),
  Z = n("689938"),
  z = n("294639");

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class Q extends F.default {
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
    if (n) return z.containerUserOver;
    if (null != t) return e > t ? z.containerDragAfter : z.containerDragBefore;
    return z.containerDefault
  }
  renderSubtitle() {
    var e;
    let {
      channel: t,
      connected: n,
      enableHangStatus: a,
      allowChannelTopic: s
    } = this.props, i = null === (e = (0, S.getChannelSubtitle)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle, {
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
      className: z.channelInfo,
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
      connectDragPreview: g,
      canReorderChannel: E,
      canMoveMembers: S,
      showTutorial: _,
      hasActiveEvent: I,
      embeddedApps: N,
      isSubscriptionGated: T,
      isFavoriteSuggestion: A,
      withGuildIcon: L
    } = this.props, {
      shouldShowActivities: v,
      shouldShowGuildVerificationPopout: x
    } = this.state, M = this.getVoiceStatesCount(), O = (0, l.jsxs)("li", {
      className: s()(this.getModeClass(), {
        [z.disabled]: this.isDisabled()
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
                className: z.iconVisibility,
                iconClassName: s()({
                  [z.iconLive]: I
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
    return S && (O = C(O)), E && (O = f(h(O))), _ && (O = (0, l.jsx)(R.default, {
      tutorialId: "voice-conversations",
      position: "right",
      offsetX: -20,
      children: O
    })), O
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
      } = this.props, a = y.default.getGuild(t.getGuildId());
      null != a && (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331")]).then(n.bind(n, "213202"));
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
        modalKey: C.VOICE_CHANNEL_STATUS_MODAL_KEY
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
    }), X(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, l.jsx)(o.Tooltip, {
        text: Z.default.Messages.OPEN_CHAT,
        children: t => {
          let {
            onMouseEnter: a,
            onMouseLeave: i,
            onFocus: r,
            onBlur: d
          } = t;
          return (0, l.jsx)(o.Clickable, {
            className: s()(z.iconItem, n ? z.alwaysShown : null),
            onClick: () => {
              u.default.updateChatOpen(e.id, !0), (0, x.transitionToChannel)(e.id)
            },
            "aria-label": Z.default.Messages.OPEN_CHAT,
            onMouseEnter: a,
            onMouseLeave: i,
            onFocus: r,
            onBlur: d,
            children: (0, l.jsx)(P.default, {
              width: 16,
              height: 16,
              className: z.actionIcon
            })
          })
        }
      })
    }), X(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? Z.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null
    })
  }
}
let q = (0, c.makeChannelSortable)((0, f.makeVoiceUserDroppable)(Q));

function J(e) {
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
  }), C = (0, i.useStateFromStores)([U.default], () => U.default.hasVideo(n.id)), p = (0, h.default)(n), m = (0, g.default)(n), E = (0, A.useActiveEvent)(n.id), {
    isSubscriptionGated: S,
    needSubscriptionToAccess: I
  } = (0, T.default)(n.id), N = (0, _.default)(), L = (0, i.useStateFromStores)([G.default], () => G.default.isFavorite(t.id, n.id)), x = e.connected || (null == N ? void 0 : N.channelId) === n.id, {
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
    isSubscriptionGated: S,
    needSubscriptionToAccess: I,
    enableConnectedUserLimit: !0,
    enableActivities: !0
  }), P = x && null == y;
  return (0, l.jsx)(q, {
    channelName: m,
    embeddedApps: p,
    embeddedActivityType: K.ActivityTypes.PLAYING,
    video: C,
    hasActiveEvent: null != E,
    isSubscriptionGated: S,
    needSubscriptionToAccess: I,
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