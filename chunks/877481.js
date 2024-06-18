"use strict";
n(411104), n(47120);
var i = n(274616),
  r = n(710845),
  s = n(893988),
  o = n(812967),
  a = n(314897),
  l = n(757266),
  u = n(906467),
  _ = n(6132),
  d = n(830168),
  c = n(358085),
  E = n(591759),
  I = n(998502),
  T = n(981631);
let h = new r.Z("Games"),
  S = {},
  f = 0,
  N = null;

function A() {
  return null != N ? Promise.resolve(N) : (0, c.isDesktop)() ? I.ZP.ensureModule("discord_game_utils").then(() => {
    let e = I.ZP.getGameUtils();
    return null != e && null != e.findLaunchable ? (N = e, e) : Promise.reject(Error("game utils not found"))
  }) : Promise.reject(Error("not desktop client"))
}

function m(e) {
  let t = {
      id: e.id,
      name: e.name,
      thirdPartySkus: e.thirdPartySkus,
      executables: e.executables.filter(e => e.os === (0, c.getPlatformName)()).map(e => e.name)
    },
    n = e.aliases.map(e => ({
      ...t,
      name: e
    }));
  return [t, ...n]
}

function O(e) {
  return {
    id: e
  }
}
async function R(e) {
  if (!Array.isArray(e) && (e = [e]), !u.Z.isDeveloper && (e = e.filter(e => null == e.thirdPartySkus || -1 === e.thirdPartySkus.findIndex(e => {
      let {
        distributor: t
      } = e;
      return t === T.GQo.BATTLENET
    }))), 0 === e.length) throw Error("No remaining launchable queries");
  let t = Date.now();
  t > f && (f = t + 36e5, S = {});
  let n = await A();
  for (let t of e) {
    let e = S[t.id];
    if (null != e) return e;
    let i = await new Promise(e => n.findLaunchable(t, e));
    if (null != i) return S[t.id] = i, i
  }
  throw Error("could not find launchable")
}

function C(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
  if (e()) {
    t();
    return
  }
  setTimeout(() => {
    250 * i <= 12e4 ? C(e, t, n, i + 1) : n()
  }, 250)
}

function p(e) {
  return h.info("launch", e), new Promise((t, n) => {
    null == E.Z.safeParseWithQuery(e.launchTarget) ? n(Error("Failed to parse launch target. ".concat(e.launchTarget))) : (window.open(e.launchTarget), t([]))
  })
}
t.Z = {
  waitSubscribed: (e, t) => new Promise((n, i) => C(() => o.Z.isSubscribed(e, t), n, i)),
  waitConnected(e) {
    return new Promise(C.bind(this, () => l.Z.isConnected(e)))
  },
  isLaunchable: e => R(m(e)).then(e => null != e).catch(() => !1),
  launch: e => R(m(e)).then(p),
  launchDispatchApplication(e, t, n, r, o) {
    let {
      launchOptions: l,
      defaultLaunchOptionId: u,
      installPath: c,
      applicationId: E,
      branchId: I,
      buildId: h,
      shouldPatch: S
    } = e;
    if (null == l || null == u || null == c) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
    null == o && (o = u);
    let f = l[o];
    if (null == f) throw Error("Couldn't construct launchable for ".concat(e.applicationId, ". No launch option."));
    return (0, i.o)([I]).then(e => {
      let t = e[0];
      if (null == t) return Promise.reject(Error("branch is null"));
      let {
        liveBuildId: n
      } = t;
      if (S && n !== h) return Promise.reject(Error("live build id changed"))
    }).then(() => d.Z.runLaunchSetup(E, I)).then(() => {
      let e = (0, s.Z)(c),
        i = {
          DISCORD_INSTANCE_ID: _.Z.getId().toString(),
          DISCORD_ACCESS_TOKEN: null != t ? t : "",
          DISCORD_CURRENT_LOCALE: n,
          DISCORD_CURRENT_BRANCH: r,
          DISCORD_STORAGE_PATH: T.SRg.ROOT_STORAGE_PATH(e, a.default.getId())
        };
      return d.Z.launch(E, I, f.name, i)
    })
  },
  removeShortcuts: e => (0, c.isWindows)() ? A().then(t => {
    var n, i;
    return null !== (i = null === (n = t.removeShortcuts) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i
  }) : Promise.resolve(!1),
  createShortcuts(e, t, n, i, r) {
    if (null == r || !(0, c.isWindows)()) return Promise.resolve(!1);
    let s = "discord:///library/".concat(i, "/launch"),
      o = "".concat(r, "\\icon.ico");
    return A().then(i => {
      var r, a;
      return null !== (a = null === (r = i.createShortcuts) || void 0 === r ? void 0 : r.call(i, e, t, n, s, o)) && void 0 !== a && a
    })
  },
  isGameLaunchable: e => R({
    id: e
  }).then(e => null != e).catch(() => !1),
  launchGame(e) {
    if (l.Z.isConnected(e)) return Promise.resolve();
    return R({
      id: e
    }).then(p)
  },
  isProtocolRegistered: e => A().then(t => {
    var n, i;
    return null !== (i = null === (n = t.isProtocolSchemeRegistered) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i
  }),
  setRecentGames(e) {
    A().then(t => {
      var n;
      return null === (n = t.setRecentGames) || void 0 === n ? void 0 : n.call(t, e)
    }).catch(() => {})
  }
}