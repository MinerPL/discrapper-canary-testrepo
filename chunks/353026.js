"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var a = n("917351"),
  s = n.n(a),
  l = n("605250"),
  i = n("374363"),
  r = n("271938"),
  o = n("802493"),
  u = n("723939");
let d = new l.default("UserSettingsProto");
var c = new class e {
  async getAll(e) {
    let t = performance.now(),
      n = await o.default.userSettings(e).getMany(),
      a = performance.now();
    d.verbose("loaded in ".concat(a - t, "ms (settings: ").concat(n.length, ")"));
    let s = {};
    for (let e of n) s[e.id] = e.value;
    return s
  }
  resetInMemoryState() {}
  constructor() {
    this.actions = {
      CONNECTION_OPEN: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
    }, this.handleUserSettingsProtoChange = () => {
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
    }, this.throttledOnChange = s.debounce(this.handleUserSettingsProtoChange, 0)
  }
}