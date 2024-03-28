"use strict";
s.r(t), s.d(t, {
  useEnableMFAHook: function() {
    return o
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("499150"),
  i = s("431516");

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