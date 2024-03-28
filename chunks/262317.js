"use strict";
n.r(t), n.d(t, {
  AudienceVoiceUser: function() {
    return w
  },
  MoreVoiceUser: function() {
    return F
  }
}), n("47120");
var a, l = n("735250"),
  s = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("149765"),
  u = n("481060"),
  d = n("475179"),
  c = n("239091"),
  f = n("287734"),
  h = n("872810"),
  m = n("888651"),
  p = n("100527"),
  E = n("258609"),
  C = n("257115"),
  g = n("569545"),
  S = n("102172"),
  _ = n("525925"),
  T = n("701362"),
  I = n("224184"),
  A = n("484459"),
  v = n("103575"),
  N = n("314897"),
  x = n("430824"),
  M = n("496675"),
  R = n("979651"),
  L = n("242315"),
  y = n("805009"),
  O = n("981631"),
  j = n("927923"),
  P = n("70722"),
  D = n("689938"),
  b = n("957233");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function F(e) {
  let {
    numUsers: t
  } = e;
  return (0, l.jsx)("div", {
    className: b.moreContainer,
    children: (0, l.jsxs)(u.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function w(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, a = n ? t : D.default.Messages.LISTENING_COUNT.format({
    count: t
  });
  return (0, l.jsxs)("div", {
    className: r()(b.audienceContainer, {
      [b.audienceContainerCollapsed]: n
    }),
    children: [(0, l.jsx)("div", {
      className: b.audienceIconContainer,
      children: (0, l.jsx)(L.default, {
        className: b.audienceIcon
      })
    }), (0, l.jsx)(u.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: a
    })]
  })
}
class k extends(a = s.PureComponent) {
  get canWatchStream() {
    let {
      channel: e,
      isStreaming: t
    } = this.props;
    return t && (0, S.canWatchStream)(e, R.default, x.default, M.default, E.default)[0]
  }
  render() {
    let {
      userPopoutOpen: e
    } = this.state, {
      connectUserDragSource: t,
      canDrag: n,
      isSelfOnOtherClient: a,
      user: s,
      channel: i
    } = this.props, r = (0, l.jsx)("div", {
      className: b.draggable,
      "data-dnd-name": i.name,
      onMouseEnter: a ? void 0 : this.handleMouseEnter,
      onMouseLeave: a ? void 0 : this.handleHidePreview,
      children: (0, l.jsx)(u.Popout, {
        preload: () => (0, A.default)(s.id, s.getAvatarURL(i.guild_id, 80), {
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
    super(...e), U(this, "domElementRef", s.createRef()), U(this, "state", {
      userPopoutOpen: !1,
      isHoveringHangStatus: !1
    }), U(this, "handleClickUser", () => {
      this.setState({
        userPopoutOpen: !this.state.userPopoutOpen
      })
    }), U(this, "handleCloseUserPopout", () => {
      this.setState({
        userPopoutOpen: !1
      })
    }), U(this, "handleHidePreview", () => {
      let {
        hidePreview: e,
        isStreaming: t,
        user: n,
        showHangStatus: a
      } = this.props;
      (t || a) && (null == e || e(n.id)), this.setState({
        isHoveringHangStatus: !1
      })
    }), U(this, "handleMouseEnter", () => {
      let {
        user: e,
        showPreview: t,
        isStreaming: n,
        showHangStatus: a
      } = this.props;
      (n || a) && (null == t || t(e.id))
    }), U(this, "handleHoverHangStatus", e => {
      this.setState({
        isHoveringHangStatus: e
      })
    }), U(this, "handleWatchStream", () => {
      let {
        user: e,
        channel: t,
        isWatching: n,
        hidePreview: a
      } = this.props;
      if (!this.canWatchStream) return;
      let l = {
        streamType: P.StreamTypes.GUILD,
        ownerId: e.id,
        channelId: t.id,
        guildId: t.guild_id
      };
      N.default.getId() !== e.id && f.default.selectVoiceChannel(t.id), n ? ((0, _.default)(l), d.default.selectParticipant(l.channelId, (0, g.encodeStreamKey)(l))) : (0, h.watchStreamAndTransitionToStream)(l), null == a || a(e.id)
    }), U(this, "handleJoinVoice", () => {
      let {
        user: e,
        channel: t,
        hidePreview: n
      } = this.props;
      M.default.can(o.combine(O.Permissions.CONNECT, O.Permissions.VIEW_CHANNEL), t) && (f.default.selectVoiceChannel(t.id), null == n || n(e.id))
    }), U(this, "handleUserContextMenu", e => {
      let {
        channel: t,
        user: a
      } = this.props;
      (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
        return n => (0, l.jsx)(e, {
          ...n,
          user: a,
          guildId: t.guild_id,
          channel: t,
          showMediaItems: !0,
          showStageChannelItems: t.isGuildStageVoice()
        })
      })
    }), U(this, "renderUserPopout", e => {
      let {
        channel: t,
        user: n
      } = this.props, a = t.getGuildId();
      return (0, l.jsx)(v.default, {
        location: "VoiceUser",
        userId: n.id,
        guildId: null != a ? a : void 0,
        channelId: t.id,
        newAnalyticsLocations: [p.default.VOICE_USER],
        ...e
      })
    }), U(this, "renderStreamPopout", () => {
      let {
        user: e,
        channel: t,
        previewIsOpen: n,
        location: a
      } = this.props;
      return (0, l.jsx)(T.default, {
        user: e,
        channel: t,
        onWatch: this.handleWatchStream,
        previewIsOpen: n,
        location: a
      })
    }), U(this, "renderHangStatusPopout", () => {
      let {
        hangStatusActivity: e,
        previewIsOpen: t,
        user: n,
        channel: a
      } = this.props;
      return (0, l.jsx)(I.default, {
        userId: n.id,
        channel: a,
        hangStatusActivity: e,
        previewIsOpen: t
      })
    }), U(this, "renderUser", e => {
      let {
        isSelfOnOtherClient: t,
        otherClientSessionType: n,
        voicePlatform: a,
        shouldShowPreview: s,
        mute: i,
        localMute: o,
        localVideoDisabled: d,
        speaking: c,
        user: f,
        deaf: h,
        priority: m,
        collapsed: p,
        isStreaming: E,
        isGuest: g,
        nick: S,
        video: _,
        serverMute: T,
        serverDeaf: I,
        tabIndex: A,
        embeddedApplication: v,
        channel: N,
        hangStatusActivity: x,
        showHangStatus: M,
        isSelf: R,
        application: L
      } = this.props, {
        userPopoutOpen: O,
        isHoveringHangStatus: P
      } = this.state, U = j.GAME_CONSOLE_SESSIONS.has(null != n ? n : ""), F = {
        user: f,
        speaking: c,
        mute: i,
        localMute: o,
        localVideoDisabled: d,
        isStreaming: E,
        isGuest: g,
        video: _,
        priority: m,
        deaf: h,
        nick: S,
        collapsed: p,
        overlap: p,
        serverMute: T,
        serverDeaf: I,
        tabIndex: A,
        otherClientSessionType: n,
        voicePlatform: a,
        embeddedApplication: v,
        avatarContainerClass: r()({
          [b.userAvatar]: !0
        }),
        disabled: t && !U,
        selected: O,
        onClick: U ? void 0 : this.handleClickUser,
        onDoubleClick: this.handleWatchStream,
        onContextMenu: this.handleUserContextMenu,
        guildId: N.guild_id,
        hangStatusActivity: x,
        showHangStatus: M,
        isSelf: R,
        application: L,
        channelId: N.id
      };
      if (t) {
        var w;
        return (0, l.jsx)(u.Tooltip, {
          text: null !== (w = (0, C.default)(n)) && void 0 !== w ? w : D.default.Messages.CONNECTED_ON_ANOTHER_CLIENT,
          children: e => {
            let {
              onClick: t,
              onContextMenu: n,
              ...a
            } = e;
            return (0, l.jsx)(y.default, {
              ...F,
              ...a
            })
          }
        })
      }
      return (0, l.jsx)(u.Popout, {
        position: "right",
        renderPopout: M && P || !E ? this.renderHangStatusPopout : this.renderStreamPopout,
        shouldShow: s && !O,
        onRequestClose: this.handleHidePreview,
        spacing: 0,
        children: () => (0, l.jsx)(y.default, {
          ...F,
          onMouseDown: e.onMouseDown,
          onKeyDown: e.onKeyDown,
          handleHoverHangStatus: this.handleHoverHangStatus
        })
      })
    })
  }
}
U(k, "defaultProps", {
  isSelfOnOtherClient: !1
}), t.default = (0, m.makeVoiceUserDraggable)(k)