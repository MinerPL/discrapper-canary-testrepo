n.d(t, {
  u: function() {
return T;
  }
}), n(653041), n(47120);
var r, i = n(735250),
  a = n(470079),
  o = n(120356),
  s = n.n(o),
  l = n(512722),
  u = n.n(l),
  c = n(481060),
  d = n(484459),
  _ = n(103575),
  E = n(598077),
  f = n(594174),
  h = n(806519),
  p = n(426563),
  m = n(734046);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let T = {
  SIZE_16: 16,
  SIZE_24: 24,
  SIZE_32: 32,
  SIZE_56: 56
};

function g(e, t) {
  let n = e instanceof E.Z ? e : null != e ? e.user : null;
  return null != n ? n.id : 'user-'.concat(t);
}
class S extends(r = a.PureComponent) {
  renderUsers() {
let {
  users: e,
  max: t,
  renderUser: n = this.defaultRenderUser,
  size: r,
  extraDetail: a
} = this.props, o = [], s = e.length === t ? e.length : t - 1, l = this.renderMoreUsers(s), u = 0;
for (; u < s && u < e.length;) {
  var c;
  let t = null == l && null == a && u === e.length - 1,
    s = n(e[u], t, u);
  o.push(t ? (0, i.jsx)('div', {
    className: m.avatarContainer,
    children: s
  }, g(null !== (c = e[u]) && void 0 !== c ? c : null, u)) : (0, i.jsx)(h.ZP, {
    className: m.avatarContainerMasked,
    height: r,
    width: r,
    mask: h.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
    children: s
  }, g(e[u], u))), u++;
}
return null != a ? o.push(a) : null != l && o.push(l), o;
  }
  renderMoreUsers(e) {
let {
  max: t,
  count: n,
  hideMoreUsers: r,
  renderMoreUsers: o,
  users: s
} = this.props, l = Math.min(e, s.length);
if (!r) {
  if (null != n) {
    if (n >= t)
      return (0, i.jsx)(a.Fragment, {
        children: o(''.concat(t, '+'), t)
      }, 'more-users');
    if (n > s.length) {
      let e = n - s.length;
      return (0, i.jsx)(a.Fragment, {
        children: o('+'.concat(e), e)
      }, 'more-users');
    }
  } else if (l < s.length) {
    let e = Math.min(s.length - l, 99);
    return (0, i.jsx)(a.Fragment, {
      children: o('+'.concat(e), e)
    }, 'more-users');
  }
}
  }
  renderIcon() {
return this.props.renderIcon ? (0, i.jsx)(c.VoiceNormalIcon, {
  size: 'md',
  color: 'currentColor',
  colorClass: m.__invalid_foreground,
  className: m.icon
}) : null;
  }
  render() {
let {
  className: e,
  size: t,
  users: n,
  guildId: r,
  showUserPopout: a,
  useFallbackUserForPopout: o
} = this.props, {
  popoutUserId: l
} = this.state, E = n.find(e => null != e && e.id === l), h = o && null == f.default.getUser(l);
return (0, i.jsx)(c.Popout, {
  position: 'right',
  preload: null == E ? void 0 : () => (0, d.W)(E.id, E.getAvatarURL(r, 80), {
    guildId: r
  }),
  shouldShow: !0 === a && null != l,
  fixed: !0,
  renderPopout: e => (u()(null != l, 'UserSummaryItem.render - renderPopout: popoutUserId cannot be null'), (0, i.jsx)(_.Z, {
    ...this.props,
    location: 'UserSummaryItem',
    user: h && null != E ? E : void 0,
    ...e,
    userId: l,
    guildId: this.props.guildId
  })),
  onRequestClose: () => this.setState({
    popoutUserId: null
  }),
  children: n => (0, i.jsxs)('div', {
    className: s()(e, m.container, function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.SIZE_24;
      switch (e) {
        case T.SIZE_16:
          return m.size16;
        case T.SIZE_24:
          return m.size24;
        case T.SIZE_32:
          return m.size32;
        case T.SIZE_56:
          return m.size56;
        default:
          return m.size24;
      }
    }(t)),
    ref: this._ref,
    ...n,
    children: [
      this.renderIcon(),
      this.renderUsers()
    ]
  })
});
  }
  constructor(...e) {
super(...e), I(this, 'state', {
  popoutUserId: null
}), I(this, '_ref', a.createRef()), I(this, 'defaultRenderUser', (e, t, n) => {
  let {
    showUserPopout: r,
    guildId: a,
    size: o
  } = this.props;
  if (null == e) {
    if (!this.props.showDefaultAvatarsForNullUsers)
      return (0, i.jsx)('div', {
        className: m.emptyUser
      });
    {
      let e = (null != n ? n : 0) % p.Z.DEFAULT_AVATARS.length,
        t = p.Z.DEFAULT_AVATARS[e];
      return (0, i.jsx)('img', {
        src: t,
        alt: '',
        className: m.avatar
      });
    }
  }
  let s = (0, i.jsx)('img', {
    src: e.getAvatarURL(a, o),
    alt: e.username,
    className: m.avatar
  }, e.id);
  return r ? (0, i.jsx)(c.Clickable, {
    className: m.clickableAvatar,
    onClick: () => {
      null != this._ref.current && null != e && this.setState({
        popoutUserId: e.id
      });
    },
    tabIndex: -1,
    children: s
  }, e.id) : s;
});
  }
}
I(S, 'defaultProps', {
  max: 10,
  renderMoreUsers: function(e) {
return (0, i.jsx)('div', {
  className: m.moreUsers,
  children: e
});
  },
  renderIcon: !1,
  showDefaultAvatarsForNullUsers: !1,
  size: T.SIZE_24
}), t.Z = S;