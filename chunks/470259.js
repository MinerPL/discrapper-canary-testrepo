"use strict";
n.r(t), n.d(t, {
  INVITE_ROW_HEIGHT: function() {
    return _
  },
  InviteRow: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("819855"),
  s = n("77078"),
  r = n("148387"),
  o = n("843962"),
  u = n("679653"),
  d = n("161778"),
  c = n("305961"),
  f = n("705955"),
  g = n("27618"),
  h = n("697218"),
  I = n("315102"),
  m = n("159885"),
  E = n("158998"),
  p = n("782340"),
  v = n("435808");
let _ = 44;
class T extends i.Component {
  shouldComponentUpdate(e, t) {
    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
  }
  renderUserOrChannel() {
    let e, t, n;
    let {
      user: i,
      channel: a
    } = this.props;
    if (null != i) t = i.getAvatarURL(null == a ? void 0 : a.guild_id, 32), n = E.default.getName(i);
    else if (null != a && (t = (0, o.getChannelIconURL)(a), n = (0, u.computeChannelName)(a, h.default, g.default), null == t && null != a.guild_id)) {
      let n = c.default.getGuild(a.guild_id);
      null != n && (null != n.icon ? t = I.default.getGuildIconURL({
        id: a.guild_id,
        icon: n.icon,
        size: 32
      }) : e = (0, m.getAcronym)(n.name))
    }
    if (null == t || null == n) return null != e ? (0, l.jsx)("div", {
      className: v.acronym,
      "aria-hidden": !0,
      children: e
    }) : null;
    return (0, l.jsx)(s.Avatar, {
      src: t,
      "aria-label": n,
      size: s.AvatarSizes.SIZE_32,
      className: v.inviteRowAvatar
    })
  }
  render() {
    let e;
    let {
      user: t,
      channel: n
    } = this.props, {
      sending: i,
      invited: r,
      hovered: o
    } = this.state;
    return e = r ? (0, l.jsx)(s.Button, {
      look: s.Button.Looks.LINK,
      size: s.Button.Sizes.SMALL,
      disabled: !0,
      color: (0, a.isThemeDark)(d.default.theme) ? s.Button.Colors.WHITE : s.Button.Colors.BLACK,
      children: p.default.Messages.INVITE_FRIEND_MODAL_SENT
    }) : (0, l.jsx)(s.Button, {
      color: s.Button.Colors.GREEN,
      look: o ? s.Button.Looks.FILLED : s.Button.Looks.OUTLINED,
      className: v.inviteRowButton,
      size: s.Button.Sizes.SMALL,
      submitting: i,
      onClick: this.handleClickInvite,
      children: p.default.Messages.INVITE_FRIEND_MODAL_INVITE
    }), (0, l.jsxs)("div", {
      className: v.inviteRow,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, l.jsxs)("div", {
        className: v.inviteRowInfo,
        children: [this.renderUserOrChannel(), (0, l.jsxs)("div", {
          className: v.inviteRowName,
          children: [E.default.getName(t), null != n ? (0, u.computeChannelName)(n, h.default, g.default, !0) : null]
        })]
      }), e]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      sending: !1,
      invited: !1,
      hovered: !1
    }, this.handleMouseEnter = () => {
      this.setState({
        hovered: !0
      })
    }, this.handleMouseLeave = () => {
      this.setState({
        hovered: !1
      })
    }, this.getSuggestedProps = () => {
      var e;
      let {
        row: t
      } = this.props;
      return null !== (e = null != t ? f.default.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null
    }, this.handleClickInvite = () => {
      let {
        user: e,
        channel: t,
        inviteKey: n,
        location: l
      } = this.props;
      null != n && (null != t ? (this.setState({
        sending: !0
      }), r.default.enqueue({
        type: r.InvitePropertiesType.GROUP_DM,
        channel: t,
        inviteKey: n,
        location: l,
        suggested: this.getSuggestedProps()
      }, e => {
        this.setState({
          sending: !1,
          invited: e
        })
      })) : null != e && (this.setState({
        sending: !0
      }), r.default.enqueue({
        type: r.InvitePropertiesType.USER,
        user: e,
        inviteKey: n,
        location: l,
        suggested: this.getSuggestedProps()
      }, e => {
        this.setState({
          sending: !1,
          invited: e
        })
      })))
    }
  }
}