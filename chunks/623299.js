r.d(t, { Z: () => d });
var n = r(200651);
r(192379);
var i = r(692547),
    o = r(780384),
    s = r(410030),
    c = r(325767);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function a(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function d(e) {
    var { width: t = 160, height: r = 210, color: d = i.Z.unsafe_rawColors.WHITE_500.css } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['width', 'height', 'color']);
    let C = (0, s.ZP)(),
        p = (0, o.ap)(C);
    return (0, n.jsx)(
        'svg',
        a(
            l(
                a(l({}, (0, c.Z)(u)), {
                    width: t,
                    height: r,
                    viewBox: '0 0 '.concat(t, ' ').concat(r),
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg'
                }),
                u
            ),
            {
                children: (0, n.jsxs)('g', {
                    id: 'Group 1000',
                    children: [
                        (0, n.jsx)('path', {
                            id: 'Vector',
                            d: 'M-1.08633 0C-15.5168 0 -1.0868 11.6983 -1.0868 25.9962V156.497C30.3979 181.713 68.4419 181.453 93.3673 167.675C128.263 148.438 135.609 99.8254 100.714 67.8501C79.9863 48.3529 69.7537 18.1973 86.2832 0H-1.08633Z',
                            fill: d,
                            'fill-opacity': p ? 0.25 : 0.1
                        }),
                        (0, n.jsx)('path', {
                            id: 'Vector_2',
                            d: 'M56.4358 99.9151C54.8737 99.3546 53.545 98.6129 52.5394 97.74C51.5338 96.8672 50.8749 95.8836 50.6071 94.8558L49.6457 91.3237C49.6231 91.2357 49.5466 91.1549 49.4294 91.095C49.3758 91.0649 49.3121 91.041 49.242 91.0247C49.1718 91.0084 49.0967 91 49.0208 91C48.9448 91 48.8696 91.0084 48.7995 91.0247C48.7294 91.041 48.6657 91.0649 48.6122 91.095C48.4985 91.1556 48.4262 91.2365 48.4079 91.3237L47.4344 94.8558C47.1569 95.8809 46.4977 96.8619 45.4995 97.7353C44.4959 98.6098 43.1679 99.3532 41.6058 99.9151L40.7645 100.211C40.6785 100.245 40.6117 100.291 40.5722 100.346C40.5229 100.397 40.4981 100.455 40.5001 100.514C40.4996 100.57 40.5244 100.626 40.5722 100.675C40.6117 100.73 40.6785 100.776 40.7645 100.81L41.6058 101.106C43.1654 101.67 44.4927 102.413 45.4995 103.286C46.4977 104.159 47.1569 105.14 47.4344 106.165L48.4079 109.697C48.4287 109.78 48.501 109.856 48.6122 109.913C48.7267 109.967 48.8708 109.998 49.0208 110C49.1715 110 49.317 109.969 49.4294 109.913C49.5486 109.859 49.6261 109.782 49.6457 109.697L50.6071 106.165C50.8749 105.137 51.5338 104.154 52.5394 103.281C53.545 102.408 54.8737 101.666 56.4358 101.106L57.277 100.81C57.3635 100.775 57.4336 100.729 57.4813 100.675C57.5052 100.622 57.5052 100.567 57.4813 100.514C57.5062 100.459 57.5062 100.401 57.4813 100.346C57.4336 100.292 57.3635 100.246 57.277 100.211L56.4358 99.9151Z',
                            fill: d
                        }),
                        (0, n.jsx)('path', {
                            id: 'Vector_3',
                            d: 'M118.686 198.854C117.492 198.234 116.476 197.414 115.707 196.449C114.938 195.485 114.434 194.398 114.229 193.262L113.494 189.358C113.476 189.261 113.418 189.171 113.328 189.105C113.287 189.072 113.239 189.045 113.185 189.027C113.131 189.009 113.074 189 113.016 189C112.958 189 112.9 189.009 112.847 189.027C112.793 189.045 112.744 189.072 112.703 189.105C112.616 189.172 112.561 189.261 112.547 189.358L111.803 193.262C111.591 194.395 111.086 195.479 110.323 196.444C109.556 197.411 108.54 198.233 107.346 198.854L106.702 199.181C106.636 199.218 106.585 199.269 106.555 199.329C106.518 199.387 106.499 199.451 106.5 199.515C106.5 199.578 106.519 199.639 106.555 199.694C106.585 199.754 106.636 199.805 106.702 199.842L107.346 200.17C108.538 200.793 109.553 201.614 110.323 202.579C111.086 203.544 111.591 204.628 111.803 205.762L112.547 209.665C112.563 209.757 112.618 209.841 112.703 209.903C112.791 209.963 112.901 209.997 113.016 210C113.131 210 113.242 209.966 113.328 209.903C113.42 209.844 113.479 209.759 113.494 209.665L114.229 205.762C114.434 204.626 114.938 203.538 115.707 202.574C116.476 201.609 117.492 200.789 118.686 200.17L119.329 199.842C119.396 199.804 119.449 199.753 119.486 199.694C119.504 199.635 119.504 199.574 119.486 199.515C119.505 199.454 119.505 199.39 119.486 199.329C119.449 199.27 119.396 199.219 119.329 199.181L118.686 198.854Z',
                            fill: d
                        }),
                        (0, n.jsxs)('g', {
                            id: 'Group 197',
                            children: [
                                (0, n.jsx)('path', {
                                    id: 'Vector_4',
                                    d: 'M152.967 54.4599C152.967 53.6536 152.315 53 151.51 53C150.706 53 150.054 53.6536 150.054 54.4599V55.9198C150.054 56.7261 150.706 57.3797 151.51 57.3797C152.315 57.3797 152.967 56.7261 152.967 55.9198V54.4599Z',
                                    fill: d
                                }),
                                (0, n.jsx)('path', {
                                    id: 'Vector_5',
                                    d: 'M152.967 66.124C152.967 65.3177 152.315 64.6641 151.51 64.6641C150.706 64.6641 150.054 65.3177 150.054 66.124V67.5839C150.054 68.3901 150.706 69.0438 151.51 69.0438C152.315 69.0438 152.967 68.3901 152.967 67.5839V66.124Z',
                                    fill: d
                                }),
                                (0, n.jsx)('path', {
                                    id: 'Vector_6',
                                    d: 'M158.05 62.4891C158.855 62.4891 159.507 61.8355 159.507 61.0292C159.507 60.2229 158.855 59.5693 158.05 59.5693H156.594C155.789 59.5693 155.137 60.2229 155.137 61.0292C155.137 61.8355 155.789 62.4891 156.594 62.4891H158.05Z',
                                    fill: d
                                }),
                                (0, n.jsx)('path', {
                                    id: 'Vector_7',
                                    d: 'M146.413 62.4892C147.217 62.4892 147.869 61.8355 147.869 61.0292C147.869 60.223 147.217 59.5693 146.413 59.5693H144.956C144.152 59.5693 143.5 60.223 143.5 61.0292C143.5 61.8355 144.152 62.4892 144.956 62.4892H146.413Z',
                                    fill: d
                                })
                            ]
                        })
                    ]
                })
            }
        )
    );
}
