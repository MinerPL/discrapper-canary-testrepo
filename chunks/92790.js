"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("781738");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("98159"),
  o = n("369470"),
  u = n.n(o),
  d = n("446674"),
  c = n("77078"),
  f = n("378438"),
  h = n("137223"),
  E = n("76385"),
  m = n("955513"),
  p = n("180748"),
  S = n("206230"),
  g = n("716241"),
  N = n("42203"),
  _ = n("923959"),
  T = n("744983"),
  I = n("18494"),
  C = n("476765"),
  A = n("659500"),
  M = n("202752"),
  v = n("751520"),
  R = n("313483"),
  x = n("200745"),
  L = n("653291"),
  O = n("49111"),
  b = n("782340"),
  y = n("79193");
n("590976");
let j = (0, C.uid)(),
  F = u(f.search, 500);
class D extends l.PureComponent {
  componentDidMount() {
    var e, t;
    A.ComponentDispatch.subscribe(O.ComponentActions.PERFORM_SEARCH, this.search), A.ComponentDispatch.subscribe(O.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), A.ComponentDispatch.subscribe(O.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute("aria-haspopup", "listbox")
  }
  componentDidUpdate(e) {
    let {
      editorState: t,
      searchId: n
    } = this.props;
    if (t !== e.editorState) {
      let e = v.tokenizeQuery(M.getFirstTextBlock(t)),
        a = R.getSelectionScope(e, t);
      f.updateAutocompleteQuery(n, e, a), null != this._editorRef && M.scrollCursorIntoView(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    A.ComponentDispatch.unsubscribe(O.ComponentActions.PERFORM_SEARCH, this.search), A.ComponentDispatch.unsubscribe(O.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), A.ComponentDispatch.unsubscribe(O.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = v.tokenizeQuery(M.getFirstTextBlock(e)).filter(e => e.type !== E.default.NON_TOKEN_TYPE);
    return M.applyTokensAsEntities(t, e, m.default)
  }
  clearSearch() {
    let {
      searchId: e
    } = this.props;
    null != e && f.clearSearchState(e)
  }
  handlePastedFiles() {
    return !0
  }
  handleDroppedFiles() {
    return !0
  }
  handleDrop() {
    return !0
  }
  renderInput(e) {
    let {
      editorState: t
    } = this.props;
    return (0, a.jsx)(r.Editor, {
      autoCorrect: "off",
      ref: this.setEditorRef,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      handleReturn: this.handleReturn,
      handleBeforeInput: this.handleBeforeInput,
      handleKeyCommand: this.handleKeyCommand,
      handlePastedText: this.handlePastedText,
      handlePastedFiles: this.handlePastedFiles,
      handleDroppedFiles: this.handleDroppedFiles,
      handleDrop: this.handleDrop,
      keyBindingFn: this.handleKeyBind,
      placeholder: b.default.Messages.SEARCH,
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? j : void 0,
      ariaLabel: b.default.Messages.SEARCH,
      ariaAutocomplete: "list"
    })
  }
  render() {
    let {
      searchId: e,
      editorState: t,
      hasResults: n,
      className: l
    } = this.props, {
      focused: s
    } = this.state, r = M.getFirstTextBlock(t).length > 0;
    return null == e ? null : (0, a.jsx)(c.Popout, {
      renderPopout: this.renderPopout,
      position: "bottom",
      animation: c.Popout.Animation.NONE,
      shouldShow: s,
      autoInvert: !1,
      children: (t, o) => {
        var u;
        let {
          isShown: d
        } = o;
        return (0, a.jsx)("div", {
          className: l,
          children: (0, a.jsx)("div", {
            className: i(y.search, {
              [y.open]: r || s,
              [y.focused]: s
            }),
            children: (0, a.jsx)(c.FocusRing, {
              focusTarget: {
                current: null === (u = this._editorRef) || void 0 === u ? void 0 : u.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, a.jsxs)("div", {
                className: y.searchBar,
                ref: this._searchBarRef,
                children: [this.renderInput(d), (0, a.jsx)(h.SearchBarIcon, {
                  onClear: this.handleClearSearch,
                  hasContent: r || n,
                  className: y.icon
                })]
              }, e)
            })
          })
        })
      }
    })
  }
  constructor(e) {
    super(e), this.state = {
      focused: !1,
      selectedIndex: void 0
    }, this._searchBarRef = l.createRef(), this._searchPopoutRef = l.createRef(), this.handleSetSearchQuery = e => {
      let {
        query: t,
        anchor: n,
        focus: a,
        performSearch: l,
        replace: s
      } = e, {
        editorState: i
      } = this.props, r = M.getFirstTextBlock(i);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== r.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), s ? (i = M.replaceAllContent(t, i), n = 0) : i = M.updateContent(t, i, n, a), i = M.truncateContent(i, 512), i = this.tokenize(i);
      let o = Number(n) + t.length;
      i = M.setCollapsedSelection(o, i), this.setEditorState(i), l && this.search({
        queryString: M.getFirstTextBlock(i)
      })
    }, this.handleSelectedIndexChanged = e => {
      var t, n;
      null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute("aria-activedescendant", null != e ? "".concat(j, "-").concat(e) : void 0), this.setState({
        selectedIndex: e
      })
    }, this.renderPopout = () => (0, a.jsx)(L.default, {
      ref: this._searchPopoutRef,
      navId: j,
      onSelectedIndexChanged: this.handleSelectedIndexChanged
    }), this.search = e => {
      let {
        searchId: t,
        isSearching: n
      } = this.props, {
        queryString: a,
        searchEverywhere: l
      } = null != e ? e : {};
      if (null == a || "" === a) {
        let {
          editorState: e
        } = this.props;
        a = M.getFirstTextBlock(e)
      }
      if (null != t && !n) {
        let e = v.tokenizeQuery(a),
          n = v.getSearchQueryFromTokens(e);
        for (let t = 0; t < e.length; t++) !v.filterHasAnswer(e[t], e[t + 1]) && (a = a.substring(0, e[t].start) + a.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(n).length) return !1;
        F(t, n, a, !!l), this.onBlur()
      }
      return !0
    }, this.handleClearSearch = e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      e.preventDefault(), e.stopPropagation();
      let a = M.getFirstTextBlock(t);
      if ("" === a) {
        this.focusEditor();
        return
      }
      t = M.truncateContent(t, 0), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor())
    }, this.handleFocusSearch = e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) {
        this.focusEditor();
        return
      }
      let n = I.default.getChannelId(),
        a = N.default.getChannel(n);
      if ((null == a ? void 0 : a.isThread()) && (a = N.default.getChannel(null == a ? void 0 : a.parent_id)), null == a || a.isPrivate()) {
        this.focusEditor();
        return
      }
      let l = _.default.getTextChannelNameDisambiguations(a.getGuildId()),
        s = l[a.id],
        i = null != s ? s.name : a.name;
      this.handleSetSearchQuery({
        query: m.default[O.SearchTokenTypes.FILTER_IN].key + "#".concat(i, " "),
        replace: !0
      })
    }, this.focusEditor = () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }, this.blurEditor = () => {
      var e;
      null === (e = this._editorRef) || void 0 === e || e.blur()
    }, this.setEditorRef = e => {
      this._editorRef = e
    }, this.onFocus = () => {
      let {
        searchType: e
      } = this.props;
      g.default.trackWithMetadata(O.AnalyticEvents.SEARCH_OPENED, {
        search_type: e
      }), this.setState({
        focused: !0
      })
    }, this.onBlur = () => {
      this.setState({
        focused: !1
      }, () => {
        M.isEmpty(this.props.editorState) && this.clearSearch()
      })
    }, this.handleReturn = e => {
      let {
        shiftKey: t
      } = e;
      e.preventDefault();
      let {
        current: n
      } = this._searchPopoutRef, a = null != n && n.selectOption();
      return !a && ((0, x.isFavoriteSearchEnabled)() && t ? this.search({
        searchEverywhere: !0
      }) : this.search()), !0
    }, this.handleBeforeInput = e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state, a = M.getFirstTextBlock(t);
      return !!(a.length >= 512) || (t = M.updateContent(e, t), t = M.truncateContent(t, 512), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
        focused: !0
      }), !0)
    }, this.handleKeyCommand = e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      switch (e) {
        case "backspace":
        case "backspace-word":
        case "backspace-to-start-of-line":
        case "delete":
        case "delete-word":
          return t = M.deleteContent(e, t), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
            focused: !0
          }), !0;
        case "transpose-characters":
        case "move-selection-to-start-of-block":
        case "move-selection-to-end-of-block":
          return t = M.miscCommand(e, t), t = this.tokenize(t), this.setEditorState(t), !0;
        case "split-block":
        case "underline":
        case "bold":
        case "italic":
          return !0
      }
    }, this.handlePastedText = e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = M.updateContent(e, t), t = M.truncateContent(t, 512), t = this.tokenize(t), !n && this.setState({
        focused: !0
      }), this.setEditorState(t), !0
    }, this.setEditorState = e => {
      let {
        searchId: t
      } = this.props;
      f.setSearchState(t, e)
    }, this.handleKeyBind = e => {
      let {
        key: t,
        metaKey: n,
        shiftKey: a
      } = e, {
        editorState: l,
        searchId: s,
        keyboardModeEnabled: i
      } = this.props;
      if (e.stopPropagation(), "Escape" === t) {
        if (e.preventDefault(), M.isEmpty(l)) this.blurEditor();
        else {
          let e = M.clearContent(l);
          f.setSearchState(s, e), this.setState({
            focused: !0
          })
        }
        return !0
      }
      if ("ArrowUp" === t) {
        e.preventDefault();
        let {
          current: t
        } = this._searchPopoutRef;
        return null != t && t.focusPreviousOption(), !0
      }
      if ("ArrowDown" === t) {
        e.preventDefault();
        let {
          current: t
        } = this._searchPopoutRef;
        return null != t && t.focusNextOption(), !0
      }
      if ("Tab" === t) {
        if (i) return;
        return (0, p.enableKeyboardMode)(), !0
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), l = a ? M.setToStartSelection(l) : M.setCollapsedStartSelection(l), this.setEditorState(l), !0;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), l = a ? M.setToEndSelection(l) : M.setCollapsedEndSelection(l), this.setEditorState(l), !0;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = M.clearContent(l);
        return this.setEditorState(e), !0
      }
      return M.getDefaultKeyBinding(e)
    }, v.clearTokenCache()
  }
}
var U = d.default.connectStores([S.default, T.default], () => {
  var e;
  let t = T.default.getCurrentSearchId(),
    n = T.default.getSearchType(),
    a = null != t && T.default.isSearching(t),
    l = null != t && null !== (e = T.default.getEditorState(t)) && void 0 !== e ? e : M.createEmptyEditorState(R.generateDecorators(m.default)),
    s = S.default.keyboardModeEnabled;
  return {
    searchId: t,
    searchType: n,
    isSearching: a,
    editorState: l,
    hasResults: T.default.hasResults(t),
    keyboardModeEnabled: s
  }
})(D)