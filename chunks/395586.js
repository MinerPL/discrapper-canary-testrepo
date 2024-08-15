n.d(t, {
	AL: function () {
		return o;
	},
	f3: function () {
		return l;
	}
}),
	n(411104);
var s = n(735250),
	a = n(470079),
	i = n(674180);
let r = a.createContext(void 0);
function l() {
	let e = a.useContext(r);
	if (null == e) throw Error('useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext');
	return e;
}
function o(e) {
	let { guildId: t, children: n } = e,
		{ shouldRestrictUpdatingCreatorMonetizationSettings: a } = (0, i.gX)(t);
	return (0, s.jsx)(r.Provider, {
		value: a,
		children: n
	});
}
