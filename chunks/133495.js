var r = n(531478).codes.ERR_STREAM_PREMATURE_CLOSE;

function i() {}
e.exports = function e(t, n, a) {
  if ('function' == typeof n)
return e(t, null, n);
  !n && (n = {}), s = a || i, o = !1, a = function() {
if (!o) {
  o = !0;
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  s.apply(this, t);
}
  };
  var s, o, l, u = n.readable || !1 !== n.readable && t.readable,
c = n.writable || !1 !== n.writable && t.writable,
d = function() {
  !t.writable && E();
},
_ = t._writableState && t._writableState.finished,
E = function() {
  c = !1, _ = !0, !u && a.call(t);
},
f = t._readableState && t._readableState.endEmitted,
h = function() {
  u = !1, f = !0, !c && a.call(t);
},
p = function(e) {
  a.call(t, e);
},
m = function() {
  var e;
  return u && !f ? ((!t._readableState || !t._readableState.ended) && (e = new r()), a.call(t, e)) : c && !_ ? ((!t._writableState || !t._writableState.ended) && (e = new r()), a.call(t, e)) : void 0;
},
I = function() {
  t.req.on('finish', E);
};
  if ((l = t).setHeader && 'function' == typeof l.abort)
t.on('complete', E), t.on('abort', m), t.req ? I() : t.on('request', I);
  else
c && !t._writableState && (t.on('end', d), t.on('close', d));
  return t.on('end', h), t.on('finish', E), !1 !== n.error && t.on('error', p), t.on('close', m),
function() {
  t.removeListener('complete', E), t.removeListener('abort', m), t.removeListener('request', I), t.req && t.req.removeListener('finish', E), t.removeListener('end', d), t.removeListener('close', d), t.removeListener('finish', E), t.removeListener('end', h), t.removeListener('error', p), t.removeListener('close', m);
};
};