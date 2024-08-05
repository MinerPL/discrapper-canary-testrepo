n.d(t, {
  A: function() {
return a;
  }
});
var i = n(981631),
  s = n(689938);

function a(e) {
  let {
application: t,
username: n,
usernameHook: a = i.dG4
  } = e;
  return null != t ? s.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE.format({
username: n,
applicationName: t.name,
usernameHook: a
  }) : s.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION.format({
username: n,
usernameHook: a
  });
}