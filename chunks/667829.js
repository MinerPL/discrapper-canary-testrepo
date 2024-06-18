"use strict";
n.d(t, {
  Z: function() {
    return b
  }
}), n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(218887),
  _ = n.n(u),
  d = n(729594),
  c = n(873546),
  E = n(430742),
  I = n(166459),
  T = n(911969),
  h = n(476326),
  S = n(998698),
  f = n(710845),
  N = n(117530),
  A = n(459273),
  m = n(403182),
  O = n(541716),
  R = n(752305),
  C = n(30465),
  p = n(140963),
  g = n(4484),
  L = n(925994),
  v = n(981631),
  D = n(689938),
  M = n(838329);

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
new f.Z("ChannelEditor.tsx");
let y = function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  },
  U = {
    12: M.fontSize12Padding,
    14: M.fontSize14Padding,
    15: M.fontSize15Padding,
    16: M.fontSize16Padding,
    18: M.fontSize18Padding,
    20: M.fontSize20Padding,
    24: M.fontSize24Padding
  };
class b extends r.Component {
  componentDidMount() {
    this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener("selectionchange", this.handleSelectionChange), window.addEventListener("beforeunload", this.handleBeforeUnload)
  }
  componentDidUpdate(e) {
    if (this.fixFocus(e), this.props.useSlate !== e.useSlate) {
      var t, n;
      let e;
      e = this.props.useSlate ? this.props.textValue : (0, L.sk)(this.props.richValue, {
        mode: "plain"
      }), null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, null, e, (0, R.JM)(e))
    } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled()
  }
  componentWillUnmount() {
    var e;
    this.saveCurrentText(), null === (e = this._unsubscribe) || void 0 === e || e.call(this), window.removeEventListener("beforeunload", this.handleBeforeUnload), document.removeEventListener("selectionchange", this.handleSelectionChange), this._focusBlurQueue = null, this._unsubscribe = null
  }
  blur() {
    let e = this.ref.current;
    null != e && e.blur()
  }
  submit(e) {
    var t;
    null === (t = this.ref.current) || void 0 === t || t.submit(e)
  }
  insertEmoji(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      {
        textValue: i
      } = this.props,
      r = this.ref.current;
    null != e && null != r && (n && !i.endsWith(" ") && r.insertText(" ", void 0, !1), r.insertEmoji(e, t), t && this.focus())
  }
  insertGIF(e) {
    let {
      textValue: t
    } = this.props, n = this.ref.current;
    null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(e.url))
  }
  insertSound(e) {
    let {
      textValue: t
    } = this.props, n = this.ref.current;
    null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText("<sound:" + e.soundId + ">"))
  }
  handleOuterClick() {
    this.focus()
  }
  clearValue() {
    let {
      channel: e,
      type: t
    } = this.props;
    this.setState({
      focused: !0,
      submitting: !1
    }), E.Z.saveDraft(e.id, "", t.drafts.type)
  }
  getCurrentWord() {
    var e;
    let t = this.ref.current;
    return null !== (e = null == t ? void 0 : t.getCurrentWord()) && void 0 !== e ? e : {
      word: null,
      isAtStart: !1
    }
  }
  insertAutocomplete(e, t, n) {
    let i = this.ref.current;
    return null == i ? void 0 : i.insertAutocomplete(e, t, n)
  }
  getCurrentCommandOption() {
    var e, t;
    let n = this.ref.current;
    return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOption) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
  }
  getCurrentCommandOptionValue() {
    var e, t;
    let n = this.ref.current;
    return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOptionValue) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : []
  }
  getCommandOptionValues() {
    var e, t;
    let n = this.ref.current;
    return null !== (t = null == n ? void 0 : null === (e = n.getCommandOptionValues) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : {}
  }
  getFirstText() {
    var e;
    let t = this.ref.current;
    return null !== (e = null == t ? void 0 : t.getFirstText()) && void 0 !== e ? e : null
  }
  getSlateEditor() {
    var e, t;
    let n = this.ref.current;
    return null !== (t = null == n ? void 0 : null === (e = n.getSlateEditor) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
  }
  fixFocus(e) {
    e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus()
  }
  appendText(e, t) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    null === (n = this.ref.current) || void 0 === n || n.insertText(e, t, i)
  }
  getPlaceholder() {
    let {
      disabled: e,
      placeholder: t,
      isPreviewing: n
    } = this.props;
    return e && !n ? D.Z.Messages.NO_SEND_MESSAGES_PERMISSION_PLACEHOLDER : t
  }
  render() {
    var e, t, n, r, s, a;
    let {
      textValue: l,
      richValue: u,
      disabled: _,
      onChange: d,
      onKeyDown: E,
      onResize: I,
      onSubmit: T,
      channel: h,
      type: S,
      fontSize: f,
      useSlate: N,
      spellcheckEnabled: m,
      useNewSlashCommands: C,
      canOnlyUseTextCommands: L,
      className: D,
      id: P,
      required: y,
      maxCharacterCount: b,
      allowNewLines: G,
      "aria-describedby": w,
      "aria-labelledby": k,
      accessibilityLabel: B
    } = this.props, {
      submitting: x,
      popup: V
    } = this.state, Z = {
      channel: h,
      className: o()(D, M.textArea, {
        [M.textAreaSlate]: N,
        [M.textAreaDisabled]: _ || x
      }),
      id: P,
      placeholder: this.getPlaceholder(),
      required: y,
      accessibilityLabel: B,
      disabled: _ || !1,
      submitting: x,
      isEdit: S === O.I.EDIT,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onPaste: this.handlePaste,
      onTab: this.handleTab,
      onEnter: this.handleEnter,
      moveSelection: this.handleMoveSelection,
      maybeShowAutocomplete: this.maybeShowAutocomplete,
      hideAutocomplete: this.hideAutocomplete,
      allowNewLines: G,
      onChange: d,
      onResize: I,
      onKeyDown: E,
      onSubmit: T,
      textAreaPaddingClassName: o()(U[f], {
        [M.textAreaWithoutAttachmentButton]: S !== O.I.NORMAL && S !== O.I.OVERLAY && S !== O.I.THREAD_CREATION && S !== O.I.SIDEBAR,
        [M.textAreaForPostCreation]: S === O.I.CREATE_FORUM_POST,
        [M.textAreaCustomGift]: S === O.I.CUSTOM_GIFT,
        [M.textAreaForUserProfile]: S === O.I.USER_PROFILE
      }),
      spellcheckEnabled: m,
      useNewSlashCommands: C,
      disableAutoFocus: c.tq || null !== (n = S.disableAutoFocus) && void 0 !== n && n,
      disableEnterToSubmit: null !== (r = null === (e = S.submit) || void 0 === e ? void 0 : e.disableEnterToSubmit) && void 0 !== r && r,
      "aria-controls": null !== (s = V.id) && void 0 !== s ? s : void 0,
      "aria-haspopup": "listbox",
      "aria-expanded": null !== V.id || void 0,
      "aria-activedescendant": null !== (a = V.activeDescendant) && void 0 !== a ? a : void 0,
      "aria-invalid": l.length > b,
      "aria-describedby": w,
      "aria-labelledby": k,
      "aria-autocomplete": "list"
    }, H = N ? (0, i.jsx)(g.Z, {
      ref: this.ref,
      ...Z,
      type: S,
      value: _ ? (0, R.JM)("") : u,
      canUseCommands: null === (t = S.commands) || void 0 === t ? void 0 : t.enabled,
      canOnlyUseTextCommands: L
    }) : (0, i.jsx)(p.Z, {
      ref: this.ref,
      ...Z,
      value: _ ? "" : l
    });
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(A.d9, {
        event: v.CkL.INSERT_TEXT,
        handler: this.handleInsertText
      }), (0, i.jsx)(A.d9, {
        event: v.CkL.CLEAR_TEXT,
        handler: this.handleClearText
      }), H]
    })
  }
  constructor(e) {
    var t;
    super(e), t = this, P(this, "ref", r.createRef()), P(this, "_focusBlurQueue", Promise.resolve()), P(this, "_unsubscribe", void 0), P(this, "handleSelectionChange", () => {
      if (this.props.focused) {
        var e, t, n;
        this.props.onSelectionChanged(null === (t = (n = document).getSelection) || void 0 === t ? void 0 : null === (e = t.call(n)) || void 0 === e ? void 0 : e.toString())
      }
    }), P(this, "focus", () => {
      var e;
      null === (e = this._focusBlurQueue) || void 0 === e || e.then(() => {
        this.setState({
          focused: !0
        }, () => {
          let e = this.ref.current;
          null != e && e.focus()
        })
      })
    }), P(this, "saveCurrentText", function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        {
          type: n,
          channel: i
        } = t.props;
      n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(i.id))
    }), P(this, "handleBeforeUnload", () => this.saveCurrentText()), P(this, "saveCurrentTextThrottled", l().throttle(this.saveCurrentText.bind(this, !1), 500)), P(this, "handleEnter", e => {
      var t, n;
      return null === (t = (n = this.props).onEnter) || void 0 === t ? void 0 : t.call(n, e)
    }), P(this, "handleTab", () => {
      var e, t;
      return null === (e = (t = this.props).onTab) || void 0 === e ? void 0 : e.call(t)
    }), P(this, "handleMoveSelection", e => {
      var t, n;
      return null === (t = (n = this.props).onMoveSelection) || void 0 === t ? void 0 : t.call(n, e)
    }), P(this, "maybeShowAutocomplete", () => {
      var e, t;
      return null === (e = (t = this.props).onMaybeShowAutocomplete) || void 0 === e ? void 0 : e.call(t)
    }), P(this, "hideAutocomplete", () => {
      var e, t;
      return null === (e = (t = this.props).onHideAutocomplete) || void 0 === e ? void 0 : e.call(t)
    }), P(this, "handleSaveCurrentText", e => {
      E.Z.saveDraft(e, this.props.textValue, this.props.type.drafts.type)
    }), P(this, "handleClearText", () => {
      var e, t;
      null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, null, "", (0, R.JM)(""))
    }), P(this, "handleInsertText", e => {
      let {
        plainText: t,
        rawText: n,
        addSpace: i = !1
      } = e;
      !this.props.disabled && (this.appendText(t, n, i), this.focus())
    }), P(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props, {
        focused: n
      } = this.state;
      null == t || t(e), !n && this.setState({
        focused: !0
      })
    }), P(this, "handleBlur", e => {
      let {
        onBlur: t
      } = this.props, {
        focused: n
      } = this.state;
      null == t || t(e), n && this.setState({
        focused: !1
      })
    }), P(this, "handlePaste", e => {
      let {
        channel: t,
        canPasteFiles: n,
        uploadPromptCharacterCount: i,
        promptToUpload: r,
        maxCharacterCount: s,
        type: o
      } = this.props;
      if (null == r || !t.isPrivate() && !n || t.isPrivate() && t.isManaged()) return !1;
      let {
        files: a
      } = function(e, t) {
        let n = [],
          i = [],
          r = null,
          s = null;
        for (let t of e.items)
          if ("file" === t.kind) {
            let e = t.getAsFile();
            if (null == e) continue;
            null != e.path && e.path.length > 0 ? n.push(e) : i.push(e)
          } else "string" === t.kind && ("text/plain" === t.type && null == r ? r = t : "text/html" === t.type && null == s && (s = t));
        if (n.length > 0) return {
          files: n
        };
        if (i.length > 0) {
          if (1 === i.length && "image/png" === i[0].type && null != s) {
            var o;
            let t = i[0],
              n = null !== (o = function(e) {
                let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
                if (null != t) {
                  let e;
                  try {
                    let {
                      pathname: n
                    } = d.parse(t.src);
                    null != n && n.length > 0 && (e = _().basename(n).split(".")[0])
                  } catch (e) {}
                  if (null != e && e.length > 0) return "".concat(e, ".png")
                }
              }(e.getData(s.type))) && void 0 !== o ? o : t.name;
            return {
              files: [(0, m.dp)(t, n, t.type)]
            }
          }
          return {
            files: i
          }
        }
        if (null != r && null != t) {
          let n = e.getData(r.type);
          if (n.length > t) {
            let e = new Blob([n], {
              type: "text/plain"
            });
            return {
              files: [(0, m.dp)(e, "message.txt")],
              convertedStringToFile: !0
            }
          }
        }
        return {
          files: []
        }
      }(e.clipboardData, o.uploadLongMessages ? null != i ? i : s : null);
      return y("onPaste", [...e.clipboardData.items].map(e => {
        if ("file" !== e.kind) return {
          kind: e.kind,
          type: e.type
        };
        {
          let t = e.getAsFile();
          return {
            kind: e.kind,
            type: e.type,
            name: null == t ? void 0 : t.name,
            path: null == t ? void 0 : t.path
          }
        }
      })), 0 !== a.length && (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), ((e, n) => {
        var i, s;
        let a = S.Z.getActiveCommand(t.id);
        if (null == a) return r(e, t, o.drafts.type, {
          requireConfirm: !0,
          showLargeMessageDialog: n
        });
        let l = null !== (i = o.drafts.commandType) && void 0 !== i ? i : o.drafts.type,
          u = null,
          _ = S.Z.getActiveOption(t.id);
        if (null != (u = (null == _ ? void 0 : _.type) === T.jw.ATTACHMENT ? _ : null === (s = a.options) || void 0 === s ? void 0 : s.find(e => {
            if (e.type === T.jw.ATTACHMENT) return null == N.Z.getUpload(t.id, e.name, l)
          }))) I.Z.setFile({
          channelId: t.id,
          id: u.name,
          draftType: l,
          file: {
            id: u.name,
            platform: h.ow.WEB,
            file: e[0]
          }
        })
      })(a), this.focus(), !0)
    }), this._unsubscribe = C.p8.subscribe(e => {
      requestAnimationFrame(() => {
        this.setState({
          popup: e
        })
      })
    }), this.state = {
      focused: !1,
      submitting: !1,
      popup: C.p8.getState()
    }
  }
}