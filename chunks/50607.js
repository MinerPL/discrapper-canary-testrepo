"use strict";
n.d(t, {
  B: function() {
    return o
  }
});
var i = n(519953),
  r = n(436660),
  s = n(887490);
let o = (e, t) => {
  let {
    addMark: n,
    removeMark: o,
    deleteBackward: a,
    deleteForward: l,
    setFragmentData: u,
    insertData: _,
    insertFragmentData: d,
    insertTextData: c
  } = e;
  return (e = (0, i.BU)(e)).addMark = n, e.removeMark = o, e.setFragmentData = u, e.insertData = _, e.insertFragmentData = d, e.insertTextData = c, e.deleteBackward = n => {
    if ("line" !== n || t) a(n);
    else {
      let t = s.lP.getLineActionRange(e, !0);
      null != t && r.Q.delete(e, {
        at: t
      })
    }
  }, e.deleteForward = n => {
    if ("line" !== n || t) l(n);
    else {
      let t = s.lP.getLineActionRange(e, !1);
      null != t && r.Q.delete(e, {
        at: t
      })
    }
  }, e
}