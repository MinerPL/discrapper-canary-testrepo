"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("803997"),
  s = n.n(l),
  o = n("442837"),
  r = n("481060"),
  d = n("13245"),
  u = n("287734"),
  c = n("933557"),
  f = n("984370"),
  h = n("910611"),
  p = n("131704"),
  g = n("523746"),
  m = n("592125"),
  E = n("430824"),
  S = n("699516"),
  v = n("944486"),
  y = n("125015"),
  I = n("389320"),
  T = n("465670"),
  N = n("548343"),
  O = n("339983"),
  _ = n("823779"),
  C = n("118717"),
  A = n("547881"),
  x = n("707878"),
  R = n("689938"),
  M = n("144421");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class D extends a.Component {
  componentDidUpdate() {
    this.props.locked && this.state.showOpacitySlider && this.setState({
      showOpacitySlider: !1
    })
  }
  renderCallButton() {
    let e, t;
    let {
      channel: n,
      channelHasActiveCall: a,
      userIsInChannelCall: l,
      isBlocked: s
    } = this.props;
    if (!(0, p.isPrivate)(n.type)) return null;
    let o = y.default,
      d = !1;
    return a ? l ? (e = R.default.Messages.LEAVE_CALL, o = I.default) : e = R.default.Messages.JOIN_CALL : s ? (e = R.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, t = r.Tooltip.Colors.RED, d = !0) : e = R.default.Messages.START_VOICE_CALL, (0, i.jsx)(f.default.Icon, {
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
      channel: a,
      channelName: l,
      guild: o,
      onMouseDown: r,
      onContextMenu: d,
      isPreviewingInGame: u,
      disableDragIndicator: c
    } = this.props, {
      showOpacitySlider: p
    } = this.state;
    return p && !n ? (0, i.jsxs)(A.default.Bar, {
      className: M.opacityHeader,
      children: [(0, i.jsx)(x.default, {}), (0, i.jsx)(f.default.Icon, {
        icon: T.default,
        onClick: this.handleCloseOpacitySettings,
        tooltip: R.default.Messages.CLOSE
      })]
    }) : (0, i.jsx)(A.default.Background, {
      opacityOverride: n || u ? null : 1,
      children: (0, i.jsx)("div", {
        className: s()(e, t, M.headerContainer),
        onMouseDown: r,
        onContextMenu: d,
        children: (0, i.jsxs)(f.default, {
          guildId: a.guild_id,
          channelId: a.id,
          toolbar: this.renderWidgetButtons(),
          transparent: !0,
          children: [u || n || c ? null : (0, i.jsx)(N.default, {
            className: s()(M.dragIcon, t),
            width: 20,
            height: 20
          }), (0, h.renderTitle)({
            channel: a,
            channelName: l
          }), n ? null : (0, h.renderTopic)(a, o)]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), L(this, "state", {
      showOpacitySlider: !1
    }), L(this, "handleClickCall", e => {
      let {
        channel: t,
        userIsInChannelCall: n,
        channelHasActiveCall: i
      } = this.props;
      if (i) n ? u.default.selectVoiceChannel(null) : d.default.callPrivateChannel(t.id, !1);
      else {
        let n = !i && !e.shiftKey;
        d.default.callPrivateChannel(t.id, n)
      }
    }), L(this, "handleOpenOpacitySettings", () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: !0
      }), e && d.default.setPreviewInGameMode(!0)
    }), L(this, "handleCloseOpacitySettings", () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: !1
      }), e && d.default.setPreviewInGameMode(!1)
    }), L(this, "handleMouseDown", e => {
      let {
        onMouseDown: t
      } = this.props;
      null != t && t(e)
    }), L(this, "renderWidgetButtons", () => {
      let {
        locked: e,
        handlePin: t,
        pinned: n
      } = this.props, l = n ? R.default.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : R.default.Messages.OVERLAY_WIDGET_SHOW_IN_GAME;
      return e ? null : (0, i.jsxs)(a.Fragment, {
        children: [this.renderCallButton(), n ? (0, i.jsx)(f.default.Icon, {
          icon: O.default,
          tooltip: R.default.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
          onClick: this.handleOpenOpacitySettings
        }) : null, (0, i.jsx)(f.default.Icon, {
          icon: n ? C.default : _.default,
          tooltip: l,
          selected: n,
          onClick: t
        })]
      })
    })
  }
}

function b(e) {
  let {
    channel: t,
    ...n
  } = e, a = (0, o.useStateFromStores)([v.default, m.default], () => {
    let e = v.default.getVoiceChannelId();
    return m.default.getChannel(e)
  }), l = (0, o.useStateFromStores)([E.default], () => E.default.getGuild(t.guild_id)), s = (0, o.useStateFromStores)([g.default], () => g.default.isCallActive(t.id)), r = (0, c.default)(t), d = (0, o.useStateFromStores)([S.default], () => !!t.isDM() && null != t.getRecipientId() && S.default.isBlocked(t.getRecipientId()));
  return (0, i.jsx)(D, {
    channel: t,
    channelName: r,
    guild: l,
    channelHasActiveCall: s,
    userIsInChannelCall: null != a && a.id === t.id,
    isBlocked: d,
    ...n
  })
}