"use strict";
s.r(t), s.d(t, {
  openModal: function() {
    return i
  }
});
var a = s("416867"),
  n = s("549631"),
  l = s("689938");
let i = () => {
  (0, a.openActionCompleteSuccessModal)({
    title: l.default.Messages.GUILD_ROLE_SUBSCRIPTION_RESTARTED_TITLE,
    body: l.default.Messages.GUILD_ROLE_SUBSCRIPTION_RESTARTED_DESCRIPTION,
    Icon: n.default
  })
}