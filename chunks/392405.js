"use strict";
n.d(e, {
  R: function() {
    return d
  }
});
var r = n(862315),
  i = n(868145),
  s = n(880803),
  a = n(336344),
  o = n(24716),
  u = n(10674),
  l = n(28434),
  c = n(703498);

function d(t, e, n, d) {
  let {
    normalizeDepth: _ = 3,
    normalizeMaxBreadth: f = 1e3
  } = t, p = {
    ...e,
    event_id: e.event_id || n.event_id || (0, r.DM)(),
    timestamp: e.timestamp || (0, i.yW)()
  }, m = n.integrations || t.integrations.map(t => t.name);
  (function(t, e) {
    let {
      environment: n,
      release: r,
      dist: i,
      maxValueLength: s = 250
    } = e;
    !("environment" in t) && (t.environment = "environment" in e ? n : l.J), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== i && (t.dist = i), t.message && (t.message = (0, a.$G)(t.message, s));
    let o = t.exception && t.exception.values && t.exception.values[0];
    o && o.value && (o.value = (0, a.$G)(o.value, s));
    let u = t.request;
    u && u.url && (u.url = (0, a.$G)(u.url, s))
  })(p, t),
  function(t, e) {
    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
  }(p, m), void 0 === e.type && function(t, e) {
    let n;
    let r = o.n2._sentryDebugIds;
    if (!r) return;
    let i = h.get(e);
    i ? n = i : (n = new Map, h.set(e, n));
    let s = Object.keys(r).reduce((t, i) => {
      let s;
      let a = n.get(i);
      a ? s = a : (s = e(i), n.set(i, s));
      for (let e = s.length - 1; e >= 0; e--) {
        let n = s[e];
        if (n.filename) {
          t[n.filename] = r[i];
          break
        }
      }
      return t
    }, {});
    try {
      t.exception.values.forEach(t => {
        t.stacktrace.frames.forEach(t => {
          t.filename && (t.debug_id = s[t.filename])
        })
      })
    } catch (t) {}
  }(p, t.stackParser);
  let g = d;
  n.captureContext && (g = c.s.clone(g).update(n.captureContext));
  let y = (0, s.WD)(p);
  if (g) {
    if (g.getAttachments) {
      let t = [...n.attachments || [], ...g.getAttachments()];
      t.length && (n.attachments = t)
    }
    y = g.applyToEvent(p, n)
  }
  return y.then(t => (t && function(t) {
    let e = {};
    try {
      t.exception.values.forEach(t => {
        t.stacktrace.frames.forEach(t => {
          t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
        })
      })
    } catch (t) {}
    if (0 === Object.keys(e).length) return;
    t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
    let n = t.debug_meta.images;
    Object.keys(e).forEach(t => {
      n.push({
        type: "sourcemap",
        code_file: t,
        debug_id: e[t]
      })
    })
  }(t), "number" == typeof _ && _ > 0) ? function(t, e, n) {
    if (!t) return null;
    let r = {
      ...t,
      ...t.breadcrumbs && {
        breadcrumbs: t.breadcrumbs.map(t => ({
          ...t,
          ...t.data && {
            data: (0, u.Fv)(t.data, e, n)
          }
        }))
      },
      ...t.user && {
        user: (0, u.Fv)(t.user, e, n)
      },
      ...t.contexts && {
        contexts: (0, u.Fv)(t.contexts, e, n)
      },
      ...t.extra && {
        extra: (0, u.Fv)(t.extra, e, n)
      }
    };
    return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = (0, u.Fv)(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map(t => (t.data && (t.data = (0, u.Fv)(t.data, e, n)), t))), r
  }(t, _, f) : t)
}
let h = new WeakMap