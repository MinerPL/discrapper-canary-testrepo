n.d(t, {
    f: function () {
        return l;
    }
}),
    n(47120);
var r = n(456007),
    i = n(895924),
    a = n(351133),
    s = n(689079),
    o = n(689938);
function l(e) {
    let { option: t, content: n, guildId: l, channelId: u, allowEmptyValues: c, commandOrigin: d = i.bB.CHAT } = e,
        _ = null != n ? (0, r.KF)({ content: n }, 'content').trim() : '',
        E = t.required,
        f = '' === _;
    if (!(null != n))
        return E
            ? {
                  success: !1,
                  error: o.Z.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
              }
            : { success: !0 };
    if (f)
        return c
            ? { success: !0 }
            : E
              ? {
                    success: !1,
                    error: o.Z.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
                }
              : {
                    success: !1,
                    error: (0, s.al)(t)
                };
    let h =
            n.length > 1
                ? {
                      type: 'text',
                      text: _
                  }
                : n[0],
        p = a.Z[t.type](h, t, u, l, d);
    return !p.success && null == p.error && (p.error = (0, s.al)(t)), p;
}
