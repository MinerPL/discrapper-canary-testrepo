var s = n(735250),
    r = n(470079),
    i = n(266067),
    a = n(215569);
class l extends r.Component {
    render() {
        let { children: e, location: t, history: n, staticContext: l, match: o, ...c } = this.props,
            u = null,
            d = null;
        return (
            r.Children.forEach(e, (e) => {
                if (null == u && r.isValidElement(e)) {
                    let { component: s, render: a, ...o } = e.props,
                        c = o.path || o.from;
                    if (
                        null !=
                        (u =
                            null != c
                                ? (0, i.LX)(t.pathname, {
                                      ...o,
                                      path: c
                                  })
                                : null)
                    )
                        (o = {
                            ...o,
                            key: c,
                            location: t,
                            match: u,
                            history: n,
                            staticContext: l
                        }),
                            null != s ? (d = r.createElement(s, o)) : null != a && (d = a(o));
                }
            }),
            (0, s.jsx)(a.W, {
                ...c,
                children: d
            })
        );
    }
}
t.Z = (0, i.EN)(l);
