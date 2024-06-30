var r = n(735250), a = n(470079), i = n(392711), o = n.n(i), s = n(481060), l = n(481250), c = n(513547), d = n(689938);
class u extends a.PureComponent {
    render() {
        let {screenshare: e} = this.props;
        if (null == e)
            return (0, r.jsx)(s.Spinner, { type: s.Spinner.Type.SPINNING_CIRCLE });
        let t = o().map(e, (e, t) => {
            if (!(c.al[t] || void 0 === e))
                return (0, r.jsx)(c.ck, {
                    label: t,
                    value: e
                }, t);
        });
        return (0, r.jsx)(s.FormSection, {
            tag: s.FormTitleTags.H2,
            title: d.Z.Messages.RTC_DEBUG_SCREENSHARE,
            children: (0, l.a)(t)
        });
    }
}
t.Z = u;
