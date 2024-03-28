"use strict";
i.r(t), i.d(t, {
  useForumChannelStore: function() {
    return g
  },
  useForumChannelStoreApi: function() {
    return T
  }
}), i("47120");
var n = i("512722"),
  a = i.n(n),
  s = i("652874"),
  l = i("313361"),
  o = i("683860"),
  r = i("442837"),
  u = i("592125"),
  d = i("559241");

function c(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let h = new Set,
  f = {
    layoutType: l.ForumLayout.LIST,
    sortOrder: o.ThreadSortOrder.CREATION_DATE,
    tagFilter: h,
    scrollPosition: 0
  };
class m {
  constructor(e, t) {
    c(this, "set", void 0), c(this, "get", void 0), c(this, "channelStates", void 0), c(this, "setChannelState", void 0), c(this, "getChannelState", void 0), c(this, "toggleTagFilter", void 0), c(this, "setTagFilter", void 0), c(this, "setSortOrder", void 0), c(this, "setLayoutType", void 0), c(this, "setScrollPosition", void 0), this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
      let i = this.get(),
        n = this.getChannelState(e),
        a = {
          ...i.channelStates
        };
      a[e] = {
        ...n,
        ...t
      }, this.set({
        channelStates: a
      })
    }, this.getChannelState = e => {
      if (null == e) return f;
      let {
        channelStates: t
      } = this.get(), i = t[e];
      if (null == i) {
        let t = u.default.getChannel(e);
        a()(null != t, "[Forum Channel Store] The channel should not be missing."), i = {
          layoutType: t.getDefaultLayout(),
          sortOrder: t.getDefaultSortOrder(),
          tagFilter: h,
          scrollPosition: 0
        }
      }
      return i
    }, this.toggleTagFilter = (e, t) => {
      let i = this.getChannelState(e),
        n = new Set(i.tagFilter);
      n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n)
    }, this.setTagFilter = (e, t) => {
      this.setChannelState(e, {
        tagFilter: t
      }), d.default.setFilterTagIds(t)
    }, this.setSortOrder = (e, t) => {
      this.setChannelState(e, {
        sortOrder: t
      }), d.default.setSortOrder(t)
    }, this.setLayoutType = (e, t) => {
      this.setChannelState(e, {
        layoutType: t
      }), d.default.setLayout(t)
    }, this.setScrollPosition = (e, t) => {
      this.setChannelState(e, {
        scrollPosition: t
      })
    }
  }
}
let p = (0, s.default)((e, t) => new m(e, t)),
  g = e => {
    let t = p();
    return null == (0, r.useStateFromStores)([u.default], () => u.default.getChannel(e)) ? f : t.getChannelState(e)
  },
  T = () => p