"use strict";
n.r(t), n("47120");
var s, a = n("735250"),
  l = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("481060"),
  u = n("404133"),
  d = n("86357"),
  c = n("54936"),
  f = n("55008"),
  E = n("592771"),
  _ = n("305177"),
  T = n("73346"),
  m = n("568836"),
  I = n("345898"),
  p = n("981631"),
  h = n("656049");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class S extends(s = l.PureComponent) {
  render() {
    let {
      sku: e,
      storeListing: t,
      isHorizontal: n,
      className: s,
      renderCustomTagline: l,
      renderCustomTitle: i,
      renderCustomMedia: r,
      isEmbed: o
    } = this.props, u = o ? m.ResponsiveEmbedTile : I.default;
    return (0, a.jsx)(u, {
      className: s,
      renderMedia: null != r ? r : this.renderMedia,
      renderTitle: null != i ? i : () => e.name,
      renderTagline: null != l ? l : () => t.tagline,
      renderActions: this.renderActions,
      isHorizontal: n
    })
  }
  constructor(...e) {
    super(...e), N(this, "renderActions", () => {
      let {
        inLibrary: e,
        sku: t,
        renderCustomActions: n,
        isMouseOver: s,
        showBuyInline: l
      } = this.props, i = (l || !t.requiresPayment) && !e, r = i && s;
      return null != n ? n() : (0, a.jsxs)("div", {
        className: h.priceOs,
        children: [(0, a.jsx)(d.default, {
          type: d.default.Types.DIRECTORY_TILE,
          sku: t,
          inLibrary: e,
          className: r ? h.tilePriceWithVisibleBuyButton : h.tilePrice
        }), (0, a.jsx)(c.OperatingSystemSection, {
          systems: [p.OperatingSystems.WINDOWS],
          className: h.platform
        }), i ? (0, a.jsx)(u.default, {
          skuId: t.id,
          applicationId: t.applicationId,
          size: o.Button.Sizes.SMALL,
          shouldRenderPrice: !0,
          onStoreListing: !0,
          onClick: e => e.preventDefault(),
          className: r ? h.tileBuyButtonVisible : h.tileBuyButton
        }) : null]
      })
    }), N(this, "renderMedia", () => {
      let {
        playing: e,
        muted: t,
        showMediaPlaceholder: n,
        onToggleMute: s,
        sku: i,
        isHorizontal: o,
        storeListing: u
      } = this.props;
      return (0, a.jsxs)(l.Fragment, {
        children: [(0, a.jsx)(_.default, {
          className: r()(h.splashContainer, {
            [h.splashContainerHorizontal]: o
          }),
          video: null != u.previewVideo ? (0, T.getAssetURL)(i.applicationId, u.previewVideo) : void 0,
          image: null != u.thumbnail ? (0, T.getAssetURL)(i.applicationId, u.thumbnail, 600) : null,
          title: i.name,
          playing: e,
          muted: t,
          placeholder: n,
          onToggleMute: s,
          splashClassName: h.splashVideo,
          splashPlaceholderClassName: h.splashPlaceholder
        }), i.exclusive ? (0, a.jsx)(f.default, {
          className: r()(h.exclusiveRegular, {
            [h.exclusivePlaying]: e
          })
        }) : i.isTheGameAwardsWinner ? (0, a.jsx)(E.default, {
          className: r()(h.exclusiveRegular, {
            [h.exclusivePlaying]: e
          })
        }) : null]
      })
    })
  }
}
N(S, "defaultProps", {
  showMediaPlaceholder: !1,
  isMouseOver: !1,
  showBuyInline: !1,
  isHorizontal: !1,
  isEmbed: !1
}), t.default = S