"use strict";
n.r(t), n.d(t, {
  applyTokensAsEntities: function() {
    return A
  },
  clearContent: function() {
    return L
  },
  createEmptyEditorState: function() {
    return x
  },
  deleteContent: function() {
    return M
  },
  getDefaultKeyBinding: function() {
    return l()
  },
  getFirstTextBlock: function() {
    return O
  },
  isEmpty: function() {
    return B
  },
  miscCommand: function() {
    return b
  },
  replaceAllContent: function() {
    return P
  },
  scrollCursorIntoView: function() {
    return U
  },
  setCollapsedEndSelection: function() {
    return D
  },
  setCollapsedSelection: function() {
    return w
  },
  setCollapsedStartSelection: function() {
    return y
  },
  setToEndSelection: function() {
    return G
  },
  setToStartSelection: function() {
    return j
  },
  truncateContent: function() {
    return F
  },
  updateContent: function() {
    return N
  }
}), n("47120"), n("653041");
var r = n("371917"),
  i = n("421520"),
  l = n.n(i),
  s = n("563751"),
  o = n.n(s),
  u = n("608382"),
  a = n.n(u),
  c = n("722661"),
  d = n.n(c),
  f = n("225389"),
  S = n.n(f),
  p = n("71716"),
  g = n.n(p),
  h = n("869045"),
  E = n.n(h),
  _ = n("110599"),
  C = n.n(_),
  I = n("801539"),
  m = n.n(I),
  T = n("887868"),
  v = n.n(T);

function R(e, t, n, i) {
  let l = i.getCurrentContent(),
    s = null;
  null != e && (s = (l = l.createEntity(...e)).getLastCreatedEntityKey());
  let o = l.getFirstBlock(),
    u = new r.SelectionState({
      anchorKey: o.getKey(),
      anchorOffset: t,
      focusKey: o.getKey(),
      focusOffset: n
    });
  return l = r.Modifier.applyEntity(l, u, s), r.EditorState.set(i, {
    currentContent: l
  })
}

function N(e, t, n, i) {
  let l, s;
  let u = t.getCurrentContent(),
    a = u.getFirstBlock(),
    c = a.getText();
  "number" == typeof n ? (n > c.length && (n = c.length), null != i && i > c.length && (i = c.length), l = new r.SelectionState({
    anchorKey: a.getKey(),
    anchorOffset: n,
    focusKey: a.getKey(),
    focusOffset: null != i && 0 !== i ? i : n
  })) : l = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    f = o()(u, l);
  return l.isCollapsed() ? (u = r.Modifier.insertText(u, l, e, d, f), s = "insert-characters") : (u = r.Modifier.replaceText(u, l, e, d, f), s = "replace-characters"), r.EditorState.push(t, u, s)
}

function M(e, t) {
  switch (e) {
    case "delete":
      return m()(t);
    case "delete-word":
      return S()(t);
    case "backspace":
      return C()(t);
    case "backspace-word":
      return d()(t);
    case "backspace-to-start-of-line":
      return a()(t);
    default:
      return t
  }
}

function b(e, t) {
  switch (e) {
    case "transpose-characters":
      return v()(t);
    case "move-selection-to-start-of-block":
      return E()(t);
    case "move-selection-to-end-of-block":
      return g()(t);
    default:
      return t
  }
}

function O(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function A(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = t.getCurrentContent(),
    i = r.getFirstBlock(),
    l = i.getText(),
    s = [];
  return i.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = r.getEntity(i.getEntityAt(e)).getType(),
      o = l.substring(e, t);
    s.push({
      processed: !1,
      type: n,
      start: e,
      end: t,
      text: o
    })
  }), e.forEach(e => {
    let r = !1;
    if (s.forEach(n => {
        let {
          type: i,
          start: l,
          end: s
        } = e, o = e.getFullMatch();
        !n.processed && (n.type === i && n.start === l && n.text === o ? (n.processed = !0, r = !0) : (l >= n.start && l < n.end || s > n.start && s <= n.end) && (n.processed = !0, t = R(null, n.start, n.end, t)))
      }), r) return;
    let i = n[e.type];
    t = R([e.type, null != i && i.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), s.forEach(e => {
    !e.processed && (t = R(null, e.start, e.end, t))
  }), t
}

function x(e) {
  return r.EditorState.createEmpty(new r.CompositeDecorator(e))
}

function L(e) {
  let t = r.EditorState.push(e, r.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t
}

function P(e, t) {
  let n = O(t);
  return N(e, t, 0, n.length)
}

function w(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), r.EditorState.forceSelection(t, n)
}

function D(e) {
  return w(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function y(e) {
  return w(0, e)
}

function j(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), r.EditorState.forceSelection(e, t)
}

function G(e) {
  let t = O(e),
    n = e.getSelection();
  return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), r.EditorState.forceSelection(e, n)
}

function F(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
    n = O(e);
  if (n.length > t) {
    let i = e.getSelection();
    e = N("", e, t, n.length), i.getAnchorOffset() > t && (i = i.set("anchorOffset", t)), i.getFocusOffset() > t && (i = i.set("focusOffset", t)), e = r.EditorState.forceSelection(e, i)
  }
  return e
}

function U(e) {
  let t = window.getSelection();
  if (null == t || "Caret" !== t.type || null == e) return;
  let n = t.getRangeAt(0);
  if (! function(e, t) {
      for (; null != e;) {
        if (e === t) return !0;
        e = e.parentNode
      }
      return !1
    }(n.commonAncestorContainer, e)) return;
  let r = n.getClientRects()[0],
    i = e.getClientRects()[0];
  if (null == r || null == i) return;
  let l = r.left - i.left + e.scrollLeft;
  l < e.scrollLeft ? e.scrollLeft = l - 10 : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3)
}

function B(e) {
  return 0 === O(e).length
}