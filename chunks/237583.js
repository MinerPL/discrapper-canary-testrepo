n(653041), n(47120);
var a, i = n(735250),
  l = n(470079),
  s = n(120356),
  r = n.n(s),
  o = n(481060),
  c = n(598077),
  d = n(940942),
  u = n(585867);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class v extends(a = l.PureComponent) {
  renderUsers() {
let {
  users: e,
  max: t,
  renderUser: n = this.defaultRenderUser,
  renderMoreUsers: a
} = this.props, i = [], l = e.length === t ? e.length : t - 1, s = 0;
for (; s < l && s < e.length;) {
  let t = s === e.length - 1;
  i.push(n(e[s] || null, t ? null : d.avatarMasked, 'user-'.concat(s), t)), s++;
}
if (s < e.length) {
  let t = Math.min(e.length - s, 99);
  i.push(a('+'.concat(t), d.moreUsers, 'more-users', t));
}
return i;
  }
  renderIcon() {
return this.props.icon ? (0, i.jsx)('div', {
  className: d.iconContainer,
  children: (0, i.jsx)(o.VoiceNormalIcon, {
    size: 'xs',
    color: 'currentColor',
    colorClass: d.foreground,
    className: d.icon
  })
}) : null;
  }
  render() {
let {
  className: e
} = this.props;
return (0, i.jsxs)('div', {
  className: r()(e, d.container),
  ref: e => this._ref = e,
  children: [
    this.renderIcon(),
    this.renderUsers()
  ]
});
  }
  constructor(...e) {
super(...e), g(this, '_ref', void 0), g(this, 'defaultRenderUser', (e, t, n, a) => {
  let {
    onClick: l,
    size: s,
    guildId: g
  } = this.props, v = e instanceof c.Z ? e : null != e ? e.user : null;
  return null == v ? (0, i.jsx)('div', {
    className: r()(d.emptyUser, t)
  }, n) : (0, i.jsx)(o.Avatar, {
    tabIndex: 0,
    src: v.getAvatarURL(g, (0, o.getAvatarSize)(s)),
    size: s,
    'aria-label': v.username,
    className: r()(t, u.cursorPointer, d.avatarSize),
    onClick: e => null != l ? l(e, v, this._ref) : null
  }, v.id);
});
  }
}
g(v, 'defaultProps', {
  max: 10,
  renderMoreUsers: function(e, t, n) {
return (0, i.jsx)('div', {
  className: t,
  children: e
}, n);
  },
  size: o.AvatarSizes.SIZE_24
}), t.Z = v;