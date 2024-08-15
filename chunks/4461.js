n.d(t, {
	P: function () {
		return l;
	}
});
var a = n(470079),
	i = n(135431);
function l(e, t) {
	let n = a.useMemo(
		() =>
			null != e &&
			(0, i.E)({
				customInstallUrl: e.custom_install_url,
				installParams: e.install_params,
				integrationTypesConfig: e.integration_types_config
			}),
		[e]
	);
	return {
		canInstall: n,
		install: a.useCallback(
			(n) => {
				if (null != e)
					(0, i.L)({
						applicationId: e.id,
						customInstallUrl: e.custom_install_url,
						installParams: e.install_params,
						integrationTypesConfig: e.integration_types_config,
						guildId: null != t ? t : void 0,
						source: n
					});
			},
			[e, t]
		)
	};
}
