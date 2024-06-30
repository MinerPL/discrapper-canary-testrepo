n.d(t, {
    Z: function () {
        return v;
    }
}), n(789020), n(47120);
var i = n(735250), a = n(470079), l = n(442837), s = n(904245), r = n(257559), o = n(541716), c = n(893718), u = n(314897), d = n(323873), h = n(430824), p = n(496675), m = n(113039), _ = n(703316), f = n(585483), E = n(630388), C = n(838440), g = n(981631), I = n(105461);
function x(e) {
    let {
        value: t,
        channel: n
    } = e;
    return (0, C.v)({
        type: o.I.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1
    });
}
function T(e) {
    let {
            channel: t,
            message: n
        } = e, {id: o} = t, {id: c} = n, m = t.getGuildId(), f = (0, l.e7)([h.Z], () => h.Z.getGuild(m), [m]), C = t.type === g.d4z.GUILD_ANNOUNCEMENT, T = null != f && f.hasFeature(g.oNc.NEWS), v = C && T, {
            editingMessage: S,
            editingTextValue: Z,
            editingRichValue: A
        } = (0, l.cj)([d.Z], () => ({
            editingMessage: d.Z.getEditingMessage(o),
            editingTextValue: d.Z.getEditingTextValue(o),
            editingRichValue: d.Z.getEditingRichValue(o)
        }), [o]), M = (0, l.e7)([u.default], () => u.default.getId()), b = a.useCallback((e, n, i) => {
            let {content: a} = i, l = p.Z.can(g.Plq.MANAGE_MESSAGES, t), o = null != S && null != S.author ? S.author.id : null;
            return v && (o === M || l) && null != S && (0, E.yE)(S.flags, g.iLy.CROSSPOSTED) ? r.Z.confirmEdit(e, n, a) : s.Z.editMessage(e, n, { content: a }), Promise.resolve();
        }, [
            S,
            v,
            M,
            t
        ]), R = a.useCallback(e => (0, a.createElement)(N, {
            ...e,
            className: I.channelTextArea,
            key: c
        }), [c]);
    return null != Z && null != A ? (0, i.jsx)(_.Z, {
        ref: void 0,
        channel: t,
        message: n,
        textValue: Z,
        richValue: A,
        onCancel: s.Z.endEditMessage,
        onChange: s.Z.updateEditMessage,
        onConfirmDelete: r.Z.confirmDelete,
        saveMessage: b,
        validateEdit: x,
        children: R
    }) : null;
}
function N(e) {
    let {
            textValue: t,
            richValue: n,
            message: l,
            channel: s,
            onChange: r,
            onSubmit: u,
            onKeyDown: d
        } = e, [h, p] = a.useState(!0), m = a.useCallback(() => p(!0), []), _ = a.useCallback(() => p(!1), []);
    return a.useEffect(() => (f.S.subscribe(g.CkL.TEXTAREA_FOCUS, m), f.S.subscribe(g.CkL.TEXTAREA_BLUR, _), () => {
        f.S.unsubscribe(g.CkL.TEXTAREA_FOCUS, m), f.S.unsubscribe(g.CkL.TEXTAREA_BLUR, _);
    }), [
        m,
        _
    ]), (0, i.jsx)(c.Z, {
        className: I.channelTextArea,
        textValue: t,
        richValue: n,
        channel: s,
        type: o.I.EDIT,
        onChange: r,
        onSubmit: e => {
            let {value: t} = e;
            return u(t);
        },
        onKeyDown: d,
        focused: h,
        onFocus: m,
        onBlur: _
    }, l.id);
}
function v(e, t, n) {
    let {
        message: a,
        channel: l
    } = e;
    return n ? (0, i.jsx)(T, {
        channel: l,
        message: a
    }) : (0, i.jsx)(m.ZP, {
        message: a,
        content: t
    });
}
