n(47120);
var s = n(735250),
  r = n(470079),
  i = n(442837),
  a = n(481060),
  l = n(893776),
  o = n(232567),
  c = n(129293),
  u = n(388905),
  d = n(353926),
  h = n(185625),
  _ = n(551549),
  E = n(108427),
  g = n(314897),
  p = n(981631),
  f = n(689938),
  I = n(549856);
i.ZP.initialize();
t.Z = e => {
  let {
location: t
  } = e, n = (0, i.e7)([g.default], () => g.default.isAuthenticated()), m = (0, i.e7)([d.Z], () => d.Z.hasLoadedExperiments), N = (0, _.oK)('RSL - Landing Page'), [T, x] = r.useState(!1), [A, C] = r.useState(f.Z.Messages.AUTHORIZING), [S, O] = r.useState(!0), v = e => {
switch (e) {
  case p.evJ.INVALID_FORM_BODY:
  case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
    C(f.Z.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
    break;
  case p.evJ.DSA_RSL_ALREADY_REQUESTED:
    C(f.Z.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
    break;
  case p.evJ.DSA_RSL_LIMITED_TIME:
    C(f.Z.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
    break;
  case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
    C(f.Z.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
    break;
  default:
    C(f.Z.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR);
}
  };
  return r.useEffect(() => {
n ? (O(!0), o.k({
  withAnalyticsToken: !0
}).then(() => O(!1)).catch(() => O(!1))) : O(!1);
  }, [n]), r.useEffect(() => {
!m && !N && l.Z.getExperiments();
  }, [
m,
N
  ]), r.useEffect(() => {
let e = async e => {
  var t, n;
  try {
    let n = null != e ? await (0, h.hs)(e) : void 0;
    null != n ? C(f.Z.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : v(null === (t = n.body) || void 0 === t ? void 0 : t.code);
  } catch (e) {
    v(null === (n = e.body) || void 0 === n ? void 0 : n.code);
  } finally {
    x(!1);
  }
};
x(!0), e((0, c.Z)(t)), (0, E.e)('report_second_look');
  }, [t]), N && !S && (0, s.jsxs)(u.ZP, {
children: [
  (0, s.jsx)(u.Dx, {
    className: I.marginBottom8,
    children: A
  }),
  T && (0, s.jsx)(a.Spinner, {})
]
  });
};