var r = n(470079),
    i = n(476400),
    a = n.n(i),
    s = n(844303),
    o = n(329022),
    l = n(829307),
    u = n(13942),
    c = n(464854),
    d = n(315876),
    _ = n(49764),
    E = function (e) {
        var t = e.onChange,
            n = e.onSwatchHover,
            i = e.colors,
            a = e.hex,
            E = e.rgb,
            f = e.styles,
            h = void 0 === f ? {} : f,
            p = e.className,
            m = (0, s.default)(
                (0, l.Z)(
                    {
                        default: {
                            Compact: {
                                background: '#f6f6f6',
                                radius: '4px'
                            },
                            compact: {
                                paddingTop: '5px',
                                paddingLeft: '5px',
                                boxSizing: 'initial',
                                width: '240px'
                            },
                            clear: { clear: 'both' }
                        }
                    },
                    h
                )
            ),
            I = function (e, n) {
                e.hex
                    ? u.FX(e.hex) &&
                      t(
                          {
                              hex: e.hex,
                              source: 'hex'
                          },
                          n
                      )
                    : t(e, n);
            };
        return r.createElement(
            c.xZ,
            {
                style: m.Compact,
                styles: h
            },
            r.createElement(
                'div',
                {
                    style: m.compact,
                    className: 'compact-picker ' + (void 0 === p ? '' : p)
                },
                r.createElement(
                    'div',
                    null,
                    (0, o.Z)(i, function (e) {
                        return r.createElement(d.Z, {
                            key: e,
                            color: e,
                            active: e.toLowerCase() === a,
                            onClick: I,
                            onSwatchHover: n
                        });
                    }),
                    r.createElement('div', { style: m.clear })
                ),
                r.createElement(_.Z, {
                    hex: a,
                    rgb: E,
                    onChange: I
                })
            )
        );
    };
(E.propTypes = {
    colors: a().arrayOf(a().string),
    styles: a().object
}),
    (E.defaultProps = {
        colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'],
        styles: {}
    }),
    (0, c.t1)(E);
