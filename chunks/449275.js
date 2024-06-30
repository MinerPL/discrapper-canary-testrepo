var i = n(735250), s = n(470079), a = n(378720), r = n(689938), l = n(224853);
class o extends s.PureComponent {
    render() {
        let {
            className: e,
            sku: t
        } = this.props;
        return null == t.legalNotice ? null : (0, i.jsxs)('div', {
            className: e,
            children: [
                (0, i.jsx)(a.Z, { children: r.Z.Messages.APPLICATION_STORE_SECTION_TITLE_COPYRIGHT }),
                (0, i.jsx)('div', {
                    className: l.content,
                    children: t.legalNotice
                })
            ]
        });
    }
}
t.Z = o;
