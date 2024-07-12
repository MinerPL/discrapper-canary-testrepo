n(47120), n(757143);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(519953),
  l = n(239091),
  u = n(358085),
  c = n(960048),
  d = n(752305),
  _ = n(53529),
  E = n(789952),
  f = n(436660),
  h = n(887490),
  p = n(77224),
  m = n(135223),
  I = n(704875),
  T = n(653309),
  g = n(568377),
  S = n(153521);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class N extends i.PureComponent {
  componentDidMount() {
this.props.editor.events.addListener('onChange', this.handleOnChange);
  }
  componentDidUpdate(e, t, n) {
e.editor !== this.props.editor && (e.editor.events.removeListener('onChange', this.handleOnChange), this.props.editor.events.addListener('onChange', this.handleOnChange));
  }
  componentWillUnmount() {
this.props.editor.events.removeListener('onChange', this.handleOnChange);
  }
  componentDidCatch(e, t) {
c.Z.captureException(e, {
  extra: t
}), this.setState({
  initialValue: [...this.props.editor.children]
});
  }
  decorate(e) {
var t;
let {
  editor: n,
  guildId: r,
  decorateExtra: i
} = this.props;
return [
  ...(0, m.Z)(n, e, r),
  ...(0, p.Z)(n, e),
  ...null !== (t = null == i ? void 0 : i(n, e)) && void 0 !== t ? t : []
];
  }
  renderElement(e) {
var t;
let {
  guildId: n,
  channelId: i,
  renderExtraElement: a
} = this.props, {
  attributes: o,
  children: s
} = e;
'rtl' === o.dir && (o.style = {
  ...o.style,
  textAlign: 'right'
});
let l = null !== (t = null == a ? void 0 : a(e)) && void 0 !== t ? t : (0, I.Z)(e, n, i);
return null != l ? l : (0, r.jsx)('div', {
  ...o,
  children: s
});
  }
  renderLeaf(e) {
var t;
let {
  editor: n,
  renderExtraLeaf: i
} = this.props, {
  attributes: a,
  children: o
} = e, s = null !== (t = null == i ? void 0 : i(e)) && void 0 !== t ? t : (0, T.Z)(n, e);
return null != s ? s : (0, r.jsx)('span', {
  ...a,
  children: o
});
  }
  handleOnChange() {
var e, t;
let {
  editor: n
} = this.props, r = h.bN.isEditorEmpty(n) && null == n.composition;
if (r !== this.state.showPlaceholder && this.setState({
    showPlaceholder: r
  }), null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, h.bN.richValue(n)), !1 === this.props.canFocus) {
  let e = s.F3.findDocumentOrShadowRoot(n).getSelection();
  null != e && this.isSelectionPartiallyInside(e) && (null == e || e.removeAllRanges());
}
  }
  handleKeyDown(e) {
var t, n;
if (null != this.props.editor.composition) {
  e.preventDefault(), e.stopPropagation();
  return;
}
null === (t = (n = this.props).onKeyDown) || void 0 === t || t.call(n, e);
  }
  handleKeyUp(e) {
var t, n;
if (null != this.props.editor.composition) {
  e.preventDefault(), e.stopPropagation();
  return;
}
null === (t = (n = this.props).onKeyUp) || void 0 === t || t.call(n, e);
  }
  handleBeforeInput(e) {
var t;
let {
  editor: n
} = this.props, r = s.F3.findDocumentOrShadowRoot(n).getSelection(), i = null != r && r.rangeCount > 0 ? r.getRangeAt(0) : null, a = null !== (t = e.getTargetRanges()[0]) && void 0 !== t ? t : null;
if (null == n.composition) {
  if (('insertText' === e.inputType || 'insertReplacementText' === e.inputType) && (null == a && (a = i), null != a)) {
    let t = h.bN.toSlateRange(n, a, {
      exactMatch: !1,
      suppressThrow: !0
    });
    null != t && null != e.data && (h.M8.isExpanded(t) ? _.T.withSingleEntry(n, () => {
      n.selection = t, n.deleteFragment(), n.insertText(e.data), e.preventDefault();
    }) : (n.insertText(e.data), e.preventDefault()));
  }
  if (e.inputType.startsWith('deleteContent') && null != i && !i.collapsed) {
    let t = h.bN.toSlateRange(n, i, {
      exactMatch: !0,
      suppressThrow: !0
    });
    null != t && h.M8.isExpanded(t) && (n.selection = t, n.deleteFragment(e.inputType.endsWith('Backward') ? 'backward' : 'forward'), e.preventDefault());
  }
}
  }
  handleCompositionStart() {
var e, t;
let {
  editor: n
} = this.props, r = {
  insertedPrefix: !1,
  startedInsideInline: !1
};
this.state.showPlaceholder && this.setState({
  showPlaceholder: !1
});
let i = null != n.selection && h.M8.isCollapsed(n.selection) ? h.bN.leaf(n, n.selection.anchor.path) : null;
if (null == i) {
  n.composition = r;
  return;
}
if (null != (null != n.selection && h.M8.isCollapsed(n.selection) ? h.bN.above(n, {
    at: i[1],
    match: e => h.bN.isInline(n, e),
    mode: 'lowest'
  }) : null) && (r.startedInsideInline = !0), h.bN.isEditorEmpty(n)) {
  f.Q.insertNodes(n, {
    text: '\uFEFF'
  }, {
    select: !0
  }), r.insertedPrefix = !0, n.composition = r;
  return;
}
let a = s.F3.findDocumentOrShadowRoot(this.props.editor).getSelection(),
  o = (null !== (e = null == a ? void 0 : a.rangeCount) && void 0 !== e ? e : 0) > 0 ? null == a ? void 0 : a.getRangeAt(0) : null;
if (null == (null != o ? h.bN.toSlateRange(n, o, {
    exactMatch: !0,
    suppressThrow: !0
  }) : null) && null != o) {
  let e = h.bN.toSlateRange(n, o, {
    exactMatch: !1,
    suppressThrow: !0
  });
  n.selection = null, null != e ? f.Q.select(n, e) : f.Q.select(n, null !== (t = n.selection) && void 0 !== t ? t : h.bN.end(n, []));
}
n.composition = r;
  }
  handleCompositionEnd(e) {
let {
  editor: t
} = this.props;
if (null == t.composition)
  return;
let {
  insertedPrefix: n
} = t.composition;
if (n && null != t.selection && h.M8.isCollapsed(t.selection)) {
  let e = t.selection.anchor.path,
    n = h.aj.leaf(t, e);
  h.bN.withoutNormalizing(t, () => {
    let e = n.text.replace(/^\uFEFF/, '');
    f.Q.delete(t, {
      unit: 'offset',
      distance: n.text.length,
      reverse: !0
    }), h.bN.insertText(t, e);
  });
}
t.composition = null;
  }
  handleFocusCapture(e) {
let {
  onFocus: t
} = this.props;
null == t || t(e);
  }
  handleBlurCapture(e) {
let {
  editor: t,
  onBlur: n
} = this.props, r = e.relatedTarget, i = s.F3.findDocumentOrShadowRoot(this.props.editor), a = i.getElementById('textarea-context'), o = i.getElementById('slate-toolbar');
if (null != r && !(0, E.hasDomParent)(r, a) && !(0, E.hasDomParent)(r, o)) {
  let e = s.F3.findDocumentOrShadowRoot(t).getSelection();
  null != e && this.isSelectionEscaping(e) && e.removeAllRanges();
}
null == n || n(e);
  }
  isSelectionPartiallyInside(e) {
let t = this.containerRef.current;
if (null != e && null != t)
  for (let n = e.rangeCount - 1; n >= 0; n--) {
    let r = e.getRangeAt(n);
    if ((0, E.hasDomParent)(r.startContainer, t) || !r.collapsed && (0, E.hasDomParent)(r.endContainer, t))
      return !0;
  }
return !1;
  }
  isSelectionEscaping(e) {
let t = this.containerRef.current,
  n = !1,
  r = !1;
if (null != e && null != t)
  for (let i = e.rangeCount - 1; i >= 0; i--) {
    let a = e.getRangeAt(i);
    if ((0, E.hasDomParent)(a.startContainer, t)) {
      if (r)
        return !0;
      n = !0;
    } else {
      if (n)
        return !0;
      r = !0;
    }
    if (!a.collapsed) {
      if ((0, E.hasDomParent)(a.startContainer, t)) {
        if (r)
          return !0;
        n = !0;
      } else {
        if (n)
          return !0;
        r = !0;
      }
    }
  }
return !1;
  }
  handleContextMenu(e) {
let {
  editor: t
} = this.props, i = e.pageY, a = window.innerHeight;
u.isPlatformEmbedded ? (0, l.jW)(e, async () => {
  let {
    default: e
  } = await n.e('41984').then(n.bind(n, 343602));
  return n => (0, r.jsx)(e, {
    ...n,
    editor: t,
    text: h.bN.getSelectedText(t, !0)
  });
}, {
  align: null != i && null != a && i < a / 2 ? 'top' : 'bottom',
  enableSpellCheck: !0
}) : blur();
  }
  handlePasteCapture(e) {
let {
  editor: t,
  onPaste: n,
  readOnly: r
} = this.props;
null == n || n(e), !(e.isDefaultPrevented() || e.isPropagationStopped()) && !r && (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation());
  }
  render() {
let {
  editor: e,
  className: t,
  containerClassName: n,
  canFocus: i,
  autoFocus: a,
  placeholder: l,
  channelId: u,
  guildId: c,
  onChange: d,
  onFocus: _,
  onBlur: E,
  onKeyDown: f,
  onKeyUp: h,
  decorateExtra: p,
  renderExtraElement: m,
  renderExtraLeaf: I,
  ...T
} = this.props;
return (0, r.jsxs)('div', {
  ref: this.containerRef,
  className: n,
  children: [
    this.state.showPlaceholder ? (0, r.jsx)('div', {
      className: o()(g.placeholder, t),
      'aria-hidden': !0,
      children: l
    }) : null,
    (0, r.jsx)(s.mH, {
      editor: e,
      value: [...this.state.initialValue],
      children: (0, r.jsx)(s.CX, {
        ...T,
        className: o()(S.markup, g.editor, t),
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
        autoFocus: a && !1 !== i,
        autoCorrect: 'off',
        'data-can-focus': !1 !== i,
        'aria-label': l,
        'aria-multiline': !0
      })
    })
  ]
});
  }
  constructor(e) {
super(e), A(this, 'containerRef', i.createRef()), A(this, 'state', void 0), this.decorate = this.decorate.bind(this), this.renderElement = this.renderElement.bind(this), this.renderLeaf = this.renderLeaf.bind(this), this.handleOnChange = this.handleOnChange.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleKeyUp = this.handleKeyUp.bind(this), this.handleBeforeInput = this.handleBeforeInput.bind(this), this.handleCompositionStart = this.handleCompositionStart.bind(this), this.handleCompositionEnd = this.handleCompositionEnd.bind(this), this.handleFocusCapture = this.handleFocusCapture.bind(this), this.handleBlurCapture = this.handleBlurCapture.bind(this), this.handleContextMenu = this.handleContextMenu.bind(this), this.handlePasteCapture = this.handlePasteCapture.bind(this), h.bN.isEditorEmpty(e.editor) ? this.state = {
  initialValue: (0, d.H2)().richValue,
  showPlaceholder: !0
} : this.state = {
  initialValue: h.bN.richValue(e.editor),
  showPlaceholder: !1
};
  }
}
t.Z = N;