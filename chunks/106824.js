n.d(t, {
  P: function() {
return c;
  },
  Z: function() {
return d;
  }
}), n(47120);
var r = n(836560),
  i = n(555573),
  a = n(376918),
  o = n(695346),
  s = n(590921),
  l = n(152089);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function c() {
  return {
query: null,
selectedIndex: null,
isVisible: !1,
didInitialQuery: !1
  };
}
class d extends r.EventEmitter {
  updateProps(e) {
let t = this.props.focused !== e.focused,
  n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption,
  r = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
if (this.props = e, n || r)
  this.updateResults(r, n), !this.state.didInitialQuery && (this.state = {
    ...this.state,
    didInitialQuery: !0
  });
else if (t) {
  let e = this.state.query;
  this.setState({
    isVisible: null != e && this.shouldShow(e.resultCount, e.isLoading, e.typeInfo)
  });
}
  }
  setSelectedIndex(e) {
this.setState({
  selectedIndex: e
});
  }
  onTabOrEnter(e) {
if (!this.state.isVisible)
  return !1;
if (null == this.state.selectedIndex) {
  var t;
  let n = null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo.focusMode;
  return !e && (n === s.QZ.MANUAL || n === s.QZ.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
}
return this.selectResult(this.state.selectedIndex, e, !0);
  }
  onMoveSelection(e) {
var t, n;
if (!this.state.isVisible)
  return !1;
if (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null === (t = this.state.query) || void 0 === t ? void 0 : t.type) === s.eq.COMMANDS) {
  let e = null === (n = this.state.query.results.commands) || void 0 === n ? void 0 : n[this.state.selectedIndex];
  null != e && i.Sg(this.props.channel.id, e.id);
}
return !0;
  }
  onMaybeShowAutocomplete() {
this.emit('update');
  }
  onHideAutocomplete() {
null != this.state.query && this.setState({
  isVisible: !1
});
  }
  onResultHover(e) {
this.props.navigator.setFocus(null), this.setSelectedIndex(null);
  }
  onResultClick(e) {
this.selectResult(e, !0);
  }
  clearQuery() {
this.setState({
  query: null,
  isVisible: !1,
  selectedIndex: null
});
  }
  queryResults() {
this.updateResults();
  }
  isVisible() {
return this.state.isVisible;
  }
  updateResults() {
var e, t;
let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
  r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
if (null == this.props.editorRef.current)
  return;
let i = (0, l.FW)(this.props),
  u = (0, l.fZ)({
    channel: this.props.channel,
    guild: this.props.guild,
    options: i,
    currentWord: this.props.currentWord,
    currentWordIsAtStart: this.props.currentWordIsAtStart,
    textValue: this.props.textValue,
    optionText: this.props.optionText
  }),
  c = i.commands !== s.L8.DISABLED ? (0, l.py)(this.props.activeCommandOption, this.props.currentWord) : null;
if (null == u && null != c)
  u = c;
else if (null == u || null != c && u.type !== c.type) {
  this.clearQuery();
  return;
}
let {
  type: d,
  typeInfo: _,
  query: E
} = u, f = r || n && ((null === (e = this.state.query) || void 0 === e ? void 0 : e.queryText) !== E || (null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo) !== _), h = o.fq.getSetting();
i.allowStickers = i.allowStickers ? h : i.allowStickers;
let {
  results: p,
  metadata: m
} = _.queryResults(this.props.channel, this.props.guild, E, i, f), I = 0;
for (let e of Object.values(p))
  Array.isArray(e) && (I += e.length);
let T = !0 === p.isLoading,
  g = this.shouldShow(I, T, _),
  S = this.state.selectedIndex;
!g || T ? S = null : null != S && S >= I && (S = I - 1), g && !this.state.isVisible && (0, a.a7)(d, this.props.channel, m), this.setState({
  query: {
    type: d,
    typeInfo: _,
    queryText: E,
    results: p,
    resultCount: I,
    options: i,
    isLoading: T
  },
  isVisible: g,
  selectedIndex: S
});
  }
  shouldShow(e, t, n) {
return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
  }
  selectResult(e, t, n) {
var r, i, o;
if (!this.state.isVisible)
  return !1;
let {
  type: l,
  typeInfo: u,
  results: c,
  resultCount: d,
  options: _
} = this.state.query;
if (e >= d)
  return !1;
let E = null === (i = u.onSelect) || void 0 === i ? void 0 : i.call(u, {
  results: c,
  index: e,
  type: t ? s.QB.SEND : s.QB.INSERT,
  options: _,
  channel: this.props.channel,
  tabOrEnter: n,
  queryText: null === (r = this.state.query) || void 0 === r ? void 0 : r.queryText
});
return null != E && (0, a.Qt)(l, null !== (o = E.type) && void 0 !== o ? o : null, this.props.channel, E.metadata), !0;
  }
  setState(e) {
for (let t in e)
  if (e[t] !== this.state[t]) {
    this.state = {
      ...this.state,
      ...e
    }, this.emit('change', this.state);
    return;
  }
  }
  constructor(e) {
super(), u(this, 'props', void 0), u(this, 'state', void 0), this.props = e, this.state = c();
  }
}