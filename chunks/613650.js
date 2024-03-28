"use strict";
var n = r("503201"),
  i = r("968377"),
  o = r("65183"),
  a = r("581079"),
  u = r("533138"),
  s = o.List,
  c = o.Map,
  l = function(t, e, r) {
    if (!!t) {
      var n = e.get(t);
      n && e.set(t, r(n))
    }
  };
t.exports = function(t, e) {
  e.isCollapsed() || a(!1);
  var r, o, f, p = e.getAnchorKey(),
    h = t.getBlockMap(),
    d = h.get(p),
    g = d.getText();
  if (!g) {
    var y = d.getType();
    if ("unordered-list-item" === y || "ordered-list-item" === y) return u(t, e, function(t) {
      return t.merge({
        type: "unstyled",
        depth: 0
      })
    })
  }
  var v = e.getAnchorOffset(),
    m = d.getCharacterList(),
    _ = i(),
    b = d.merge({
      text: g.slice(0, v),
      characterList: m.slice(0, v)
    }),
    S = b.merge({
      key: _,
      text: g.slice(v),
      characterList: m.slice(v),
      data: c()
    }),
    w = h.toSeq().takeUntil(function(t) {
      return t === d
    }),
    k = h.toSeq().skipUntil(function(t) {
      return t === d
    }).rest(),
    x = w.concat([
      [p, b],
      [_, S]
    ], k).toOrderedMap();
  if (d instanceof n) {
    ;
    d.getChildKeys().isEmpty() || a(!1), r = x, o = b, f = S, x = r.withMutations(function(t) {
      var e = o.getKey(),
        r = f.getKey();
      l(o.getParentKey(), t, function(t) {
        var n = t.getChildKeys(),
          i = n.indexOf(e) + 1,
          o = n.toArray();
        return o.splice(i, 0, r), t.merge({
          children: s(o)
        })
      }), l(o.getNextSiblingKey(), t, function(t) {
        return t.merge({
          prevSibling: r
        })
      }), l(e, t, function(t) {
        return t.merge({
          nextSibling: r
        })
      }), l(r, t, function(t) {
        return t.merge({
          prevSibling: e
        })
      })
    })
  }
  return t.merge({
    blockMap: x,
    selectionBefore: e,
    selectionAfter: e.merge({
      anchorKey: _,
      anchorOffset: 0,
      focusKey: _,
      focusOffset: 0,
      isBackward: !1
    })
  })
}