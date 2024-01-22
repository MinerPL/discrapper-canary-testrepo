"use strict";
n.r(t), n.d(t, {
  useSearchField: function() {
    return K
  }
});
var r = n("290895"),
  i = n("181551"),
  o = n("536571"),
  s = {},
  a = {},
  c = {},
  u = {},
  d = {},
  l = {},
  f = {},
  p = {},
  h = {},
  g = {},
  b = {},
  v = {},
  m = {},
  y = {},
  x = {},
  w = {},
  S = {},
  k = {},
  _ = {},
  E = {},
  M = {},
  D = {},
  C = {},
  P = {},
  T = {},
  A = {},
  R = {},
  I = {},
  O = {},
  j = {},
  N = {},
  L = {},
  F = {},
  B = {},
  z = {};

function K(e, t, n) {
  var a;
  let c = (0, i.useLocalizedStringFormatter)((a = s) && a.__esModule ? a.default : a),
    {
      isDisabled: u,
      isReadOnly: d,
      onSubmit: l = () => {},
      onClear: f,
      type: p = "search"
    } = e,
    {
      labelProps: h,
      inputProps: g,
      descriptionProps: b,
      errorMessageProps: v
    } = (0, o.useTextField)({
      ...e,
      value: t.value,
      onChange: t.setValue,
      onKeyDown: (0, r.chain)(e => {
        let n = e.key;
        ("Enter" === n || "Escape" === n) && e.preventDefault(), !u && !d && ("Enter" === n && l(t.value), "Escape" === n && (t.setValue(""), f && f()))
      }, e.onKeyDown),
      type: p
    }, n);
  return {
    labelProps: h,
    inputProps: {
      ...g,
      defaultValue: void 0
    },
    clearButtonProps: {
      "aria-label": c.format("Clear search"),
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      isDisabled: u || d,
      onPress: () => {
        t.setValue(""), f && f()
      },
      onPressStart: () => {
        n.current.focus()
      }
    },
    descriptionProps: b,
    errorMessageProps: v
  }
}
s = {
  "ar-AE": a = {
    "Clear search": "مسح البحث"
  },
  "bg-BG": c = {
    "Clear search": "Изчистване на търсене"
  },
  "cs-CZ": u = {
    "Clear search": "Vymazat hled\xe1n\xed"
  },
  "da-DK": d = {
    "Clear search": "Ryd s\xf8gning"
  },
  "de-DE": l = {
    "Clear search": "Suche zur\xfccksetzen"
  },
  "el-GR": f = {
    "Clear search": "Απαλοιφή αναζήτησης"
  },
  "en-US": p = {
    "Clear search": "Clear search"
  },
  "es-ES": h = {
    "Clear search": "Borrar b\xfasqueda"
  },
  "et-EE": g = {
    "Clear search": "T\xfchjenda otsing"
  },
  "fi-FI": b = {
    "Clear search": "Tyhjenn\xe4 haku"
  },
  "fr-FR": v = {
    "Clear search": "Effacer la recherche"
  },
  "he-IL": m = {
    "Clear search": "נקה חיפוש"
  },
  "hr-HR": y = {
    "Clear search": "Obriši pretragu"
  },
  "hu-HU": x = {
    "Clear search": "Keres\xe9s t\xf6rl\xe9se"
  },
  "it-IT": w = {
    "Clear search": "Cancella ricerca"
  },
  "ja-JP": S = {
    "Clear search": "検索をクリア"
  },
  "ko-KR": k = {
    "Clear search": "검색 지우기"
  },
  "lt-LT": _ = {
    "Clear search": "Išvalyti iešką"
  },
  "lv-LV": E = {
    "Clear search": "Notīrīt meklēšanu"
  },
  "nb-NO": M = {
    "Clear search": "T\xf8m s\xf8k"
  },
  "nl-NL": D = {
    "Clear search": "Zoekactie wissen"
  },
  "pl-PL": C = {
    "Clear search": "Wyczyść zawartość wyszukiwania"
  },
  "pt-BR": P = {
    "Clear search": "Limpar pesquisa"
  },
  "pt-PT": T = {
    "Clear search": "Limpar pesquisa"
  },
  "ro-RO": A = {
    "Clear search": "Ştergeţi căutarea"
  },
  "ru-RU": R = {
    "Clear search": "Очистить поиск"
  },
  "sk-SK": I = {
    "Clear search": "Vymazať vyhľad\xe1vanie"
  },
  "sl-SI": O = {
    "Clear search": "Počisti iskanje"
  },
  "sr-SP": j = {
    "Clear search": "Obriši pretragu"
  },
  "sv-SE": N = {
    "Clear search": "Rensa s\xf6kning"
  },
  "tr-TR": L = {
    "Clear search": "Aramayı temizle"
  },
  "uk-UA": F = {
    "Clear search": "Очистити пошук"
  },
  "zh-CN": B = {
    "Clear search": "清除搜索"
  },
  "zh-TW": z = {
    "Clear search": "清除搜尋條件"
  }
}