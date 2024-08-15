n.d(t, {
	Io: function () {
		return a;
	},
	bx: function () {
		return o;
	}
});
var r = n(818083);
let i = (0, r.B)({
	kind: 'user',
	id: '2024-06_content_entry_embed',
	label: 'Content Inventory Embed',
	defaultConfig: { enabled: !1 },
	treatments: [
		{
			id: 1,
			label: 'Enabled',
			config: { enabled: !0 }
		}
	]
});
function a(e) {
	let { enabled: t } = i.getCurrentConfig({ location: e });
	return t;
}
let s = (0, r.B)({
	kind: 'user',
	id: '2024-08_content_inventory_entry_signed_hash',
	label: 'Check Signature On Content Inventory Embed',
	defaultConfig: { enabled: !1 },
	treatments: [
		{
			id: 1,
			label: 'Enabled',
			config: { enabled: !0 }
		}
	]
});
function o(e) {
	let { enabled: t } = s.getCurrentConfig({ location: e });
	return t;
}
