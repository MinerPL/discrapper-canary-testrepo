t.d(n, {
  i: function() {
return _;
  }
});
var E = t(689938);

function _(e) {
  let {
username: n,
usernameOnClickHandler: t,
productName: _
  } = e;
  return E.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
username: n,
usernameHook: t,
productName: _
  });
}