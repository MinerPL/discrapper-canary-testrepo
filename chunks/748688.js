r.d(t, {
    $X: function () {
        return P;
    },
    AJ: function () {
        return L;
    },
    Ei: function () {
        return M;
    },
    GC: function () {
        return y;
    },
    WU: function () {
        return g;
    },
    db: function () {
        return D;
    },
    dz: function () {
        return v;
    },
    nm: function () {
        return m;
    },
    ph: function () {
        return G;
    },
    x5: function () {
        return S;
    }
});
var n,
    a = r(559508),
    o = r(696486),
    i = r(263449),
    _ = r(622916),
    E = r(101284),
    s = r(394798),
    c = r(617726),
    I = r(899517),
    u = r(454463),
    l = r(163162);
let R = String(0),
    A = '',
    T = '',
    d = '',
    N = (l.m9.navigator && l.m9.navigator.userAgent) || '',
    p = '',
    O = (l.m9.navigator && l.m9.navigator.language) || (l.m9.navigator && l.m9.navigator.languages && l.m9.navigator.languages['0']) || '',
    f = l.m9.navigator && l.m9.navigator.userAgentData;
if ('object' == typeof (n = f) && null !== n && 'getHighEntropyValues' in n)
    f.getHighEntropyValues(['architecture', 'model', 'platform', 'platformVersion', 'fullVersionList'])
        .then((e) => {
            if (((A = e.platform || ''), (d = e.architecture || ''), (p = e.model || ''), (T = e.platformVersion || ''), e.fullVersionList && e.fullVersionList.length > 0)) {
                let t = e.fullVersionList[e.fullVersionList.length - 1];
                N = `${t.brand} ${t.version}`;
            }
        })
        .catch((e) => void 0);
function S(e) {
    return 'pageload' === (0, o.XU)(e).op;
}
function D(e, t) {
    if (!t.length) return e;
    for (let r of t) e[1].push([{ type: 'profile' }, r]);
    return e;
}
function L(e) {
    let t = [];
    return (
        (0, c.gv)(e, (e, r) => {
            if ('transaction' === r)
                for (let r = 1; r < e.length; r++) {
                    let n = e[r];
                    n && n.contexts && n.contexts.profile && n.contexts.profile.profile_id && t.push(e[r]);
                }
        }),
        t
    );
}
let h = new WeakMap(),
    C = !1,
    g = 30000;
function M() {
    let e = l.m9.Profiler;
    if ('function' != typeof e) {
        u.X && _.kg.log('[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.');
        return;
    }
    let t = Math.floor(g / 10);
    try {
        return new e({
            sampleInterval: 10,
            maxBufferSize: t
        });
    } catch (e) {
        u.X && (_.kg.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), _.kg.log('[Profiling] Disabling profiling for current user session.')), (C = !0);
    }
}
function P(e) {
    var t;
    if (C) return u.X && _.kg.log('[Profiling] Profiling has been disabled for the duration of the current user session.'), !1;
    if (!e.isRecording()) return u.X && _.kg.log('[Profiling] Discarding profile because transaction was not sampled.'), !1;
    let r = (0, i.s3)(),
        n = r && r.getOptions();
    if (!n) return u.X && _.kg.log('[Profiling] Profiling disabled, no options found.'), !1;
    let a = n.profilesSampleRate;
    return (('number' != typeof (t = a) && 'boolean' != typeof t) || ('number' == typeof t && isNaN(t)) ? (u.X && _.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !0 === t || !1 === t || (!(t < 0) && !(t > 1)) || (u.X && _.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${t}.`), !1)) ? (a ? !!(!0 === a || Math.random() < a) || (u.X && _.kg.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(a)})`), !1) : (u.X && _.kg.log('[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0'), !1)) : (u.X && _.kg.warn('[Profiling] Discarding profile because of invalid sample rate.'), !1);
}
function m(e, t, r, n) {
    var o;
    return ((o = r).samples.length < 2 ? (u.X && _.kg.log('[Profiling] Discarding profile because it contains less than 2 samples'), !1) : !!o.frames.length || (u.X && _.kg.log('[Profiling] Discarding profile because it contains no frames'), !1))
        ? (function (e, t, r, n) {
              if ('transaction' !== n.type) throw TypeError('Profiling events may only be attached to transactions, this should never occur.');
              if (null == r) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${r} instead.`);
              let o = (function (e) {
                      let t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
                      return ('string' == typeof t && 32 !== t.length && u.X && _.kg.log(`[Profiling] Invalid traceId: ${t} on profiled event`), 'string' != typeof t) ? '' : t;
                  })(n),
                  c = (function (e) {
                      return 'thread_metadata' in e
                          ? e
                          : (function (e) {
                                let t;
                                let r = 0,
                                    n = {
                                        samples: [],
                                        stacks: [],
                                        frames: [],
                                        thread_metadata: { [R]: { name: 'main' } }
                                    },
                                    a = e.samples[0];
                                if (!a) return n;
                                let o = a.timestamp,
                                    i = 'number' == typeof performance.timeOrigin ? performance.timeOrigin : E.Z1 || 0,
                                    _ = i - (E.Z1 || i);
                                return (
                                    e.samples.forEach((a, i) => {
                                        if (void 0 === a.stackId) {
                                            void 0 === t && ((t = r), (n.stacks[t] = []), r++),
                                                (n.samples[i] = {
                                                    elapsed_since_start_ns: ((a.timestamp + _ - o) * 1000000).toFixed(0),
                                                    stack_id: t,
                                                    thread_id: R
                                                });
                                            return;
                                        }
                                        let E = e.stacks[a.stackId],
                                            s = [];
                                        for (; E; ) {
                                            s.push(E.frameId);
                                            let t = e.frames[E.frameId];
                                            t &&
                                                void 0 === n.frames[E.frameId] &&
                                                (n.frames[E.frameId] = {
                                                    function: t.name,
                                                    abs_path: 'number' == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                                    lineno: t.line,
                                                    colno: t.column
                                                }),
                                                (E = void 0 === E.parentId ? void 0 : e.stacks[E.parentId]);
                                        }
                                        let c = {
                                            elapsed_since_start_ns: ((a.timestamp + _ - o) * 1000000).toFixed(0),
                                            stack_id: r,
                                            thread_id: R
                                        };
                                        (n.stacks[r] = s), (n.samples[i] = c), r++;
                                    }),
                                    n
                                );
                            })(e);
                  })(r),
                  f = t || ('number' == typeof n.start_timestamp ? 1000 * n.start_timestamp : 1000 * (0, E.ph)()),
                  S = 'number' == typeof n.timestamp ? 1000 * n.timestamp : 1000 * (0, E.ph)();
              return {
                  event_id: e,
                  timestamp: new Date(f).toISOString(),
                  platform: 'javascript',
                  version: '1',
                  release: n.release || '',
                  environment: n.environment || a.J,
                  runtime: {
                      name: 'javascript',
                      version: l.m9.navigator.userAgent
                  },
                  os: {
                      name: A,
                      version: T,
                      build_number: N
                  },
                  device: {
                      locale: O,
                      model: p,
                      manufacturer: N,
                      architecture: d,
                      is_emulator: !1
                  },
                  debug_meta: {
                      images: (function (e) {
                          let t;
                          let r = I.n._sentryDebugIds;
                          if (!r) return [];
                          let n = (0, i.s3)(),
                              a = n && n.getOptions(),
                              o = a && a.stackParser;
                          if (!o) return [];
                          let _ = h.get(o);
                          _ ? (t = _) : ((t = new Map()), h.set(o, t));
                          let E = Object.keys(r).reduce((e, n) => {
                                  let a;
                                  let i = t.get(n);
                                  i ? (a = i) : ((a = o(n)), t.set(n, a));
                                  for (let t = a.length - 1; t >= 0; t--) {
                                      let o = a[t],
                                          i = o && o.filename;
                                      if (o && i) {
                                          e[i] = r[n];
                                          break;
                                      }
                                  }
                                  return e;
                              }, {}),
                              s = [];
                          for (let t of e)
                              t &&
                                  E[t] &&
                                  s.push({
                                      type: 'sourcemap',
                                      code_file: t,
                                      debug_id: E[t]
                                  });
                          return s;
                      })(r.resources)
                  },
                  profile: c,
                  transactions: [
                      {
                          name: n.transaction || '',
                          id: n.event_id || (0, s.DM)(),
                          trace_id: o,
                          active_thread_id: R,
                          relative_start_ns: '0',
                          relative_end_ns: ((S - f) * 1000000).toFixed(0)
                      }
                  ]
              };
          })(e, t, r, n)
        : null;
}
let U = new Map();
function G() {
    return U.size;
}
function y(e) {
    let t = U.get(e);
    return t && U.delete(e), t;
}
function v(e, t) {
    if ((U.set(e, t), U.size > 30)) {
        let e = U.keys().next().value;
        U.delete(e);
    }
}
