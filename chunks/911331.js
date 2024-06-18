"use strict";

function r(e) {
  return "object" == typeof e && null != e && 1 === e.nodeType
}

function i(e, t) {
  return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
}

function a(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n, r, a = getComputedStyle(e, null);
    return i(a.overflowY, t) || i(a.overflowX, t) || !!(r = function(e) {
      if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
      try {
        return e.ownerDocument.defaultView.frameElement
      } catch (e) {
        return null
      }
    }(n = e)) && (r.clientHeight < n.scrollHeight || r.clientWidth < n.scrollWidth)
  }
  return !1
}

function o(e, t, n, r, i, a, o, s) {
  return a < e && o > t || a > e && o < t ? 0 : a <= e && s <= n || o >= t && s >= n ? a - e - r : o > t && s < n || a < e && s > n ? o - t + i : 0
}
n.d(t, {
  Z: function() {
    return s
  }
});
var s = function(e, t) {
  var n = window,
    i = t.scrollMode,
    s = t.block,
    u = t.inline,
    c = t.boundary,
    l = t.skipOverflowHiddenElements,
    d = "function" == typeof c ? c : function(e) {
      return e !== c
    };
  if (!r(e)) throw TypeError("Invalid target");
  for (var f, p, h = document.scrollingElement || document.documentElement, m = [], g = e; r(g) && d(g);) {
    if ((g = null == (p = (f = g).parentElement) ? f.getRootNode().host || null : p) === h) {
      m.push(g);
      break
    }
    null != g && g === document.body && a(g) && !a(document.documentElement) || null != g && a(g, l) && m.push(g)
  }
  for (var _ = n.visualViewport ? n.visualViewport.width : innerWidth, b = n.visualViewport ? n.visualViewport.height : innerHeight, v = window.scrollX || pageXOffset, y = window.scrollY || pageYOffset, E = e.getBoundingClientRect(), S = E.height, x = E.width, w = E.top, C = E.right, T = E.bottom, D = E.left, M = "start" === s || "nearest" === s ? w : "end" === s ? T : w + S / 2, O = "center" === u ? D + x / 2 : "end" === u ? C : D, A = [], k = 0; k < m.length; k++) {
    var R = m[k],
      N = R.getBoundingClientRect(),
      I = N.height,
      L = N.width,
      P = N.top,
      B = N.right,
      F = N.bottom,
      U = N.left;
    if ("if-needed" === i && w >= 0 && D >= 0 && T <= b && C <= _ && w >= P && T <= F && D >= U && C <= B) break;
    var j = getComputedStyle(R),
      Y = parseInt(j.borderLeftWidth, 10),
      z = parseInt(j.borderTopWidth, 10),
      H = parseInt(j.borderRightWidth, 10),
      G = parseInt(j.borderBottomWidth, 10),
      V = 0,
      $ = 0,
      Z = "offsetWidth" in R ? R.offsetWidth - R.clientWidth - Y - H : 0,
      K = "offsetHeight" in R ? R.offsetHeight - R.clientHeight - z - G : 0,
      W = "offsetWidth" in R ? 0 === R.offsetWidth ? 0 : L / R.offsetWidth : 0,
      q = "offsetHeight" in R ? 0 === R.offsetHeight ? 0 : I / R.offsetHeight : 0;
    if (h === R) V = "start" === s ? M : "end" === s ? M - b : "nearest" === s ? o(y, y + b, b, z, G, y + M, y + M + S, S) : M - b / 2, $ = "start" === u ? O : "center" === u ? O - _ / 2 : "end" === u ? O - _ : o(v, v + _, _, Y, H, v + O, v + O + x, x), V = Math.max(0, V + y), $ = Math.max(0, $ + v);
    else {
      V = "start" === s ? M - P - z : "end" === s ? M - F + G + K : "nearest" === s ? o(P, F, I, z, G + K, M, M + S, S) : M - (P + I / 2) + K / 2, $ = "start" === u ? O - U - Y : "center" === u ? O - (U + L / 2) + Z / 2 : "end" === u ? O - B + H + Z : o(U, B, L, Y, H + Z, O, O + x, x);
      var Q = R.scrollLeft,
        X = R.scrollTop;
      M += X - (V = Math.max(0, Math.min(X + V / q, R.scrollHeight - I / q + K))), O += Q - ($ = Math.max(0, Math.min(Q + $ / W, R.scrollWidth - L / W + Z)))
    }
    A.push({
      el: R,
      top: V,
      left: $
    })
  }
  return A
}