n.d(t, {
    Z: function () {
        return d;
    }
}), n(47120);
var l = n(512722), u = n.n(l), i = n(911969), r = n(689938);
let a = (e, t) => {
        let {
            minValues: n,
            maxValues: l
        } = e;
        if (null == t)
            return 0 === n ? null : r.Z.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({ count: n });
        if (t.type === i.re.STRING_SELECT) {
            if (t.values.length < n)
                return r.Z.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({ count: n });
            if (t.values.length > l)
                return r.Z.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format({ count: l });
        } else {
            if (t.selectedOptions.length < n)
                return r.Z.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({ count: n });
            if (t.selectedOptions.length > l)
                return r.Z.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format({ count: l });
        }
        return null;
    }, o = (e, t) => {
        let {
            minLength: n,
            maxLength: l,
            required: u
        } = e;
        if (null == t || 0 === t.value.length)
            return u ? r.Z.Messages.FORM_LENGTH_ERROR.format({
                min: n,
                max: l
            }) : null;
        return t.value.length < n || t.value.length > l ? r.Z.Messages.FORM_LENGTH_ERROR.format({
            min: n,
            max: l
        }) : null;
    };
function d(e, t) {
    switch (null != t && u()(t.type === e.type, 'component type matches state'), e.type) {
    case i.re.BUTTON:
        return null;
    case i.re.STRING_SELECT:
    case i.re.USER_SELECT:
    case i.re.ROLE_SELECT:
    case i.re.MENTIONABLE_SELECT:
    case i.re.CHANNEL_SELECT:
        return a(e, t);
    case i.re.INPUT_TEXT:
        return o(e, t);
    default:
        u()(!1, 'missing validator for this component');
    }
}
