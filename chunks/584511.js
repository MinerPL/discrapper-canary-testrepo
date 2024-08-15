var r, i, a, s = n(735250),
  o = n(470079),
  l = n(120356),
  u = n.n(l),
  c = n(481060),
  d = n(686546),
  _ = n(721311);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(r = i || (i = {}))[r.OUTGOING = 0] = 'OUTGOING', r[r.INCOMING = 1] = 'INCOMING';
class f extends(a = o.PureComponent) {
  renderStatus() {
let {
  muted: e,
  deafen: t
} = this.props, n = t ? c.HeadphonesSlashIcon : c.MicrophoneSlashIcon;
return e || t ? (0, s.jsx)(n, {
  className: _.status
}, 'status') : null;
  }
  renderBorder() {
let {
  speaking: e
} = this.props;
return (0, s.jsx)('div', {
  className: u()(_.border, {
    [_.speaking]: e
  })
}, 'border');
  }
  renderMask() {
let {
  muted: e,
  speaking: t,
  deafen: n
} = this.props;
return e && t ? (0, s.jsxs)(s.Fragment, {
  children: [
    this.renderBorder(),
    this.renderStatus()
  ]
}) : e || n ? (0, s.jsx)(s.Fragment, {
  children: this.renderStatus()
}) : (0, s.jsx)(s.Fragment, {
  children: this.renderBorder()
});
  }
  renderVoiceCallAvatar() {
let {
  src: e,
  disabled: t,
  ringing: n,
  ringingType: r,
  avatarClassName: i,
  muted: a,
  deafen: o,
  size: l,
  renderIcon: E
} = this.props, f = (0, c.getAvatarSize)(l), h = (0, s.jsx)('img', {
  src: e,
  alt: ' ',
  className: u()(_.voiceAvatar, i, {
    [_.ringingOutgoing]: n && 0 === r
  })
});
if (t)
  return h;
let p = d.QS.AVATAR_DEFAULT;
return null != E ? p = l === c.AvatarSizes.SIZE_32 ? d.QS.AVATAR_CALL_ICON_32 : d.QS.AVATAR_CALL_ICON : (a || o) && (p = d.QS.AVATAR_VOICE_CALL_80), (0, s.jsxs)('div', {
  className: _.callAvatarMaskContainer,
  children: [
    (0, s.jsxs)(d.ZP, {
      className: _.callAvatarMask,
      width: f,
      height: f,
      mask: p,
      children: [
        null == E ? void 0 : E(),
        h
      ]
    }),
    this.renderMask()
  ]
});
  }
  render() {
let {
  size: e,
  onClick: t,
  style: n,
  onContextMenu: r,
  className: i,
  ringingType: a,
  ringing: o
} = this.props, l = u()(_.wrapper, {
  [_.clickable]: null != t,
  [_.ringingOutgoing]: o && 0 === a,
  [_.ringingIncoming]: o && 1 === a
}, i), d = (0, c.getAvatarSize)(e), E = {
  height: d,
  width: d,
  ...n
};
return (0, s.jsx)('div', {
  style: E,
  onContextMenu: r,
  className: l,
  children: this.renderVoiceCallAvatar()
});
  }
}
E(f, 'defaultProps', {
  size: c.AvatarSizes.SIZE_80,
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
}), E(f, 'RingingType', i), t.Z = f;