n.d(t, {
	Z: function () {
		return o;
	}
});
var i = n(470079);
function o() {
	let e = (0, i.createContext)(void 0);
	return {
		Provider: ({ initialStore: t, createStore: n, children: o }) => {
			let r = (0, i.useRef)();
			return (
				!r.current &&
					(t &&
						(console.warn('Provider initialStore is deprecated and will be removed in the next version.'),
						!n && (n = () => t)),
					(r.current = n())),
				(0, i.createElement)(e.Provider, { value: r.current }, o)
			);
		},
		useStore: (t, n = Object.is) => {
			let o = (0, i.useContext)(e);
			if (!o) throw Error('Seems like you have not used zustand provider as an ancestor.');
			return o(t, n);
		},
		useStoreApi: () => {
			let t = (0, i.useContext)(e);
			if (!t) throw Error('Seems like you have not used zustand provider as an ancestor.');
			return (0, i.useMemo)(
				() => ({
					getState: t.getState,
					setState: t.setState,
					subscribe: t.subscribe,
					destroy: t.destroy
				}),
				[t]
			);
		}
	};
}
