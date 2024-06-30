l.d(t, {
    Z: function () {
        return n;
    }
});
var i = l(470079);
function n() {
    let e = (0, i.createContext)(void 0);
    return {
        Provider: ({
            initialStore: t,
            createStore: l,
            children: n
        }) => {
            let s = (0, i.useRef)();
            return !s.current && (t && (console.warn('Provider initialStore is deprecated and will be removed in the next version.'), !l && (l = () => t)), s.current = l()), (0, i.createElement)(e.Provider, { value: s.current }, n);
        },
        useStore: (t, l = Object.is) => {
            let n = (0, i.useContext)(e);
            if (!n)
                throw Error('Seems like you have not used zustand provider as an ancestor.');
            return n(t, l);
        },
        useStoreApi: () => {
            let t = (0, i.useContext)(e);
            if (!t)
                throw Error('Seems like you have not used zustand provider as an ancestor.');
            return (0, i.useMemo)(() => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy
            }), [t]);
        }
    };
}
