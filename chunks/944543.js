"use strict";
n.r(t), n("757143"), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("771340"),
  u = n("903223"),
  d = n("285952"),
  c = n("70072"),
  f = n("689938"),
  h = n("694826");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = {
    position: "bottom",
    autoInvert: !1
  },
  E = e => {
    let {
      region: t,
      className: n = h.regionSelectName
    } = e, l = t.name.replace(/ \(VIP\)$/, "");
    return (0, a.jsx)("div", {
      className: n,
      children: l
    })
  };
class C extends l.PureComponent {
  render() {
    let {
      region: e,
      selected: t
    } = this.props;
    return (0, a.jsxs)(d.default, {
      align: d.default.Align.CENTER,
      className: i()({
        selected: t
      }),
      children: [(0, a.jsx)(E, {
        region: e,
        className: h.regionSelectName
      }), t ? (0, a.jsx)("i", {
        className: h.check
      }) : null]
    })
  }
}
class g extends l.PureComponent {
  componentDidMount() {
    null == this.props.regions && o.default.fetchRegions(null)
  }
  render() {
    let {
      regions: e
    } = this.props;
    if (null == e) return null;
    let t = this.getSelectedRegion(),
      n = {
        label: t.name,
        value: t
      },
      l = e.filter(e => !e.deprecated && !e.hidden).map(e => ({
        label: e.name,
        value: e,
        key: e.id
      }));
    return (0, a.jsx)(c.default, {
      label: f.default.Messages.REGION,
      options: l,
      value: n,
      onChange: this.handleChangeVoiceRegion,
      renderOption: this.renderOption,
      popoutProps: p,
      popoutClassName: h.regionSelectPopout
    })
  }
  constructor(...e) {
    super(...e), m(this, "renderOption", (e, t) => (0, a.jsx)(C, {
      region: e.value,
      selected: t
    }, e.value.id)), m(this, "getSelectedRegion", () => {
      var e;
      let {
        regions: t,
        call: n
      } = this.props;
      return n.regionUpdated && null != t && null != n.region ? null !== (e = t.find(e => {
        let {
          id: t
        } = e;
        return t === n.region
      })) && void 0 !== e ? e : {
        name: n.region,
        id: n.region
      } : {
        id: "automatic",
        name: f.default.Messages.AUTOMATIC_REGION,
        vip: !1,
        deprecated: !1,
        hidden: !1
      }
    }), m(this, "handleChangeVoiceRegion", e => {
      let {
        value: t
      } = e, {
        channelId: n
      } = this.props.call;
      o.default.changeCallRegion(n, t.id)
    })
  }
}
t.default = r.default.connectStores([u.default], () => ({
  regions: u.default.getRegions(null)
}))(g)