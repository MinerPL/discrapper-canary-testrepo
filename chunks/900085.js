"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
}), n("411104"), n("47120");
var l, a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("873546"),
  u = n("442837"),
  d = n("481060"),
  c = n("239091"),
  f = n("134616"),
  h = n("714338"),
  m = n("212819"),
  C = n("14429"),
  p = n("592125"),
  g = n("888369"),
  E = n("430824"),
  _ = n("306680"),
  S = n("944486"),
  I = n("938475"),
  N = n("387204"),
  T = n("107828"),
  A = n("153124"),
  L = n("585483"),
  v = n("63063"),
  x = n("51596"),
  R = n("823385"),
  M = n("670512"),
  y = n("981631"),
  O = n("689938"),
  D = n("216921");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let j = {
    bottom: 10
  },
  P = () => (0, a.jsxs)("div", {
    className: D.emptyState,
    children: [(0, a.jsx)("div", {
      className: D.emptyStateNote,
      children: O.default.Messages.QUICKSWITCHER_EMPTY_TEXT
    }), (0, a.jsx)("div", {
      className: D.emptyStateCTA,
      children: (0, a.jsx)(d.Anchor, {
        href: v.default.getArticleURL(y.HelpdeskArticles.QUICK_SWITCHER_TUTORIAL),
        children: O.default.Messages.QUICKSWITCHER_EMPTY_CTA
      })
    })]
  });
class G extends(l = s.Component) {
  render() {
    let e = E.default.getGuild(this.props.channel.guild_id);
    return (0, a.jsx)(T.Channel, {
      ...this.props,
      children: (0, a.jsx)("div", {
        className: D.miscContainer,
        children: null != e ? e.name : null
      })
    })
  }
}
b(G, "defaultProps", {
  unread: !1
});
let U = u.default.connectStores([_.default, p.default], e => {
    let {
      channel: t
    } = e;
    return {
      unread: _.default.hasUnread(t.id),
      mentions: _.default.getMentionCount(t.id),
      category: p.default.getChannel(t.parent_id)
    }
  })(G),
  w = u.default.connectStores([I.default], e => {
    let {
      channel: t
    } = e;
    if (null == t.guild_id) throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
    return {
      voiceStates: I.default.getVoiceStates(t.guild_id)[t.id]
    }
  })(G),
  B = u.default.connectStores([g.default], e => {
    let {
      guild: t
    } = e;
    return {
      unread: g.default.hasUnread(t.id)
    }
  })(T.Guild),
  F = u.default.connectStores([_.default], e => {
    let {
      channel: t
    } = e;
    return {
      mentions: _.default.getMentionCount(t.id)
    }
  })(T.GroupDM),
  H = u.default.connectStores([p.default, _.default], e => {
    let {
      user: t
    } = e, n = p.default.getDMFromUserId(t.id);
    return {
      mentions: null != n ? _.default.getMentionCount(n) : 0
    }
  })(T.User);

function V(e, t, n) {
  return (0, a.jsx)(d.Tooltip, {
    text: n,
    children: e => (0, a.jsx)("span", {
      ...e,
      className: D.autocompleteQuerySymbol,
      children: t
    })
  }, e)
}
class k extends s.PureComponent {
  componentDidMount() {
    h.default.disable(), h.default.enableTemp(f.SETTINGS_LAYERS_LAYOUT)
  }
  componentWillUnmount() {
    h.default.disableTemp(), h.default.enable()
  }
  componentDidUpdate(e, t) {
    let {
      mouseFocusDisabled: n,
      query: l
    } = this.state, {
      selectedIndex: a
    } = this.props, {
      current: s
    } = this.scrollerRef;
    null != s && (l !== t.query ? s.scrollTo({
      to: 0
    }) : n && a >= 0 && s.scrollToIndex({
      section: 0,
      row: a,
      padding: 10
    }))
  }
  close() {
    (0, x.hide)()
  }
  search(e) {
    this.setState({
      query: e
    }), (0, x.search)(e)
  }
  renderInput() {
    let {
      selectedIndex: e,
      results: t
    } = this.props, {
      query: n
    } = this.state, l = t.length > 0 && "" !== n;
    return (0, a.jsx)(d.FocusRing, {
      children: (0, a.jsx)("input", {
        className: D.input,
        "aria-label": O.default.Messages.QUICK_SWITCHER,
        ref: this.inputRef,
        type: "text",
        role: "combobox",
        "aria-controls": this._listId,
        "aria-expanded": l,
        "aria-activedescendant": l ? this.getRowId(e) : void 0,
        "aria-autocomplete": "list",
        placeholder: O.default.Messages.QUICKSWITCHER_PLACEHOLDER,
        onChange: this.handleInputChange,
        onKeyDown: this.handleKeyDown,
        value: this.state.query,
        spellCheck: !1,
        autoFocus: !0
      })
    })
  }
  renderSection() {
    return null
  }
  renderResults() {
    let {
      query: e
    } = this.state, {
      results: t
    } = this.props;
    return 0 === t.length && e.length > 0 ? (0, a.jsx)(P, {}) : 0 === t.length ? null : (0, a.jsx)(d.ListAuto, {
      innerId: this._listId,
      innerRole: "listbox",
      "aria-label": O.default.Messages.QUICK_SWITCHER_RESULTS_LABEL,
      ref: this.scrollerRef,
      sectionHeight: 0,
      rowHeight: 34,
      paddingBottom: j.bottom,
      sections: [t.length],
      className: D.scroller,
      renderRow: this.renderRow,
      renderSection: this.renderSection
    })
  }
  focusNode(e) {
    L.ComponentDispatch.dispatch(y.ComponentActions.QUICKSWITCHER_RESULT_FOCUS, {
      node: e
    })
  }
  getRowId(e) {
    return "quick-switcher-".concat(this._listId, "-item-").concat(e)
  }
  renderProtip() {
    return (0, a.jsx)(N.default, {
      className: r()(D.protip, {
        [D.hasContent]: this.state.query.length > 0
      }),
      type: N.default.Types.INLINE,
      children: O.default.Messages.QUICKSWITCHER_PROTIP.format({
        userSymbolHook: (e, t) => V(t, m.AutocompleterQuerySymbols.USER, O.default.Messages.QUICKSWITCHER_PROTIP_USERNAMES),
        textChannelSymbolHook: (e, t) => V(t, m.AutocompleterQuerySymbols.TEXT_CHANNEL, O.default.Messages.QUICKSWITCHER_PROTIP_TEXT_CHANNELS),
        voiceChannelSymbolHook: (e, t) => V(t, m.AutocompleterQuerySymbols.VOICE_CHANNEL, O.default.Messages.QUICKSWITCHER_PROTIP_VOICE_CHANNELS),
        guildSymbolHook: (e, t) => V(t, m.AutocompleterQuerySymbols.GUILD, O.default.Messages.QUICKSWITCHER_PROTIP_GUILDS),
        helpdeskArticle: v.default.getArticleURL(y.HelpdeskArticles.QUICK_SWITCHER_TUTORIAL)
      })
    })
  }
  renderTutorial() {
    let {
      query: e
    } = this.state, {
      seenTutorial: t,
      results: n
    } = this.props;
    return t ? null : (0, a.jsx)(M.default, {
      hasQuery: e.length > 0 && n.length > 0
    })
  }
  render() {
    return (0, a.jsx)(d.ModalRoot, {
      "aria-label": O.default.Messages.QUICK_SWITCHER,
      size: d.ModalSize.DYNAMIC,
      transitionState: this.props.transitionState,
      className: r()(D.container, o.isMobile && D.mobileContainer),
      fullscreenOnMobile: !1,
      children: (0, a.jsxs)("div", {
        className: r()(D.quickswitcher, o.isMobile && D.mobileQuickswitcher),
        onMouseMove: this.handleMouseMove,
        children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
      })
    })
  }
  constructor(...e) {
    super(...e), b(this, "scrollerRef", s.createRef()), b(this, "inputRef", s.createRef()), b(this, "_listId", (0, A.uid)()), b(this, "state", {
      query: this.props.query,
      mouseFocusDisabled: !0
    }), b(this, "handleInputChange", () => {
      let {
        current: e
      } = this.inputRef;
      null != e && this.search(e.value)
    }), b(this, "handleMouseMove", () => {
      let {
        mouseFocusDisabled: e
      } = this.state;
      !1 !== e && this.setState({
        mouseFocusDisabled: !1
      })
    }), b(this, "focusResult", e => {
      !this.state.mouseFocusDisabled && (0, x.selectResult)(this.props.results.indexOf(e))
    }), b(this, "selectResult", e => {
      (0, x.switchToResult)(e, this.props.queryMode === m.AutocompleterResultTypes.TEXT_CHANNEL)
    }), b(this, "handleContextMenu", e => {
      let t = this.props.results[this.props.selectedIndex];
      switch (t.type) {
        case m.AutocompleterResultTypes.GUILD:
          return (0, c.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("70716"), n.e("33053"), n.e("49146"), n.e("75475"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("92714"), n.e("69760"), n.e("33213"), n.e("19255")]).then(n.bind(n, "545135"));
            return n => (0, a.jsx)(e, {
              ...n,
              guild: t.record,
              onSelect: x.hide,
              hideSettings: !0
            })
          });
        case m.AutocompleterResultTypes.TEXT_CHANNEL:
        case m.AutocompleterResultTypes.VOICE_CHANNEL:
          let l = t.record,
            s = E.default.getGuild(l.getGuildId());
          if (null == s) return;
          switch (l.type) {
            case y.ChannelTypes.GUILD_TEXT:
            case y.ChannelTypes.GUILD_ANNOUNCEMENT:
            case y.ChannelTypes.GUILD_FORUM:
            case y.ChannelTypes.GUILD_MEDIA:
              return (0, c.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("8137"), n.e("54310")]).then(n.bind(n, "373651"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  channel: l,
                  guild: s,
                  onSelect: x.hide
                })
              });
            case y.ChannelTypes.GUILD_VOICE:
            case y.ChannelTypes.GUILD_STAGE_VOICE:
              return (0, c.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("8137"), n.e("83331")]).then(n.bind(n, "213202"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  channel: l,
                  guild: s,
                  onSelect: x.hide
                })
              });
            case y.ChannelTypes.ANNOUNCEMENT_THREAD:
            case y.ChannelTypes.PUBLIC_THREAD:
            case y.ChannelTypes.PRIVATE_THREAD:
              return (0, c.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await n.e("40157").then(n.bind(n, "422200"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  channel: l,
                  onSelect: x.hide
                })
              });
            case y.ChannelTypes.GUILD_STORE:
              return (0, c.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await n.e("99905").then(n.bind(n, "649400"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  channel: l,
                  guild: s,
                  onSelect: x.hide
                })
              });
            case y.ChannelTypes.GUILD_DIRECTORY:
              return (0, c.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await n.e("70623").then(n.bind(n, "99334"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  channel: l
                })
              })
          }
          break;
        case m.AutocompleterResultTypes.GROUP_DM:
          return (0, c.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("25421")]).then(n.bind(n, "354741"));
            return n => (0, a.jsx)(e, {
              ...n,
              channel: t.record,
              selected: S.default.getChannelId() === t.record.id,
              onSelect: x.hide
            })
          });
        case m.AutocompleterResultTypes.USER:
          return (0, c.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("36441"), n.e("69220")]).then(n.bind(n, "881351"));
            return n => (0, a.jsx)(e, {
              ...n,
              user: t.record,
              onSelect: x.hide
            })
          })
      }
    }), b(this, "handleKeyDown", e => {
      let {
        mouseFocusDisabled: t,
        query: n
      } = this.state, {
        results: l
      } = this.props;
      !1 === t && this.setState({
        mouseFocusDisabled: !0
      });
      let a = e.key.toLowerCase(),
        {
          selectedIndex: s
        } = this.props;
      switch (a) {
        case "escape":
          e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, x.hide)();
          return;
        case "k":
          (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, x.hide)());
          return;
        case "enter": {
          if (-1 === s) return;
          if (e.preventDefault(), e.altKey) return this.handleContextMenu(e);
          let t = l[s];
          null != t && this.selectResult(t);
          return
        }
        case "arrowup":
          s = (0, m.findNextSelectedResult)(m.FindResultDirections.UP, s, l);
          break;
        case "arrowdown":
          s = (0, m.findNextSelectedResult)(m.FindResultDirections.DOWN, s, l);
          break;
        case "n":
          if (!e.ctrlKey) return;
          s = (0, m.findNextSelectedResult)(m.FindResultDirections.DOWN, s, l);
          break;
        case "p":
          if (!e.ctrlKey) return;
          s = (0, m.findNextSelectedResult)(m.FindResultDirections.UP, s, l);
          break;
        default:
          return
      }
      e.preventDefault(), (0, x.selectResult)(s)
    }), b(this, "renderRow", e => {
      let {
        row: t
      } = e, n = this.props.results[t], {
        selectedIndex: l
      } = this.props, {
        showScores: s
      } = C.default.getCurrentConfig({
        location: "62f4be_1"
      }, {
        autoTrackExposure: !1
      });
      switch (n.type) {
        case m.AutocompleterResultTypes.HEADER:
          return (0, a.jsx)(T.Header, {
            children: n.record.text
          }, "".concat(n.type, "-").concat(n.record.id));
        case m.AutocompleterResultTypes.TEXT_CHANNEL:
          return (0, a.jsx)(U, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: s ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case m.AutocompleterResultTypes.VOICE_CHANNEL:
          return (0, a.jsx)(w, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: s ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case m.AutocompleterResultTypes.GUILD:
          return (0, a.jsx)(B, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            guild: n.record,
            score: s ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case m.AutocompleterResultTypes.USER:
          return (0, a.jsx)(H, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            user: n.record,
            comparator: n.comparator,
            score: s ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case m.AutocompleterResultTypes.GROUP_DM:
          return (0, a.jsx)(F, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: s ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case m.AutocompleterResultTypes.APPLICATION:
          return (0, a.jsx)(T.Application, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            application: n.record
          }, "".concat(n.type, "-").concat(n.record.id));
        case m.AutocompleterResultTypes.LINK:
          return (0, a.jsx)(T.Link, {
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            link: n.record,
            score: s ? n.score : void 0,
            id: this.getRowId(t)
          }, "".concat(n.type, "-").concat(n.record.id));
        default:
          return null
      }
    })
  }
}

function Y(e) {
  let t = (0, u.useStateFromStoresObject)([R.default], () => R.default.getProps());
  return (0, a.jsx)(k, {
    ...t,
    ...e
  })
}