"use strict";
n.d(t, {
  m: function() {
    return u
  }
});
var r = n(573654),
  i = n(158545),
  a = n(144459),
  o = n(964742),
  s = {
    type: o.TL,
    payload: {
      clientOffset: null,
      sourceClientOffset: null
    }
  };

function u(e) {
  return function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        publishSource: !0
      },
      u = n.publishSource,
      c = n.clientOffset,
      l = n.getSourceClientOffset,
      d = e.getMonitor(),
      f = e.getRegistry();
    e.dispatch((0, i.T)(c)),
      function(e, t, n) {
        (0, r.k)(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(e) {
          (0, r.k)(n.getSource(e), "Expected sourceIds to be registered.")
        })
      }(t, d, f);
    var p = function(e, t) {
      for (var n = null, r = e.length - 1; r >= 0; r--)
        if (t.canDragSource(e[r])) {
          n = e[r];
          break
        } return n
    }(t, d);
    if (null === p) {
      e.dispatch(s);
      return
    }
    var h = null;
    if (c) {
      if (!l) throw Error("getSourceClientOffset must be defined");
      (function(e) {
        (0, r.k)("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.")
      })(l), h = l(p)
    }
    e.dispatch((0, i.T)(c, h));
    var m = f.getSource(p).beginDrag(d, p);
    if (null != m) {
      (function(e) {
        (0, r.k)((0, a.Kn)(e), "Item must be an object.")
      })(m), f.pinSource(p);
      var g = f.getSourceType(p);
      return {
        type: o.qu,
        payload: {
          itemType: g,
          item: m,
          sourceId: p,
          clientOffset: c || null,
          sourceClientOffset: h || null,
          isSourcePublic: !!(void 0 === u || u)
        }
      }
    }
  }
}