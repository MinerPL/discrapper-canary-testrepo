n.d(t, {
    CZ: function () {
        return s;
    },
    LB: function () {
        return u;
    },
    O5: function () {
        return l;
    },
    QI: function () {
        return c;
    },
    YC: function () {
        return r;
    }
}), n(47120), n(653041);
var r, i, a = n(433517), o = n(689938);
(i = r || (r = {})).CLASSIC = 'classic', i.DETUNE = 'detune', i.RETRO = 'retro', i.BUBBLE = 'bop', i.DUCKY = 'ducky', i.LOFI = 'lofi', i.ASMR = 'asmr', i.DISCODO = 'discodo';
let s = 'custom_notification_sounds_asmr', l = 'custom_notification_sounds_discodo';
function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], t = function (e) {
            if (!e)
                return [];
            let t = [];
            return a.K.get(l, !1) && t.push({
                value: 'discodo',
                label: 'DISCODO',
                description: '๑(\u25D5‿\u25D5)๑',
                requirePremium: !0
            }), a.K.get(s, !1) && t.push({
                value: 'asmr',
                label: o.Z.Messages.SOUNDPACK_ASMR_LABEL,
                description: o.Z.Messages.SOUNDPACK_ASMR_DESCRIPTION,
                requirePremium: !0
            }), t;
        }(e);
    return [
        {
            value: 'classic',
            label: o.Z.Messages.SOUNDPACK_DEFAULT_LABEL,
            description: o.Z.Messages.SOUNDPACK_DEFAULT_DESCRIPTION,
            requirePremium: !1
        },
        {
            value: 'retro',
            label: o.Z.Messages.SOUNDPACK_RETRO_LABEL,
            description: o.Z.Messages.SOUNDPACK_RETRO_DESCRIPTION,
            requirePremium: !0
        },
        {
            value: 'lofi',
            label: o.Z.Messages.SOUNDPACK_LOFI_LABEL,
            description: o.Z.Messages.SOUNDPACK_LOFI_DESCRIPTION,
            requirePremium: !0
        },
        {
            value: 'ducky',
            label: o.Z.Messages.SOUNDPACK_DUCKY_LABEL,
            description: o.Z.Messages.SOUNDPACK_DUCKY_DESCRIPTION,
            requirePremium: !0
        },
        {
            value: 'bop',
            label: o.Z.Messages.SOUNDPACK_BUBBLE_LABEL,
            description: o.Z.Messages.SOUNDPACK_BUBBLE_DESCRIPTION,
            requirePremium: !0
        },
        ...t
    ];
}
function c() {
    return [
        {
            value: 'classic',
            label: o.Z.Messages.SOUNDPACK_CLASSIC_LABEL
        },
        {
            value: 'detune',
            label: o.Z.Messages.SOUNDPACK_DETUNE_LABEL
        }
    ];
}
