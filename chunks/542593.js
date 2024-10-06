var n,
    r,
    i =
        (this && this.__read) ||
        function (e, t) {
            var n = 'function' == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r,
                i,
                a = n.call(e),
                s = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) s.push(r.value);
            } catch (e) {
                i = { error: e };
            } finally {
                try {
                    r && !r.done && (n = a.return) && n.call(a);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        };
function a(e) {
    for (var t = 0; t < e.length; t++) e[t] = s(e[t]);
}
Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.FORMAT_JS_POUND = t.FormatJsNodeType = void 0),
    (t.hydrateFormatJsAst = s),
    (t.hydrateMessages = function (e) {
        for (var t in e) e[t] = s(e[t]);
        return e;
    }),
    ((n = r || (t.FormatJsNodeType = r = {}))[(n.Literal = 0)] = 'Literal'),
    (n[(n.Argument = 1)] = 'Argument'),
    (n[(n.Number = 2)] = 'Number'),
    (n[(n.Date = 3)] = 'Date'),
    (n[(n.Time = 4)] = 'Time'),
    (n[(n.Select = 5)] = 'Select'),
    (n[(n.Plural = 6)] = 'Plural'),
    (n[(n.Pound = 7)] = 'Pound'),
    (n[(n.Tag = 8)] = 'Tag'),
    (t.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
function s(e) {
    return Array.isArray(e[0])
        ? (a(e), e)
        : 0 === e.length
          ? e
          : (function (e) {
                var n = i(e, 1)[0];
                switch (n) {
                    case r.Literal:
                    case r.Argument:
                        return {
                            type: n,
                            value: e[1]
                        };
                    case r.Number:
                    case r.Date:
                    case r.Time:
                        return {
                            type: n,
                            value: e[1],
                            style: e[2]
                        };
                    case r.Select:
                    case r.Plural:
                        return (function (e) {
                            var t = i(e, 5),
                                n = t[0],
                                s = t[1],
                                o = t[2],
                                l = t[3],
                                u = t[4];
                            for (var c in o) a(o[c].value);
                            return n === r.Plural
                                ? {
                                      type: n,
                                      value: s,
                                      options: o,
                                      offset: l,
                                      pluralType: u
                                  }
                                : {
                                      type: n,
                                      value: s,
                                      options: o,
                                      offset: l
                                  };
                        })(e);
                    case r.Pound:
                        return t.FORMAT_JS_POUND;
                    case r.Tag:
                        var s = i(e, 3),
                            o = s[0],
                            l = s[1],
                            u = s[2];
                        return (
                            a(u),
                            {
                                type: o,
                                value: l,
                                children: u
                            }
                        );
                    default:
                        throw Error('FormatJS keyless JSON encountered an unknown type: '.concat(n));
                }
            })(e);
}
