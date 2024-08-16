var r = n(106351),
    i = n(524437),
    a = n(695346),
    s = n(82554),
    o = n(689938);
let l = {
    getTitle: () => o.Z.Messages.IAR_UPSELLS_DM_SPAM_FILTER_TITLE,
    getDescription: () => o.Z.Messages.IAR_UPSELLS_DM_SPAM_FILTER_DESCRIPTION,
    eligibleReportSubtypes: [s.i5.SUB_SPAM],
    eligibleChannelTypes: [r.d.DM, r.d.GROUP_DM],
    onApply: () => a.Xr.updateSetting(i.Xr.NON_FRIENDS),
    predicate: () => a.Xr.getSetting() === i.Xr.DISABLED
};
t.Z = l;
