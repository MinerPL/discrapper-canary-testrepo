n.d(t, {
  Q2: function() {
return o;
  },
  i6: function() {
return l;
  },
  rN: function() {
return u;
  }
}), n(47120), n(411104), n(653041);
var r = n(920478);
n(364964);
let i = r.Z.listLanguages(),
  a = {};
for (let e of i) {
  e = e.toLowerCase();
  let t = r.Z.getLanguage(e);
  if (null == t)
continue;
  let n = t.aliases;
  if (a[e] = e, null != n)
for (let t of n)
  a[t.toLowerCase()] = e;
}
let s = /^[a-z0-9_+\-.#]+$/,
  o = /^[a-z0-9_+\-.#]+$/i;
for (let e in a)
  if (null == e.match(s))
throw Error('Language name does not match regex: '.concat(e));

function l(e) {
  return e.toLowerCase() in a;
}

function u(e) {
  let t;
  let n = [],
r = /\\|```/g;
  for (; null != (t = r.exec(e));) {
if ('\\' === t[0]) {
  r.lastIndex += 1;
  continue;
}
n.push(t.index);
  }
  return n;
}