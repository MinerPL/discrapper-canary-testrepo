"use strict";
n.d(t, {
  PE: function() {
    return u
  },
  a5: function() {
    return l
  },
  rb: function() {
    return a
  }
});
var i = n(652874),
  r = n(585483),
  s = n(981631);
let o = Object.freeze({
    hasUnsubmittedChanges: !1,
    shouldShowWarning: !1
  }),
  a = (0, i.Z)(e => o),
  l = e => {
    a.setState({
      hasUnsubmittedChanges: e
    })
  },
  u = e => {
    a.setState({
      shouldShowWarning: e
    }), e && r.S.dispatch(s.CkL.EMPHASIZE_NOTICE)
  }