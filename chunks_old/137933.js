"use strict";
s.r(t), s.d(t, {
  default: function() {
    return w
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("817736"),
  o = s.n(r),
  d = s("974667"),
  u = s("118810"),
  c = s("446674"),
  E = s("77078"),
  _ = s("252073"),
  I = s("272030"),
  T = s("642950"),
  S = s("465395"),
  f = s("510889"),
  m = s("161778"),
  N = s("242020"),
  g = s("766274"),
  h = s("42203"),
  C = s("305961"),
  R = s("102985"),
  x = s("697218"),
  L = s("941886"),
  O = s("155207"),
  A = s("987663"),
  p = s("449008"),
  M = s("158998"),
  D = s("287103"),
  v = s("900938"),
  G = s("817343"),
  j = s("347584"),
  U = s("49111"),
  P = s("782340"),
  b = s("605611"),
  B = s("7691"),
  y = s("678016");
class F extends l.PureComponent {
  render() {
    let {
      onHeaderClick: e,
      guildId: t,
      guild: s,
      ...l
    } = this.props;
    return null == t ? null : (0, a.jsx)(j.default, {
      ...l,
      guildId: t,
      guild: s,
      onHeaderClick: this.handleHeaderClick,
      onUserContextMenu: this.handleUserContextMenu,
      onChannelContextMenu: this.handleChannelContextMenu,
      onTargetContextMenu: this.handleTargetContextMenu
    })
  }
  constructor(...e) {
    super(...e), this.handleHeaderClick = () => {
      let {
        onHeaderClick: e,
        log: t
      } = this.props;
      null == e || e(t)
    }, this.handleUserContextMenu = e => {
      let {
        log: t,
        guildId: l
      } = this.props, {
        user: n
      } = t;
      null != n && null != l && (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("471085").then(s.bind(s, "471085"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: l,
          user: n
        })
      })
    }, this.handleChannelContextMenu = e => {
      let {
        log: t,
        guildId: l
      } = this.props, n = C.default.getGuild(l);
      null != t.options.channel && null != n && (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("887127").then(s.bind(s, "887127"));
        return s => (0, a.jsx)(e, {
          ...s,
          channel: t.options.channel
        })
      })
    }, this.handleTargetContextMenu = e => {
      let {
        log: t,
        guildId: l
      } = this.props;
      switch (t.targetType) {
        case U.AuditLogTargetTypes.CHANNEL:
        case U.AuditLogTargetTypes.CHANNEL_OVERWRITE:
          let n = h.default.getChannel(t.targetId),
            i = C.default.getGuild(l);
          if (null != n && null != i) return (0, I.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await s.el("887127").then(s.bind(s, "887127"));
            return t => (0, a.jsx)(e, {
              ...t,
              channel: n
            })
          });
          return (0, I.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await s.el("443070").then(s.bind(s, "443070"));
            return s => (0, a.jsx)(e, {
              ...s,
              id: t.targetId,
              label: P.default.Messages.COPY_ID_UNKNOWN
            })
          });
        case U.AuditLogTargetTypes.USER:
          let r = x.default.getUser(t.targetId);
          if (null != r && null != l) return (0, I.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await s.el("471085").then(s.bind(s, "471085"));
            return t => (0, a.jsx)(e, {
              ...t,
              guildId: l,
              user: r
            })
          })
      }
      return null
    }
  }
}

function H(e) {
  let {
    logs: t,
    guildId: s,
    guild: n,
    expandedId: i,
    lastExpandedId: r,
    scroller: o,
    setExpandedRef: u,
    setLastExpandedRef: c,
    onHeaderClick: E,
    onContentClick: _
  } = e, I = l.useRef(o);
  l.useEffect(() => {
    I.current = o
  }, [o]);
  let T = (0, f.default)("audit-log", I);
  return (0, a.jsx)(d.ListNavigatorProvider, {
    navigator: T,
    children: (0, a.jsx)(d.ListNavigatorContainer, {
      children: e => {
        let {
          ref: l,
          ...o
        } = e;
        return (0, a.jsx)("div", {
          ref: l,
          ...o,
          children: t.map(e => {
            let t = i === e.id,
              l = r === e.id;
            return (0, a.jsx)(F, {
              guildId: s,
              guild: n,
              ref: t ? u : l ? c : null,
              className: b.row,
              onHeaderClick: E,
              onContentClick: _,
              log: e,
              expanded: t
            }, e.id)
          })
        })
      }
    })
  })
}
class k extends l.PureComponent {
  componentDidMount() {
    (0, _.fetchLogs)(this.props.guildId), document.addEventListener("click", this.handleOutsideClick)
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick)
  }
  componentDidUpdate(e, t) {
    this.state.expandedId !== t.expandedId && this.fixScroll(), !this.props.showLoadMore && this.props.logs.length !== e.logs.length && null != this._scrollerRef && this.isScrollerAtBottom() && (0, _.fetchNextLogPage)(this.props.guildId, !0)
  }
  isScrollerAtBottom() {
    var e;
    return (null === (e = this._scrollerRef) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1
  }
  fixScroll() {
    let e = this._scrollerRef;
    if (null == e) return;
    let t = this.getRects(),
      s = this._prevRects;
    if (null == t.expanded || null == t.lastExpanded || null == s.expanded || t.expanded.top < t.lastExpanded.top) return;
    let a = s.expanded.height - t.lastExpanded.height,
      l = e.getScrollerState(),
      n = l.scrollTop - a;
    e.scrollTo({
      to: n
    })
  }
  getRects() {
    let e = {
      lastExpanded: null,
      expanded: null
    };
    if (null != this._lastExpandedRef) {
      let t = o.findDOMNode(this._lastExpandedRef);
      (0, u.isElement)(t) && (e.lastExpanded = t.getBoundingClientRect())
    }
    if (null != this._expandedRef) {
      let t = o.findDOMNode(this._expandedRef);
      (0, u.isElement)(t) && (e.expanded = t.getBoundingClientRect())
    }
    return e
  }
  renderUserQuickSelectValue(e) {
    var t;
    return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label
  }
  renderActionQuickSelectValue(e) {
    var t;
    return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label
  }
  renderHeader() {
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: b.customHeader,
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H1,
          className: b.formTitle,
          children: P.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG
        }), this.renderHeaderDropdowns()]
      }), (0, a.jsx)(E.FormDivider, {
        className: b.divider
      })]
    })
  }
  renderSpinner() {
    return (0, a.jsx)(E.Spinner, {
      type: E.Spinner.Type.SPINNING_CIRCLE
    })
  }
  renderContent() {
    let {
      expandedId: e,
      lastExpandedId: t
    } = this.state, {
      logs: l,
      theme: n,
      hide: i,
      isInitialLoading: r,
      isLoading: o,
      hasError: d,
      guildId: u,
      guild: c
    } = this.props;
    if (i) return (0, a.jsx)(T.default, {});
    if (o || r) return this.renderSpinner();
    if (0 === l.length) {
      let e = d ? P.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_BODY : P.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_BODY,
        t = d ? P.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_TITLE : P.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_TITLE;
      return (0, a.jsxs)(L.default, {
        theme: n,
        className: b.empty,
        children: [(0, a.jsx)(L.EmptyStateImage, {
          darkSrc: s("935855"),
          lightSrc: s("847598"),
          width: 272,
          height: 130
        }), (0, a.jsx)(L.EmptyStateText, {
          note: e,
          style: {
            maxWidth: 300
          },
          children: t
        })]
      })
    }
    return (0, a.jsx)(H, {
      logs: l,
      guildId: u,
      guild: c,
      expandedId: e,
      lastExpandedId: t,
      setExpandedRef: this.handleSetExpandedRef,
      setLastExpandedRef: this.handleSetLastExpandedRef,
      onHeaderClick: this.handleHeaderClick,
      onContentClick: this.handleContentClick,
      scroller: this._scrollerRef
    })
  }
  render() {
    let {
      isLoadingNextPage: e,
      hide: t,
      isLoading: s
    } = this.props;
    return (0, a.jsx)("div", {
      className: B.customColumn,
      children: (0, a.jsx)("div", {
        className: B.customContainer,
        children: (0, a.jsx)(E.AdvancedScrollerAuto, {
          className: i(B.customScroller, b.scroller),
          onScroll: this.handleOnScroll,
          ref: this.handleSetScrollerRef,
          children: (0, a.jsx)("div", {
            className: b.content,
            ref: this._contentRef,
            children: (0, a.jsxs)(E.FocusRingScope, {
              containerRef: this._contentRef,
              children: [this.renderHeader(), this.renderContent(), this.renderLoadMore(), !e || t || s ? null : this.renderSpinner()]
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this._clickedInside = !1, this._scrollerRef = null, this._prevRects = this.getRects(), this._contentRef = l.createRef(), this.state = {
      expandedId: null,
      lastExpandedId: null,
      actionFilterQuery: ""
    }, this.renderActionQuickSelectItem = (e, t) => {
      var s;
      let {
        actionFilter: l
      } = this.props, n = (0, N.getActionType)(e.value), i = (0, N.getTargetType)(e.value), r = e.value === l;
      return (0, a.jsxs)(E.ComboboxItem, {
        value: e.value,
        selectedColor: E.ComboboxItem.Colors.BRAND,
        children: [(0, a.jsx)(E.ComboboxItem.Icon, {
          children: (0, a.jsx)(G.AuditLogIcon, {
            themeOverride: r ? U.ThemeTypes.DARK : null,
            actionType: n,
            targetType: i,
            action: e.value
          })
        }), (0, a.jsx)(E.ComboboxItem.Label, {
          children: e.label
        }), (0, a.jsx)(E.ComboboxItem.Checkmark, {})]
      }, null !== (s = e.key) && void 0 !== s ? s : t)
    }, this.renderUserQuickSelectItem = (e, t) => {
      var s;
      if (e.user instanceof g.default) {
        let t = e.user;
        return (0, a.jsxs)(E.ComboboxItem, {
          value: t.id,
          selectedColor: E.ComboboxItem.Colors.BRAND,
          children: [(0, a.jsx)(E.ComboboxItem.Icon, {
            children: (0, a.jsx)(E.Avatar, {
              size: E.AvatarSizes.SIZE_32,
              src: t.getAvatarURL(this.props.guildId, 32),
              "aria-label": t.username,
              className: b.avatar
            })
          }), (0, a.jsxs)(E.ComboboxItem.Label, {
            children: [(0, a.jsx)(E.Text, {
              variant: "text-sm/normal",
              children: M.default.getUserTag(t, {
                mode: "username"
              })
            }), !t.isPomelo() && (0, a.jsxs)(E.Text, {
              variant: "text-xs/normal",
              className: b.discriminator,
              children: ["#", t.discriminator]
            })]
          }), (0, a.jsx)(E.ComboboxItem.Checkmark, {})]
        }, t.id)
      }
      return (0, a.jsxs)(E.ComboboxItem, {
        value: e.value,
        selectedColor: E.ComboboxItem.Colors.BRAND,
        children: [(0, a.jsx)(E.ComboboxItem.Icon, {
          children: (0, a.jsx)(O.default, {
            width: 30,
            height: 30
          })
        }), (0, a.jsx)(E.ComboboxItem.Label, {
          children: e.label
        }), (0, a.jsx)(E.ComboboxItem.Checkmark, {})]
      }, null !== (s = e.key) && void 0 !== s ? s : t)
    }, this.renderHeaderDropdowns = () => {
      var e, t;
      let {
        actionFilter: s,
        hide: l,
        userIdFilter: n,
        moderators: r
      } = this.props;
      if (l) return null;
      let o = A.ACTION_FILTER_ITEMS(),
        d = null !== (e = o.find(e => {
          let {
            value: t
          } = e;
          return s === t
        })) && void 0 !== e ? e : o[0],
        u = {
          label: P.default.Messages.GUILD_SETTINGS_FILTER_ALL_USERS,
          valueLabel: P.default.Messages.GUILD_SETTINGS_FILTER_ALL,
          value: null
        },
        c = [u, ...r].map(e => {
          var t;
          if (!(e instanceof g.default)) return e;
          return {
            label: (t = e).username,
            value: t.id,
            user: t
          }
        }),
        E = null !== (t = c.find(e => {
          let {
            value: t
          } = e;
          return t === n
        })) && void 0 !== t ? t : u;
      return (0, a.jsxs)("div", {
        className: b.quickSelect,
        children: [(0, a.jsx)(S.default, {
          popoutClassName: i(b.selectFilterPopout, y.elevationBorderHigh),
          items: c,
          renderItem: this.renderUserQuickSelectItem,
          renderValue: this.renderUserQuickSelectValue,
          value: E,
          onChange: this.handleFilterUserChange,
          label: P.default.Messages.GUILD_SETTINGS_FILTER_USER,
          placeholder: P.default.Messages.SEARCH_MEMBERS,
          popoutProps: {
            autoInvert: !1,
            position: "bottom"
          }
        }), (0, a.jsx)(S.default, {
          placeholder: P.default.Messages.SEARCH_ACTIONS,
          label: P.default.Messages.GUILD_SETTINGS_FILTER_ACTION,
          popoutClassName: i(b.selectFilterPopout, y.elevationBorderLow),
          items: o,
          renderItem: this.renderActionQuickSelectItem,
          renderValue: this.renderActionQuickSelectValue,
          value: d,
          onChange: this.handleFilterActionChange,
          popoutProps: {
            autoInvert: !1,
            position: "bottom"
          }
        })]
      })
    }, this.renderLoadMore = () => {
      let {
        showLoadMore: e,
        hasOlderLogs: t,
        hide: s
      } = this.props;
      if (e && t && !s) return (0, a.jsx)(E.Button, {
        color: E.Button.Colors.PRIMARY,
        className: b.loadMore,
        onClick: this.handleFetchNextPage,
        children: P.default.Messages.GUILD_SETTINGS_AUDIT_LOG_LOAD_MORE
      })
    }, this.handleFilterActionChange = e => {
      (0, _.filterByAction)(e, this.props.guildId)
    }, this.handleFilterUserChange = e => {
      (0, _.filterByUserId)(e, this.props.guildId)
    }, this.handleHeaderClick = e => {
      let {
        expandedId: t
      } = this.state;
      t !== e.id ? (this._clickedInside = !0, this.setState({
        expandedId: e.id,
        lastExpandedId: t
      }), this._prevRects = this.getRects()) : (this._expandedRef = null, this._lastExpandedRef = null, null != t && (this._prevRects = this.getRects()), this.setState({
        expandedId: null,
        lastExpandedId: null
      }))
    }, this.handleOutsideClick = () => {
      null == this.state.expandedId || this._clickedInside ? null != this.state.expandedId && (this._clickedInside = !1) : (this._expandedRef = null, this._lastExpandedRef = null, this.setState({
        expandedId: null,
        lastExpandedId: null
      }), this._prevRects = this.getRects())
    }, this.handleContentClick = e => {
      this._clickedInside = !0, e.stopPropagation()
    }, this.handleSetScrollerRef = e => {
      this._scrollerRef = e
    }, this.handleOnScroll = () => {
      this.isScrollerAtBottom() && this.handleFetchNextPage()
    }, this.handleFetchNextPage = () => {
      (0, _.fetchNextLogPage)(this.props.guildId)
    }, this.handleActionFilterQueryChange = e => {
      this.setState({
        actionFilterQuery: e
      })
    }, this.handleActionFilterQueryClear = () => {
      this.setState({
        actionFilterQuery: ""
      })
    }, this.handleSetExpandedRef = e => {
      this._expandedRef = e
    }, this.handleSetLastExpandedRef = e => {
      this._lastExpandedRef = e
    }
  }
}
var w = c.default.connectStores([D.default, v.default, C.default, m.default, R.default, x.default], () => {
  let e = v.default.getGuildId(),
    t = C.default.getGuild(e),
    s = D.default.logs,
    a = D.default.userIds.map(e => x.default.getUser(e)).filter(p.isNotNullish);
  return {
    guildId: e,
    guild: t,
    moderators: a,
    isInitialLoading: D.default.isInitialLoading,
    isLoading: D.default.isLoading,
    isLoadingNextPage: D.default.isLoadingNextPage,
    showLoadMore: D.default.groupedFetchCount > 2,
    hasError: D.default.hasError,
    hasOlderLogs: D.default.hasOlderLogs,
    logs: null != s && null != t ? A.transformLogs(s, t) : [],
    actionFilter: D.default.actionFilter,
    userIdFilter: D.default.userIdFilter,
    theme: m.default.theme,
    hide: R.default.enabled
  }
})(k)