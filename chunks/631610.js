var r = n(818083);
t.Z = (0, r.B)({
	kind: 'user',
	id: '2023-08_full_band_krisp_android_',
	label: 'Let us control if full band is enabled on Android',
	defaultConfig: { allowSettingFullbandAndroid: !1 },
	treatments: [
		{
			id: 1,
			label: 'Load full band krisp model',
			config: { allowSettingFullbandAndroid: !0 }
		}
	]
});
