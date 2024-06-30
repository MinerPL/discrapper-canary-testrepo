var r, i, a, o, s = n(442837), l = n(570140), u = n(752305), c = n(957730), d = n(695346), _ = n(375954);
let E = {}, f = {};
class h extends (o = s.ZP.Store) {
    isEditing(e, t) {
        var n;
        return (null === (n = E[e]) || void 0 === n ? void 0 : n.messageId) === t;
    }
    isEditingAny(e) {
        return null != E[e];
    }
    getEditingTextValue(e) {
        var t;
        return null === (t = E[e]) || void 0 === t ? void 0 : t.textValue;
    }
    getEditingRichValue(e) {
        var t;
        return null === (t = E[e]) || void 0 === t ? void 0 : t.richValue;
    }
    getEditingMessageId(e) {
        var t;
        return null === (t = E[e]) || void 0 === t ? void 0 : t.messageId;
    }
    getEditingMessage(e) {
        let t = E[e];
        return null != t && null != t.messageId ? _.Z.getMessage(e, t.messageId) : null;
    }
    getEditActionSource(e) {
        return f[e];
    }
}
a = 'EditMessageStore', (i = 'displayName') in (r = h) ? Object.defineProperty(r, i, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[i] = a, t.Z = new h(l.Z, {
    MESSAGE_START_EDIT: function (e) {
        let {
                channelId: t,
                messageId: n,
                content: r,
                source: i
            } = e, a = d.dN.getSetting(), o = c.ZP.unparse(r, t);
        E[t] = {
            channelId: t,
            messageId: n,
            textValue: o,
            richValue: (0, u.JM)(a ? o : r)
        }, f[t] = i;
    },
    MESSAGE_UPDATE_EDIT: function (e) {
        let {
                channelId: t,
                textValue: n,
                richValue: r
            } = e, i = E[t];
        if (null == i)
            return !1;
        E[t] = {
            ...i,
            textValue: n,
            richValue: r
        };
    },
    MESSAGE_END_EDIT: function (e) {
        let {channelId: t} = e;
        if (null == t || null == E[t])
            return !1;
        delete E[t], delete f[t];
    }
});
