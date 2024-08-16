a.d(n, {
    Z: function () {
        return f;
    }
});
var r = a(735250);
a(470079);
var s = a(442837),
    i = a(692547),
    d = a(481060),
    t = a(493683),
    o = a(129861),
    l = a(700582),
    u = a(594174),
    c = a(689938),
    m = a(725458);
function Z(e) {
    let { color: n, className: a } = e;
    return (0, r.jsx)('svg', {
        className: a,
        height: '16',
        width: '80',
        viewBox: '0 0 80 16',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, r.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            opacity: '.6',
            children: [
                (0, r.jsx)('path', { d: 'm0 0h80v16h-80z' }),
                (0, r.jsxs)('g', {
                    stroke: n,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2',
                    children: [
                        (0, r.jsx)('path', { d: 'm71 1h4v4.16' }),
                        (0, r.jsx)('path', {
                            d: 'm2 1h4v4.16',
                            transform: 'matrix(-1 0 0 1 8 0)'
                        }),
                        (0, r.jsx)('path', { d: 'm51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4' }),
                        (0, r.jsx)('path', { d: 'm72.13 10.474 2.869 3.12 2.631-3.12' })
                    ]
                })
            ]
        })
    });
}
function f(e, n) {
    let a = (0, s.e7)([u.default], () => u.default.getCurrentUser());
    return null == a || n.ownerId !== a.id || e.id === a.id || (null == n ? void 0 : n.isBroadcastChannel())
        ? null
        : (0, r.jsx)(d.MenuItem, {
              id: 'make-dm-owner',
              color: 'danger',
              label: c.Z.Messages.CHANGE_DM_OWNER,
              action: () => {
                  var s;
                  return (
                      (s = a),
                      void (0, d.openModal)((a) =>
                          (0, r.jsxs)(d.ConfirmModal, {
                              bodyClassName: m.confirmModal,
                              header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
                              confirmText: c.Z.Messages.CONFIRM,
                              cancelText: c.Z.Messages.CANCEL,
                              onConfirm: () => t.Z.setDMOwner(n.id, e.id),
                              ...a,
                              children: [
                                  (0, r.jsx)(Z, { color: i.Z.unsafe_rawColors.PRIMARY_300.css }),
                                  (0, r.jsxs)('div', {
                                      className: m.fromToWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: m.from,
                                              children: (0, r.jsx)(l.Z, {
                                                  user: s,
                                                  size: d.AvatarSizes.SIZE_80
                                              })
                                          }),
                                          (0, r.jsx)('div', {
                                              className: m.to,
                                              children: (0, r.jsx)(l.Z, {
                                                  user: e,
                                                  size: d.AvatarSizes.SIZE_80
                                              })
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      variant: 'text-md/normal',
                                      children: c.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                                          usernameHook: (n, a) =>
                                              (0, r.jsx)(
                                                  o.Z,
                                                  {
                                                      usernameIcon: (0, r.jsx)(d.Avatar, {
                                                          className: m.avatarIcon,
                                                          src: e.getAvatarURL(void 0, 16),
                                                          size: d.AvatarSizes.SIZE_16,
                                                          'aria-hidden': !0
                                                      }),
                                                      className: m.discordTag,
                                                      usernameClass: m.username,
                                                      discriminatorClass: m.discriminator,
                                                      user: e
                                                  },
                                                  a
                                              )
                                      })
                                  })
                              ]
                          })
                      )
                  );
              }
          });
}
