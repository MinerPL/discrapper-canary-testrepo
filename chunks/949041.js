"use strict";
r.r(t), r.d(t, {
  default: function() {
    return i
  }
}), r("70102");
var n = r("884691");

function i() {
  let e = (0, n.createContext)(void 0);
  return {
    Provider: t => {
      let {
        initialStore: r,
        createStore: i,
        children: s
      } = t, l = (0, n.useRef)();
      return !l.current && (r && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !i && (i = () => r)), l.current = i()), (0, n.createElement)(e.Provider, {
        value: l.current
      }, s)
    },
    useStore: function(t) {
      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
        i = (0, n.useContext)(e);
      if (!i) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return i(t, r)
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