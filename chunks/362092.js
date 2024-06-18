"use strict";
n.d(t, {
  Q2: function() {
    return a
  },
  i6: function() {
    return l
  },
  rN: function() {
    return u
  }
}), n(47120), n(411104), n(653041);
var i = n(920478);
n(364964);
let r = i.Z.listLanguages(),
  s = {};
for (let e of r) {
  e = e.toLowerCase();
  let t = i.Z.getLanguage(e);
  if (null == t) continue;
  let n = t.aliases;
  if (s[e] = e, null != n)
    for (let t of n) s[t.toLowerCase()] = e
}
let o = /^[a-z0-9_+\-.#]+$/,
  a = /^[a-z0-9_+\-.#]+$/i;
for (let e in s)
  if (null == e.match(o)) throw Error("Language name does not match regex: ".concat(e));

function l(e) {
  return e.toLowerCase() in s
}

function u(e) {
  let t;
  let n = [],
    i = /\\|```/g;
  for (; null != (t = i.exec(e));) {
    if ("\\" === t[0]) {
      i.lastIndex += 1;
      continue
    }
    n.push(t.index)
  }
  return n
}