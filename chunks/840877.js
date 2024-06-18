"use strict";
n.d(t, {
  ZP: function() {
    return _
  },
  tJ: function() {
    return d
  }
}), n(411104);
var i = n(664751),
  r = n(544891),
  s = n(710845),
  o = n(70956),
  a = n(981631);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u {
  async fetch(e, t, n) {
    if (!this.isCanceled) try {
      let r = await this.makeRequest();
      if (null == r || this.isCanceled) return;
      if (200 === r.status) e(r);
      else if (202 === r.status) {
        var i;
        if (this.query.attempts = (null !== (i = this.query.attempts) && void 0 !== i ? i : 0) + 1, this.query.attempts > 5) return;
        let s = r.body.retry_after * o.Z.Millis.SECOND;
        this.retryDelay = isNaN(s) || 0 === s ? 5e3 : s, this.retryLater(e, t, n), t(r)
      }
    } catch (e) {
      new s.Z("SearchFetcher").error(e), n(e)
    }
  }
  cancel() {
    this.isCanceled = !0, null != this.indexingPollId && clearTimeout(this.indexingPollId)
  }
  retryLater(e, t, n) {
    null != this.indexingPollId && clearTimeout(this.indexingPollId), this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay)
  }
  constructor(e, t, n) {
    l(this, "indexingPollId", void 0), l(this, "searchId", void 0), l(this, "searchType", void 0), l(this, "query", void 0), l(this, "retryDelay", void 0), l(this, "isCanceled", !1), this.searchId = e, this.searchType = t, this.query = n
  }
}
class _ extends u {
  getEndpoint() {
    switch (this.searchType) {
      case a.aib.DMS:
        return a.ANM.SEARCH_DMS;
      case a.aib.FAVORITES:
        return a.ANM.SEARCH_FAVORITES;
      case a.aib.GUILD:
        if (null == this.searchId || "" === this.searchId) return;
        return a.ANM.SEARCH_GUILD(this.searchId);
      case a.aib.CHANNEL:
        if (null == this.searchId || "" === this.searchId) return;
        return a.ANM.SEARCH_CHANNEL(this.searchId);
      default:
        throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
    }
  }
  makeRequest() {
    let e = this.getEndpoint();
    return null == e ? null : r.tn.get({
      url: e,
      query: i.stringify(this.query),
      oldFormErrors: !0
    })
  }
}
class d extends u {
  getEndpoint() {
    switch (this.searchType) {
      case a.aib.DMS:
        return a.ANM.SEARCH_TABS_DMS;
      case a.aib.GUILD_CHANNEL:
      case a.aib.GUILD:
        if (null == this.searchId || "" === this.searchId) return;
        return a.ANM.SEARCH_TABS_GUILD(this.searchId);
      case a.aib.CHANNEL:
        if (null == this.searchId || "" === this.searchId) return;
        return a.ANM.SEARCH_TABS_CHANNEL(this.searchId);
      default:
        throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
    }
  }
  makeRequest() {
    let e = this.getEndpoint();
    return null == e ? null : r.tn.post({
      url: e,
      body: this.payload,
      oldFormErrors: !0
    })
  }
  constructor(e, t, n, i) {
    super(e, t, n), l(this, "payload", void 0), this.payload = i
  }
}