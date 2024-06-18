"use strict";
n.d(t, {
  Z: function() {
    return D
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  o = n(442837),
  r = n(481060),
  d = n(13245),
  c = n(287734),
  u = n(933557),
  h = n(984370),
  p = n(910611),
  f = n(131704),
  E = n(523746),
  Z = n(592125),
  g = n(430824),
  m = n(699516),
  _ = n(944486),
  I = n(125015),
  S = n(389320),
  v = n(465670),
  C = n(548343),
  x = n(339983),
  N = n(823779),
  T = n(118717),
  O = n(547881),
  A = n(707878),
  y = n(689938),
  R = n(875618);

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class L extends s.Component {
  componentDidUpdate() {
    this.props.locked && this.state.showOpacitySlider && this.setState({
      showOpacitySlider: !1
    })
  }
  renderCallButton() {
    let e, t;
    let {
      channel: n,
      channelHasActiveCall: s,
      userIsInChannelCall: l,
      isBlocked: a
    } = this.props;
    if (!(0, f.hv)(n.type)) return null;
    let o = I.Z,
      d = !1;
    return s ? l ? (e = y.Z.Messages.LEAVE_CALL, o = S.Z) : e = y.Z.Messages.JOIN_CALL : a ? (e = y.Z.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, t = r.Tooltip.Colors.RED, d = !0) : e = y.Z.Messages.START_VOICE_CALL, (0, i.jsx)(h.Z.Icon, {
      icon: o,
      tooltip: e,
      onClick: this.handleClickCall,
      tooltipColor: t,
      disabled: d
    })
  }
  render() {
    let {
      className: e,
      draggableClassName: t,
      locked: n,
      channel: s,
      channelName: l,
      guild: o,
      onMouseDown: r,
      onContextMenu: d,
      isPreviewingInGame: c,
      disableDragIndicator: u
    } = this.props, {
      showOpacitySlider: f
    } = this.state;
    return f && !n ? (0, i.jsxs)(O.ZP.Bar, {
      className: R.opacityHeader,
      children: [(0, i.jsx)(A.Z, {}), (0, i.jsx)(h.Z.Icon, {
        icon: v.Z,
        onClick: this.handleCloseOpacitySettings,
        tooltip: y.Z.Messages.CLOSE
      })]
    }) : (0, i.jsx)(O.ZP.Background, {
      opacityOverride: n || c ? null : 1,
      children: (0, i.jsx)("div", {
        className: a()(e, t, R.headerContainer),
        onMouseDown: r,
        onContextMenu: d,
        children: (0, i.jsxs)(h.Z, {
          guildId: s.guild_id,
          channelId: s.id,
          toolbar: this.renderWidgetButtons(),
          transparent: !0,
          children: [c || n || u ? null : (0, i.jsx)(C.Z, {
            className: a()(R.dragIcon, t),
            width: 20,
            height: 20
          }), (0, p.ud)({
            channel: s,
            channelName: l
          }), n ? null : (0, p.v0)(s, o)]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), M(this, "state", {
      showOpacitySlider: !1
    }), M(this, "handleClickCall", e => {
      let {
        channel: t,
        userIsInChannelCall: n,
        channelHasActiveCall: i
      } = this.props;
      if (i) n ? c.default.selectVoiceChannel(null) : d.Z.callPrivateChannel(t.id, !1);
      else {
        let n = !i && !e.shiftKey;
        d.Z.callPrivateChannel(t.id, n)
      }
    }), M(this, "handleOpenOpacitySettings", () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: !0
      }), e && d.Z.setPreviewInGameMode(!0)
    }), M(this, "handleCloseOpacitySettings", () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: !1
      }), e && d.Z.setPreviewInGameMode(!1)
    }), M(this, "handleMouseDown", e => {
      let {
        onMouseDown: t
      } = this.props;
      null != t && t(e)
    }), M(this, "renderWidgetButtons", () => {
      let {
        locked: e,
        handlePin: t,
        pinned: n
      } = this.props, l = n ? y.Z.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : y.Z.Messages.OVERLAY_WIDGET_SHOW_IN_GAME;
      return e ? null : (0, i.jsxs)(s.Fragment, {
        children: [this.renderCallButton(), n ? (0, i.jsx)(h.Z.Icon, {
          icon: x.Z,
          tooltip: y.Z.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
          onClick: this.handleOpenOpacitySettings
        }) : null, (0, i.jsx)(h.Z.Icon, {
          icon: n ? T.Z : N.Z,
          tooltip: l,
          selected: n,
          onClick: t
        })]
      })
    })
  }
}

function D(e) {
  let {
    channel: t,
    ...n
  } = e, s = (0, o.e7)([_.Z, Z.Z], () => {
    let e = _.Z.getVoiceChannelId();
    return Z.Z.getChannel(e)
  }), l = (0, o.e7)([g.Z], () => g.Z.getGuild(t.guild_id)), a = (0, o.e7)([E.Z], () => E.Z.isCallActive(t.id)), r = (0, u.ZP)(t), d = (0, o.e7)([m.Z], () => !!t.isDM() && null != t.getRecipientId() && m.Z.isBlocked(t.getRecipientId()));
  return (0, i.jsx)(L, {
    channel: t,
    channelName: r,
    guild: l,
    channelHasActiveCall: a,
    userIsInChannelCall: null != s && s.id === t.id,
    isBlocked: d,
    ...n
  })
}