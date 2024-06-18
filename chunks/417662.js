"use strict";
n.d(t, {
  E: function() {
    return c
  },
  Z: function() {
    return E
  }
}), n(47120);
var i = n(653603),
  r = n.n(i),
  s = n(512722),
  o = n.n(s),
  a = n(53529),
  l = n(50659),
  u = n(436660),
  _ = n(887490),
  d = n(981631);

function c(e, t) {
  let {
    cmd: n = !1,
    ctrl: i = !1,
    alt: r = !1,
    shift: s = !1
  } = t;
  return (null == n || e.metaKey === n) && (null == i || e.ctrlKey === i) && (null == r || e.altKey === r) && (null == s || e.shiftKey === s)
}

function E(e) {
  return e.onKeyDown = t => {
    var n, i, s, E;
    let I = e.isMac;
    switch (t.which) {
      case d.yXg.B:
        if (!_.bN.isEditorEmpty(e) && c(t, {
            ctrl: !I,
            cmd: I
          })) return (0, l.py)(e, "bold"), !0;
        break;
      case d.yXg.I:
        if (!_.bN.isEditorEmpty(e) && c(t, {
            ctrl: !I,
            cmd: I
          })) return (0, l.py)(e, "italics"), !0;
        break;
      case d.yXg.U:
        if (!_.bN.isEditorEmpty(e) && c(t, {
            ctrl: !I,
            cmd: I
          })) return (0, l.py)(e, "underline"), !0;
        break;
      case d.yXg.S:
        if (!_.bN.isEditorEmpty(e) && c(t, {
            ctrl: !I,
            cmd: I,
            shift: !0
          })) return (0, l.py)(e, "strikethrough"), !0;
        break;
      case d.yXg.TAB:
        if (null != e.selection && c(t, {
            shift: null
          })) {
          let [i, r] = _.M8.edges(e.selection), s = _.bN.blocks(e).slice(i.path[0], r.path[0] + 1), o = !0;
          for (let [e] of s)
            if ("line" !== e.type || !(null === (n = e.codeBlockState) || void 0 === n ? void 0 : n.isInCodeBlock)) {
              o = !1;
              break
            } if (o) {
            if (!t.shiftKey && _.M8.isCollapsed(e.selection)) return u.Q.insertText(e, "  "), !0;
            let n = !t.shiftKey;
            return a.T.withSingleEntry(e, () => {
              var t, i, r, o;
              let a = null !== (r = null === (t = e.selection) || void 0 === t ? void 0 : t.anchor) && void 0 !== r ? r : _.bN.start(e, []),
                l = null !== (o = null === (i = e.selection) || void 0 === i ? void 0 : i.focus) && void 0 !== o ? o : _.bN.end(e, []);
              for (let [t, i] of s) {
                let r = t.children[0];
                if (!_.LC.isText(t.children[0])) continue;
                let s = _.C0.child(i, 0),
                  o = {
                    path: s,
                    offset: 0
                  };
                if (n) u.Q.insertText(e, "  ", {
                  at: o
                }), _.C0.equals(a.path, s) && 0 !== a.offset && (a = {
                  path: s,
                  offset: a.offset + 2
                }), _.C0.equals(l.path, s) && 0 !== l.offset && (l = {
                  path: s,
                  offset: l.offset + 2
                });
                else if (r.text.startsWith("  ")) {
                  let t = {
                    path: _.C0.child(i, 0),
                    offset: 2
                  };
                  u.Q.delete(e, {
                    at: {
                      anchor: o,
                      focus: t
                    }
                  }), _.C0.equals(a.path, s) && (a = {
                    path: s,
                    offset: Math.max(0, a.offset - 2)
                  }), _.C0.equals(l.path, s) && (l = {
                    path: s,
                    offset: Math.max(0, l.offset - 2)
                  })
                }
              }
              u.Q.select(e, {
                anchor: a,
                focus: l
              })
            }), !0
          }
        }
        break;
      case d.yXg.ARROW_LEFT:
      case d.yXg.ARROW_RIGHT: {
        let n, o;
        if (c(t, {
            shift: null
          })) n = "character";
        else if (c(t, {
            ctrl: !I,
            alt: I,
            shift: null
          })) n = "word";
        else if (I && c(t, {
            cmd: !0,
            shift: null
          })) return !1;
        else return !1;
        t.shiftKey && (o = "focus");
        let a = e.children[null !== (E = null === (s = e.selection) || void 0 === s ? void 0 : null === (i = s.focus) || void 0 === i ? void 0 : i.path[0]) && void 0 !== E ? E : 0],
          l = "rtl" === r()(_.aj.string(a)),
          T = t.which === d.yXg.ARROW_LEFT == !l;
        return u.Q.keyboardMove(e, {
          reverse: T,
          unit: n,
          edge: o
        }), !0
      }
      case d.yXg.A:
        if (I && c(t, {
            ctrl: !0
          })) {
          let t = _.bN.getCurrentBlock(e);
          if (null != t) {
            let [, n] = t, i = {
              path: _.C0.child(n, 0),
              offset: 0
            };
            return u.Q.select(e, {
              anchor: i,
              focus: i
            }), !0
          }
        }
        break;
      case d.yXg.E:
        if (I && c(t, {
            ctrl: !0
          })) {
          let t = _.bN.getCurrentBlock(e);
          if (null != t) {
            let [n, i] = t, r = _.C0.child(i, n.children.length - 1), [s] = _.bN.node(e, r), o = {
              path: r,
              offset: s.text.length
            };
            return u.Q.select(e, {
              anchor: o,
              focus: o
            }), !0
          }
        }
        break;
      case d.yXg.BACKSPACE:
      case d.yXg.DELETE:
      case d.yXg.K:
        let T = t.which === d.yXg.BACKSPACE;
        if ((!I && t.which !== d.yXg.K && c(t, {
            ctrl: !0,
            shift: !0
          }) || I && t.which !== d.yXg.K && c(t, {
            cmd: !0
          }) || I && t.which === d.yXg.K && c(t, {
            ctrl: !0
          })) && null != e.selection) {
          let [t, n] = _.M8.edges(e.selection), [i, r] = _.bN.node(e, [T ? t.path[0] : n.path[0]]);
          if (o()(_.q.isElement(i) && _.bN.isBlock(e, i), "Top-most node of selection is not a block"), T && !_.Jz.isAtStart(t, [i, r]) || !T && !_.Jz.isAtEnd(n, [i, r])) return T ? e.deleteBackward("line") : e.deleteForward("line"), !0
        }
    }
    return !1
  }, e
}