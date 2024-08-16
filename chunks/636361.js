r.d(t, {
    S: function () {
        return s;
    }
});
var n = r(622916),
    a = r(394798),
    o = r(886115),
    i = r(255768),
    _ = r(151122);
let E = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"],
    s = (0, _._I)((e = {}) => ({
        name: 'InboundFilters',
        processEvent: (t, r, _) =>
            (function (e, t) {
                return t.ignoreInternal &&
                    (function (e) {
                        try {
                            return 'SentryError' === e.exception.values[0].type;
                        } catch (e) {}
                        return !1;
                    })(e)
                    ? (i.X &&
                          n.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, a.jH)(e)}`),
                      !0)
                    : (function (e, t) {
                            return (
                                !e.type &&
                                !!t &&
                                !!t.length &&
                                (function (e) {
                                    let t;
                                    let r = [];
                                    e.message && r.push(e.message);
                                    try {
                                        t = e.exception.values[e.exception.values.length - 1];
                                    } catch (e) {}
                                    return t && t.value && (r.push(t.value), t.type && r.push(`${t.type}: ${t.value}`)), r;
                                })(e).some((e) => (0, o.U0)(e, t))
                            );
                        })(e, t.ignoreErrors)
                      ? (i.X &&
                            n.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, a.jH)(e)}`),
                        !0)
                      : (function (e) {
                              return !e.type && !!e.exception && !!e.exception.values && 0 !== e.exception.values.length && !e.message && !e.exception.values.some((e) => e.stacktrace || (e.type && 'Error' !== e.type) || e.value);
                          })(e)
                        ? (i.X &&
                              n.kg.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, a.jH)(e)}`),
                          !0)
                        : (function (e, t) {
                                if ('transaction' !== e.type || !t || !t.length) return !1;
                                let r = e.transaction;
                                return !!r && (0, o.U0)(r, t);
                            })(e, t.ignoreTransactions)
                          ? (i.X &&
                                n.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, a.jH)(e)}`),
                            !0)
                          : (function (e, t) {
                                  if (!t || !t.length) return !1;
                                  let r = c(e);
                                  return !!r && (0, o.U0)(r, t);
                              })(e, t.denyUrls)
                            ? (i.X &&
                                  n.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, a.jH)(e)}.
Url: ${c(e)}`),
                              !0)
                            : !(function (e, t) {
                                  if (!t || !t.length) return !0;
                                  let r = c(e);
                                  return !r || (0, o.U0)(r, t);
                              })(e, t.allowUrls) &&
                              (i.X &&
                                  n.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, a.jH)(e)}.
Url: ${c(e)}`),
                              !0);
            })(
                t,
                (function (e = {}, t = {}) {
                    return {
                        allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                        denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                        ignoreErrors: [...(e.ignoreErrors || []), ...(t.ignoreErrors || []), ...(e.disableErrorDefaults ? [] : E)],
                        ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
                        ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                    };
                })(e, _.getOptions())
            )
                ? null
                : t
    }));
function c(e) {
    try {
        let t;
        try {
            t = e.exception.values[0].stacktrace.frames;
        } catch (e) {}
        return t
            ? (function (e = []) {
                  for (let t = e.length - 1; t >= 0; t--) {
                      let r = e[t];
                      if (r && '<anonymous>' !== r.filename && '[native code]' !== r.filename) return r.filename || null;
                  }
                  return null;
              })(t)
            : null;
    } catch (t) {
        return i.X && n.kg.error(`Cannot extract url for event ${(0, a.jH)(e)}`), null;
    }
}
