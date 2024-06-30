s(47120);
var n = s(735250);
s(470079);
var l = s(120356), a = s.n(l), i = s(481060), r = s(968437), o = s(689938), d = s(615006);
t.Z = e => {
    let {
            autoArchiveDuration: t,
            onChange: s,
            isDisabled: l
        } = e, c = (0, r.nt)(), u = (e, t) => (0, n.jsx)('span', {
            className: a()(d.optionLabel, { [d.dropdownOption]: t }),
            children: e.label
        });
    return (0, n.jsx)(i.FormSection, {
        title: o.Z.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
        className: d.formSection,
        children: (0, n.jsx)(i.SingleSelect, {
            isDisabled: l,
            options: c,
            value: t,
            maxVisibleItems: c.length,
            onChange: s,
            optionClassName: d.dropdownOption,
            renderOptionLabel: e => u(e, !0),
            renderOptionValue: e => {
                let [t] = e;
                return u(t, !1);
            }
        })
    });
};
