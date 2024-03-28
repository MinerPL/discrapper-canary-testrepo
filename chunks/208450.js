"use strict";
n.r(t), n("757143");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("16464"),
  o = n("299608"),
  u = n.n(o),
  d = n("442837"),
  c = n("481060"),
  f = n("603263"),
  E = n("461745"),
  _ = n("349033"),
  T = n("999650"),
  m = n("857595"),
  I = n("607070"),
  p = n("367907"),
  h = n("592125"),
  N = n("984933"),
  S = n("768119"),
  C = n("944486"),
  A = n("153124"),
  g = n("585483"),
  M = n("72006"),
  R = n("405656"),
  O = n("181389"),
  v = n("854709"),
  L = n("778177"),
  x = n("981631"),
  D = n("689938"),
  P = n("979901");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n("626504");
let U = (0, A.uid)(),
  b = u()(f.search, 500);
class j extends a.PureComponent {
  componentDidMount() {
    var e, t;
    g.ComponentDispatch.subscribe(x.ComponentActions.PERFORM_SEARCH, this.search), g.ComponentDispatch.subscribe(x.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), g.ComponentDispatch.subscribe(x.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute("aria-haspopup", "listbox")
  }
  componentDidUpdate(e) {
    let {
      editorState: t,
      searchId: n
    } = this.props;
    if (t !== e.editorState) {
      let e = R.tokenizeQuery(M.getFirstTextBlock(t)),
        s = O.getSelectionScope(e, t);
      f.updateAutocompleteQuery(n, e, s), null != this._editorRef && M.scrollCursorIntoView(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    g.ComponentDispatch.unsubscribe(x.ComponentActions.PERFORM_SEARCH, this.search), g.ComponentDispatch.unsubscribe(x.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), g.ComponentDispatch.unsubscribe(x.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = R.tokenizeQuery(M.getFirstTextBlock(e)).filter(e => e.type !== _.default.NON_TOKEN_TYPE);
    return M.applyTokensAsEntities(t, e, T.default)
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
    return (0, s.jsx)(r.Editor, {
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
      placeholder: D.default.Messages.SEARCH,
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? U : void 0,
      ariaLabel: D.default.Messages.SEARCH,
      ariaAutocomplete: "list"
    })
  }
  render() {
    let {
      searchId: e,
      editorState: t,
      hasResults: n,
      className: a
    } = this.props, {
      focused: l
    } = this.state, r = M.getFirstTextBlock(t).length > 0;
    return null == e ? null : (0, s.jsx)(c.Popout, {
      renderPopout: this.renderPopout,
      position: "bottom",
      animation: c.Popout.Animation.NONE,
      shouldShow: l,
      autoInvert: !1,
      children: (t, o) => {
        var u;
        let {
          isShown: d
        } = o;
        return (0, s.jsx)("div", {
          className: a,
          children: (0, s.jsx)("div", {
            className: i()(P.search, {
              [P.open]: r || l,
              [P.focused]: l
            }),
            children: (0, s.jsx)(c.FocusRing, {
              focusTarget: {
                current: null === (u = this._editorRef) || void 0 === u ? void 0 : u.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, s.jsxs)("div", {
                className: P.searchBar,
                ref: this._searchBarRef,
                children: [this.renderInput(d), (0, s.jsx)(E.SearchBarIcon, {
                  onClear: this.handleClearSearch,
                  hasContent: r || n,
                  className: P.icon
                })]
              }, e)
            })
          })
        })
      }
    })
  }
  constructor(e) {
    super(e), y(this, "state", {
      focused: !1,
      selectedIndex: void 0
    }), y(this, "_editorRef", void 0), y(this, "_searchBarRef", a.createRef()), y(this, "_searchPopoutRef", a.createRef()), y(this, "handleSetSearchQuery", e => {
      let {
        query: t,
        anchor: n,
        focus: s,
        performSearch: a,
        replace: l
      } = e, {
        editorState: i
      } = this.props, r = M.getFirstTextBlock(i);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== r.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), l ? (i = M.replaceAllContent(t, i), n = 0) : i = M.updateContent(t, i, n, s), i = M.truncateContent(i, 512), i = this.tokenize(i);
      let o = Number(n) + t.length;
      i = M.setCollapsedSelection(o, i), this.setEditorState(i), a && this.search({
        queryString: M.getFirstTextBlock(i)
      })
    }), y(this, "handleSelectedIndexChanged", e => {
      var t, n;
      null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute("aria-activedescendant", null != e ? "".concat(U, "-").concat(e) : void 0), this.setState({
        selectedIndex: e
      })
    }), y(this, "renderPopout", () => (0, s.jsx)(L.default, {
      ref: this._searchPopoutRef,
      navId: U,
      onSelectedIndexChanged: this.handleSelectedIndexChanged
    })), y(this, "search", e => {
      let {
        searchId: t,
        isSearching: n
      } = this.props, {
        queryString: s,
        searchEverywhere: a
      } = null != e ? e : {};
      if (null == s || "" === s) {
        let {
          editorState: e
        } = this.props;
        s = M.getFirstTextBlock(e)
      }
      if (null != t && !n) {
        let e = R.tokenizeQuery(s),
          n = R.getSearchQueryFromTokens(e);
        for (let t = 0; t < e.length; t++) !R.filterHasAnswer(e[t], e[t + 1]) && (s = s.substring(0, e[t].start) + s.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(n).length) return !1;
        b(t, n, s, !!a), this.onBlur()
      }
      return !0
    }), y(this, "handleClearSearch", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === M.getFirstTextBlock(t)) {
        this.focusEditor();
        return
      }
      t = M.truncateContent(t, 0), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor())
    }), y(this, "handleFocusSearch", e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) {
        this.focusEditor();
        return
      }
      let n = C.default.getChannelId(),
        s = h.default.getChannel(n);
      if ((null == s ? void 0 : s.isThread()) && (s = h.default.getChannel(null == s ? void 0 : s.parent_id)), null == s || s.isPrivate()) {
        this.focusEditor();
        return
      }
      let a = N.default.getTextChannelNameDisambiguations(s.getGuildId())[s.id],
        l = null != a ? a.name : s.name;
      this.handleSetSearchQuery({
        query: T.default[x.SearchTokenTypes.FILTER_IN].key + "#".concat(l, " "),
        replace: !0
      })
    }), y(this, "focusEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }), y(this, "blurEditor", () => {
      var e;
      null === (e = this._editorRef) || void 0 === e || e.blur()
    }), y(this, "setEditorRef", e => {
      this._editorRef = e
    }), y(this, "onFocus", () => {
      let {
        searchType: e
      } = this.props;
      p.default.trackWithMetadata(x.AnalyticEvents.SEARCH_OPENED, {
        search_type: e
      }), this.setState({
        focused: !0
      })
    }), y(this, "onBlur", () => {
      this.setState({
        focused: !1
      }, () => {
        M.isEmpty(this.props.editorState) && this.clearSearch()
      })
    }), y(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      e.preventDefault();
      let {
        current: n
      } = this._searchPopoutRef;
      return !(null != n && n.selectOption()) && ((0, v.isFavoriteSearchEnabled)() && t ? this.search({
        searchEverywhere: !0
      }) : this.search()), !0
    }), y(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return !!(M.getFirstTextBlock(t).length >= 512) || (t = M.updateContent(e, t), t = M.truncateContent(t, 512), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
        focused: !0
      }), !0)
    }), y(this, "handleKeyCommand", e => {
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
    }), y(this, "handlePastedText", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = M.updateContent(e, t), t = M.truncateContent(t, 512), t = this.tokenize(t), !n && this.setState({
        focused: !0
      }), this.setEditorState(t), !0
    }), y(this, "setEditorState", e => {
      let {
        searchId: t
      } = this.props;
      f.setSearchState(t, e)
    }), y(this, "handleKeyBind", e => {
      let {
        key: t,
        metaKey: n,
        shiftKey: s
      } = e, {
        editorState: a,
        searchId: l,
        keyboardModeEnabled: i
      } = this.props;
      if (e.stopPropagation(), "Escape" === t) {
        if (e.preventDefault(), M.isEmpty(a)) this.blurEditor();
        else {
          let e = M.clearContent(a);
          f.setSearchState(l, e), this.setState({
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
        return (0, m.enableKeyboardMode)(), !0
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), a = s ? M.setToStartSelection(a) : M.setCollapsedStartSelection(a), this.setEditorState(a), !0;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), a = s ? M.setToEndSelection(a) : M.setCollapsedEndSelection(a), this.setEditorState(a), !0;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = M.clearContent(a);
        return this.setEditorState(e), !0
      }
      return M.getDefaultKeyBinding(e)
    }), R.clearTokenCache()
  }
}
t.default = d.default.connectStores([I.default, S.default], () => {
  var e;
  let t = S.default.getCurrentSearchId(),
    n = S.default.getSearchType(),
    s = null != t && S.default.isSearching(t),
    a = null != t && null !== (e = S.default.getEditorState(t)) && void 0 !== e ? e : M.createEmptyEditorState(O.generateDecorators(T.default)),
    l = I.default.keyboardModeEnabled;
  return {
    searchId: t,
    searchType: n,
    isSearching: s,
    editorState: a,
    hasResults: S.default.hasResults(t),
    keyboardModeEnabled: l
  }
})(j)