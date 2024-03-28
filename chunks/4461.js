"use strict";
l.r(t), l.d(t, {
  useInstallApplication: function() {
    return n
  }
});
var i = l("470079"),
  a = l("135431");

function n(e, t) {
  let l = i.useMemo(() => null != e && (0, a.canInstallApplication)({
    customInstallUrl: e.custom_install_url,
    installParams: e.install_params,
    integrationTypesConfig: e.integration_types_config
  }), [e]);
  return {
    canInstall: l,
    install: i.useCallback(l => {
      null != e && (0, a.installApplication)({
        applicationId: e.id,
        customInstallUrl: e.custom_install_url,
        installParams: e.install_params,
        integrationTypesConfig: e.integration_types_config,
        guildId: null != t ? t : void 0,
        source: l
      })
    }, [e, t])
  }
}