"use strict";
for (var n, r = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), i = {
    alt: "altKey",
    control: "ctrlKey",
    meta: "metaKey",
    shift: "shiftKey"
  }, a = {
    add: "+",
    break: "pause",
    cmd: "meta",
    command: "meta",
    ctl: "control",
    ctrl: "control",
    del: "delete",
    down: "arrowdown",
    esc: "escape",
    ins: "insert",
    left: "arrowleft",
    mod: r ? "meta" : "control",
    opt: "alt",
    option: "alt",
    return: "enter",
    right: "arrowright",
    space: " ",
    spacebar: " ",
    up: "arrowup",
    win: "meta",
    windows: "meta"
  }, o = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    control: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    " ": 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    arrowleft: 37,
    arrowup: 38,
    arrowright: 39,
    arrowdown: 40,
    insert: 45,
    delete: 46,
    meta: 91,
    numlock: 144,
    scrolllock: 145,
    ";": 186,
    "=": 187,
    ",": 188,
    "-": 189,
    ".": 190,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222
  }, s = 1; s < 20; s++) o["f" + s] = 111 + s;

function u(e, t, n) {
  t && !("byKey" in t) && (n = t, t = null), !Array.isArray(e) && (e = [e]);
  var r = e.map(function(e) {
      return c(e, t)
    }),
    i = function(e) {
      return r.some(function(t) {
        return l(t, e)
      })
    };
  return null == n ? i : i(n)
}

function c(e, t) {
  var n = t && t.byKey,
    r = {},
    a = (e = e.replace("++", "+add")).split("+"),
    o = a.length;
  for (var s in i) r[i[s]] = !1;
  var u = !0,
    c = !1,
    l = void 0;
  try {
    for (var p, h = a[Symbol.iterator](); !(u = (p = h.next()).done); u = !0) {
      var m = p.value,
        g = m.endsWith("?") && m.length > 1;
      g && (m = m.slice(0, -1));
      var _ = f(m),
        b = i[_];
      (1 === o || !b) && (n ? r.key = _ : r.which = d(m)), b && (r[b] = !g || null)
    }
  } catch (e) {
    c = !0, l = e
  } finally {
    try {
      !u && h.return && h.return()
    } finally {
      if (c) throw l
    }
  }
  return r
}

function l(e, t) {
  for (var n in e) {
    var r = e[n],
      i = void 0;
    if (null != r && (null != (i = "key" === n && null != t.key ? t.key.toLowerCase() : "which" === n ? 91 === r && 93 === t.which ? 91 : t.which : t[n]) || !1 !== r)) {
      if (i !== r) return !1
    }
  }
  return !0
}

function d(e) {
  return o[e = f(e)] || e.toUpperCase().charCodeAt(0)
}

function f(e) {
  return e = a[e = e.toLowerCase()] || e
}
t.isKeyHotkey = function(e, t) {
  return u(e, {
    byKey: !0
  }, t)
}