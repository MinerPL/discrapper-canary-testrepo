var i = n(735250);
n(470079);
var a = n(481060),
    s = n(493683),
    l = n(599059),
    r = n(762914),
    o = n(933557),
    c = n(210975),
    u = n(981631),
    d = n(689938),
    h = n(883478);
t.Z = (e) => {
    let { channel: t } = e,
        n = (0, o.ZP)(t),
        m = (0, r.Dd)(t.id),
        p = (0, c.m$)({
            channelId: t.id,
            location: 'ChannelName'
        });
    return (0, i.jsx)('div', {
        className: h.container,
        onDoubleClick: (e) => e.stopPropagation(),
        children: m
            ? (0, i.jsx)('div', {
                  className: h.channelName,
                  children: n
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(l.Z, {
                          minLen: 1,
                          maxLen: u.HN8,
                          className: h.channelName,
                          name: 'channel_name',
                          autoComplete: 'off',
                          value: null != n ? n : '',
                          onBlur: (e) => {
                              n !== e.currentTarget.value && s.Z.setName(t.id, e.currentTarget.value);
                          }
                      }),
                      p &&
                          (0, i.jsx)(a.Tooltip, {
                              text: d.Z.Messages.E2EE_CALL_VERIFIED_TOOLTIP,
                              children: (e) =>
                                  (0, i.jsx)(a.ShieldLockIcon, {
                                      ...e,
                                      size: 'xs',
                                      'aria-label': d.Z.Messages.E2EE_CALL_VERIFIED_A11Y,
                                      color: a.tokens.colors.INTERACTIVE_NORMAL
                                  })
                          })
                  ]
              })
    });
};
