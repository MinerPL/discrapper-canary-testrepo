n(757143), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(442837), o = n(481060), c = n(771340), u = n(903223), d = n(285952), h = n(689938), p = n(46319);
function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let _ = {
        position: 'bottom',
        autoInvert: !1
    }, f = e => {
        let {
                region: t,
                className: n = p.regionSelectName
            } = e, a = t.name.replace(/ \(VIP\)$/, '');
        return (0, i.jsx)('div', {
            className: n,
            children: a
        });
    };
class E extends a.PureComponent {
    render() {
        let {
            region: e,
            selected: t
        } = this.props;
        return (0, i.jsxs)(d.Z, {
            align: d.Z.Align.CENTER,
            className: s()({ selected: t }),
            children: [
                (0, i.jsx)(f, {
                    region: e,
                    className: p.regionSelectName
                }),
                t ? (0, i.jsx)('i', { className: p.check }) : null
            ]
        });
    }
}
class C extends a.PureComponent {
    componentDidMount() {
        null == this.props.regions && c.Z.fetchRegions(null);
    }
    render() {
        let {regions: e} = this.props;
        if (null == e)
            return null;
        let t = this.getSelectedRegion(), n = {
                label: t.name,
                value: t
            }, a = e.filter(e => !e.deprecated && !e.hidden).map(e => ({
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
            popoutClassName: p.regionSelectPopout
        });
    }
    constructor(...e) {
        super(...e), m(this, 'renderOption', (e, t) => (0, i.jsx)(E, {
            region: e.value,
            selected: t
        }, e.value.id)), m(this, 'getSelectedRegion', () => {
            var e;
            let {
                regions: t,
                call: n
            } = this.props;
            return n.regionUpdated && null != t && null != n.region ? null !== (e = t.find(e => {
                let {id: t} = e;
                return t === n.region;
            })) && void 0 !== e ? e : {
                name: n.region,
                id: n.region
            } : {
                id: 'automatic',
                name: h.Z.Messages.AUTOMATIC_REGION,
                vip: !1,
                deprecated: !1,
                hidden: !1
            };
        }), m(this, 'handleChangeVoiceRegion', e => {
            let {value: t} = e, {channelId: n} = this.props.call;
            c.Z.changeCallRegion(n, t.id);
        });
    }
}
t.Z = r.ZP.connectStores([u.Z], () => ({ regions: u.Z.getRegions(null) }))(C);
