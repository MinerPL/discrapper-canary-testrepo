n.d(t, {
  c: function() {
return o;
  }
});
var r = n(433517),
  i = n(593472);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class o {
  save() {
let e = {
  games: this.games
};
r.K.set(o.storageKey, e);
  }
  static load() {
return null == o._loaded && (o._loaded = o.loadInternal()), o._loaded;
  }
  static loadInternal() {
let e = r.K.get(o.storageKey);
if (null != e) {
  var t;
  return new o(null !== (t = e.games) && void 0 !== t ? t : {});
}
let n = new o({});
return n.save(), n;
  }
  static getGameSettings(e) {
var t;
return null == e ? null : null !== (t = o.load().games[e]) && void 0 !== t ? t : null;
  }
  static updateGameSettings(e, t) {
if (null == e)
  return;
let n = o.load(),
  r = n.games[e];
if (null == r) {
  n.games[e] = {
    screen: i.Jx.UNKNOWN,
    date: Date.now(),
    ...t
  }, n.save();
  return;
}
'boolean' == typeof t.disabled && (r.disabled = t.disabled), 'number' == typeof t.screen && (r.screen = t.screen), r.date = Date.now(), n.save();
  }
  static isPromptingForGameDisable(e) {
var t, n;
return null !== (n = null === (t = o.getGameSettings(e)) || void 0 === t ? void 0 : t.disabled) && void 0 !== n && n;
  }
  static setPromptingForGameDisable(e, t) {
o.updateGameSettings(e, {
  disabled: t
});
  }
  static getGameDisplayMode(e) {
var t, n;
return null == e ? null : null !== (n = null === (t = o.getGameSettings(e)) || void 0 === t ? void 0 : t.screen) && void 0 !== n ? n : null;
  }
  static setGameDisplayMode(e, t) {
o.updateGameSettings(e, {
  screen: t
});
  }
  static clearOldGameSettings() {
let e = o.load();
if (null == e.games)
  return;
let t = Date.now() - 31536000000;
for (let n in e.games)
  e.games[n].date < t && delete e.games[n];
e.save();
  }
  static reset() {
let e = o.load();
e.games = {}, e.save();
  }
  static isTestMode() {
var e;
return e = !!window.__GAME_DISPLAY_MODE_TEST_MODE__, e;
  }
  static isVerbose() {
var e;
return e = !!window.__GAME_DISPLAY_MODE_DEBUG__, e;
  }
  constructor(e) {
a(this, 'games', void 0), this.games = e;
  }
}
a(o, '_loaded', null), a(o, 'storageKey', 'GameDisplayModeStorage'), setTimeout(() => o.clearOldGameSettings(), 60000);