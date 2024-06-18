"use strict";
r.d(t, {
  Z: function() {
    return o
  }
});
var n = r(470079);

function o() {
  let e = (0, n.createContext)(void 0);
  return {
    Provider: ({
      initialStore: t,
      createStore: r,
      children: o
    }) => {
      let i = (0, n.useRef)();
      return !i.current && (t && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !r && (r = () => t)), i.current = r()), (0, n.createElement)(e.Provider, {
        value: i.current
      }, o)
    },
    useStore: (t, r = Object.is) => {
      let o = (0, n.useContext)(e);
      if (!o) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return o(t, r)
    },
    useStoreApi: () => {
      let t = (0, n.useContext)(e);
      if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return (0, n.useMemo)(() => ({
        getState: t.getState,
        setState: t.setState,
        subscribe: t.subscribe,
        destroy: t.destroy
      }), [t])
    }
  }
}