"use strict";
n.r(t), n.d(t, {
  default: function() {
    return z
  }
}), n("47120"), n("411104");
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("475179"),
  u = n("239091"),
  d = n("146773"),
  c = n("888651"),
  f = n("201895"),
  h = n("305325"),
  m = n("281956"),
  C = n("66999"),
  p = n("506936"),
  g = n("359110"),
  E = n("922482"),
  _ = n("431328"),
  S = n("501655"),
  I = n("427679"),
  N = n("71275"),
  T = n("201469"),
  A = n("680089"),
  L = n("592125"),
  v = n("430824"),
  x = n("607744"),
  R = n("496675"),
  M = n("306680"),
  y = n("9156"),
  O = n("979651"),
  D = n("514342"),
  b = n("974029"),
  j = n("934415"),
  P = n("98597"),
  G = n("648501"),
  U = n("473403"),
  w = n("207055"),
  B = n("981631"),
  F = n("647086"),
  H = n("689938"),
  V = n("513285"),
  k = n("562522");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class W extends P.default {
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
    return (0, j.isChannelFull)(e, O.default, v.default)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    if (n) return V.containerUserOver;
    if (null != t) return e > t ? V.containerDragAfter : V.containerDragBefore;
    return V.containerDefault
  }
  renderVoiceUsers() {
    let {
      channel: e,
      collapsed: t,
      tabIndex: n,
      speakerVoiceStates: a,
      numAudience: s
    } = this.props;
    return (0, l.jsx)(w.default, {
      channel: e,
      voiceStates: a,
      collapsed: t,
      tabIndex: n,
      location: B.AnalyticsLocations.GUILD_CHANNEL_LIST,
      numAudience: s
    })
  }
  renderChannelInfo() {
    return this.props.channelInfo
  }
  render() {
    let {
      channel: e,
      selected: t,
      connected: n,
      locked: a,
      connectChannelDropTarget: i,
      connectChannelDragSource: o,
      connectUserDropTarget: u,
      connectDragPreview: d,
      canReorderChannel: c,
      canMoveMembers: h,
      stageInstance: m,
      isSubscriptionGated: C,
      needSubscriptionToAccess: p,
      unread: g,
      resolvedUnreadSetting: E,
      mentionCount: _,
      isFavoriteSuggestion: S
    } = this.props, {
      shouldShowGuildVerificationPopout: I
    } = this.state, N = this.getVoiceStatesCount(), T = (0, l.jsxs)("li", {
      className: s()(this.getModeClass(), {
        [V.disabled]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: [(0, l.jsx)(r.Popout, {
        position: "right",
        renderPopout: this.renderPopout,
        spacing: 0,
        onRequestClose: this.closeGuildVerificationPopout,
        shouldShow: I,
        children: () => (0, l.jsx)(r.Tooltip, {
          text: this.getTooltipText(),
          children: i => {
            let {
              onClick: r,
              onContextMenu: o,
              ...u
            } = i;
            return (0, l.jsxs)(U.default, {
              className: V.iconVisibility,
              iconClassName: s()({
                [k.iconLive]: null != m
              }),
              channel: e,
              selected: !S && t,
              connected: n,
              unread: n ? g : void 0,
              resolvedUnreadSetting: E,
              mentionCount: _,
              locked: a,
              onClick: () => {
                this.handleClick(), null == r || r()
              },
              onContextMenu: e => {
                this.handleContextMenu(e), null == o || o()
              },
              connectDragPreview: d,
              subtitle: this.renderSubtitle(),
              isFavoriteSuggestion: S,
              "aria-label": (0, f.default)({
                channel: e,
                unread: g,
                mentionCount: _,
                userCount: N,
                isSubscriptionGated: C,
                needSubscriptionToAccess: p
              }),
              ...u,
              children: [S && this.renderAcceptSuggestionButton(), S && this.renderRemoveSuggestionButton(), !S && this.renderOpenChatButton(), !S && this.renderInviteButton(), !S && this.renderEditButton(), !S && this.renderChannelInfo()]
            })
          }
        })
      }), this.renderVoiceUsers()]
    });
    return h && (T = u(T)), c && (T = i(o(T))), T
  }
  constructor(...e) {
    super(...e), Y(this, "state", {
      shouldShowGuildVerificationPopout: !1
    }), Y(this, "closeGuildVerificationPopout", () => {
      this.setState({
        shouldShowGuildVerificationPopout: !1
      })
    }), Y(this, "handleClick", () => {
      let {
        channel: e,
        locked: t,
        connected: n,
        unverifiedAccount: l
      } = this.props, a = e.getGuildId();
      null != a && (0, m.shouldShowMembershipVerificationGate)(a) && (0, h.openMemberVerificationModal)(a), l && this.setState({
        shouldShowGuildVerificationPopout: !0
      }), !t && !n && !e.isRoleSubscriptionTemplatePreviewChannel() && (0, E.connectAndOpen)(e), !__OVERLAY__ && (0, g.transitionToChannel)(e.id)
    }), Y(this, "handleClickChat", () => {
      let {
        channel: e,
        locked: t
      } = this.props;
      !__OVERLAY__ && !t && (0, g.transitionToChannel)(e.id)
    }), Y(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, a = v.default.getGuild(t.getGuildId());
      null != a && (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("8137"), n.e("83331")]).then(n.bind(n, "213202"));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: a
        })
      })
    }), Y(this, "renderPopout", () => {
      let {
        channel: e
      } = this.props, {
        shouldShowGuildVerificationPopout: t
      } = this.state;
      if (t) return (0, l.jsx)(p.default, {
        type: p.GuildVerificationPopoutTypes.VOICE,
        guildId: e.guild_id,
        closePopout: this.closeGuildVerificationPopout
      });
      throw Error("VoiceChannel.renderPopout: There must always be something to render")
    }), Y(this, "renderOpenChatButton", () => {
      let {
        channel: e,
        locked: t,
        forceShowButtons: n
      } = this.props;
      if (!t) return (0, l.jsx)(r.Tooltip, {
        text: H.default.Messages.OPEN_CHAT,
        children: t => {
          let {
            onMouseEnter: a,
            onMouseLeave: i,
            onFocus: u,
            onBlur: d
          } = t;
          return (0, l.jsx)(r.Clickable, {
            className: s()(V.iconItem, n ? V.alwaysShown : null),
            onClick: () => {
              o.default.updateChatOpen(e.id, !0), this.handleClickChat()
            },
            "aria-label": H.default.Messages.OPEN_CHAT,
            onMouseEnter: a,
            onMouseLeave: i,
            onFocus: u,
            onBlur: d,
            children: (0, l.jsx)(b.default, {
              width: 16,
              height: 16,
              className: V.actionIcon
            })
          })
        }
      })
    }), Y(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? H.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null
    }), Y(this, "renderSubtitle", () => {
      var e;
      let t = null === (e = this.props.stageInstance) || void 0 === e ? void 0 : e.topic;
      return null == t ? null : (0, l.jsx)(D.default, {
        children: t
      })
    })
  }
}
let K = (0, d.makeChannelSortable)((0, c.makeVoiceUserDroppable)(W));

function z(e) {
  let {
    guild: t,
    channel: n,
    disableSorting: a,
    isFavoriteCategory: s,
    collapsed: r,
    voiceStates: o
  } = e, u = (0, i.useStateFromStoresObject)([M.default], () => ({
    unread: M.default.hasUnread(n.id),
    mentionCount: M.default.getMentionCount(n.id)
  })), d = (0, i.useStateFromStores)([y.default], () => y.default.resolveUnreadSetting(n)), c = (0, i.useStateFromStoresObject)([L.default, x.default, R.default], () => {
    let e = L.default.getChannel(n.parent_id),
      l = x.default.getCheck(n.guild_id);
    return {
      canManageChannel: null != t && R.default.can(B.Permissions.MANAGE_CHANNELS, n),
      canReorderChannel: !0 !== a && (t.id === F.FAVORITES_RAW_GUILD_ID || (null != e ? R.default.can(B.Permissions.MANAGE_CHANNELS, e) : R.default.can(B.Permissions.MANAGE_CHANNELS, t))),
      canMoveMembers: R.default.can(B.Permissions.MOVE_MEMBERS, n),
      locked: !R.default.can(B.Permissions.CONNECT, n),
      bypassLimit: R.default.can(B.Permissions.MOVE_MEMBERS, n),
      unverifiedAccount: !l.canChat
    }
  }), f = (0, i.useStateFromStores)([A.default], () => A.default.isCollapsed(n.parent_id)), h = (0, T.default)(n.id), m = (0, i.useStateFromStores)([I.default], () => I.default.getStageInstanceByChannel(n.id), [n.id]), p = (0, _.useStageParticipantsCount)(n.id, S.StageChannelParticipantNamedIndex.AUDIENCE), {
    isSubscriptionGated: g,
    needSubscriptionToAccess: E
  } = (0, C.default)(n.id), v = (0, i.useStateFromStores)([y.default], () => y.default.isFavorite(t.id, n.id)), O = (0, N.getStageHasMedia)(n.id), D = (0, G.default)({
    channel: n,
    isChannelSelected: !1,
    isChannelCollapsed: r,
    voiceStates: o,
    isSubscriptionGated: g,
    needSubscriptionToAccess: E,
    enableConnectedUserLimit: O || n.userLimit > 0 && n.userLimit < B.MAX_STAGE_VOICE_USER_LIMIT
  }), b = e.connected && null == D;
  return (0, l.jsx)(K, {
    categoryCollapsed: f,
    connectAction: h,
    numAudience: p,
    stageInstance: m,
    isSubscriptionGated: g,
    needSubscriptionToAccess: E,
    ...u,
    ...c,
    ...e,
    isFavoriteSuggestion: s && !v,
    forceShowButtons: b,
    channelInfo: D,
    resolvedUnreadSetting: d
  })
}