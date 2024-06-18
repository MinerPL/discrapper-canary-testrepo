var r = n(620014),
  i = n(580755),
  a = n(805100),
  o = n(224760),
  s = n(915212),
  u = n(228057),
  c = n(161984),
  l = n(388456),
  d = n(325512),
  f = n(990393),
  p = n(890179),
  h = n(65064),
  m = n(207635),
  g = n(354199),
  _ = n(671660),
  b = n(402428),
  v = n(207757),
  y = n(397985),
  E = n(706627),
  S = n(822480),
  x = n(58834),
  w = n(453342),
  C = "[object Arguments]",
  T = "[object Function]",
  D = "[object Object]",
  M = {};
M[C] = M["[object Array]"] = M["[object ArrayBuffer]"] = M["[object DataView]"] = M["[object Boolean]"] = M["[object Date]"] = M["[object Float32Array]"] = M["[object Float64Array]"] = M["[object Int8Array]"] = M["[object Int16Array]"] = M["[object Int32Array]"] = M["[object Map]"] = M["[object Number]"] = M[D] = M["[object RegExp]"] = M["[object Set]"] = M["[object String]"] = M["[object Symbol]"] = M["[object Uint8Array]"] = M["[object Uint8ClampedArray]"] = M["[object Uint16Array]"] = M["[object Uint32Array]"] = !0, M["[object Error]"] = M[T] = M["[object WeakMap]"] = !1;
e.exports = function e(t, n, O, A, k, R) {
  var N, I = 1 & n,
    L = 2 & n,
    P = 4 & n;
  if (O && (N = k ? O(t, A, k, R) : O(t)), void 0 !== N) return N;
  if (!E(t)) return t;
  var B = b(t);
  if (B) {
    if (N = m(t), !I) return c(t, N)
  } else {
    var F = h(t),
      U = F == T || "[object GeneratorFunction]" == F;
    if (v(t)) return u(t, I);
    if (F == D || F == C || U && !k) {
      if (N = L || U ? {} : _(t), !I) return L ? d(t, s(N, t)) : l(t, o(N, t))
    } else {
      if (!M[F]) return k ? t : {};
      N = g(t, F, I)
    }
  }
  R || (R = new r);
  var j = R.get(t);
  if (j) return j;
  R.set(t, N), S(t) ? t.forEach(function(r) {
    N.add(e(r, n, O, r, t, R))
  }) : y(t) && t.forEach(function(r, i) {
    N.set(i, e(r, n, O, i, t, R))
  });
  var Y = P ? L ? p : f : L ? w : x,
    z = B ? void 0 : Y(t);
  return i(z || t, function(r, i) {
    z && (r = t[i = r]), a(N, i, e(r, n, O, i, t, R))
  }), N
}