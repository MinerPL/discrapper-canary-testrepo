n.d(t, {
  Z: function() {
return a;
  }
});
var r = n(217942);

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class a {
  getCurrentValue() {
if (null == this.animationDetails)
  return this.value;
let e = performance.now() - this.animationDetails.animationStart,
  t = this.value < this.animationDetails.lastValue ? 150 : 500;
return e > t ? (this.animationDetails = null, this.value) : this.value < this.animationDetails.lastValue ? r.easeOutQuint(e, this.animationDetails.lastValue, this.value, t) : r.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4);
  }
  animateTo(e) {
if (this.isReset = !1, this.value !== e)
  this.animationDetails = {
    lastValue: this.value,
    animationStart: performance.now()
  }, this.value = e;
  }
  isAnimating() {
return null != this.animationDetails;
  }
  reset() {
this.animateTo(0), this.isReset = !0;
  }
  constructor(e) {
i(this, 'value', void 0), i(this, 'animationDetails', void 0), i(this, 'isReset', void 0), this.value = e, this.animationDetails = null, this.isReset = !1;
  }
}