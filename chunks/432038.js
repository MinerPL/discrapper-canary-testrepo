"use strict";
n.d(e, {
  $P: function() {
    return o
  },
  Sq: function() {
    return s
  },
  pE: function() {
    return i
  }
});
let r = /\(error: (.*)\)/;

function i(...t) {
  let e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
  return (t, n = 0) => {
    let i = [],
      s = t.split("\n");
    for (let t = n; t < s.length; t++) {
      let n = s[t];
      if (n.length > 1024) continue;
      let a = r.test(n) ? n.replace(r, "$1") : n;
      if (!a.match(/\S*Error: /)) {
        for (let t of e) {
          let e = t(a);
          if (e) {
            i.push(e);
            break
          }
        }
        if (i.length >= 50) break
      }
    }
    return function(t) {
      if (!t.length) return [];
      let e = t.slice(0, 50),
        n = e[e.length - 1].function;
      n && /sentryWrapped/.test(n) && e.pop(), e.reverse();
      let r = e[e.length - 1].function;
      return r && /captureMessage|captureException/.test(r) && e.pop(), e.map(t => ({
        ...t,
        filename: t.filename || e[e.length - 1].filename,
        function: t.function || "?"
      }))
    }(i)
  }
}

function s(t) {
  return Array.isArray(t) ? i(...t) : t
}
let a = "<anonymous>";

function o(t) {
  try {
    if (!t || "function" != typeof t) return a;
    return t.name || a
  } catch (t) {
    return a
  }
}