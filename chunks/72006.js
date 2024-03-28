"use strict";
n.r(t), n.d(t, {
  applyTokensAsEntities: function() {
    return O
  },
  clearContent: function() {
    return x
  },
  createEmptyEditorState: function() {
    return L
  },
  deleteContent: function() {
    return M
  },
  getDefaultKeyBinding: function() {
    return l()
  },
  getFirstTextBlock: function() {
    return A
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
    return F
  },
  setCollapsedSelection: function() {
    return y
  },
  setCollapsedStartSelection: function() {
    return G
  },
  setToEndSelection: function() {
    return j
  },
  setToStartSelection: function() {
    return D
  },
  truncateContent: function() {
    return w
  },
  updateContent: function() {
    return R
  }
}), n("47120"), n("653041");
var r = n("16464"),
  i = n("713512"),
  l = n.n(i),
  s = n("294006"),
  o = n.n(s),
  u = n("601310"),
  a = n.n(u),
  c = n("597605"),
  d = n.n(c),
  f = n("83550"),
  S = n.n(f),
  g = n("65492"),
  h = n.n(g),
  E = n("405141"),
  p = n.n(E),
  _ = n("960973"),
  m = n.n(_),
  C = n("93874"),
  I = n.n(C),
  T = n("295985"),
  v = n.n(T);

function N(e, t, n, i) {
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

function R(e, t, n, i) {
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
      return I()(t);
    case "delete-word":
      return S()(t);
    case "backspace":
      return m()(t);
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
      return p()(t);
    case "move-selection-to-end-of-block":
      return h()(t);
    default:
      return t
  }
}

function A(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function O(e, t) {
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
        !n.processed && (n.type === i && n.start === l && n.text === o ? (n.processed = !0, r = !0) : (l >= n.start && l < n.end || s > n.start && s <= n.end) && (n.processed = !0, t = N(null, n.start, n.end, t)))
      }), r) return;
    let i = n[e.type];
    t = N([e.type, null != i && i.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), s.forEach(e => {
    !e.processed && (t = N(null, e.start, e.end, t))
  }), t
}

function L(e) {
  return r.EditorState.createEmpty(new r.CompositeDecorator(e))
}

function x(e) {
  let t = r.EditorState.push(e, r.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t
}

function P(e, t) {
  let n = A(t);
  return R(e, t, 0, n.length)
}

function y(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), r.EditorState.forceSelection(t, n)
}

function F(e) {
  return y(e.getCurrentContent().getFirstBlock().getText().length, e)
}

function G(e) {
  return y(0, e)
}

function D(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), r.EditorState.forceSelection(e, t)
}

function j(e) {
  let t = A(e),
    n = e.getSelection();
  return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), r.EditorState.forceSelection(e, n)
}

function w(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
    n = A(e);
  if (n.length > t) {
    let i = e.getSelection();
    e = R("", e, t, n.length), i.getAnchorOffset() > t && (i = i.set("anchorOffset", t)), i.getFocusOffset() > t && (i = i.set("focusOffset", t)), e = r.EditorState.forceSelection(e, i)
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
  return 0 === A(e).length
}