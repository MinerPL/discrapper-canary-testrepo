var i = n(735250),
    a = n(470079),
    s = n(664751),
    r = n(481060),
    l = n(703656);
class o extends a.PureComponent {
    componentDidUpdate(e) {
        let { resetCurrentPage: t } = this.props;
        !e.resetCurrentPage && t && this.setState({ currentPage: 1 });
    }
    render() {
        let { totalCount: e, pageSize: t, maxVisiblePages: n, children: a } = this.props,
            { currentPage: s } = this.state;
        return a({
            controller: (0, i.jsx)(r.Paginator, {
                totalCount: e,
                pageSize: t,
                currentPage: s,
                maxVisiblePages: n,
                onPageChange: this.handlePageChange
            })
        });
    }
    constructor(e) {
        var t, n, i;
        super(e),
            (t = this),
            (n = 'handlePageChange'),
            (i = (e) => {
                let { onPageChange: t } = this.props;
                this.setState({ currentPage: e }), null != t && t(e);
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
        let a = (0, l.s1)().location.search,
            { offset: r } = null != a && a.length > 0 && a.startsWith('?') ? s.parse(a) : {},
            o = null != r ? Math.floor(parseInt(r, 10) / e.pageSize) + 1 : 1;
        this.state = { currentPage: o };
    }
}
t.Z = o;
