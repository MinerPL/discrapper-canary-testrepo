"use strict";
n.r(t), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("710845"),
  i = n("581883"),
  r = n("314897"),
  o = n("287328"),
  u = n("261875");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = new l.default("UserSettingsProto");
t.default = new class e {
  async getAll(e) {
    let t = performance.now(),
      n = await o.default.userSettings(e).getMany(),
      a = performance.now();
    c.verbose("loaded in ".concat(a - t, "ms (settings: ").concat(n.length, ")"));
    let s = {};
    for (let e of n) s[e.id] = e.value;
    return s
  }
  resetInMemoryState() {}
  constructor() {
    d(this, "actions", {
      CONNECTION_OPEN: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
    }), d(this, "handleUserSettingsProtoChange", () => {
      let e = r.default.getId(),
        t = u.default.database(e);
      null == t || t.transaction(e => {
        var t, n;
        let a = i.default.computeState(),
          s = o.default.userSettingsTransaction(e);
        for (let e in a) s.put({
          id: Number(e),
          value: a[e]
        });
        let l = null !== (n = null === (t = i.default.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1;
        o.default.nonGuildVersionsTransaction(e).put({
          id: "user_settings_version",
          version: l
        })
      }, "handleUserSettingsProtoChange")
    }), d(this, "throttledOnChange", s().debounce(this.handleUserSettingsProtoChange, 0))
  }
}