n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(300284),
    o = n(314897),
    l = n(430824),
    u = n(841040),
    c = n(475413),
    d = n(689938);
function _(e) {
    let { user: t, guildId: n, fullWidth: _, onClose: E } = e,
        f = (0, i.e7)([o.default], () => o.default.getId() === t.id),
        h = (0, i.e7)([l.Z], () => (null != n ? l.Z.getGuild(n) : null)),
        p = (0, s.Z)();
    return f
        ? null == h
            ? (0, r.jsx)(c.tG, {
                  action: 'EDIT_PROFILE',
                  text: d.Z.Messages.EDIT_PROFILE,
                  icon: a.PencilIcon,
                  autoFocus: !0,
                  fullWidth: _,
                  onClick: () => {
                      null == E || E(), p();
                  }
              })
            : (0, r.jsx)(a.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(u.Z, {
                          guild: h,
                          onClose: () => {
                              t(), null == E || E();
                          }
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(c.tG, {
                          text: d.Z.Messages.EDIT_PROFILE,
                          icon: a.PencilIcon,
                          autoFocus: !0,
                          fullWidth: _,
                          ...e
                      })
              })
        : null;
}
