n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(325767);
function s(e) {
    var t,
        n,
        { width: s = 24, height: a = 24, color: l = 'currentColor' } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['width', 'height', 'color']);
    return (0, r.jsx)(
        'svg',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, (0, i.Z)(o))),
        (n = n =
            {
                width: s,
                height: a,
                viewBox: '0 0 18 18',
                children: (0, r.jsx)('path', {
                    d: 'M7.33366 17.3333C6.95866 17.3333 6.62533 17.0833 6.53366 16.7166L5.78366 13.975C5.55033 13.125 4.88366 12.45 4.02533 12.225L1.28366 11.475C0.916992 11.375 0.666992 11.0416 0.666992 10.6666C0.666992 10.2916 0.916992 9.95829 1.28366 9.86663L4.02533 9.11663C4.87533 8.88329 5.55033 8.21663 5.77533 7.35829L6.52533 4.61663C6.62533 4.24996 6.95866 3.99996 7.33366 3.99996C7.70866 3.99996 8.04199 4.24996 8.13366 4.61663L8.88366 7.35829C9.11699 8.20829 9.78366 8.88329 10.642 9.10829L13.3837 9.85829C13.7503 9.95829 14.0003 10.2916 14.0003 10.6666C14.0003 11.0416 13.7503 11.375 13.3837 11.4666L10.642 12.2166C9.79199 12.45 9.11699 13.1166 8.89199 13.975L8.14199 16.7166C8.04199 17.0833 7.70866 17.3333 7.33366 17.3333ZM14.0003 7.33329C13.8087 7.33329 13.6503 7.20829 13.6003 7.02496L13.2253 5.64996C13.1087 5.22496 12.7753 4.89163 12.3503 4.77496L10.9753 4.39996C10.792 4.34996 10.667 4.19163 10.667 3.99996C10.667 3.80829 10.792 3.64996 10.9753 3.59996L12.3503 3.22496C12.7753 3.10829 13.1087 2.77496 13.2253 2.34996L13.6003 0.974959C13.6503 0.791626 13.8087 0.666626 14.0003 0.666626C14.192 0.666626 14.3503 0.791626 14.4003 0.974959L14.7753 2.34996C14.892 2.77496 15.2253 3.10829 15.6503 3.22496L17.0253 3.59996C17.2087 3.64996 17.3337 3.80829 17.3337 3.99996C17.3337 4.19163 17.2087 4.34996 17.0253 4.39996L15.6503 4.77496C15.2253 4.89163 14.892 5.22496 14.7753 5.64996L14.4003 7.02496C14.3503 7.20829 14.192 7.33329 14.0003 7.33329Z',
                    fill: l
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
