"use strict";

function n() {
  return {
    get: (t, e, r = {
      miss: () => Promise.resolve()
    }) => e().then(t => Promise.all([t, r.miss(t)])).then(([t]) => t),
    set: (t, e) => Promise.resolve(e),
    delete: t => Promise.resolve(),
    clear: () => Promise.resolve()
  }
}
r.r(e), r.d(e, {
  createNullCache: function() {
    return n
  }
})