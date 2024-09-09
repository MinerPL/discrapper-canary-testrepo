r.d(t, {
    R: function () {
        return l;
    },
    U0: function () {
        return A;
    }
});
var n = r(394798),
    a = r(101284),
    o = r(886115),
    i = r(899517),
    _ = r(202811),
    E = r(559508),
    s = r(263449),
    c = r(574054),
    I = r(307854),
    u = r(396234);
function l(e, t, r, l, A, T) {
    let { normalizeDepth: d = 3, normalizeMaxBreadth: N = 1000 } = e,
        p = {
            ...t,
            event_id: t.event_id || r.event_id || (0, n.DM)(),
            timestamp: t.timestamp || (0, a.yW)()
        },
        O = r.integrations || e.integrations.map((e) => e.name);
    (function (e, t) {
        let { environment: r, release: n, dist: a, maxValueLength: i = 250 } = t;
        !('environment' in e) && (e.environment = 'environment' in t ? r : E.J), void 0 === e.release && void 0 !== n && (e.release = n), void 0 === e.dist && void 0 !== a && (e.dist = a), e.message && (e.message = (0, o.$G)(e.message, i));
        let _ = e.exception && e.exception.values && e.exception.values[0];
        _ && _.value && (_.value = (0, o.$G)(_.value, i));
        let s = e.request;
        s && s.url && (s.url = (0, o.$G)(s.url, i));
    })(p, e),
        (function (e, t) {
            t.length > 0 && ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
        })(p, O),
        A && A.emit('applyFrameMetadata', t),
        void 0 === t.type &&
            (function (e, t) {
                let r;
                let n = i.n._sentryDebugIds;
                if (!n) return;
                let a = R.get(t);
                a ? (r = a) : ((r = new Map()), R.set(t, r));
                let o = Object.entries(n).reduce((e, [n, a]) => {
                    let o;
                    let i = r.get(n);
                    i ? (o = i) : ((o = t(n)), r.set(n, o));
                    for (let t = o.length - 1; t >= 0; t--) {
                        let r = o[t];
                        if (r.filename) {
                            e[r.filename] = a;
                            break;
                        }
                    }
                    return e;
                }, {});
                try {
                    e.exception.values.forEach((e) => {
                        e.stacktrace.frames.forEach((e) => {
                            e.filename && (e.debug_id = o[e.filename]);
                        });
                    });
                } catch (e) {}
            })(p, e.stackParser);
    let f = (function (e, t) {
        if (!t) return e;
        let r = e ? e.clone() : new I.s();
        return r.update(t), r;
    })(l, r.captureContext);
    r.mechanism && (0, n.EG)(p, r.mechanism);
    let S = A ? A.getEventProcessors() : [],
        D = (0, s.lW)().getScopeData();
    if (T) {
        let e = T.getScopeData();
        (0, u.yo)(D, e);
    }
    if (f) {
        let e = f.getScopeData();
        (0, u.yo)(D, e);
    }
    let L = [...(r.attachments || []), ...D.attachments];
    L.length && (r.attachments = L), (0, u.gi)(p, D);
    let h = [...S, ...D.eventProcessors];
    return (0, c.R)(h, p, r).then((e) =>
        (e &&
            (function (e) {
                let t = {};
                try {
                    e.exception.values.forEach((e) => {
                        e.stacktrace.frames.forEach((e) => {
                            e.debug_id && (e.abs_path ? (t[e.abs_path] = e.debug_id) : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id);
                        });
                    });
                } catch (e) {}
                if (0 === Object.keys(t).length) return;
                (e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || []);
                let r = e.debug_meta.images;
                Object.entries(t).forEach(([e, t]) => {
                    r.push({
                        type: 'sourcemap',
                        code_file: e,
                        debug_id: t
                    });
                });
            })(e),
        'number' == typeof d && d > 0)
            ? (function (e, t, r) {
                  if (!e) return null;
                  let n = {
                      ...e,
                      ...(e.breadcrumbs && {
                          breadcrumbs: e.breadcrumbs.map((e) => ({
                              ...e,
                              ...(e.data && { data: (0, _.Fv)(e.data, t, r) })
                          }))
                      }),
                      ...(e.user && { user: (0, _.Fv)(e.user, t, r) }),
                      ...(e.contexts && { contexts: (0, _.Fv)(e.contexts, t, r) }),
                      ...(e.extra && { extra: (0, _.Fv)(e.extra, t, r) })
                  };
                  return (
                      e.contexts && e.contexts.trace && n.contexts && ((n.contexts.trace = e.contexts.trace), e.contexts.trace.data && (n.contexts.trace.data = (0, _.Fv)(e.contexts.trace.data, t, r))),
                      e.spans &&
                          (n.spans = e.spans.map((e) => ({
                              ...e,
                              ...(e.data && { data: (0, _.Fv)(e.data, t, r) })
                          }))),
                      n
                  );
              })(e, d, N)
            : e
    );
}
let R = new WeakMap();
function A(e) {
    return e
        ? (function (e) {
              return e instanceof I.s || 'function' == typeof e;
          })(e) ||
          (function (e) {
              return Object.keys(e).some((e) => T.includes(e));
          })(e)
            ? { captureContext: e }
            : e
        : void 0;
}
let T = ['user', 'level', 'extra', 'contexts', 'tags', 'fingerprint', 'requestSession', 'propagationContext'];
