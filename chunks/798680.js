n.d(t, {
	M7: function () {
		return c;
	},
	dw: function () {
		return o;
	},
	ue: function () {
		return s;
	}
}),
	n(411104),
	n(47120);
var s,
	a,
	i = n(735250),
	r = n(470079);
((a = s || (s = {}))[(a.BASIC_INFO = 0)] = 'BASIC_INFO'), (a[(a.TIERS = 1)] = 'TIERS'), (a[(a.PAYMENT = 2)] = 'PAYMENT'), (a[(a.EMOJIS = 3)] = 'EMOJIS');
let l = r.createContext({
	currentTab: 0,
	setCurrentTab: () => {
		throw Error('useTabBarState must be used within TabBarContextProvider');
	}
});
function o() {
	return r.useContext(l);
}
function c(e) {
	let { initialTab: t, children: n } = e,
		[s, a] = r.useState(t);
	return (0, i.jsx)(l.Provider, {
		value: {
			currentTab: s,
			setCurrentTab: a
		},
		children: n
	});
}
