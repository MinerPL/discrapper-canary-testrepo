"use strict";
n.r(t), n.d(t, {
  MoreVoiceUser: function() {
    return b
  },
  AudienceVoiceUser: function() {
    return U
  },
  default: function() {
    return F
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("316693"),
  u = n("77078"),
  o = n("255397"),
  d = n("272030"),
  c = n("987317"),
  f = n("990766"),
  h = n("650912"),
  m = n("812204"),
  p = n("76393"),
  E = n("845038"),
  g = n("374014"),
  S = n("223913"),
  C = n("709463"),
  _ = n("264429"),
  I = n("930291"),
  T = n("506885"),
  v = n("981601"),
  x = n("271938"),
  N = n("305961"),
  A = n("957255"),
  M = n("800762"),
  R = n("272339"),
  j = n("68148"),
  L = n("49111"),
  y = n("171644"),
  O = n("706530"),
  P = n("782340"),
  D = n("698964");

function b(e) {
  let {
    numUsers: t
  } = e;
  return (0, a.jsx)("div", {
    className: D.moreContainer,
    children: (0, a.jsxs)(u.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function U(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, l = n ? t : P.default.Messages.LISTENING_COUNT.format({
    count: t
  });
  return (0, a.jsxs)("div", {
    className: i(D.audienceContainer, {
      [D.audienceContainerCollapsed]: n
    }),
    children: [(0, a.jsx)("div", {
      className: D.audienceIconContainer,
      children: (0, a.jsx)(R.default, {
        className: D.audienceIcon
      })
    }), (0, a.jsx)(u.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: l
    })]
  })
}
class w extends l.PureComponent {
  get canWatchStream() {
    let {
      channel: e,
      isStreaming: t
    } = this.props;
    return t && (0, S.canWatchStream)(e, M.default, N.default, A.default, p.default)[0]
  }
  render() {
    let {
      userPopoutOpen: e
    } = this.state, {
      connectUserDragSource: t,
      canDrag: n,
      isSelfOnOtherClient: l,
      user: s,
      channel: i
    } = this.props, r = (0, a.jsx)("div", {
      className: D.draggable,
      "data-dnd-name": i.name,
      onMouseEnter: l ? void 0 : this.handleMouseEnter,
      onMouseLeave: l ? void 0 : this.handleHidePreview,
      children: (0, a.jsx)(u.Popout, {
        preload: () => (0, T.default)(s.id, s.getAvatarURL(i.guild_id, 80), {
          guildId: i.guild_id,
          channelId: i.id
        }),
        position: "right",
        renderPopout: this.renderUserPopout,
        shouldShow: e,
        onRequestClose: this.handleCloseUserPopout,
        children: e => this.renderUser(e)
      })
    });
    return n ? t(r) : r
  }
  constructor(...e) {
    super(...e), this.domElementRef = l.createRef(), this.state = {
      userPopoutOpen: !1,
      isHoveringHangStatus: !1
    }, this.handleClickUser = () => {
      this.setState({
        userPopoutOpen: !this.state.userPopoutOpen
      })
    }, this.handleCloseUserPopout = () => {
      this.setState({
        userPopoutOpen: !1
      })
    }, this.handleHidePreview = () => {
      let {
        hidePreview: e,
        isStreaming: t,
        user: n,
        showHangStatus: a
      } = this.props;
      (t || a) && (null == e || e(n.id)), this.setState({
        isHoveringHangStatus: !1
      })
    }, this.handleMouseEnter = () => {
      let {
        user: e,
        showPreview: t,
        isStreaming: n,
        showHangStatus: a
      } = this.props;
      (n || a) && (null == t || t(e.id))
    }, this.handleHoverHangStatus = e => {
      this.setState({
        isHoveringHangStatus: e
      })
    }, this.handleWatchStream = () => {
      let {
        user: e,
        channel: t,
        isWatching: n,
        hidePreview: a
      } = this.props;
      if (!this.canWatchStream) return;
      let l = {
        streamType: O.StreamTypes.GUILD,
        ownerId: e.id,
        channelId: t.id,
        guildId: t.guild_id
      };
      x.default.getId() !== e.id && c.default.selectVoiceChannel(t.id), n ? ((0, C.default)(l), o.default.selectParticipant(l.channelId, (0, g.encodeStreamKey)(l))) : (0, f.watchStreamAndTransitionToStream)(l), null == a || a(e.id)
    }, this.handleJoinVoice = () => {
      let {
        user: e,
        channel: t,
        hidePreview: n
      } = this.props;
      A.default.can(r.combine(L.Permissions.CONNECT, L.Permissions.VIEW_CHANNEL), t) && (c.default.selectVoiceChannel(t.id), null == n || n(e.id))
    }, this.handleUserContextMenu = e => {
      let {
        channel: t,
        user: l
      } = this.props;
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("834247").then(n.bind(n, "834247"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: l,
          guildId: t.guild_id,
          channel: t,
          showMediaItems: !0,
          showStageChannelItems: t.isGuildStageVoice()
        })
      })
    }, this.renderUserPopout = e => {
      let {
        channel: t,
        user: n
      } = this.props, l = t.getGuildId();
      return (0, a.jsx)(v.default, {
        userId: n.id,
        guildId: null != l ? l : void 0,
        channelId: t.id,
        newAnalyticsLocations: [m.default.VOICE_USER],
        ...e
      })
    }, this.renderStreamPopout = () => {
      let {
        user: e,
        channel: t,
        previewIsOpen: n,
        location: l
      } = this.props;
      return (0, a.jsx)(_.default, {
        user: e,
        channel: t,
        onWatch: this.handleWatchStream,
        previewIsOpen: n,
        location: l
      })
    }, this.renderHangStatusPopout = () => {
      let {
        hangStatusActivity: e,
        previewIsOpen: t,
        user: n,
        channel: l
      } = this.props;
      return (0, a.jsx)(I.default, {
        userId: n.id,
        channel: l,
        hangStatusActivity: e,
        previewIsOpen: t
      })
    }, this.renderUser = e => {
      let {
        isSelfOnOtherClient: t,
        otherClientSessionType: n,
        voicePlatform: l,
        shouldShowPreview: s,
        mute: r,
        localMute: o,
        localVideoDisabled: d,
        speaking: c,
        user: f,
        deaf: h,
        priority: m,
        collapsed: p,
        isStreaming: g,
        isGuest: S,
        nick: C,
        video: _,
        serverMute: I,
        serverDeaf: T,
        tabIndex: v,
        embeddedApplication: x,
        channel: N,
        hangStatusActivity: A,
        showHangStatus: M,
        isSelf: R,
        application: L
      } = this.props, {
        userPopoutOpen: O,
        isHoveringHangStatus: b
      } = this.state, U = y.GAME_CONSOLE_SESSIONS.has(null != n ? n : ""), w = {
        user: f,
        speaking: c,
        mute: r,
        localMute: o,
        localVideoDisabled: d,
        isStreaming: g,
        isGuest: S,
        video: _,
        priority: m,
        deaf: h,
        nick: C,
        collapsed: p,
        overlap: p,
        serverMute: I,
        serverDeaf: T,
        tabIndex: v,
        otherClientSessionType: n,
        voicePlatform: l,
        embeddedApplication: x,
        avatarContainerClass: i({
          [D.userAvatar]: !0
        }),
        disabled: t && !U,
        selected: O,
        onClick: U ? void 0 : this.handleClickUser,
        onDoubleClick: this.handleWatchStream,
        onContextMenu: this.handleUserContextMenu,
        guildId: N.guild_id,
        hangStatusActivity: A,
        showHangStatus: M,
        isSelf: R,
        application: L,
        channelId: N.id
      };
      if (t) {
        var F;
        return (0, a.jsx)(u.Tooltip, {
          text: null !== (F = (0, E.default)(n)) && void 0 !== F ? F : P.default.Messages.CONNECTED_ON_ANOTHER_CLIENT,
          children: e => {
            let {
              onClick: t,
              onContextMenu: n,
              ...l
            } = e;
            return (0, a.jsx)(j.default, {
              ...w,
              ...l
            })
          }
        })
      }
      return (0, a.jsx)(u.Popout, {
        position: "right",
        renderPopout: M && b || !g ? this.renderHangStatusPopout : this.renderStreamPopout,
        shouldShow: s && !O,
        onRequestClose: this.handleHidePreview,
        spacing: 0,
        children: () => (0, a.jsx)(j.default, {
          ...w,
          onMouseDown: e.onMouseDown,
          onKeyDown: e.onKeyDown,
          handleHoverHangStatus: this.handleHoverHangStatus
        })
      })
    }
  }
}
w.defaultProps = {
  isSelfOnOtherClient: !1
};
var F = (0, h.makeVoiceUserDraggable)(w)