n.d(t, {
    Z: function () {
        return _;
    },
    r: function () {
        return o;
    }
}), n(47120), n(653041);
var s = n(470079), a = n(392711), i = n(881052), r = n(36459), l = n(689938);
let o = '_errors', c = 'GENERIC_REGEX_ERROR';
async function d(e, t) {
    if (null == e.triggerMetadata.regexPatterns || 0 === e.triggerMetadata.regexPatterns.length) {
        t([]);
        return;
    }
    try {
        await (0, r.qY)(e), t([]);
    } catch (r) {
        var n, s;
        let e = new i.Hx(r).errors;
        if (!('object' == typeof (n = e) && (null == n ? void 0 : null === (s = n.trigger_metadata) || void 0 === s ? void 0 : s.regex_patterns) != null))
            return;
        let a = function (e) {
            var t;
            let n = null == e ? void 0 : null === (t = e.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns;
            return null == n ? [] : function (e) {
                let {
                        [o]: t = [],
                        ...n
                    } = e, s = Object.entries(n).map(e => {
                        var t;
                        let [n, s] = e, a = s[o], {
                                code: i,
                                message: r
                            } = null !== (t = null == a ? void 0 : a[0]) && void 0 !== t ? t : {
                                code: c,
                                message: l.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR
                            };
                        return {
                            pattern: n,
                            message: r,
                            code: i,
                            description: null == s ? void 0 : s.description,
                            erroringCharacterLength: null == s ? void 0 : s.erroring_character_length,
                            erroringCharacterOffset: null == s ? void 0 : s.erroring_character_offset,
                            regexErrorCode: null == s ? void 0 : s.regex_error_code
                        };
                    });
                if (t.length > 0) {
                    var a, i, r, d;
                    s.push({
                        pattern: o,
                        message: null !== (r = null === (a = t[0]) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : l.Z.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
                        code: null !== (d = null === (i = t[0]) || void 0 === i ? void 0 : i.code) && void 0 !== d ? d : c
                    });
                }
                return s;
            }(n);
        }(e);
        a.length > 0 && t(a);
    }
}
let u = (0, a.throttle)(d, 1000, { leading: !1 });
function _(e, t) {
    var n, i;
    let [r, l] = s.useState([]), [o, c] = s.useState(null), [_, E] = s.useState(null !== (i = null == e ? void 0 : null === (n = e.triggerMetadata) || void 0 === n ? void 0 : n.regexPatterns) && void 0 !== i ? i : []), I = s.useCallback(t => {
            if (!(t.length < 3))
                u({
                    ...e,
                    triggerMetadata: {
                        ...e.triggerMetadata,
                        regexPatterns: [t]
                    }
                }, e => {
                    var t;
                    return c(null !== (t = e[0]) && void 0 !== t ? t : null);
                });
        }, [e]);
    return {
        patterns: _,
        errors: r,
        valueError: o,
        validatePatternsChanged: s.useCallback((n, s) => {
            if (!(0, a.isEqual)(n, s))
                u.cancel(), d({
                    ...e,
                    triggerMetadata: {
                        ...e.triggerMetadata,
                        regexPatterns: n
                    }
                }, e => {
                    l(e), 0 === e.length && c(null);
                }), E(n), null == t || t(n);
        }, [
            e,
            t
        ]),
        validateEditingValueChanged: I
    };
}
