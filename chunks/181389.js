"use strict";
n.r(t), n.d(t, {
  generateDecorators: function() {
    return r
  },
  getSelectionScope: function() {
    return o
  }
}), n("653041");
var s = n("395041");
n("349033");
var a = n("999650");
n("72006");
var l = n("405656");
n("981631");
let i = {
  [a.ComponentTypes.FILTER]: s.Filter,
  [a.ComponentTypes.ANSWER]: s.Answer
};

function r() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = [];
  return Object.keys(e).forEach(n => {
    let s = e[n];
    t.push({
      strategy: (e, t, s) => (function(e, t, n, s) {
        t.findEntityRanges(t => {
          let n = t.getEntity();
          return null !== n && e.getEntity(n).getType() === s
        }, n)
      })(s, e, t, n),
      component: i[s.componentType]
    })
  }), t
}

function o(e, t) {
  let {
    focusOffset: n,
    anchorOffset: s
  } = t.getSelection();
  return (0, l.getSelectionScope)(e, n, s)
}