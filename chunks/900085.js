n.d(t, {
  Z: function() {
return F;
  }
}), n(411104), n(47120);
var i, l = n(735250),
  r = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(873546),
  c = n(442837),
  u = n(481060),
  d = n(239091),
  h = n(134616),
  p = n(714338),
  _ = n(212819),
  f = n(14429),
  m = n(592125),
  g = n(888369),
  C = n(430824),
  I = n(306680),
  E = n(944486),
  N = n(938475),
  x = n(387204),
  S = n(107828),
  v = n(153124),
  Z = n(585483),
  T = n(63063),
  L = n(51596),
  A = n(823385),
  b = n(670512),
  M = n(981631),
  R = n(689938),
  O = n(175057);

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let P = 10,
  j = () => (0, l.jsxs)('div', {
className: O.emptyState,
children: [
  (0, l.jsx)('div', {
    className: O.emptyStateNote,
    children: R.Z.Messages.QUICKSWITCHER_EMPTY_TEXT
  }),
  (0, l.jsx)('div', {
    className: O.emptyStateCTA,
    children: (0, l.jsx)(u.Anchor, {
      href: T.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL),
      children: R.Z.Messages.QUICKSWITCHER_EMPTY_CTA
    })
  })
]
  });
class D extends(i = r.Component) {
  render() {
let e = C.Z.getGuild(this.props.channel.guild_id);
return (0, l.jsx)(S.$W, {
  ...this.props,
  children: (0, l.jsx)('div', {
    className: O.miscContainer,
    children: null != e ? e.name : null
  })
});
  }
}
y(D, 'defaultProps', {
  unread: !1
});
let U = c.ZP.connectStores([
I.ZP,
m.Z
  ], e => {
let {
  channel: t
} = e;
return {
  unread: I.ZP.hasUnread(t.id),
  mentions: I.ZP.getMentionCount(t.id),
  category: m.Z.getChannel(t.parent_id)
};
  })(D),
  w = c.ZP.connectStores([N.ZP], e => {
let {
  channel: t
} = e;
if (null == t.guild_id)
  throw Error('ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...');
return {
  voiceStates: N.ZP.getVoiceStates(t.guild_id)[t.id]
};
  })(D),
  G = c.ZP.connectStores([g.default], e => {
let {
  guild: t
} = e;
return {
  unread: g.default.hasUnread(t.id)
};
  })(S.ic),
  k = c.ZP.connectStores([I.ZP], e => {
let {
  channel: t
} = e;
return {
  mentions: I.ZP.getMentionCount(t.id)
};
  })(S.PZ),
  B = c.ZP.connectStores([
m.Z,
I.ZP
  ], e => {
let {
  user: t
} = e, n = m.Z.getDMFromUserId(t.id);
return {
  mentions: null != n ? I.ZP.getMentionCount(n) : 0
};
  })(S.n5);

function V(e, t, n) {
  return (0, l.jsx)(u.Tooltip, {
text: n,
children: e => (0, l.jsx)('span', {
  ...e,
  className: O.autocompleteQuerySymbol,
  children: t
})
  }, e);
}
class H extends r.PureComponent {
  componentDidMount() {
p.Z.disable(), p.Z.enableTemp(h.u);
  }
  componentWillUnmount() {
p.Z.disableTemp(), p.Z.enable();
  }
  componentDidUpdate(e, t) {
let {
  mouseFocusDisabled: n,
  query: i
} = this.state, {
  selectedIndex: l
} = this.props, {
  current: r
} = this.scrollerRef;
if (null != r)
  i !== t.query ? r.scrollTo({
    to: 0
  }) : n && l >= 0 && r.scrollToIndex({
    section: 0,
    row: l,
    padding: 10
  });
  }
  close() {
(0, L.Cp)();
  }
  search(e) {
this.setState({
  query: e
}), (0, L.yC)(e);
  }
  renderInput() {
let {
  selectedIndex: e,
  results: t
} = this.props, {
  query: n
} = this.state, i = t.length > 0 && '' !== n;
return (0, l.jsx)(u.FocusRing, {
  children: (0, l.jsx)('input', {
    className: O.input,
    'aria-label': R.Z.Messages.QUICK_SWITCHER,
    ref: this.inputRef,
    type: 'text',
    role: 'combobox',
    'aria-controls': this._listId,
    'aria-expanded': i,
    'aria-activedescendant': i ? this.getRowId(e) : void 0,
    'aria-autocomplete': 'list',
    placeholder: R.Z.Messages.QUICKSWITCHER_PLACEHOLDER,
    onChange: this.handleInputChange,
    onKeyDown: this.handleKeyDown,
    value: this.state.query,
    spellCheck: !1,
    autoFocus: !0
  })
});
  }
  renderSection() {
return null;
  }
  renderResults() {
let {
  query: e
} = this.state, {
  results: t
} = this.props;
return 0 === t.length && e.length > 0 ? (0, l.jsx)(j, {}) : 0 === t.length ? null : (0, l.jsx)(u.ListAuto, {
  innerId: this._listId,
  innerRole: 'listbox',
  'aria-label': R.Z.Messages.QUICK_SWITCHER_RESULTS_LABEL,
  ref: this.scrollerRef,
  sectionHeight: 0,
  rowHeight: 34,
  paddingBottom: P,
  sections: [t.length],
  className: O.scroller,
  renderRow: this.renderRow,
  renderSection: this.renderSection
});
  }
  focusNode(e) {
Z.S.dispatch(M.CkL.QUICKSWITCHER_RESULT_FOCUS, {
  node: e
});
  }
  getRowId(e) {
return 'quick-switcher-'.concat(this._listId, '-item-').concat(e);
  }
  renderProtip() {
return (0, l.jsx)(x.Z, {
  className: s()(O.protip, {
    [O.hasContent]: this.state.query.length > 0
  }),
  type: x.Z.Types.INLINE,
  children: R.Z.Messages.QUICKSWITCHER_PROTIP.format({
    userSymbolHook: (e, t) => V(t, _.xQ.USER, R.Z.Messages.QUICKSWITCHER_PROTIP_USERNAMES),
    textChannelSymbolHook: (e, t) => V(t, _.xQ.TEXT_CHANNEL, R.Z.Messages.QUICKSWITCHER_PROTIP_TEXT_CHANNELS),
    voiceChannelSymbolHook: (e, t) => V(t, _.xQ.VOICE_CHANNEL, R.Z.Messages.QUICKSWITCHER_PROTIP_VOICE_CHANNELS),
    guildSymbolHook: (e, t) => V(t, _.xQ.GUILD, R.Z.Messages.QUICKSWITCHER_PROTIP_GUILDS),
    helpdeskArticle: T.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL)
  })
});
  }
  renderTutorial() {
let {
  query: e
} = this.state, {
  seenTutorial: t,
  results: n
} = this.props;
return t ? null : (0, l.jsx)(b.Z, {
  hasQuery: e.length > 0 && n.length > 0
});
  }
  render() {
return (0, l.jsx)(u.ModalRoot, {
  'aria-label': R.Z.Messages.QUICK_SWITCHER,
  size: u.ModalSize.DYNAMIC,
  transitionState: this.props.transitionState,
  className: s()(O.container, o.tq && O.mobileContainer),
  fullscreenOnMobile: !1,
  children: (0, l.jsxs)('div', {
    className: s()(O.quickswitcher, o.tq && O.mobileQuickswitcher),
    onMouseMove: this.handleMouseMove,
    children: [
      this.renderInput(),
      this.renderResults(),
      this.renderProtip(),
      this.renderTutorial()
    ]
  })
});
  }
  constructor(...e) {
super(...e), y(this, 'scrollerRef', r.createRef()), y(this, 'inputRef', r.createRef()), y(this, '_listId', (0, v.hQ)()), y(this, 'state', {
  query: this.props.query,
  mouseFocusDisabled: !0
}), y(this, 'handleInputChange', () => {
  let {
    current: e
  } = this.inputRef;
  null != e && this.search(e.value);
}), y(this, 'handleMouseMove', () => {
  let {
    mouseFocusDisabled: e
  } = this.state;
  if (!1 !== e)
    this.setState({
      mouseFocusDisabled: !1
    });
}), y(this, 'focusResult', e => {
  if (!this.state.mouseFocusDisabled)
    (0, L.tF)(this.props.results.indexOf(e));
}), y(this, 'selectResult', e => {
  (0, L.Se)(e, this.props.queryMode === _.h8.TEXT_CHANNEL);
}), y(this, 'handleContextMenu', e => {
  let t = this.props.results[this.props.selectedIndex];
  switch (t.type) {
    case _.h8.GUILD:
      return (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([
          n.e('96427'),
          n.e('33053'),
          n.e('50654'),
          n.e('7654'),
          n.e('73331'),
          n.e('44156'),
          n.e('71700'),
          n.e('85552'),
          n.e('58227'),
          n.e('10926'),
          n.e('55400'),
          n.e('33213'),
          n.e('61297')
        ]).then(n.bind(n, 545135));
        return n => (0, l.jsx)(e, {
          ...n,
          guild: t.record,
          onSelect: L.Cp,
          hideSettings: !0
        });
      });
    case _.h8.TEXT_CHANNEL:
    case _.h8.VOICE_CHANNEL:
      let i = t.record,
        r = C.Z.getGuild(i.getGuildId());
      if (null == r)
        return;
      switch (i.type) {
        case M.d4z.GUILD_TEXT:
        case M.d4z.GUILD_ANNOUNCEMENT:
        case M.d4z.GUILD_FORUM:
        case M.d4z.GUILD_MEDIA:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([
              n.e('79695'),
              n.e('18320'),
              n.e('54310')
            ]).then(n.bind(n, 373651));
            return t => (0, l.jsx)(e, {
              ...t,
              channel: i,
              guild: r,
              onSelect: L.Cp
            });
          });
        case M.d4z.GUILD_VOICE:
        case M.d4z.GUILD_STAGE_VOICE:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([
              n.e('79695'),
              n.e('18320'),
              n.e('83331')
            ]).then(n.bind(n, 213202));
            return t => (0, l.jsx)(e, {
              ...t,
              channel: i,
              guild: r,
              onSelect: L.Cp
            });
          });
        case M.d4z.ANNOUNCEMENT_THREAD:
        case M.d4z.PUBLIC_THREAD:
        case M.d4z.PRIVATE_THREAD:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await n.e('40157').then(n.bind(n, 422200));
            return t => (0, l.jsx)(e, {
              ...t,
              channel: i,
              onSelect: L.Cp
            });
          });
        case M.d4z.GUILD_STORE:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await n.e('99905').then(n.bind(n, 649400));
            return t => (0, l.jsx)(e, {
              ...t,
              channel: i,
              guild: r,
              onSelect: L.Cp
            });
          });
        case M.d4z.GUILD_DIRECTORY:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await n.e('70623').then(n.bind(n, 99334));
            return t => (0, l.jsx)(e, {
              ...t,
              channel: i
            });
          });
      }
      break;
    case _.h8.GROUP_DM:
      return (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([
          n.e('79695'),
          n.e('25421')
        ]).then(n.bind(n, 354741));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t.record,
          selected: E.Z.getChannelId() === t.record.id,
          onSelect: L.Cp
        });
      });
    case _.h8.USER:
      return (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([
          n.e('79695'),
          n.e('17400'),
          n.e('13806')
        ]).then(n.bind(n, 881351));
        return n => (0, l.jsx)(e, {
          ...n,
          user: t.record,
          onSelect: L.Cp
        });
      });
  }
}), y(this, 'handleKeyDown', e => {
  let {
    mouseFocusDisabled: t,
    query: n
  } = this.state, {
    results: i
  } = this.props;
  !1 === t && this.setState({
    mouseFocusDisabled: !0
  });
  let l = e.key.toLowerCase(),
    {
      selectedIndex: r
    } = this.props;
  switch (l) {
    case 'escape':
      e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search('') : (0, L.Cp)();
      return;
    case 'k':
      (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, L.Cp)());
      return;
    case 'enter': {
      if (-1 === r)
        return;
      if (e.preventDefault(), e.altKey)
        return this.handleContextMenu(e);
      let t = i[r];
      null != t && this.selectResult(t);
      return;
    }
    case 'arrowup':
      r = (0, _.gJ)(_.a8.UP, r, i);
      break;
    case 'arrowdown':
      r = (0, _.gJ)(_.a8.DOWN, r, i);
      break;
    case 'n':
      if (!e.ctrlKey)
        return;
      r = (0, _.gJ)(_.a8.DOWN, r, i);
      break;
    case 'p':
      if (!e.ctrlKey)
        return;
      r = (0, _.gJ)(_.a8.UP, r, i);
      break;
    default:
      return;
  }
  e.preventDefault(), (0, L.tF)(r);
}), y(this, 'renderRow', e => {
  let {
    row: t
  } = e, n = this.props.results[t], {
    selectedIndex: i
  } = this.props, {
    showScores: r
  } = f.Z.getCurrentConfig({
    location: '62f4be_1'
  }, {
    autoTrackExposure: !1
  });
  switch (n.type) {
    case _.h8.HEADER:
      return (0, l.jsx)(S.h4, {
        children: n.record.text
      }, ''.concat(n.type, '-').concat(n.record.id));
    case _.h8.TEXT_CHANNEL:
      return (0, l.jsx)(U, {
        id: this.getRowId(t),
        focused: i >= 0 && t === i,
        onClick: () => this.selectResult(n),
        onMouseEnter: () => this.focusResult(n),
        onFocus: this.focusNode,
        onContextMenu: this.handleContextMenu,
        channel: n.record,
        score: r ? n.score : void 0
      }, ''.concat(n.type, '-').concat(n.record.id));
    case _.h8.VOICE_CHANNEL:
      return (0, l.jsx)(w, {
        id: this.getRowId(t),
        focused: i >= 0 && t === i,
        onClick: () => this.selectResult(n),
        onMouseEnter: () => this.focusResult(n),
        onFocus: this.focusNode,
        onContextMenu: this.handleContextMenu,
        channel: n.record,
        score: r ? n.score : void 0
      }, ''.concat(n.type, '-').concat(n.record.id));
    case _.h8.GUILD:
      return (0, l.jsx)(G, {
        id: this.getRowId(t),
        focused: i >= 0 && t === i,
        onClick: () => this.selectResult(n),
        onMouseEnter: () => this.focusResult(n),
        onFocus: this.focusNode,
        onContextMenu: this.handleContextMenu,
        guild: n.record,
        score: r ? n.score : void 0
      }, ''.concat(n.type, '-').concat(n.record.id));
    case _.h8.USER:
      return (0, l.jsx)(B, {
        id: this.getRowId(t),
        focused: i >= 0 && t === i,
        onClick: () => this.selectResult(n),
        onMouseEnter: () => this.focusResult(n),
        onFocus: this.focusNode,
        onContextMenu: this.handleContextMenu,
        user: n.record,
        comparator: n.comparator,
        score: r ? n.score : void 0
      }, ''.concat(n.type, '-').concat(n.record.id));
    case _.h8.GROUP_DM:
      return (0, l.jsx)(k, {
        id: this.getRowId(t),
        focused: i >= 0 && t === i,
        onClick: () => this.selectResult(n),
        onMouseEnter: () => this.focusResult(n),
        onFocus: this.focusNode,
        onContextMenu: this.handleContextMenu,
        channel: n.record,
        score: r ? n.score : void 0
      }, ''.concat(n.type, '-').concat(n.record.id));
    case _.h8.APPLICATION:
      return (0, l.jsx)(S.Mx, {
        id: this.getRowId(t),
        focused: i >= 0 && t === i,
        onClick: () => this.selectResult(n),
        onMouseEnter: () => this.focusResult(n),
        onFocus: this.focusNode,
        application: n.record
      }, ''.concat(n.type, '-').concat(n.record.id));
    case _.h8.LINK:
      return (0, l.jsx)(S.rU, {
        focused: i >= 0 && t === i,
        onClick: () => this.selectResult(n),
        onMouseEnter: () => this.focusResult(n),
        onFocus: this.focusNode,
        onContextMenu: this.handleContextMenu,
        link: n.record,
        score: r ? n.score : void 0,
        id: this.getRowId(t)
      }, ''.concat(n.type, '-').concat(n.record.id));
    default:
      return null;
  }
});
  }
}

function F(e) {
  let t = (0, c.cj)([A.Z], () => A.Z.getProps());
  return (0, l.jsx)(H, {
...t,
...e
  });
}