n(789020);
var r, i = n(442837),
  a = n(570140),
  s = n(695346),
  o = n(630388),
  l = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function c() {
  return {
lastUsedObject: {},
useActivityUrlOverride: !1,
activityUrlOverride: null,
filter: ''
  };
}
let d = c(),
  _ = null,
  E = [];
class f extends(r = i.ZP.PersistedStore) {
  initialize(e) {
d = {
  ...c(),
  ...null != e ? e : {}
};
  }
  getState() {
return d;
  }
  getIsEnabled() {
return s.Sb.getSetting() && E.length > 0;
  }
  getLastUsedObject() {
return d.lastUsedObject;
  }
  getUseActivityUrlOverride() {
return this.getIsEnabled() && d.useActivityUrlOverride;
  }
  getActivityUrlOverride() {
return this.getIsEnabled() ? d.activityUrlOverride : null;
  }
  getFetchState() {
return _;
  }
  getFilter() {
return this.getIsEnabled() ? d.filter : '';
  }
  getDeveloperShelfItems() {
return this.getIsEnabled() ? E : [];
  }
  inDevModeForApplication(e) {
return this.getIsEnabled() && null != E.find(t => t.id === e);
  }
}
u(f, 'displayName', 'DeveloperActivityShelfStore'), u(f, 'persistKey', 'DeveloperActivityShelfStore'), u(f, 'migrations', [e => (delete e.isEnabled, {
  ...e
})]), t.Z = new f(a.Z, {
  LOGOUT: function() {
d = c(), _ = null, E = [];
  },
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
d.useActivityUrlOverride = !d.useActivityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
let {
  activityUrlOverride: t
} = e;
d.activityUrlOverride = t;
  },
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
let {
  applicationId: t,
  timestamp: n
} = e;
if (null == E.find(e => e.id === t))
  return !1;
d.lastUsedObject[t] = n;
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
_ = 'loading';
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
let {
  applications: t
} = e;
_ = 'loaded', E = t.filter(e => null != e.flags && (0, o.yE)(e.flags, l.udG.EMBEDDED));
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
let {
  type: t
} = e;
_ = 'errored';
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
let {
  filter: t
} = e;
d.filter = t;
  },
  USER_SETTINGS_PROTO_UPDATE() {}
});