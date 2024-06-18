"use strict";
n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var i = n(436660),
  r = n(887490),
  s = n(42530);

function o(e) {
  let {
    apply: t,
    onChange: n
  } = e;
  return e.apply = n => {
    t(n), r.Ew.isValid(e, e.selection) && (e.lastGoodSelection = e.selection)
  }, e.onChange = () => {
    if (!r.Ew.isValid(e, e.selection) && (e.selection = function(e) {
        let t;
        if (r.Ew.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
        else {
          let n = r.bN.end(e, []);
          t = {
            anchor: n,
            focus: n
          }
        }
        return t
      }(e)), null != e.selection) {
      let t, n, [o, a] = r.M8.edges(e.selection),
        l = !1;
      for (; null != o && null != (t = r.bN.getParentVoid(e, o)) && !s.On.includes(t[0].type);) o = r.bN.before(e, o, {
        unit: "offset"
      }), l = !0;
      for (; null != a && null != (n = r.bN.getParentVoid(e, a)) && !s.On.includes(n[0].type);) a = r.bN.after(e, a, {
        unit: "offset"
      }), l = !0;
      l && null != o && null != a && (r.M8.isForward(e.selection) ? i.Q.select(e, {
        anchor: o,
        focus: a
      }) : i.Q.select(e, {
        anchor: a,
        focus: o
      }))
    }
    n()
  }, e
}