"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Z
  }
}), n("47120"), n("411104");
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("475179"),
  u = n("239091"),
  d = n("146773"),
  c = n("888651"),
  f = n("201895"),
  h = n("305325"),
  C = n("281956"),
  p = n("66999"),
  m = n("506936"),
  g = n("359110"),
  E = n("922482"),
  S = n("431328"),
  _ = n("501655"),
  I = n("427679"),
  N = n("71275"),
  T = n("201469"),
  A = n("680089"),
  L = n("592125"),
  v = n("430824"),
  x = n("607744"),
  R = n("496675"),
  M = n("306680"),
  O = n("9156"),
  y = n("979651"),
  D = n("514342"),
  b = n("974029"),
  j = n("934415"),
  G = n("98597"),
  U = n("648501"),
  P = n("473403"),
  w = n("207055"),
  F = n("981631"),
  B = n("647086"),
  V = n("689938"),
  H = n("294639"),
  k = n("157511");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class K extends G.default {
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
    return (0, j.isChannelFull)(e, y.default, v.default)
  }
  getModeClass() {
    let {
      position: e,
      sortingPosition: t,
      isUserOver: n
    } = this.props;
    if (n) return H.containerUserOver;
    if (null != t) return e > t ? H.containerDragAfter : H.containerDragBefore;
    return H.containerDefault
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
      location: F.AnalyticsLocations.GUILD_CHANNEL_LIST,
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
      stageInstance: C,
      isSubscriptionGated: p,
      needSubscriptionToAccess: m,
      unread: g,
      resolvedUnreadSetting: E,
      mentionCount: S,
      isFavoriteSuggestion: _
    } = this.props, {
      shouldShowGuildVerificationPopout: I
    } = this.state, N = this.getVoiceStatesCount(), T = (0, l.jsxs)("li", {
      className: s()(this.getModeClass(), {
        [H.disabled]: this.isDisabled()
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
            return (0, l.jsxs)(P.default, {
              className: H.iconVisibility,
              iconClassName: s()({
                [k.iconLive]: null != C
              }),
              channel: e,
              selected: !_ && t,
              connected: n,
              unread: n ? g : void 0,
              resolvedUnreadSetting: E,
              mentionCount: S,
              locked: a,
              onClick: () => {
                this.handleClick(), null == r || r()
              },
              onContextMenu: e => {
                this.handleContextMenu(e), null == o || o()
              },
              connectDragPreview: d,
              subtitle: this.renderSubtitle(),
              isFavoriteSuggestion: _,
              "aria-label": (0, f.default)({
                channel: e,
                unread: g,
                mentionCount: S,
                userCount: N,
                isSubscriptionGated: p,
                needSubscriptionToAccess: m
              }),
              ...u,
              children: [_ && this.renderAcceptSuggestionButton(), _ && this.renderRemoveSuggestionButton(), !_ && this.renderOpenChatButton(), !_ && this.renderInviteButton(), !_ && this.renderEditButton(), !_ && this.renderChannelInfo()]
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
      null != a && (0, C.shouldShowMembershipVerificationGate)(a) && (0, h.openMemberVerificationModal)(a), l && this.setState({
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
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331")]).then(n.bind(n, "213202"));
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
      if (t) return (0, l.jsx)(m.default, {
        type: m.GuildVerificationPopoutTypes.VOICE,
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
        text: V.default.Messages.OPEN_CHAT,
        children: t => {
          let {
            onMouseEnter: a,
            onMouseLeave: i,
            onFocus: u,
            onBlur: d
          } = t;
          return (0, l.jsx)(r.Clickable, {
            className: s()(H.iconItem, n ? H.alwaysShown : null),
            onClick: () => {
              o.default.updateChatOpen(e.id, !0), this.handleClickChat()
            },
            "aria-label": V.default.Messages.OPEN_CHAT,
            onMouseEnter: a,
            onMouseLeave: i,
            onFocus: u,
            onBlur: d,
            children: (0, l.jsx)(b.default, {
              width: 16,
              height: 16,
              className: H.actionIcon
            })
          })
        }
      })
    }), Y(this, "getTooltipText", () => {
      let {
        connected: e
      } = this.props;
      return this.isFull() && !e ? V.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null
    }), Y(this, "renderSubtitle", () => {
      var e;
      let t = null === (e = this.props.stageInstance) || void 0 === e ? void 0 : e.topic;
      return null == t ? null : (0, l.jsx)(D.default, {
        children: t
      })
    })
  }
}
let W = (0, d.makeChannelSortable)((0, c.makeVoiceUserDroppable)(K));

function Z(e) {
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
  })), d = (0, i.useStateFromStores)([O.default], () => O.default.resolveUnreadSetting(n)), c = (0, i.useStateFromStoresObject)([L.default, x.default, R.default], () => {
    let e = L.default.getChannel(n.parent_id),
      l = x.default.getCheck(n.guild_id);
    return {
      canManageChannel: null != t && R.default.can(F.Permissions.MANAGE_CHANNELS, n),
      canReorderChannel: !0 !== a && (t.id === B.FAVORITES_RAW_GUILD_ID || (null != e ? R.default.can(F.Permissions.MANAGE_CHANNELS, e) : R.default.can(F.Permissions.MANAGE_CHANNELS, t))),
      canMoveMembers: R.default.can(F.Permissions.MOVE_MEMBERS, n),
      locked: !R.default.can(F.Permissions.CONNECT, n),
      bypassLimit: R.default.can(F.Permissions.MOVE_MEMBERS, n),
      unverifiedAccount: !l.canChat
    }
  }), f = (0, i.useStateFromStores)([A.default], () => A.default.isCollapsed(n.parent_id)), h = (0, T.default)(n.id), C = (0, i.useStateFromStores)([I.default], () => I.default.getStageInstanceByChannel(n.id), [n.id]), m = (0, S.useStageParticipantsCount)(n.id, _.StageChannelParticipantNamedIndex.AUDIENCE), {
    isSubscriptionGated: g,
    needSubscriptionToAccess: E
  } = (0, p.default)(n.id), v = (0, i.useStateFromStores)([O.default], () => O.default.isFavorite(t.id, n.id)), y = (0, N.getStageHasMedia)(n.id), D = (0, U.default)({
    channel: n,
    isChannelSelected: !1,
    isChannelCollapsed: r,
    voiceStates: o,
    isSubscriptionGated: g,
    needSubscriptionToAccess: E,
    enableConnectedUserLimit: y || n.userLimit > 0 && n.userLimit < F.MAX_STAGE_VOICE_USER_LIMIT
  }), b = e.connected && null == D;
  return (0, l.jsx)(W, {
    categoryCollapsed: f,
    connectAction: h,
    numAudience: m,
    stageInstance: C,
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