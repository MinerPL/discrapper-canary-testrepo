"use strict";
n.r(t), n.d(t, {
  acceptInvite: function() {
    return d
  },
  clearUnseenInvites: function() {
    return c
  },
  deleteAllInvites: function() {
    return E
  },
  deleteInvite: function() {
    return f
  },
  launchInviteGame: function() {
    return u
  },
  updateInviteStatus: function() {
    return o
  }
}), n("411104");
var s = n("544891"),
  a = n("570140"),
  l = n("439849"),
  i = n("358085"),
  r = n("981631");
async function o(e) {
  if (e.platform_type === r.PlatformTypes.XBOX) {
    let t = e.parsed_launch_parameters.titleId,
      n = e.parsed_launch_parameters.inviteToken;
    if (!(0, i.isWindows)() || null == t || null == n) return;
    let s = await _(t, !1),
      l = await m(n);
    a.default.dispatch({
      type: "GAME_INVITE_UPDATE_STATUS",
      inviteId: e.invite_id,
      installed: s,
      joinable: l
    })
  } else throw Error("Unsupported invite platform " + e.platform_type)
}
async function u(e) {
  if (e.platform_type === r.PlatformTypes.XBOX) {
    let t = e.parsed_launch_parameters.titleId;
    return !!(0, i.isWindows)() && null != t && await T(t)
  }
  throw Error("Unsupported invite platform " + e.platform_type)
}
async function d(e) {
  if (e.platform_type === r.PlatformTypes.XBOX) {
    let t = e.parsed_launch_parameters.inviteToken;
    return !!(0, i.isWindows)() && null != t && await I(t)
  }
  throw Error("Unsupported invite platform " + e.platform_type)
}

function c() {
  a.default.dispatch({
    type: "GAME_INVITE_CLEAR_UNSEEN"
  })
}
async function f(e) {
  await s.HTTP.del({
    url: r.Endpoints.GAME_INVITE(e.invite_id)
  })
}
async function E() {
  await s.HTTP.del({
    url: r.Endpoints.GAME_INVITES
  })
}
async function _(e, t) {
  if (!(0, i.isWindows)()) return !1;
  let n = await (0, l.default)();
  return new Promise((s, a) => {
    if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
      a(Error("Game utils module not loaded"));
      return
    }
    n.xboxIsApplicationInstalled(e, t, e => {
      s(e)
    })
  })
}
async function T(e) {
  if (!(0, i.isWindows)()) return !1;
  let t = await (0, l.default)();
  return new Promise((n, s) => {
    if ((null == t ? void 0 : t.xboxLaunchGame) == null) {
      s(Error("Game utils module not loaded"));
      return
    }
    t.xboxLaunchGame(e, e => {
      n(e)
    })
  })
}
async function m(e) {
  if (!(0, i.isWindows)()) return !1;
  let t = await (0, l.default)();
  return new Promise((n, s) => {
    if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null) {
      s(Error("Game utils module not loaded"));
      return
    }
    t.xboxIsInviteTokenValid(e, e => {
      n(e)
    })
  })
}
async function I(e) {
  if (!(0, i.isWindows)()) return !1;
  let t = await (0, l.default)();
  return new Promise((n, s) => {
    if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) {
      s(Error("Game utils module not loaded"));
      return
    }
    t.xboxAcceptGameInvite(e, e => {
      n(e)
    })
  })
}