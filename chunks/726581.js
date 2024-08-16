var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(107769),
    c = n(649974),
    d = n(246946),
    u = n(594174),
    _ = n(525395),
    E = n(55563),
    h = n(551428),
    m = n(73346),
    I = n(733789),
    g = n(4962),
    p = n(689938),
    T = n(781506);
class S extends a.Component {
    renderReasons(e, t, n) {
        return 0 === e.length && 0 === t.length
            ? null
            : (0, i.jsx)('div', {
                  className: T.section,
                  children: (0, i.jsxs)('div', {
                      className: T.sectionContent,
                      children: [
                          e.map((e) =>
                              (0, i.jsx)(
                                  'div',
                                  {
                                      className: T.unit,
                                      children: (0, i.jsx)(I.Z, {
                                          reason: e,
                                          hidePersonalInformation: n
                                      })
                                  },
                                  e.type
                              )
                          ),
                          t.map((e) =>
                              (0, i.jsx)(
                                  'div',
                                  {
                                      className: T.unit,
                                      children: (0, i.jsx)(o.Z, { reason: e })
                                  },
                                  e.type
                              )
                          )
                      ]
                  })
              });
    }
    getReviewToRender() {
        let { storeListing: e } = this.props;
        return null != e.staffNotes
            ? {
                  type: g.Z.Types.STAFF_NOTES,
                  staffNotes: e.staffNotes
              }
            : null;
    }
    render() {
        let { socialReasons: e, nonSocialReasons: t, storeListing: n, hidePersonalInformation: a, className: s } = this.props;
        if (0 === e.length && 0 === t.length && null == n.staffNotes) return null;
        let l = this.getReviewToRender();
        return (0, i.jsxs)('div', {
            className: r()(T.root, s),
            children: [
                (0, i.jsx)('div', {
                    className: T.header,
                    children: p.Z.Messages.APPLICATION_STORE_SECTION_TITLE_RECOMMENDATION
                }),
                this.renderReasons(e, t, a),
                null != l
                    ? (0, i.jsx)(g.Z, {
                          data: l,
                          className: T.review
                      })
                    : null
            ]
        });
    }
}
t.Z = l.ZP.connectStores([E.Z, u.default, h.Z, c.Z, _.Z, d.Z], (e) => {
    let { sku: t } = e;
    return {
        socialReasons: (0, m.Gg)(t.id, E.Z, u.default, c.Z, _.Z),
        nonSocialReasons: (0, m.Ww)(t.id, E.Z, h.Z),
        hidePersonalInformation: d.Z.hidePersonalInformation
    };
})(S);
