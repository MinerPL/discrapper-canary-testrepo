"use strict";
n.d(t, {
  P: function() {
    return _
  },
  Z: function() {
    return d
  }
}), n(47120);
var i = n(836560),
  r = n(555573),
  s = n(376918),
  o = n(695346),
  a = n(590921),
  l = n(152089);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _() {
  return {
    query: null,
    selectedIndex: null,
    isVisible: !1,
    didInitialQuery: !1
  }
}
class d extends i.EventEmitter {
  updateProps(e) {
    let t = this.props.focused !== e.focused,
      n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption,
      i = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
    if (this.props = e, n || i) this.updateResults(i, n), !this.state.didInitialQuery && (this.state = {
      ...this.state,
      didInitialQuery: !0
    });
    else if (t) {
      let e = this.state.query;
      this.setState({
        isVisible: null != e && this.shouldShow(e.resultCount, e.isLoading, e.typeInfo)
      })
    }
  }
  setSelectedIndex(e) {
    this.setState({
      selectedIndex: e
    })
  }
  onTabOrEnter(e) {
    if (!this.state.isVisible) return !1;
    if (null == this.state.selectedIndex) {
      var t;
      let n = null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo.focusMode;
      return !e && (n === a.QZ.MANUAL || n === a.QZ.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0)
    }
    return this.selectResult(this.state.selectedIndex, e, !0)
  }
  onMoveSelection(e) {
    var t, n;
    if (!this.state.isVisible) return !1;
    if (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null === (t = this.state.query) || void 0 === t ? void 0 : t.type) === a.eq.COMMANDS) {
      let e = null === (n = this.state.query.results.commands) || void 0 === n ? void 0 : n[this.state.selectedIndex];
      null != e && r.Sg(this.props.channel.id, e.id)
    }
    return !0
  }
  onMaybeShowAutocomplete() {
    this.emit("update")
  }
  onHideAutocomplete() {
    null != this.state.query && this.setState({
      isVisible: !1
    })
  }
  onResultHover(e) {
    this.props.navigator.setFocus(null), this.setSelectedIndex(null)
  }
  onResultClick(e) {
    this.selectResult(e, !0)
  }
  clearQuery() {
    this.setState({
      query: null,
      isVisible: !1,
      selectedIndex: null
    })
  }
  queryResults() {
    this.updateResults()
  }
  isVisible() {
    return this.state.isVisible
  }
  updateResults() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == this.props.editorRef.current) return;
    let r = (0, l.FW)(this.props),
      u = (0, l.fZ)({
        channel: this.props.channel,
        guild: this.props.guild,
        options: r,
        currentWord: this.props.currentWord,
        currentWordIsAtStart: this.props.currentWordIsAtStart,
        textValue: this.props.textValue,
        optionText: this.props.optionText
      }),
      _ = r.commands !== a.L8.DISABLED ? (0, l.py)(this.props.activeCommandOption, this.props.currentWord) : null;
    if (null == u && null != _) u = _;
    else if (null == u || null != _ && u.type !== _.type) {
      this.clearQuery();
      return
    }
    let {
      type: d,
      typeInfo: c,
      query: E
    } = u, I = i || n && ((null === (e = this.state.query) || void 0 === e ? void 0 : e.queryText) !== E || (null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo) !== c), T = o.fq.getSetting();
    r.allowStickers = r.allowStickers ? T : r.allowStickers;
    let {
      results: h,
      metadata: S
    } = c.queryResults(this.props.channel, this.props.guild, E, r, I), f = 0;
    for (let e of Object.values(h)) Array.isArray(e) && (f += e.length);
    let N = !0 === h.isLoading,
      A = this.shouldShow(f, N, c),
      m = this.state.selectedIndex;
    !A || N ? m = null : null != m && m >= f && (m = f - 1), A && !this.state.isVisible && (0, s.a7)(d, this.props.channel, S), this.setState({
      query: {
        type: d,
        typeInfo: c,
        queryText: E,
        results: h,
        resultCount: f,
        options: r,
        isLoading: N
      },
      isVisible: A,
      selectedIndex: m
    })
  }
  shouldShow(e, t, n) {
    return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty)
  }
  selectResult(e, t, n) {
    var i, r, o;
    if (!this.state.isVisible) return !1;
    let {
      type: l,
      typeInfo: u,
      results: _,
      resultCount: d,
      options: c
    } = this.state.query;
    if (e >= d) return !1;
    let E = null === (r = u.onSelect) || void 0 === r ? void 0 : r.call(u, {
      results: _,
      index: e,
      type: t ? a.QB.SEND : a.QB.INSERT,
      options: c,
      channel: this.props.channel,
      tabOrEnter: n,
      queryText: null === (i = this.state.query) || void 0 === i ? void 0 : i.queryText
    });
    return null != E && (0, s.Qt)(l, null !== (o = E.type) && void 0 !== o ? o : null, this.props.channel, E.metadata), !0
  }
  setState(e) {
    for (let t in e)
      if (e[t] !== this.state[t]) {
        this.state = {
          ...this.state,
          ...e
        }, this.emit("change", this.state);
        return
      }
  }
  constructor(e) {
    super(), u(this, "props", void 0), u(this, "state", void 0), this.props = e, this.state = _()
  }
}