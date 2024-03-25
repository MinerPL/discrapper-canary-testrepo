"use strict";
n.r(t), n.d(t, {
  getDefaultKeyBinding: function() {
    return a
  },
  updateContent: function() {
    return M
  },
  deleteContent: function() {
    return k
  },
  miscCommand: function() {
    return T
  },
  getFirstTextBlock: function() {
    return N
  },
  applyTokensAsEntities: function() {
    return A
  },
  createEmptyEditorState: function() {
    return F
  },
  clearContent: function() {
    return I
  },
  replaceAllContent: function() {
    return w
  },
  setCollapsedSelection: function() {
    return R
  },
  setCollapsedEndSelection: function() {
    return L
  },
  setCollapsedStartSelection: function() {
    return _
  },
  setToStartSelection: function() {
    return B
  },
  setToEndSelection: function() {
    return O
  },
  truncateContent: function() {
    return H
  },
  scrollCursorIntoView: function() {
    return z
  },
  isEmpty: function() {
    return Z
  }
}), n("222007"), n("424973");
var l = n("98159"),
  r = n("952352"),
  a = n.n(r),
  i = n("401816"),
  s = n.n(i),
  o = n("958551"),
  c = n.n(o),
  u = n("661183"),
  d = n.n(u),
  f = n("823821"),
  m = n.n(f),
  h = n("928429"),
  g = n.n(h),
  p = n("234553"),
  x = n.n(p),
  C = n("65994"),
  b = n.n(C),
  v = n("718144"),
  S = n.n(v),
  j = n("640330"),
  E = n.n(j);

function y(e, t, n, r) {
  let a = r.getCurrentContent(),
    i = null;
  null != e && (i = (a = a.createEntity(...e)).getLastCreatedEntityKey());
  let s = a.getFirstBlock(),
    o = new l.SelectionState({
      anchorKey: s.getKey(),
      anchorOffset: t,
      focusKey: s.getKey(),
      focusOffset: n
    });
  return a = l.Modifier.applyEntity(a, o, i), l.EditorState.set(r, {
    currentContent: a
  })
}

function M(e, t, n, r) {
  let a, i;
  let o = t.getCurrentContent(),
    c = o.getFirstBlock(),
    u = c.getText();
  "number" == typeof n ? (n > u.length && (n = u.length), null != r && r > u.length && (r = u.length), a = new l.SelectionState({
    anchorKey: c.getKey(),
    anchorOffset: n,
    focusKey: c.getKey(),
    focusOffset: null != r && 0 !== r ? r : n
  })) : a = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    f = s(o, a);
  return a.isCollapsed() ? (o = l.Modifier.insertText(o, a, e, d, f), i = "insert-characters") : (o = l.Modifier.replaceText(o, a, e, d, f), i = "replace-characters"), l.EditorState.push(t, o, i)
}

function k(e, t) {
  switch (e) {
    case "delete":
      return S(t);
    case "delete-word":
      return m(t);
    case "backspace":
      return b(t);
    case "backspace-word":
      return d(t);
    case "backspace-to-start-of-line":
      return c(t);
    default:
      return t
  }
}

function T(e, t) {
  switch (e) {
    case "transpose-characters":
      return E(t);
    case "move-selection-to-start-of-block":
      return x(t);
    case "move-selection-to-end-of-block":
      return g(t);
    default:
      return t
  }
}

function N(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function A(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    l = t.getCurrentContent(),
    r = l.getFirstBlock(),
    a = r.getText(),
    i = [];
  return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = l.getEntity(r.getEntityAt(e)).getType(),
      s = a.substring(e, t);
    i.push({
      processed: !1,
      type: n,
      start: e,
      end: t,
      text: s
    })
  }), e.forEach(e => {
    let l = !1;
    if (i.forEach(n => {
        let {
          type: r,
          start: a,
          end: i
        } = e, s = e.getFullMatch();
        !n.processed && (n.type === r && n.start === a && n.text === s ? (n.processed = !0, l = !0) : (a >= n.start && a < n.end || i > n.start && i <= n.end) && (n.processed = !0, t = y(null, n.start, n.end, t)))
      }), l) return;
    let r = n[e.type];
    t = y([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), i.forEach(e => {
    !e.processed && (t = y(null, e.start, e.end, t))
  }), t
}

function F(e) {
  return l.EditorState.createEmpty(new l.CompositeDecorator(e))
}

function I(e) {
  let t = l.EditorState.push(e, l.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
}

function w(e, t) {
  let n = N(t);
  return M(e, t, 0, n.length)
}

function R(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
}

function L(e) {
  let t = e.getCurrentContent().getFirstBlock().getText();
  return R(t.length, e)
}

function _(e) {
  return R(0, e)
}

function B(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
}

function O(e) {
  let t = N(e),
    n = e.getSelection();
  return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
}

function H(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
    n = N(e);
  if (n.length > t) {
    let r = e.getSelection();
    e = M("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
  }
  return e
}

function z(e) {
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
  let l = n.getClientRects()[0],
    r = e.getClientRects()[0];
  if (null == l || null == r) return;
  let a = l.left - r.left,
    i = a + e.scrollLeft;
  i < e.scrollLeft ? e.scrollLeft = i - 10 : i > e.scrollLeft + e.offsetWidth && (e.scrollLeft = i - e.offsetWidth + 3)
}

function Z(e) {
  return 0 === N(e).length
}