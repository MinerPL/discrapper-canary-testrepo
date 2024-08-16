r.d(t, {
    W: function () {
        return _;
    }
});
var n = r(617726),
    a = r(967752),
    o = r(510529);
function i(e, t) {
    let r;
    return (0, n.gv)(e, (e, n) => (t.includes(n) && (r = Array.isArray(e) ? e[1] : void 0), !!r)), r;
}
function _(e, t) {
    return (r) => {
        let _ = e(r),
            E = new Map();
        function s(t, n) {
            let _ = n ? `${t}:${n}` : t,
                s = E.get(_);
            if (!s) {
                var c, I;
                let u = (0, a.U4)(t);
                if (!u) return;
                let l = (0, o.U)(u, r.tunnel);
                (s = n
                    ? ((c = e),
                      (I = n),
                      (e) => {
                          let t = c(e);
                          return {
                              ...t,
                              send: async (e) => {
                                  let r = i(e, ['event', 'transaction', 'profile', 'replay_event']);
                                  return r && (r.release = I), t.send(e);
                              }
                          };
                      })({
                          ...r,
                          url: l
                      })
                    : e({
                          ...r,
                          url: l
                      })),
                    E.set(_, s);
            }
            return [t, s];
        }
        return {
            send: async function e(e) {
                let r = t({
                        envelope: e,
                        getEvent: function (t) {
                            return i(e, t && t.length ? t : ['event']);
                        }
                    })
                        .map((e) => ('string' == typeof e ? s(e, void 0) : s(e.dsn, e.release)))
                        .filter((e) => !!e),
                    a = r.length ? r : [['', _]];
                return (
                    await Promise.all(
                        a.map(([t, r]) => {
                            var a, o;
                            return r.send(
                                ((a = e),
                                (o = t),
                                (0, n.Jd)(
                                    o
                                        ? {
                                              ...a[0],
                                              dsn: o
                                          }
                                        : a[0],
                                    a[1]
                                ))
                            );
                        })
                    )
                )[0];
            },
            flush: async function e(e) {
                let t = [...E.values(), _];
                return (await Promise.all(t.map((t) => t.flush(e)))).every((e) => e);
            }
        };
    };
}
