r.d(t, {
    v: function () {
        return i;
    }
});
var n = r(899517),
    a = r(679179),
    o = r(151122);
let i = (0, o._I)((e = {}) => {
    let t = e.root,
        r = e.prefix || 'app:///',
        o = 'window' in n.n && void 0 !== n.n.window,
        i =
            e.iteratee ||
            (function ({ isBrowser: e, root: t, prefix: r }) {
                return (n) => {
                    if (!n.filename) return n;
                    let o = /^[a-zA-Z]:\\/.test(n.filename) || (n.filename.includes('\\') && !n.filename.includes('/')),
                        i = /^\//.test(n.filename);
                    if (e) {
                        if (t) {
                            let e = n.filename;
                            0 === e.indexOf(t) && (n.filename = e.replace(t, r));
                        }
                    } else if (o || i) {
                        let e = o ? n.filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/') : n.filename,
                            i = t ? (0, a.Gf)(t, e) : (0, a.EZ)(e);
                        n.filename = `${r}${i}`;
                    }
                    return n;
                };
            })({
                isBrowser: o,
                root: t,
                prefix: r
            });
    return {
        name: 'RewriteFrames',
        processEvent(e) {
            let t = e;
            return (
                e.exception &&
                    Array.isArray(e.exception.values) &&
                    (t = (function (e) {
                        try {
                            return {
                                ...e,
                                exception: {
                                    ...e.exception,
                                    values: e.exception.values.map((e) => ({
                                        ...e,
                                        ...(e.stacktrace && {
                                            stacktrace: (function (e) {
                                                return {
                                                    ...e,
                                                    frames: e && e.frames && e.frames.map((e) => i(e))
                                                };
                                            })(e.stacktrace)
                                        })
                                    }))
                                }
                            };
                        } catch (t) {
                            return e;
                        }
                    })(t)),
                t
            );
        }
    };
});
