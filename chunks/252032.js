n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(789020),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(904245),
    r = n(257559),
    o = n(541716),
    c = n(893718),
    u = n(314897),
    d = n(323873),
    h = n(430824),
    m = n(496675),
    p = n(585483),
    _ = n(630388),
    E = n(838440),
    f = n(930282),
    C = n(955384),
    g = n(981631),
    I = n(58755);
function x(e) {
    let { value: t, channel: n } = e;
    return (0, E.v)({
        type: o.I.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1
    });
}
function T(e) {
    let { channel: t, message: n } = e,
        { id: o } = t,
        { id: c } = n,
        p = t.getGuildId(),
        E = (0, s.e7)([h.Z], () => h.Z.getGuild(p), [p]),
        f = t.type === g.d4z.GUILD_ANNOUNCEMENT,
        T = null != E && E.hasFeature(g.oNc.NEWS),
        v = f && T,
        {
            editingMessage: S,
            editingTextValue: Z,
            editingRichValue: A
        } = (0, s.cj)(
            [d.Z],
            () => ({
                editingMessage: d.Z.getEditingMessage(o),
                editingTextValue: d.Z.getEditingTextValue(o),
                editingRichValue: d.Z.getEditingRichValue(o)
            }),
            [o]
        ),
        M = (0, s.e7)([u.default], () => u.default.getId()),
        b = a.useCallback(
            (e, n, i) => {
                let { content: a } = i,
                    s = m.Z.can(g.Plq.MANAGE_MESSAGES, t),
                    o = null != S && null != S.author ? S.author.id : null;
                return v && (o === M || s) && null != S && (0, _.yE)(S.flags, g.iLy.CROSSPOSTED) ? r.Z.confirmEdit(e, n, a) : l.Z.editMessage(e, n, { content: a }), Promise.resolve();
            },
            [S, v, M, t]
        ),
        R = a.useCallback(
            (e) =>
                (0, a.createElement)(N, {
                    ...e,
                    className: I.channelTextArea,
                    key: c
                }),
            [c]
        );
    return null != Z && null != A
        ? (0, i.jsx)(C.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: Z,
              richValue: A,
              onCancel: l.Z.endEditMessage,
              onChange: l.Z.updateEditMessage,
              onConfirmDelete: r.Z.confirmDelete,
              saveMessage: b,
              validateEdit: x,
              children: R
          })
        : null;
}
function N(e) {
    let { textValue: t, richValue: n, message: s, channel: l, onChange: r, onSubmit: u, onKeyDown: d } = e,
        [h, m] = a.useState(!0),
        _ = a.useCallback(() => m(!0), []),
        E = a.useCallback(() => m(!1), []);
    return (
        a.useEffect(
            () => (
                p.S.subscribe(g.CkL.TEXTAREA_FOCUS, _),
                p.S.subscribe(g.CkL.TEXTAREA_BLUR, E),
                () => {
                    p.S.unsubscribe(g.CkL.TEXTAREA_FOCUS, _), p.S.unsubscribe(g.CkL.TEXTAREA_BLUR, E);
                }
            ),
            [_, E]
        ),
        (0, i.jsx)(
            c.Z,
            {
                className: I.channelTextArea,
                textValue: t,
                richValue: n,
                channel: l,
                type: o.I.EDIT,
                onChange: r,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return u(t);
                },
                onKeyDown: d,
                focused: h,
                onFocus: _,
                onBlur: E
            },
            s.id
        )
    );
}
function v(e, t, n) {
    let { message: a, channel: s } = e;
    return n
        ? (0, i.jsx)(T, {
              channel: s,
              message: a
          })
        : (0, i.jsx)(f.ZP, {
              message: a,
              content: t
          });
}
