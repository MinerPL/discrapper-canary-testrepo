n.d(t, {
	P: function () {
		return i;
	}
});
let r = (0, n(818083).B)({
	kind: 'user',
	id: '2024-08_private_channel_hiding',
	label: 'Private Channel Hiding',
	defaultConfig: { enableObfuscation: !1 },
	treatments: [
		{
			id: 1,
			label: 'Obfuscation Enable',
			config: { enableObfuscation: !0 }
		}
	]
});
function i() {
	return r.getCurrentConfig({ location: '1' }).enableObfuscation;
}
