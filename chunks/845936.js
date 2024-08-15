n.d(t, {
  L: function() {
return c;
  }
});
var r = n(373793),
  i = n(367907),
  a = n(812206),
  s = n(69580),
  o = n(541099),
  l = n(981631),
  u = n(689079);

function c(e) {
  var t, n, c, d, _;
  let {
applicationId: E,
userIndexState: f,
guildIndexState: h,
onSuccess: p,
sectionName: m,
location: I,
entrypoint: T
  } = e;
  if (E === u.bi.BUILT_IN || (null === (t = f.result) || void 0 === t ? void 0 : t.sections[E]) != null || (null === (n = h.result) || void 0 === n ? void 0 : n.sections[E]) != null)
return null == p || p(), Promise.resolve(!0);
  let g = null != T ? T : o.Z.lastShownEntrypoint();
  (0, i.yw)(l.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
location: I,
application_id: E,
section_name: m,
source: g
  });
  let S = a.Z.getApplication(E),
A = r.Y.USER_INSTALL,
N = null == S ? void 0 : null === (_ = S.integrationTypesConfig) || void 0 === _ ? void 0 : null === (d = _[A]) || void 0 === d ? void 0 : null === (c = d.oauth2InstallParams) || void 0 === c ? void 0 : c.scopes;
  return new Promise(e => {
(0, s.openOAuth2Modal)({
  clientId: E,
  integrationType: A,
  scopes: N,
  callback: t => {
    let {
      location: n
    } = t;
    null != n && ((0, i.yw)(l.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
      location: I,
      application_id: E,
      section_name: m,
      source: g
    }), e(!0), null == p || p());
  }
}, () => {
  e(!1);
});
  });
}