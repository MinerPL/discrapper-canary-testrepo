n.d(t, {
  I: function() {
return r;
  }
});
class r {
  schedule(e, t) {
this.unschedule(), this.timeoutId = setTimeout(() => {
  this.timeoutId = null, e();
}, t);
  }
  unschedule() {
this.scheduled() && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  scheduled() {
return null !== this.timeoutId;
  }
  constructor() {
var e, t, n;
e = this, n = null, (t = 'timeoutId') in e ? Object.defineProperty(e, t, {
  value: null,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : e[t] = n;
  }
}