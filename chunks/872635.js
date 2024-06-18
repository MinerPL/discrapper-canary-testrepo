"use strict";
n.d(t, {
  I: function() {
    return R
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(519953),
  l = n(40851),
  u = n(489465),
  _ = n(15322),
  d = n(672108),
  c = n(979232),
  E = n(149111),
  I = n(61753),
  T = n(153850),
  h = n(5967),
  S = n(53529),
  f = n(50659),
  N = n(436660),
  A = n(887490),
  m = n(447525),
  O = n(364610);

function R(e) {
  var t;
  let {
    editorRef: n,
    options: r,
    iconClassName: s,
    dividerClassName: a
  } = e, l = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
  return null == l ? null : (0, i.jsxs)("div", {
    className: O.buttons,
    children: [(0, i.jsx)(C, {
      slateEditor: l,
      markdownSyntax: "bold",
      children: (0, i.jsx)(_.Z, {
        className: o()(O.icon, s)
      })
    }), (0, i.jsx)(C, {
      slateEditor: l,
      markdownSyntax: "italics",
      children: (0, i.jsx)(c.Z, {
        className: o()(O.icon, s)
      })
    }), (0, i.jsx)(C, {
      slateEditor: l,
      markdownSyntax: "strikethrough",
      children: (0, i.jsx)(I.Z, {
        className: o()(O.icon, s)
      })
    }), (0, i.jsx)("div", {
      className: o()(O.divider, a)
    }), !(null == r ? void 0 : r.disableBlockQuotes) && (0, i.jsx)(p, {
      slateEditor: l,
      blockType: "blockQuote",
      children: (0, i.jsx)(u.Z, {
        className: o()(O.icon, s)
      })
    }), (0, i.jsx)(C, {
      slateEditor: l,
      markdownSyntax: "inlineCode",
      children: (0, i.jsx)(d.Z, {
        className: o()(O.icon, s)
      })
    }), (0, i.jsx)(C, {
      slateEditor: l,
      markdownSyntax: "spoiler",
      children: (0, i.jsx)(E.Z, {
        className: o()(O.icon, s)
      })
    })]
  })
}

function C(e) {
  let {
    slateEditor: t,
    markdownSyntax: n,
    children: r
  } = e, s = !1;
  if ((null == t ? void 0 : t.selection) != null) {
    let [e, i] = A.M8.edges(t.selection);
    s = null != (0, f.U4)(t, e, i).before[n]
  }
  return (0, i.jsx)("button", {
    "aria-pressed": s,
    className: O.button,
    onClick: () => {
      null != t && S.T.withSingleEntry(t, () => (0, f.py)(t, n))
    },
    children: r
  })
}

function p(e) {
  let {
    blockType: t,
    slateEditor: n,
    children: r
  } = e, s = null != n ? A.bN.getCurrentBlock(n) : null, o = null != s && A.aj.isType(s[0], t);
  return (0, i.jsx)("button", {
    "aria-pressed": o,
    className: O.button,
    onClick: () => {
      null != n && S.T.withSingleEntry(n, () => (0, f.hm)(n, t))
    },
    children: r
  })
}

function g(e) {
  var t;
  let {
    slateEditor: n
  } = e, [i, s] = null !== (t = A.bN.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], o = r.useCallback(e => {
    if ((null == n ? void 0 : n.selection) == null || null == s) return;
    let t = n.selection;
    S.T.withSingleEntry(n, () => {
      N.Q.voidToText(n, e, s), N.Q.select(n, t)
    })
  }, [n, s]);
  return null == i ? null : (0, m.Z)(i, {
    replace: o
  })
}
t.Z = r.forwardRef(function(e, t) {
  var n;
  let {
    editorRef: s,
    containerRef: o,
    options: u
  } = e, _ = r.useRef(null), [d, c] = r.useState(!1), E = r.useRef(), I = r.useContext(l.ZP), S = r.useCallback(() => {
    c(!1), clearTimeout(E.current)
  }, []), f = r.useCallback(e => {
    var t;
    let n = I.renderWindow;
    !(e.target instanceof n.Node && (null === (t = _.current) || void 0 === t ? void 0 : t.contains(e.target))) && S()
  }, [I, S]), N = r.useCallback(e => {
    let t = I.renderWindow;
    if (e.target instanceof t.Element) {
      if (0 !== e.button) S();
      else {
        var n;
        let i = e.target instanceof t.Node && (null === (n = _.current) || void 0 === n ? void 0 : n.contains(e.target));
        clearTimeout(E.current), E.current = setTimeout(() => {
          var t;
          let n = null === (t = (0, h.uB)(e)) || void 0 === t ? void 0 : t.activeElement,
            r = o.current;
          c(i || null != n && null != r && r.contains(n))
        }, 100)
      }
    } else S()
  }, [I, o, S]);
  r.useImperativeHandle(t, () => ({
    hide: S
  }), [S]), r.useEffect(() => {
    let e = I.renderWindow;
    return e.document.addEventListener("keydown", S), e.document.addEventListener("mousedown", f), e.document.addEventListener("mouseup", N), e.addEventListener("focus", S), e.addEventListener("blur", S), () => {
      e.document.removeEventListener("keydown", S), e.document.removeEventListener("mousedown", f), e.document.removeEventListener("mouseup", N), e.removeEventListener("focus", S), e.removeEventListener("blur", S), clearTimeout(E.current)
    }
  }, [I, S, f, N]);
  let {
    x: m,
    y: C
  } = r.useMemo(() => {
    var e, t, n, i;
    let r = null === (e = s.current) || void 0 === e ? void 0 : e.getSlateEditor();
    if ((null == r ? void 0 : r.selection) == null || A.M8.isCollapsed(r.selection) || !d) return {
      x: null,
      y: null
    };
    let l = a.F3.findDocumentOrShadowRoot(r),
      u = l.getSelection();
    if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed) return {
      x: null,
      y: null
    };
    let _ = l.createRange();
    _.setStart(u.focusNode, u.focusOffset), _.setEnd(u.focusNode, u.focusOffset);
    let c = _.getBoundingClientRect(),
      E = l.createRange();
    E.setStart(u.anchorNode, u.anchorOffset), E.setEnd(u.anchorNode, u.anchorOffset);
    let I = E.getBoundingClientRect(),
      T = l.createRange();
    T.setStart(u.anchorNode, u.anchorOffset), T.setEnd(u.focusNode, u.focusOffset);
    let h = T.getBoundingClientRect(),
      S = c.x === I.x,
      f = S ? h.x : Math.min(c.x, I.x),
      N = S ? h.x + h.width : Math.max(c.x, I.x),
      m = null !== (i = null === (n = o.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== i ? i : 0;
    return {
      x: f + (N - f) / 2,
      y: Math.max(m, Math.min(I.y, c.y))
    }
  }, [o, d, s]), [p, L] = r.useState(0), [v, D] = r.useState(0);
  if (r.useLayoutEffect(() => {
      if (null == m || null == C || null == _.current) return;
      let e = _.current.getBoundingClientRect();
      D(e.width / 2), L(e.height + 12)
    }, [m, C]), null == m || null == C) return null;
  let M = null === (n = s.current) || void 0 === n ? void 0 : n.getSlateEditor();
  return null == M ? null : (0, i.jsx)(T.ZP, {
    children: (0, i.jsxs)("div", {
      id: "slate-toolbar",
      ref: _,
      className: O.toolbar,
      style: {
        top: C - p,
        left: m - v
      },
      onMouseDown: e => {
        e.stopPropagation()
      },
      onMouseUp: e => {
        e.stopPropagation()
      },
      children: [(0, i.jsx)(g, {
        slateEditor: M
      }), (0, i.jsx)(R, {
        editorRef: s,
        options: u
      })]
    })
  })
})