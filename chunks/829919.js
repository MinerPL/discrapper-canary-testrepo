"use strict";
n.d(e, {
  Rt: function() {
    return s
  },
  l4: function() {
    return a
  },
  qT: function() {
    return o
  }
});
var r = n(46834);
let i = (0, n(24716).Rf)();

function s(t, e = {}) {
  try {
    let n, i = t,
      s = [],
      a = 0,
      o = 0,
      u = 3,
      l = Array.isArray(e) ? e : e.keyAttrs,
      c = !Array.isArray(e) && e.maxStringLength || 80;
    for (; i && a++ < 5 && (n = function(t, e) {
        let n, i, s, a, o;
        let u = [];
        if (!t || !t.tagName) return "";
        u.push(t.tagName.toLowerCase());
        let l = e && e.length ? e.filter(e => t.getAttribute(e)).map(e => [e, t.getAttribute(e)]) : null;
        if (l && l.length) l.forEach(t => {
          u.push(`[${t[0]}="${t[1]}"]`)
        });
        else if (t.id && u.push(`#${t.id}`), (n = t.className) && (0, r.HD)(n))
          for (o = 0, i = n.split(/\s+/); o < i.length; o++) u.push(`.${i[o]}`);
        let c = ["aria-label", "type", "name", "title", "alt"];
        for (o = 0; o < c.length; o++) s = c[o], (a = t.getAttribute(s)) && u.push(`[${s}="${a}"]`);
        return u.join("")
      }(i, l), "html" !== n && (!(a > 1) || !(o + s.length * u + n.length >= c)));) {
      ;
      s.push(n), o += n.length, i = i.parentNode
    }
    return s.reverse().join(" > ")
  } catch (t) {
    return "<unknown>"
  }
}

function a() {
  try {
    return i.document.location.href
  } catch (t) {
    return ""
  }
}

function o(t) {
  return i.document && i.document.querySelector ? i.document.querySelector(t) : null
}