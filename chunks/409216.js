t(653041), t(47120);
var r, i = t(735250),
  o = t(470079),
  l = t(120356),
  u = t.n(l),
  a = t(481060),
  s = t(598077),
  c = t(3600),
  d = t(492852);

function _(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}
class f extends(r = o.PureComponent) {
  renderUsers() {
let {
  users: e,
  max: n,
  renderUser: t = this.defaultRenderUser,
  renderMoreUsers: r
} = this.props, i = [], o = e.length === n ? e.length : n - 1, l = 0;
for (; l < o && l < e.length;) {
  let n = l === e.length - 1;
  i.push(t(e[l] || null, n ? null : c.avatarMasked, 'user-'.concat(l), n)), l++;
}
if (l < e.length) {
  let n = Math.min(e.length - l, 99);
  i.push(r('+'.concat(n), c.moreUsers, 'more-users', n));
}
return i;
  }
  renderIcon() {
return this.props.icon ? (0, i.jsx)('div', {
  className: c.iconContainer,
  children: (0, i.jsx)(a.VoiceNormalIcon, {
    size: 'xs',
    color: 'currentColor',
    colorClass: c.foreground,
    className: c.icon
  })
}) : null;
  }
  render() {
let {
  className: e
} = this.props;
return (0, i.jsxs)('div', {
  className: u()(e, c.container),
  ref: e => this._ref = e,
  children: [
    this.renderIcon(),
    this.renderUsers()
  ]
});
  }
  constructor(...e) {
super(...e), _(this, '_ref', void 0), _(this, 'defaultRenderUser', (e, n, t, r) => {
  let {
    onClick: o,
    size: l,
    guildId: _
  } = this.props, f = e instanceof s.Z ? e : null != e ? e.user : null;
  return null == f ? (0, i.jsx)('div', {
    className: u()(c.emptyUser, n)
  }, t) : (0, i.jsx)(a.Avatar, {
    tabIndex: 0,
    src: f.getAvatarURL(_, (0, a.getAvatarSize)(l)),
    size: l,
    'aria-label': f.username,
    className: u()(n, d.cursorPointer, c.avatarSize),
    onClick: e => null != o ? o(e, f, this._ref) : null
  }, f.id);
});
  }
}
_(f, 'defaultProps', {
  max: 10,
  renderMoreUsers: function(e, n, t) {
return (0, i.jsx)('div', {
  className: n,
  children: e
}, t);
  },
  size: a.AvatarSizes.SIZE_24
}), n.Z = f;