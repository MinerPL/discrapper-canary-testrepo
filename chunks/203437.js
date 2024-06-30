t.d(n, {
    Z: function () {
        return y;
    }
}), t(47120);
var l = t(735250), a = t(470079), i = t(120356), s = t.n(i), r = t(442837), u = t(481060), o = t(889161), c = t(430824), d = t(496675), f = t(771845), m = t(594174), h = t(346656), g = t(267642), p = t(709054), N = t(208049), _ = t(763296), v = t(710111), D = t(981631), O = t(689938), S = t(710821);
function x(e) {
    let {
        availableSlots: n,
        className: t
    } = e;
    return (0, l.jsxs)(u.Text, {
        className: s()(S.suffixNode, t),
        variant: 'text-sm/medium',
        color: 'text-primary',
        children: [
            (0, l.jsx)(u.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: S.speakerIcon
            }),
            O.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({ slots: n })
        ]
    });
}
function y(e) {
    let {
            value: n,
            className: t,
            onChange: i
        } = e, y = (0, r.cj)([
            f.ZP,
            d.Z,
            m.default,
            c.Z
        ], () => {
            let e = {};
            for (let n of f.ZP.getFlattenedGuildIds()) {
                let t = c.Z.getGuild(n);
                if (null != t)
                    (0, o.Gw)(t, d.Z, m.default).canCreateExpressions && (e[t.id] = t);
            }
            return e;
        }), E = (0, r.cj)([_.Z], () => {
            let e = {};
            for (let [t, l] of p.default.entries(y)) {
                var n;
                let a = (0, g.yw)(l, null !== (n = _.Z.getSoundsForGuild(t)) && void 0 !== n ? n : v.Hy, l.premiumTier);
                e[t] = a;
            }
            return e;
        }, [y]);
    a.useEffect(() => {
        (0, N.w)();
    }, []);
    let A = a.useMemo(() => Object.values(y).map(e => {
            let {
                name: n,
                id: t
            } = e;
            return {
                label: n,
                value: t,
                disabled: E[t] <= 0
            };
        }), [
            y,
            E
        ]), b = a.useCallback(e => null == e || '' === e.value ? null : (0, l.jsx)(h.Z, {
            className: s()(S.guildSelectOptionIcon, { [S.disabledOption]: e.disabled }),
            guild: y[e.value],
            size: h.Z.Sizes.SMOL,
            active: !0
        }), [y]), M = a.useCallback(e => {
            let n = null == e ? void 0 : e.value;
            return null == n || '' === n ? null : (0, l.jsx)(x, {
                className: s()({ [S.disabledOption]: null == e ? void 0 : e.disabled }),
                availableSlots: E[n]
            });
        }, [E]), C = a.useCallback(e => (0, l.jsx)('div', {
            className: s()({ [S.disabledOption]: e.disabled }),
            children: e.label
        }), []), j = a.useCallback(e => {
            !(E[e] <= 0) && i(e);
        }, [
            E,
            i
        ]), I = (() => {
            let e = E[null != n ? n : D.lds];
            return null == e || e > 0 ? n : void 0;
        })();
    return (0, l.jsx)(u.SearchableSelect, {
        className: t,
        onChange: j,
        value: I,
        multi: !1,
        options: A,
        renderOptionPrefix: b,
        renderOptionSuffix: M,
        renderOptionLabel: C,
        placeholder: 0 === A.length ? O.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : O.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
    });
}
