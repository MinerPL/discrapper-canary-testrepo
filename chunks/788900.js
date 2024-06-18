"use strict";
n.d(t, {
  xS: function() {
    return l
  }
});

function l(e) {
  let t = function(e) {
    let {
      PI: t,
      min: n,
      max: l,
      cos: s,
      round: a
    } = Math, i = e[0] | e[1] << 8 | e[2] << 16, r = e[3] | e[4] << 8, o = (63 & i) / 63, u = (i >> 6 & 63) / 31.5 - 1, c = (i >> 12 & 63) / 31.5 - 1, d = i >> 23, m = r >> 15, E = l(3, m ? d ? 5 : 7 : 7 & r), _ = l(3, m ? 7 & r : d ? 5 : 7), S = d ? (15 & e[5]) / 15 : 1, h = (e[5] >> 4) / 15, g = d ? 6 : 5, Z = 0, C = (t, n, l) => {
      let s = [];
      for (let a = 0; a < n; a++)
        for (let i = a ? 0 : 1; i * n < t * (n - a); i++) s.push(((e[g + (Z >> 1)] >> ((1 & Z++) << 2) & 15) / 7.5 - 1) * l);
      return s
    }, f = C(E, _, (i >> 18 & 31) / 31), N = C(3, 3, (r >> 3 & 63) / 63 * 1.25), x = C(3, 3, (r >> 9 & 63) / 63 * 1.25), I = d && C(5, 5, h), A = function(e) {
      let t = e[3],
        n = 128 & e[2],
        l = 128 & e[4];
      return (l ? n ? 5 : 7 : 7 & t) / (l ? 7 & t : n ? 5 : 7)
    }(e), T = a(A > 1 ? 32 : 32 * A), v = a(A > 1 ? 32 / A : 32), R = new Uint8Array(T * v * 4), L = [], p = [];
    for (let e = 0, a = 0; e < v; e++)
      for (let i = 0; i < T; i++, a += 4) {
        let r = o,
          m = u,
          h = c,
          g = S;
        for (let e = 0, n = l(E, d ? 5 : 3); e < n; e++) L[e] = s(t / T * (i + .5) * e);
        for (let n = 0, a = l(_, d ? 5 : 3); n < a; n++) p[n] = s(t / v * (e + .5) * n);
        for (let e = 0, t = 0; e < _; e++)
          for (let n = e ? 0 : 1, l = 2 * p[e]; n * _ < E * (_ - e); n++, t++) r += f[t] * L[n] * l;
        for (let e = 0, t = 0; e < 3; e++)
          for (let n = e ? 0 : 1, l = 2 * p[e]; n < 3 - e; n++, t++) {
            let e = L[n] * l;
            m += N[t] * e, h += x[t] * e
          }
        if (d)
          for (let e = 0, t = 0; e < 5; e++)
            for (let n = e ? 0 : 1, l = 2 * p[e]; n < 5 - e; n++, t++) g += I[t] * L[n] * l;
        let Z = r - 2 / 3 * m,
          C = (3 * r - Z + h) / 2,
          A = C - h;
        R[a] = l(0, 255 * n(1, C)), R[a + 1] = l(0, 255 * n(1, A)), R[a + 2] = l(0, 255 * n(1, Z)), R[a + 3] = l(0, 255 * n(1, g))
      }
    return {
      w: T,
      h: v,
      rgba: R
    }
  }(e);
  return function(e, t, n) {
    let l = 4 * e + 1,
      s = 6 + t * (5 + l),
      a = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, s >>> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 73, 68, 65, 84, 120, 1],
      i = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
      r = 1,
      o = 0;
    for (let e = 0, s = 0, i = l - 1; e < t; e++, i += l - 1)
      for (a.push(e + 1 < t ? 0 : 1, 255 & l, l >> 8, 255 & ~l, l >> 8 ^ 255, 0), o = (o + r) % 65521; s < i; s++) {
        let e = 255 & n[s];
        a.push(e), o = (o + (r = (r + e) % 65521)) % 65521
      }
    for (let [e, t] of(a.push(o >> 8, 255 & o, r >> 8, 255 & r, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
        [12, 29],
        [37, 41 + s]
      ])) {
      let n = -1;
      for (let l = e; l < t; l++) n ^= a[l], n = (n = n >>> 4 ^ i[15 & n]) >>> 4 ^ i[15 & n];
      n = ~n, a[t++] = n >>> 24, a[t++] = n >> 16 & 255, a[t++] = n >> 8 & 255, a[t++] = 255 & n
    }
    return "data:image/png;base64," + btoa(String.fromCharCode(...a))
  }(t.w, t.h, t.rgba)
}