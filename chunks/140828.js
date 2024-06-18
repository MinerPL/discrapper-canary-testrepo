"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(379649),
  r = n(866960),
  s = n(981631);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return null != e ? Math.round(e) : t
}
class l {
  _initStats() {
    let e = {
      effectiveConnectionSpeedBuckets: {},
      connectionTypeBuckets: {}
    };
    return Object.values(s.IWh).forEach(t => {
      e.connectionTypeBuckets[t] = 0
    }), Object.values(s.IyS).forEach(t => {
      e.effectiveConnectionSpeedBuckets[t] = 0
    }), e
  }
  getStats() {
    let {
      _networkStats: e
    } = this;
    return {
      duration_connection_type_wifi: a(e.connectionTypeBuckets[s.IWh.WIFI]),
      duration_connection_type_cellular: a(e.connectionTypeBuckets[s.IWh.CELLULAR]),
      duration_connection_type_ethernet: a(e.connectionTypeBuckets[s.IWh.ETHERNET]),
      duration_connection_type_bluetooth: a(e.connectionTypeBuckets[s.IWh.BLUETOOTH]),
      duration_connection_type_other: a(e.connectionTypeBuckets[s.IWh.OTHER]),
      duration_connection_type_unknown: a(e.connectionTypeBuckets[s.IWh.UNKNOWN]),
      duration_connection_type_none: a(e.connectionTypeBuckets[s.IWh.NONE]),
      duration_effective_connection_speed_2g: a(e.effectiveConnectionSpeedBuckets[s.IyS.TWO_G]),
      duration_effective_connection_speed_3g: a(e.effectiveConnectionSpeedBuckets[s.IyS.THREE_G]),
      duration_effective_connection_speed_4g: a(e.effectiveConnectionSpeedBuckets[s.IyS.FOUR_G]),
      duration_effective_connection_speed_5g: a(e.effectiveConnectionSpeedBuckets[s.IyS.FIVE_G]),
      duration_effective_connection_speed_unknown: a(e.effectiveConnectionSpeedBuckets[s.IyS.UNKNOWN])
    }
  }
  incrementNetworkStats(e) {
    let t = (e - this._lastSampleTimestamp) / 1e3,
      n = r.Z.getEffectiveConnectionSpeed();
    n === s.IyS.SLOW_TWO_G && (n = s.IyS.TWO_G);
    let i = r.Z.getType();
    i === s.IWh.WIMAX && (i = s.IWh.WIFI), this._networkStats.effectiveConnectionSpeedBuckets[n] += t, this._networkStats.connectionTypeBuckets[i] += t, this._lastSampleTimestamp = e
  }
  constructor() {
    o(this, "_networkStats", void 0), o(this, "_lastSampleTimestamp", void 0), this._networkStats = this._initStats(), this._lastSampleTimestamp = (0, i.zO)()
  }
}