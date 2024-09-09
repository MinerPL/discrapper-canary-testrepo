n.d(t, {
    PQ: function () {
        return u;
    },
    e3: function () {
        return c;
    }
}),
    n(47120);
var r = n(470079),
    i = n(691324),
    a = n(442837),
    s = n(780384),
    o = n(514361),
    l = n(629935);
let u = 'data-client-themes',
    c = 'custom-theme-background',
    d = () => {
        let e = (0, a.e7)([o.Z], () => o.Z.gradientPreset);
        return (0, r.useMemo)(() => {
            if (null == e) return null;
            let t = o.Z.getLinearGradient();
            if (null == t) return null;
            let [n, r] = [...e.colors]
                    .sort((e, t) => t.stop - e.stop)
                    .slice(0, 2)
                    .map((e) => i.b[e.token].hex),
                a = (0, l.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: r,
                    isDarkTheme: (0, s.wj)(e.theme)
                }),
                u = '\n      '.concat(
                    Object.entries(a)
                        .map((e) => {
                            let [t, n] = e;
                            return ''.concat(t, ': ').concat(n, ';');
                        })
                        .join('\n'),
                    '\n    '
                );
            return '.'.concat(c, ' {\n      --custom-theme-background: ').concat(t, ';\n      ').concat(u, '\n    }');
        }, [e]);
    };
t.ZP = () => {
    let e = d();
    return null === e
        ? {
              clientThemesCSS: '',
              clientThemesClassName: ''
          }
        : {
              clientThemesCSS: e,
              clientThemesClassName: c
          };
};
