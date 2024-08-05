n.d(t, {
  e: function() {
return i;
  },
  s: function() {
return s;
  }
}), n(47120);
var r = n(823379);

function i(e, t) {
  let n = e.find(e => e.processId === t);
  return null == n ? null : s(e, n);
}
let a = '356869127241072640';

function s(e, t) {
  var n;
  if (null == t)
return null;
  if (t.applicationId === a)
return function(e, t) {
  let n = t.processPath.length > 1 ? t.processPath[t.processPath.length - 2] : 0,
    r = e.filter(e => e.applicationId === a && e.processPath.includes(n)),
    i = r.find(e => 'league of legends.exe' === e.executableName);
  return void 0 !== i ? i : r.length > 0 ? r[0] : null;
}(e, t);
  let i = new Map(e.map(e => [
  e.processId,
  e
])),
s = t.processPath.map(e => i.get(e)).find(e => null != e);
  if (null == s)
return null;
  let l = e.map(e => {
let t = e.processPath.findIndex(e => i.has(e));
return -1 === t ? null : {
  application: e,
  rootedPath: e.processPath.slice(t)
};
  }).filter(r.lm).filter(e => e.rootedPath[0] === s.processId);
  l.sort((e, t) => {
let n = e.rootedPath.map(e => i.get(e)).filter(e => null != e && null != e.windowHandle),
  r = o(t.rootedPath.map(e => i.get(e)).filter(e => null != e && null != e.windowHandle), n);
return 0 !== r ? r : o(t.rootedPath, e.rootedPath);
  });
  let u = null !== (n = l.find(e => null != e.application.windowHandle)) && void 0 !== n ? n : l[0];
  return null == u ? null : u.application;
}

function o(e, t) {
  return e.length - t.length;
}