var r = n(592204),
    i = n(131681),
    a = n(695346),
    s = n(82554),
    o = n(689938);
let l = {
    getTitle: () => o.Z.Messages.IAR_UPSELLS_LANGUAGE_FILTER_TITLE,
    getDescription: () => o.Z.Messages.IAR_UPSELLS_LANGUAGE_FILTER_DESCRIPTION,
    eligibleReportSubtypes: [s.i5.SUB_GENERAL_HARASSMENT, s.i5.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY, s.i5.SUB_VULGAR_LANGUAGE],
    onApply: () =>
        a.gw.updateSetting({
            profanity: !0,
            slurs: !0,
            sexualContent: !0
        }),
    predicate: () => (0, r.pB)({ location: 'iar_settings_upsells' }) && !(0, i.U)()
};
t.Z = l;
