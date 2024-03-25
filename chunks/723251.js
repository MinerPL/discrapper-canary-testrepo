"use strict";
n.r(t), n.d(t, {
  thumbHashToApproximateAspectRatio: function() {
    return r
  },
  rgbaToDataURL: function() {
    return l
  },
  thumbHashToDataURL: function() {
    return s
  }
}), n("70102"), n("424973"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997");

function r(e) {
  let t = e[3],
    n = 128 & e[2],
    r = 128 & e[4];
  return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
}

function l(e, t, n) {
  let r = 4 * e + 1,
    l = 6 + t * (5 + r),
    s = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, l >>> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 73, 68, 65, 84, 120, 1],
    a = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
    i = 1,
    o = 0;
  for (let e = 0, l = 0, a = r - 1; e < t; e++, a += r - 1)
    for (s.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), o = (o + i) % 65521; l < a; l++) {
      let e = 255 & n[l];
      s.push(e), o = (o + (i = (i + e) % 65521)) % 65521
    }
  for (let [e, t] of(s.push(o >> 8, 255 & o, i >> 8, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
      [12, 29],
      [37, 41 + l]
    ])) {
    let n = -1;
    for (let r = e; r < t; r++) n ^= s[r], n = (n = n >>> 4 ^ a[15 & n]) >>> 4 ^ a[15 & n];
    n = ~n, s[t++] = n >>> 24, s[t++] = n >> 16 & 255, s[t++] = n >> 8 & 255, s[t++] = 255 & n
  }
  return "data:image/png;base64," + btoa(String.fromCharCode(...s))
}

function s(e) {
  let t = function(e) {
    let {
      PI: t,
      min: n,
      max: l,
      cos: s,
      round: a
    } = Math, i = e[0] | e[1] << 8 | e[2] << 16, o = e[3] | e[4] << 8, u = (63 & i) / 63, c = (i >> 6 & 63) / 31.5 - 1, d = (i >> 12 & 63) / 31.5 - 1, E = i >> 23, _ = o >> 15, f = l(3, _ ? E ? 5 : 7 : 7 & o), T = l(3, _ ? 7 & o : E ? 5 : 7), I = E ? (15 & e[5]) / 15 : 1, R = (e[5] >> 4) / 15, p = E ? 6 : 5, A = 0, S = (t, n, r) => {
      let l = [];
      for (let s = 0; s < n; s++)
        for (let a = s ? 0 : 1; a * n < t * (n - s); a++) l.push(((e[p + (A >> 1)] >> ((1 & A++) << 2) & 15) / 7.5 - 1) * r);
      return l
    }, C = S(f, T, (i >> 18 & 31) / 31), M = S(3, 3, 1.25 * ((o >> 3 & 63) / 63)), N = S(3, 3, 1.25 * ((o >> 9 & 63) / 63)), m = E && S(5, 5, R), P = r(e), h = a(P > 1 ? 32 : 32 * P), L = a(P > 1 ? 32 / P : 32), O = new Uint8Array(h * L * 4), U = [], D = [];
    for (let e = 0, r = 0; e < L; e++)
      for (let a = 0; a < h; a++, r += 4) {
        let i = u,
          o = c,
          _ = d,
          R = I;
        for (let e = 0, n = l(f, E ? 5 : 3); e < n; e++) U[e] = s(t / h * (a + .5) * e);
        for (let n = 0, r = l(T, E ? 5 : 3); n < r; n++) D[n] = s(t / L * (e + .5) * n);
        for (let e = 0, t = 0; e < T; e++)
          for (let n = e ? 0 : 1, r = 2 * D[e]; n * T < f * (T - e); n++, t++) i += C[t] * U[n] * r;
        for (let e = 0, t = 0; e < 3; e++)
          for (let n = e ? 0 : 1, r = 2 * D[e]; n < 3 - e; n++, t++) {
            let e = U[n] * r;
            o += M[t] * e, _ += N[t] * e
          }
        if (E)
          for (let e = 0, t = 0; e < 5; e++)
            for (let n = e ? 0 : 1, r = 2 * D[e]; n < 5 - e; n++, t++) R += m[t] * U[n] * r;
        let p = i - 2 / 3 * o,
          A = (3 * i - p + _) / 2,
          S = A - _;
        O[r] = l(0, 255 * n(1, A)), O[r + 1] = l(0, 255 * n(1, S)), O[r + 2] = l(0, 255 * n(1, p)), O[r + 3] = l(0, 255 * n(1, R))
      }
    return {
      w: h,
      h: L,
      rgba: O
    }
  }(e);
  return l(t.w, t.h, t.rgba)
}