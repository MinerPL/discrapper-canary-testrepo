n(757143), n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(771340),
    u = n(600164),
    d = n(903223),
    h = n(689938),
    m = n(416652);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = {
        position: 'bottom',
        autoInvert: !1
    },
    f = (e) => {
        let { region: t, className: n = m.regionSelectName } = e,
            a = t.name.replace(/ \(VIP\)$/, '');
        return (0, i.jsx)('div', {
            className: n,
            children: a
        });
    };
class E extends a.PureComponent {
    render() {
        let { region: e, selected: t } = this.props;
        return (0, i.jsxs)(u.Z, {
            align: u.Z.Align.CENTER,
            className: l()({ selected: t }),
            children: [
                (0, i.jsx)(f, {
                    region: e,
                    className: m.regionSelectName
                }),
                t ? (0, i.jsx)('i', { className: m.check }) : null
            ]
        });
    }
}
class g extends a.PureComponent {
    componentDidMount() {
        null == this.props.regions && c.Z.fetchRegions(null);
    }
    render() {
        let { regions: e } = this.props;
        if (null == e) return null;
        let t = this.getSelectedRegion(),
            n = {
                label: t.name,
                value: t
            },
            a = e
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e,
                    key: e.id
                }));
        return (0, i.jsx)(o.QuickSelect, {
            label: h.Z.Messages.REGION,
            options: a,
            value: n,
            onChange: this.handleChangeVoiceRegion,
            renderOption: this.renderOption,
            popoutProps: _,
            popoutClassName: m.regionSelectPopout
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'renderOption', (e, t) =>
                (0, i.jsx)(
                    E,
                    {
                        region: e.value,
                        selected: t
                    },
                    e.value.id
                )
            ),
            p(this, 'getSelectedRegion', () => {
                var e;
                let { regions: t, call: n } = this.props;
                return n.regionUpdated && null != t && null != n.region
                    ? null !==
                          (e = t.find((e) => {
                              let { id: t } = e;
                              return t === n.region;
                          })) && void 0 !== e
                        ? e
                        : {
                              name: n.region,
                              id: n.region
                          }
                    : {
                          id: 'automatic',
                          name: h.Z.Messages.AUTOMATIC_REGION,
                          vip: !1,
                          deprecated: !1,
                          hidden: !1
                      };
            }),
            p(this, 'handleChangeVoiceRegion', (e) => {
                let { value: t } = e,
                    { channelId: n } = this.props.call;
                c.Z.changeCallRegion(n, t.id);
            });
    }
}
t.Z = r.ZP.connectStores([d.Z], () => ({ regions: d.Z.getRegions(null) }))(g);
