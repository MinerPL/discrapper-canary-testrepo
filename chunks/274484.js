"use strict";
n.d(e, {
  CC: function() {
    return o
  },
  GY: function() {
    return a
  }
});
var r = n(24716);
let i = new Map,
  s = new Set;

function a(t, e) {
  try {
    e.exception.values.forEach(e => {
      if (!!e.stacktrace)
        for (let o of e.stacktrace.frames || []) {
          var n, a;
          if (!o.filename) continue;
          let e = (n = t, a = o.filename, ! function(t) {
            if (!!r.n2._sentryModuleMetadata)
              for (let e of Object.keys(r.n2._sentryModuleMetadata)) {
                let n = r.n2._sentryModuleMetadata[e];
                if (!s.has(e)) {
                  for (let r of (s.add(e), t(e).reverse()))
                    if (r.filename) {
                      i.set(r.filename, n);
                      break
                    }
                }
              }
          }(n), i.get(a));
          e && (o.module_metadata = e)
        }
    })
  } catch (t) {}
}

function o(t) {
  try {
    t.exception.values.forEach(t => {
      if (!!t.stacktrace)
        for (let e of t.stacktrace.frames || []) delete e.module_metadata
    })
  } catch (t) {}
}