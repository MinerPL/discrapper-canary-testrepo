let r, i, a;
n(47120);
var o, s = n(392711),
  l = n.n(s),
  u = n(442837),
  c = n(570140),
  d = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let E = f();

function f() {
  return {
recentCustomStatuses: [],
currentDefaultStatus: null
  };
}
class h extends(o = u.ZP.PersistedStore) {
  initialize(e) {
E = {
  ...f(),
  ...null != e ? e : {}
};
  }
  getState() {
return E;
  }
  getCurrentHangStatus() {
return r;
  }
  getCustomHangStatus() {
return i;
  }
  getRecentCustomStatuses() {
return E.recentCustomStatuses;
  }
  getCurrentDefaultStatus() {
return E.currentDefaultStatus;
  }
  getHangStatusActivity() {
return null == r ? null : a;
  }
}
_(h, 'displayName', 'HangStatusStore'), _(h, 'persistKey', 'HangStatusStore'), t.Z = new h(c.Z, {
  LOGOUT: function() {
E = f();
  },
  UPDATE_HANG_STATUS: function(e) {
let {
  status: t,
  saveAsDefault: n
} = e;
r = t, i = null, n && (E.currentDefaultStatus = {
  status: t,
  customHangStatus: i,
  expiresAt: Date.now() + 28800000
}), a = {
  type: d.IIU.HANG_STATUS,
  name: 'Hang Status',
  state: r
};
  },
  UPDATE_HANG_STATUS_CUSTOM: function(e) {
let {
  status: t,
  emoji: n,
  saveAsDefault: o
} = e;
r = d.tNA.CUSTOM, i = {
  status: t,
  emoji: n
};
let s = [...E.recentCustomStatuses],
  u = s.findIndex(e => e.status === t && l().isEqual(e.emoji, n)); -
1 !== u ? s.splice(u, 1) : 7 === s.length && s.splice(6, 1), E.recentCustomStatuses = [
  i,
  ...s
], o && (E.currentDefaultStatus = {
  status: r,
  customHangStatus: i,
  expiresAt: Date.now() + 28800000
}), a = {
  type: d.IIU.HANG_STATUS,
  name: 'Hang Status',
  state: r,
  details: t,
  emoji: n
};
  },
  DELETE_INVALID_HANG_STATUSES: function(e) {
let {
  statuses: t
} = e, n = [...E.recentCustomStatuses];
t.forEach(e => {
  let {
    status: t,
    emoji: o
  } = e, s = n.findIndex(e => e.status === t && l().isEqual(e.emoji, o)); -
  1 !== s && n.splice(s, 1), t === (null == i ? void 0 : i.status) && l().isEqual(o, null == i ? void 0 : i.emoji) && (r = null, i = null, E.currentDefaultStatus = null, a = null);
}), E.recentCustomStatuses = n;
  },
  CLEAR_HANG_STATUS: function(e) {
let {
  saveAsDefault: t
} = e;
r = null, i = null, t && (E.currentDefaultStatus = {
  status: null,
  customHangStatus: null,
  expiresAt: Date.now() + 28800000
}), a = null;
  }
});