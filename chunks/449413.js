var r = n(735250),
    i = n(470079),
    a = n(454585),
    s = n(777036),
    o = n(273744),
    l = n(819258);
t.Z = (e) => {
    let {
            node: { info: t }
        } = e,
        n = i.useRef(
            a.Z.reactParserFor({
                ...a.Z.defaultRules,
                link: o.s
            })
        );
    return null == t
        ? null
        : (0, r.jsx)(s.Z, {
              className: l.infoBox,
              messageType: s.Q.INFO,
              children: n.current(t)
          });
};
