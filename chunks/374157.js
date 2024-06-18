"use strict";
n.d(t, {
  Z: function() {
    return o
  }
}), n(47120), n(571269), n(298267);
var i = n(327432),
  r = n(436660),
  s = n(887490);

function o(e) {
  let {
    apply: t,
    deleteBackward: n,
    deleteForward: o,
    deleteFragment: l,
    insertText: _
  } = e;
  return e.apply = n => {
    var i;
    if ("set_selection" === n.type && (null === (i = e.composition) || void 0 === i ? void 0 : i.startedInsideInline) && s.M8.isRange(n.properties) && s.M8.isRange(n.newProperties) && s.M8.isCollapsed(n.newProperties)) {
      let t = s.bN.getParentInline(e, n.properties),
        i = s.bN.getParentInline(e, n.newProperties);
      if (null != t && (null == i || !s.C0.equals(t[1], i[1]))) return
    }
    t(n)
  }, e.insertText = t => {
    if (null != e.selection && null != s.bN.getCurrentInline(e)) {
      r.Q.insertText(e, t);
      return
    }
    _(t)
  }, e.deleteBackward = t => {
    !a(e, t, !0) && n(t)
  }, e.deleteForward = t => {
    !a(e, t, !1) && o(t)
  }, e.deleteFragment = t => {
    if (null != e.selection && s.M8.isExpanded(e.selection)) {
      var n, i, o, a;
      let u = e.selection.anchor,
        _ = e.selection.focus,
        d = s.bN.getParentInline(e, u),
        c = s.bN.getParentInline(e, _);
      if (null != d && null != c && s.C0.equals(d[1], c[1])) {
        l(t);
        return
      }
      let E = s.M8.isForward(e.selection);
      if (null != d) {
        let [, t] = d, [r, o] = s.bN.edges(e, t);
        E && s.Jz.equals(u, r) ? u = null !== (n = s.bN.before(e, r)) && void 0 !== n ? n : s.bN.start(e, []) : !E && s.Jz.equals(u, o) && (u = null !== (i = s.bN.after(e, o)) && void 0 !== i ? i : s.bN.end(e, []))
      }
      if (null != c) {
        let [, t] = c, [n, i] = s.bN.edges(e, t);
        !E && s.Jz.equals(_, n) ? _ = null !== (o = s.bN.before(e, n)) && void 0 !== o ? o : s.bN.start(e, []) : E && s.Jz.equals(_, i) && (_ = null !== (a = s.bN.after(e, i)) && void 0 !== a ? a : s.bN.end(e, []))
      }
      r.Q.delete(e, {
        at: {
          anchor: u,
          focus: _
        },
        reverse: "backward" === t,
        select: !0
      });
      return
    }
    l(t)
  }, i.ML.positions = u, e
}

function a(e, t, n) {
  let i = s.bN.getCurrentInline(e),
    o = s.bN.getCurrentBlock(e),
    a = s.M8.toPoint(e.selection);
  if (null == a || null == o || "block" === t) return !0;
  if ("line" === t && null == i) return !1;
  let l = i;
  if (null == l) {
    let t = (n ? s.bN.before : s.bN.after)(e, a);
    null != t && null != (l = s.bN.getParentInline(e, t)) && (a = t)
  }
  if (null != l) {
    let [i, o] = l;
    if (s.bN.isEmpty(e, i) || s.bN.isVoid(e, i)) r.Q.removeInline(e, o);
    else {
      let [i, l] = s.bN.edges(e, o);
      r.Q.delete(e, {
        at: a,
        unit: t,
        reverse: n,
        select: !0,
        bounds: {
          anchor: i,
          focus: l
        }
      })
    }
    return !0
  }
  let u = !1;
  if (null != o) {
    let [, t] = o, [i, r] = s.bN.edges(e, t);
    u = n && s.Jz.equals(a, i) || !n && s.Jz.equals(a, r)
  }
  if ("word" === t && !u) {
    let i = s.bN.getCurrentText(e);
    if (null != i) {
      let [, o] = i, [l, u] = s.bN.edges(e, o);
      return r.Q.delete(e, {
        at: a,
        unit: t,
        reverse: n,
        select: !0,
        bounds: {
          anchor: l,
          focus: u
        }
      }), !0
    }
  }
  return r.Q.delete(e, {
    at: a,
    unit: t,
    reverse: n,
    select: !0
  }), !0
}
let l = i.ML.positions;

function* u(e) {
  var t, n, i, r, o, a, u, _;
  let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      at: c = e.selection,
      unit: E = "offset",
      reverse: I = !1,
      voids: T = !1
    } = null != d ? d : {};
  if ("word" !== E) {
    for (let t of l(e, {
        ...d,
        voids: T || "block" === E
      })) yield t;
    return
  }
  if (null == c) return;
  let h = s.bN.range(e, c),
    [S, f] = s.M8.edges(h),
    N = s.bN.richValue(e),
    A = I ? -1 : 1,
    m = null !== (i = null === (t = S.path) || void 0 === t ? void 0 : t[0]) && void 0 !== i ? i : 0,
    O = null !== (r = null === (n = f.path) || void 0 === n ? void 0 : n[0]) && void 0 !== r ? r : N.length - 1,
    R = I ? m : O,
    C = I ? O : m;
  for (;;) {
    let t = N[C],
      n = null !== (u = C === m ? null === (o = S.path) || void 0 === o ? void 0 : o[1] : null) && void 0 !== u ? u : 0,
      i = null !== (_ = C === O ? null === (a = f.path) || void 0 === a ? void 0 : a[1] : null) && void 0 !== _ ? _ : t.children.length - 1,
      r = I ? i : n,
      c = I ? n : i,
      E = r;
    for (;;) {
      let n, i;
      let r = t.children[E],
        o = [C, E];
      if (n = s.C0.equals(o, S.path) || s.C0.isAncestor(o, S.path) ? !I && s.bN.isEnd(e, S, o) ? null : S : s.bN.start(e, o), i = s.C0.equals(o, f.path) || s.C0.isAncestor(o, f.path) ? I && s.bN.isStart(e, f, o) ? null : f : s.bN.end(e, o), null != n && null != i) {
        if (s.LC.isText(r) && 0 === r.text.length) {
          let e = {
            path: o,
            offset: 0
          };
          yield e, yield e
        } else if (s.bN.isInline(e, r) && s.LC.isText(r.children[0]) && 0 === r.children[0].text.length) {
          let e = {
            path: s.C0.child(o, 0),
            offset: 0
          };
          yield e, yield e
        } else {
          let t = {
            anchor: n,
            focus: i
          };
          for (let n of l(e, {
              ...d,
              at: t
            })) yield n
        }
      }
      if (E === c) break;
      E += A
    }
    if (C === R) break;
    C += A
  }
}