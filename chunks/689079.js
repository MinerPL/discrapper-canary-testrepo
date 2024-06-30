n.d(t, {
    Fu: function () {
        return p;
    },
    Lu: function () {
        return l;
    },
    Vd: function () {
        return f;
    },
    WO: function () {
        return s;
    },
    _n: function () {
        return E;
    },
    ak: function () {
        return u;
    },
    al: function () {
        return I;
    },
    bi: function () {
        return i;
    },
    hz: function () {
        return d;
    },
    lr: function () {
        return h;
    },
    oQ: function () {
        return _;
    },
    tn: function () {
        return c;
    },
    um: function () {
        return m;
    }
});
var r, i, a = n(911969), o = n(689938);
let s = 'True', l = 'False', u = [
        {
            name: s,
            displayName: s,
            value: 'true'
        },
        {
            name: l,
            displayName: l,
            value: 'false'
        }
    ];
(r = i || (i = {})).BUILT_IN = '-1', r.FRECENCY = '-2';
let c = 10, d = 5, _ = '\0', E = 100, f = 3, h = 10, p = 500;
Object.freeze([]), Object.freeze([]);
let m = 200;
function I(e) {
    if (null != e.choices)
        return o.Z.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
    switch (e.type) {
    case a.jw.BOOLEAN:
        return o.Z.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
    case a.jw.CHANNEL:
        return o.Z.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
    case a.jw.INTEGER:
        return o.Z.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
    case a.jw.NUMBER:
        return o.Z.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
    case a.jw.ROLE:
        return o.Z.Messages.COMMAND_VALIDATION_ROLE_ERROR;
    case a.jw.USER:
        return o.Z.Messages.COMMAND_VALIDATION_USER_ERROR;
    case a.jw.MENTIONABLE:
        return o.Z.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
    default:
        return o.Z.Messages.COMMAND_VALIDATION_GENERAL_ERROR;
    }
}
