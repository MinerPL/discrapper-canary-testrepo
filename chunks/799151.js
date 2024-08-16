n.d(t, {
    c: function () {
        return E;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(338545),
    s = n(442837),
    o = n(710593),
    l = n(481060),
    u = n(607070),
    c = n(79320),
    d = n(689938),
    _ = n(757567);
function E() {
    let e = [
            {
                keybinds: ['Spacebar', 'Enter'],
                name: d.Z.Messages.DND_OPERATION_LABEL_DROP
            },
            {
                keybinds: ['up', 'down'],
                name: d.Z.Messages.DND_OPERATION_LABEL_MOVE
            },
            {
                keybinds: ['ESC'],
                name: d.Z.Messages.DND_OPERATION_LABEL_CANCEL
            }
        ],
        t = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        n = (0, c.zP)();
    return (0, l.useTransition)(
        n,
        {
            enter: {
                from: {
                    opacity: 0,
                    y: t ? 0 : 80
                },
                to: {
                    opacity: 1,
                    y: 0
                }
            },
            leave: {
                opacity: 0,
                y: t ? 0 : 80
            },
            config: a.config.stiff
        },
        'animate-always'
    )((t, n) =>
        n
            ? (0, r.jsx)('div', {
                  className: _.positioner,
                  children: (0, r.jsx)(a.animated.div, {
                      className: _.container,
                      style: t,
                      children: e.map((t, n) => {
                          let { keybinds: a, name: s } = t;
                          return (0, r.jsxs)(
                              i.Fragment,
                              {
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-md/semibold',
                                          className: _.bindName,
                                          children: s
                                      }),
                                      a.map((e) =>
                                          (0, r.jsx)(
                                              o.M,
                                              {
                                                  shortcut: e,
                                                  className: _.shortcut
                                              },
                                              e
                                          )
                                      ),
                                      n < e.length - 1 ? (0, r.jsx)('span', { className: _.separator }) : null
                                  ]
                              },
                              s
                          );
                      })
                  })
              })
            : null
    );
}
