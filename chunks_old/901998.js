"use strict";
let a, s;
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var l = n("917351"),
  i = n.n(l),
  r = n("446674"),
  o = n("95410"),
  u = n("913144"),
  d = n("991170"),
  c = n("492114"),
  f = n("42203"),
  E = n("49111"),
  h = n("606762");
let _ = new Set,
  C = E.FormStates.CLOSED,
  S = !1,
  I = null,
  m = null,
  p = null,
  T = null,
  g = null,
  A = null,
  N = o.Storage.get(h.ADVANCED_MODE_ON_KEY) || !1;

function R(e) {
  let t = e.getGuildId(),
    n = {
      ...e.permissionOverwrites
    };
  return null != t && null == n[t] && (n[t] = d.makeEveryoneOverwrite(t)), n
}

function O() {
  if (p = c.default.getChannel(), T = c.default.getCategory(), null == p) return !1;
  let e = p.getGuildId();
  m = I = R(p), null == I[g] && (g = e), s = null != T, a = d.areChannelsLocked(p, T), A = null, S = !1, C = E.FormStates.CLOSED, _.clear()
}
class v extends r.default.Store {
  initialize() {
    this.waitFor(c.default, f.default)
  }
  hasChanges() {
    return S
  }
  showNotice() {
    return this.hasChanges()
  }
  getPermissionOverwrite(e) {
    return null == I ? void 0 : I[e]
  }
  get editedPermissionIds() {
    return Array.from(_)
  }
  get permissionOverwrites() {
    return I
  }
  get selectedOverwriteId() {
    return g
  }
  get formState() {
    return C
  }
  get isLockable() {
    return s
  }
  get locked() {
    return a
  }
  get channel() {
    return p
  }
  get category() {
    return T
  }
  get advancedMode() {
    return N
  }
}
v.displayName = "ChannelSettingsPermissionsStore";
var L = new v(u.default, {
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (null != p || t !== E.ChannelSettingsSections.PERMISSIONS) return !1;
    O()
  },
  CHANNEL_SETTINGS_PERMISSIONS_INIT: O,
  CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
    let {
      id: t,
      allow: n,
      deny: s
    } = e, l = null == I ? void 0 : I[t];
    if (null == l || null == p) return !1;
    l = {
      ...l,
      allow: n,
      deny: s
    }, I = {
      ...I,
      [t]: l
    }, _.add(t), C = E.FormStates.OPEN, S = !i.isEqual(I, m), a = d.areChannelsLocked(p, T)
  },
  CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
    let {
      id: t
    } = e;
    if (null != I && null != I[t]) g = t;
    else {
      if (null == p) return !1;
      A = t
    }
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    C = E.FormStates.CLOSED, I = null, m = null, p = null, T = null, S = !1, _.clear(), g = null, A = null
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    if (null == p) return !1;
    let n = !1;
    for (let e of t) !1 !== function(e) {
      if (null == p || p.id !== e || null == (p = f.default.getChannel(e))) return !1;
      T = c.default.getCategory();
      let t = p.getGuildId();
      if (null == t) return !1;
      m = R(p);
      let n = {};
      return _.forEach(e => {
        null != I && (n[e] = I[e])
      }), null == n[t] && null == p.permissionOverwrites[t] && (n[t] = d.makeEveryoneOverwrite(t)), null == (I = {
        ...p.permissionOverwrites,
        ...n
      })[g] ? g = t : null != A && null != I[A] && (g = A, A = null), a = d.areChannelsLocked(p, T), !0
    }(e.id) && (n = !0);
    return n
  },
  CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
    C = E.FormStates.SUBMITTING
  },
  CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
    let {
      silent: t
    } = e;
    t ? C = E.FormStates.OPEN : (C = E.FormStates.CLOSED, O())
  },
  CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
    let {
      advancedMode: t
    } = e;
    N = t, o.Storage.set(h.ADVANCED_MODE_ON_KEY, t)
  }
})