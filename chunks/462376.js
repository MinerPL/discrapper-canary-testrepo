"use strict";
n.r(t), n.d(t, {
  INVITE_ROW_HEIGHT: function() {
    return N
  },
  InviteRow: function() {
    return p
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("780384"),
  i = n("481060"),
  r = n("630810"),
  o = n("43267"),
  u = n("933557"),
  d = n("210887"),
  c = n("430824"),
  I = n("751771"),
  g = n("699516"),
  h = n("594174"),
  E = n("768581"),
  f = n("624138"),
  _ = n("51144"),
  T = n("689938"),
  v = n("651937");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = 44;
class p extends a.Component {
  shouldComponentUpdate(e, t) {
    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
  }
  renderUserOrChannel() {
    let e, t, n;
    let {
      user: a,
      channel: s
    } = this.props;
    if (null != a) t = a.getAvatarURL(null == s ? void 0 : s.guild_id, 32), n = _.default.getName(a);
    else if (null != s && (t = (0, o.getChannelIconURL)(s), n = (0, u.computeChannelName)(s, h.default, g.default), null == t && null != s.guild_id)) {
      let n = c.default.getGuild(s.guild_id);
      null != n && (null != n.icon ? t = E.default.getGuildIconURL({
        id: s.guild_id,
        icon: n.icon,
        size: 32
      }) : e = (0, f.getAcronym)(n.name))
    }
    if (null == t || null == n) return null != e ? (0, l.jsx)("div", {
      className: v.acronym,
      "aria-hidden": !0,
      children: e
    }) : null;
    return (0, l.jsx)(i.Avatar, {
      src: t,
      "aria-label": n,
      size: i.AvatarSizes.SIZE_32,
      className: v.inviteRowAvatar
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
      hovered: o
    } = this.state;
    return e = r ? (0, l.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.SMALL,
      disabled: !0,
      color: (0, s.isThemeDark)(d.default.theme) ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
      children: T.default.Messages.INVITE_FRIEND_MODAL_SENT
    }) : (0, l.jsx)(i.Button, {
      color: i.Button.Colors.GREEN,
      look: o ? i.Button.Looks.FILLED : i.Button.Looks.OUTLINED,
      className: v.inviteRowButton,
      size: i.Button.Sizes.SMALL,
      submitting: a,
      onClick: this.handleClickInvite,
      children: T.default.Messages.INVITE_FRIEND_MODAL_INVITE
    }), (0, l.jsxs)("div", {
      className: v.inviteRow,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, l.jsxs)("div", {
        className: v.inviteRowInfo,
        children: [this.renderUserOrChannel(), (0, l.jsxs)("div", {
          className: v.inviteRowName,
          children: [_.default.getName(t), null != n ? (0, u.computeChannelName)(n, h.default, g.default, !0) : null]
        })]
      }), e]
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      sending: !1,
      invited: !1,
      hovered: !1
    }), m(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), m(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), m(this, "getSuggestedProps", () => {
      var e;
      let {
        row: t
      } = this.props;
      return null !== (e = null != t ? I.default.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null
    }), m(this, "handleClickInvite", () => {
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
    })
  }
}