s.d(n, {
  $W: function() {
return L;
  },
  Mx: function() {
return S;
  },
  PZ: function() {
return Z;
  },
  h4: function() {
return T;
  },
  ic: function() {
return j;
  },
  n5: function() {
return A;
  },
  rU: function() {
return R;
  },
  s8: function() {
return U;
  }
}), s(47120);
var t, r = s(735250),
  i = s(470079),
  a = s(481060),
  l = s(815372),
  c = s(43267),
  o = s(933557),
  d = s(471445),
  u = s(16206),
  h = s(925329),
  E = s(565138),
  p = s(754688),
  C = s(430824),
  m = s(699516),
  N = s(594174),
  x = s(51144),
  _ = s(2093),
  f = s(409216),
  I = s(689938),
  M = s(66479);

function g(e, n, s) {
  return n in e ? Object.defineProperty(e, n, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = s, e;
}
class v extends i.PureComponent {
  componentDidMount() {
let {
  focused: e,
  onFocus: n
} = this.props, {
  node: s
} = this;
e && null != s && n(s);
  }
  componentDidUpdate(e) {
let {
  focused: n,
  onFocus: s
} = this.props, {
  node: t
} = this;
null != t && n && !e.focused && s(t);
  }
  render() {
let {
  focused: e,
  children: n,
  score: s,
  onContextMenu: t,
  id: i,
  'aria-label': l
} = this.props;
return (0, r.jsxs)(a.Clickable, {
  role: 'option',
  id: i,
  'aria-label': l,
  'aria-selected': e,
  focusProps: {
    enabled: !1
  },
  tabIndex: -1,
  innerRef: this.setRef,
  className: M.result,
  onClick: this.handleClick,
  onMouseEnter: this.handleMouseEnter,
  onContextMenu: t,
  children: [
    n,
    null != s ? (0, r.jsx)('div', {
      className: M.score,
      children: s >> 0
    }) : null
  ]
});
  }
  constructor(...e) {
super(...e), g(this, 'node', void 0), g(this, 'handleClick', e => {
  e.preventDefault();
  let {
    onClick: n
  } = this.props, {
    node: s
  } = this;
  null != s && n(e, s);
}), g(this, 'handleMouseEnter', e => {
  let {
    onMouseEnter: n
  } = this.props, {
    node: s
  } = this;
  null != s && n(e, s);
}), g(this, 'setRef', e => {
  this.node = e;
});
  }
}
class j extends i.Component {
  renderIcon() {
let {
  guild: e
} = this.props;
return (0, r.jsx)('div', {
  className: M.guildIconContainer,
  children: (0, r.jsx)(E.Z, {
    tabIndex: -1,
    guild: e,
    size: E.Z.Sizes.MINI,
    className: M.guildIcon
  })
});
  }
  renderName() {
let {
  guild: e
} = this.props;
return (0, r.jsx)('div', {
  className: M.name,
  children: (0, r.jsx)('span', {
    className: M.match,
    children: e.name
  })
});
  }
  renderContent() {
let {
  unread: e,
  children: n
} = this.props;
return (0, r.jsxs)('div', {
  className: e ? M.contentUnread : M.contentDefault,
  children: [
    this.renderIcon(),
    this.renderName(),
    (0, r.jsx)('div', {
      className: M.misc,
      children: n
    })
  ]
});
  }
  getAccessibilityLabel() {
let {
  guild: e
} = this.props;
return I.Z.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({
  name: e.name
});
  }
  render() {
let {
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  id: l
} = this.props;
return (0, r.jsx)(v, {
  id: l,
  'aria-label': this.getAccessibilityLabel(),
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  children: this.renderContent()
});
  }
}
class L extends(t = i.Component) {
  renderIcon() {
var e;
let {
  channel: n
} = this.props, s = (0, d.KS)(n);
if (null == s)
  return null;
let t = null !== (e = (0, u.Z)(n)) && void 0 !== e ? e : '';
return (0, r.jsx)('div', {
  className: M.iconContainer,
  role: 'img',
  'aria-label': t,
  children: (0, r.jsx)(s, {
    className: M.icon,
    size: 'xs',
    color: 'currentColor'
  })
});
  }
  renderName() {
let e, n;
let {
  mentions: s,
  category: t,
  channel: i
} = this.props;
return null != s && s > 0 && (e = (0, r.jsx)(_.Z, {
  className: M.badge,
  value: s
})), null != t && (n = (0, r.jsx)('span', {
  className: M.note,
  children: (0, o.F6)(t, N.default, m.Z)
})), (0, r.jsxs)('div', {
  className: M.name,
  children: [
    (0, r.jsx)('span', {
      className: M.match,
      children: (0, o.F6)(i, N.default, m.Z)
    }),
    e,
    this.renderVoiceStates(),
    n
  ]
});
  }
  renderVoiceStates() {
let {
  voiceStates: e,
  channel: n
} = this.props;
return null == e ? null : (0, r.jsx)(f.Z, {
  className: M.voiceSummaryContainer,
  guildId: n.guild_id,
  users: e.map(e => {
    let {
      user: n
    } = e;
    return {
      user: n
    };
  }),
  max: 4
});
  }
  renderContent() {
let {
  unread: e,
  mentions: n,
  children: s
} = this.props;
return (0, r.jsxs)('div', {
  'aria-hidden': !0,
  className: e || null != n && n > 0 ? M.contentUnread : M.contentDefault,
  children: [
    this.renderIcon(),
    this.renderName(),
    (0, r.jsx)('div', {
      className: M.misc,
      children: s
    })
  ]
});
  }
  getAccessibilityLabel() {
var e;
let {
  channel: n
} = this.props, s = null === (e = C.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name, t = (0, o.F6)(n, N.default, m.Z), r = (0, u.Z)(n);
return I.Z.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
  name: t,
  type: r,
  guild: s
});
  }
  render() {
let {
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  id: l
} = this.props;
return (0, r.jsx)(v, {
  id: l,
  'aria-label': this.getAccessibilityLabel(),
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  children: this.renderContent()
});
  }
}
g(L, 'defaultProps', {
  unread: !1
});
class Z extends i.Component {
  renderIcon() {
let {
  channel: e
} = this.props;
return (0, r.jsx)('div', {
  className: M.dmIconContainer,
  children: (0, r.jsx)(a.Avatar, {
    src: (0, c.x)(e),
    size: a.AvatarSizes.SIZE_20,
    'aria-hidden': !0
  })
});
  }
  renderName() {
let e;
let {
  mentions: n,
  channel: s
} = this.props;
return null != n && n > 0 && (e = (0, r.jsx)(_.Z, {
  className: M.badge,
  value: n
})), (0, r.jsxs)('div', {
  className: M.name,
  children: [
    (0, r.jsx)('span', {
      className: M.match,
      children: (0, o.F6)(s, N.default, m.Z)
    }),
    e
  ]
});
  }
  renderContent() {
let {
  mentions: e,
  children: n
} = this.props;
return (0, r.jsxs)('div', {
  className: null != e && e > 0 ? M.contentUnread : M.contentDefault,
  children: [
    this.renderIcon(),
    this.renderName(),
    (0, r.jsx)('div', {
      className: M.misc,
      children: n
    })
  ]
});
  }
  getAccessibilityLabel() {
let {
  channel: e,
  mentions: n
} = this.props, s = (0, o.F6)(e, N.default, m.Z);
return null != n && n > 0 ? I.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
  name: s,
  mentions: n
}) : I.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({
  name: s
});
  }
  render() {
let {
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  id: l
} = this.props;
return (0, r.jsx)(v, {
  id: l,
  'aria-label': this.getAccessibilityLabel(),
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  children: this.renderContent()
});
  }
}
class A extends i.Component {
  renderIcon() {
let {
  user: e
} = this.props;
return (0, r.jsx)('div', {
  className: M.iconContainer,
  children: (0, r.jsx)(a.Avatar, {
    src: e.getAvatarURL(void 0, 20),
    'aria-hidden': !0,
    size: a.AvatarSizes.SIZE_20
  })
});
  }
  getDisplayNickname() {
let e;
let {
  user: n,
  comparator: s
} = this.props, t = m.Z.getNickname(n.id);
return ((e = s === n.tag || null == s || '' === s ? n.username : s) === n.username || e === n.id) && (e = null != t ? t : x.ZP.getName(n)), e;
  }
  renderName() {
let e;
let {
  user: n,
  mentions: s
} = this.props, t = this.getDisplayNickname();
return null != s && s > 0 && (e = (0, r.jsx)(_.Z, {
  className: M.badge,
  value: s
})), (0, r.jsxs)('div', {
  className: M.name,
  children: [
    (0, r.jsx)('span', {
      className: M.match,
      children: t
    }),
    e,
    (0, r.jsx)('span', {
      className: M.username,
      children: x.ZP.getUserTag(n)
    })
  ]
});
  }
  renderContent() {
let {
  children: e,
  mentions: n
} = this.props;
return (0, r.jsxs)('div', {
  className: null != n && n > 0 ? M.contentUnread : M.contentDefault,
  children: [
    this.renderIcon(),
    this.renderName(),
    (0, r.jsx)('div', {
      className: M.misc,
      children: e
    })
  ]
});
  }
  getAccessibilityLabel() {
let {
  mentions: e,
  user: n
} = this.props, s = this.getDisplayNickname(), t = x.ZP.getUserTag(n);
return null != e && e > 0 ? I.Z.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
  name: s,
  id: t,
  mentions: e
}) : I.Z.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
  name: s,
  id: t
});
  }
  render() {
let {
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  id: l
} = this.props;
return (0, r.jsx)(v, {
  id: l,
  'aria-label': this.getAccessibilityLabel(),
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  children: this.renderContent()
});
  }
}
class S extends i.Component {
  renderContent() {
let {
  children: e,
  application: n
} = this.props;
return (0, r.jsxs)('div', {
  className: M.contentDefault,
  children: [
    (0, r.jsx)('div', {
      className: M.iconContainer,
      children: (0, r.jsx)(h.Z, {
        tabIndex: -1,
        className: M.gameIcon,
        game: n,
        size: M.gameIconSize
      })
    }),
    n.name,
    (0, r.jsx)('div', {
      className: M.misc,
      children: e
    })
  ]
});
  }
  render() {
let {
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  focused: t,
  id: i
} = this.props;
return (0, r.jsx)(v, {
  id: i,
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  focused: t,
  children: this.renderContent()
});
  }
}
class T extends i.Component {
  render() {
return (0, r.jsx)('div', {
  className: M.__invalid_resultDefault,
  children: (0, r.jsx)('div', {
    className: M.contentDefault,
    children: (0, r.jsx)('div', {
      className: M.header,
      children: this.props.children
    })
  })
});
  }
}
class R extends i.Component {
  renderContent() {
let e, n;
let {
  link: s,
  children: t
} = this.props, i = (0, p.Qj)(s.path);
return null == i || void 0 === i.messageId ? (e = I.Z.Messages.QUICKSWITCHER_LINK_UNKNOWN, n = (0, r.jsx)(a.LinkIcon, {
  size: 'xs',
  color: 'currentColor'
})) : (0, p.VO)(i) ? (e = I.Z.Messages.QUICKSWITCHER_LINK_MESSAGE, n = (0, r.jsx)(a.ChatArrowRightIcon, {
  size: 'xs',
  color: 'currentColor'
})) : (e = I.Z.Messages.QUICKSWITCHER_LINK_NO_ACCESS, n = (0, r.jsx)(a.LockIcon, {
  size: 'xs',
  color: 'currentColor'
})), (0, r.jsxs)('div', {
  className: M.contentDefault,
  children: [
    (0, r.jsx)('div', {
      className: M.iconContainer,
      children: n
    }),
    e,
    (0, r.jsx)('div', {
      className: M.misc,
      children: t
    })
  ]
});
  }
  render() {
let {
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  id: l
} = this.props;
return (0, r.jsx)(v, {
  id: l,
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  children: this.renderContent()
});
  }
}
class U extends i.Component {
  renderContent() {
let e;
let {
  navigationRecord: n,
  children: s
} = this.props, t = '';
switch (n.type) {
  case l.Ky.SHOP:
    t = I.Z.Messages.COLLECTIBLES_SHOP, e = (0, r.jsx)(a.ShopIcon, {
      size: 'xs',
      color: 'currentColor'
    });
    break;
  case l.Ky.NITRO_HOME:
    t = I.Z.Messages.PREMIUM, e = (0, r.jsx)(a.NitroWheelIcon, {
      size: 'xs',
      color: 'currentColor'
    });
    break;
  default:
    t = n.id, e = (0, r.jsx)(a.LinkIcon, {
      size: 'xs',
      color: 'currentColor'
    });
}
return (0, r.jsxs)('div', {
  className: M.contentDefault,
  children: [
    (0, r.jsx)('div', {
      className: M.iconContainer,
      children: e
    }),
    t,
    (0, r.jsx)('div', {
      className: M.misc,
      children: s
    })
  ]
});
  }
  render() {
let {
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  id: l
} = this.props;
return (0, r.jsx)(v, {
  id: l,
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: i,
  score: a,
  children: this.renderContent()
});
  }
}