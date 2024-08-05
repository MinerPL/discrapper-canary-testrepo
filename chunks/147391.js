n.d(t, {
  L: function() {
return u;
  }
});
var i = n(373793),
  o = n(367907),
  a = n(69580),
  l = n(812206),
  r = n(981631),
  s = n(689079);

function u(e) {
  var t, n, u, d, c;
  let {
applicationId: m,
userIndexState: p,
guildIndexState: h,
sectionName: _,
location: E,
source: I
  } = e;
  if (m === s.bi.BUILT_IN || (null === (t = p.result) || void 0 === t ? void 0 : t.sections[m]) != null || (null === (n = h.result) || void 0 === n ? void 0 : n.sections[m]) != null)
return Promise.resolve(!0);
  (0, o.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
location: E,
application_id: m,
section_name: _,
source: I
  });
  let x = l.Z.getApplication(m),
g = i.Y.USER_INSTALL,
C = null == x ? void 0 : null === (c = x.integrationTypesConfig) || void 0 === c ? void 0 : null === (d = c[g]) || void 0 === d ? void 0 : null === (u = d.oauth2InstallParams) || void 0 === u ? void 0 : u.scopes;
  return new Promise(e => {
(0, a.openOAuth2Modal)({
  clientId: m,
  integrationType: g,
  scopes: C,
  callback: t => {
    let {
      location: n
    } = t;
    null != n ? ((0, o.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
      location: E,
      application_id: m,
      section_name: _,
      source: I
    }), e(!0)) : e(!1);
  }
}, () => {
  e(!1);
});
  });
}