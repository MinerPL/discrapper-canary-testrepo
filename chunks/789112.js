r.d(t, {
  b: function() {
return o;
  }
});
var n = r(394798),
  a = r(696486);
class o {
  constructor(e = {}) {
this._traceId = e.traceId || (0, n.DM)(), this._spanId = e.spanId || (0, n.DM)().substring(16);
  }
  spanContext() {
return {
  spanId: this._spanId,
  traceId: this._traceId,
  traceFlags: a.ve
};
  }
  end(e) {}
  setAttribute(e, t) {
return this;
  }
  setAttributes(e) {
return this;
  }
  setStatus(e) {
return this;
  }
  updateName(e) {
return this;
  }
  isRecording() {
return !1;
  }
  addEvent(e, t, r) {
return this;
  }
  addLink(e) {
return this;
  }
  addLinks(e) {
return this;
  }
  recordException(e, t) {}
}