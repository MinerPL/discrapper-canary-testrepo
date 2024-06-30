n.d(t, {
    SD: function () {
        return _;
    },
    uZ: function () {
        return f;
    }
}), n(47120);
var r = n(911969), i = n(622449), a = n(768494), o = n(768581), s = n(823379), l = n(280501), u = n(689938);
let c = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src: t && null != e.id ? o.ZP.getEmojiURL({
            id: e.id,
            animated: e.animated || !1,
            size: 48
        }) : void 0
    }), d = e => (null == e ? void 0 : e.errorCode) === 429 ? u.Z.Messages.INTERACTION_RATE_LIMITED : u.Z.Messages.APPLICATION_COMMAND_FAILED, _ = (e, t, n) => {
        let a = (null == e ? void 0 : e.data.interactionType) === r.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === i.F.FAILED ? e.data.componentId : null;
        if (null != (null != a ? function (e, t) {
                if (e.type === r.re.ACTION_ROW) {
                    var n;
                    return null !== (n = e.components.find(e => e.id === t)) && void 0 !== n ? n : null;
                }
            }(n, a) : null)) {
            var o;
            return null !== (o = null == t ? void 0 : t.interactionError) && void 0 !== o ? o : d(e);
        }
    }, E = e => {
        switch (e) {
        case r.re.ACTION_ROW:
        case r.re.BUTTON:
        case r.re.STRING_SELECT:
        case r.re.INPUT_TEXT:
        case r.re.USER_SELECT:
        case r.re.ROLE_SELECT:
        case r.re.MENTIONABLE_SELECT:
        case r.re.CHANNEL_SELECT:
        case r.re.TEXT:
        case r.re.MEDIA_GALLERY:
        case r.re.SEPARATOR:
            return !0;
        }
    };
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e.map((e, n) => function e(t, n, i) {
        var o, d, _, f, p, m, I, T;
        if (!E(t.type))
            return null;
        let {includeEmojiSrc: g} = n;
        switch (t.type) {
        case r.re.ACTION_ROW: {
                let a = t.components.map((t, r) => function (t, r) {
                    let a = e(t, n, [
                        ...i,
                        r
                    ]);
                    return null == a ? null : a;
                }(t, r)).filter(s.lm);
                return {
                    type: r.re.ACTION_ROW,
                    id: h(i),
                    components: a
                };
            }
        case r.re.BUTTON: {
                let e = null != t.emoji ? c(t.emoji, g) : void 0;
                return {
                    type: r.re.BUTTON,
                    id: h(i),
                    customId: t.custom_id,
                    style: t.style,
                    disabled: t.disabled,
                    url: t.url,
                    label: t.label,
                    emoji: e,
                    skuId: t.sku_id
                };
            }
        case r.re.STRING_SELECT:
            return {
                type: r.re.STRING_SELECT,
                id: h(i),
                customId: t.custom_id,
                disabled: t.disabled,
                options: t.options.map(e => ({
                    type: l.tM.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? c(e.emoji, g) : void 0
                })),
                placeholder: null !== (o = t.placeholder) && void 0 !== o ? o : u.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                minValues: t.min_values,
                maxValues: t.max_values
            };
        case r.re.INPUT_TEXT:
            return {
                type: t.type,
                id: h(i),
                style: t.style,
                customId: t.custom_id,
                label: t.label,
                value: t.value,
                placeholder: t.placeholder,
                disabled: t.disabled,
                required: null !== (d = t.required) && void 0 !== d && d,
                minLength: t.min_length,
                maxLength: t.max_length
            };
        case r.re.USER_SELECT:
            return {
                type: r.re.USER_SELECT,
                id: h(i),
                customId: t.custom_id,
                disabled: t.disabled,
                placeholder: null !== (_ = t.placeholder) && void 0 !== _ ? _ : u.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                minValues: t.min_values,
                maxValues: t.max_values,
                defaultValues: t.default_values
            };
        case r.re.ROLE_SELECT:
            return {
                type: r.re.ROLE_SELECT,
                id: h(i),
                customId: t.custom_id,
                disabled: t.disabled,
                placeholder: null !== (f = t.placeholder) && void 0 !== f ? f : u.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                minValues: t.min_values,
                maxValues: t.max_values,
                defaultValues: t.default_values
            };
        case r.re.MENTIONABLE_SELECT:
            return {
                type: r.re.MENTIONABLE_SELECT,
                id: h(i),
                customId: t.custom_id,
                disabled: t.disabled,
                placeholder: null !== (p = t.placeholder) && void 0 !== p ? p : u.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                minValues: t.min_values,
                maxValues: t.max_values,
                defaultValues: t.default_values
            };
        case r.re.CHANNEL_SELECT:
            return {
                type: r.re.CHANNEL_SELECT,
                id: h(i),
                customId: t.custom_id,
                disabled: t.disabled,
                placeholder: null !== (m = t.placeholder) && void 0 !== m ? m : u.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                minValues: t.min_values,
                maxValues: t.max_values,
                channelTypes: t.channel_types,
                defaultValues: t.default_values
            };
        case r.re.TEXT:
            return {
                type: r.re.TEXT,
                id: h(i),
                content: t.content
            };
        case r.re.MEDIA_GALLERY:
            return {
                type: r.re.MEDIA_GALLERY,
                id: h(i),
                items: t.items.map(e => ({
                    media: (0, a.ym)(e.media),
                    description: e.description,
                    spoiler: e.spoiler
                }))
            };
        case r.re.SEPARATOR:
            return {
                type: r.re.SEPARATOR,
                id: h(i),
                divider: null === (I = t.divider) || void 0 === I || I,
                spacing: null !== (T = t.spacing) && void 0 !== T ? T : r.US.SMALL
            };
        default:
            return null;
        }
    }(e, t, [n])).filter(e => null != e);
}
function h(e) {
    return (0, l.FF)(e.join(','));
}
