"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
}), l("424973"), l("222007");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("77078"),
  o = l("766274"),
  c = l("368121"),
  d = l("107294"),
  u = l("633827");
class f extends a.PureComponent {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: l = this.defaultRenderUser,
      renderMoreUsers: i
    } = this.props, a = [], n = e.length === t ? e.length : t - 1, s = 0;
    for (; s < n && s < e.length;) {
      let t = s === e.length - 1;
      a.push(l(e[s] || null, t ? null : d.avatarMasked, "user-".concat(s), t)), s++
    }
    if (s < e.length) {
      let t = Math.min(e.length - s, 99);
      a.push(i("+".concat(t), d.moreUsers, "more-users", t))
    }
    return a
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
      className: s(e, d.container),
      ref: e => this._ref = e,
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), this.defaultRenderUser = (e, t, l, a) => {
      let {
        onClick: n,
        size: c,
        guildId: f
      } = this.props, v = e instanceof o.default ? e : null != e ? e.user : null;
      return null == v ? (0, i.jsx)("div", {
        className: s(d.emptyUser, t)
      }, l) : (0, i.jsx)(r.Avatar, {
        tabIndex: 0,
        src: v.getAvatarURL(f, (0, r.getAvatarSize)(c)),
        size: c,
        "aria-label": v.username,
        className: s(t, u.cursorPointer, d.avatarSize),
        onClick: e => null != n ? n(e, v, this._ref) : null
      }, v.id)
    }
  }
}
f.defaultProps = {
  max: 10,
  renderMoreUsers: function(e, t, l) {
    return (0, i.jsx)("div", {
      className: t,
      children: e
    }, l)
  },
  size: r.AvatarSizes.SIZE_24
};
var v = f