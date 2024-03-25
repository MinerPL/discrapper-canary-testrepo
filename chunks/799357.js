"use strict";
s.r(t), s.d(t, {
  useEnableMFAHook: function() {
    return o
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("37785"),
  i = s("323877");

function r(e) {
  return e
}

function o(e) {
  let {
    onEnableMFAClick: t,
    onMFAEnabled: s
  } = e, {
    isUserMFAEnabled: o,
    isModerationMFAEnabled: d
  } = (0, i.useIsMFAEnabled)(), u = l.useCallback(async () => {
    await t(), null == s || s()
  }, [t, s]), c = l.useCallback(e => (0, a.jsx)(n.default, {
    onClick: u,
    children: e
  }), [u]);
  return o && d ? r : c
}