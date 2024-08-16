n.d(s, {
    W: function () {
        return x;
    },
    r: function () {
        return R;
    }
}),
    n(47120);
var t = n(735250),
    l = n(470079),
    i = n(442837),
    a = n(430824),
    r = n(594174),
    o = n(246364),
    d = n(866319),
    u = n(118346),
    c = n(186078),
    I = n(73880),
    E = n(276486),
    M = n(196345),
    m = n(707592),
    _ = n(981631);
function N(e) {
    let { guildId: s, formFields: n, updateFormFields: l } = e,
        r = (0, i.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getGuild(s)) || void 0 === e ? void 0 : e.rulesChannelId;
        }),
        d = (e, s) => {
            let t = n[e];
            l([
                ...n.slice(0, e),
                {
                    ...t,
                    response: s
                },
                ...n.slice(e + 1)
            ]);
        },
        u = (e, s) => {
            let t = n[e];
            l([
                ...n.slice(0, e),
                {
                    ...t,
                    response: s
                },
                ...n.slice(e + 1)
            ]);
        },
        E = (e, s) => {
            let { value: t } = s,
                i = n[e];
            l([
                ...n.slice(0, e),
                {
                    ...i,
                    response: t
                },
                ...n.slice(e + 1)
            ]);
        },
        _ = (e, s) => {
            switch (e.field_type) {
                case o.QJ.TERMS:
                    return (0, t.jsx)(
                        M.dd,
                        {
                            channelId: r,
                            formField: e,
                            onChange: (e, n) => d(s, n)
                        },
                        s
                    );
                case o.QJ.TEXT_INPUT:
                    return (0, t.jsx)(
                        m.zY,
                        {
                            formField: e,
                            autofocus: 0 === s,
                            onChange: (e) => u(s, e)
                        },
                        s
                    );
                case o.QJ.PARAGRAPH:
                    return (0, t.jsx)(
                        I.lX,
                        {
                            formField: e,
                            autofocus: 0 === s,
                            onChange: (e) => u(s, e)
                        },
                        s
                    );
                case o.QJ.MULTIPLE_CHOICE:
                    return (0, t.jsx)(
                        c.sp,
                        {
                            formField: e,
                            onChange: (e) => E(s, e)
                        },
                        s
                    );
            }
        };
    return (0, t.jsx)(t.Fragment, { children: n.map((e, s) => _(e, s)) });
}
function x(e) {
    let { guildId: s, formFields: n, updateFormFields: l } = e,
        o = (0, i.e7)([a.Z], () => a.Z.getGuild(s)),
        c = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
        I = (0, d.G)({ guildId: s }) ? E.l : u.b,
        M = null == o ? void 0 : o.hasFeature(_.oNc.COMMUNITY);
    return null == c
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  M && (0, t.jsx)(I, {}),
                  (0, t.jsx)(N, {
                      guildId: s,
                      formFields: n,
                      updateFormFields: l
                  })
              ]
          });
}
function R(e) {
    let { guildId: s, formFields: n, updateFormFields: o } = e,
        c = (0, i.e7)([a.Z], () => a.Z.getGuild(s)),
        I = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
        { isPhoneVerificationLevel: M, isCurrentUserVerified: m } = (0, d.b)({ guildId: s }),
        x = l.useRef(m),
        R = M ? E.v : u.B,
        f = (null == c ? void 0 : c.hasFeature(_.oNc.COMMUNITY)) && !x.current;
    return null == I
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  f && (0, t.jsx)(R, { isUserVerified: m }),
                  (0, t.jsx)(N, {
                      guildId: s,
                      formFields: n,
                      updateFormFields: o
                  })
              ]
          });
}
