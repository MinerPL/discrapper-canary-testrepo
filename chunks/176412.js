t.d(n, {
  Bm: function() {
return C;
  },
  L_: function() {
return v;
  },
  P7: function() {
return N;
  }
});
var i = t(470079),
  l = t(392711),
  a = t(373793),
  r = t(481060),
  s = t(2052),
  o = t(542094),
  c = t(513202),
  u = t(367907),
  d = t(812206),
  m = t(69580),
  p = t(499254),
  _ = t(541099),
  E = t(827498),
  A = t(981631),
  f = t(689079),
  h = t(689938);

function N(e, n, t, i) {
  var l;
  let a = (0, s.O)(),
d = (0, o.Qv)({
  applicationId: n.id,
  channelId: e.id
}),
m = (0, o.w1)({
  applicationId: n.id,
  embeddedActivitiesManager: c.Z,
  channelId: e.id,
  guildId: null !== (l = e.getGuildId()) && void 0 !== l ? l : void 0,
  locationObject: a.location,
  onActivityItemSelectedProp: e => {
    let {
      applicationId: n
    } = e, l = _.Z.entrypoint();
    p.y(E.ti.ACTIVITY), (0, u.yw)(A.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
      location: t,
      application_id: n,
      section_name: i,
      action: d,
      source: l
    });
  }
}),
f = r.ButtonColors.BRAND,
N = h.Z.Messages.LAUNCH;
  return d === o.JS.JOIN ? (f = r.ButtonColors.GREEN, N = h.Z.Messages.JOIN_ACTIVITY) : d === o.JS.LEAVE && (f = r.ButtonColors.RED, N = h.Z.Messages.LEAVE), {
onActivityItemSelected: m,
activityAction: d,
buttonColor: f,
buttonText: N
  };
}

function C(e, n) {
  let t = _.Z.entrypoint(),
a = i.useMemo(() => (0, l.debounce)((e, n) => {
  (0, u.yw)(A.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
    type: e,
    source: n
  });
}, 400, {
  leading: !1,
  trailing: !0
}), []);
  i.useEffect(() => {
null != e && a(e, t);
  }, [
e,
n,
t,
a
  ]);
}

function v(e) {
  var n, t, i, l, r;
  let {
applicationId: s,
userIndexState: o,
guildIndexState: c,
sectionName: p,
location: _
  } = e;
  if (s === f.bi.BUILT_IN || (null === (n = o.result) || void 0 === n ? void 0 : n.sections[s]) != null || (null === (t = c.result) || void 0 === t ? void 0 : t.sections[s]) != null)
return Promise.resolve(!0);
  (0, u.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
location: _,
application_id: s,
section_name: p
  });
  let E = d.Z.getApplication(s),
h = a.Y.USER_INSTALL,
N = null == E ? void 0 : null === (r = E.integrationTypesConfig) || void 0 === r ? void 0 : null === (l = r[h]) || void 0 === l ? void 0 : null === (i = l.oauth2InstallParams) || void 0 === i ? void 0 : i.scopes;
  return new Promise(e => {
(0, m.openOAuth2Modal)({
  clientId: s,
  integrationType: h,
  scopes: N,
  callback: n => {
    let {
      location: t
    } = n;
    null != t && ((0, u.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
      location: _,
      application_id: s,
      section_name: p
    }), e(!0));
  }
}, () => {
  e(!1);
});
  });
}