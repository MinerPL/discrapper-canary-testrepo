"use strict";
n.r(t), n.d(t, {
  useTableRowGroup: function() {
    return ea
  },
  useTable: function() {
    return Q
  },
  useTableColumnHeader: function() {
    return ee
  },
  useTableRow: function() {
    return en
  },
  useTableHeaderRow: function() {
    return er
  },
  useTableCell: function() {
    return ei
  },
  useTableSelectionCheckbox: function() {
    return eo
  },
  useTableSelectAllCheckbox: function() {
    return es
  }
}), n("222007"), n("781738"), n("70102");
var r = n("416548"),
  i = n("362561"),
  o = n("290895"),
  s = n("884691"),
  a = n("787100"),
  c = n("181551"),
  u = n("872834"),
  d = n("780095"),
  l = n("495912");

function f(e) {
  return e && e.__esModule ? e.default : e
}
let p = new WeakMap;

function h(e) {
  return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e
}

function g(e, t, n) {
  let r = p.get(e);
  if (!r) throw Error("Unknown grid");
  return "".concat(r, "-").concat(h(t), "-").concat(h(n))
}

function b(e, t) {
  return [...e.collection.rowHeaderColumnKeys].map(n => g(e, t, n)).join(" ")
}
var v = {},
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
  z = {},
  K = {},
  V = {},
  U = {},
  q = {},
  H = {},
  G = {},
  W = {},
  Z = {},
  Y = {},
  X = {},
  $ = {};
v = {
  "ar-AE": m = {
    ascending: "تصاعدي",
    ascendingSort: e => "ترتيب حسب العمود ".concat(e.columnName, " بترتيب تصاعدي"),
    columnSize: e => "".concat(e.value, " بالبكسل"),
    descending: "تنازلي",
    descendingSort: e => "ترتيب حسب العمود ".concat(e.columnName, " بترتيب تنازلي"),
    resizerDescription: "اضغط على مفتاح Enter لبدء تغيير الحجم",
    select: "تحديد",
    selectAll: "تحديد الكل",
    sortable: "عمود قابل للترتيب"
  },
  "bg-BG": y = {
    ascending: "възходящ",
    ascendingSort: e => "сортирано по колона ".concat(e.columnName, " във възходящ ред"),
    columnSize: e => "".concat(e.value, " пиксела"),
    descending: "низходящ",
    descendingSort: e => "сортирано по колона ".concat(e.columnName, " в низходящ ред"),
    resizerDescription: "Натиснете „Enter“, за да започнете да преоразмерявате",
    select: "Изберете",
    selectAll: "Изберете всичко",
    sortable: "сортираща колона"
  },
  "cs-CZ": x = {
    ascending: "vzestupně",
    ascendingSort: e => "řazeno vzestupně podle sloupce ".concat(e.columnName),
    columnSize: e => "".concat(e.value, " pixelů"),
    descending: "sestupně",
    descendingSort: e => "řazeno sestupně podle sloupce ".concat(e.columnName),
    resizerDescription: "Stisknut\xedm kl\xe1vesy Enter začnete měnit velikost",
    select: "Vybrat",
    selectAll: "Vybrat vše",
    sortable: "sloupec s možnost\xed řazen\xed"
  },
  "da-DK": w = {
    ascending: "stigende",
    ascendingSort: e => "sorteret efter kolonne ".concat(e.columnName, " i stigende r\xe6kkef\xf8lge"),
    columnSize: e => "".concat(e.value, " pixels"),
    descending: "faldende",
    descendingSort: e => "sorteret efter kolonne ".concat(e.columnName, " i faldende r\xe6kkef\xf8lge"),
    resizerDescription: "Tryk p\xe5 Enter for at \xe6ndre st\xf8rrelse",
    select: "V\xe6lg",
    selectAll: "V\xe6lg alle",
    sortable: "sorterbar kolonne"
  },
  "de-DE": S = {
    ascending: "aufsteigend",
    ascendingSort: e => "sortiert nach Spalte ".concat(e.columnName, " in aufsteigender Reihenfolge"),
    columnSize: e => "".concat(e.value, " Pixel"),
    descending: "absteigend",
    descendingSort: e => "sortiert nach Spalte ".concat(e.columnName, " in absteigender Reihenfolge"),
    resizerDescription: "Eingabetaste zum Starten der Gr\xf6\xdfen\xe4nderung dr\xfccken",
    select: "Ausw\xe4hlen",
    selectAll: "Alles ausw\xe4hlen",
    sortable: "sortierbare Spalte"
  },
  "el-GR": k = {
    ascending: "αύξουσα",
    ascendingSort: e => "διαλογή ανά στήλη ".concat(e.columnName, " σε αύξουσα σειρά"),
    columnSize: e => "".concat(e.value, " pixel"),
    descending: "φθίνουσα",
    descendingSort: e => "διαλογή ανά στήλη ".concat(e.columnName, " σε φθίνουσα σειρά"),
    resizerDescription: "Πατήστε Enter για έναρξη της αλλαγής μεγέθους",
    select: "Επιλογή",
    selectAll: "Επιλογή όλων",
    sortable: "Στήλη διαλογής"
  },
  "en-US": _ = {
    select: "Select",
    selectAll: "Select All",
    sortable: "sortable column",
    ascending: "ascending",
    descending: "descending",
    ascendingSort: e => "sorted by column ".concat(e.columnName, " in ascending order"),
    descendingSort: e => "sorted by column ".concat(e.columnName, " in descending order"),
    columnSize: e => "".concat(e.value, " pixels"),
    resizerDescription: "Press Enter to start resizing"
  },
  "es-ES": E = {
    ascending: "de subida",
    ascendingSort: e => "ordenado por columna ".concat(e.columnName, " en orden de subida"),
    columnSize: e => "".concat(e.value, " p\xedxeles"),
    descending: "de bajada",
    descendingSort: e => "ordenado por columna ".concat(e.columnName, " en orden de bajada"),
    resizerDescription: "Pulse Intro para empezar a redimensionar",
    select: "Seleccionar",
    selectAll: "Seleccionar todos",
    sortable: "columna ordenable"
  },
  "et-EE": M = {
    ascending: "t\xf5usev j\xe4rjestus",
    ascendingSort: e => "sorditud veeru j\xe4rgi ".concat(e.columnName, " t\xf5usvas j\xe4rjestuses"),
    columnSize: e => "".concat(e.value, " pikslit"),
    descending: "laskuv j\xe4rjestus",
    descendingSort: e => "sorditud veeru j\xe4rgi ".concat(e.columnName, " laskuvas j\xe4rjestuses"),
    resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
    select: "Vali",
    selectAll: "Vali k\xf5ik",
    sortable: "sorditav veerg"
  },
  "fi-FI": D = {
    ascending: "nouseva",
    ascendingSort: e => "lajiteltu sarakkeen ".concat(e.columnName, " mukaan nousevassa j\xe4rjestyksess\xe4"),
    columnSize: e => "".concat(e.value, " pikseli\xe4"),
    descending: "laskeva",
    descendingSort: e => "lajiteltu sarakkeen ".concat(e.columnName, " mukaan laskevassa j\xe4rjestyksess\xe4"),
    resizerDescription: "Aloita koon muutos painamalla Enter-n\xe4pp\xe4int\xe4",
    select: "Valitse",
    selectAll: "Valitse kaikki",
    sortable: "lajiteltava sarake"
  },
  "fr-FR": C = {
    ascending: "croissant",
    ascendingSort: e => "tri\xe9 en fonction de la colonne\xa0".concat(e.columnName, " par ordre croissant"),
    columnSize: e => "".concat(e.value, "\xa0pixels"),
    descending: "d\xe9croissant",
    descendingSort: e => "tri\xe9 en fonction de la colonne\xa0".concat(e.columnName, " par ordre d\xe9croissant"),
    resizerDescription: "Appuyez sur Entr\xe9e pour commencer le redimensionnement.",
    select: "S\xe9lectionner",
    selectAll: "S\xe9lectionner tout",
    sortable: "colonne triable"
  },
  "he-IL": P = {
    ascending: "עולה",
    ascendingSort: e => "מוין לפי עמודה ".concat(e.columnName, " בסדר עולה"),
    columnSize: e => "".concat(e.value, " פיקסלים"),
    descending: "יורד",
    descendingSort: e => "מוין לפי עמודה ".concat(e.columnName, " בסדר יורד"),
    resizerDescription: "הקש Enter כדי לשנות את הגודל",
    select: "בחר",
    selectAll: "בחר הכול",
    sortable: "עמודה שניתן למיין"
  },
  "hr-HR": T = {
    ascending: "rastući",
    ascendingSort: e => "razvrstano po stupcima ".concat(e.columnName, " rastućem redoslijedom"),
    columnSize: e => "".concat(e.value, " piksela"),
    descending: "padajući",
    descendingSort: e => "razvrstano po stupcima ".concat(e.columnName, " padajućim redoslijedom"),
    resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
    select: "Odaberite",
    selectAll: "Odaberite sve",
    sortable: "stupac koji se može razvrstati"
  },
  "hu-HU": A = {
    ascending: "n\xf6vekvő",
    ascendingSort: e => "rendezve a(z) ".concat(e.columnName, " oszlop szerint, n\xf6vekvő sorrendben"),
    columnSize: e => "".concat(e.value, " k\xe9ppont"),
    descending: "cs\xf6kkenő",
    descendingSort: e => "rendezve a(z) ".concat(e.columnName, " oszlop szerint, cs\xf6kkenő sorrendben"),
    resizerDescription: "Nyomja le az Enter billentyűt az \xe1tm\xe9retez\xe9s megkezd\xe9s\xe9hez",
    select: "Kijel\xf6l\xe9s",
    selectAll: "\xd6sszes kijel\xf6l\xe9se",
    sortable: "rendezendő oszlop"
  },
  "it-IT": R = {
    ascending: "crescente",
    ascendingSort: e => "in ordine crescente in base alla colonna ".concat(e.columnName),
    columnSize: e => "".concat(e.value, " pixel"),
    descending: "decrescente",
    descendingSort: e => "in ordine decrescente in base alla colonna ".concat(e.columnName),
    resizerDescription: "Premi Invio per iniziare a ridimensionare",
    select: "Seleziona",
    selectAll: "Seleziona tutto",
    sortable: "colonna ordinabile"
  },
  "ja-JP": I = {
    ascending: "昇順",
    ascendingSort: e => "列 ".concat(e.columnName, " を昇順で並べ替え"),
    columnSize: e => "".concat(e.value, " ピクセル"),
    descending: "降順",
    descendingSort: e => "列 ".concat(e.columnName, " を降順で並べ替え"),
    resizerDescription: "Enter キーを押してサイズ変更を開始",
    select: "選択",
    selectAll: "すべて選択",
    sortable: "並べ替え可能な列"
  },
  "ko-KR": O = {
    ascending: "오름차순",
    ascendingSort: e => "".concat(e.columnName, " 열을 기준으로 오름차순으로 정렬됨"),
    columnSize: e => "".concat(e.value, " 픽셀"),
    descending: "내림차순",
    descendingSort: e => "".concat(e.columnName, " 열을 기준으로 내림차순으로 정렬됨"),
    resizerDescription: "크기 조정을 시작하려면 Enter를 누르세요.",
    select: "선택",
    selectAll: "모두 선택",
    sortable: "정렬 가능한 열"
  },
  "lt-LT": j = {
    ascending: "didėjančia tvarka",
    ascendingSort: e => "surikiuota pagal stulpelį ".concat(e.columnName, " didėjančia tvarka"),
    columnSize: e => "".concat(e.value, " piks."),
    descending: "mažėjančia tvarka",
    descendingSort: e => "surikiuota pagal stulpelį ".concat(e.columnName, " mažėjančia tvarka"),
    resizerDescription: "Paspauskite „Enter“, kad pradėtumėte keisti dydį",
    select: "Pasirinkti",
    selectAll: "Pasirinkti viską",
    sortable: "rikiuojamas stulpelis"
  },
  "lv-LV": N = {
    ascending: "augošā secībā",
    ascendingSort: e => "kārtots pēc kolonnas ".concat(e.columnName, " augošā secībā"),
    columnSize: e => "".concat(e.value, " pikseļi"),
    descending: "dilstošā secībā",
    descendingSort: e => "kārtots pēc kolonnas ".concat(e.columnName, " dilstošā secībā"),
    resizerDescription: "Nospiediet Enter, lai sāktu izmēru mainīšanu",
    select: "Atlasīt",
    selectAll: "Atlasīt visu",
    sortable: "kārtojamā kolonna"
  },
  "nb-NO": L = {
    ascending: "stigende",
    ascendingSort: e => "sortert etter kolonne ".concat(e.columnName, " i stigende rekkef\xf8lge"),
    columnSize: e => "".concat(e.value, " piksler"),
    descending: "synkende",
    descendingSort: e => "sortert etter kolonne ".concat(e.columnName, " i synkende rekkef\xf8lge"),
    resizerDescription: "Trykk p\xe5 Enter for \xe5 starte st\xf8rrelsesendring",
    select: "Velg",
    selectAll: "Velg alle",
    sortable: "kolonne som kan sorteres"
  },
  "nl-NL": F = {
    ascending: "oplopend",
    ascendingSort: e => "gesorteerd in oplopende volgorde in kolom ".concat(e.columnName),
    columnSize: e => "".concat(e.value, " pixels"),
    descending: "aflopend",
    descendingSort: e => "gesorteerd in aflopende volgorde in kolom ".concat(e.columnName),
    resizerDescription: "Druk op Enter om het formaat te wijzigen",
    select: "Selecteren",
    selectAll: "Alles selecteren",
    sortable: "sorteerbare kolom"
  },
  "pl-PL": B = {
    ascending: "rosnąco",
    ascendingSort: e => "posortowano według kolumny ".concat(e.columnName, " w porządku rosnącym"),
    columnSize: e => "Liczba pikseli: ".concat(e.value),
    descending: "malejąco",
    descendingSort: e => "posortowano według kolumny ".concat(e.columnName, " w porządku malejącym"),
    resizerDescription: "Naciśnij Enter, aby rozpocząć zmienianie rozmiaru",
    select: "Zaznacz",
    selectAll: "Zaznacz wszystko",
    sortable: "kolumna z możliwością sortowania"
  },
  "pt-BR": z = {
    ascending: "crescente",
    ascendingSort: e => "classificado pela coluna ".concat(e.columnName, " em ordem crescente"),
    columnSize: e => "".concat(e.value, " pixels"),
    descending: "decrescente",
    descendingSort: e => "classificado pela coluna ".concat(e.columnName, " em ordem decrescente"),
    resizerDescription: "Pressione Enter para come\xe7ar a redimensionar",
    select: "Selecionar",
    selectAll: "Selecionar tudo",
    sortable: "coluna classific\xe1vel"
  },
  "pt-PT": K = {
    ascending: "ascendente",
    ascendingSort: e => "Ordenar por coluna ".concat(e.columnName, " em ordem ascendente"),
    columnSize: e => "".concat(e.value, " pixels"),
    descending: "descendente",
    descendingSort: e => "Ordenar por coluna ".concat(e.columnName, " em ordem descendente"),
    resizerDescription: "Prima Enter para iniciar o redimensionamento",
    select: "Selecionar",
    selectAll: "Selecionar tudo",
    sortable: "Coluna orden\xe1vel"
  },
  "ro-RO": V = {
    ascending: "crescătoare",
    ascendingSort: e => "sortate după coloana ".concat(e.columnName, " \xeen ordine crescătoare"),
    columnSize: e => "".concat(e.value, " pixeli"),
    descending: "descrescătoare",
    descendingSort: e => "sortate după coloana ".concat(e.columnName, " \xeen ordine descrescătoare"),
    resizerDescription: "Apăsați pe Enter pentru a \xeencepe redimensionarea",
    select: "Selectare",
    selectAll: "Selectare totală",
    sortable: "coloană sortabilă"
  },
  "ru-RU": U = {
    ascending: "возрастание",
    ascendingSort: e => "сортировать столбец ".concat(e.columnName, " в порядке возрастания"),
    columnSize: e => "".concat(e.value, " пикс."),
    descending: "убывание",
    descendingSort: e => "сортировать столбец ".concat(e.columnName, " в порядке убывания"),
    resizerDescription: "Нажмите клавишу Enter для начала изменения размеров",
    select: "Выбрать",
    selectAll: "Выбрать все",
    sortable: "сортируемый столбец"
  },
  "sk-SK": q = {
    ascending: "vzostupne",
    ascendingSort: e => "zoraden\xe9 zostupne podľa stĺpca ".concat(e.columnName),
    columnSize: e => "Počet pixelov: ".concat(e.value),
    descending: "zostupne",
    descendingSort: e => "zoraden\xe9 zostupne podľa stĺpca ".concat(e.columnName),
    resizerDescription: "Stlačen\xedm kl\xe1vesu Enter začnete zmenu veľkosti",
    select: "Vybrať",
    selectAll: "Vybrať všetko",
    sortable: "zoraditeľn\xfd stĺpec"
  },
  "sl-SI": H = {
    ascending: "naraščajoče",
    ascendingSort: e => "razvrščeno po stolpcu ".concat(e.columnName, " v naraščajočem vrstnem redu"),
    columnSize: e => "".concat(e.value, " slikovnih pik"),
    descending: "padajoče",
    descendingSort: e => "razvrščeno po stolpcu ".concat(e.columnName, " v padajočem vrstnem redu"),
    resizerDescription: "Pritisnite tipko Enter da začnete spreminjati velikost",
    select: "Izberite",
    selectAll: "Izberite vse",
    sortable: "razvrstljivi stolpec"
  },
  "sr-SP": G = {
    ascending: "rastući",
    ascendingSort: e => "sortirano po kolonama ".concat(e.columnName, " padajućim redosledom"),
    columnSize: e => "".concat(e.value, " piksela"),
    descending: "padajući",
    descendingSort: e => "sortirano po kolonama ".concat(e.columnName, " padajućim redosledom"),
    resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
    select: "Izaberite",
    selectAll: "Izaberite sve",
    sortable: "kolona koja se može sortirati"
  },
  "sv-SE": W = {
    ascending: "stigande",
    ascendingSort: e => "sorterat p\xe5 kolumn ".concat(e.columnName, " i stigande ordning"),
    columnSize: e => "".concat(e.value, " pixlar"),
    descending: "fallande",
    descendingSort: e => "sorterat p\xe5 kolumn ".concat(e.columnName, " i fallande ordning"),
    resizerDescription: "Tryck p\xe5 Retur f\xf6r att b\xf6rja \xe4ndra storlek",
    select: "Markera",
    selectAll: "Markera allt",
    sortable: "sorterbar kolumn"
  },
  "tr-TR": Z = {
    ascending: "artan sırada",
    ascendingSort: e => "".concat(e.columnName, " s\xfctuna g\xf6re artan d\xfczende sırala"),
    columnSize: e => "".concat(e.value, " piksel"),
    descending: "azalan sırada",
    descendingSort: e => "".concat(e.columnName, " s\xfctuna g\xf6re azalan d\xfczende sırala"),
    resizerDescription: "Yeniden boyutlandırmak i\xe7in Enter'a basın",
    select: "Se\xe7",
    selectAll: "T\xfcm\xfcn\xfc Se\xe7",
    sortable: "Sıralanabilir s\xfctun"
  },
  "uk-UA": Y = {
    ascending: "висхідний",
    ascendingSort: e => "відсортовано за стовпцем ".concat(e.columnName, " у висхідному порядку"),
    columnSize: e => "".concat(e.value, " пікс."),
    descending: "низхідний",
    descendingSort: e => "відсортовано за стовпцем ".concat(e.columnName, " у низхідному порядку"),
    resizerDescription: "Натисніть Enter, щоб почати зміну розміру",
    select: "Вибрати",
    selectAll: "Вибрати все",
    sortable: "сортувальний стовпець"
  },
  "zh-CN": X = {
    ascending: "升序",
    ascendingSort: e => "按列 ".concat(e.columnName, " 升序排序"),
    columnSize: e => "".concat(e.value, " 像素"),
    descending: "降序",
    descendingSort: e => "按列 ".concat(e.columnName, " 降序排序"),
    resizerDescription: "按“输入”键开始调整大小。",
    select: "选择",
    selectAll: "全选",
    sortable: "可排序的列"
  },
  "zh-TW": $ = {
    ascending: "遞增",
    ascendingSort: e => "已依據「".concat(e.columnName, "」欄遞增排序"),
    columnSize: e => "".concat(e.value, " 像素"),
    descending: "遞減",
    descendingSort: e => "已依據「".concat(e.columnName, "」欄遞減排序"),
    resizerDescription: "按 Enter 鍵以開始調整大小",
    select: "選取",
    selectAll: "全選",
    sortable: "可排序的欄"
  }
};
class J extends r.GridKeyboardDelegate {
  isCell(e) {
    return "cell" === e.type || "rowheader" === e.type || "column" === e.type
  }
  getKeyBelow(e) {
    let t = this.collection.getItem(e);
    if (t) {
      if ("column" === t.type) {
        let e = (0, u.getFirstItem)((0, u.getChildNodes)(t, this.collection));
        if (e) return e.key;
        let n = this.getFirstKey();
        if (null == n) return;
        let r = this.collection.getItem(n);
        return (0, u.getNthItem)((0, u.getChildNodes)(r, this.collection), t.index).key
      }
      return super.getKeyBelow(e)
    }
  }
  getKeyAbove(e) {
    let t = this.collection.getItem(e);
    if (!t) return;
    if ("column" === t.type) {
      let e = this.collection.getItem(t.parentKey);
      return e && "column" === e.type ? e.key : void 0
    }
    let n = super.getKeyAbove(e);
    return null != n && "headerrow" !== this.collection.getItem(n).type ? n : this.isCell(t) ? this.collection.columns[t.index].key : this.collection.columns[0].key
  }
  findNextColumnKey(e) {
    let t = this.findNextKey(e.key, e => "column" === e.type);
    if (null != t) return t;
    let n = this.collection.headerRows[e.level];
    for (let e of (0, u.getChildNodes)(n, this.collection))
      if ("column" === e.type) return e.key
  }
  findPreviousColumnKey(e) {
    let t = this.findPreviousKey(e.key, e => "column" === e.type);
    if (null != t) return t;
    let n = this.collection.headerRows[e.level],
      r = [...(0, u.getChildNodes)(n, this.collection)];
    for (let e = r.length - 1; e >= 0; e--) {
      let t = r[e];
      if ("column" === t.type) return t.key
    }
  }
  getKeyRightOf(e) {
    let t = this.collection.getItem(e);
    if (t) return "column" === t.type ? "rtl" === this.direction ? this.findPreviousColumnKey(t) : this.findNextColumnKey(t) : super.getKeyRightOf(e)
  }
  getKeyLeftOf(e) {
    let t = this.collection.getItem(e);
    if (t) return "column" === t.type ? "rtl" === this.direction ? this.findNextColumnKey(t) : this.findPreviousColumnKey(t) : super.getKeyLeftOf(e)
  }
  getKeyForSearch(e, t) {
    if (!this.collator) return null;
    let n = this.collection,
      r = null != t ? t : this.getFirstKey();
    if (null == r) return null;
    let i = n.getItem(r);
    "cell" === i.type && (r = i.parentKey);
    let o = !1;
    for (; null != r;) {
      let s = n.getItem(r);
      for (let r of (0, u.getChildNodes)(s, this.collection)) {
        let o = n.columns[r.index];
        if (n.rowHeaderColumnKeys.has(o.key) && r.textValue) {
          let o = r.textValue.slice(0, e.length);
          if (0 === this.collator.compare(o, e)) return "cell" === (null != t ? n.getItem(t) : i).type ? r.key : s.key
        }
      }
      null == (r = this.getKeyBelow(r)) && !o && (r = this.getFirstKey(), o = !0)
    }
    return null
  }
}

function Q(e, t, n) {
  let {
    keyboardDelegate: u,
    isVirtualized: d,
    layout: l
  } = e, h = (0, c.useCollator)({
    usage: "search",
    sensitivity: "base"
  }), {
    direction: g
  } = (0, c.useLocale)(), b = t.selectionManager.disabledBehavior, m = (0, s.useMemo)(() => u || new J({
    collection: t.collection,
    disabledKeys: "selection" === b ? new Set : t.disabledKeys,
    ref: n,
    direction: g,
    collator: h,
    layout: l
  }), [u, t.collection, t.disabledKeys, b, n, g, h, l]), y = (0, o.useId)(e.id);
  p.set(t, y);
  let {
    gridProps: x
  } = (0, r.useGrid)({
    ...e,
    id: y,
    keyboardDelegate: m
  }, t, n);
  d && (x["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), (0, a.tableNestedRows)() && "expandedKeys" in t && (x.role = "treegrid");
  let {
    column: w,
    direction: S
  } = t.sortDescriptor || {}, k = (0, c.useLocalizedStringFormatter)(f(v)), _ = (0, s.useMemo)(() => {
    var e;
    let n = null === (e = t.collection.columns.find(e => e.key === w)) || void 0 === e ? void 0 : e.textValue;
    return S && w ? k.format("".concat(S, "Sort"), {
      columnName: n
    }) : void 0
  }, [S, w, t.collection.columns]), E = (0, o.useDescription)(_);
  return (0, o.useUpdateEffect)(() => {
    (0, i.announce)(_, "assertive", 500)
  }, [_]), {
    gridProps: (0, o.mergeProps)(x, E, {
      "aria-describedby": [E["aria-describedby"], x["aria-describedby"]].filter(Boolean).join(" ")
    })
  }
}

function ee(e, t, n) {
  var i, a;
  let u;
  let {
    node: g
  } = e, b = g.props.allowsSorting, {
    gridCellProps: m
  } = (0, r.useGridCell)({
    ...e,
    focusMode: "child"
  }, t, n), y = g.props.isSelectionCell && "single" === t.selectionManager.selectionMode, {
    pressProps: x
  } = (0, l.usePress)({
    isDisabled: !b || y,
    onPress() {
      t.sort(g.key)
    },
    ref: n
  }), {
    focusableProps: w
  } = (0, d.useFocusable)({}, n), S = null, k = (null === (i = t.sortDescriptor) || void 0 === i ? void 0 : i.column) === g.key, _ = null === (a = t.sortDescriptor) || void 0 === a ? void 0 : a.direction;
  g.props.allowsSorting && !(0, o.isAndroid)() && (S = k ? _ : "none");
  let E = (0, c.useLocalizedStringFormatter)(f(v));
  b && (u = "".concat(E.format("sortable")), k && _ && (0, o.isAndroid)() && (u = "".concat(u, ", ").concat(E.format(_))));
  let M = (0, o.useDescription)(u),
    D = 0 === t.collection.size;
  return (0, s.useEffect)(() => {
    D && t.selectionManager.focusedKey === g.key && t.selectionManager.setFocusedKey(null)
  }, [D, t.selectionManager, g.key]), {
    columnHeaderProps: {
      ...(0, o.mergeProps)(m, x, w, M, D && {
        tabIndex: -1
      }),
      role: "columnheader",
      id: function(e, t) {
        let n = p.get(e);
        if (!n) throw Error("Unknown grid");
        return "".concat(n, "-").concat(h(t))
      }(t, g.key),
      "aria-colspan": g.colspan && g.colspan > 1 ? g.colspan : null,
      "aria-sort": S
    }
  }
}
let et = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};

function en(e, t, n) {
  let {
    node: i,
    isVirtualized: s
  } = e, {
    rowProps: d,
    ...l
  } = (0, r.useGridRow)(e, t, n), {
    direction: f
  } = (0, c.useLocale)();
  s && !((0, a.tableNestedRows)() && "expandedKeys" in t) ? d["aria-rowindex"] = i.index + 1 + t.collection.headerRows.length : delete d["aria-rowindex"];
  let p = {};
  if ((0, a.tableNestedRows)() && "expandedKeys" in t) {
    let e = t.keyMap.get(i.key);
    if (null != e) {
      var h, g, v;
      let n = (null === (h = e.props) || void 0 === h ? void 0 : h.UNSTABLE_childItems) || (null === (g = e.props) || void 0 === g ? void 0 : null === (v = g.children) || void 0 === v ? void 0 : v.length) > t.userColumnCount;
      p = {
        onKeyDown: r => {
          r.key === et.expand[f] && t.selectionManager.focusedKey === e.key && n && "all" !== t.expandedKeys && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), r.stopPropagation()) : r.key === et.collapse[f] && t.selectionManager.focusedKey === e.key && n && ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) && (t.toggleKey(e.key), r.stopPropagation())
        },
        "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(i.key) : void 0,
        "aria-level": e.level,
        "aria-posinset": e.indexOfType + 1,
        "aria-setsize": e.level > 1 ? (0, u.getLastItem)(t.keyMap.get(null == e ? void 0 : e.parentKey).childNodes).indexOfType + 1 : (0, u.getLastItem)(t.keyMap.get(t.collection.body.key).childNodes).indexOfType + 1
      }
    }
  }
  return {
    rowProps: {
      ...(0, o.mergeProps)(d, p),
      "aria-labelledby": b(t, i.key)
    },
    ...l
  }
}

function er(e, t, n) {
  let {
    node: r,
    isVirtualized: i
  } = e, o = {
    role: "row"
  };
  return i && !((0, a.tableNestedRows)() && "expandedKeys" in t) && (o["aria-rowindex"] = r.index + 1), {
    rowProps: o
  }
}

function ei(e, t, n) {
  let {
    gridCellProps: i,
    isPressed: o
  } = (0, r.useGridCell)(e, t, n), s = e.node.column.key;
  return t.collection.rowHeaderColumnKeys.has(s) && (i.role = "rowheader", i.id = g(t, e.node.parentKey, s)), {
    gridCellProps: i,
    isPressed: o
  }
}

function eo(e, t) {
  let {
    key: n
  } = e, {
    checkboxProps: i
  } = (0, r.useGridSelectionCheckbox)(e, t);
  return {
    checkboxProps: {
      ...i,
      "aria-labelledby": "".concat(i.id, " ").concat(b(t, n))
    }
  }
}

function es(e) {
  let {
    isEmpty: t,
    isSelectAll: n,
    selectionMode: r
  } = e.selectionManager, i = (0, c.useLocalizedStringFormatter)(f(v));
  return {
    checkboxProps: {
      "aria-label": i.format("single" === r ? "select" : "selectAll"),
      isSelected: n,
      isDisabled: "multiple" !== r || 0 === e.collection.size,
      isIndeterminate: !t && !n,
      onChange: () => e.selectionManager.toggleSelectAll()
    }
  }
}

function ea() {
  return (0, r.useGridRowGroup)()
}