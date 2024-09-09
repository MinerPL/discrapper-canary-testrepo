s(47120);
var i = s(735250),
    n = s(470079),
    a = s(120356),
    l = s.n(a),
    r = s(802433),
    o = s(680295),
    d = s(808055),
    u = s(241822);
t.Z = (e) => {
    let { profileEffectId: t, isHovering: s, forCollectedModal: a = !1, isPurchased: c, removeSetHeight: h = !1 } = e,
        p = a ? 250 : 0.1,
        [f, m] = n.useState(!0);
    return (n.useEffect(() => {
        if (!0 !== a) m(!1);
        else {
            let e = setTimeout(() => {
                m(!1);
            }, p);
            return () => {
                clearTimeout(e);
            };
        }
    }, [p, a]),
    null != t)
        ? (0, i.jsxs)('div', {
              className: l()(d.previewContainer, {
                  [d.previewContainerAnimation]: a,
                  [d.previewContainerSetHeight]: !h
              }),
              children: [
                  (0, i.jsx)('img', {
                      src: u,
                      alt: ' ',
                      className: a ? d.previewForCollected : d.preview,
                      'aria-hidden': !0
                  }),
                  !f &&
                      (0, i.jsx)('div', {
                          className: c ? d.purchasedEffect : void 0,
                          children: (0, i.jsx)(o.Z, {
                              profileEffectId: t,
                              useThumbnail: !0,
                              autoPlay: a,
                              restartMethod: r.j.FromStart,
                              resetOnHover: !0,
                              isHovering: s,
                              introDelay: p,
                              useOpacityOnHover: !1,
                              shopPreview: !0
                          })
                      })
              ]
          })
        : null;
};
