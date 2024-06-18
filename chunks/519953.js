"use strict";
n.d(t, {
  BU: function() {
    return tT
  },
  CX: function() {
    return tl
  },
  F3: function() {
    return ev
  },
  UE: function() {
    return t_
  },
  _7: function() {
    return eR
  },
  mH: function() {
    return ty
  },
  vt: function() {
    return eY
  }
});
var r = n(653603),
  i = n.n(r),
  a = n(889678),
  o = n.n(a),
  s = n(123763),
  u = n.n(s),
  c = n(470079),
  l = n(367989),
  d = n(327432),
  f = n(690096),
  p = n(247187),
  h = n(699581);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) {
      if (n = a[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
  }
  return i
}
var _ = 0;
class b {
  constructor() {
    this.id = "".concat(_++)
  }
}
var v = new WeakMap,
  y = new WeakMap,
  E = new WeakMap,
  S = new WeakMap,
  x = new WeakMap,
  w = new WeakMap,
  C = new WeakMap,
  T = new WeakMap,
  D = new WeakMap,
  M = new WeakMap,
  O = new WeakMap,
  A = new WeakMap,
  k = new WeakMap,
  R = new WeakMap,
  N = new WeakMap,
  I = new WeakMap,
  L = new WeakMap,
  P = new WeakMap,
  B = new WeakMap,
  F = new WeakMap,
  U = new WeakMap,
  j = Symbol("placeholder"),
  Y = Symbol("mark-placeholder"),
  z = globalThis.Text,
  H = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
  G = e => $(e) && 8 === e.nodeType,
  V = e => $(e) && 1 === e.nodeType,
  $ = e => {
    var t = H(e);
    return !!t && e instanceof t.Node
  },
  Z = e => {
    var t = e && e.anchorNode && H(e.anchorNode);
    return !!t && e instanceof t.Selection
  },
  K = e => $(e) && 3 === e.nodeType,
  W = e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
  q = e => {
    var [t, n] = e;
    if (V(t) && t.childNodes.length) {
      var r = n === t.childNodes.length,
        i = r ? n - 1 : n;
      for ([t, i] = X(t, i, r ? "backward" : "forward"), r = i < n; V(t) && t.childNodes.length;) {
        var a = r ? t.childNodes.length - 1 : 0;
        t = J(t, a, r ? "backward" : "forward")
      }
      n = r && null != t.textContent ? t.textContent.length : 0
    }
    return [t, n]
  },
  Q = e => {
    for (var t = e && e.parentNode; t;) {
      if ("[object ShadowRoot]" === t.toString()) return !0;
      t = t.parentNode
    }
    return !1
  },
  X = (e, t, n) => {
    for (var {
        childNodes: r
      } = e, i = r[t], a = t, o = !1, s = !1;
      (G(i) || V(i) && 0 === i.childNodes.length || V(i) && "false" === i.getAttribute("contenteditable")) && (!o || !s);) {
      ;
      if (a >= r.length) {
        o = !0, a = t - 1, n = "backward";
        continue
      }
      if (a < 0) {
        s = !0, a = t + 1, n = "forward";
        continue
      }
      i = r[a], t = a, a += "forward" === n ? 1 : -1
    }
    return [i, t]
  },
  J = (e, t, n) => {
    var [r] = X(e, t, n);
    return r
  },
  ee = e => {
    var t = "";
    if (K(e) && e.nodeValue) return e.nodeValue;
    if (V(e)) {
      for (var n of Array.from(e.childNodes)) t += ee(n);
      var r = getComputedStyle(e).getPropertyValue("display");
      ("block" === r || "list" === r || "BR" === e.tagName) && (t += "\n")
    }
    return t
  },
  et = /data-slate-fragment="(.+?)"/m,
  en = e => {
    var [, t] = e.getData("text/html").match(et) || [];
    return t
  },
  er = (e, t, n) => {
    var {
      target: r
    } = t;
    if (V(r) && r.matches('[contentEditable="false"]')) return !1;
    var {
      document: i
    } = ev.getWindow(e);
    if (i.contains(r)) return ev.hasDOMNode(e, r, {
      editable: !0
    });
    var a = n.find(e => {
      var {
        addedNodes: t,
        removedNodes: n
      } = e;
      for (var i of t)
        if (i === r || i.contains(r)) return !0;
      for (var a of n)
        if (a === r || a.contains(r)) return !0
    });
    return !!a && a !== t && er(e, a, n)
  },
  ei = parseInt(c.version.split(".")[0], 10) >= 17,
  ea = "undefined" != typeof navigator && "undefined" != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  eo = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
  es = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
  eu = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
  ec = "undefined" != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
  el = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
  ed = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
  ef = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
  ep = es && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
  eh = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
  em = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
  eg = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent),
  e_ = !!("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
  eb = (!ef || !ep) && !el && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
  ev = {
    isComposing: e => !!A.get(e),
    getWindow(e) {
      var t = E.get(e);
      if (!t) throw Error("Unable to find a host window element for this editor");
      return t
    },
    findKey(e, t) {
      var n = T.get(t);
      return !n && (n = new b, T.set(t, n)), n
    },
    findPath(e, t) {
      for (var n = [], r = t;;) {
        var i = y.get(r);
        if (null == i) {
          if (d.ML.isEditor(r)) return n;
          break
        }
        var a = v.get(r);
        if (null == a) break;
        n.unshift(a), r = i
      }
      throw Error("Unable to find the path for Slate node: ".concat(d.o4.stringify(t)))
    },
    findDocumentOrShadowRoot(e) {
      var t = ev.toDOMNode(e, e),
        n = t.getRootNode();
      return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument
    },
    isFocused: e => !!O.get(e),
    isReadOnly: e => !!M.get(e),
    blur(e) {
      var t = ev.toDOMNode(e, e),
        n = ev.findDocumentOrShadowRoot(e);
      O.set(e, !1), n.activeElement === t && t.blur()
    },
    focus(e) {
      var t = ev.toDOMNode(e, e),
        n = ev.findDocumentOrShadowRoot(e);
      O.set(e, !0), n.activeElement !== t && t.focus({
        preventScroll: !0
      })
    },
    deselect(e) {
      var {
        selection: t
      } = e, n = ev.findDocumentOrShadowRoot(e).getSelection();
      n && n.rangeCount > 0 && n.removeAllRanges(), t && d.YR.deselect(e)
    },
    hasDOMNode(e, t) {
      var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        {
          editable: i = !1
        } = r,
        a = ev.toDOMNode(e, e);
      try {
        n = V(t) ? t : t.parentElement
      } catch (e) {
        if (!e.message.includes('Permission denied to access property "nodeType"')) throw e
      }
      return !!n && n.closest("[data-slate-editor]") === a && (!i || !!n.isContentEditable || "boolean" == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === a || !!n.getAttribute("data-slate-zero-width"))
    },
    insertData(e, t) {
      e.insertData(t)
    },
    insertFragmentData: (e, t) => e.insertFragmentData(t),
    insertTextData: (e, t) => e.insertTextData(t),
    setFragmentData(e, t, n) {
      e.setFragmentData(t, n)
    },
    toDOMNode(e, t) {
      var n = D.get(e),
        r = d.ML.isEditor(t) ? S.get(e) : null == n ? void 0 : n.get(ev.findKey(e, t));
      if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(d.o4.stringify(t)));
      return r
    },
    toDOMPoint(e, t) {
      var [n] = d.ML.node(e, t.path), r = ev.toDOMNode(e, n);
      d.ML.void(e, {
        at: t
      }) && (t = {
        path: t.path,
        offset: 0
      });
      for (var i = Array.from(r.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), a = 0, o = 0; o < i.length; o++) {
        var s = i[o],
          u = s.childNodes[0];
        if (null != u && null != u.textContent) {
          var {
            length: c
          } = u.textContent, l = s.getAttribute("data-slate-length"), f = a + (null == l ? c : parseInt(l, 10)), p = i[o + 1];
          if (t.offset === f && null != p && p.hasAttribute("data-slate-mark-placeholder")) {
            var h, m, g = p.childNodes[0];
            h = [g instanceof z ? g : p, null !== (m = p.textContent) && void 0 !== m && m.startsWith("\uFEFF") ? 1 : 0];
            break
          }
          if (t.offset <= f) {
            h = [u, Math.min(c, Math.max(0, t.offset - a))];
            break
          }
          a = f
        }
      }
      if (!h) throw Error("Cannot resolve a DOM point from Slate point: ".concat(d.o4.stringify(t)));
      return h
    },
    toDOMRange(e, t) {
      var {
        anchor: n,
        focus: r
      } = t, i = d.e6.isBackward(t), a = ev.toDOMPoint(e, n), o = d.e6.isCollapsed(t) ? a : ev.toDOMPoint(e, r), s = ev.getWindow(e).document.createRange(), [u, c] = i ? o : a, [l, f] = i ? a : o, p = !!(V(u) ? u : u.parentElement).getAttribute("data-slate-zero-width"), h = !!(V(l) ? l : l.parentElement).getAttribute("data-slate-zero-width");
      return s.setStart(u, p ? 1 : c), s.setEnd(l, h ? 1 : f), s
    },
    toSlateNode(e, t) {
      var n = V(t) ? t : t.parentElement;
      n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
      var r = n ? w.get(n) : null;
      if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
      return r
    },
    findEventRange(e, t) {
      "nativeEvent" in t && (t = t.nativeEvent);
      var n, {
        clientX: r,
        clientY: i,
        target: a
      } = t;
      if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
      var o = ev.toSlateNode(e, t.target),
        s = ev.findPath(e, o);
      if (d.W_.isElement(o) && d.ML.isVoid(e, o)) {
        var u = a.getBoundingClientRect(),
          c = e.isInline(o) ? r - u.left < u.left + u.width - r : i - u.top < u.top + u.height - i,
          l = d.ML.point(e, s, {
            edge: c ? "start" : "end"
          }),
          f = c ? d.ML.before(e, l) : d.ML.after(e, l);
        if (f) return d.ML.range(e, f)
      }
      var {
        document: p
      } = ev.getWindow(e);
      if (p.caretRangeFromPoint) n = p.caretRangeFromPoint(r, i);
      else {
        var h = p.caretPositionFromPoint(r, i);
        h && ((n = p.createRange()).setStart(h.offsetNode, h.offset), n.setEnd(h.offsetNode, h.offset))
      }
      if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
      return ev.toSlateRange(e, n, {
        exactMatch: !1,
        suppressThrow: !1
      })
    },
    toSlatePoint(e, t, n) {
      var {
        exactMatch: r,
        suppressThrow: i
      } = n, [a, o] = r ? t : q(t), s = a.parentNode, u = null, c = 0;
      if (s) {
        var l, f, p = ev.toDOMNode(e, e),
          h = s.closest('[data-slate-void="true"]'),
          m = h && p.contains(h) ? h : null,
          g = s.closest("[data-slate-leaf]"),
          _ = null;
        if (g) {
          if (u = g.closest('[data-slate-node="text"]')) {
            var b = ev.getWindow(e).document.createRange();
            b.setStart(u, 0), b.setEnd(a, o);
            var v = b.cloneContents();
            [...Array.prototype.slice.call(v.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(v.querySelectorAll("[contenteditable=false]"))].forEach(e => {
              if (es && !r && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\uFEFF" !== e.textContext) {
                e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                return
              }
              e.parentNode.removeChild(e)
            }), c = v.textContent.length, _ = u
          }
        } else if (m) {
          for (var y = m.querySelectorAll("[data-slate-leaf]"), E = 0; E < y.length; E++) {
            var S = y[E];
            if (ev.hasDOMNode(e, S)) {
              g = S;
              break
            }
          }
          g ? (u = g.closest('[data-slate-node="text"]'), c = (_ = g).textContent.length, _.querySelectorAll("[data-slate-zero-width]").forEach(e => {
            c -= e.textContent.length
          })) : c = 1
        }
        _ && c === _.textContent.length && es && "z" === _.getAttribute("data-slate-zero-width") && null !== (l = _.textContent) && void 0 !== l && l.startsWith("\uFEFF") && (s.hasAttribute("data-slate-zero-width") || eu && null !== (f = _.textContent) && void 0 !== f && f.endsWith("\n\n")) && c--
      }
      if (es && !u && !r) {
        var x = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
        if (x && ev.hasDOMNode(e, x, {
            editable: !0
          })) {
          var w = ev.toSlateNode(e, x),
            {
              path: C,
              offset: T
            } = d.ML.start(e, ev.findPath(e, w));
          return !x.querySelector("[data-slate-leaf]") && (T = o), {
            path: C,
            offset: T
          }
        }
      }
      if (!u) {
        if (i) return null;
        throw Error("Cannot resolve a Slate point from DOM point: ".concat(t))
      }
      var D = ev.toSlateNode(e, u);
      return {
        path: ev.findPath(e, D),
        offset: c
      }
    },
    toSlateRange(e, t, n) {
      var r, i, a, o, s, u, {
        exactMatch: c,
        suppressThrow: l
      } = n;
      if ((Z(t) ? t.anchorNode : t.startContainer) && (Z(t) ? (r = t.anchorNode, i = t.anchorOffset, a = t.focusNode, o = t.focusOffset, s = ed && Q(r) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed) : (r = t.startContainer, i = t.startOffset, a = t.endContainer, o = t.endOffset, s = t.collapsed)), null == r || null == a || null == i || null == o) throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
      "getAttribute" in a && "false" === a.getAttribute("contenteditable") && (a = r, o = (null === (u = r.textContent) || void 0 === u ? void 0 : u.length) || 0);
      var f = ev.toSlatePoint(e, [r, i], {
        exactMatch: c,
        suppressThrow: l
      });
      if (!f) return null;
      var p = s ? f : ev.toSlatePoint(e, [a, o], {
        exactMatch: c,
        suppressThrow: l
      });
      if (!p) return null;
      if (eu && !s && r !== a) {
        var h = d.ML.isEnd(e, f, f.path),
          m = d.ML.isStart(e, p, p.path);
        h && (f = d.ML.after(e, f) || f), m && (p = d.ML.before(e, p) || p)
      }
      var g = {
        anchor: f,
        focus: p
      };
      return d.e6.isExpanded(g) && d.e6.isForward(g) && V(a) && d.ML.void(e, {
        at: g.focus,
        mode: "highest"
      }) && (g = d.ML.unhangRange(e, g, {
        voids: !0
      })), g
    },
    hasRange(e, t) {
      var {
        anchor: n,
        focus: r
      } = t;
      return d.ML.hasPath(e, n.path) && d.ML.hasPath(e, r.path)
    },
    hasTarget: (e, t) => $(t) && ev.hasDOMNode(e, t),
    hasEditableTarget: (e, t) => $(t) && ev.hasDOMNode(e, t, {
      editable: !0
    }),
    hasSelectableTarget: (e, t) => ev.hasEditableTarget(e, t) || ev.isTargetInsideNonReadonlyVoid(e, t),
    isTargetInsideNonReadonlyVoid(e, t) {
      if (M.get(e)) return !1;
      var n = ev.hasTarget(e, t) && ev.toSlateNode(e, t);
      return d.W_.isElement(n) && d.ML.isVoid(e, n)
    },
    androidScheduleFlush(e) {
      var t;
      null === (t = N.get(e)) || void 0 === t || t()
    },
    androidPendingDiffs: e => P.get(e)
  },
  ey = ["anchor", "focus"],
  eE = ["anchor", "focus"],
  eS = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(n => t.hasOwnProperty(n) && e[n] === t[n]),
  ex = (e, t) => {
    var n = g(e, ey),
      r = g(t, eE);
    return e[j] === t[j] && eS(n, r)
  },
  ew = (e, t) => {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = t[n];
      if (!d.e6.equals(r, i) || !ex(r, i)) return !1
    }
    return !0
  },
  eC = (e, t) => {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = t[n];
      if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !ex(r, i)) return !1
    }
    return !0
  },
  eT = e_ ? c.useLayoutEffect : c.useEffect,
  eD = e => {
    var {
      isLast: t,
      leaf: n,
      parent: r,
      text: i
    } = e, a = eR(), o = ev.findPath(a, i), s = d.y$.parent(o), u = !0 === n[Y];
    return a.isVoid(r) ? c.createElement(eA, {
      length: d.NB.string(r).length
    }) : "" !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || "" !== d.ML.string(a, s) ? "" === n.text ? c.createElement(eA, {
      isMarkPlaceholder: u
    }) : t && "\n" === n.text.slice(-1) ? c.createElement(eM, {
      isTrailing: !0,
      text: n.text
    }) : c.createElement(eM, {
      text: n.text
    }) : c.createElement(eA, {
      isLineBreak: !0,
      isMarkPlaceholder: u
    })
  },
  eM = e => {
    var {
      text: t,
      isTrailing: n = !1
    } = e, r = (0, c.useRef)(null), i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""), [a] = (0, c.useState)(i);
    return eT(() => {
      var e = i();
      r.current && r.current.textContent !== e && (r.current.textContent = e)
    }), c.createElement(eO, {
      ref: r
    }, a)
  },
  eO = (0, c.memo)((0, c.forwardRef)((e, t) => c.createElement("span", {
    "data-slate-string": !0,
    ref: t
  }, e.children))),
  eA = e => {
    var {
      length: t = 0,
      isLineBreak: n = !1,
      isMarkPlaceholder: r = !1
    } = e, i = {
      "data-slate-zero-width": n ? "n" : "z",
      "data-slate-length": t
    };
    return r && (i["data-slate-mark-placeholder"] = !0), c.createElement("span", Object.assign({}, i), es && n ? null : "\uFEFF", n ? c.createElement("br", null) : null)
  },
  ek = (0, c.createContext)(null),
  eR = () => {
    var e = (0, c.useContext)(ek);
    if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
    return e
  },
  eN = c.memo(e => {
    var {
      leaf: t,
      isLast: n,
      text: r,
      parent: i,
      renderPlaceholder: a,
      renderLeaf: o = e => c.createElement(eI, Object.assign({}, e))
    } = e, s = (0, c.useRef)(null), u = (0, c.useRef)(null), l = eR(), d = (0, c.useRef)(null);
    (0, c.useEffect)(() => () => {
      d.current && d.current.disconnect()
    }, []), (0, c.useEffect)(() => {
      var e = null == u ? void 0 : u.current;
      if (e ? x.set(l, e) : x.delete(l), d.current) d.current.disconnect(), e && d.current.observe(e);
      else if (e) {
        var t = window.ResizeObserver || f.do;
        d.current = new t(() => {
          var e = U.get(l);
          null == e || e()
        }), d.current.observe(e)
      }
      if (!e && s.current) {
        var n = U.get(l);
        null == n || n()
      }
      return s.current = u.current, () => {
        x.delete(l)
      }
    }, [u, t]);
    var p = c.createElement(eD, {
      isLast: n,
      leaf: t,
      parent: i,
      text: r
    });
    if (t[j]) {
      var h = {
        children: t.placeholder,
        attributes: {
          "data-slate-placeholder": !0,
          style: {
            position: "absolute",
            pointerEvents: "none",
            width: "100%",
            maxWidth: "100%",
            display: "block",
            opacity: "0.333",
            userSelect: "none",
            textDecoration: "none"
          },
          contentEditable: !1,
          ref: u
        }
      };
      p = c.createElement(c.Fragment, null, a(h), p)
    }
    return o({
      attributes: {
        "data-slate-leaf": !0
      },
      children: p,
      leaf: t,
      text: r
    })
  }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && d.xv.equals(t.leaf, e.leaf) && t.leaf[j] === e.leaf[j]),
  eI = e => {
    var {
      attributes: t,
      children: n
    } = e;
    return c.createElement("span", Object.assign({}, t), n)
  },
  eL = c.memo(e => {
    for (var {
        decorations: t,
        isLast: n,
        parent: r,
        renderPlaceholder: i,
        renderLeaf: a,
        text: o
      } = e, s = eR(), u = (0, c.useRef)(null), l = d.xv.decorations(o, t), f = ev.findKey(s, o), p = [], h = 0; h < l.length; h++) {
      var m = l[h];
      p.push(c.createElement(eN, {
        isLast: n && h === l.length - 1,
        key: "".concat(f.id, "-").concat(h),
        renderPlaceholder: i,
        leaf: m,
        text: o,
        parent: r,
        renderLeaf: a
      }))
    }
    var g = (0, c.useCallback)(e => {
      var t = D.get(s);
      e ? (null == t || t.set(f, e), C.set(o, e), w.set(e, o)) : (null == t || t.delete(f), C.delete(o), u.current && w.delete(u.current)), u.current = e
    }, [u, s, f, o]);
    return c.createElement("span", {
      "data-slate-node": "text",
      ref: g
    }, p)
  }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && eC(t.decorations, e.decorations)),
  eP = c.memo(e => {
    var {
      decorations: t,
      element: n,
      renderElement: r = e => c.createElement(eB, Object.assign({}, e)),
      renderPlaceholder: a,
      renderLeaf: o,
      selection: s
    } = e, u = eR(), l = eG(), f = u.isInline(n), p = ev.findKey(u, n), h = (0, c.useCallback)(e => {
      var t = D.get(u);
      e ? (null == t || t.set(p, e), C.set(n, e), w.set(e, n)) : (null == t || t.delete(p), C.delete(n))
    }, [u, p, n]), m = ez({
      decorations: t,
      node: n,
      renderElement: r,
      renderPlaceholder: a,
      renderLeaf: o,
      selection: s
    }), g = {
      "data-slate-node": "element",
      ref: h
    };
    if (f && (g["data-slate-inline"] = !0), !f && d.ML.hasInlines(u, n)) {
      var _ = d.NB.string(n),
        b = i()(_);
      "rtl" === b && (g.dir = b)
    }
    if (d.ML.isVoid(u, n)) {
      g["data-slate-void"] = !0, !l && f && (g.contentEditable = !1);
      var [
        [E]
      ] = d.NB.texts(n);
      m = c.createElement(f ? "span" : "div", {
        "data-slate-spacer": !0,
        style: {
          height: "0",
          color: "transparent",
          outline: "none",
          position: "absolute"
        }
      }, c.createElement(eL, {
        renderPlaceholder: a,
        decorations: [],
        isLast: !1,
        parent: n,
        text: E
      })), v.set(E, 0), y.set(E, n)
    }
    return r({
      attributes: g,
      children: m,
      element: n,
      decorations: t
    })
  }, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && ew(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && d.e6.equals(e.selection, t.selection))),
  eB = e => {
    var {
      attributes: t,
      children: n,
      element: r
    } = e, i = eR().isInline(r) ? "span" : "div";
    return c.createElement(i, Object.assign({}, t, {
      style: {
        position: "relative"
      }
    }), n)
  },
  eF = (0, c.createContext)(() => []),
  eU = () => (0, c.useContext)(eF),
  ej = (0, c.createContext)(!1),
  eY = () => (0, c.useContext)(ej),
  ez = e => {
    for (var {
        decorations: t,
        node: n,
        renderElement: r,
        renderPlaceholder: i,
        renderLeaf: a,
        selection: o
      } = e, s = eU(), u = eR(), l = ev.findPath(u, n), f = [], p = d.W_.isElement(n) && !u.isInline(n) && d.ML.hasInlines(u, n), h = 0; h < n.children.length; h++) {
      var m = l.concat(h),
        g = n.children[h],
        _ = ev.findKey(u, g),
        b = d.ML.range(u, m),
        E = o && d.e6.intersection(b, o),
        S = s([g, m]);
      for (var x of t) {
        var w = d.e6.intersection(x, b);
        w && S.push(w)
      }
      d.W_.isElement(g) ? f.push(c.createElement(ej.Provider, {
        key: "provider-".concat(_.id),
        value: !!E
      }, c.createElement(eP, {
        decorations: S,
        element: g,
        key: _.id,
        renderElement: r,
        renderPlaceholder: i,
        renderLeaf: a,
        selection: E
      }))) : f.push(c.createElement(eL, {
        decorations: S,
        key: _.id,
        isLast: p && h === n.children.length - 1,
        parent: n,
        renderPlaceholder: i,
        renderLeaf: a,
        text: g
      })), v.set(g, h), y.set(g, n)
    }
    return f
  },
  eH = (0, c.createContext)(!1),
  eG = () => (0, c.useContext)(eH),
  eV = (0, c.createContext)(null),
  e$ = () => {
    var e = (0, c.useContext)(eV);
    if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
    var {
      editor: t
    } = e;
    return t
  },
  eZ = {
    bold: "mod+b",
    compose: ["down", "left", "right", "up", "backspace", "enter"],
    moveBackward: "left",
    moveForward: "right",
    moveWordBackward: "ctrl+left",
    moveWordForward: "ctrl+right",
    deleteBackward: "shift?+backspace",
    deleteForward: "shift?+delete",
    extendBackward: "shift+left",
    extendForward: "shift+right",
    italic: "mod+i",
    insertSoftBreak: "shift+enter",
    splitBlock: "enter",
    undo: "mod+z"
  },
  eK = {
    moveLineBackward: "opt+up",
    moveLineForward: "opt+down",
    moveWordBackward: "opt+left",
    moveWordForward: "opt+right",
    deleteBackward: ["ctrl+backspace", "ctrl+h"],
    deleteForward: ["ctrl+delete", "ctrl+d"],
    deleteLineBackward: "cmd+shift?+backspace",
    deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
    deleteWordBackward: "opt+shift?+backspace",
    deleteWordForward: "opt+shift?+delete",
    extendLineBackward: "opt+shift+up",
    extendLineForward: "opt+shift+down",
    redo: "cmd+shift+z",
    transposeCharacter: "ctrl+t"
  },
  eW = {
    deleteWordBackward: "ctrl+shift?+backspace",
    deleteWordForward: "ctrl+shift?+delete",
    redo: ["ctrl+y", "ctrl+shift+z"]
  },
  eq = e => {
    var t = eZ[e],
      n = eK[e],
      r = eW[e],
      i = t && (0, p.isKeyHotkey)(t),
      a = n && (0, p.isKeyHotkey)(n),
      o = r && (0, p.isKeyHotkey)(r);
    return e => !!(i && i(e) || eo && a && a(e) || !eo && o && o(e)) || !1
  },
  eQ = {
    isBold: eq("bold"),
    isCompose: eq("compose"),
    isMoveBackward: eq("moveBackward"),
    isMoveForward: eq("moveForward"),
    isDeleteBackward: eq("deleteBackward"),
    isDeleteForward: eq("deleteForward"),
    isDeleteLineBackward: eq("deleteLineBackward"),
    isDeleteLineForward: eq("deleteLineForward"),
    isDeleteWordBackward: eq("deleteWordBackward"),
    isDeleteWordForward: eq("deleteWordForward"),
    isExtendBackward: eq("extendBackward"),
    isExtendForward: eq("extendForward"),
    isExtendLineBackward: eq("extendLineBackward"),
    isExtendLineForward: eq("extendLineForward"),
    isItalic: eq("italic"),
    isMoveLineBackward: eq("moveLineBackward"),
    isMoveLineForward: eq("moveLineForward"),
    isMoveWordBackward: eq("moveWordBackward"),
    isMoveWordForward: eq("moveWordForward"),
    isRedo: eq("redo"),
    isSoftBreak: eq("insertSoftBreak"),
    isSplitBlock: eq("splitBlock"),
    isTransposeCharacter: eq("transposeCharacter"),
    isUndo: eq("undo")
  },
  eX = (e, t) => {
    var n = [],
      r = () => {
        n = []
      };
    return {
      registerMutations: r => {
        if (!!t.current) {
          var i = r.filter(t => er(e, t, r));
          n.push(...i)
        }
      },
      restoreDOM: function() {
        n.length > 0 && (n.reverse().forEach(e => {
          if ("characterData" !== e.type) e.removedNodes.forEach(t => {
            e.target.insertBefore(t, e.nextSibling)
          }), e.addedNodes.forEach(t => {
            e.target.removeChild(t)
          })
        }), r())
      },
      clear: r
    }
  },
  eJ = {
    subtree: !0,
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0
  };
class e0 extends c.Component {
  constructor() {
    super(...arguments), this.context = null, this.manager = null, this.mutationObserver = null
  }
  observe() {
    var e, {
      node: t
    } = this.props;
    if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
    null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, eJ)
  }
  componentDidMount() {
    var {
      receivedUserInput: e
    } = this.props, t = this.context;
    this.manager = eX(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
  }
  getSnapshotBeforeUpdate() {
    var e, t, n, r, i = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
    return null != i && i.length && (null === (r = this.manager) || void 0 === r || r.registerMutations(i)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (n = this.manager) || void 0 === n || n.restoreDOM(), null
  }
  componentDidUpdate() {
    var e;
    null === (e = this.manager) || void 0 === e || e.clear(), this.observe()
  }
  componentWillUnmount() {
    var e;
    null === (e = this.mutationObserver) || void 0 === e || e.disconnect()
  }
  render() {
    return this.props.children
  }
}
e0.contextType = ek;
var e1 = es ? e0 : e => {
  var {
    children: t
  } = e;
  return c.createElement(c.Fragment, null, t)
};

function e2(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e)
}

function e3(e, t) {
  var {
    start: n,
    end: r,
    text: i
  } = t, a = e.slice(n, r), o = function(e, t) {
    for (var n = Math.min(e.length, t.length), r = 0; r < n; r++)
      if (e.charAt(r) !== t.charAt(r)) return r;
    return n
  }(a, i), s = Math.min(a.length - o, i.length - o), u = function(e, t, n) {
    for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
      if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
    return r
  }(a, i, s), c = {
    start: n + o,
    end: r - u,
    text: i.slice(o, i.length - u)
  };
  return c.start === c.end && 0 === c.text.length ? null : c
}

function e4(e, t) {
  var {
    path: n,
    offset: r
  } = t;
  if (!d.ML.hasPath(e, n)) return null;
  var i = d.NB.get(e, n);
  if (!d.xv.isText(i)) return null;
  var a = d.ML.above(e, {
    match: t => d.W_.isElement(t) && d.ML.isBlock(e, t),
    at: n
  });
  if (!a) return null;
  for (; r > i.text.length;) {
    var o = d.ML.next(e, {
      at: n,
      match: d.xv.isText
    });
    if (!o || !d.y$.isDescendant(o[1], a[1])) return null;
    r -= i.text.length, i = o[0], n = o[1]
  }
  return {
    path: n,
    offset: r
  }
}

function e6(e, t) {
  var n = e4(e, t.anchor);
  if (!n) return null;
  if (d.e6.isCollapsed(t)) return {
    anchor: n,
    focus: n
  };
  var r = e4(e, t.focus);
  return r ? {
    anchor: n,
    focus: r
  } : null
}

function e5(e, t, n) {
  var r = P.get(e),
    i = null == r ? void 0 : r.find(e => {
      var {
        path: n
      } = e;
      return d.y$.equals(n, t.path)
    });
  if (!i || t.offset <= i.diff.start) return d.E9.transform(t, n, {
    affinity: "backward"
  });
  var {
    diff: a
  } = i;
  if (t.offset <= a.start + a.text.length) {
    var o = {
        path: t.path,
        offset: a.start
      },
      s = d.E9.transform(o, n, {
        affinity: "backward"
      });
    return s ? {
      path: s.path,
      offset: s.offset + t.offset - a.start
    } : null
  }
  var u = {
      path: t.path,
      offset: t.offset - a.text.length + a.end - a.start
    },
    c = d.E9.transform(u, n, {
      affinity: "backward"
    });
  return c ? "split_node" === n.type && d.y$.equals(n.path, t.path) && u.offset < n.position && a.start < n.position ? c : {
    path: c.path,
    offset: c.offset + a.text.length - a.end + a.start
  } : null
}

function e8(e, t, n) {
  var r = e5(e, t.anchor, n);
  if (!r) return null;
  if (d.e6.isCollapsed(t)) return {
    anchor: r,
    focus: r
  };
  var i = e5(e, t.focus, n);
  return i ? {
    anchor: r,
    focus: i
  } : null
}

function e9(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function e7(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? e9(Object(n), !0).forEach(function(t) {
      m(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e9(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var te = function() {},
  tt = e => (null == e ? void 0 : e.constructor.name) === "DataTransfer",
  tn = ["node"];

function tr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}
var ti = {
    subtree: !0,
    childList: !0,
    characterData: !0
  },
  ta = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
  to = ["text"];

function ts(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function tu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ts(Object(n), !0).forEach(function(t) {
      m(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ts(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var tc = e => c.createElement(c.Fragment, null, ez(e)),
  tl = e => {
    var t, n, r, a, s, l, f = (0, c.useCallback)(e => c.createElement(td, Object.assign({}, e)), []),
      {
        autoFocus: p,
        decorate: h = tf,
        onDOMBeforeInput: _,
        placeholder: b,
        readOnly: v = !1,
        renderElement: y,
        renderLeaf: T,
        renderPlaceholder: D = f,
        scrollSelectionIntoView: R = tp,
        style: z = {},
        as: G = "div",
        disableDefaultStyles: K = !1
      } = e,
      q = g(e, ta),
      Q = e$(),
      [X, J] = (0, c.useState)(!1),
      ee = (0, c.useRef)(null),
      et = (0, c.useRef)([]);
    var {
      onUserInput: en,
      receivedUserInput: ei
    } = (t = eR(), n = (0, c.useRef)(!1), r = (0, c.useRef)(0), a = (0, c.useCallback)(() => {
      if (!n.current) {
        n.current = !0;
        var e = ev.getWindow(t);
        e.cancelAnimationFrame(r.current), r.current = e.requestAnimationFrame(() => {
          n.current = !1
        })
      }
    }, []), (0, c.useEffect)(() => () => cancelAnimationFrame(r.current), []), {
      receivedUserInput: n,
      onUserInput: a
    }), [, eo] = (0, c.useReducer)(e => e + 1, 0);
    U.set(Q, eo), M.set(Q, v);
    var el = (0, c.useMemo)(() => ({
      isDraggingInternally: !1,
      isUpdatingSelection: !1,
      latestElement: null,
      hasMarkPlaceholder: !1
    }), []);
    (0, c.useLayoutEffect)(() => () => {
      if (null != el && null != el.latestElement) el.latestElement.remove(), el.latestElement = null
    }, []), (0, c.useEffect)(() => {
      ee.current && p && ee.current.focus()
    }, [p]);
    var ef = (0, c.useCallback)(u()(() => {
        if ((es || !ev.isComposing(Q)) && (!el.isUpdatingSelection || null != ey && ey.isFlushing()) && !el.isDraggingInternally) {
          var e = ev.findDocumentOrShadowRoot(Q),
            {
              activeElement: t
            } = e,
            n = ev.toDOMNode(Q, Q),
            r = e.getSelection();
          if (t === n ? (el.latestElement = t, O.set(Q, !0)) : O.delete(Q), !r) return d.YR.deselect(Q);
          var {
            anchorNode: i,
            focusNode: a
          } = r, o = ev.hasEditableTarget(Q, i) || ev.isTargetInsideNonReadonlyVoid(Q, i), s = ev.hasEditableTarget(Q, a) || ev.isTargetInsideNonReadonlyVoid(Q, a);
          if (o && s) {
            var u = ev.toSlateRange(Q, r, {
              exactMatch: !1,
              suppressThrow: !0
            });
            u && (ev.isComposing(Q) || null != ey && ey.hasPendingChanges() || null != ey && ey.isFlushing() ? null == ey || ey.handleUserSelect(u) : d.YR.select(Q, u))
          }
          v && (!o || !s) && d.YR.deselect(Q)
        }
      }, 100), [v]),
      ep = (0, c.useMemo)(() => o()(ef, 0), [ef]),
      ey = function(e) {
        var t, {
            node: n
          } = e,
          r = g(e, tn);
        if (!es) return null;
        var i = eR();
        var a = (t = (0, c.useRef)(!1), (0, c.useEffect)(() => (t.current = !0, () => {
            t.current = !1
          }), []), t.current),
          [o] = (0, c.useState)(() => (function(e) {
            var {
              editor: t,
              scheduleOnDOMSelectionChange: n,
              onDOMSelectionChange: r
            } = e, i = !1, a = null, o = null, s = null, u = 0, c = !1, l = () => {
              var e = F.get(t);
              if (F.delete(t), e) {
                var {
                  selection: n
                } = t, r = e6(t, e);
                r && (!n || !d.e6.equals(r, n)) && d.YR.select(t, r)
              }
            }, f = () => {
              var e = B.get(t);
              if (B.delete(t), !!e) {
                if (e.at) {
                  var n = d.E9.isPoint(e.at) ? e4(t, e.at) : e6(t, e.at);
                  if (!n) return;
                  var r = d.ML.range(t, n);
                  (!t.selection || !d.e6.equals(t.selection, r)) && d.YR.select(t, n)
                }
                e.run()
              }
            }, p = () => {
              if (o && (clearTimeout(o), o = null), s && (clearTimeout(s), s = null), !b() && !_()) {
                l();
                return
              }!i && (i = !0, setTimeout(() => i = !1)), _() && (i = "action");
              var e = t.selection && d.ML.rangeRef(t, t.selection, {
                affinity: "forward"
              });
              L.set(t, t.marks), te("flush", B.get(t), P.get(t));
              for (var a = b(); u = null === (p = P.get(t)) || void 0 === p ? void 0 : p[0];) {
                var u, p, h, m = I.get(t);
                void 0 !== m && (I.delete(t), t.marks = m), m && !1 === c && (c = null);
                var g = function(e) {
                  var {
                    path: t,
                    diff: n
                  } = e;
                  return {
                    anchor: {
                      path: t,
                      offset: n.start
                    },
                    focus: {
                      path: t,
                      offset: n.end
                    }
                  }
                }(u);
                (!t.selection || !d.e6.equals(t.selection, g)) && d.YR.select(t, g), u.diff.text ? d.ML.insertText(t, u.diff.text) : d.ML.deleteFragment(t), P.set(t, null === (h = P.get(t)) || void 0 === h ? void 0 : h.filter(e => {
                  var {
                    id: t
                  } = e;
                  return t !== u.id
                })), ! function(e, t) {
                  var {
                    path: n,
                    diff: r
                  } = t;
                  if (!d.ML.hasPath(e, n)) return !1;
                  var i = d.NB.get(e, n);
                  if (!d.xv.isText(i)) return !1;
                  if (r.start !== i.text.length || 0 === r.text.length) return i.text.slice(r.start, r.start + r.text.length) === r.text;
                  var a = d.y$.next(n);
                  if (!d.ML.hasPath(e, a)) return !1;
                  var o = d.NB.get(e, a);
                  return d.xv.isText(o) && o.text.startsWith(r.text)
                }(t, u) && (a = !1, B.delete(t), L.delete(t), i = "action", F.delete(t), n.cancel(), r.cancel(), null == e || e.unref())
              }
              var v = null == e ? void 0 : e.unref();
              if (v && !F.get(t) && (!t.selection || !d.e6.equals(v, t.selection)) && d.YR.select(t, v), _()) {
                f();
                return
              }
              a && n(), n.flush(), r.flush(), l();
              var y = L.get(t);
              L.delete(t), void 0 !== y && (t.marks = y, t.onChange())
            }, h = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = x.get(t);
              if (!!n) {
                if (b() || e) {
                  n.style.display = "none";
                  return
                }
                n.style.removeProperty("display")
              }
            }, m = (e, n) => {
              var r, i, a, o, s, c, l, f, p, m = null !== (p = P.get(t)) && void 0 !== p ? p : [];
              P.set(t, m);
              var g = d.NB.leaf(t, e),
                _ = m.findIndex(t => d.y$.equals(t.path, e));
              if (_ < 0) {
                e3(g.text, n) && m.push({
                  path: e,
                  diff: n,
                  id: u++
                }), h();
                return
              }
              var b = (r = g.text, i = m[_].diff, a = n, o = Math.min(i.start, a.start), s = Math.max(0, Math.min(i.start + i.text.length, a.end) - a.start), c = e2(r, i, a), l = Math.max(a.start + a.text.length, i.start + i.text.length + (i.start + i.text.length > a.start ? a.text.length : 0) - s), f = c.slice(o, l), e3(r, {
                start: o,
                end: Math.max(i.end, a.end - i.text.length + (i.end - i.start)),
                text: f
              }));
              if (!b) {
                m.splice(_, 1), h();
                return
              }
              m[_] = e7(e7({}, m[_]), {}, {
                diff: b
              })
            }, g = function(e) {
              var {
                at: i
              } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              c = !1, F.delete(t), n.cancel(), r.cancel(), _() && p(), B.set(t, {
                at: i,
                run: e
              }), s = setTimeout(p)
            }, _ = () => !!B.get(t), b = () => {
              var e;
              return !!(null !== (e = P.get(t)) && void 0 !== e && e.length)
            }, v = e => {
              F.set(t, e), o && (clearTimeout(o), o = null);
              var {
                selection: n
              } = t;
              if (!!e) {
                var r = !n || !d.y$.equals(n.anchor.path, e.anchor.path),
                  i = !n || !d.y$.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                (r && c || i) && (c = !1), (r || b()) && (o = setTimeout(p, 200))
              }
            }, y = () => {
              !_() && (s = setTimeout(p))
            };
            return {
              flush: p,
              scheduleFlush: y,
              hasPendingDiffs: b,
              hasPendingAction: _,
              hasPendingChanges: () => _() || b(),
              isFlushing: () => i,
              handleUserSelect: v,
              handleCompositionEnd: e => {
                a && clearTimeout(a), a = setTimeout(() => {
                  A.set(t, !1), p()
                }, 25)
              },
              handleCompositionStart: e => {
                A.set(t, !0), a && (clearTimeout(a), a = null)
              },
              handleDOMBeforeInput: e => {
                o && (clearTimeout(o), o = null);
                var {
                  inputType: n
                } = e, r = null, i = e.dataTransfer || e.data || void 0;
                !1 !== c && "insertText" !== n && "insertCompositionText" !== n && (c = !1);
                var [a] = e.getTargetRanges();
                a && (r = ev.toSlateRange(t, a, {
                  exactMatch: !1,
                  suppressThrow: !0
                }));
                var s = ev.getWindow(t).getSelection();
                if (!r && s && (a = s, r = ev.toSlateRange(t, s, {
                    exactMatch: !1,
                    suppressThrow: !0
                  })), !!(r = null !== (A = r) && void 0 !== A ? A : t.selection)) {
                  var u = !0;
                  if (n.startsWith("delete")) {
                    if (d.e6.isExpanded(r)) {
                      var [l, f] = d.e6.edges(r);
                      if (d.NB.leaf(t, l.path).text.length === l.offset && 0 === f.offset) {
                        var p = d.ML.next(t, {
                          at: l.path,
                          match: d.xv.isText
                        });
                        p && d.y$.equals(p[1], f.path) && (r = {
                          anchor: f,
                          focus: f
                        })
                      }
                    }
                    var h = n.endsWith("Backward") ? "backward" : "forward",
                      [_, b] = d.e6.edges(r),
                      [E, S] = d.ML.leaf(t, _.path),
                      x = {
                        text: "",
                        start: _.offset,
                        end: b.offset
                      },
                      w = P.get(t),
                      C = null == w ? void 0 : w.find(e => d.y$.equals(e.path, S)),
                      T = C ? [C.diff, x] : [x];
                    if (0 === e2(E.text, ...T).length && (u = !1), d.e6.isExpanded(r)) {
                      if (u && d.y$.equals(r.anchor.path, r.focus.path)) {
                        var D = {
                          path: r.anchor.path,
                          offset: _.offset
                        };
                        return v(d.ML.range(t, D, D)), m(r.anchor.path, {
                          text: "",
                          end: b.offset,
                          start: _.offset
                        })
                      }
                      return g(() => d.ML.deleteFragment(t, {
                        direction: h
                      }), {
                        at: r
                      })
                    }
                  }
                  switch (n) {
                    case "deleteByComposition":
                    case "deleteByCut":
                    case "deleteByDrag":
                      return g(() => d.ML.deleteFragment(t), {
                        at: r
                      });
                    case "deleteContent":
                    case "deleteContentForward":
                      var {
                        anchor: M
                      } = r;
                      if (u && d.e6.isCollapsed(r)) {
                        var O = d.NB.leaf(t, M.path);
                        if (M.offset < O.text.length) return m(M.path, {
                          text: "",
                          start: M.offset,
                          end: M.offset + 1
                        })
                      }
                      return g(() => d.ML.deleteForward(t), {
                        at: r
                      });
                    case "deleteContentBackward":
                      var A, k, {
                          anchor: R
                        } = r,
                        N = Z(a) ? a.isCollapsed : !!(null !== (k = a) && void 0 !== k && k.collapsed);
                      if (u && N && d.e6.isCollapsed(r) && R.offset > 0) return m(R.path, {
                        text: "",
                        start: R.offset - 1,
                        end: R.offset
                      });
                      return g(() => d.ML.deleteBackward(t), {
                        at: r
                      });
                    case "deleteEntireSoftLine":
                      return g(() => {
                        d.ML.deleteBackward(t, {
                          unit: "line"
                        }), d.ML.deleteForward(t, {
                          unit: "line"
                        })
                      }, {
                        at: r
                      });
                    case "deleteHardLineBackward":
                      return g(() => d.ML.deleteBackward(t, {
                        unit: "block"
                      }), {
                        at: r
                      });
                    case "deleteSoftLineBackward":
                      return g(() => d.ML.deleteBackward(t, {
                        unit: "line"
                      }), {
                        at: r
                      });
                    case "deleteHardLineForward":
                      return g(() => d.ML.deleteForward(t, {
                        unit: "block"
                      }), {
                        at: r
                      });
                    case "deleteSoftLineForward":
                      return g(() => d.ML.deleteForward(t, {
                        unit: "line"
                      }), {
                        at: r
                      });
                    case "deleteWordBackward":
                      return g(() => d.ML.deleteBackward(t, {
                        unit: "word"
                      }), {
                        at: r
                      });
                    case "deleteWordForward":
                      return g(() => d.ML.deleteForward(t, {
                        unit: "word"
                      }), {
                        at: r
                      });
                    case "insertLineBreak":
                      return g(() => d.ML.insertSoftBreak(t), {
                        at: r
                      });
                    case "insertParagraph":
                      return g(() => d.ML.insertBreak(t), {
                        at: r
                      });
                    case "insertCompositionText":
                    case "deleteCompositionText":
                    case "insertFromComposition":
                    case "insertFromDrop":
                    case "insertFromPaste":
                    case "insertFromYank":
                    case "insertReplacementText":
                    case "insertText":
                      if (tt(i)) return g(() => ev.insertData(t, i), {
                        at: r
                      });
                      var L = null != i ? i : "";
                      if (I.get(t) && (L = L.replace("\uFEFF", "")), "insertText" === n && /.*\n.*\n$/.test(L) && (L = L.slice(0, -1)), L.includes("\n")) return g(() => {
                        var e = L.split("\n");
                        e.forEach((n, r) => {
                          n && d.ML.insertText(t, n), r !== e.length - 1 && d.ML.insertSoftBreak(t)
                        })
                      }, {
                        at: r
                      });
                      if (d.y$.equals(r.anchor.path, r.focus.path)) {
                        var [B, F] = d.e6.edges(r), U = {
                          start: B.offset,
                          end: F.offset,
                          text: L
                        };
                        if (L && c && "insertCompositionText" === n) {
                          var j = c.start + c.text.search(/\S|$/);
                          U.start + U.text.search(/\S|$/) === j + 1 && U.end === c.start + c.text.length ? (U.start -= 1, c = null, y()) : c = !1
                        } else c = "insertText" === n && (null === c ? U : !!(c && d.e6.isCollapsed(r)) && c.end + c.text.length === B.offset && e7(e7({}, c), {}, {
                          text: c.text + L
                        }));
                        if (u) {
                          m(B.path, U);
                          return
                        }
                      }
                      return g(() => d.ML.insertText(t, L), {
                        at: r
                      })
                  }
                }
              },
              handleKeyDown: e => {
                !b() && (h(!0), setTimeout(h))
              },
              handleDomMutations: e => {
                if (!(b() || _())) {
                  if (e.some(n => er(t, n, e))) {
                    var n;
                    null === (n = U.get(t)) || void 0 === n || n()
                  }
                }
              },
              handleInput: () => {
                (_() || !b()) && p()
              }
            }
          })(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? tr(Object(n), !0).forEach(function(t) {
                m(e, t, n[t])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tr(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
            }
            return e
          }({
            editor: i
          }, r)));
        return ! function(e, t, n) {
          var [r] = (0, c.useState)(() => new MutationObserver(t));
          eT(() => {
            r.takeRecords()
          }), (0, c.useEffect)(() => {
            if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
            return r.observe(e.current, n), () => r.disconnect()
          }, [])
        }(n, o.handleDomMutations, ti), N.set(i, o.scheduleFlush), a && o.flush(), o
      }({
        node: ee,
        onDOMSelectionChange: ef,
        scheduleOnDOMSelectionChange: ep
      });
    eT(() => {
      ee.current && (e = H(ee.current)) ? (E.set(Q, e), S.set(Q, ee.current), C.set(Q, ee.current), w.set(ee.current, Q)) : C.delete(Q);
      var e, {
          selection: t
        } = Q,
        n = ev.findDocumentOrShadowRoot(Q).getSelection();
      if (!(!n || !ev.isFocused(Q) || null != ey && ey.hasPendingAction())) {
        var r = e => {
            var r = "None" !== n.type;
            if (!!t || !!r) {
              var i = S.get(Q),
                a = !1;
              if (i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e) {
                var o = ev.toSlateRange(Q, n, {
                  exactMatch: !0,
                  suppressThrow: !0
                });
                if (o && d.e6.equals(o, t)) {
                  if (!el.hasMarkPlaceholder) return;
                  var s, {
                    anchorNode: u
                  } = n;
                  if (null != u && null !== (s = u.parentElement) && void 0 !== s && s.hasAttribute("data-slate-mark-placeholder")) return
                }
              }
              if (t && !ev.hasRange(Q, t)) {
                Q.selection = ev.toSlateRange(Q, n, {
                  exactMatch: !1,
                  suppressThrow: !0
                });
                return
              }
              el.isUpdatingSelection = !0;
              var c = t && ev.toDOMRange(Q, t);
              return c ? (d.e6.isBackward(t) ? n.setBaseAndExtent(c.endContainer, c.endOffset, c.startContainer, c.startOffset) : n.setBaseAndExtent(c.startContainer, c.startOffset, c.endContainer, c.endOffset), R(Q, c)) : n.removeAllRanges(), c
            }
          },
          i = r(),
          a = (null == ey ? void 0 : ey.isFlushing()) === "action";
        if (!es || !a) {
          setTimeout(() => {
            i && eu && ev.toDOMNode(Q, Q).focus(), el.isUpdatingSelection = !1
          });
          return
        }
        var o = null,
          s = requestAnimationFrame(() => {
            if (a) {
              var e = e => {
                try {
                  ev.toDOMNode(Q, Q).focus(), r(e)
                } catch (e) {}
              };
              e(), o = setTimeout(() => {
                e(!0), el.isUpdatingSelection = !1
              })
            }
          });
        return () => {
          cancelAnimationFrame(s), o && clearTimeout(o)
        }
      }
    });
    var eE = (0, c.useCallback)(e => {
        if (en(), !v && ev.hasEditableTarget(Q, e.target) && !tm(e, _)) {
          if (ey) return ey.handleDOMBeforeInput(e);
          ep.flush(), ef.flush();
          var {
            selection: t
          } = Q, {
            inputType: n
          } = e, r = e.dataTransfer || e.data || void 0, i = "insertCompositionText" === n || "deleteCompositionText" === n;
          if (i && ev.isComposing(Q)) return;
          var a = !1;
          if ("insertText" === n && t && d.e6.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
            a = !0, Q.marks && (a = !1);
            var {
              anchor: o
            } = t, [s, u] = ev.toDOMPoint(Q, o), c = null === (p = s.parentElement) || void 0 === p ? void 0 : p.closest("a"), l = ev.getWindow(Q);
            if (a && c && ev.hasDOMNode(Q, c)) {
              var f, p, h, m, g = null == l ? void 0 : l.document.createTreeWalker(c, NodeFilter.SHOW_TEXT).lastChild();
              g === s && (null === (m = g.textContent) || void 0 === m ? void 0 : m.length) === u && (a = !1)
            }
            if (a && s.parentElement && (null == l ? void 0 : null === (h = l.getComputedStyle(s.parentElement)) || void 0 === h ? void 0 : h.whiteSpace) === "pre") {
              var b = d.ML.above(Q, {
                at: o.path,
                match: e => d.W_.isElement(e) && d.ML.isBlock(Q, e)
              });
              b && d.NB.string(b[0]).includes("	") && (a = !1)
            }
          }
          if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
            var [y] = e.getTargetRanges();
            if (y) {
              var E = ev.toSlateRange(Q, y, {
                exactMatch: !1,
                suppressThrow: !1
              });
              if (!t || !d.e6.equals(t, E)) {
                a = !1;
                var S = !i && Q.selection && d.ML.rangeRef(Q, Q.selection);
                d.YR.select(Q, E), S && k.set(Q, S)
              }
            }
          }
          if (!i) {
            if (!a && e.preventDefault(), t && d.e6.isExpanded(t) && n.startsWith("delete")) {
              var x = n.endsWith("Backward") ? "backward" : "forward";
              d.ML.deleteFragment(Q, {
                direction: x
              });
              return
            }
            switch (n) {
              case "deleteByComposition":
              case "deleteByCut":
              case "deleteByDrag":
                d.ML.deleteFragment(Q);
                break;
              case "deleteContent":
              case "deleteContentForward":
                d.ML.deleteForward(Q);
                break;
              case "deleteContentBackward":
                d.ML.deleteBackward(Q);
                break;
              case "deleteEntireSoftLine":
                d.ML.deleteBackward(Q, {
                  unit: "line"
                }), d.ML.deleteForward(Q, {
                  unit: "line"
                });
                break;
              case "deleteHardLineBackward":
                d.ML.deleteBackward(Q, {
                  unit: "block"
                });
                break;
              case "deleteSoftLineBackward":
                d.ML.deleteBackward(Q, {
                  unit: "line"
                });
                break;
              case "deleteHardLineForward":
                d.ML.deleteForward(Q, {
                  unit: "block"
                });
                break;
              case "deleteSoftLineForward":
                d.ML.deleteForward(Q, {
                  unit: "line"
                });
                break;
              case "deleteWordBackward":
                d.ML.deleteBackward(Q, {
                  unit: "word"
                });
                break;
              case "deleteWordForward":
                d.ML.deleteForward(Q, {
                  unit: "word"
                });
                break;
              case "insertLineBreak":
                d.ML.insertSoftBreak(Q);
                break;
              case "insertParagraph":
                d.ML.insertBreak(Q);
                break;
              case "insertFromComposition":
              case "insertFromDrop":
              case "insertFromPaste":
              case "insertFromYank":
              case "insertReplacementText":
              case "insertText":
                "insertFromComposition" === n && ev.isComposing(Q) && (J(!1), A.set(Q, !1)), (null == r ? void 0 : r.constructor.name) === "DataTransfer" ? ev.insertData(Q, r) : "string" == typeof r && (a ? et.current.push(() => d.ML.insertText(Q, r)) : d.ML.insertText(Q, r))
            }
            var w = null === (f = k.get(Q)) || void 0 === f ? void 0 : f.unref();
            k.delete(Q), w && (!Q.selection || !d.e6.equals(Q.selection, w)) && d.YR.select(Q, w)
          }
        }
      }, [v, _]),
      eS = (0, c.useCallback)(e => {
        null == e ? (ef.cancel(), ep.cancel(), S.delete(Q), C.delete(Q), ee.current && eb && ee.current.removeEventListener("beforeinput", eE)) : eb && e.addEventListener("beforeinput", eE), ee.current = e
      }, [ee, eE, ef, ep]);
    eT(() => {
      var e = ev.getWindow(Q);
      return e.document.addEventListener("selectionchange", ep), () => {
        e.document.removeEventListener("selectionchange", ep)
      }
    }, [ep]);
    var ex = h([Q, []]);
    if (b && 1 === Q.children.length && 1 === Array.from(d.NB.texts(Q)).length && "" === d.NB.string(Q) && !X) {
      var ew = d.ML.start(Q, []);
      ex.push({
        [j]: !0,
        placeholder: b,
        anchor: ew,
        focus: ew
      })
    }
    var {
      marks: eC
    } = Q;
    if (el.hasMarkPlaceholder = !1, Q.selection && d.e6.isCollapsed(Q.selection) && eC) {
      var {
        anchor: eD
      } = Q.selection, eM = d.NB.leaf(Q, eD.path), eO = g(eM, to);
      if (!d.xv.equals(eM, eC, {
          loose: !0
        })) {
        el.hasMarkPlaceholder = !0;
        var eA = Object.fromEntries(Object.keys(eO).map(e => [e, null]));
        ex.push(tu(tu(tu({
          [Y]: !0
        }, eA), eC), {}, {
          anchor: eD,
          focus: eD
        }))
      }
    }(0, c.useEffect)(() => {
      setTimeout(() => {
        var {
          selection: e
        } = Q;
        if (e) {
          var {
            anchor: t
          } = e, n = d.NB.leaf(Q, t.path);
          if (eC && !d.xv.equals(n, eC, {
              loose: !0
            })) {
            I.set(Q, eC);
            return
          }
        }
        I.delete(Q)
      })
    });
    var ek = null === (s = x.get(Q)) || void 0 === s ? void 0 : null === (l = s.getBoundingClientRect()) || void 0 === l ? void 0 : l.height;
    return c.createElement(eH.Provider, {
      value: v
    }, c.createElement(eF.Provider, {
      value: h
    }, c.createElement(e1, {
      node: ee,
      receivedUserInput: ei
    }, c.createElement(G, Object.assign({
      role: v ? void 0 : "textbox",
      "aria-multiline": !v || void 0
    }, q, {
      spellCheck: (!!eb || !e_) && q.spellCheck,
      autoCorrect: eb || !e_ ? q.autoCorrect : "false",
      autoCapitalize: eb || !e_ ? q.autoCapitalize : "false",
      "data-slate-editor": !0,
      "data-slate-node": "value",
      contentEditable: !v,
      zindex: -1,
      suppressContentEditableWarning: !0,
      ref: eS,
      style: tu(tu({}, K ? {} : tu({
        position: "relative",
        outline: "none",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      }, ek ? {
        minHeight: ek
      } : {})), z),
      onBeforeInput: (0, c.useCallback)(e => {
        if (!eb && !v && !th(e, q.onBeforeInput) && ev.hasSelectableTarget(Q, e.target) && (e.preventDefault(), !ev.isComposing(Q))) {
          var t = e.data;
          d.ML.insertText(Q, t)
        }
      }, [v]),
      onInput: (0, c.useCallback)(e => {
        if (!th(e, q.onInput)) {
          if (ey) {
            ey.handleInput();
            return
          }
          for (var t of et.current) t();
          et.current = []
        }
      }, []),
      onBlur: (0, c.useCallback)(e => {
        if (v || el.isUpdatingSelection || !ev.hasSelectableTarget(Q, e.target) || th(e, q.onBlur)) return;
        var t = ev.findDocumentOrShadowRoot(Q);
        if (el.latestElement === t.activeElement) return;
        var {
          relatedTarget: n
        } = e;
        if (!(n === ev.toDOMNode(Q, Q) || V(n) && n.hasAttribute("data-slate-spacer"))) {
          if (null != n && $(n) && ev.hasDOMNode(Q, n)) {
            var r = ev.toSlateNode(Q, n);
            if (d.W_.isElement(r) && !Q.isVoid(r)) return
          }
          if (ec) {
            var i = t.getSelection();
            null == i || i.removeAllRanges()
          }
          O.delete(Q)
        }
      }, [v, q.onBlur]),
      onClick: (0, c.useCallback)(e => {
        if (ev.hasTarget(Q, e.target) && !th(e, q.onClick) && $(e.target)) {
          var t = ev.toSlateNode(Q, e.target),
            n = ev.findPath(Q, t);
          if (!d.ML.hasPath(Q, n) || d.NB.get(Q, n) !== t) return;
          if (3 === e.detail && n.length >= 1) {
            var r = n;
            if (!(d.W_.isElement(t) && d.ML.isBlock(Q, t))) {
              var i, a = d.ML.above(Q, {
                match: e => d.W_.isElement(e) && d.ML.isBlock(Q, e),
                at: n
              });
              r = null !== (i = null == a ? void 0 : a[1]) && void 0 !== i ? i : n.slice(0, 1)
            }
            var o = d.ML.range(Q, r);
            d.YR.select(Q, o);
            return
          }
          if (!v) {
            var s = d.ML.start(Q, n),
              u = d.ML.end(Q, n),
              c = d.ML.void(Q, {
                at: s
              }),
              l = d.ML.void(Q, {
                at: u
              });
            if (c && l && d.y$.equals(c[1], l[1])) {
              var f = d.ML.range(Q, s);
              d.YR.select(Q, f)
            }
          }
        }
      }, [v, q.onClick]),
      onCompositionEnd: (0, c.useCallback)(e => {
        if (ev.hasSelectableTarget(Q, e.target)) {
          if (ev.isComposing(Q) && (J(!1), A.set(Q, !1)), null == ey || ey.handleCompositionEnd(e), !th(e, q.onCompositionEnd) && !es) {
            if (!ec && !eh && !ea && !eg && !em && e.data) {
              var t = I.get(Q);
              I.delete(Q), void 0 !== t && (L.set(Q, Q.marks), Q.marks = t), d.ML.insertText(Q, e.data);
              var n = L.get(Q);
              L.delete(Q), void 0 !== n && (Q.marks = n)
            }
          }
        }
      }, [q.onCompositionEnd]),
      onCompositionUpdate: (0, c.useCallback)(e => {
        ev.hasSelectableTarget(Q, e.target) && !th(e, q.onCompositionUpdate) && !ev.isComposing(Q) && (J(!0), A.set(Q, !0))
      }, [q.onCompositionUpdate]),
      onCompositionStart: (0, c.useCallback)(e => {
        if (ev.hasSelectableTarget(Q, e.target)) {
          if (null == ey || ey.handleCompositionStart(e), !th(e, q.onCompositionStart) && !es) {
            J(!0);
            var {
              selection: t
            } = Q;
            if (t) {
              if (d.e6.isExpanded(t)) {
                d.ML.deleteFragment(Q);
                return
              }
              var n = d.ML.above(Q, {
                match: e => d.W_.isElement(e) && d.ML.isInline(Q, e),
                mode: "highest"
              });
              if (n) {
                var [, r] = n;
                if (d.ML.isEnd(Q, t.anchor, r)) {
                  var i = d.ML.after(Q, r);
                  d.YR.setSelection(Q, {
                    anchor: i,
                    focus: i
                  })
                }
              }
            }
          }
        }
      }, [q.onCompositionStart]),
      onCopy: (0, c.useCallback)(e => {
        ev.hasSelectableTarget(Q, e.target) && !th(e, q.onCopy) && (e.preventDefault(), ev.setFragmentData(Q, e.clipboardData, "copy"))
      }, [q.onCopy]),
      onCut: (0, c.useCallback)(e => {
        if (!v && ev.hasSelectableTarget(Q, e.target) && !th(e, q.onCut)) {
          e.preventDefault(), ev.setFragmentData(Q, e.clipboardData, "cut");
          var {
            selection: t
          } = Q;
          if (t) {
            if (d.e6.isExpanded(t)) d.ML.deleteFragment(Q);
            else {
              var n = d.NB.parent(Q, t.anchor.path);
              d.ML.isVoid(Q, n) && d.YR.delete(Q)
            }
          }
        }
      }, [v, q.onCut]),
      onDragOver: (0, c.useCallback)(e => {
        if (ev.hasTarget(Q, e.target) && !th(e, q.onDragOver)) {
          var t = ev.toSlateNode(Q, e.target);
          d.W_.isElement(t) && d.ML.isVoid(Q, t) && e.preventDefault()
        }
      }, [q.onDragOver]),
      onDragStart: (0, c.useCallback)(e => {
        if (!v && ev.hasTarget(Q, e.target) && !th(e, q.onDragStart)) {
          var t = ev.toSlateNode(Q, e.target),
            n = ev.findPath(Q, t);
          if (d.W_.isElement(t) && d.ML.isVoid(Q, t) || d.ML.void(Q, {
              at: n,
              voids: !0
            })) {
            var r = d.ML.range(Q, n);
            d.YR.select(Q, r)
          }
          el.isDraggingInternally = !0, ev.setFragmentData(Q, e.dataTransfer, "drag")
        }
      }, [v, q.onDragStart]),
      onDrop: (0, c.useCallback)(e => {
        if (!v && ev.hasTarget(Q, e.target) && !th(e, q.onDrop)) {
          e.preventDefault();
          var t = Q.selection,
            n = ev.findEventRange(Q, e),
            r = e.dataTransfer;
          d.YR.select(Q, n), el.isDraggingInternally && t && !d.e6.equals(t, n) && !d.ML.void(Q, {
            at: n,
            voids: !0
          }) && d.YR.delete(Q, {
            at: t
          }), ev.insertData(Q, r), !ev.isFocused(Q) && ev.focus(Q)
        }
        el.isDraggingInternally = !1
      }, [v, q.onDrop]),
      onDragEnd: (0, c.useCallback)(e => {
        !v && el.isDraggingInternally && q.onDragEnd && ev.hasTarget(Q, e.target) && q.onDragEnd(e), el.isDraggingInternally = !1
      }, [v, q.onDragEnd]),
      onFocus: (0, c.useCallback)(e => {
        if (!v && !el.isUpdatingSelection && ev.hasEditableTarget(Q, e.target) && !th(e, q.onFocus)) {
          var t = ev.toDOMNode(Q, Q),
            n = ev.findDocumentOrShadowRoot(Q);
          if (el.latestElement = n.activeElement, eu && e.target !== t) {
            t.focus();
            return
          }
          O.set(Q, !0)
        }
      }, [v, q.onFocus]),
      onKeyDown: (0, c.useCallback)(e => {
        if (!v && ev.hasEditableTarget(Q, e.target)) {
          null == ey || ey.handleKeyDown(e);
          var {
            nativeEvent: t
          } = e;
          if (ev.isComposing(Q) && !1 === t.isComposing && (A.set(Q, !1), J(!1)), !(th(e, q.onKeyDown) || ev.isComposing(Q))) {
            var {
              selection: n
            } = Q, r = Q.children[null !== n ? n.focus.path[0] : 0], a = "rtl" === i()(d.NB.string(r));
            if (eQ.isRedo(t)) {
              e.preventDefault();
              "function" == typeof Q.redo && Q.redo();
              return
            }
            if (eQ.isUndo(t)) {
              e.preventDefault();
              "function" == typeof Q.undo && Q.undo();
              return
            }
            if (eQ.isMoveLineBackward(t)) {
              e.preventDefault(), d.YR.move(Q, {
                unit: "line",
                reverse: !0
              });
              return
            }
            if (eQ.isMoveLineForward(t)) {
              e.preventDefault(), d.YR.move(Q, {
                unit: "line"
              });
              return
            }
            if (eQ.isExtendLineBackward(t)) {
              e.preventDefault(), d.YR.move(Q, {
                unit: "line",
                edge: "focus",
                reverse: !0
              });
              return
            }
            if (eQ.isExtendLineForward(t)) {
              e.preventDefault(), d.YR.move(Q, {
                unit: "line",
                edge: "focus"
              });
              return
            }
            if (eQ.isMoveBackward(t)) {
              e.preventDefault(), n && d.e6.isCollapsed(n) ? d.YR.move(Q, {
                reverse: !a
              }) : d.YR.collapse(Q, {
                edge: "start"
              });
              return
            }
            if (eQ.isMoveForward(t)) {
              e.preventDefault(), n && d.e6.isCollapsed(n) ? d.YR.move(Q, {
                reverse: a
              }) : d.YR.collapse(Q, {
                edge: "end"
              });
              return
            }
            if (eQ.isMoveWordBackward(t)) {
              e.preventDefault(), n && d.e6.isExpanded(n) && d.YR.collapse(Q, {
                edge: "focus"
              }), d.YR.move(Q, {
                unit: "word",
                reverse: !a
              });
              return
            }
            if (eQ.isMoveWordForward(t)) {
              e.preventDefault(), n && d.e6.isExpanded(n) && d.YR.collapse(Q, {
                edge: "focus"
              }), d.YR.move(Q, {
                unit: "word",
                reverse: a
              });
              return
            }
            if (eb) {
              if ((ed || ec) && n && (eQ.isDeleteBackward(t) || eQ.isDeleteForward(t)) && d.e6.isCollapsed(n)) {
                var o = d.NB.parent(Q, n.anchor.path);
                if (d.W_.isElement(o) && d.ML.isVoid(Q, o) && (d.ML.isInline(Q, o) || d.ML.isBlock(Q, o))) {
                  e.preventDefault(), d.ML.deleteBackward(Q, {
                    unit: "block"
                  });
                  return
                }
              }
            } else {
              if (eQ.isBold(t) || eQ.isItalic(t) || eQ.isTransposeCharacter(t)) {
                e.preventDefault();
                return
              }
              if (eQ.isSoftBreak(t)) {
                e.preventDefault(), d.ML.insertSoftBreak(Q);
                return
              }
              if (eQ.isSplitBlock(t)) {
                e.preventDefault(), d.ML.insertBreak(Q);
                return
              }
              if (eQ.isDeleteBackward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(Q, {
                  direction: "backward"
                }) : d.ML.deleteBackward(Q);
                return
              }
              if (eQ.isDeleteForward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(Q, {
                  direction: "forward"
                }) : d.ML.deleteForward(Q);
                return
              }
              if (eQ.isDeleteLineBackward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(Q, {
                  direction: "backward"
                }) : d.ML.deleteBackward(Q, {
                  unit: "line"
                });
                return
              }
              if (eQ.isDeleteLineForward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(Q, {
                  direction: "forward"
                }) : d.ML.deleteForward(Q, {
                  unit: "line"
                });
                return
              }
              if (eQ.isDeleteWordBackward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(Q, {
                  direction: "backward"
                }) : d.ML.deleteBackward(Q, {
                  unit: "word"
                });
                return
              }
              if (eQ.isDeleteWordForward(t)) {
                e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(Q, {
                  direction: "forward"
                }) : d.ML.deleteForward(Q, {
                  unit: "word"
                });
                return
              }
            }
          }
        }
      }, [v, q.onKeyDown]),
      onPaste: (0, c.useCallback)(e => {
        !v && ev.hasEditableTarget(Q, e.target) && !th(e, q.onPaste) && (!eb || W(e.nativeEvent) || ec) && (e.preventDefault(), ev.insertData(Q, e.clipboardData))
      }, [v, q.onPaste])
    }), c.createElement(tc, {
      decorations: ex,
      node: Q,
      renderElement: y,
      renderPlaceholder: D,
      renderLeaf: T,
      selection: Q.selection
    })))))
  },
  td = e => {
    var {
      attributes: t,
      children: n
    } = e;
    return c.createElement("span", Object.assign({}, t), n, es && c.createElement("br", null))
  },
  tf = () => [],
  tp = (e, t) => {
    if (t.getBoundingClientRect && (!e.selection || e.selection && d.e6.isCollapsed(e.selection))) {
      var n = t.startContainer.parentElement;
      n.getBoundingClientRect = t.getBoundingClientRect.bind(t), (0, l.Z)(n, {
        scrollMode: "if-needed"
      }), delete n.getBoundingClientRect
    }
  },
  th = (e, t) => {
    if (!t) return !1;
    var n = t(e);
    return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped()
  },
  tm = (e, t) => {
    if (!t) return !1;
    var n = t(e);
    return null != n ? n : e.defaultPrevented
  },
  tg = (0, c.createContext)(!1),
  t_ = () => (0, c.useContext)(tg),
  tb = (0, c.createContext)({}),
  tv = ["editor", "children", "onChange", "value"],
  ty = e => {
    var t, n, r, i, {
        editor: a,
        children: o,
        onChange: s,
        value: u
      } = e,
      l = g(e, tv),
      f = (0, c.useRef)(!1),
      [p, h] = c.useState(() => {
        if (!d.NB.isNodeList(u)) throw Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(d.o4.stringify(u)));
        if (!d.ML.isEditor(a)) throw Error("[Slate] editor is invalid! You passed: ".concat(d.o4.stringify(a)));
        return a.children = u, Object.assign(a, l), {
          v: 0,
          editor: a
        }
      });
    var {
      selectorContext: m,
      onChange: _
    } = (t = a, n = (0, c.useRef)([]).current, r = (0, c.useRef)({
      editor: t
    }).current, i = (0, c.useCallback)(e => {
      r.editor = e, n.forEach(t => t(e))
    }, []), {
      selectorContext: (0, c.useMemo)(() => ({
        getSlate: () => r.editor,
        addEventListener: e => (n.push(e), () => {
          n.splice(n.indexOf(e), 1)
        })
      }), [n, r]),
      onChange: i
    }), b = (0, c.useCallback)(() => {
      s && s(a.children), h(e => ({
        v: e.v + 1,
        editor: a
      })), _(a)
    }, [s]);
    (0, c.useEffect)(() => (R.set(a, b), () => {
      R.set(a, () => {}), f.current = !0
    }), [b]);
    var [v, y] = (0, c.useState)(ev.isFocused(a));
    return (0, c.useEffect)(() => {
      y(ev.isFocused(a))
    }), eT(() => {
      var e = () => y(ev.isFocused(a));
      return ei ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
        document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
      }) : (document.addEventListener("focus", e, !0), document.addEventListener("blur", e, !0), () => {
        document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0)
      })
    }, []), c.createElement(tb.Provider, {
      value: m
    }, c.createElement(eV.Provider, {
      value: p
    }, c.createElement(ek.Provider, {
      value: p.editor
    }, c.createElement(tg.Provider, {
      value: v
    }, o))))
  },
  tE = (e, t) => {
    var n = (t.top + t.bottom) / 2;
    return e.top <= n && e.bottom >= n
  },
  tS = (e, t, n) => {
    var r = ev.toDOMRange(e, t).getBoundingClientRect(),
      i = ev.toDOMRange(e, n).getBoundingClientRect();
    return tE(r, i) && tE(i, r)
  },
  tx = (e, t) => {
    var n = d.ML.range(e, d.e6.end(t)),
      r = Array.from(d.ML.positions(e, {
        at: t
      })),
      i = 0,
      a = r.length,
      o = Math.floor(a / 2);
    if (tS(e, d.ML.range(e, r[i]), n)) return d.ML.range(e, r[i], n);
    if (r.length < 2) return d.ML.range(e, r[r.length - 1], n);
    for (; o !== r.length && o !== i;) tS(e, d.ML.range(e, r[o]), n) ? a = o : i = o, o = Math.floor((i + a) / 2);
    return d.ML.range(e, r[a], n)
  };

function tw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function tC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? tw(Object(n), !0).forEach(function(t) {
      m(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tw(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}
var tT = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
      {
        apply: n,
        onChange: r,
        deleteBackward: i,
        addMark: a,
        removeMark: o
      } = e;
    return D.set(e, new WeakMap), e.addMark = (t, n) => {
      var r, i;
      null === (r = N.get(e)) || void 0 === r || r(), !I.get(e) && null !== (i = P.get(e)) && void 0 !== i && i.length && I.set(e, null), L.delete(e), a(t, n)
    }, e.removeMark = t => {
      var n;
      !I.get(e) && null !== (n = P.get(e)) && void 0 !== n && n.length && I.set(e, null), L.delete(e), o(t)
    }, e.deleteBackward = t => {
      if ("line" !== t) return i(t);
      if (e.selection && d.e6.isCollapsed(e.selection)) {
        var n = d.ML.above(e, {
          match: t => d.W_.isElement(t) && d.ML.isBlock(e, t),
          at: e.selection
        });
        if (n) {
          var [, r] = n, a = d.ML.range(e, r, e.selection.anchor), o = tx(e, a);
          !d.e6.isCollapsed(o) && d.YR.delete(e, {
            at: o
          })
        }
      }
    }, e.apply = t => {
      var r, i = [],
        a = P.get(e);
      if (null != a && a.length) {
        var o = a.map(e => (function(e, t) {
          var {
            path: n,
            diff: r,
            id: i
          } = e;
          switch (t.type) {
            case "insert_text":
              if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
              if (t.offset <= r.start) return {
                diff: {
                  start: t.text.length + r.start,
                  end: t.text.length + r.end,
                  text: r.text
                },
                id: i,
                path: n
              };
              return {
                diff: {
                  start: r.start,
                  end: r.end + t.text.length,
                  text: r.text
                }, id: i, path: n
              };
            case "remove_text":
              if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
              if (t.offset + t.text.length <= r.start) return {
                diff: {
                  start: r.start - t.text.length,
                  end: r.end - t.text.length,
                  text: r.text
                },
                id: i,
                path: n
              };
              return {
                diff: {
                  start: r.start,
                  end: r.end - t.text.length,
                  text: r.text
                }, id: i, path: n
              };
            case "split_node":
              if (!d.y$.equals(t.path, n) || t.position >= r.end) return {
                diff: r,
                id: i,
                path: d.y$.transform(n, t, {
                  affinity: "backward"
                })
              };
              if (t.position > r.start) return {
                diff: {
                  start: r.start,
                  end: Math.min(t.position, r.end),
                  text: r.text
                },
                id: i,
                path: n
              };
              return {
                diff: {
                  start: r.start - t.position,
                  end: r.end - t.position,
                  text: r.text
                }, id: i, path: d.y$.transform(n, t, {
                  affinity: "forward"
                })
              };
            case "merge_node":
              if (!d.y$.equals(t.path, n)) return {
                diff: r,
                id: i,
                path: d.y$.transform(n, t)
              };
              return {
                diff: {
                  start: r.start + t.position,
                  end: r.end + t.position,
                  text: r.text
                }, id: i, path: d.y$.transform(n, t)
              }
          }
          var a = d.y$.transform(n, t);
          return a ? {
            diff: r,
            path: a,
            id: i
          } : null
        })(e, t)).filter(Boolean);
        P.set(e, o)
      }
      var s = F.get(e);
      s && F.set(e, e8(e, s, t));
      var u = B.get(e);
      if (null != u && u.at) {
        var c = d.E9.isPoint(null == u ? void 0 : u.at) ? e5(e, u.at, t) : e8(e, u.at, t);
        B.set(e, c ? tC(tC({}, u), {}, {
          at: c
        }) : null)
      }
      switch (t.type) {
        case "insert_text":
        case "remove_text":
        case "set_node":
        case "split_node":
          i.push(...tD(e, t.path));
          break;
        case "set_selection":
          null === (r = k.get(e)) || void 0 === r || r.unref(), k.delete(e);
          break;
        case "insert_node":
        case "remove_node":
          i.push(...tD(e, d.y$.parent(t.path)));
          break;
        case "merge_node":
          i.push(...tD(e, d.y$.previous(t.path)));
          break;
        case "move_node":
          i.push(...tD(e, d.y$.common(d.y$.parent(t.path), d.y$.parent(t.newPath))))
      }
      for (var [l, f] of(n(t), i)) {
        var [p] = d.ML.node(e, l);
        T.set(p, f)
      }
    }, e.setFragmentData = n => {
      var {
        selection: r
      } = e;
      if (!r) return;
      var [i, a] = d.e6.edges(r), o = d.ML.void(e, {
        at: i.path
      }), s = d.ML.void(e, {
        at: a.path
      });
      if (!d.e6.isCollapsed(r) || !!o) {
        var u = ev.toDOMRange(e, r),
          c = u.cloneContents(),
          l = c.childNodes[0];
        if (c.childNodes.forEach(e => {
            e.textContent && "" !== e.textContent.trim() && (l = e)
          }), s) {
          var [f] = s, p = u.cloneRange(), h = ev.toDOMNode(e, f);
          p.setEndAfter(h), c = p.cloneContents()
        }
        if (o && (l = c.querySelector("[data-slate-spacer]")), Array.from(c.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
            var t = "n" === e.getAttribute("data-slate-zero-width");
            e.textContent = t ? "\n" : ""
          }), K(l)) {
          var m = l.ownerDocument.createElement("span");
          m.style.whiteSpace = "pre", m.appendChild(l), c.appendChild(m), l = m
        }
        var g = JSON.stringify(e.getFragment()),
          _ = window.btoa(encodeURIComponent(g));
        l.setAttribute("data-slate-fragment", _), n.setData("application/".concat(t), _);
        var b = c.ownerDocument.createElement("div");
        return b.appendChild(c), b.setAttribute("hidden", "true"), c.ownerDocument.body.appendChild(b), n.setData("text/html", b.innerHTML), n.setData("text/plain", ee(b)), c.ownerDocument.body.removeChild(b), n
      }
    }, e.insertData = t => {
      !e.insertFragmentData(t) && e.insertTextData(t)
    }, e.insertFragmentData = n => {
      var r = n.getData("application/".concat(t)) || en(n);
      if (r) {
        var i = JSON.parse(decodeURIComponent(window.atob(r)));
        return e.insertFragment(i), !0
      }
      return !1
    }, e.insertTextData = t => {
      var n = t.getData("text/plain");
      if (n) {
        var r = n.split(/\r\n|\r|\n/),
          i = !1;
        for (var a of r) i && d.YR.splitNodes(e, {
          always: !0
        }), e.insertText(a), i = !0;
        return !0
      }
      return !1
    }, e.onChange = t => {
      h.unstable_batchedUpdates(() => {
        var n = R.get(e);
        n && n(), r(t)
      })
    }, e
  },
  tD = (e, t) => {
    var n = [];
    for (var [r, i] of d.ML.levels(e, {
        at: t
      })) {
      var a = ev.findKey(e, r);
      n.push([i, a])
    }
    return n
  }