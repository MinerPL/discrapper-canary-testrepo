r.d(t, {
  Z: function() {
return n;
  }
});
var a = r(470079);

function n() {
  let e = (0, a.createContext)(void 0);
  return {
Provider: ({
  initialStore: t,
  createStore: r,
  children: n
}) => {
  let s = (0, a.useRef)();
  return !s.current && (t && (console.warn('Provider initialStore is deprecated and will be removed in the next version.'), !r && (r = () => t)), s.current = r()), (0, a.createElement)(e.Provider, {
    value: s.current
  }, n);
},
useStore: (t, r = Object.is) => {
  let n = (0, a.useContext)(e);
  if (!n)
    throw Error('Seems like you have not used zustand provider as an ancestor.');
  return n(t, r);
},
useStoreApi: () => {
  let t = (0, a.useContext)(e);
  if (!t)
    throw Error('Seems like you have not used zustand provider as an ancestor.');
  return (0, a.useMemo)(() => ({
    getState: t.getState,
    setState: t.setState,
    subscribe: t.subscribe,
    destroy: t.destroy
  }), [t]);
}
  };
}