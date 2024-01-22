"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("70102");
var r = n("884691");

function a() {
  let e = (0, r.createContext)(void 0);
  return {
    Provider: t => {
      let {
        initialStore: n,
        createStore: a,
        children: i
      } = t, l = (0, r.useRef)();
      return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !a && (a = () => n)), l.current = a()), (0, r.createElement)(e.Provider, {
        value: l.current
      }, i)
    },
    useStore: function(t) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
        a = (0, r.useContext)(e);
      if (!a) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return a(t, n)
    },
    useStoreApi: () => {
      let t = (0, r.useContext)(e);
      if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return (0, r.useMemo)(() => ({
        getState: t.getState,
        setState: t.setState,
        subscribe: t.subscribe,
        destroy: t.destroy
      }), [t])
    }
  }
}