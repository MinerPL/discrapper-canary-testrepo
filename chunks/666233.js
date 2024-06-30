var a = n(735250);
n(470079);
var t = n(442837), r = n(481060), l = n(594174), i = n(246364), o = n(489813), c = n(186078), d = n(73880), u = n(196345), I = n(707592), E = n(689938);
s.Z = function (e) {
    let {
        formFields: s,
        user: n,
        showRequirements: _ = !0
    } = e;
    return null == (0, t.e7)([l.default], () => null != n ? n : l.default.getCurrentUser()) ? null : (0, a.jsxs)(a.Fragment, {
        children: [
            _ && (0, a.jsx)(o.Ih, {
                icon: r.ShieldIcon,
                text: E.Z.Messages.MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
                meetsRequirement: !0
            }),
            s.map((e, s) => function (e, s) {
                switch (e.field_type) {
                case i.QJ.TERMS:
                    return (0, a.jsx)(u.QC, { formField: e }, s);
                case i.QJ.TEXT_INPUT:
                    return (0, a.jsx)(I.YJ, { formField: e }, s);
                case i.QJ.PARAGRAPH:
                    return (0, a.jsx)(d.jn, { formField: e }, s);
                case i.QJ.MULTIPLE_CHOICE:
                    return (0, a.jsx)(c.QH, { formField: e }, s);
                }
            }(e, s))
        ]
    });
};
