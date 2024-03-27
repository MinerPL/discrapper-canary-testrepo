"use strict";
n.r(t), n.d(t, {
  INVITE_ROW_HEIGHT: function() {
    return p
  },
  InviteRow: function() {
    return _
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("819855"),
  i = n("77078"),
  r = n("148387"),
  u = n("843962"),
  o = n("679653"),
  d = n("161778"),
  c = n("305961"),
  h = n("705955"),
  f = n("27618"),
  I = n("697218"),
  g = n("315102"),
  E = n("159885"),
  v = n("158998"),
  T = n("782340"),
  m = n("696862");
let p = 44;
class _ extends a.Component {
  shouldComponentUpdate(e, t) {
    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
  }
  renderUserOrChannel() {
    let e, t, n;
    let {
      user: a,
      channel: s
    } = this.props;
    if (null != a) t = a.getAvatarURL(null == s ? void 0 : s.guild_id, 32), n = v.default.getName(a);
    else if (null != s && (t = (0, u.getChannelIconURL)(s), n = (0, o.computeChannelName)(s, I.default, f.default), null == t && null != s.guild_id)) {
      let n = c.default.getGuild(s.guild_id);
      null != n && (null != n.icon ? t = g.default.getGuildIconURL({
        id: s.guild_id,
        icon: n.icon,
        size: 32
      }) : e = (0, E.getAcronym)(n.name))
    }
    if (null == t || null == n) return null != e ? (0, l.jsx)("div", {
      className: m.acronym,
      "aria-hidden": !0,
      children: e
    }) : null;
    return (0, l.jsx)(i.Avatar, {
      src: t,
      "aria-label": n,
      size: i.AvatarSizes.SIZE_32,
      className: m.inviteRowAvatar
    })
  }
  render() {
    let e;
    let {
      user: t,
      channel: n
    } = this.props, {
      sending: a,
      invited: r,
      hovered: u
    } = this.state;
    return e = r ? (0, l.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.SMALL,
      disabled: !0,
      color: (0, s.isThemeDark)(d.default.theme) ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
      children: T.default.Messages.INVITE_FRIEND_MODAL_SENT
    }) : (0, l.jsx)(i.Button, {
      color: i.Button.Colors.GREEN,
      look: u ? i.Button.Looks.FILLED : i.Button.Looks.OUTLINED,
      className: m.inviteRowButton,
      size: i.Button.Sizes.SMALL,
      submitting: a,
      onClick: this.handleClickInvite,
      children: T.default.Messages.INVITE_FRIEND_MODAL_INVITE
    }), (0, l.jsxs)("div", {
      className: m.inviteRow,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, l.jsxs)("div", {
        className: m.inviteRowInfo,
        children: [this.renderUserOrChannel(), (0, l.jsxs)("div", {
          className: m.inviteRowName,
          children: [v.default.getName(t), null != n ? (0, o.computeChannelName)(n, I.default, f.default, !0) : null]
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
      return null !== (e = null != t ? h.default.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null
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