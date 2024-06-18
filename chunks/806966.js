"use strict";
n.d(t, {
  Wq: function() {
    return u
  },
  Xn: function() {
    return _
  },
  ZN: function() {
    return l
  },
  c: function() {
    return r
  },
  kJ: function() {
    return a
  }
});
var i = n(652874);
let r = -1,
  s = Object.freeze({
    inspectedExpressionPosition: {
      rowIndex: 0,
      columnIndex: 0
    },
    activeCategoryIndex: 0,
    searchPlaceholder: null
  });

function o() {
  let e = (0, i.Z)(e => s);
  return {
    useStore: e,
    getState: () => e.getState(),
    setInspectedExpressionPosition: (t, n, i) => {
      e.setState({
        inspectedExpressionPosition: {
          rowIndex: n,
          columnIndex: t,
          source: i
        }
      })
    },
    setActiveCategoryIndex: t => {
      e.setState({
        activeCategoryIndex: t
      })
    },
    setSearchPlaceholder: t => {
      e.setState({
        searchPlaceholder: t
      })
    },
    resetStoreState: () => {
      e.setState(s)
    }
  }
}
let a = o(),
  l = o(),
  u = o(),
  _ = o()