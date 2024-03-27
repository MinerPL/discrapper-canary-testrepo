"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var r, a, n = s("37983"),
  l = s("884691"),
  i = s("414456"),
  c = s.n(i),
  d = s("77078"),
  o = s("200639"),
  u = s("97347"),
  h = s("587974"),
  f = s("688843");
(r = a || (a = {}))[r.OUTGOING = 0] = "OUTGOING", r[r.INCOMING = 1] = "INCOMING";
class v extends l.PureComponent {
  renderStatus() {
    let {
      muted: e,
      deafen: t
    } = this.props, s = t ? o.default : u.default;
    return e || t ? (0, n.jsx)(s, {
      className: f.status
    }, "status") : null
  }
  renderBorder() {
    let {
      speaking: e
    } = this.props;
    return (0, n.jsx)("div", {
      className: c(f.border, {
        [f.speaking]: e
      })
    }, "border")
  }
  renderMask() {
    let {
      muted: e,
      speaking: t,
      deafen: s
    } = this.props;
    return e && t ? (0, n.jsxs)(n.Fragment, {
      children: [this.renderBorder(), this.renderStatus()]
    }) : e || s ? (0, n.jsx)(n.Fragment, {
      children: this.renderStatus()
    }) : (0, n.jsx)(n.Fragment, {
      children: this.renderBorder()
    })
  }
  renderVoiceCallAvatar() {
    let {
      src: e,
      disabled: t,
      ringing: s,
      ringingType: r,
      avatarClassName: a,
      muted: l,
      deafen: i,
      size: o,
      renderIcon: u
    } = this.props, v = (0, d.getAvatarSize)(o), C = (0, n.jsx)("img", {
      src: e,
      alt: " ",
      className: c(f.voiceAvatar, a, {
        [f.ringingOutgoing]: s && 0 === r
      })
    });
    if (t) return C;
    let x = h.MaskIDs.AVATAR_DEFAULT;
    return null != u ? x = o === d.AvatarSizes.SIZE_32 ? h.MaskIDs.AVATAR_CALL_ICON_32 : h.MaskIDs.AVATAR_CALL_ICON : (l || i) && (x = h.MaskIDs.AVATAR_VOICE_CALL_80), (0, n.jsxs)("div", {
      className: f.callAvatarMaskContainer,
      children: [(0, n.jsxs)(h.default, {
        className: f.callAvatarMask,
        width: v,
        height: v,
        mask: x,
        children: [null == u ? void 0 : u(), C]
      }), this.renderMask()]
    })
  }
  render() {
    let {
      size: e,
      onClick: t,
      style: s,
      onContextMenu: r,
      className: a,
      ringingType: l,
      ringing: i
    } = this.props, o = c(f.wrapper, {
      [f.clickable]: null != t,
      [f.ringingOutgoing]: i && 0 === l,
      [f.ringingIncoming]: i && 1 === l
    }, a), u = (0, d.getAvatarSize)(e), h = {
      height: u,
      width: u,
      ...s
    };
    return (0, n.jsx)("div", {
      style: h,
      onContextMenu: r,
      className: o,
      children: this.renderVoiceCallAvatar()
    })
  }
}
v.defaultProps = {
  size: d.AvatarSizes.SIZE_80,
  ringingType: 0,
  speaking: !1,
  soundsharing: !1,
  ringing: !1,
  muted: !1,
  deafen: !1,
  hasVideo: !1,
  mirror: !1,
  disabled: !1,
  paused: !1
}, v.RingingType = a;
var C = v