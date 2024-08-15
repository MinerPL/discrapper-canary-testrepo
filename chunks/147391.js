n.d(t, {
  L: function() {
return m;
  }
});
var i = n(373793),
  a = n(367907),
  o = n(69580),
  l = n(812206),
  c = n(981631),
  d = n(689079);

function m(e) {
  var t, n, m, r, u;
  let {
applicationId: s,
userIndexState: p,
guildIndexState: _,
sectionName: E,
location: g,
source: M
  } = e;
  if (s === d.bi.BUILT_IN || (null === (t = p.result) || void 0 === t ? void 0 : t.sections[s]) != null || (null === (n = _.result) || void 0 === n ? void 0 : n.sections[s]) != null)
return Promise.resolve(!0);
  (0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
location: g,
application_id: s,
section_name: E,
source: M
  });
  let C = l.Z.getApplication(s),
A = i.Y.USER_INSTALL,
I = null == C ? void 0 : null === (u = C.integrationTypesConfig) || void 0 === u ? void 0 : null === (r = u[A]) || void 0 === r ? void 0 : null === (m = r.oauth2InstallParams) || void 0 === m ? void 0 : m.scopes;
  return new Promise(e => {
(0, o.openOAuth2Modal)({
  clientId: s,
  integrationType: A,
  scopes: I,
  callback: t => {
    let {
      location: n
    } = t;
    null != n ? ((0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
      location: g,
      application_id: s,
      section_name: E,
      source: M
    }), e(!0)) : e(!1);
  }
}, () => {
  e(!1);
});
  });
}