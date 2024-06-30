r.d(e, {
    R: function () {
        return I;
    }
});
var n = r(862315), _ = r(868145), a = r(880803), i = r(336344), o = r(24716), E = r(10674), s = r(28434), c = r(703498);
function I(t, e, r, I) {
    let {
            normalizeDepth: u = 3,
            normalizeMaxBreadth: T = 1000
        } = t, l = {
            ...e,
            event_id: e.event_id || r.event_id || (0, n.DM)(),
            timestamp: e.timestamp || (0, _.yW)()
        }, A = r.integrations || t.integrations.map(t => t.name);
    (function (t, e) {
        let {
            environment: r,
            release: n,
            dist: _,
            maxValueLength: a = 250
        } = e;
        !('environment' in t) && (t.environment = 'environment' in e ? r : s.J), void 0 === t.release && void 0 !== n && (t.release = n), void 0 === t.dist && void 0 !== _ && (t.dist = _), t.message && (t.message = (0, i.$G)(t.message, a));
        let o = t.exception && t.exception.values && t.exception.values[0];
        o && o.value && (o.value = (0, i.$G)(o.value, a));
        let E = t.request;
        E && E.url && (E.url = (0, i.$G)(E.url, a));
    }(l, t), function (t, e) {
        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [
            ...t.sdk.integrations || [],
            ...e
        ]);
    }(l, A), void 0 === e.type && function (t, e) {
        let r;
        let n = o.n2._sentryDebugIds;
        if (!n)
            return;
        let _ = R.get(e);
        _ ? r = _ : (r = new Map(), R.set(e, r));
        let a = Object.keys(n).reduce((t, _) => {
            let a;
            let i = r.get(_);
            i ? a = i : (a = e(_), r.set(_, a));
            for (let e = a.length - 1; e >= 0; e--) {
                let r = a[e];
                if (r.filename) {
                    t[r.filename] = n[_];
                    break;
                }
            }
            return t;
        }, {});
        try {
            t.exception.values.forEach(t => {
                t.stacktrace.frames.forEach(t => {
                    t.filename && (t.debug_id = a[t.filename]);
                });
            });
        } catch (t) {
        }
    }(l, t.stackParser));
    let N = I;
    r.captureContext && (N = c.s.clone(N).update(r.captureContext));
    let d = (0, a.WD)(l);
    if (N) {
        if (N.getAttachments) {
            let t = [
                ...r.attachments || [],
                ...N.getAttachments()
            ];
            t.length && (r.attachments = t);
        }
        d = N.applyToEvent(l, r);
    }
    return d.then(t => (t && function (t) {
        let e = {};
        try {
            t.exception.values.forEach(t => {
                t.stacktrace.frames.forEach(t => {
                    t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id);
                });
            });
        } catch (t) {
        }
        if (0 === Object.keys(e).length)
            return;
        t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
        let r = t.debug_meta.images;
        Object.keys(e).forEach(t => {
            r.push({
                type: 'sourcemap',
                code_file: t,
                debug_id: e[t]
            });
        });
    }(t), 'number' == typeof u && u > 0) ? function (t, e, r) {
        if (!t)
            return null;
        let n = {
            ...t,
            ...t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map(t => ({
                    ...t,
                    ...t.data && { data: (0, E.Fv)(t.data, e, r) }
                }))
            },
            ...t.user && { user: (0, E.Fv)(t.user, e, r) },
            ...t.contexts && { contexts: (0, E.Fv)(t.contexts, e, r) },
            ...t.extra && { extra: (0, E.Fv)(t.extra, e, r) }
        };
        return t.contexts && t.contexts.trace && n.contexts && (n.contexts.trace = t.contexts.trace, t.contexts.trace.data && (n.contexts.trace.data = (0, E.Fv)(t.contexts.trace.data, e, r))), t.spans && (n.spans = t.spans.map(t => (t.data && (t.data = (0, E.Fv)(t.data, e, r)), t))), n;
    }(t, u, T) : t);
}
let R = new WeakMap();
