n.d(t, {
    W: function () {
        return o;
    }
});
var i = n(200651),
    l = n(442837),
    a = n(481060),
    r = n(9156),
    s = n(388032);
let o = (e) => {
    let { className: t, channel: o, user: c } = e,
        d = (0, l.e7)([r.ZP], () => r.ZP.isChannelMuted(null, o.id));
    return c.bot
        ? (0, i.jsx)(a.Button, {
              className: t,
              size: a.ButtonSizes.SMALL,
              color: d ? a.Button.Colors.PRIMARY : a.Button.Colors.RED,
              onClick: function () {
                  (0, a.openModalLazy)(async () => {
                      let { default: e } = await n.e('83545').then(n.bind(n, 53149));
                      return (t) =>
                          (0, i.jsx)(e, {
                              channelId: o.id,
                              ...t
                          });
                  });
              },
              children: d ? s.intl.string(s.t.YqAjX1) : s.intl.string(s.t['w4m94+'])
          })
        : null;
};
