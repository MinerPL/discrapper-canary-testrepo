n(47120);
var r = n(748780);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class a {
  start() {
return new Promise(e => {
  this.animation.start(() => {
    e();
  });
});
  }
  stop() {
this.animation.stop();
  }
  constructor(e) {
s(this, 'animation', void 0), this.animation = e;
  }
}
class o {
  _map(e) {
return this.animations.map(e);
  }
  start() {
return new Promise(e => Promise.all(this._map(e => e.start())).then(() => e()));
  }
  stop() {
this._map(e => e.stop());
  }
  constructor(e) {
s(this, 'animations', void 0), this.animations = e;
  }
}
class i {
  async start() {
for (let e of (this.stopped = !1, this.animations)) {
  if (this.stopped)
    return;
  await e.start();
}
  }
  stop() {
this.stopped = !0, this.animations.map(e => e.stop());
  }
  constructor(e) {
s(this, 'animations', void 0), s(this, 'stopped', !1), this.animations = e;
  }
}

function l(e, t, n) {
  return new a(n(e, {
...t
  }));
}
t.Z = {
  ...r.Z,
  timing: function(e, t) {
return l(e, t, r.Z.timing);
  },
  spring: function(e, t) {
return l(e, t, r.Z.spring);
  },
  parallel: function(e) {
return new o(e);
  },
  sequence: function(e) {
return new i(e);
  }
};