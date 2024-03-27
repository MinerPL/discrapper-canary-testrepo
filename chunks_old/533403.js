"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("424973"), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  u = n("77078"),
  o = n("766274"),
  a = n("368121"),
  d = n("107294"),
  c = n("633827");
class f extends r.PureComponent {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: i
    } = this.props, r = [], l = e.length === t ? e.length : t - 1, s = 0;
    for (; s < l && s < e.length;) {
      let t = s === e.length - 1;
      r.push(n(e[s] || null, t ? null : d.avatarMasked, "user-".concat(s), t)), s++
    }
    if (s < e.length) {
      let t = Math.min(e.length - s, 99);
      r.push(i("+".concat(t), d.moreUsers, "more-users", t))
    }
    return r
  }
  renderIcon() {
    return this.props.icon ? (0, i.jsx)("div", {
      className: d.iconContainer,
      children: (0, i.jsx)(a.default, {
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
      className: s(e, d.container),
      ref: e => this._ref = e,
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), this.defaultRenderUser = (e, t, n, r) => {
      let {
        onClick: l,
        size: a,
        guildId: f
      } = this.props, S = e instanceof o.default ? e : null != e ? e.user : null;
      return null == S ? (0, i.jsx)("div", {
        className: s(d.emptyUser, t)
      }, n) : (0, i.jsx)(u.Avatar, {
        tabIndex: 0,
        src: S.getAvatarURL(f, (0, u.getAvatarSize)(a)),
        size: a,
        "aria-label": S.username,
        className: s(t, c.cursorPointer, d.avatarSize),
        onClick: e => null != l ? l(e, S, this._ref) : null
      }, S.id)
    }
  }
}
f.defaultProps = {
  max: 10,
  renderMoreUsers: function(e, t, n) {
    return (0, i.jsx)("div", {
      className: t,
      children: e
    }, n)
  },
  size: u.AvatarSizes.SIZE_24
};
var S = f