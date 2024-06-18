"use strict";
n(47120), n(757143);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(239091),
  u = n(555573),
  _ = n(998698),
  d = n(459273),
  c = n(358085),
  E = n(62883),
  I = n(752305),
  T = n(981631);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = /(\t|\s)/;
class f extends r.PureComponent {
  componentDidMount() {
    !this.props.disableAutoFocus && (Promise.resolve().then(() => {
      var e;
      let {
        value: t
      } = this.props;
      null === (e = this._ref) || void 0 === e || e.setSelection(t.length, t.length)
    }), this.focus()), null != _.Z.getActiveCommand(this.props.channel.id) && u.Po({
      channelId: this.props.channel.id,
      command: null,
      section: null
    })
  }
  componentDidUpdate(e, t) {
    this.state.nextSelection !== t.nextSelection && null != this._ref && this._ref.setSelection(this.state.nextSelection, this.state.nextSelection)
  }
  getCurrentWord() {
    let e = this._ref;
    if (null == e) return {
      word: null,
      isAtStart: !1
    };
    let {
      value: t
    } = this.props;
    if (0 === t.trim().length) return {
      word: null,
      isAtStart: !1
    };
    let n = e.selectionStart,
      i = e.selectionEnd;
    for (; n > 0 && !S.test(t[n - 1]);) {
      ;
      n--
    }
    return {
      word: t.slice(n, i),
      isAtStart: 0 === n
    }
  }
  blur() {
    let {
      _ref: e
    } = this;
    null != e && e.blur()
  }
  submit(e) {
    return e.preventDefault(), this.props.onSubmit(this.props.value)
  }
  insertAutocomplete(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      {
        word: i
      } = this.getCurrentWord();
    if (null == i) this.insertText(e, t, n);
    else {
      let t = this._ref;
      if (null == t) return;
      let r = t.value.slice(0, t.selectionStart - i.length),
        s = t.value.slice(t.selectionEnd);
      this._insertText(e, r, s, n)
    }
  }
  insertText(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      i = this._ref;
    if (null == i) return;
    let r = i.value.slice(0, i.selectionStart),
      s = i.value.slice(i.selectionEnd);
    this._insertText(e, r, s, n)
  }
  _insertText(e, t, n, i) {
    if (null == this._ref) return;
    i && (e += " ");
    let r = t + e + n,
      {
        onChange: s
      } = this.props;
    null == s || s(null, r, (0, I.JM)(r));
    let o = t.length + e.length;
    this.setState({
      nextSelection: o
    }, () => {
      this.props.maybeShowAutocomplete()
    })
  }
  hasOpenCodeBlock() {
    let e = this._ref;
    if (null == e) return !1;
    let t = this.props.value.slice(0, e.selectionStart).match(/```/g);
    return null != t && t.length > 0 && t.length % 2 != 0
  }
  render() {
    let {
      value: e,
      disabled: t,
      placeholder: n,
      required: r,
      onResize: s,
      className: l,
      id: u,
      submitting: _,
      textAreaPaddingClassName: c,
      spellcheckEnabled: E,
      "aria-controls": I,
      "aria-expanded": h,
      "aria-activedescendant": S
    } = this.props;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.d9, {
        event: T.CkL.GLOBAL_CLIPBOARD_PASTE,
        handler: this.handleGlobalPaste
      }), (0, i.jsx)(a.TextAreaAutosize, {
        ref: this.handleSetRef,
        className: o()(l, c),
        id: u,
        rows: 1,
        fontWidthEstimate: 6,
        placeholder: n,
        disabled: t || _,
        required: r,
        onChange: this.handleOnChange,
        onResize: s,
        onKeyPress: this.handleKeyPress,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        onPaste: this.handlePaste,
        onClick: this.handleClick,
        onContextMenu: this.handleContextMenu,
        value: t ? "" : e,
        tabIndex: 0,
        spellCheck: E,
        "aria-controls": I,
        "aria-expanded": h,
        "aria-activedescendant": S,
        "aria-haspopup": "listbox",
        "aria-autocomplete": "list",
        "aria-multiline": !0
      })]
    })
  }
  handleTabOrEnterDown(e) {
    e.which === T.yXg.TAB && this.props.onTab() ? (e.preventDefault(), e.stopPropagation()) : e.which === T.yXg.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === T.yXg.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === T.yXg.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1))
  }
  insertEmoji(e, t) {
    this.insertText("".concat(":").concat(e.name).concat(":"), void 0, t)
  }
  getFirstText() {
    return this.props.value
  }
  constructor(...e) {
    super(...e), h(this, "_ref", void 0), h(this, "state", {
      nextSelection: -1
    }), h(this, "focus", () => {
      let {
        _ref: e
      } = this;
      null != e && e.focus()
    }), h(this, "handleSetRef", e => {
      this._ref = e
    }), h(this, "handleKeyPress", e => {
      if (e.which === T.yXg.ENTER) {
        if (!e.shiftKey && !this.hasOpenCodeBlock() && (!this.props.disableEnterToSubmit || e.ctrlKey)) return e.preventDefault(), this.props.onSubmit(this.props.value)
      }
    }), h(this, "handleKeyDown", e => {
      switch (e.which) {
        case T.yXg.ARROW_DOWN:
          this.props.moveSelection(1) && e.preventDefault();
          break;
        case T.yXg.N:
          e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
          break;
        case T.yXg.ARROW_UP:
          this.props.moveSelection(-1) && e.preventDefault();
          break;
        case T.yXg.P:
          e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
          break;
        case T.yXg.TAB:
        case T.yXg.ENTER:
          this.handleTabOrEnterDown(e)
      }
      let {
        onKeyDown: t
      } = this.props;
      null == t || t(e)
    }), h(this, "handleKeyUp", e => {
      switch (e.which) {
        case T.yXg.ARROW_RIGHT:
        case T.yXg.ARROW_LEFT:
        case T.yXg.HOME:
        case T.yXg.END:
          this.props.maybeShowAutocomplete()
      }
      let {
        onKeyUp: t
      } = this.props;
      null == t || t(e)
    }), h(this, "handleGlobalPaste", e => {
      let {
        event: t
      } = e;
      !this.handlePaste(t) && this.focus()
    }), h(this, "handlePaste", e => {
      let t = this.props.onPaste(e);
      return t && e.preventDefault(), t
    }), h(this, "handleClick", () => {
      this.props.maybeShowAutocomplete()
    }), h(this, "handleContextMenu", e => {
      c.isPlatformEmbedded && (0, l.jW)(e, async () => {
        let {
          default: e
        } = await n.e("99989").then(n.bind(n, 889662));
        return t => (0, i.jsx)(e, {
          ...t,
          isChannelTextArea: !0,
          text: (0, E.getSelectionText)()
        })
      }, {
        align: "bottom",
        enableSpellCheck: !0
      })
    }), h(this, "handleOnChange", e => {
      let {
        onChange: t,
        allowNewLines: n
      } = this.props, i = e.currentTarget.value, r = n ? i : i.replace("\n", "");
      null == t || t(e, r, (0, I.JM)(r))
    })
  }
}
t.Z = f