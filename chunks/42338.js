t.d(n, {
  X: function() {
return l;
  }
});
var o = t(735250);
t(470079);
var i = t(859097),
  s = t(981631),
  r = t(689938);

function l(e) {
  let {
onContinue: n,
onClose: t,
errorCode: l
  } = e, c = l === s.evJ.UNDER_MINIMUM_AGE ? r.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_PSN_CHILD_ACCOUNT_DETAILS : r.Z.Messages.CONNECT_PS_ERROR_BODY;
  return (0, o.jsx)(i.C, {
title: r.Z.Messages.CONNECT_CONSOLE_ERROR_TITLE,
body: c,
onClose: t,
onContinue: n
  });
}