var i = n(710845),
  s = n(857192),
  a = n(901077),
  r = n(46832),
  l = n(852926),
  o = n(748635),
  c = n(981631);
let d = new i.Z('RPCServer:PostMessage'),
  u = (e, t, n) => {
(s.default.isLoggingOverlayEvents || e.cmd !== c.Etm.OVERLAY) && t.info('Socket Message: '.concat(n.id), (0, a.Z)(e));
  };
t.Z = function() {
  let e = new r.Z(l.em, d, o.Z, u);
  return window.addEventListener('message', t => {
if (window === t.source)
  return;
if (null == t.source || null == t.source.postMessage) {
  d.error('Unknown event source');
  return;
}
let n = t.source,
  i = t.data,
  s = t.origin;
e.handleMessage(i, s, (e, t) => {
  n.postMessage(e, t);
});
  }), e;
}();