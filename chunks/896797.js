var n, i = l(442837),
  u = l(433517),
  a = l(570140),
  r = l(981631);

function o(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
value: l,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = l, e;
}
let d = {
lastViewedPath: null,
lastViewedNonVoicePath: null
  },
  s = d,
  c = 'LAST_VIEWED_PATH';
class h extends(n = i.ZP.PersistedStore) {
  initialize() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
s = null != e ? e : d;
  }
  get defaultRoute() {
return r.Z5c.ME;
  }
  get lastNonVoiceRoute() {
var e;
return null !== (e = s.lastViewedNonVoicePath) && void 0 !== e ? e : r.Z5c.ME;
  }
  get fallbackRoute() {
return r.Z5c.ME;
  }
  getState() {
return s;
  }
}
o(h, 'displayName', 'DefaultRouteStore'), o(h, 'persistKey', 'DefaultRouteStore'), o(h, 'migrations', [() => {
  let e = u.K.get(c, null);
  return u.K.remove(c), {
lastViewedPath: e
  };
}]), t.Z = new h(a.Z, {
  SAVE_LAST_ROUTE: function(e) {
let {
  path: t
} = e;
return s.lastViewedPath = t, !0;
  },
  SAVE_LAST_NON_VOICE_ROUTE: function(e) {
let {
  path: t
} = e;
return s.lastViewedNonVoicePath = t, !0;
  }
});