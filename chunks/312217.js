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
    var { width: t = 255, height: r = 178, color: d = i.Z.unsafe_rawColors.WHITE_500.css } = e,
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
                    id: 'Frame 3483',
                    children: [
                        (0, n.jsx)('path', {
                            id: 'Vector',
                            d: 'M215.747 15.0149C213.174 14.0709 210.986 12.8216 209.33 11.3516C207.673 9.88152 206.588 8.22496 206.147 6.49398L204.563 0.545222C204.526 0.397049 204.4 0.26087 204.207 0.159969C204.119 0.109264 204.014 0.0690328 203.899 0.0415817C203.783 0.0141306 203.659 0 203.534 0C203.409 0 203.285 0.0141306 203.17 0.0415817C203.054 0.0690328 202.949 0.109264 202.861 0.159969C202.674 0.262 202.555 0.398273 202.525 0.545222L200.921 6.49398C200.464 8.22048 199.379 9.87273 197.735 11.3436C196.082 12.8166 193.894 14.0686 191.321 15.0149L189.936 15.5134C189.794 15.5698 189.684 15.6486 189.619 15.7401C189.538 15.8271 189.497 15.9246 189.5 16.0233C189.499 16.1182 189.54 16.2118 189.619 16.2953C189.684 16.3868 189.794 16.4655 189.936 16.5219L191.321 17.0205C193.89 17.9697 196.076 19.2212 197.735 20.6917C199.379 22.1626 200.464 23.8149 200.921 25.5413L202.525 31.4901C202.559 31.6299 202.678 31.7582 202.861 31.8527C203.05 31.9441 203.287 31.996 203.534 32C203.783 32 204.022 31.9475 204.207 31.8527C204.404 31.7628 204.531 31.6328 204.563 31.4901L206.147 25.5413C206.588 23.8104 207.673 22.1538 209.33 20.6838C210.986 19.2137 213.174 17.9644 215.747 17.0205L217.133 16.5219C217.275 16.463 217.391 16.3853 217.469 16.2953C217.509 16.206 217.509 16.1126 217.469 16.0233C217.51 15.9304 217.51 15.833 217.469 15.7401C217.391 15.6501 217.275 15.5723 217.133 15.5134L215.747 15.0149Z',
                            fill: d
                        }),
                        (0, n.jsx)('path', {
                            id: 'Vector_2',
                            d: 'M255.5 62.4052C220.712 49.4637 180.269 51.9055 159.371 82.4277C138.474 112.95 117.207 114.049 93.3595 104.282C69.5117 94.5145 -12.9722 108.066 2.39367 179H243.207C249.968 179 255.5 173.506 255.5 166.791V62.4052Z',
                            fill: d,
                            'fill-opacity': p ? 0.25 : 0.1
                        }),
                        (0, n.jsx)('path', {
                            id: 'Vector_3',
                            d: 'M48.6862 105.854C47.4917 105.234 46.4756 104.414 45.7066 103.449C44.9376 102.485 44.4337 101.398 44.229 100.262L43.4938 96.3578C43.4765 96.2606 43.418 96.1712 43.3283 96.105C43.2874 96.0717 43.2387 96.0453 43.185 96.0273C43.1314 96.0093 43.0739 96 43.0159 96C42.9578 96 42.9003 96.0093 42.8467 96.0273C42.7931 96.0453 42.7444 96.0717 42.7034 96.105C42.6165 96.1719 42.5612 96.2614 42.5472 96.3578L41.8028 100.262C41.5905 101.395 41.0865 102.479 40.3232 103.444C39.5557 104.411 38.5402 105.233 37.3456 105.854L36.7023 106.181C36.6365 106.218 36.5854 106.269 36.5552 106.329C36.5175 106.387 36.4985 106.451 36.5001 106.515C36.4997 106.578 36.5187 106.639 36.5552 106.694C36.5854 106.754 36.6365 106.805 36.7023 106.842L37.3456 107.17C38.5382 107.793 39.5533 108.614 40.3232 109.579C41.0865 110.544 41.5905 111.628 41.8028 112.762L42.5472 116.665C42.5631 116.757 42.6184 116.841 42.7034 116.903C42.791 116.963 42.9012 116.997 43.0159 117C43.1312 117 43.2424 116.966 43.3283 116.903C43.4195 116.844 43.4788 116.759 43.4938 116.665L44.229 112.762C44.4337 111.626 44.9376 110.538 45.7066 109.574C46.4756 108.609 47.4917 107.789 48.6862 107.17L49.3295 106.842C49.3956 106.804 49.4492 106.753 49.4857 106.694C49.504 106.635 49.504 106.574 49.4857 106.515C49.5048 106.454 49.5048 106.39 49.4857 106.329C49.4492 106.27 49.3956 106.219 49.3295 106.181L48.6862 105.854Z',
                            fill: d
                        }),
                        (0, n.jsxs)('g', {
                            id: 'Group 196',
                            children: [
                                (0, n.jsx)('path', {
                                    id: 'Vector_4',
                                    d: 'M150.967 133.46C150.967 132.654 150.315 132 149.51 132C148.706 132 148.054 132.654 148.054 133.46V134.92C148.054 135.726 148.706 136.38 149.51 136.38C150.315 136.38 150.967 135.726 150.967 134.92V133.46Z',
                                    fill: d
                                }),
                                (0, n.jsx)('path', {
                                    id: 'Vector_5',
                                    d: 'M150.967 145.124C150.967 144.318 150.315 143.664 149.51 143.664C148.706 143.664 148.054 144.318 148.054 145.124V146.584C148.054 147.39 148.706 148.044 149.51 148.044C150.315 148.044 150.967 147.39 150.967 146.584V145.124Z',
                                    fill: d
                                }),
                                (0, n.jsx)('path', {
                                    id: 'Vector_6',
                                    d: 'M156.05 141.489C156.855 141.489 157.507 140.836 157.507 140.029C157.507 139.223 156.855 138.569 156.05 138.569H154.594C153.789 138.569 153.137 139.223 153.137 140.029C153.137 140.836 153.789 141.489 154.594 141.489H156.05Z',
                                    fill: d
                                }),
                                (0, n.jsx)('path', {
                                    id: 'Vector_7',
                                    d: 'M144.413 141.489C145.217 141.489 145.869 140.836 145.869 140.029C145.869 139.223 145.217 138.569 144.413 138.569H142.956C142.152 138.569 141.5 139.223 141.5 140.029C141.5 140.836 142.152 141.489 142.956 141.489H144.413Z',
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
