"use strict";
n(47120), n(757143);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(519953),
  l = n(239091),
  u = n(358085),
  _ = n(960048),
  d = n(752305),
  c = n(53529),
  E = n(789952),
  I = n(436660),
  T = n(887490),
  h = n(77224),
  S = n(135223),
  f = n(704875),
  N = n(653309),
  A = n(764156),
  m = n(946278);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class R extends r.PureComponent {
  componentDidMount() {
    this.props.editor.events.addListener("onChange", this.handleOnChange)
  }
  componentDidUpdate(e, t, n) {
    e.editor !== this.props.editor && (e.editor.events.removeListener("onChange", this.handleOnChange), this.props.editor.events.addListener("onChange", this.handleOnChange))
  }
  componentWillUnmount() {
    this.props.editor.events.removeListener("onChange", this.handleOnChange)
  }
  componentDidCatch(e, t) {
    _.Z.captureException(e, {
      extra: t
    }), this.setState({
      initialValue: [...this.props.editor.children]
    })
  }
  decorate(e) {
    var t;
    let {
      editor: n,
      guildId: i,
      decorateExtra: r
    } = this.props;
    return [...(0, S.Z)(n, e, i), ...(0, h.Z)(n, e), ...null !== (t = null == r ? void 0 : r(n, e)) && void 0 !== t ? t : []]
  }
  renderElement(e) {
    var t;
    let {
      guildId: n,
      channelId: r,
      renderExtraElement: s
    } = this.props, {
      attributes: o,
      children: a
    } = e;
    "rtl" === o.dir && (o.style = {
      ...o.style,
      textAlign: "right"
    });
    let l = null !== (t = null == s ? void 0 : s(e)) && void 0 !== t ? t : (0, f.Z)(e, n, r);
    return null != l ? l : (0, i.jsx)("div", {
      ...o,
      children: a
    })
  }
  renderLeaf(e) {
    var t;
    let {
      editor: n,
      renderExtraLeaf: r
    } = this.props, {
      attributes: s,
      children: o
    } = e, a = null !== (t = null == r ? void 0 : r(e)) && void 0 !== t ? t : (0, N.Z)(n, e);
    return null != a ? a : (0, i.jsx)("span", {
      ...s,
      children: o
    })
  }
  handleOnChange() {
    var e, t;
    let {
      editor: n
    } = this.props, i = T.bN.isEditorEmpty(n) && null == n.composition;
    if (i !== this.state.showPlaceholder && this.setState({
        showPlaceholder: i
      }), null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, T.bN.richValue(n)), !1 === this.props.canFocus) {
      let e = a.F3.findDocumentOrShadowRoot(n).getSelection();
      null != e && this.isSelectionPartiallyInside(e) && (null == e || e.removeAllRanges())
    }
  }
  handleKeyDown(e) {
    var t, n;
    if (null != this.props.editor.composition) {
      e.preventDefault(), e.stopPropagation();
      return
    }
    null === (t = (n = this.props).onKeyDown) || void 0 === t || t.call(n, e)
  }
  handleKeyUp(e) {
    var t, n;
    if (null != this.props.editor.composition) {
      e.preventDefault(), e.stopPropagation();
      return
    }
    null === (t = (n = this.props).onKeyUp) || void 0 === t || t.call(n, e)
  }
  handleBeforeInput(e) {
    var t;
    let {
      editor: n
    } = this.props, i = a.F3.findDocumentOrShadowRoot(n).getSelection(), r = null != i && i.rangeCount > 0 ? i.getRangeAt(0) : null, s = null !== (t = e.getTargetRanges()[0]) && void 0 !== t ? t : null;
    if (null == n.composition) {
      if (("insertText" === e.inputType || "insertReplacementText" === e.inputType) && (null == s && (s = r), null != s)) {
        let t = T.bN.toSlateRange(n, s, {
          exactMatch: !1,
          suppressThrow: !0
        });
        null != t && null != e.data && (T.M8.isExpanded(t) ? c.T.withSingleEntry(n, () => {
          n.selection = t, n.deleteFragment(), n.insertText(e.data), e.preventDefault()
        }) : (n.insertText(e.data), e.preventDefault()))
      }
      if (e.inputType.startsWith("deleteContent") && null != r && !r.collapsed) {
        let t = T.bN.toSlateRange(n, r, {
          exactMatch: !0,
          suppressThrow: !0
        });
        null != t && T.M8.isExpanded(t) && (n.selection = t, n.deleteFragment(e.inputType.endsWith("Backward") ? "backward" : "forward"), e.preventDefault())
      }
    }
  }
  handleCompositionStart() {
    var e, t;
    let {
      editor: n
    } = this.props, i = {
      insertedPrefix: !1,
      startedInsideInline: !1
    };
    this.state.showPlaceholder && this.setState({
      showPlaceholder: !1
    });
    let r = null != n.selection && T.M8.isCollapsed(n.selection) ? T.bN.leaf(n, n.selection.anchor.path) : null;
    if (null == r) {
      n.composition = i;
      return
    }
    if (null != (null != n.selection && T.M8.isCollapsed(n.selection) ? T.bN.above(n, {
        at: r[1],
        match: e => T.bN.isInline(n, e),
        mode: "lowest"
      }) : null) && (i.startedInsideInline = !0), T.bN.isEditorEmpty(n)) {
      I.Q.insertNodes(n, {
        text: "\uFEFF"
      }, {
        select: !0
      }), i.insertedPrefix = !0, n.composition = i;
      return
    }
    let s = a.F3.findDocumentOrShadowRoot(this.props.editor).getSelection(),
      o = (null !== (e = null == s ? void 0 : s.rangeCount) && void 0 !== e ? e : 0) > 0 ? null == s ? void 0 : s.getRangeAt(0) : null;
    if (null == (null != o ? T.bN.toSlateRange(n, o, {
        exactMatch: !0,
        suppressThrow: !0
      }) : null) && null != o) {
      let e = T.bN.toSlateRange(n, o, {
        exactMatch: !1,
        suppressThrow: !0
      });
      n.selection = null, null != e ? I.Q.select(n, e) : I.Q.select(n, null !== (t = n.selection) && void 0 !== t ? t : T.bN.end(n, []))
    }
    n.composition = i
  }
  handleCompositionEnd(e) {
    let {
      editor: t
    } = this.props;
    if (null == t.composition) return;
    let {
      insertedPrefix: n
    } = t.composition;
    if (n && null != t.selection && T.M8.isCollapsed(t.selection)) {
      let e = t.selection.anchor.path,
        n = T.aj.leaf(t, e);
      T.bN.withoutNormalizing(t, () => {
        let e = n.text.replace(/^\uFEFF/, "");
        I.Q.delete(t, {
          unit: "offset",
          distance: n.text.length,
          reverse: !0
        }), T.bN.insertText(t, e)
      })
    }
    t.composition = null
  }
  handleFocusCapture(e) {
    let {
      onFocus: t
    } = this.props;
    null == t || t(e)
  }
  handleBlurCapture(e) {
    let {
      editor: t,
      onBlur: n
    } = this.props, i = e.relatedTarget, r = a.F3.findDocumentOrShadowRoot(this.props.editor), s = r.getElementById("textarea-context"), o = r.getElementById("slate-toolbar");
    if (null != i && !(0, E.hasDomParent)(i, s) && !(0, E.hasDomParent)(i, o)) {
      let e = a.F3.findDocumentOrShadowRoot(t).getSelection();
      null != e && this.isSelectionEscaping(e) && e.removeAllRanges()
    }
    null == n || n(e)
  }
  isSelectionPartiallyInside(e) {
    let t = this.containerRef.current;
    if (null != e && null != t)
      for (let n = e.rangeCount - 1; n >= 0; n--) {
        let i = e.getRangeAt(n);
        if ((0, E.hasDomParent)(i.startContainer, t) || !i.collapsed && (0, E.hasDomParent)(i.endContainer, t)) return !0
      }
    return !1
  }
  isSelectionEscaping(e) {
    let t = this.containerRef.current,
      n = !1,
      i = !1;
    if (null != e && null != t)
      for (let r = e.rangeCount - 1; r >= 0; r--) {
        let s = e.getRangeAt(r);
        if ((0, E.hasDomParent)(s.startContainer, t)) {
          if (i) return !0;
          n = !0
        } else {
          if (n) return !0;
          i = !0
        }
        if (!s.collapsed) {
          if ((0, E.hasDomParent)(s.startContainer, t)) {
            if (i) return !0;
            n = !0
          } else {
            if (n) return !0;
            i = !0
          }
        }
      }
    return !1
  }
  handleContextMenu(e) {
    let {
      editor: t
    } = this.props, r = e.pageY, s = window.innerHeight;
    u.isPlatformEmbedded ? (0, l.jW)(e, async () => {
      let {
        default: e
      } = await n.e("41984").then(n.bind(n, 343602));
      return n => (0, i.jsx)(e, {
        ...n,
        editor: t,
        text: T.bN.getSelectedText(t, !0)
      })
    }, {
      align: null != r && null != s && r < s / 2 ? "top" : "bottom",
      enableSpellCheck: !0
    }) : blur()
  }
  handlePasteCapture(e) {
    let {
      editor: t,
      onPaste: n,
      readOnly: i
    } = this.props;
    null == n || n(e), !(e.isDefaultPrevented() || e.isPropagationStopped()) && !i && (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation())
  }
  render() {
    let {
      editor: e,
      className: t,
      containerClassName: n,
      canFocus: r,
      autoFocus: s,
      placeholder: l,
      channelId: u,
      guildId: _,
      onChange: d,
      onFocus: c,
      onBlur: E,
      onKeyDown: I,
      onKeyUp: T,
      decorateExtra: h,
      renderExtraElement: S,
      renderExtraLeaf: f,
      ...N
    } = this.props;
    return (0, i.jsxs)("div", {
      ref: this.containerRef,
      className: n,
      children: [this.state.showPlaceholder ? (0, i.jsx)("div", {
        className: o()(A.placeholder, t),
        "aria-hidden": !0,
        children: l
      }) : null, (0, i.jsx)(a.mH, {
        editor: e,
        value: [...this.state.initialValue],
        children: (0, i.jsx)(a.CX, {
          ...N,
          className: o()(m.markup, A.editor, t),
          decorate: this.decorate,
          renderElement: this.renderElement,
          renderLeaf: this.renderLeaf,
          onFocusCapture: this.handleFocusCapture,
          onBlurCapture: this.handleBlurCapture,
          onContextMenu: this.handleContextMenu,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onDOMBeforeInput: this.handleBeforeInput,
          onCompositionStart: this.handleCompositionStart,
          onCompositionEnd: this.handleCompositionEnd,
          onPasteCapture: this.handlePasteCapture,
          autoFocus: s && !1 !== r,
          autoCorrect: "off",
          "data-can-focus": !1 !== r,
          "aria-label": l,
          "aria-multiline": !0
        })
      })]
    })
  }
  constructor(e) {
    super(e), O(this, "containerRef", r.createRef()), O(this, "state", void 0), this.decorate = this.decorate.bind(this), this.renderElement = this.renderElement.bind(this), this.renderLeaf = this.renderLeaf.bind(this), this.handleOnChange = this.handleOnChange.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleKeyUp = this.handleKeyUp.bind(this), this.handleBeforeInput = this.handleBeforeInput.bind(this), this.handleCompositionStart = this.handleCompositionStart.bind(this), this.handleCompositionEnd = this.handleCompositionEnd.bind(this), this.handleFocusCapture = this.handleFocusCapture.bind(this), this.handleBlurCapture = this.handleBlurCapture.bind(this), this.handleContextMenu = this.handleContextMenu.bind(this), this.handlePasteCapture = this.handlePasteCapture.bind(this), T.bN.isEditorEmpty(e.editor) ? this.state = {
      initialValue: (0, d.H2)().richValue,
      showPlaceholder: !0
    } : this.state = {
      initialValue: T.bN.richValue(e.editor),
      showPlaceholder: !1
    }
  }
}
t.Z = R