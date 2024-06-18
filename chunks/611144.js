"use strict";
n.d(t, {
  Z: function() {
    return l
  },
  s: function() {
    return r
  }
});
var i, r, s = n(536895);

function o(e, t) {
  return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t)
}

function a(e, t) {
  return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t)
}(i = r || (r = {})).UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS", i.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION";

function l(e, t) {
  var n, i, r, l;
  switch (t.type) {
    case s.Us.NAVIGATE_UP:
      return function(e, t) {
        let n = o(0, e.focusedY - 1);
        return {
          ...e,
          focusedX: a(e.columnCounts[n] - 1, e.focusedX),
          focusedY: n
        }
      }(e, 0);
    case s.Us.NAVIGATE_DOWN:
      return function(e, t) {
        let n = a(e.focusedY + 1, e.columnCounts.length - 1);
        return {
          ...e,
          focusedX: a(e.columnCounts[n] - 1, e.focusedX),
          focusedY: n
        }
      }(e, 0);
    case s.Us.NAVIGATE_RIGHT:
      return function(e, t) {
        let n = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY],
          i = n ? 0 : a(e.focusedX + 1, e.columnCounts[e.focusedY] - 1),
          r = n ? e.focusedY + 1 : e.focusedY;
        return {
          ...e,
          focusedX: i,
          focusedY: r
        }
      }(e, 0);
    case s.Us.NAVIGATE_LEFT:
      return function(e, t) {
        let n = 0 !== e.focusedY && 0 === e.focusedX,
          i = n ? e.focusedY - 1 : e.focusedY,
          r = n ? e.columnCounts[i] - 1 : o(0, e.focusedX - 1);
        return {
          ...e,
          focusedX: r,
          focusedY: i
        }
      }(e, 0);
    case s.Us.NAVIGATE_INLINE_START:
      ;
      return n = 0, {
        ...e,
        focusedX: 0
      };
    case s.Us.NAVIGATE_INLINE_END:
      ;
      return r = 0, {
        ...i = e,
        focusedX: i.columnCounts[i.focusedY] - 1
      };
    case s.Us.NAVIGATE_START:
      ;
      return l = 0, {
        ...e,
        focusedX: 0,
        focusedY: 0
      };
    case s.Us.NAVIGATE_END:
      return function(e, t) {
        let n = e.columnCounts.length - 1;
        return {
          ...e,
          focusedX: e.columnCounts[n] - 1,
          focusedY: n
        }
      }(e, 0);
    case "UPDATE_COLUMN_COUNTS":
      return function(e, t) {
        let {
          columnCounts: n
        } = t, i = a(o(0, n.length - 1), e.focusedY);
        return {
          ...e,
          columnCounts: n,
          focusedX: a(null == n[i] ? 0 : n[i] - 1, e.focusedX),
          focusedY: i
        }
      }(e, t);
    case "SET_FOCUSED_POSITION":
      return function(e, t) {
        let {
          x: n,
          y: i
        } = t, r = o(0, a(i, e.columnCounts.length - 1));
        return {
          ...e,
          focusedX: o(0, a(n, e.columnCounts[r] - 1)),
          focusedY: r
        }
      }(e, t);
    case s.Us.SELECT_FOCUSED_ITEM:
      break;
    default:
      console.warn("Grid navigator was given an unhandled action ".concat(t.type))
  }
  return e
}