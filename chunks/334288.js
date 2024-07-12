n.d(t, {
  f: function() {
return r;
  }
});
var i = n(996106),
  s = n(186901),
  a = n(981631);

function r(e) {
  if (s.He.IPC !== e && s.He.POST_MESSAGE !== e)
throw new i.Z({
  errorCode: a.lTL.INVALID_COMMAND
}, 'Invalid transport.');
}