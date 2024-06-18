"use strict";
n.d(e, {
  O1: function() {
    return u
  }
});
var r = n(499833),
  i = n(50074);

function s(t) {
  return new Promise((e, n) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => n(t.error)
  })
}

function a(t) {
  return s(t.getAllKeys())
}

function o(t) {
  let e;

  function n() {
    return void 0 == e && (e = function(t, e) {
      let n = indexedDB.open(t);
      n.onupgradeneeded = () => n.result.createObjectStore(e);
      let r = s(n);
      return t => r.then(n => t(n.transaction(e, "readwrite").objectStore(e)))
    }(t.dbName || "sentry-offline", t.storeName || "queue")), e
  }
  return {
    insert: async e => {
      try {
        var r, o, u;
        let l = await (0, i.V$)(e, t.textEncoder);
        await (r = n(), o = l, u = t.maxQueueSize || 30, r(t => a(t).then(e => {
          if (!(e.length >= u)) return t.put(o, Math.max(...e, 0) + 1), s(t.transaction)
        })))
      } catch (t) {}
    },
    pop: async () => {
      try {
        let e = await n()(t => a(t).then(e => {
          if (0 !== e.length) return s(t.get(e[0])).then(n => (t.delete(e[0]), s(t.transaction).then(() => n)))
        }));
        if (e) return (0, i.f4)(e, t.textEncoder || new TextEncoder, t.textDecoder || new TextDecoder)
      } catch (t) {}
    }
  }
}

function u(t) {
  var e;
  return e = (0, r.Pd)(t), t => e({
    ...t,
    createStore: o
  })
}