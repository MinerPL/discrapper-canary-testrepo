"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("55620"),
  i = s("440351"),
  l = s("782340"),
  o = s("595695");
class u extends r.PureComponent {
  render() {
    let {
      game: {
        name: e
      }
    } = this.props;
    return (0, a.jsx)("div", {
      className: o.matureListing,
      children: (0, a.jsx)(i.default, {
        onAgree: this.handleAgree,
        onDisagree: this.handleDisagree,
        title: l.default.Messages.MATURE_LISTING_TITLE.format({
          name: e
        }),
        description: l.default.Messages.MATURE_LISTING_DESCRIPTION,
        agreement: l.default.Messages.MATURE_LISTING_ACCEPT,
        disagreement: l.default.Messages.MATURE_LISTING_DECLINE
      })
    })
  }
  constructor(...e) {
    super(...e), this.handleDisagree = () => {
      (0, n.matureDisagree)()
    }, this.handleAgree = () => {
      (0, n.matureAgree)()
    }
  }
}
var d = u