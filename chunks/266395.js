n.d(t, {
  PE: function() {
return u;
  },
  a5: function() {
return l;
  },
  rb: function() {
return s;
  }
});
var r = n(652874),
  i = n(585483),
  a = n(981631);
let o = Object.freeze({
hasUnsubmittedChanges: !1,
shouldShowWarning: !1
  }),
  s = (0, r.Z)(e => o),
  l = e => {
s.setState({
  hasUnsubmittedChanges: e
});
  },
  u = e => {
s.setState({
  shouldShowWarning: e
}), e && i.S.dispatch(a.CkL.EMPHASIZE_NOTICE);
  };