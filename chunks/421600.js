"use strict";
n.r(t);
var i, r, a, s = n("735250"),
  o = n("470079"),
  l = n("120356"),
  u = n.n(l),
  d = n("481060"),
  _ = n("381238"),
  c = n("779863"),
  E = n("806519"),
  I = n("52244");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = r || (r = {}))[i.OUTGOING = 0] = "OUTGOING", i[i.INCOMING = 1] = "INCOMING";
class f extends(a = o.PureComponent) {
  renderStatus() {
    let {
      muted: e,
      deafen: t
    } = this.props, n = t ? _.default : c.default;
    return e || t ? (0, s.jsx)(n, {
      className: I.status
    }, "status") : null
  }
  renderBorder() {
    let {
      speaking: e
    } = this.props;
    return (0, s.jsx)("div", {
      className: u()(I.border, {
        [I.speaking]: e
      })
    }, "border")
  }
  renderMask() {
    let {
      muted: e,
      speaking: t,
      deafen: n
    } = this.props;
    return e && t ? (0, s.jsxs)(s.Fragment, {
      children: [this.renderBorder(), this.renderStatus()]
    }) : e || n ? (0, s.jsx)(s.Fragment, {
      children: this.renderStatus()
    }) : (0, s.jsx)(s.Fragment, {
      children: this.renderBorder()
    })
  }
  renderVoiceCallAvatar() {
    let {
      src: e,
      disabled: t,
      ringing: n,
      ringingType: i,
      avatarClassName: r,
      muted: a,
      deafen: o,
      size: l,
      renderIcon: _
    } = this.props, c = (0, d.getAvatarSize)(l), T = (0, s.jsx)("img", {
      src: e,
      alt: " ",
      className: u()(I.voiceAvatar, r, {
        [I.ringingOutgoing]: n && 0 === i
      })
    });
    if (t) return T;
    let f = E.MaskIDs.AVATAR_DEFAULT;
    return null != _ ? f = l === d.AvatarSizes.SIZE_32 ? E.MaskIDs.AVATAR_CALL_ICON_32 : E.MaskIDs.AVATAR_CALL_ICON : (a || o) && (f = E.MaskIDs.AVATAR_VOICE_CALL_80), (0, s.jsxs)("div", {
      className: I.callAvatarMaskContainer,
      children: [(0, s.jsxs)(E.default, {
        className: I.callAvatarMask,
        width: c,
        height: c,
        mask: f,
        children: [null == _ ? void 0 : _(), T]
      }), this.renderMask()]
    })
  }
  render() {
    let {
      size: e,
      onClick: t,
      style: n,
      onContextMenu: i,
      className: r,
      ringingType: a,
      ringing: o
    } = this.props, l = u()(I.wrapper, {
      [I.clickable]: null != t,
      [I.ringingOutgoing]: o && 0 === a,
      [I.ringingIncoming]: o && 1 === a
    }, r), _ = (0, d.getAvatarSize)(e), c = {
      height: _,
      width: _,
      ...n
    };
    return (0, s.jsx)("div", {
      style: c,
      onContextMenu: i,
      className: l,
      children: this.renderVoiceCallAvatar()
    })
  }
}
T(f, "defaultProps", {
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
}), T(f, "RingingType", r), t.default = f