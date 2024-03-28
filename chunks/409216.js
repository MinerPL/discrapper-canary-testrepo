"use strict";
n.r(t), n("653041"), n("47120");
var r, i = n("735250"),
  l = n("470079"),
  s = n("803997"),
  o = n.n(s),
  u = n("481060"),
  a = n("598077"),
  c = n("632184"),
  d = n("821285"),
  f = n("543205");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class g extends(r = l.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: r
    } = this.props, i = [], l = e.length === t ? e.length : t - 1, s = 0;
    for (; s < l && s < e.length;) {
      let t = s === e.length - 1;
      i.push(n(e[s] || null, t ? null : d.avatarMasked, "user-".concat(s), t)), s++
    }
    if (s < e.length) {
      let t = Math.min(e.length - s, 99);
      i.push(r("+".concat(t), d.moreUsers, "more-users", t))
    }
    return i
  }
  renderIcon() {
    return this.props.icon ? (0, i.jsx)("div", {
      className: d.iconContainer,
      children: (0, i.jsx)(c.default, {
        width: 16,
        height: 16,
        foreground: d.foreground,
        className: d.icon
      })
    }) : null
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, i.jsxs)("div", {
      className: o()(e, d.container),
      ref: e => this._ref = e,
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), S(this, "_ref", void 0), S(this, "defaultRenderUser", (e, t, n, r) => {
      let {
        onClick: l,
        size: s,
        guildId: c
      } = this.props, S = e instanceof a.default ? e : null != e ? e.user : null;
      return null == S ? (0, i.jsx)("div", {
        className: o()(d.emptyUser, t)
      }, n) : (0, i.jsx)(u.Avatar, {
        tabIndex: 0,
        src: S.getAvatarURL(c, (0, u.getAvatarSize)(s)),
        size: s,
        "aria-label": S.username,
        className: o()(t, f.cursorPointer, d.avatarSize),
        onClick: e => null != l ? l(e, S, this._ref) : null
      }, S.id)
    })
  }
}
S(g, "defaultProps", {
  max: 10,
  renderMoreUsers: function(e, t, n) {
    return (0, i.jsx)("div", {
      className: t,
      children: e
    }, n)
  },
  size: u.AvatarSizes.SIZE_24
}), t.default = g