i.d(n, {
    P: function () {
        return r;
    }
});
var t = i(470079), a = i(135431);
function r(e, n) {
    let i = t.useMemo(() => null != e && (0, a.E)({
        customInstallUrl: e.custom_install_url,
        installParams: e.install_params,
        integrationTypesConfig: e.integration_types_config
    }), [e]);
    return {
        canInstall: i,
        install: t.useCallback(i => {
            if (null != e)
                (0, a.L)({
                    applicationId: e.id,
                    customInstallUrl: e.custom_install_url,
                    installParams: e.install_params,
                    integrationTypesConfig: e.integration_types_config,
                    guildId: null != n ? n : void 0,
                    source: i
                });
        }, [
            e,
            n
        ])
    };
}
