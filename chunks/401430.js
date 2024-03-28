"use strict";
n.r(t), n.d(t, {
  authorizeAndSetTestModeApplication: function() {
    return f
  },
  reset: function() {
    return E
  },
  resetError: function() {
    return _
  }
}), n("411104"), n("789020");
var s = n("570140"),
  a = n("566620"),
  l = n("728345"),
  i = n("812206"),
  r = n("973616"),
  o = n("630388"),
  u = n("591759"),
  d = n("978085"),
  c = n("981631");
async function f(e, t) {
  s.default.dispatch({
    applicationId: e,
    type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
  });
  try {
    if (!await (0, a.validateTestMode)(e)) throw Error("Do not have access!");
    let n = i.default.getApplication(e);
    null == n && (n = r.default.createFromServer(await l.default.fetchApplication(e)));
    let f = (0, o.hasFlag)(n.flags, c.ApplicationFlags.EMBEDDED);
    if (f && (null == t || !u.default.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
    return !f && d.createTestModeLibraryApplications(n), s.default.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
      applicationId: e,
      originURL: f ? t : null
    }), n
  } catch (t) {
    return s.default.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
      applicationId: e,
      error: t.message
    }), null
  }
}

function E() {
  s.default.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET"
  })
}

function _() {
  s.default.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET_ERROR"
  })
}