"use strict";
let s;
t.r(e), t.d(e, {
  default: function() {
    return w
  }
}), t("47120"), t("315314"), t("610138"), t("216116"), t("78328"), t("815648"), t("653041"), t("411104");
var n = t("153832"),
  r = t("647425"),
  a = t("170830");

function o(i, e, t) {
  return e in i ? Object.defineProperty(i, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[e] = t, i
}
let l = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
  h = "undefined" != typeof OffscreenCanvas,
  d = [],
  u = new Map,
  v = new Map,
  I = (0, a.createQueuedAsyncInitializer)(async () => {
    for (let i = 0; i < l; i++) {
      let i = new Worker(new URL(t.p + t.u("42892"), t.b));
      d.push({
        worker: i,
        numActive: 0
      })
    }
  }),
  c = (0, a.createQueuedAsyncInitializer)(async () => {
    s = (await t.e("57961").then(t.bind(t, "8048"))).default
  });
h ? I() : c();
class w {
  get workerIndex() {
    let i = u.get(this.canvasId);
    if (null == i) {
      let s = v.get(this.assetUrl);
      if (null != s) i = s;
      else {
        var e, t;
        let s = null !== (t = null === (e = d[0]) || void 0 === e ? void 0 : e.numActive) && void 0 !== t ? t : 0;
        for (let [e, t] of d.entries()) t.numActive <= s && (s = t.numActive, i = e);
        v.set(this.assetUrl, i)
      }
      u.set(this.canvasId, i), d[i].numActive++
    }
    return i
  }
  get worker() {
    let i = this.workerIndex;
    if (null == d[i]) throw Error("No worker in pool at index ".concat(i));
    return d[i].worker
  }
  async drop() {
    var i, e, t, s;
    if (await this.initializationPromise, h) {
      null === (i = this.worker) || void 0 === i || i.removeEventListener("message", this.handleMessage), null === (e = this.worker) || void 0 === e || e.removeEventListener("error", this.handleError), null === (t = this.worker) || void 0 === t || t.postMessage({
        canvasId: this.canvasId,
        type: r.MessageTypes.DROP
      });
      let s = u.get(this.canvasId);
      if (null == s) throw Error("No worker index assigned for asset ".concat(this.canvasId));
      u.delete(this.canvasId), d[s].numActive--
    } else null === (s = this.lottieView) || void 0 === s || s.drop();
    this.observer.disconnect()
  }
  setState(i, e) {
    var t, s;
    this.shouldAnimate = i, this.isInitialized && (h ? null === (t = this.worker) || void 0 === t || t.postMessage({
      canvasId: this.canvasId,
      type: r.MessageTypes.STATE_CHANGE,
      shouldAnimate: i,
      nextFrame: e
    }) : null === (s = this.lottieView) || void 0 === s || s.setState(i, e))
  }
  constructor({
    canvas: i,
    animationId: e,
    assetUrl: t,
    assetData: a,
    onInitialDraw: l,
    onError: d
  }) {
    o(this, "assetUrl", void 0), o(this, "assetData", void 0), o(this, "canvasId", void 0), o(this, "lottieView", void 0), o(this, "observer", void 0), o(this, "isVisible", !1), o(this, "isInitialized", !1), o(this, "initializationPromise", void 0), o(this, "shouldAnimate", !1), o(this, "onInitialDraw", void 0), o(this, "onError", void 0), o(this, "handleVisibilityChange", i => {
      let e = i[i.length - 1].isIntersecting;
      if (e !== this.isVisible) {
        var t, s;
        if (this.isVisible = e, !this.isInitialized) return;
        h ? null === (t = this.worker) || void 0 === t || t.postMessage({
          canvasId: this.canvasId,
          type: r.MessageTypes.VISIBILITY_CHANGE,
          isVisible: e
        }) : null === (s = this.lottieView) || void 0 === s || s.setVisibility(e)
      }
    }), o(this, "handleMessage", i => {
      var e, t;
      i.data.type === r.MessageTypes.FIRST_DRAW && (null === (e = this.onInitialDraw) || void 0 === e || e.call(this)), i.data.type === r.MessageTypes.ERROR && (null === (t = this.onError) || void 0 === t || t.call(this))
    }), o(this, "handleError", i => {
      var e;
      null === (e = this.onError) || void 0 === e || e.call(this, i)
    }), this.canvasId = (0, n.v4)(), this.assetUrl = t, this.assetData = a, this.onInitialDraw = l, this.onError = d, this.observer = new IntersectionObserver(this.handleVisibilityChange), this.observer.observe(i), h ? this.initializationPromise = I().then(() => {
      var s, n, o;
      null === (s = this.worker) || void 0 === s || s.addEventListener("message", this.handleMessage), null === (n = this.worker) || void 0 === n || n.addEventListener("error", this.handleError);
      let l = i.transferControlToOffscreen();
      null === (o = this.worker) || void 0 === o || o.postMessage({
        type: r.MessageTypes.INITIALIZE,
        animationId: e,
        assetUrl: t,
        assetData: a,
        canvas: l,
        canvasId: this.canvasId,
        isVisible: this.isVisible,
        shouldAnimate: this.shouldAnimate
      }, [l]), this.isInitialized = !0
    }) : this.initializationPromise = c().then(() => {
      this.lottieView = new s({
        canvas: i,
        id: e,
        assetUrl: t,
        assetData: a,
        isVisible: this.isVisible,
        shouldAnimate: this.shouldAnimate,
        onInitialDraw: l,
        onError: d
      }), this.isInitialized = !0
    })
  }
}