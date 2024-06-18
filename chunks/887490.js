"use strict";
n.d(t, {
  C0: function() {
    return I
  },
  Ew: function() {
    return S
  },
  Jz: function() {
    return T
  },
  LC: function() {
    return E
  },
  M8: function() {
    return h
  },
  aj: function() {
    return d
  },
  bN: function() {
    return _
  },
  lP: function() {
    return m
  },
  q: function() {
    return c
  }
}), n(47120);
var i = n(512722),
  r = n.n(i),
  s = n(327432),
  o = n(519953),
  a = n(339227),
  l = n(42530);
n(789952);
let u = !1;
{
  let e = o.F3.findDocumentOrShadowRoot;
  o.F3.findDocumentOrShadowRoot = t => {
    var n, i;
    return null !== (i = null === (n = t.windowContext) || void 0 === n ? void 0 : n.renderWindow.document) && void 0 !== i ? i : e(t)
  }, u = !0
}
let _ = {
    ...s.ML,
    ...o.F3,
    richValue: e => e.children,
    blocks: e => _.richValue(e).map((e, t) => [e, [t]]),
    isBlock: (e, t) => c.isElement(t) && s.ML.isBlock(e, t),
    isInline: (e, t) => c.isElement(t) && s.ML.isInline(e, t),
    isVoid: (e, t) => c.isElement(t) && s.ML.isVoid(e, t),
    isEditorEmpty(e) {
      let t = _.richValue(e);
      return !(t.length > 1) && (0 === t.length || "line" === t[0].type && c.isEmpty(t[0]))
    },
    getFirstText(e) {
      let t = _.node(e, l.u9);
      return E.isText(t[0]) ? t[0] : null
    },
    getCurrentBlock(e) {
      return null == e.selection ? null : this.getParentBlock(e, e.selection)
    },
    getCurrentElement(e) {
      return null == e.selection ? null : this.getParentElement(e, e.selection)
    },
    getCurrentInline(e) {
      return null == e.selection ? null : this.getParentInline(e, e.selection)
    },
    getCurrentVoid(e) {
      return null == e.selection ? null : this.getParentVoid(e, e.selection)
    },
    getCurrentText(e) {
      let t = null != e.selection ? h.toPoint(e.selection) : null;
      return null == t ? null : _.node(e, t.path)
    },
    getParentBlock(e, t) {
      var n;
      return null !== (n = _.above(e, {
        at: t,
        match: t => c.isElement(t) && _.isBlock(e, t),
        mode: "lowest"
      })) && void 0 !== n ? n : null
    },
    getParentElement(e, t) {
      var n;
      return null !== (n = _.above(e, {
        at: t,
        match: e => c.isElement(e),
        mode: "lowest"
      })) && void 0 !== n ? n : null
    },
    getParentInline(e, t) {
      var n;
      return null !== (n = _.above(e, {
        at: t,
        match: t => _.isInline(e, t),
        mode: "lowest"
      })) && void 0 !== n ? n : null
    },
    getParentVoid(e, t) {
      var n;
      return null !== (n = _.above(e, {
        at: t,
        match: t => _.isVoid(e, t),
        mode: "lowest"
      })) && void 0 !== n ? n : null
    },
    getSelectedVoid(e) {
      let t;
      if (null == e.selection) return null;
      if (h.isExpanded(e.selection)) {
        let [n, i] = h.edges(e.selection), r = _.after(e, n, {
          unit: "offset"
        }), s = _.before(e, i, {
          unit: "offset"
        });
        if (null == r || null == s || !T.equals(r, s)) return null;
        t = r
      } else t = e.selection.anchor;
      return null == t ? null : _.getParentVoid(e, t)
    },
    getSelectedText(e, t) {
      let n = null;
      if (t) {
        let t = o.F3.findDocumentOrShadowRoot(e).getSelection();
        if (null != t && t.rangeCount > 0) {
          let i = t.getRangeAt(0);
          null != i && (n = o.F3.toSlateRange(e, i, {
            exactMatch: !0,
            suppressThrow: !0
          }))
        }
      } else n = e.selection;
      return null == n ? "" : this.getTextFromRange(e, n)
    },
    getTextFromRange(e, t) {
      let [n, i] = h.edges(t), r = _.nodes(e, {
        at: t,
        mode: "lowest",
        match: e => E.isText(e)
      }), s = "";
      for (let [e, t] of r) {
        let r = I.equals(t, n.path) ? n.offset : 0,
          o = I.equals(t, i.path) ? i.offset : 0;
        s += e.text.substring(r, o)
      }
      return s
    },
    withoutNormalizing(e, t) {
      let n = _.isNormalizing(e);
      _.setNormalizing(e, !1);
      try {
        t()
      } finally {
        _.setNormalizing(e, n)
      }!1 !== n && _.normalize(e)
    },
    areStylesDisabled(e) {
      var t;
      if (!e.previewMarkdown) return !0;
      let n = _.richValue(e),
        i = n[0],
        r = (null == i ? void 0 : i.type) === "line" ? i.children[0] : null;
      if (null == r || !E.isText(r)) return !1;
      let s = e.chatInputType,
        o = r.text;
      return 1 === n.length && 1 === i.children.length && (!0 === s.sedReplace && o.startsWith("s/") || (null === (t = s.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && o.startsWith("+"))
    },
    focus(e) {
      !o.F3.isFocused(e) && (o.F3.focus(e), o.F3.deselect(e))
    },
    getSelectionOverlap(e, t) {
      if (null == e.selection) return {
        anchor: null,
        focus: null
      };
      if (I.isPath(t)) {
        let n = _.range(e, t),
          [i] = _.node(e, t);
        if (c.isElement(i)) {
          let i = _.before(e, t),
            r = _.after(e, t);
          t = {
            anchor: null != i ? i : n.anchor,
            focus: null != r ? r : n.focus
          }
        } else t = n
      }
      let [n, i] = h.edges(t), r = null, s = null;
      return T.equals(e.selection.anchor, n) ? r = "start" : T.equals(e.selection.anchor, i) ? r = "end" : h.includes(t, e.selection.anchor) && (r = "inside"), T.equals(e.selection.focus, n) ? s = "start" : T.equals(e.selection.focus, i) ? s = "end" : h.includes(t, e.selection.focus) && (s = "inside"), {
        anchor: r,
        focus: s
      }
    }
  },
  d = {
    ...s.NB,
    isType: (e, t) => s.W_.isElement(e) && e.type === t,
    isInTypes: (e, t) => s.W_.isElement(e) && t.has(e.type)
  },
  c = {
    ...s.W_,
    updateElement(e, t) {
      let n = _.node(e, t[1]);
      return r()(!_.isEditor(t[0]), "Element is the root node"), r()(null != n, "Failed to find element"), r()(c.isElement(n[0]), "Node at this path is no longer an element"), r()(n[0].type === t[0].type, "Node at this path is a different type"), n
    },
    markdown(e, t, n) {
      var i;
      let r = "line" === e.type && (null === (i = e.codeBlockState) || void 0 === i ? void 0 : i.wasInCodeBlock) === !0,
        s = e.children.map(e => {
          var t;
          return E.isText(e) ? e.text : "((element:".concat(null !== (t = e.type) && void 0 !== t ? t : "unknown", "))")
        }),
        o = s.join("");
      return {
        entries: a.Q(o, null != t ? t : null, r, n),
        serializedChildren: s
      }
    },
    isEmpty(e) {
      if (e.children.length > 1) return !1;
      if (0 === e.children.length) return !0;
      let t = e.children[0];
      return E.isText(t) && 0 === t.text.length
    }
  },
  E = {
    ...s.xv
  },
  I = {
    ...s.y$,
    isFirstEditorBlock: e => I.equals(e, l.YD),
    isFirstEditorText: e => I.equals(e, l.u9),
    isFirstChild: (e, t) => I.equals(t, I.child(e, 0)),
    child: (e, t) => [...e, t]
  },
  T = {
    ...s.E9,
    start(e) {
      let [, t] = e;
      return {
        path: I.child(t, 0),
        offset: 0
      }
    },
    end(e) {
      let [t, n] = e, i = t.children[t.children.length - 1];
      return {
        path: I.child(n, t.children.length - 1),
        offset: E.isText(i) ? i.text.length : 0
      }
    },
    isAtStart(e, t) {
      return T.equals(e, this.start(t))
    },
    isAtEnd(e, t) {
      return T.equals(e, this.end(t))
    },
    clamp(e, t) {
      let [n, i] = h.edges(t);
      return T.isBefore(e, n) && (e = n), T.isAfter(e, i) && (e = i), e
    }
  },
  h = {
    ...s.e6,
    toPoint: e => null == e || h.isExpanded(e) ? null : e.anchor,
    children(e) {
      let [t, n] = e, i = t.children[t.children.length - 1];
      return {
        anchor: {
          path: I.child(n, 0),
          offset: 0
        },
        focus: {
          path: I.child(n, t.children.length - 1),
          offset: E.isText(i) ? i.text.length : 0
        }
      }
    },
    clamp(e, t) {
      let [n, i] = h.edges(e), [r, s] = h.edges(t);
      return (T.isBefore(n, r) && (n = r), T.isAfter(i, s) && (i = s), h.isForward(e)) ? {
        anchor: n,
        focus: i
      } : {
        anchor: i,
        focus: n
      }
    }
  },
  S = {
    equals: (e, t) => null == e && null == t || null != e && null != t && h.equals(e, t),
    isValid(e, t) {
      if (null == t) return !1;
      let {
        anchor: n,
        focus: i
      } = t;
      if (!_.hasPath(e, n.path) || !_.hasPath(e, i.path)) return !1;
      let [r] = _.node(e, n.path), [s] = _.node(e, i.path);
      return E.isText(r) && E.isText(s) && n.offset <= r.text.length && i.offset <= s.text.length
    }
  },
  f = (e, t) => {
    let n = (t.top + t.bottom) / 2;
    return e.top <= n && e.bottom >= n
  },
  N = (e, t, n) => {
    let i = _.toDOMRange(e, t).getBoundingClientRect(),
      r = _.toDOMRange(e, n).getBoundingClientRect();
    return f(i, r) && f(r, i)
  },
  A = (e, t, n, i) => {
    let r = {
        anchor: t,
        focus: t
      },
      s = 0,
      o = n.length,
      a = Math.floor((s + o) / 2);
    for (; a !== s;)
      if (N(e, {
          anchor: n[a],
          focus: n[a]
        }, r) ? i ? o = a : s = a : i ? s = a : o = a, a = Math.floor((s + o) / 2), !i && a === n.length - 2 && o === n.length - 1) {
        let t = n[n.length - 1];
        N(e, {
          anchor: t,
          focus: t
        }, r) && (a = o)
      } return n[a]
  },
  m = {
    getLineStart(e, t, n) {
      let i;
      let r = _.getParentElement(e, t);
      if (null == r) return null;
      let s = _.previous(e, {
        at: t,
        match: t => _.isInline(e, t) && !_.isVoid(e, t) && t !== r[0]
      });
      null != s && (i = _.after(e, s[1])), null == i && (i = _.start(e, r[1]));
      let o = {
          anchor: i,
          focus: t
        },
        a = Array.from(_.positions(e, {
          at: o
        })),
        l = A(e, t, a, !0);
      if (n && T.equals(t, l) && !T.isAtEnd(t, r)) {
        let n = _.after(e, t);
        if (null == n) return l;
        l = A(e, n, a, !0)
      }
      return l
    },
    getLineEnd(e, t, n) {
      let i;
      let r = _.getParentElement(e, t);
      if (null == r) return null;
      let s = _.next(e, {
        at: t,
        match: t => _.isInline(e, t) && !_.isVoid(e, t) && t !== r[0]
      });
      null != s && (i = _.before(e, s[1])), null == i && (i = _.end(e, r[1]));
      let o = {
          anchor: t,
          focus: i
        },
        a = Array.from(_.positions(e, {
          at: o
        })),
        l = A(e, t, a, !1);
      if (n && T.equals(t, l) && !T.isAtEnd(t, r)) {
        let n = _.after(e, t);
        if (null == n) return l;
        l = A(e, n, a, !1)
      }
      return l
    },
    getLineActionRange(e, t) {
      let n = h.toPoint(e.selection);
      if (null == n) return null;
      if (t) {
        let t = m.getLineStart(e, n, !1);
        return null == t ? null : {
          anchor: t,
          focus: n
        }
      } {
        let t = m.getLineEnd(e, n, !0);
        return null == t ? null : {
          anchor: n,
          focus: t
        }
      }
    }
  }