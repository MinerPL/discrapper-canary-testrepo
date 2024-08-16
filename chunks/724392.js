var r = n(735250),
    a = n(470079),
    i = n(442837),
    o = n(481060),
    s = n(226961),
    l = n(481250),
    c = n(689938);
class d extends a.PureComponent {
    render() {
        let { outbound: e, context: t } = this.props;
        return null == e
            ? (0, r.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE })
            : (0, r.jsx)(o.FormSection, {
                  tag: o.FormTitleTags.H2,
                  title: c.Z.Messages.RTC_DEBUG_RTP_OUTBOUND,
                  children: (0, l.V)(e, t)
              });
    }
}
t.Z = i.ZP.connectStores([s.ZP], (e) => {
    let { context: t, index: n } = e,
        r = s.ZP.getAllStats(t)[n];
    return { outbound: null != r ? r.rtp.outbound : null };
})(d);
