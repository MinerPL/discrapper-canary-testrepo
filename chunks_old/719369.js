"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("424973"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("146606"),
  i = n("948062"),
  r = n("343691");
class o extends s.PureComponent {
  renderPlaceholders() {
    let {
      loadingPlaceholderCount: e
    } = this.props, t = [];
    for (let n = 0; n < e; n++) t.push((0, a.jsx)(i.DiscoverSearchResultPlaceholder, {}, n));
    return t
  }
  render() {
    let {
      guilds: e,
      loading: t
    } = this.props;
    return (0, a.jsx)(l.Spring, {
      from: {
        opacity: t ? 0 : 1
      },
      to: {
        opacity: 1
      },
      delay: 100,
      children: n => (0, a.jsx)(l.animated.div, {
        className: r.guildList,
        style: n,
        children: t || null == e ? this.renderPlaceholders() : e.map(this.renderGuild)
      })
    })
  }
  constructor(...e) {
    super(...e), this.handleViewGuild = async e => {
      let {
        guilds: t,
        analyticsContext: n,
        onViewGuild: a
      } = this.props, s = t.findIndex(t => t.id === e);
      await a(e, s, n)
    }, this.renderGuild = (e, t) => {
      let {
        theme: n,
        onTagClick: s
      } = this.props;
      return (0, a.jsx)(i.default, {
        guild: e,
        theme: n,
        onView: this.handleViewGuild,
        onTagClick: s
      }, t)
    }
  }
}
o.defaultProps = {
  loadingPlaceholderCount: 12
};
var u = o