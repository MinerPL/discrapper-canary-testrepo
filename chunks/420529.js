t.d(n, {
    Z: function () {
        return S;
    }
});
var l = t(735250);
t(470079);
var i = t(399606),
    u = t(481060),
    r = t(231757),
    a = t(397639),
    o = t(19780),
    s = t(979651),
    d = t(951206),
    c = t(446226),
    E = t(937393),
    _ = t(721351),
    N = t(981631),
    f = t(689938);
function S(e) {
    let n = (0, i.e7)([o.Z], () => o.Z.getChannelId() === e.id),
        S = (0, c.Z)(),
        T = (null == S ? void 0 : S.channelId) === e.id,
        Z = (0, a.V)(e) && !e.isPrivate(),
        I = (0, a.Z)(e),
        g = (!(0, i.e7)([s.Z], () => s.Z.isInChannel(e.id)) && I) || Z,
        A = (0, E.Z)();
    if (!T && 0 === A.length) return null;
    let C = (n) => {
        if (!n.twoWayLink || n.revoked) {
            (0, r.Z)({
                platformType: n.type,
                location: 'Console Transfer Item'
            });
            return;
        }
        n.type === N.ABu.XBOX
            ? (0, u.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([t.e('32873'), t.e('522')]).then(t.bind(t, 200623));
                  return (t) =>
                      (0, l.jsx)(n, {
                          ...t,
                          channel: e
                      });
              })
            : (n.type === N.ABu.PLAYSTATION || n.type === N.ABu.PLAYSTATION_STAGING) &&
              (0, u.openModalLazy)(async () => {
                  let { default: i } = await t.e('638').then(t.bind(t, 543974));
                  return (t) =>
                      (0, l.jsx)(i, {
                          ...t,
                          platform: n.type,
                          channel: e
                      });
              });
    };
    return (0, l.jsx)(l.Fragment, {
        children: T
            ? (0, l.jsx)(u.MenuItem, {
                  label: f.Z.Messages.TRANSFER_VOICE_TO_DEVICE,
                  id: 'handoff',
                  action: () => {
                      (0, d.F)(S);
                  },
                  icon: (0, _.Z)(void 0),
                  disabled: g
              })
            : A.map((e) =>
                  (0, l.jsx)(
                      u.MenuItem,
                      {
                          id: 'transfer-'.concat(e.type, '-').concat(e.id),
                          label: (function (e, n) {
                              if (e === N.ABu.XBOX) return n ? f.Z.Messages.TRANSFER_VOICE_TO_XBOX : f.Z.Messages.JOIN_ON_XBOX;
                              if (e === N.ABu.PLAYSTATION) return n ? f.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : f.Z.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                              if (e === N.ABu.PLAYSTATION_STAGING) return n ? f.Z.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : f.Z.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE;
                          })(e.type, n),
                          action: () => C(e),
                          icon: (0, _.Z)(e.type),
                          disabled: g
                      },
                      e.id
                  )
              )
    });
}
