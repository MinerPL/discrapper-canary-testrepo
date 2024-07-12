n.d(t, {
  zU: function() {
return r;
  }
}), n(47120);
var r, i, a, o = n(442837),
  s = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(a = r || (r = {}))[a.MESSAGING = 0] = 'MESSAGING', a[a.OVERLAYS = 1] = 'OVERLAYS', a[a.PREMIUM = 2] = 'PREMIUM';
let u = {
visual_effect_view_overrides: {
  label: 'Blur view overrides for designers to test with',
  category: 1
},
obscure_blur_effect_enabled: {
  label: 'Force obscure blur effect on for message media and embeds',
  category: 1
},
explicit_media_redaction_ignore_pending_scan: {
  label: 'Ignore pending scan on explicit media',
  category: 1
},
upload_fail_50: {
  label: 'Uploads: Fail 50% of uploads with 500 status after a 1 second delay',
  category: 0
},
send_fail_100: {
  label: 'Send: Fail with 500 status',
  category: 0
},
premium_roadblocks: {
  label: 'Enable all new premium roadblocks',
  category: 2
}
  },
  c = {};
class d extends(i = o.ZP.DeviceSettingsStore) {
  getUserAgnosticState() {
return {
  toggleStates: c
};
  }
  initialize(e) {
for (var t in u) {
  var n, r;
  let i = null !== (r = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== r && r;
  c[t] = i;
}
  }
  get(e) {
var t;
return null !== (t = c[e]) && void 0 !== t && t;
  }
  set(e, t) {
return c[e] = t, t;
  }
  all() {
return c;
  }
  allByCategory(e) {
return Object.entries(u).filter(t => {
  let [n, r] = t;
  return r.category === e;
}).map(e => {
  let [t, n] = e;
  return [
    t,
    c[t],
    n
  ];
});
  }
}
l(d, 'displayName', 'DevToolsDevSettingsStore'), l(d, 'persistKey', 'DevToolsDevSettingsStore'), t.ZP = new d(s.Z, {
  DEV_TOOLS_DEV_SETTING_SET: function(e) {
c[e.toggle] = e.value;
  }
});