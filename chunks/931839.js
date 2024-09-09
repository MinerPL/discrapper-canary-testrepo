a.d(s, {
    O: function () {
        return n;
    },
    Z: function () {
        return _;
    }
});
var t,
    n,
    i = a(735250);
a(470079);
var l = a(120356),
    r = a.n(l),
    c = a(481060),
    d = a(689938),
    o = a(573606);
function _(e) {
    let { selectedTab: s, onClick: a, submitted: t } = e;
    return (0, i.jsxs)('div', {
        className: o.tabs,
        children: [
            (0, i.jsx)(I, {
                tab: 0,
                selectedTab: s,
                label: d.Z.Messages.NOTIF_MIGRATION_INTRO_TAB,
                disabled: t,
                onClick: a
            }),
            (0, i.jsx)(I, {
                tab: 1,
                selectedTab: s,
                label: d.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_TAB,
                disabled: t,
                onClick: a
            }),
            (0, i.jsx)(I, {
                tab: 2,
                selectedTab: s,
                label: d.Z.Messages.NOTIF_MIGRATION_TIPS_TAB,
                disabled: !t,
                onClick: a
            })
        ]
    });
}
function I(e) {
    let { tab: s, selectedTab: a, label: t, disabled: n, onClick: l } = e;
    return n
        ? (0, i.jsxs)('div', {
              className: r()(o.tab, { [o.current]: a === s }),
              children: [
                  (0, i.jsx)('div', { className: o.progressBar }),
                  (0, i.jsx)(c.Text, {
                      variant: 'text-xs/medium',
                      color: a === s ? 'text-brand' : 'text-muted',
                      children: t
                  })
              ]
          })
        : (0, i.jsxs)(c.Clickable, {
              onClick: () => l(s),
              className: r()(o.tab, { [o.current]: a === s }),
              children: [
                  (0, i.jsx)('div', { className: o.progressBar }),
                  (0, i.jsx)(c.Text, {
                      variant: 'text-xs/medium',
                      color: a === s ? 'text-brand' : 'text-muted',
                      children: t
                  })
              ]
          });
}
((t = n || (n = {}))[(t.Intro = 0)] = 'Intro'), (t[(t.Customize = 1)] = 'Customize'), (t[(t.Tips = 2)] = 'Tips');
