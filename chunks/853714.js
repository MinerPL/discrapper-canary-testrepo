"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("699581"),
  o = s.n(r),
  d = s("924826"),
  u = s("374470"),
  c = s("442837"),
  E = s("481060"),
  _ = s("480137"),
  I = s("239091"),
  T = s("497321"),
  S = s("459801"),
  f = s("724757"),
  m = s("210887"),
  N = s("387667"),
  g = s("598077"),
  h = s("592125"),
  C = s("430824"),
  R = s("246946"),
  x = s("594174"),
  L = s("186095"),
  O = s("158010"),
  A = s("274730"),
  p = s("823379"),
  M = s("51144"),
  D = s("776617"),
  v = s("999382"),
  j = s("501801"),
  G = s("603784"),
  U = s("981631"),
  P = s("689938"),
  b = s("997607"),
  B = s("595663"),
  y = s("344534");

function F(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class H extends l.PureComponent {
  render() {
    let {
      onHeaderClick: e,
      guildId: t,
      guild: s,
      ...l
    } = this.props;
    return null == t ? null : (0, a.jsx)(G.default, {
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
    super(...e), F(this, "handleHeaderClick", () => {
      let {
        onHeaderClick: e,
        log: t
      } = this.props;
      null == e || e(t)
    }), F(this, "handleUserContextMenu", e => {
      let {
        log: t,
        guildId: l
      } = this.props, {
        user: n
      } = t;
      null != n && null != l && (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("50929")]).then(s.bind(s, "595011"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: l,
          user: n
        })
      })
    }), F(this, "handleChannelContextMenu", e => {
      let {
        log: t,
        guildId: l
      } = this.props, n = C.default.getGuild(l);
      null != t.options.channel && null != n && (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.e("51529").then(s.bind(s, "228620"));
        return s => (0, a.jsx)(e, {
          ...s,
          channel: t.options.channel
        })
      })
    }), F(this, "handleTargetContextMenu", e => {
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
            } = await s.e("51529").then(s.bind(s, "228620"));
            return t => (0, a.jsx)(e, {
              ...t,
              channel: n
            })
          });
          return (0, I.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await s.e("65889").then(s.bind(s, "731646"));
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
            } = await Promise.all([s.e("99387"), s.e("50929")]).then(s.bind(s, "595011"));
            return t => (0, a.jsx)(e, {
              ...t,
              guildId: l,
              user: r
            })
          })
      }
      return null
    })
  }
}

function k(e) {
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
            return (0, a.jsx)(H, {
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
class w extends l.PureComponent {
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
      l = e.getScrollerState().scrollTop - a;
    e.scrollTo({
      to: l
    })
  }
  getRects() {
    let e = {
      lastExpanded: null,
      expanded: null
    };
    if (null != this._lastExpandedRef) {
      let t = o().findDOMNode(this._lastExpandedRef);
      (0, u.isElement)(t) && (e.lastExpanded = t.getBoundingClientRect())
    }
    if (null != this._expandedRef) {
      let t = o().findDOMNode(this._expandedRef);
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
          darkSrc: s("28269"),
          lightSrc: s("357115"),
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
    return (0, a.jsx)(k, {
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
          className: i()(B.customScroller, b.scroller),
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
    super(...e), F(this, "_clickedInside", !1), F(this, "_scrollerRef", null), F(this, "_expandedRef", void 0), F(this, "_lastExpandedRef", void 0), F(this, "_prevRects", this.getRects()), F(this, "_contentRef", l.createRef()), F(this, "state", {
      expandedId: null,
      lastExpandedId: null,
      actionFilterQuery: ""
    }), F(this, "renderActionQuickSelectItem", (e, t) => {
      var s;
      let {
        actionFilter: l
      } = this.props, n = (0, N.getActionType)(e.value), i = (0, N.getTargetType)(e.value), r = e.value === l;
      return (0, a.jsxs)(E.ComboboxItem, {
        value: e.value,
        selectedColor: E.ComboboxItem.Colors.BRAND,
        children: [(0, a.jsx)(E.ComboboxItem.Icon, {
          children: (0, a.jsx)(j.AuditLogIcon, {
            themeOverride: r ? U.ThemeTypes.DARK : null,
            actionType: n,
            targetType: i,
            action: e.value
          })
        }), (0, a.jsx)(E.ComboboxItem.Label, {
          children: e.label
        }), (0, a.jsx)(E.ComboboxItem.Checkmark, {})]
      }, null !== (s = e.key) && void 0 !== s ? s : t)
    }), F(this, "renderUserQuickSelectItem", (e, t) => {
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
    }), F(this, "renderHeaderDropdowns", () => {
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
          popoutClassName: i()(b.selectFilterPopout, y.elevationBorderHigh),
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
          popoutClassName: i()(b.selectFilterPopout, y.elevationBorderLow),
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
    }), F(this, "renderLoadMore", () => {
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
    }), F(this, "handleFilterActionChange", e => {
      (0, _.filterByAction)(e, this.props.guildId)
    }), F(this, "handleFilterUserChange", e => {
      (0, _.filterByUserId)(e, this.props.guildId)
    }), F(this, "handleHeaderClick", e => {
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
    }), F(this, "handleOutsideClick", () => {
      null == this.state.expandedId || this._clickedInside ? null != this.state.expandedId && (this._clickedInside = !1) : (this._expandedRef = null, this._lastExpandedRef = null, this.setState({
        expandedId: null,
        lastExpandedId: null
      }), this._prevRects = this.getRects())
    }), F(this, "handleContentClick", e => {
      this._clickedInside = !0, e.stopPropagation()
    }), F(this, "handleSetScrollerRef", e => {
      this._scrollerRef = e
    }), F(this, "handleOnScroll", () => {
      this.isScrollerAtBottom() && this.handleFetchNextPage()
    }), F(this, "handleFetchNextPage", () => {
      (0, _.fetchNextLogPage)(this.props.guildId)
    }), F(this, "handleActionFilterQueryChange", e => {
      this.setState({
        actionFilterQuery: e
      })
    }), F(this, "handleActionFilterQueryClear", () => {
      this.setState({
        actionFilterQuery: ""
      })
    }), F(this, "handleSetExpandedRef", e => {
      this._expandedRef = e
    }), F(this, "handleSetLastExpandedRef", e => {
      this._lastExpandedRef = e
    })
  }
}
t.default = c.default.connectStores([D.default, v.default, C.default, m.default, R.default, x.default], () => {
  let e = v.default.getGuildId(),
    t = C.default.getGuild(e),
    s = D.default.logs;
  return {
    guildId: e,
    guild: t,
    moderators: D.default.userIds.map(e => x.default.getUser(e)).filter(p.isNotNullish),
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
})(w)