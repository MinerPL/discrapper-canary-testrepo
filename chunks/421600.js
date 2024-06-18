"use strict";
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(481060),
  d = n(381238),
  c = n(779863),
  E = n(806519),
  I = n(52244);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = r || (r = {}))[i.OUTGOING = 0] = "OUTGOING", i[i.INCOMING = 1] = "INCOMING";
class h extends(s = a.PureComponent) {
  renderStatus() {
    let {
      muted: e,
      deafen: t
    } = this.props, n = t ? d.Z : c.Z;
    return e || t ? (0, o.jsx)(n, {
      className: I.status
    }, "status") : null
  }
  renderBorder() {
    let {
      speaking: e
    } = this.props;
    return (0, o.jsx)("div", {
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
    return e && t ? (0, o.jsxs)(o.Fragment, {
      children: [this.renderBorder(), this.renderStatus()]
    }) : e || n ? (0, o.jsx)(o.Fragment, {
      children: this.renderStatus()
    }) : (0, o.jsx)(o.Fragment, {
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
      muted: s,
      deafen: a,
      size: l,
      renderIcon: d
    } = this.props, c = (0, _.getAvatarSize)(l), T = (0, o.jsx)("img", {
      src: e,
      alt: " ",
      className: u()(I.voiceAvatar, r, {
        [I.ringingOutgoing]: n && 0 === i
      })
    });
    if (t) return T;
    let h = E.QS.AVATAR_DEFAULT;
    return null != d ? h = l === _.AvatarSizes.SIZE_32 ? E.QS.AVATAR_CALL_ICON_32 : E.QS.AVATAR_CALL_ICON : (s || a) && (h = E.QS.AVATAR_VOICE_CALL_80), (0, o.jsxs)("div", {
      className: I.callAvatarMaskContainer,
      children: [(0, o.jsxs)(E.ZP, {
        className: I.callAvatarMask,
        width: c,
        height: c,
        mask: h,
        children: [null == d ? void 0 : d(), T]
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
      ringingType: s,
      ringing: a
    } = this.props, l = u()(I.wrapper, {
      [I.clickable]: null != t,
      [I.ringingOutgoing]: a && 0 === s,
      [I.ringingIncoming]: a && 1 === s
    }, r), d = (0, _.getAvatarSize)(e), c = {
      height: d,
      width: d,
      ...n
    };
    return (0, o.jsx)("div", {
      style: c,
      onContextMenu: i,
      className: l,
      children: this.renderVoiceCallAvatar()
    })
  }
}
T(h, "defaultProps", {
  size: _.AvatarSizes.SIZE_80,
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
}), T(h, "RingingType", r), t.Z = h