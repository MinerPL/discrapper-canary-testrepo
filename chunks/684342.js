n.d(t, {
  p: function() {
return c;
  },
  t: function() {
return d;
  }
});
var r = n(468343),
  i = n(559972),
  a = n(789741),
  s = 0,
  o = {
attributes: !0,
characterData: !0,
childList: !0,
subtree: !0
  },
  l = [
'resize',
'load',
'transitionend',
'animationend',
'animationstart',
'animationiteration',
'keyup',
'keydown',
'mouseup',
'mousedown',
'mouseover',
'mouseout',
'blur',
'focus'
  ],
  u = !1,
  c = new(function() {
function e() {
  var e = this;
  this.stopped = !0, this.listener = function() {
    return e.schedule();
  };
}
return e.prototype.run = function(e) {
  var t = this;
  if (!u)
    u = !0, (0, a.p)(function() {
      var n = !1;
      try {
        n = (0, r.N)();
      } finally {
        if (u = !1, !s)
          return;
        n ? t.run(60) : e ? t.run(e - 1) : t.start();
      }
    });
}, e.prototype.schedule = function() {
  this.stop(), this.run(12);
}, e.prototype.observe = function() {
  var e = this,
    t = function() {
      return e.observer && e.observer.observe(document.body, o);
    };
  document.body ? t() : i.C.addEventListener('DOMContentLoaded', t);
}, e.prototype.start = function() {
  var e = this;
  this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), l.forEach(function(t) {
    return i.C.addEventListener(t, e.listener, !0);
  }));
}, e.prototype.stop = function() {
  var e = this;
  !this.stopped && (this.observer && this.observer.disconnect(), l.forEach(function(t) {
    return i.C.removeEventListener(t, e.listener, !0);
  }), this.stopped = !0);
}, e;
  }())(),
  d = function(e) {
!s && e > 0 && c.start(), (s += e) || c.stop();
  };