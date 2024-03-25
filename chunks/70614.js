"use strict";
n.r(t), n.d(t, {
  authorizeAndSetTestModeApplication: function() {
    return E
  },
  reset: function() {
    return f
  },
  resetError: function() {
    return _
  }
}), n("70102"), n("702976");
var s = n("913144"),
  l = n("550766"),
  a = n("651057"),
  i = n("299285"),
  r = n("653047"),
  o = n("568734"),
  u = n("253981"),
  d = n("568131"),
  c = n("49111");
async function E(e, t) {
  s.default.dispatch({
    applicationId: e,
    type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
  });
  try {
    let n = await (0, l.validateTestMode)(e);
    if (!n) throw Error("Do not have access!");
    let E = i.default.getApplication(e);
    null == E && (E = r.default.createFromServer(await a.default.fetchApplication(e)));
    let f = (0, o.hasFlag)(E.flags, c.ApplicationFlags.EMBEDDED);
    if (f && (null == t || !u.default.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
    return !f && d.createTestModeLibraryApplications(E), s.default.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
      applicationId: e,
      originURL: f ? t : null
    }), E
  } catch (t) {
    return s.default.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
      applicationId: e,
      error: t.message
    }), null
  }
}

function f() {
  s.default.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET"
  })
}

function _() {
  s.default.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET_ERROR"
  })
}