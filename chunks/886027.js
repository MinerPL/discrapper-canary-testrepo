"use strict";
n.d(t, {
  Z: function() {
    return l
  }
}), n(47120);
var i = n(53529),
  r = n(436660),
  s = n(887490),
  o = n(515270);
let a = new Set(["line", "blockQuote"]);

function l(e) {
  let {
    deleteBackward: t,
    deleteFragment: n,
    insertBreak: l,
    onChange: u
  } = e;
  e.deleteBackward = n => {
    let i = s.bN.getCurrentBlock(e);
    if ((null == i ? void 0 : i[0].type) === "blockQuote") {
      let t = s.M8.toPoint(e.selection);
      if (null != t && s.C0.isFirstChild(i[1], t.path) && 0 === t.offset) {
        r.Q.setNodes(e, {
          type: "line"
        }, {
          at: i[1]
        });
        return
      }
    }
    t(n)
  }, e.deleteFragment = t => {
    if (null != e.selection) {
      let [o, a] = s.M8.edges(e.selection), l = [o.path[0]], u = s.bN.node(e, l), _ = [a.path[0]], d = s.C0.equals(l, _) ? null : s.bN.node(e, _);
      i.T.withSingleEntry(e, () => {
        (null == u ? void 0 : u[0].type) === "blockQuote" && s.Jz.isAtStart(o, u) && r.Q.setNodes(e, {
          type: "line"
        }, {
          at: l
        }), (null == d ? void 0 : d[0].type) === "blockQuote" && s.Jz.isAtEnd(a, d) && r.Q.setNodes(e, {
          type: "line"
        }, {
          at: _
        }), n(t)
      });
      return
    }
    n(t)
  }, e.insertBreak = () => {
    let t = s.bN.getCurrentBlock(e);
    if ((null == t ? void 0 : t[0].type) === "blockQuote") {
      let n = s.M8.toPoint(e.selection);
      if (null == n) return;
      ! function(e, t, n) {
        if (!s.bN.isEmpty(e, t[0])) return !1;
        let i = s.bN.previous(e, {
          at: t[1]
        });
        return !!(null != i && s.aj.isType(i[0], "blockQuote") && s.bN.isEmpty(e, i[0]) && s.Jz.isAtStart(n, t)) && (r.Q.setNodes(e, {
          type: "line"
        }, {
          at: t[1]
        }), r.Q.removeNodes(e, {
          at: i[1]
        }), !0)
      }(e, t, n) && r.Q.splitNodes(e, {
        at: n,
        always: !0
      });
      return
    }
    l()
  };
  let _ = null,
    d = !0;
  return e.onChange = () => {
    let t = s.bN.richValue(e);
    (t !== _ || e.previewMarkdown !== d) && (i.T.withMergedEntry(e, () => {
      s.bN.withoutNormalizing(e, () => (function(e) {
        let t = !1;
        for (let l of s.bN.blocks(e)) {
          let [u, _] = l;
          if (!a.has(u.type)) continue;
          let d = {
            path: s.C0.child(_, 0),
            offset: 0
          };
          if ((0, o.iF)(e, d)) {
            "blockQuote" === u.type && (r.Q.setNodes(e, {
              type: "line"
            }, {
              at: _
            }), r.Q.insertText(e, "> ", {
              at: d
            }));
            continue
          }
          if ("blockQuote" === u.type || s.bN.areStylesDisabled(e)) continue;
          let c = u.children[0];
          if (!s.LC.isText(c)) continue;
          let E = c.text.match(/^\s*>>> /),
            I = c.text.match(/^\s*> /);
          if ((null != I || null != E || t) && (r.Q.setNodes(e, {
              type: "blockQuote"
            }, {
              at: _
            }), !t)) {
            var n, i;
            let o = null !== (i = null !== (n = null == I ? void 0 : I[0].length) && void 0 !== n ? n : null == E ? void 0 : E[0].length) && void 0 !== i ? i : 0,
              a = s.C0.child(_, 0);
            r.Q.delete(e, {
              at: {
                anchor: {
                  path: a,
                  offset: 0
                },
                focus: {
                  path: a,
                  offset: o
                }
              }
            }), t = null != E
          }
        }
      })(e))
    }), _ = t, d = e.previewMarkdown), u()
  }, e
}