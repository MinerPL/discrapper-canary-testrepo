s.d(n, {
  $W: function() {
return j;
  },
  Mx: function() {
return A;
  },
  PZ: function() {
return Z;
  },
  h4: function() {
return T;
  },
  ic: function() {
return v;
  },
  n5: function() {
return L;
  },
  rU: function() {
return R;
  }
}), s(47120);
var t, r = s(735250),
  a = s(470079),
  i = s(481060),
  l = s(43267),
  c = s(933557),
  o = s(471445),
  d = s(16206),
  u = s(754688),
  h = s(430824),
  E = s(699516),
  p = s(594174),
  m = s(51144),
  C = s(2093),
  N = s(366695),
  _ = s(346656),
  x = s(409216),
  f = s(689938),
  I = s(66479);

function g(e, n, s) {
  return n in e ? Object.defineProperty(e, n, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = s, e;
}
class M extends a.PureComponent {
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
  id: a,
  'aria-label': l
} = this.props;
return (0, r.jsxs)(i.Clickable, {
  role: 'option',
  id: a,
  'aria-label': l,
  'aria-selected': e,
  focusProps: {
    enabled: !1
  },
  tabIndex: -1,
  innerRef: this.setRef,
  className: I.result,
  onClick: this.handleClick,
  onMouseEnter: this.handleMouseEnter,
  onContextMenu: t,
  children: [
    n,
    null != s ? (0, r.jsx)('div', {
      className: I.score,
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
class v extends a.Component {
  renderIcon() {
let {
  guild: e
} = this.props;
return (0, r.jsx)('div', {
  className: I.guildIconContainer,
  children: (0, r.jsx)(_.Z, {
    tabIndex: -1,
    guild: e,
    size: _.Z.Sizes.MINI,
    className: I.guildIcon
  })
});
  }
  renderName() {
let {
  guild: e
} = this.props;
return (0, r.jsx)('div', {
  className: I.name,
  children: (0, r.jsx)('span', {
    className: I.match,
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
  className: e ? I.contentUnread : I.contentDefault,
  children: [
    this.renderIcon(),
    this.renderName(),
    (0, r.jsx)('div', {
      className: I.misc,
      children: n
    })
  ]
});
  }
  getAccessibilityLabel() {
let {
  guild: e
} = this.props;
return f.Z.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({
  name: e.name
});
  }
  render() {
let {
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: a,
  score: i,
  id: l
} = this.props;
return (0, r.jsx)(M, {
  id: l,
  'aria-label': this.getAccessibilityLabel(),
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: a,
  score: i,
  children: this.renderContent()
});
  }
}
class j extends(t = a.Component) {
  renderIcon() {
var e;
let {
  channel: n
} = this.props, s = (0, o.KS)(n);
if (null == s)
  return null;
let t = null !== (e = (0, d.Z)(n)) && void 0 !== e ? e : '';
return (0, r.jsx)('div', {
  className: I.iconContainer,
  role: 'img',
  'aria-label': t,
  children: (0, r.jsx)(s, {
    className: I.icon,
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
  channel: a
} = this.props;
return null != s && s > 0 && (e = (0, r.jsx)(C.Z, {
  className: I.badge,
  value: s
})), null != t && (n = (0, r.jsx)('span', {
  className: I.note,
  children: (0, c.F6)(t, p.default, E.Z)
})), (0, r.jsxs)('div', {
  className: I.name,
  children: [
    (0, r.jsx)('span', {
      className: I.match,
      children: (0, c.F6)(a, p.default, E.Z)
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
return null == e ? null : (0, r.jsx)(x.Z, {
  className: I.voiceSummaryContainer,
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
  className: e || null != n && n > 0 ? I.contentUnread : I.contentDefault,
  children: [
    this.renderIcon(),
    this.renderName(),
    (0, r.jsx)('div', {
      className: I.misc,
      children: s
    })
  ]
});
  }
  getAccessibilityLabel() {
var e;
let {
  channel: n
} = this.props, s = null === (e = h.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name, t = (0, c.F6)(n, p.default, E.Z), r = (0, d.Z)(n);
return f.Z.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
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
  focused: a,
  score: i,
  id: l
} = this.props;
return (0, r.jsx)(M, {
  id: l,
  'aria-label': this.getAccessibilityLabel(),
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: a,
  score: i,
  children: this.renderContent()
});
  }
}
g(j, 'defaultProps', {
  unread: !1
});
class Z extends a.Component {
  renderIcon() {
let {
  channel: e
} = this.props;
return (0, r.jsx)('div', {
  className: I.dmIconContainer,
  children: (0, r.jsx)(i.Avatar, {
    src: (0, l.x)(e),
    size: i.AvatarSizes.SIZE_20,
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
return null != n && n > 0 && (e = (0, r.jsx)(C.Z, {
  className: I.badge,
  value: n
})), (0, r.jsxs)('div', {
  className: I.name,
  children: [
    (0, r.jsx)('span', {
      className: I.match,
      children: (0, c.F6)(s, p.default, E.Z)
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
  className: null != e && e > 0 ? I.contentUnread : I.contentDefault,
  children: [
    this.renderIcon(),
    this.renderName(),
    (0, r.jsx)('div', {
      className: I.misc,
      children: n
    })
  ]
});
  }
  getAccessibilityLabel() {
let {
  channel: e,
  mentions: n
} = this.props, s = (0, c.F6)(e, p.default, E.Z);
return null != n && n > 0 ? f.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
  name: s,
  mentions: n
}) : f.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({
  name: s
});
  }
  render() {
let {
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: a,
  score: i,
  id: l
} = this.props;
return (0, r.jsx)(M, {
  id: l,
  'aria-label': this.getAccessibilityLabel(),
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: a,
  score: i,
  children: this.renderContent()
});
  }
}
class L extends a.Component {
  renderIcon() {
let {
  user: e
} = this.props;
return (0, r.jsx)('div', {
  className: I.iconContainer,
  children: (0, r.jsx)(i.Avatar, {
    src: e.getAvatarURL(void 0, 20),
    'aria-hidden': !0,
    size: i.AvatarSizes.SIZE_20
  })
});
  }
  getDisplayNickname() {
let e;
let {
  user: n,
  comparator: s
} = this.props, t = E.Z.getNickname(n.id);
return ((e = s === n.tag || null == s || '' === s ? n.username : s) === n.username || e === n.id) && (e = null != t ? t : m.ZP.getName(n)), e;
  }
  renderName() {
let e;
let {
  user: n,
  mentions: s
} = this.props, t = this.getDisplayNickname();
return null != s && s > 0 && (e = (0, r.jsx)(C.Z, {
  className: I.badge,
  value: s
})), (0, r.jsxs)('div', {
  className: I.name,
  children: [
    (0, r.jsx)('span', {
      className: I.match,
      children: t
    }),
    e,
    (0, r.jsx)('span', {
      className: I.username,
      children: m.ZP.getUserTag(n)
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
  className: null != n && n > 0 ? I.contentUnread : I.contentDefault,
  children: [
    this.renderIcon(),
    this.renderName(),
    (0, r.jsx)('div', {
      className: I.misc,
      children: e
    })
  ]
});
  }
  getAccessibilityLabel() {
let {
  mentions: e,
  user: n
} = this.props, s = this.getDisplayNickname(), t = m.ZP.getUserTag(n);
return null != e && e > 0 ? f.Z.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
  name: s,
  id: t,
  mentions: e
}) : f.Z.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
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
  focused: a,
  score: i,
  id: l
} = this.props;
return (0, r.jsx)(M, {
  id: l,
  'aria-label': this.getAccessibilityLabel(),
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: a,
  score: i,
  children: this.renderContent()
});
  }
}
class A extends a.Component {
  renderContent() {
let {
  children: e,
  application: n
} = this.props;
return (0, r.jsxs)('div', {
  className: I.contentDefault,
  children: [
    (0, r.jsx)('div', {
      className: I.iconContainer,
      children: (0, r.jsx)(N.Z, {
        tabIndex: -1,
        className: I.gameIcon,
        game: n,
        size: I.gameIconSize
      })
    }),
    n.name,
    (0, r.jsx)('div', {
      className: I.misc,
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
  id: a
} = this.props;
return (0, r.jsx)(M, {
  id: a,
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  focused: t,
  children: this.renderContent()
});
  }
}
class T extends a.Component {
  render() {
return (0, r.jsx)('div', {
  className: I.__invalid_resultDefault,
  children: (0, r.jsx)('div', {
    className: I.contentDefault,
    children: (0, r.jsx)('div', {
      className: I.header,
      children: this.props.children
    })
  })
});
  }
}
class R extends a.Component {
  renderContent() {
let e, n;
let {
  link: s,
  children: t
} = this.props, a = (0, u.Qj)(s.path);
return null == a || void 0 === a.messageId ? (e = f.Z.Messages.QUICKSWITCHER_LINK_UNKNOWN, n = (0, r.jsx)(i.LinkIcon, {
  size: 'xs',
  color: 'currentColor'
})) : (0, u.VO)(a) ? (e = f.Z.Messages.QUICKSWITCHER_LINK_MESSAGE, n = (0, r.jsx)(i.ChatArrowRightIcon, {
  size: 'xs',
  color: 'currentColor'
})) : (e = f.Z.Messages.QUICKSWITCHER_LINK_NO_ACCESS, n = (0, r.jsx)(i.LockIcon, {
  size: 'xs',
  color: 'currentColor'
})), (0, r.jsxs)('div', {
  className: I.contentDefault,
  children: [
    (0, r.jsx)('div', {
      className: I.iconContainer,
      children: n
    }),
    e,
    (0, r.jsx)('div', {
      className: I.misc,
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
  focused: a,
  score: i,
  id: l
} = this.props;
return (0, r.jsx)(M, {
  id: l,
  onMouseEnter: e,
  onClick: n,
  onFocus: s,
  onContextMenu: t,
  focused: a,
  score: i,
  children: this.renderContent()
});
  }
}