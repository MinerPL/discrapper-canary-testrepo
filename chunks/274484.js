r.d(e, {
  CC: function() {
return o;
  },
  GY: function() {
return i;
  }
});
var n = r(24716);
let _ = new Map(),
  a = new Set();

function i(t, e) {
  try {
e.exception.values.forEach(e => {
  if (!!e.stacktrace)
    for (let o of e.stacktrace.frames || []) {
      var r, i;
      if (!o.filename)
        continue;
      let e = (r = t, i = o.filename, ! function(t) {
        if (!!n.n2._sentryModuleMetadata)
          for (let e of Object.keys(n.n2._sentryModuleMetadata)) {
            let r = n.n2._sentryModuleMetadata[e];
            if (!a.has(e)) {
              for (let n of (a.add(e), t(e).reverse()))
                if (n.filename) {
                  _.set(n.filename, r);
                  break;
                }
            }
          }
      }(r), _.get(i));
      e && (o.module_metadata = e);
    }
});
  } catch (t) {}
}

function o(t) {
  try {
t.exception.values.forEach(t => {
  if (!!t.stacktrace)
    for (let e of t.stacktrace.frames || [])
      delete e.module_metadata;
});
  } catch (t) {}
}