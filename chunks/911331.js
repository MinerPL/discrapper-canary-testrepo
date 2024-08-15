
function r(e) {
  return 'object' == typeof e && null != e && 1 === e.nodeType;
}

function i(e, t) {
  return (!t || 'hidden' !== e) && 'visible' !== e && 'clip' !== e;
}

function a(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
var n, r, a = getComputedStyle(e, null);
return i(a.overflowY, t) || i(a.overflowX, t) || !!(r = function(e) {
  if (!e.ownerDocument || !e.ownerDocument.defaultView)
    return null;
  try {
    return e.ownerDocument.defaultView.frameElement;
  } catch (e) {
    return null;
  }
}(n = e)) && (r.clientHeight < n.scrollHeight || r.clientWidth < n.scrollWidth);
  }
  return !1;
}

function s(e, t, n, r, i, a, s, o) {
  return a < e && s > t || a > e && s < t ? 0 : a <= e && o <= n || s >= t && o >= n ? a - e - r : s > t && o < n || a < e && o > n ? s - t + i : 0;
}
n.d(t, {
  Z: function() {
return o;
  }
});
var o = function(e, t) {
  var n = window,
i = t.scrollMode,
o = t.block,
l = t.inline,
u = t.boundary,
c = t.skipOverflowHiddenElements,
d = 'function' == typeof u ? u : function(e) {
  return e !== u;
};
  if (!r(e))
throw TypeError('Invalid target');
  for (var _, E, f = document.scrollingElement || document.documentElement, h = [], p = e; r(p) && d(p);) {
if ((p = null == (E = (_ = p).parentElement) ? _.getRootNode().host || null : E) === f) {
  h.push(p);
  break;
}
null != p && p === document.body && a(p) && !a(document.documentElement) || null != p && a(p, c) && h.push(p);
  }
  for (var m = n.visualViewport ? n.visualViewport.width : innerWidth, I = n.visualViewport ? n.visualViewport.height : innerHeight, T = window.scrollX || pageXOffset, g = window.scrollY || pageYOffset, S = e.getBoundingClientRect(), A = S.height, N = S.width, v = S.top, O = S.right, R = S.bottom, C = S.left, y = 'start' === o || 'nearest' === o ? v : 'end' === o ? R : v + A / 2, D = 'center' === l ? C + N / 2 : 'end' === l ? O : C, L = [], b = 0; b < h.length; b++) {
var M = h[b],
  P = M.getBoundingClientRect(),
  U = P.height,
  w = P.width,
  x = P.top,
  G = P.right,
  k = P.bottom,
  B = P.left;
if ('if-needed' === i && v >= 0 && C >= 0 && R <= I && O <= m && v >= x && R <= k && C >= B && O <= G)
  break;
var F = getComputedStyle(M),
  V = parseInt(F.borderLeftWidth, 10),
  H = parseInt(F.borderTopWidth, 10),
  Z = parseInt(F.borderRightWidth, 10),
  Y = parseInt(F.borderBottomWidth, 10),
  j = 0,
  W = 0,
  K = 'offsetWidth' in M ? M.offsetWidth - M.clientWidth - V - Z : 0,
  z = 'offsetHeight' in M ? M.offsetHeight - M.clientHeight - H - Y : 0,
  q = 'offsetWidth' in M ? 0 === M.offsetWidth ? 0 : w / M.offsetWidth : 0,
  Q = 'offsetHeight' in M ? 0 === M.offsetHeight ? 0 : U / M.offsetHeight : 0;
if (f === M)
  j = 'start' === o ? y : 'end' === o ? y - I : 'nearest' === o ? s(g, g + I, I, H, Y, g + y, g + y + A, A) : y - I / 2, W = 'start' === l ? D : 'center' === l ? D - m / 2 : 'end' === l ? D - m : s(T, T + m, m, V, Z, T + D, T + D + N, N), j = Math.max(0, j + g), W = Math.max(0, W + T);
else {
  j = 'start' === o ? y - x - H : 'end' === o ? y - k + Y + z : 'nearest' === o ? s(x, k, U, H, Y + z, y, y + A, A) : y - (x + U / 2) + z / 2, W = 'start' === l ? D - B - V : 'center' === l ? D - (B + w / 2) + K / 2 : 'end' === l ? D - G + Z + K : s(B, G, w, V, Z + K, D, D + N, N);
  var X = M.scrollLeft,
    $ = M.scrollTop;
  y += $ - (j = Math.max(0, Math.min($ + j / Q, M.scrollHeight - U / Q + z))), D += X - (W = Math.max(0, Math.min(X + W / q, M.scrollWidth - w / q + K)));
}
L.push({
  el: M,
  top: j,
  left: W
});
  }
  return L;
};