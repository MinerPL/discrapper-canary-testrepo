e.exports = c;
var r = n(531478).codes,
  i = r.ERR_METHOD_NOT_IMPLEMENTED,
  a = r.ERR_MULTIPLE_CALLBACK,
  o = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
  s = r.ERR_TRANSFORM_WITH_LENGTH_0,
  l = n(827664);

function u(e, t) {
  var n = this._transformState;
  n.transforming = !1;
  var r = n.writecb;
  if (null === r)
return this.emit('error', new a());
  n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
  var i = this._readableState;
  i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
}

function c(e) {
  if (!(this instanceof c))
return new c(e);
  l.call(this, e), this._transformState = {
afterTransform: u.bind(this),
needTransform: !1,
transforming: !1,
writecb: null,
writechunk: null,
writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ('function' == typeof e.transform && (this._transform = e.transform), 'function' == typeof e.flush && (this._flush = e.flush)), this.on('prefinish', d);
}

function d() {
  var e = this;
  'function' != typeof this._flush || this._readableState.destroyed ? _(this, null, null) : this._flush(function(t, n) {
_(e, t, n);
  });
}

function _(e, t, n) {
  if (t)
return e.emit('error', t);
  if (null != n && e.push(n), e._writableState.length)
throw new s();
  if (e._transformState.transforming)
throw new o();
  return e.push(null);
}
n(689118)(c, l), c.prototype.push = function(e, t) {
  return this._transformState.needTransform = !1, l.prototype.push.call(this, e, t);
}, c.prototype._transform = function(e, t, n) {
  n(new i('_transform()'));
}, c.prototype._write = function(e, t, n) {
  var r = this._transformState;
  if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
var i = this._readableState;
(r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  }
}, c.prototype._read = function(e) {
  var t = this._transformState;
  null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform));
}, c.prototype._destroy = function(e, t) {
  l.prototype._destroy.call(this, e, function(e) {
t(e);
  });
};