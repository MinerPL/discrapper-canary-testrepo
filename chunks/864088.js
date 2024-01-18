    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return c
      }
    });
    var s = t("862337"),
      d = t("913144"),
      n = t("845579");
    let i = new s.Timeout;
    var c = {
      init() {
        d.default.subscribe("USER_SETTINGS_PROTO_UPDATE", () => {
          let e = n.CustomStatusSetting.getSetting();
          if (null == e) i.stop();
          else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
            let a = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
            a > 0 ? i.start(a, () => {
              n.CustomStatusSetting.updateSetting(void 0)
            }, !0) : (n.CustomStatusSetting.updateSetting(void 0), i.stop())
          } else null != i && i.stop()
        })
      }
    }