"use strict";
n.r(t), n.d(t, {
  uninstallBranchPrompt: function() {
    return r
  }
});
var a = n("77078"),
  s = n("299285"),
  l = n("605250"),
  i = n("190017");

function r(e, t, r) {
  ! function(e, t) {
    let i = s.default.getApplication(e);
    if (null == i) {
      new(0, l.default)("DispatchUninstallActionCreators").log("Application not found for game ".concat(e));
      return
    }(0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("857727").then(n.bind(n, "857727"));
      return n => e({
        game: i,
        onConfirmUninstall: t,
        ...n
      })
    })
  }(e, () => (0, i.uninstallApplication)(e, t, r))
}