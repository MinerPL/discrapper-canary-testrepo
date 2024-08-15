n.d(t, {
  Wt: function() {
return _;
  },
  mc: function() {
return E;
  },
  q$: function() {
return I;
  }
}), n(411104), n(789020);
var i = n(570140),
  a = n(566620),
  s = n(728345),
  r = n(812206),
  l = n(973616),
  o = n(630388),
  c = n(591759),
  u = n(978085),
  d = n(981631);
async function _(e, t) {
  i.Z.dispatch({
applicationId: e,
type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_START'
  });
  try {
if (!await (0, a.W5)(e))
  throw Error('Do not have access!');
let n = r.Z.getApplication(e);
null == n && (n = l.Z.createFromServer(await s.Z.fetchApplication(e)));
let _ = (0, o.yE)(n.flags, d.udG.EMBEDDED);
if (_ && (null == t || !c.Z.URL_REGEX.test(t)))
  throw Error('Invalid Origin URL for embedded application');
return !_ && u.GR(n), i.Z.dispatch({
  type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS',
  applicationId: e,
  originURL: _ ? t : null
}), n;
  } catch (t) {
return i.Z.dispatch({
  type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL',
  applicationId: e,
  error: t.message
}), null;
  }
}

function E() {
  i.Z.dispatch({
type: 'DEVELOPER_TEST_MODE_RESET'
  });
}

function I() {
  i.Z.dispatch({
type: 'DEVELOPER_TEST_MODE_RESET_ERROR'
  });
}