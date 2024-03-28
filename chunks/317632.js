"use strict";
n.r(t), n("47120");
var s, a, l, i, r = n("442837"),
  o = n("570140"),
  u = n("823379"),
  d = n("981631");
let c = [],
  f = {},
  E = null,
  _ = 0;

function T(e) {
  let t = null;
  try {
    t = JSON.parse(e.launch_parameters)
  } catch {
    return null
  }
  if (e.platform_type === d.PlatformTypes.XBOX) {
    let n = null == t ? void 0 : t.titleId,
      s = null == t ? void 0 : t.inviteToken;
    return null == n || null == s ? null : {
      ...e,
      parsed_launch_parameters: {
        titleId: n,
        inviteToken: s
      }
    }
  }
  return null
}
class m extends(s = r.default.Store) {
  getInvites() {
    return c
  }
  getInviteStatuses() {
    return f
  }
  isInviteGameInstalled(e) {
    var t;
    return null === (t = f[e.invite_id]) || void 0 === t ? void 0 : t.installed
  }
  isInviteJoinable(e) {
    var t;
    return null === (t = f[e.invite_id]) || void 0 === t ? void 0 : t.joinable
  }
  getLastUnseenInvite() {
    return E
  }
  getUnseenInviteCount() {
    return _
  }
}
i = "GameInviteStore", (l = "displayName") in(a = m) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new m(o.default, {
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      gameInvites: t
    } = e;
    c = t.map(T).filter(u.isNotNullish)
  },
  GAME_INVITE_CREATE: function(e) {
    let {
      gameInvite: t
    } = e, n = T(t);
    null != n && (c = [n, ...c], E = t, _ += 1)
  },
  GAME_INVITE_DELETE: function(e) {
    let {
      inviteId: t
    } = e;
    c = c.filter(e => e.invite_id !== t)
  },
  GAME_INVITE_DELETE_MANY: function(e) {
    let {
      inviteIds: t
    } = e;
    c = c.filter(e => !t.includes(e.invite_id))
  },
  GAME_INVITE_UPDATE_STATUS: function(e) {
    (f = {
      ...f
    })[e.inviteId] = {
      installed: e.installed,
      joinable: e.joinable
    }
  },
  GAME_INVITE_CLEAR_UNSEEN: function(e) {
    E = null, _ = 0
  }
})