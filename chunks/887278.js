n.d(t, {
  $1: function() {
return m;
  },
  YT: function() {
return T;
  },
  pn: function() {
return g;
  }
}), n(411104);
var r, i, a = n(570140),
  o = n(923928),
  s = n(593472),
  l = n(594190),
  u = n(77498),
  c = n(594174),
  d = n(626135),
  _ = n(358085),
  E = n(998502),
  f = n(96592),
  h = n(981631);
let p = {
  development: [
0,
0,
0,
0
  ],
  canary: [
1,
0,
30,
10
  ],
  ptb: [
1,
0,
1005,
2
  ],
  stable: [
1,
0,
9001,
2
  ]
};

function m() {
  var e;
  return !(null === E.ZP || void 0 === E.ZP ? void 0 : null === (e = E.ZP.isModuleVersionAtLeast) || void 0 === e ? void 0 : e.call(E.ZP, 'discord_hook', p));
}
async function I() {
if (!(0, _.isWindows)())
  return Promise.reject(Error('Hook is only available on Windows'));
if (m())
  return Promise.reject(Error('Hook module is too old'));
await E.ZP.ensureModule('discord_hook');
let e = await E.ZP.requireModule('discord_hook');
return function(e) {
  if (null == e.setFlags)
    return;
  let t = 0,
    n = f.Z.getCurrentConfig({
      location: 'edd7d3_1'
    }, {
      autoTrackExposure: !1
    });
  n.enableCrashReporting && (console.log('Hook: Enabling crash reporting.'), t |= 1);
  let r = c.default.getCurrentUser();
  null != r && (r.isStaff() || n.enableCrashTrigger) && (console.log('Hook: Enabling crash trigger.'), t |= 2), e.setFlags(t);
}(e), e;
  }
  (i = r || (r = {}))[i.None = 0] = 'None', i[i.EnableCrashReporting = 1] = 'EnableCrashReporting', i[i.EnableCrashTrigger = 2] = 'EnableCrashTrigger';

function T(e, t) {
  return I().then(n => {
var r;
let i = null === (r = l.ZP.getGameForPID(e)) || void 0 === r ? void 0 : r.name,
  c = u.Z.getGameByName(i),
  _ = null;
return new Promise(r => {
  let u = (e, n) => {
      d.default.track(h.rMx.HOOK_RESULT, {
        game_name: i,
        game_id: null == c ? null : c.id,
        success: n,
        error: e,
        ...t
      }), null != _ && (clearTimeout(_), _ = null), n ? r() : r(e = null != e ? e : 'Unknown hook error');
    },
    E = l.ZP.getOverlayOptionsForPID(e),
    f = {
      ...s.r,
      ...E,
      elevate: l.ZP.shouldElevateProcessForPID(e)
    };
  null == f.allowHook || f.allowHook ? (_ = setTimeout(() => {
    n.cancelAttachToProcess(e), u('Timed out waiting for hook response', !1);
  }, 120000), n.attachToProcess(e, f, u), a.Z.wait(() => o.Z.clearElevatedProcess())) : r('Hook is disabled for this game');
});
  });
}

function g(e) {
  return I().then(t => {
t.cancelAttachToProcess(e);
  });
}