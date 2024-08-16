t.d(r, {
    Z: function () {
        return g;
    }
}),
    t(47120);
var a = t(735250),
    n = t(470079),
    i = t(120356),
    o = t.n(i),
    l = t(481060),
    c = t(465488),
    s = t(535271);
let d = 1000 / 60,
    u = (1000 / 60) * 3,
    h = Math.ceil(3000 / d);
function m() {
    let e = n.useRef(Array(h).fill(0)),
        r = n.useRef(performance.now()),
        t = n.useRef(0),
        i = n.useRef(0),
        o = n.useRef(0),
        c = n.useRef(0),
        [, s] = n.useState({}),
        m = n.useRef(null),
        [g, p] = n.useState(!0);
    n.useEffect(() => {
        let a = () => {
                let n = performance.now(),
                    l = n - r.current;
                if (((r.current = n), (i.current -= e.current[c.current]), (e.current[c.current] = l), (i.current += l), o.current < h && (o.current += 1), (c.current = (c.current + 1) % h), l > u)) {
                    let e = 0 === o.current ? d : i.current / o.current,
                        r = Math.min(2 * d, e),
                        a = Math.floor(l / (g ? r : d));
                    t.current += a;
                }
                m.current = setTimeout(() => requestAnimationFrame(a), 12);
            },
            n = requestAnimationFrame(a);
        return () => {
            cancelAnimationFrame(n), e.current.fill(0), (t.current = 0), (i.current = 0), (o.current = 0), (c.current = 0), null != m.current && clearTimeout(m.current);
        };
    }, [g]),
        n.useEffect(() => {
            let e = setInterval(() => {
                s({});
            }, d);
            return () => {
                clearInterval(e);
            };
        }, []);
    let b = 0 === o.current ? 0 : i.current / o.current,
        f = 0 === b ? 0 : (d / b) * 60;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)(l.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Dropped Frames:',
                    ' ',
                    (0, a.jsx)(l.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: 'text-primary',
                        children: t.current
                    })
                ]
            }),
            (0, a.jsx)(l.Tooltip, {
                text: 'Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.',
                children: (e) =>
                    (0, a.jsx)('div', {
                        ...e,
                        children: (0, a.jsx)(l.Checkbox, {
                            value: g,
                            onChange: () => p((e) => !e),
                            size: 12,
                            type: l.Checkbox.Types.INVERTED,
                            children: (0, a.jsx)(l.Text, {
                                tag: 'span',
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: 'Use Average Frame Time'
                            })
                        })
                    })
            }),
            (0, a.jsxs)(l.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Frame Times (~3sec):',
                    ' ',
                    (0, a.jsxs)(l.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: 'text-primary',
                        children: [b.toFixed(2), 'ms']
                    })
                ]
            }),
            (0, a.jsxs)(l.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'FPS (~3sec):',
                    ' ',
                    (0, a.jsx)(l.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: 'text-primary',
                        children: f.toFixed(2)
                    })
                ]
            }),
            (0, a.jsx)('hr', {}),
            (0, a.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                onClick: () => {
                    e.current.fill(0), (t.current = 0), (i.current = 0), (o.current = 0), (c.current = 0), (r.current = performance.now());
                },
                children: 'Reset Frame Data'
            })
        ]
    });
}
function g() {
    return (0, a.jsx)('div', {
        className: o()(s.panel, c.panel),
        children: (0, a.jsx)(m, {})
    });
}
