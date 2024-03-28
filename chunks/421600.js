"use strict";
n.r(t);
var a, s, l, i = n("735250"),
  r = n("470079"),
  d = n("803997"),
  u = n.n(d),
  o = n("481060"),
  c = n("381238"),
  E = n("255439"),
  f = n("806519"),
  h = n("210442");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a = s || (s = {}))[a.OUTGOING = 0] = "OUTGOING", a[a.INCOMING = 1] = "INCOMING";
class S extends(l = r.PureComponent) {
  renderStatus() {
    let {
      muted: e,
      deafen: t
    } = this.props, n = t ? c.default : E.default;
    return e || t ? (0, i.jsx)(n, {
      className: h.status
    }, "status") : null
  }
  renderBorder() {
    let {
      speaking: e
    } = this.props;
    return (0, i.jsx)("div", {
      className: u()(h.border, {
        [h.speaking]: e
      })
    }, "border")
  }
  renderMask() {
    let {
      muted: e,
      speaking: t,
      deafen: n
    } = this.props;
    return e && t ? (0, i.jsxs)(i.Fragment, {
      children: [this.renderBorder(), this.renderStatus()]
    }) : e || n ? (0, i.jsx)(i.Fragment, {
      children: this.renderStatus()
    }) : (0, i.jsx)(i.Fragment, {
      children: this.renderBorder()
    })
  }
  renderVoiceCallAvatar() {
    let {
      src: e,
      disabled: t,
      ringing: n,
      ringingType: a,
      avatarClassName: s,
      muted: l,
      deafen: r,
      size: d,
      renderIcon: c
    } = this.props, E = (0, o.getAvatarSize)(d), _ = (0, i.jsx)("img", {
      src: e,
      alt: " ",
      className: u()(h.voiceAvatar, s, {
        [h.ringingOutgoing]: n && 0 === a
      })
    });
    if (t) return _;
    let S = f.MaskIDs.AVATAR_DEFAULT;
    return null != c ? S = d === o.AvatarSizes.SIZE_32 ? f.MaskIDs.AVATAR_CALL_ICON_32 : f.MaskIDs.AVATAR_CALL_ICON : (l || r) && (S = f.MaskIDs.AVATAR_VOICE_CALL_80), (0, i.jsxs)("div", {
      className: h.callAvatarMaskContainer,
      children: [(0, i.jsxs)(f.default, {
        className: h.callAvatarMask,
        width: E,
        height: E,
        mask: S,
        children: [null == c ? void 0 : c(), _]
      }), this.renderMask()]
    })
  }
  render() {
    let {
      size: e,
      onClick: t,
      style: n,
      onContextMenu: a,
      className: s,
      ringingType: l,
      ringing: r
    } = this.props, d = u()(h.wrapper, {
      [h.clickable]: null != t,
      [h.ringingOutgoing]: r && 0 === l,
      [h.ringingIncoming]: r && 1 === l
    }, s), c = (0, o.getAvatarSize)(e), E = {
      height: c,
      width: c,
      ...n
    };
    return (0, i.jsx)("div", {
      style: E,
      onContextMenu: a,
      className: d,
      children: this.renderVoiceCallAvatar()
    })
  }
}
_(S, "defaultProps", {
  size: o.AvatarSizes.SIZE_80,
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
}), _(S, "RingingType", s), t.default = S