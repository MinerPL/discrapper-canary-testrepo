e.exports = i;
var r = n(836560).EventEmitter;

function i() {
  r.call(this);
}
n(689118)(i, r), i.Readable = n(555170), i.Writable = n(833327), i.Duplex = n(827664), i.Transform = n(92057), i.PassThrough = n(203163), i.finished = n(133495), i.pipeline = n(614805), i.Stream = i, i.prototype.pipe = function(e, t) {
  var n = this;

  function i(t) {
e.writable && !1 === e.write(t) && n.pause && n.pause();
  }

  function a() {
n.readable && n.resume && n.resume();
  }
  n.on('data', i), e.on('drain', a), !e._isStdio && (!t || !1 !== t.end) && (n.on('end', s), n.on('close', l));
  var o = !1;

  function s() {
!o && (o = !0, e.end());
  }

  function l() {
!o && (o = !0, 'function' == typeof e.destroy && e.destroy());
  }

  function u(e) {
if (c(), 0 === r.listenerCount(this, 'error'))
  throw e;
  }

  function c() {
n.removeListener('data', i), e.removeListener('drain', a), n.removeListener('end', s), n.removeListener('close', l), n.removeListener('error', u), e.removeListener('error', u), n.removeListener('end', c), n.removeListener('close', c), e.removeListener('close', c);
  }
  return n.on('error', u), e.on('error', u), n.on('end', c), n.on('close', c), e.on('close', c), e.emit('pipe', n), e;
};