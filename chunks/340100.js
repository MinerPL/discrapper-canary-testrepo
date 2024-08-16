var s = n(735250);
n(470079);
var o = n(120356),
    a = n.n(o),
    i = n(692547),
    r = n(481060),
    l = n(113434),
    u = n(918701),
    c = n(330039),
    d = n(601084);
t.Z = function (e) {
    let { className: t, color: n = i.Z.colors.WHITE, quest: o, isInventory: E } = e,
        C = (0, u.rV)(o),
        { percentComplete: m, completedRatioDisplay: p } = (0, l.I)(o);
    return C && !E
        ? (0, s.jsx)(c.Z, {})
        : (0, s.jsxs)('div', {
              className: a()(d.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, s.jsxs)('div', {
                      className: d.percentCompleteWrapper,
                      children: [
                          (0, s.jsx)(r.Text, {
                              variant: 'text-xs/semibold',
                              className: d.percentCompleteLabel,
                              color: 'none',
                              children: p
                          }),
                          (0, s.jsx)('div', {
                              className: d.percentCompleteLabelOffset,
                              style: { width: ''.concat(100 - m, '%') }
                          })
                      ]
                  }),
                  (0, s.jsx)('div', {
                      className: d.progressBar,
                      role: 'progressbar',
                      'aria-valuenow': m,
                      children: (0, s.jsx)('div', {
                          className: d.progressBarFill,
                          style: { width: ''.concat(m, '%') }
                      })
                  }),
                  C && (0, s.jsx)(c.Z, { isInventory: E })
              ]
          });
};
