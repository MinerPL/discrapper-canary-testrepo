n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(699581),
  o = n(91192),
  c = n(374470),
  d = n(442837),
  u = n(481060),
  _ = n(480137),
  I = n(239091),
  E = n(497321),
  T = n(724757),
  m = n(210887),
  N = n(387667),
  S = n(598077),
  h = n(592125),
  g = n(430824),
  C = n(246946),
  x = n(594174),
  p = n(274730),
  R = n(823379),
  f = n(51144),
  L = n(987707),
  O = n(999382),
  A = n(501801),
  M = n(603784),
  D = n(981631),
  v = n(689938),
  j = n(911025),
  Z = n(326617),
  b = n(256507);

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class G extends a.PureComponent {
  render() {
let {
  onHeaderClick: e,
  guildId: t,
  guild: n,
  ...a
} = this.props;
return null == t ? null : (0, s.jsx)(M.Z, {
  ...a,
  guildId: t,
  guild: n,
  onHeaderClick: this.handleHeaderClick,
  onUserContextMenu: this.handleUserContextMenu,
  onChannelContextMenu: this.handleChannelContextMenu,
  onTargetContextMenu: this.handleTargetContextMenu
});
  }
  constructor(...e) {
super(...e), U(this, 'handleHeaderClick', () => {
  let {
    onHeaderClick: e,
    log: t
  } = this.props;
  null == e || e(t);
}), U(this, 'handleUserContextMenu', e => {
  let {
    log: t,
    guildId: a
  } = this.props, {
    user: i
  } = t;
  null != i && null != a && (0, I.jW)(e, async () => {
    let {
      default: e
    } = await n.e('50929').then(n.bind(n, 595011));
    return t => (0, s.jsx)(e, {
      ...t,
      guildId: a,
      user: i
    });
  });
}), U(this, 'handleChannelContextMenu', e => {
  let {
    log: t,
    guildId: a
  } = this.props, i = g.Z.getGuild(a);
  null != t.options.channel && 'string' != typeof t.options.channel && null != i && (0, I.jW)(e, async () => {
    let {
      default: e
    } = await n.e('51529').then(n.bind(n, 228620));
    return n => (0, s.jsx)(e, {
      ...n,
      channel: t.options.channel
    });
  });
}), U(this, 'handleTargetContextMenu', e => {
  let {
    log: t,
    guildId: a
  } = this.props;
  switch (t.targetType) {
    case D.KFR.CHANNEL:
    case D.KFR.CHANNEL_OVERWRITE:
      let i = h.Z.getChannel(t.targetId),
        r = g.Z.getGuild(a);
      if (null != i && null != r)
        return (0, I.jW)(e, async () => {
          let {
            default: e
          } = await n.e('51529').then(n.bind(n, 228620));
          return t => (0, s.jsx)(e, {
            ...t,
            channel: i
          });
        });
      return (0, I.jW)(e, async () => {
        let {
          default: e
        } = await n.e('5396').then(n.bind(n, 731646));
        return n => (0, s.jsx)(e, {
          ...n,
          id: t.targetId,
          label: v.Z.Messages.COPY_ID_UNKNOWN
        });
      });
    case D.KFR.USER:
      let l = x.default.getUser(t.targetId);
      if (null != l && null != a)
        return (0, I.jW)(e, async () => {
          let {
            default: e
          } = await n.e('50929').then(n.bind(n, 595011));
          return t => (0, s.jsx)(e, {
            ...t,
            guildId: a,
            user: l
          });
        });
  }
  return null;
});
  }
}

function P(e) {
  let {
logs: t,
guildId: n,
guild: i,
expandedId: r,
lastExpandedId: l,
scroller: c,
setExpandedRef: d,
setLastExpandedRef: u,
onHeaderClick: _,
onContentClick: I
  } = e, E = a.useRef(c);
  a.useEffect(() => {
E.current = c;
  }, [c]);
  let m = (0, T.Z)('audit-log', E);
  return (0, s.jsx)(o.bG, {
navigator: m,
children: (0, s.jsx)(o.SJ, {
  children: e => {
    let {
      ref: a,
      ...o
    } = e;
    return (0, s.jsx)('div', {
      ref: a,
      ...o,
      children: t.map(e => {
        let t = r === e.id,
          a = l === e.id;
        return (0, s.jsx)(G, {
          guildId: n,
          guild: i,
          ref: t ? d : a ? u : null,
          className: j.row,
          onHeaderClick: _,
          onContentClick: I,
          log: e,
          expanded: t
        }, e.id);
      })
    });
  }
})
  });
}
class B extends a.PureComponent {
  componentDidMount() {
(0, _.bY)(this.props.guildId), document.addEventListener('click', this.handleOutsideClick);
  }
  componentWillUnmount() {
document.removeEventListener('click', this.handleOutsideClick);
  }
  componentDidUpdate(e, t) {
this.state.expandedId !== t.expandedId && this.fixScroll(), !this.props.showLoadMore && this.props.logs.length !== e.logs.length && null != this._scrollerRef && this.isScrollerAtBottom() && (0, _.OY)(this.props.guildId, !0);
  }
  isScrollerAtBottom() {
var e;
return (null === (e = this._scrollerRef) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1;
  }
  fixScroll() {
let e = this._scrollerRef;
if (null == e)
  return;
let t = this.getRects(),
  n = this._prevRects;
if (null == t.expanded || null == t.lastExpanded || null == n.expanded || t.expanded.top < t.lastExpanded.top)
  return;
let s = n.expanded.height - t.lastExpanded.height,
  a = e.getScrollerState().scrollTop - s;
e.scrollTo({
  to: a
});
  }
  getRects() {
let e = {
  lastExpanded: null,
  expanded: null
};
if (null != this._lastExpandedRef) {
  let t = l.findDOMNode(this._lastExpandedRef);
  (0, c.k)(t) && (e.lastExpanded = t.getBoundingClientRect());
}
if (null != this._expandedRef) {
  let t = l.findDOMNode(this._expandedRef);
  (0, c.k)(t) && (e.expanded = t.getBoundingClientRect());
}
return e;
  }
  renderUserQuickSelectValue(e) {
var t;
return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label;
  }
  renderActionQuickSelectValue(e) {
var t;
return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label;
  }
  renderHeader() {
return (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsxs)('div', {
      className: j.customHeader,
      children: [
        (0, s.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H1,
          className: j.formTitle,
          children: v.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG
        }),
        this.renderHeaderDropdowns()
      ]
    }),
    (0, s.jsx)(u.FormDivider, {
      className: j.divider
    })
  ]
});
  }
  renderSpinner() {
return (0, s.jsx)(u.Spinner, {
  type: u.Spinner.Type.SPINNING_CIRCLE
});
  }
  renderContent() {
let {
  expandedId: e,
  lastExpandedId: t
} = this.state, {
  logs: a,
  theme: i,
  hide: r,
  isInitialLoading: l,
  isLoading: o,
  hasError: c,
  guildId: d,
  guild: _
} = this.props;
if (r)
  return (0, s.jsx)(E.Z, {});
if (o || l)
  return this.renderSpinner();
if (0 === a.length) {
  let e = c ? v.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_BODY : v.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_BODY,
    t = c ? v.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_TITLE : v.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_TITLE;
  return (0, s.jsxs)(u.EmptyState, {
    theme: i,
    className: j.empty,
    children: [
      (0, s.jsx)(u.EmptyStateImage, {
        darkSrc: n(28269),
        lightSrc: n(357115),
        width: 272,
        height: 130
      }),
      (0, s.jsx)(u.EmptyStateText, {
        note: e,
        style: {
          maxWidth: 300
        },
        children: t
      })
    ]
  });
}
return (0, s.jsx)(P, {
  logs: a,
  guildId: d,
  guild: _,
  expandedId: e,
  lastExpandedId: t,
  setExpandedRef: this.handleSetExpandedRef,
  setLastExpandedRef: this.handleSetLastExpandedRef,
  onHeaderClick: this.handleHeaderClick,
  onContentClick: this.handleContentClick,
  scroller: this._scrollerRef
});
  }
  render() {
let {
  isLoadingNextPage: e,
  hide: t,
  isLoading: n
} = this.props;
return (0, s.jsx)('div', {
  className: Z.customColumn,
  children: (0, s.jsx)('div', {
    className: Z.customContainer,
    children: (0, s.jsx)(u.AdvancedScrollerAuto, {
      className: r()(Z.customScroller, j.scroller),
      onScroll: this.handleOnScroll,
      ref: this.handleSetScrollerRef,
      children: (0, s.jsx)('div', {
        className: j.content,
        ref: this._contentRef,
        children: (0, s.jsxs)(u.FocusRingScope, {
          containerRef: this._contentRef,
          children: [
            this.renderHeader(),
            this.renderContent(),
            this.renderLoadMore(),
            !e || t || n ? null : this.renderSpinner()
          ]
        })
      })
    })
  })
});
  }
  constructor(...e) {
super(...e), U(this, '_clickedInside', !1), U(this, '_scrollerRef', null), U(this, '_expandedRef', void 0), U(this, '_lastExpandedRef', void 0), U(this, '_prevRects', this.getRects()), U(this, '_contentRef', a.createRef()), U(this, 'state', {
  expandedId: null,
  lastExpandedId: null,
  actionFilterQuery: ''
}), U(this, 'renderActionQuickSelectItem', (e, t) => {
  var n;
  let {
    actionFilter: a
  } = this.props, i = (0, N.Pw)(e.value), r = (0, N.p5)(e.value), l = e.value === a;
  return (0, s.jsxs)(u.ComboboxItem, {
    value: e.value,
    selectedColor: u.ComboboxItem.Colors.BRAND,
    children: [
      (0, s.jsx)(u.ComboboxItem.Icon, {
        children: (0, s.jsx)(A.mp, {
          themeOverride: l ? D.BRd.DARK : null,
          actionType: i,
          targetType: r,
          action: e.value
        })
      }),
      (0, s.jsx)(u.ComboboxItem.Label, {
        children: e.label
      }),
      (0, s.jsx)(u.ComboboxItem.Checkmark, {})
    ]
  }, null !== (n = e.key) && void 0 !== n ? n : t);
}), U(this, 'renderUserQuickSelectItem', (e, t) => {
  var n;
  if (e.user instanceof S.Z) {
    let t = e.user;
    return (0, s.jsxs)(u.ComboboxItem, {
      value: t.id,
      selectedColor: u.ComboboxItem.Colors.BRAND,
      children: [
        (0, s.jsx)(u.ComboboxItem.Icon, {
          children: (0, s.jsx)(u.Avatar, {
            size: u.AvatarSizes.SIZE_32,
            src: t.getAvatarURL(this.props.guildId, 32),
            'aria-label': t.username,
            className: j.avatar
          })
        }),
        (0, s.jsxs)(u.ComboboxItem.Label, {
          children: [
            (0, s.jsx)(u.Text, {
              variant: 'text-sm/normal',
              children: f.ZP.getUserTag(t, {
                mode: 'username'
              })
            }),
            !t.isPomelo() && (0, s.jsxs)(u.Text, {
              variant: 'text-xs/normal',
              className: j.discriminator,
              children: [
                '#',
                t.discriminator
              ]
            })
          ]
        }),
        (0, s.jsx)(u.ComboboxItem.Checkmark, {})
      ]
    }, t.id);
  }
  return (0, s.jsxs)(u.ComboboxItem, {
    value: e.value,
    selectedColor: u.ComboboxItem.Colors.BRAND,
    children: [
      (0, s.jsx)(u.ComboboxItem.Icon, {
        children: (0, s.jsx)(u.GroupIcon, {
          size: 'custom',
          color: 'currentColor',
          width: 30,
          height: 30
        })
      }),
      (0, s.jsx)(u.ComboboxItem.Label, {
        children: e.label
      }),
      (0, s.jsx)(u.ComboboxItem.Checkmark, {})
    ]
  }, null !== (n = e.key) && void 0 !== n ? n : t);
}), U(this, 'renderHeaderDropdowns', () => {
  var e, t;
  let {
    actionFilter: n,
    hide: a,
    userIdFilter: i,
    moderators: l
  } = this.props;
  if (a)
    return null;
  let o = p.Iv(),
    c = null !== (e = o.find(e => {
      let {
        value: t
      } = e;
      return n === t;
    })) && void 0 !== e ? e : o[0],
    d = {
      label: v.Z.Messages.GUILD_SETTINGS_FILTER_ALL_USERS,
      valueLabel: v.Z.Messages.GUILD_SETTINGS_FILTER_ALL,
      value: null
    },
    _ = [
      d,
      ...l
    ].map(e => {
      var t;
      if (!(e instanceof S.Z))
        return e;
      return {
        label: (t = e).username,
        value: t.id,
        user: t
      };
    }),
    I = null !== (t = _.find(e => {
      let {
        value: t
      } = e;
      return t === i;
    })) && void 0 !== t ? t : d;
  return (0, s.jsxs)('div', {
    className: j.quickSelect,
    children: [
      (0, s.jsx)(u.SearchableQuickSelect, {
        popoutClassName: r()(j.selectFilterPopout, b.elevationBorderHigh),
        items: _,
        renderItem: this.renderUserQuickSelectItem,
        renderValue: this.renderUserQuickSelectValue,
        value: I,
        onChange: this.handleFilterUserChange,
        label: v.Z.Messages.GUILD_SETTINGS_FILTER_USER,
        placeholder: v.Z.Messages.SEARCH_MEMBERS,
        popoutProps: {
          autoInvert: !1,
          position: 'bottom'
        }
      }),
      (0, s.jsx)(u.SearchableQuickSelect, {
        placeholder: v.Z.Messages.SEARCH_ACTIONS,
        label: v.Z.Messages.GUILD_SETTINGS_FILTER_ACTION,
        popoutClassName: r()(j.selectFilterPopout, b.elevationBorderLow),
        items: o,
        renderItem: this.renderActionQuickSelectItem,
        renderValue: this.renderActionQuickSelectValue,
        value: c,
        onChange: this.handleFilterActionChange,
        popoutProps: {
          autoInvert: !1,
          position: 'bottom'
        }
      })
    ]
  });
}), U(this, 'renderLoadMore', () => {
  let {
    showLoadMore: e,
    hasOlderLogs: t,
    hide: n
  } = this.props;
  if (e && t && !n)
    return (0, s.jsx)(u.Button, {
      color: u.Button.Colors.PRIMARY,
      className: j.loadMore,
      onClick: this.handleFetchNextPage,
      children: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_LOAD_MORE
    });
}), U(this, 'handleFilterActionChange', e => {
  (0, _.ZX)(e, this.props.guildId);
}), U(this, 'handleFilterUserChange', e => {
  (0, _.uo)(e, this.props.guildId);
}), U(this, 'handleHeaderClick', e => {
  let {
    expandedId: t
  } = this.state;
  t !== e.id ? (this._clickedInside = !0, this.setState({
    expandedId: e.id,
    lastExpandedId: t
  }), this._prevRects = this.getRects()) : (this._expandedRef = null, this._lastExpandedRef = null, null != t && (this._prevRects = this.getRects()), this.setState({
    expandedId: null,
    lastExpandedId: null
  }));
}), U(this, 'handleOutsideClick', () => {
  null == this.state.expandedId || this._clickedInside ? null != this.state.expandedId && (this._clickedInside = !1) : (this._expandedRef = null, this._lastExpandedRef = null, this.setState({
    expandedId: null,
    lastExpandedId: null
  }), this._prevRects = this.getRects());
}), U(this, 'handleContentClick', e => {
  this._clickedInside = !0, e.stopPropagation();
}), U(this, 'handleSetScrollerRef', e => {
  this._scrollerRef = e;
}), U(this, 'handleOnScroll', () => {
  this.isScrollerAtBottom() && this.handleFetchNextPage();
}), U(this, 'handleFetchNextPage', () => {
  (0, _.OY)(this.props.guildId);
}), U(this, 'handleActionFilterQueryChange', e => {
  this.setState({
    actionFilterQuery: e
  });
}), U(this, 'handleActionFilterQueryClear', () => {
  this.setState({
    actionFilterQuery: ''
  });
}), U(this, 'handleSetExpandedRef', e => {
  this._expandedRef = e;
}), U(this, 'handleSetLastExpandedRef', e => {
  this._lastExpandedRef = e;
});
  }
}
t.Z = d.ZP.connectStores([
  L.Z,
  O.Z,
  g.Z,
  m.Z,
  C.Z,
  x.default
], () => {
  let e = O.Z.getGuildId(),
t = g.Z.getGuild(e),
n = L.Z.logs;
  return {
guildId: e,
guild: t,
moderators: L.Z.userIds.map(e => x.default.getUser(e)).filter(R.lm),
isInitialLoading: L.Z.isInitialLoading,
isLoading: L.Z.isLoading,
isLoadingNextPage: L.Z.isLoadingNextPage,
showLoadMore: L.Z.groupedFetchCount > 2,
hasError: L.Z.hasError,
hasOlderLogs: L.Z.hasOlderLogs,
logs: null != n && null != t ? p._$(n, t) : [],
actionFilter: L.Z.actionFilter,
userIdFilter: L.Z.userIdFilter,
theme: m.Z.theme,
hide: C.Z.enabled
  };
})(B);