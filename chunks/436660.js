"use strict";
n.d(t, {
  Q: function() {
    return a
  }
}), n(571269), n(298267), n(47120);
var i = n(327432),
  r = n(91313),
  s = n(887490),
  o = n(42530);
let a = {
  ...i.YR,
  resetSelectionToStart(e) {
    i.YR.select(e, s.bN.start(e, []))
  },
  resetSelectionToEnd(e) {
    i.YR.select(e, s.bN.end(e, []))
  },
  delete(e, t) {
    let {
      at: n,
      distance: r,
      unit: o,
      reverse: a = !1,
      select: l = !1,
      bounds: u,
      voids: _
    } = t;
    if (null == n) {
      if (null == e.selection) return;
      n = e.selection
    }
    let [d, c] = s.M8.isRange(n) ? s.M8.edges(n) : s.bN.edges(e, n);
    if (null != r || null != o) {
      var E, I, T;
      if (a) {
        let t = null !== (E = s.bN.before(e, d, {
          distance: r,
          unit: o
        })) && void 0 !== E ? E : s.bN.start(e, []);
        if ("character" === o && (null != r ? r : 1) === 1 && s.C0.equals(d.path, c.path)) {
          let n = s.bN.leaf(e, d.path),
            i = null != n ? n[0].text : "";
          i.length > 0 && null != i[i.length - 1].match(/[\u0E00-\u0E7F]/) && (t = null !== (I = s.bN.before(e, d, {
            distance: r,
            unit: "offset"
          })) && void 0 !== I ? I : s.bN.start(e, []))
        }
        d = t
      } else c = null !== (T = s.bN.after(e, c, {
        distance: r,
        unit: o
      })) && void 0 !== T ? T : s.bN.end(e, [])
    }
    if (null != u) {
      let [e, t] = s.M8.edges(u);
      s.Jz.isBefore(d, e) && (d = e), s.Jz.isAfter(c, t) && (c = t)
    }!s.Jz.equals(d, c) && (i.YR.delete(e, {
      at: {
        anchor: d,
        focus: c
      },
      hanging: !0,
      voids: _
    }), l && s.bN.hasPath(e, d.path) && i.YR.select(e, d))
  },
  textToText(e, t, n) {
    var r;
    let o = s.bN.getSelectionOverlap(e, n),
      [a, l] = s.M8.edges(n),
      _ = null !== (r = s.bN.before(e, a)) && void 0 !== r ? r : s.bN.start(e, []),
      d = s.bN.after(e, l);
    s.M8.isExpanded(n) && i.YR.delete(e, {
      at: n,
      voids: !0
    }), i.YR.insertText(e, t, {
      at: _
    }), _ = null != _ ? _ : s.bN.start(e, []), d = null != d ? d : s.bN.end(e, []), u(e, o, _, d, d)
  },
  textToVoid(e, t, n) {
    let r = s.bN.getSelectionOverlap(e, n),
      o = s.M8.start(n),
      a = s.C0.next(o.path),
      l = {
        path: s.C0.next(a),
        offset: 0
      };
    i.YR.delete(e, {
      at: n,
      voids: !0
    }), 0 === o.offset && i.YR.insertNodes(e, [{
      text: ""
    }], {
      at: o.path
    }), i.YR.insertNodes(e, [t], {
      at: o
    }), (!s.bN.hasPath(e, l.path) || !s.LC.isText(s.bN.node(e, l.path)[0])) && i.YR.insertNodes(e, [{
      text: ""
    }], {
      at: l.path
    }), u(e, r, o, l, l)
  },
  textToInline(e, t, n) {
    let r = s.bN.getSelectionOverlap(e, n),
      o = t.children[t.children.length - 1],
      a = s.M8.start(n),
      l = s.C0.next(a.path),
      _ = {
        path: s.C0.child(l, t.children.length - 1),
        offset: s.LC.isText(o) ? o.text.length : 0
      };
    i.YR.delete(e, {
      at: n,
      voids: !0
    }), 0 === a.offset && i.YR.insertNodes(e, [{
      text: ""
    }], {
      at: a.path
    }), i.YR.insertNodes(e, [t], {
      at: a
    }), u(e, r, a, _, _)
  },
  voidToText(e, t, n) {
    var r;
    let o = s.bN.getSelectionOverlap(e, n),
      a = null !== (r = s.bN.before(e, n)) && void 0 !== r ? r : s.bN.start(e, []),
      l = {
        path: a.path,
        offset: a.offset + t.length
      };
    i.YR.delete(e, {
      at: n,
      voids: !0
    }), i.YR.insertText(e, t, {
      at: a
    }), u(e, o, a, a, l)
  },
  removeInline(e, t) {
    var n;
    let r = s.bN.getSelectionOverlap(e, t),
      o = null !== (n = s.bN.before(e, t)) && void 0 !== n ? n : s.bN.start(e, []);
    i.YR.delete(e, {
      at: t,
      voids: !0
    }), u(e, r, o, o, o)
  },
  removeInlineChildren(e, t) {
    let [n, r] = t, o = s.bN.getSelectionOverlap(e, r), a = {
      path: s.C0.child(r, 0),
      offset: 0
    };
    s.bN.withoutNormalizing(e, () => {
      for (let t = n.children.length - 1; t >= 0; t--) i.YR.removeNodes(e, {
        at: s.C0.child(r, t),
        voids: !0
      })
    }), u(e, o, null, a, null)
  },
  selectCommandOption(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      o = r.cr(e);
    if (null != o)
      for (let r = 0; r < o[0].children.length; r++) {
        let a = o[0].children[r];
        if (s.aj.isType(a, "applicationCommandOption") && a.optionName === t) {
          n ? i.YR.select(e, [0, r]) : i.YR.select(e, s.bN.end(e, [0, r]));
          return
        }
      }
  },
  selectPreviousCommandOption(e) {
    if (null == r.cr(e)) return;
    let t = null != e.selection ? e.selection.focus.path : s.bN.end(e, o.YD).path,
      n = r.HZ(e),
      a = s.bN.previous(e, {
        at: t,
        match: e => e !== (null == n ? void 0 : n[0]) && s.aj.isType(e, "applicationCommandOption")
      });
    null != a ? i.YR.select(e, a[1]) : s.C0.isAfter(t, o.u9) && i.YR.select(e, s.bN.end(e, o.u9))
  },
  selectNextCommandOption(e) {
    if (null == r.cr(e)) return;
    let t = null != e.selection ? e.selection.focus.path : s.bN.start(e, o.YD).path,
      n = r.HZ(e),
      l = s.bN.next(e, {
        at: t,
        match: e => e !== (null == n ? void 0 : n[0]) && s.aj.isType(e, "applicationCommandOption")
      });
    null != l ? i.YR.select(e, l[1]) : a.resetSelectionToEnd(e)
  },
  insertCommandOption(e, t) {
    a.resetSelectionToEnd(e), a.insertNodes(e, [{
      type: "applicationCommandOption",
      optionName: t.name,
      optionDisplayName: t.displayName,
      optionType: t.type,
      children: [{
        text: ""
      }]
    }])
  },
  keyboardMove(e, t) {
    let {
      reverse: n = !1,
      unit: r = "character",
      edge: o
    } = null != t ? t : {}, a = e.selection;
    if (null == a) return;
    if (void 0 === o && s.M8.isExpanded(a)) {
      i.YR.collapse(e, {
        edge: n ? "start" : "end"
      });
      return
    }
    let l = s.bN.leaf(e, a.anchor.path);
    if (null == l) return;
    let u = n ? s.bN.before : s.bN.after,
      _ = a.focus;
    for (; null != _;) {
      let t = r;
      n || a.focus.offset !== l[0].text.length ? n && 0 === a.focus.offset && (t = "offset") : t = "offset";
      let i = u(e, _, {
        unit: t
      });
      if (null == i || s.Jz.equals(_, i)) {
        _ = void 0;
        break
      }
      if (_ = i, null == s.bN.getParentVoid(e, _)) break
    }
    null != _ && ("focus" === o ? i.YR.setSelection(e, {
      focus: _
    }) : i.YR.setSelection(e, {
      focus: _,
      anchor: _
    }))
  }
};

function l(e, t, n, i, r) {
  switch (t) {
    case "start":
      return n;
    case "inside":
      return i;
    case "end":
      return r
  }
  return e
}

function u(e, t, n, i, r) {
  var s, o;
  if (null == t.anchor && null == t.focus) return;
  let u = l(null === (s = e.selection) || void 0 === s ? void 0 : s.anchor, t.anchor, n, i, r),
    _ = l(null === (o = e.selection) || void 0 === o ? void 0 : o.focus, t.focus, n, i, r);
  if (null != u && null != _) a.select(e, {
    anchor: u,
    focus: _
  })
}