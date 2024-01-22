"use strict";
n.r(t), n.d(t, {
  useDatePicker: function() {
    return et
  },
  useDateSegment: function() {
    return er
  },
  useDateField: function() {
    return Q
  },
  useTimeField: function() {
    return ee
  },
  useDateRangePicker: function() {
    return ei
  }
}), n("222007");
var r = n("780095"),
  i = n("290895"),
  o = n("884691"),
  s = n("825167"),
  a = n("495912"),
  c = n("181551"),
  u = n("336468"),
  d = n("676231"),
  l = n("170225"),
  f = n("647572");

function p(e) {
  return e && e.__esModule ? e.default : e
}
var h = {},
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
  z = {},
  K = {},
  V = {},
  U = {},
  q = {},
  H = {},
  G = {},
  W = {},
  Z = {};

function Y(e, t, n) {
  let {
    direction: s
  } = (0, c.useLocale)(), u = (0, o.useMemo)(() => (0, r.createFocusManager)(t), [t]), d = () => {
    var e;
    let n = null === (e = window.event) || void 0 === e ? void 0 : e.target,
      i = (0, r.getFocusableTreeWalker)(t.current, {
        tabbable: !0
      });
    if (n && (i.currentNode = n, n = i.previousNode()), !n) {
      let e;
      do(e = i.lastChild()) && (n = e); while (e)
    }
    for (; null == n ? void 0 : n.hasAttribute("data-placeholder");) {
      let e = i.previousNode();
      if (e && e.hasAttribute("data-placeholder")) n = e;
      else break
    }
    n && n.focus()
  }, {
    pressProps: l
  } = (0, a.usePress)({
    preventFocusOnPress: !0,
    allowTextSelectionOnPress: !0,
    onPressStart(e) {
      "mouse" === e.pointerType && d()
    },
    onPress(e) {
      "mouse" !== e.pointerType && d()
    }
  });
  return (0, i.mergeProps)(l, {
    onKeyDown: t => {
      if (!!t.currentTarget.contains(t.target)) {
        if (t.altKey && ("ArrowDown" === t.key || "ArrowUp" === t.key) && "setOpen" in e && (t.preventDefault(), t.stopPropagation(), e.setOpen(!0)), !n) switch (t.key) {
          case "ArrowLeft":
            t.preventDefault(), t.stopPropagation(), "rtl" === s ? u.focusNext() : u.focusPrevious();
            break;
          case "ArrowRight":
            t.preventDefault(), t.stopPropagation(), "rtl" === s ? u.focusPrevious() : u.focusNext()
        }
      }
    }
  })
}
h = {
  "ar-AE": g = {
    calendar: "التقويم",
    day: "يوم",
    dayPeriod: "ص/م",
    endDate: "تاريخ الانتهاء",
    era: "العصر",
    hour: "الساعات",
    minute: "الدقائق",
    month: "الشهر",
    second: "الثواني",
    selectedDateDescription: e => "تاريخ محدد: ".concat(e.date),
    selectedRangeDescription: e => "المدى الزمني المحدد: ".concat(e.startDate, " إلى ").concat(e.endDate),
    selectedTimeDescription: e => "الوقت المحدد: ".concat(e.time),
    startDate: "تاريخ البدء",
    timeZoneName: "التوقيت",
    weekday: "اليوم",
    year: "السنة"
  },
  "bg-BG": b = {
    calendar: "Календар",
    day: "ден",
    dayPeriod: "пр.об./сл.об.",
    endDate: "Крайна дата",
    era: "ера",
    hour: "час",
    minute: "минута",
    month: "месец",
    second: "секунда",
    selectedDateDescription: e => "Избрана дата: ".concat(e.date),
    selectedRangeDescription: e => "Избран диапазон: ".concat(e.startDate, " до ").concat(e.endDate),
    selectedTimeDescription: e => "Избрано време: ".concat(e.time),
    startDate: "Начална дата",
    timeZoneName: "часова зона",
    weekday: "ден от седмицата",
    year: "година"
  },
  "cs-CZ": v = {
    calendar: "Kalend\xe1ř",
    day: "den",
    dayPeriod: "č\xe1st dne",
    endDate: "Konečn\xe9 datum",
    era: "letopočet",
    hour: "hodina",
    minute: "minuta",
    month: "měs\xedc",
    second: "sekunda",
    selectedDateDescription: e => "Vybran\xe9 datum: ".concat(e.date),
    selectedRangeDescription: e => "Vybran\xe9 obdob\xed: ".concat(e.startDate, " až ").concat(e.endDate),
    selectedTimeDescription: e => "Vybran\xfd čas: ".concat(e.time),
    startDate: "Poč\xe1tečn\xed datum",
    timeZoneName: "časov\xe9 p\xe1smo",
    weekday: "den v t\xfddnu",
    year: "rok"
  },
  "da-DK": m = {
    calendar: "Kalender",
    day: "dag",
    dayPeriod: "AM/PM",
    endDate: "Slutdato",
    era: "\xe6ra",
    hour: "time",
    minute: "minut",
    month: "m\xe5ned",
    second: "sekund",
    selectedDateDescription: e => "Valgt dato: ".concat(e.date),
    selectedRangeDescription: e => "Valgt interval: ".concat(e.startDate, " til ").concat(e.endDate),
    selectedTimeDescription: e => "Valgt tidspunkt: ".concat(e.time),
    startDate: "Startdato",
    timeZoneName: "tidszone",
    weekday: "ugedag",
    year: "\xe5r"
  },
  "de-DE": y = {
    calendar: "Kalender",
    day: "Tag",
    dayPeriod: "Tagesh\xe4lfte",
    endDate: "Enddatum",
    era: "Epoche",
    hour: "Stunde",
    minute: "Minute",
    month: "Monat",
    second: "Sekunde",
    selectedDateDescription: e => "Ausgew\xe4hltes Datum: ".concat(e.date),
    selectedRangeDescription: e => "Ausgew\xe4hlter Bereich: ".concat(e.startDate, " bis ").concat(e.endDate),
    selectedTimeDescription: e => "Ausgew\xe4hlte Zeit: ".concat(e.time),
    startDate: "Anfangsdatum",
    timeZoneName: "Zeitzone",
    weekday: "Wochentag",
    year: "Jahr"
  },
  "el-GR": x = {
    calendar: "Ημερολόγιο",
    day: "ημέρα",
    dayPeriod: "π.μ./μ.μ.",
    endDate: "Ημερομηνία λήξης",
    era: "περίοδος",
    hour: "ώρα",
    minute: "λεπτό",
    month: "μήνας",
    second: "δευτερόλεπτο",
    selectedDateDescription: e => "Επιλεγμένη ημερομηνία: ".concat(e.date),
    selectedRangeDescription: e => "Επιλεγμένο εύρος: ".concat(e.startDate, " έως ").concat(e.endDate),
    selectedTimeDescription: e => "Επιλεγμένη ώρα: ".concat(e.time),
    startDate: "Ημερομηνία έναρξης",
    timeZoneName: "ζώνη ώρας",
    weekday: "καθημερινή",
    year: "έτος"
  },
  "en-US": w = {
    era: "era",
    year: "year",
    month: "month",
    day: "day",
    hour: "hour",
    minute: "minute",
    second: "second",
    dayPeriod: "AM/PM",
    calendar: "Calendar",
    startDate: "Start Date",
    endDate: "End Date",
    weekday: "day of the week",
    timeZoneName: "time zone",
    selectedDateDescription: e => "Selected Date: ".concat(e.date),
    selectedRangeDescription: e => "Selected Range: ".concat(e.startDate, " to ").concat(e.endDate),
    selectedTimeDescription: e => "Selected Time: ".concat(e.time)
  },
  "es-ES": S = {
    calendar: "Calendario",
    day: "d\xeda",
    dayPeriod: "a.\xa0m./p.\xa0m.",
    endDate: "Fecha final",
    era: "era",
    hour: "hora",
    minute: "minuto",
    month: "mes",
    second: "segundo",
    selectedDateDescription: e => "Fecha seleccionada: ".concat(e.date),
    selectedRangeDescription: e => "Rango seleccionado: ".concat(e.startDate, " a ").concat(e.endDate),
    selectedTimeDescription: e => "Hora seleccionada: ".concat(e.time),
    startDate: "Fecha de inicio",
    timeZoneName: "zona horaria",
    weekday: "d\xeda de la semana",
    year: "a\xf1o"
  },
  "et-EE": k = {
    calendar: "Kalender",
    day: "p\xe4ev",
    dayPeriod: "enne/p\xe4rast l\xf5unat",
    endDate: "L\xf5ppkuup\xe4ev",
    era: "ajastu",
    hour: "tund",
    minute: "minut",
    month: "kuu",
    second: "sekund",
    selectedDateDescription: e => "Valitud kuup\xe4ev: ".concat(e.date),
    selectedRangeDescription: e => "Valitud vahemik: ".concat(e.startDate, " kuni ").concat(e.endDate),
    selectedTimeDescription: e => "Valitud aeg: ".concat(e.time),
    startDate: "Alguskuup\xe4ev",
    timeZoneName: "ajav\xf6\xf6nd",
    weekday: "n\xe4dalap\xe4ev",
    year: "aasta"
  },
  "fi-FI": _ = {
    calendar: "Kalenteri",
    day: "p\xe4iv\xe4",
    dayPeriod: "vuorokaudenaika",
    endDate: "P\xe4\xe4ttymisp\xe4iv\xe4",
    era: "aikakausi",
    hour: "tunti",
    minute: "minuutti",
    month: "kuukausi",
    second: "sekunti",
    selectedDateDescription: e => "Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ".concat(e.date),
    selectedRangeDescription: e => "Valittu aikav\xe4li: ".concat(e.startDate, " – ").concat(e.endDate),
    selectedTimeDescription: e => "Valittu aika: ".concat(e.time),
    startDate: "Alkamisp\xe4iv\xe4",
    timeZoneName: "aikavy\xf6hyke",
    weekday: "viikonp\xe4iv\xe4",
    year: "vuosi"
  },
  "fr-FR": E = {
    calendar: "Calendrier",
    day: "jour",
    dayPeriod: "cadran",
    endDate: "Date de fin",
    era: "\xe8re",
    hour: "heure",
    minute: "minute",
    month: "mois",
    second: "seconde",
    selectedDateDescription: e => "Date s\xe9lectionn\xe9e\xa0: ".concat(e.date),
    selectedRangeDescription: e => "Plage s\xe9lectionn\xe9e\xa0: ".concat(e.startDate, " au ").concat(e.endDate),
    selectedTimeDescription: e => "Heure choisie\xa0: ".concat(e.time),
    startDate: "Date de d\xe9but",
    timeZoneName: "fuseau horaire",
    weekday: "jour de la semaine",
    year: "ann\xe9e"
  },
  "he-IL": M = {
    calendar: "לוח שנה",
    day: "יום",
    dayPeriod: "לפנה״צ/אחה״צ",
    endDate: "תאריך סיום",
    era: "תקופה",
    hour: "שעה",
    minute: "דקה",
    month: "חודש",
    second: "שנייה",
    selectedDateDescription: e => "תאריך נבחר: ".concat(e.date),
    selectedRangeDescription: e => "טווח נבחר: ".concat(e.startDate, " עד ").concat(e.endDate),
    selectedTimeDescription: e => "זמן נבחר: ".concat(e.time),
    startDate: "תאריך התחלה",
    timeZoneName: "אזור זמן",
    weekday: "יום בשבוע",
    year: "שנה"
  },
  "hr-HR": D = {
    calendar: "Kalendar",
    day: "dan",
    dayPeriod: "AM/PM",
    endDate: "Datum završetka",
    era: "era",
    hour: "sat",
    minute: "minuta",
    month: "mjesec",
    second: "sekunda",
    selectedDateDescription: e => "Odabrani datum: ".concat(e.date),
    selectedRangeDescription: e => "Odabrani raspon: ".concat(e.startDate, " do ").concat(e.endDate),
    selectedTimeDescription: e => "Odabrano vrijeme: ".concat(e.time),
    startDate: "Datum početka",
    timeZoneName: "vremenska zona",
    weekday: "dan u tjednu",
    year: "godina"
  },
  "hu-HU": C = {
    calendar: "Napt\xe1r",
    day: "nap",
    dayPeriod: "napszak",
    endDate: "Befejező d\xe1tum",
    era: "\xe9ra",
    hour: "\xf3ra",
    minute: "perc",
    month: "h\xf3nap",
    second: "m\xe1sodperc",
    selectedDateDescription: e => "Kijel\xf6lt d\xe1tum: ".concat(e.date),
    selectedRangeDescription: e => "Kijel\xf6lt tartom\xe1ny: ".concat(e.startDate, "–").concat(e.endDate),
    selectedTimeDescription: e => "Kijel\xf6lt idő: ".concat(e.time),
    startDate: "Kezdő d\xe1tum",
    timeZoneName: "időz\xf3na",
    weekday: "h\xe9t napja",
    year: "\xe9v"
  },
  "it-IT": P = {
    calendar: "Calendario",
    day: "giorno",
    dayPeriod: "AM/PM",
    endDate: "Data finale",
    era: "era",
    hour: "ora",
    minute: "minuto",
    month: "mese",
    second: "secondo",
    selectedDateDescription: e => "Data selezionata: ".concat(e.date),
    selectedRangeDescription: e => "Intervallo selezionato: da ".concat(e.startDate, " a ").concat(e.endDate),
    selectedTimeDescription: e => "Ora selezionata: ".concat(e.time),
    startDate: "Data iniziale",
    timeZoneName: "fuso orario",
    weekday: "giorno della settimana",
    year: "anno"
  },
  "ja-JP": T = {
    calendar: "カレンダー",
    day: "日",
    dayPeriod: "午前/午後",
    endDate: "終了日",
    era: "時代",
    hour: "時",
    minute: "分",
    month: "月",
    second: "秒",
    selectedDateDescription: e => "選択した日付 : ".concat(e.date),
    selectedRangeDescription: e => "選択範囲 : ".concat(e.startDate, " から ").concat(e.endDate),
    selectedTimeDescription: e => "選択した時間 : ".concat(e.time),
    startDate: "開始日",
    timeZoneName: "タイムゾーン",
    weekday: "曜日",
    year: "年"
  },
  "ko-KR": A = {
    calendar: "달력",
    day: "일",
    dayPeriod: "오전/오후",
    endDate: "종료 날짜",
    era: "연호",
    hour: "시",
    minute: "분",
    month: "월",
    second: "초",
    selectedDateDescription: e => "선택 일자: ".concat(e.date),
    selectedRangeDescription: e => "선택 범위: ".concat(e.startDate, " ~ ").concat(e.endDate),
    selectedTimeDescription: e => "선택 시간: ".concat(e.time),
    startDate: "시작 날짜",
    timeZoneName: "시간대",
    weekday: "요일",
    year: "년"
  },
  "lt-LT": R = {
    calendar: "Kalendorius",
    day: "diena",
    dayPeriod: "iki pietų / po pietų",
    endDate: "Pabaigos data",
    era: "era",
    hour: "valanda",
    minute: "minutė",
    month: "mėnuo",
    second: "sekundė",
    selectedDateDescription: e => "Pasirinkta data: ".concat(e.date),
    selectedRangeDescription: e => "Pasirinktas intervalas: nuo ".concat(e.startDate, " iki ").concat(e.endDate),
    selectedTimeDescription: e => "Pasirinktas laikas: ".concat(e.time),
    startDate: "Pradžios data",
    timeZoneName: "laiko juosta",
    weekday: "savaitės diena",
    year: "metai"
  },
  "lv-LV": I = {
    calendar: "Kalendārs",
    day: "diena",
    dayPeriod: "priekšpusdienā/pēcpusdienā",
    endDate: "Beigu datums",
    era: "ēra",
    hour: "stundas",
    minute: "minūtes",
    month: "mēnesis",
    second: "sekundes",
    selectedDateDescription: e => "Atlasītais datums: ".concat(e.date),
    selectedRangeDescription: e => "Atlasītais diapazons: no ".concat(e.startDate, " līdz ").concat(e.endDate),
    selectedTimeDescription: e => "Atlasītais laiks: ".concat(e.time),
    startDate: "Sākuma datums",
    timeZoneName: "laika josla",
    weekday: "nedēļas diena",
    year: "gads"
  },
  "nb-NO": O = {
    calendar: "Kalender",
    day: "dag",
    dayPeriod: "a.m./p.m.",
    endDate: "Sluttdato",
    era: "tidsalder",
    hour: "time",
    minute: "minutt",
    month: "m\xe5ned",
    second: "sekund",
    selectedDateDescription: e => "Valgt dato: ".concat(e.date),
    selectedRangeDescription: e => "Valgt omr\xe5de: ".concat(e.startDate, " til ").concat(e.endDate),
    selectedTimeDescription: e => "Valgt tid: ".concat(e.time),
    startDate: "Startdato",
    timeZoneName: "tidssone",
    weekday: "ukedag",
    year: "\xe5r"
  },
  "nl-NL": j = {
    calendar: "Kalender",
    day: "dag",
    dayPeriod: "a.m./p.m.",
    endDate: "Einddatum",
    era: "tijdperk",
    hour: "uur",
    minute: "minuut",
    month: "maand",
    second: "seconde",
    selectedDateDescription: e => "Geselecteerde datum: ".concat(e.date),
    selectedRangeDescription: e => "Geselecteerd bereik: ".concat(e.startDate, " tot ").concat(e.endDate),
    selectedTimeDescription: e => "Geselecteerde tijd: ".concat(e.time),
    startDate: "Startdatum",
    timeZoneName: "tijdzone",
    weekday: "dag van de week",
    year: "jaar"
  },
  "pl-PL": N = {
    calendar: "Kalendarz",
    day: "dzień",
    dayPeriod: "rano / po południu / wieczorem",
    endDate: "Data końcowa",
    era: "era",
    hour: "godzina",
    minute: "minuta",
    month: "miesiąc",
    second: "sekunda",
    selectedDateDescription: e => "Wybrana data: ".concat(e.date),
    selectedRangeDescription: e => "Wybrany zakres: ".concat(e.startDate, " do ").concat(e.endDate),
    selectedTimeDescription: e => "Wybrany czas: ".concat(e.time),
    startDate: "Data początkowa",
    timeZoneName: "strefa czasowa",
    weekday: "dzień tygodnia",
    year: "rok"
  },
  "pt-BR": L = {
    calendar: "Calend\xe1rio",
    day: "dia",
    dayPeriod: "AM/PM",
    endDate: "Data final",
    era: "era",
    hour: "hora",
    minute: "minuto",
    month: "m\xeas",
    second: "segundo",
    selectedDateDescription: e => "Data selecionada: ".concat(e.date),
    selectedRangeDescription: e => "Intervalo selecionado: ".concat(e.startDate, " a ").concat(e.endDate),
    selectedTimeDescription: e => "Hora selecionada: ".concat(e.time),
    startDate: "Data inicial",
    timeZoneName: "fuso hor\xe1rio",
    weekday: "dia da semana",
    year: "ano"
  },
  "pt-PT": F = {
    calendar: "Calend\xe1rio",
    day: "dia",
    dayPeriod: "am/pm",
    endDate: "Data de T\xe9rmino",
    era: "era",
    hour: "hora",
    minute: "minuto",
    month: "m\xeas",
    second: "segundo",
    selectedDateDescription: e => "Data selecionada: ".concat(e.date),
    selectedRangeDescription: e => "Intervalo selecionado: ".concat(e.startDate, " a ").concat(e.endDate),
    selectedTimeDescription: e => "Hora selecionada: ".concat(e.time),
    startDate: "Data de In\xedcio",
    timeZoneName: "fuso hor\xe1rio",
    weekday: "dia da semana",
    year: "ano"
  },
  "ro-RO": B = {
    calendar: "Calendar",
    day: "zi",
    dayPeriod: "a.m/p.m.",
    endDate: "Dată final",
    era: "eră",
    hour: "oră",
    minute: "minut",
    month: "lună",
    second: "secundă",
    selectedDateDescription: e => "Dată selectată: ".concat(e.date),
    selectedRangeDescription: e => "Interval selectat: de la ".concat(e.startDate, " p\xe2nă la ").concat(e.endDate),
    selectedTimeDescription: e => "Ora selectată: ".concat(e.time),
    startDate: "Dată \xeenceput",
    timeZoneName: "fus orar",
    weekday: "ziua din săptăm\xe2nă",
    year: "an"
  },
  "ru-RU": z = {
    calendar: "Календарь",
    day: "день",
    dayPeriod: "AM/PM",
    endDate: "Дата окончания",
    era: "эра",
    hour: "час",
    minute: "минута",
    month: "месяц",
    second: "секунда",
    selectedDateDescription: e => "Выбранная дата: ".concat(e.date),
    selectedRangeDescription: e => "Выбранный диапазон: с ".concat(e.startDate, " по ").concat(e.endDate),
    selectedTimeDescription: e => "Выбранное время: ".concat(e.time),
    startDate: "Дата начала",
    timeZoneName: "часовой пояс",
    weekday: "день недели",
    year: "год"
  },
  "sk-SK": K = {
    calendar: "Kalend\xe1r",
    day: "deň",
    dayPeriod: "AM/PM",
    endDate: "D\xe1tum ukončenia",
    era: "letopočet",
    hour: "hodina",
    minute: "min\xfata",
    month: "mesiac",
    second: "sekunda",
    selectedDateDescription: e => "Vybrat\xfd d\xe1tum: ".concat(e.date),
    selectedRangeDescription: e => "Vybrat\xfd rozsah: od ".concat(e.startDate, " do ").concat(e.endDate),
    selectedTimeDescription: e => "Vybrat\xfd čas: ".concat(e.time),
    startDate: "D\xe1tum začatia",
    timeZoneName: "časov\xe9 p\xe1smo",
    weekday: "deň t\xfdždňa",
    year: "rok"
  },
  "sl-SI": V = {
    calendar: "Koledar",
    day: "dan",
    dayPeriod: "dop/pop",
    endDate: "Datum konca",
    era: "doba",
    hour: "ura",
    minute: "minuta",
    month: "mesec",
    second: "sekunda",
    selectedDateDescription: e => "Izbrani datum: ".concat(e.date),
    selectedRangeDescription: e => "Izbrano območje: ".concat(e.startDate, " do ").concat(e.endDate),
    selectedTimeDescription: e => "Izbrani čas: ".concat(e.time),
    startDate: "Datum začetka",
    timeZoneName: "časovni pas",
    weekday: "dan v tednu",
    year: "leto"
  },
  "sr-SP": U = {
    calendar: "Kalendar",
    day: "дан",
    dayPeriod: "пре подне/по подне",
    endDate: "Datum završetka",
    era: "ера",
    hour: "сат",
    minute: "минут",
    month: "месец",
    second: "секунд",
    selectedDateDescription: e => "Izabrani datum: ".concat(e.date),
    selectedRangeDescription: e => "Izabrani opseg: od ".concat(e.startDate, " do ").concat(e.endDate),
    selectedTimeDescription: e => "Izabrano vreme: ".concat(e.time),
    startDate: "Datum početka",
    timeZoneName: "временска зона",
    weekday: "дан у недељи",
    year: "година"
  },
  "sv-SE": q = {
    calendar: "Kalender",
    day: "dag",
    dayPeriod: "fm/em",
    endDate: "Slutdatum",
    era: "era",
    hour: "timme",
    minute: "minut",
    month: "m\xe5nad",
    second: "sekund",
    selectedDateDescription: e => "Valt datum: ".concat(e.date),
    selectedRangeDescription: e => "Valt intervall: ".concat(e.startDate, " till ").concat(e.endDate),
    selectedTimeDescription: e => "Vald tid: ".concat(e.time),
    startDate: "Startdatum",
    timeZoneName: "tidszon",
    weekday: "veckodag",
    year: "\xe5r"
  },
  "tr-TR": H = {
    calendar: "Takvim",
    day: "g\xfcn",
    dayPeriod: "\xd6\xd6/\xd6S",
    endDate: "Bitiş Tarihi",
    era: "\xe7ağ",
    hour: "saat",
    minute: "dakika",
    month: "ay",
    second: "saniye",
    selectedDateDescription: e => "Se\xe7ilen Tarih: ".concat(e.date),
    selectedRangeDescription: e => "Se\xe7ilen Aralık: ".concat(e.startDate, " - ").concat(e.endDate),
    selectedTimeDescription: e => "Se\xe7ilen Zaman: ".concat(e.time),
    startDate: "Başlangı\xe7 Tarihi",
    timeZoneName: "saat dilimi",
    weekday: "haftanın g\xfcn\xfc",
    year: "yıl"
  },
  "uk-UA": G = {
    calendar: "Календар",
    day: "день",
    dayPeriod: "дп/пп",
    endDate: "Дата завершення",
    era: "ера",
    hour: "година",
    minute: "хвилина",
    month: "місяць",
    second: "секунда",
    selectedDateDescription: e => "Вибрана дата: ".concat(e.date),
    selectedRangeDescription: e => "Вибраний діапазон: ".concat(e.startDate, " — ").concat(e.endDate),
    selectedTimeDescription: e => "Вибраний час: ".concat(e.time),
    startDate: "Дата початку",
    timeZoneName: "часовий пояс",
    weekday: "день тижня",
    year: "рік"
  },
  "zh-CN": W = {
    calendar: "日历",
    day: "日",
    dayPeriod: "上午/下午",
    endDate: "结束日期",
    era: "纪元",
    hour: "小时",
    minute: "分钟",
    month: "月",
    second: "秒",
    selectedDateDescription: e => "选定的日期：".concat(e.date),
    selectedRangeDescription: e => "选定的范围：".concat(e.startDate, " 至 ").concat(e.endDate),
    selectedTimeDescription: e => "选定的时间：".concat(e.time),
    startDate: "开始日期",
    timeZoneName: "时区",
    weekday: "工作日",
    year: "年"
  },
  "zh-TW": Z = {
    calendar: "日曆",
    day: "日",
    dayPeriod: "上午/下午",
    endDate: "結束日期",
    era: "纪元",
    hour: "小时",
    minute: "分钟",
    month: "月",
    second: "秒",
    selectedDateDescription: e => "選定的日期：".concat(e.date),
    selectedRangeDescription: e => "選定的範圍：".concat(e.startDate, " 至 ").concat(e.endDate),
    selectedTimeDescription: e => "選定的時間：".concat(e.time),
    startDate: "開始日期",
    timeZoneName: "时区",
    weekday: "工作日",
    year: "年"
  }
};
let X = new WeakMap,
  $ = "__role_" + Date.now(),
  J = "__focusManager_" + Date.now();

function Q(e, t, n) {
  var u;
  let d;
  let {
    labelProps: l,
    fieldProps: f,
    descriptionProps: g,
    errorMessageProps: b
  } = (0, s.useField)({
    ...e,
    labelElementType: "span"
  }), {
    focusWithinProps: v
  } = (0, a.useFocusWithin)({
    ...e,
    onBlurWithin: n => {
      t.confirmPlaceholder(), e.onBlur && e.onBlur(n)
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), m = (0, c.useLocalizedStringFormatter)(p(h)), y = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription", x = "hour" === t.maxGranularity ? "time" : "date", w = t.value ? m.format(y, {
    [x]: t.formatValue({
      month: "long"
    })
  }) : "", S = (0, i.useDescription)(w), k = "presentation" === e[$] ? f["aria-describedby"] : [S["aria-describedby"], f["aria-describedby"]].filter(Boolean).join(" ") || void 0, _ = e[J], E = (0, o.useMemo)(() => _ || (0, r.createFocusManager)(n), [_, n]), M = Y(t, n, "presentation" === e[$]);
  X.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [l.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
    ariaDescribedBy: k,
    focusManager: E
  });
  let D = (0, o.useRef)(e.autoFocus);
  d = "presentation" === e[$] ? {
    role: "presentation"
  } : (0, i.mergeProps)(f, {
    role: "group",
    "aria-disabled": e.isDisabled || void 0,
    "aria-describedby": k
  }), (0, o.useEffect)(() => {
    D.current && E.focusFirst(), D.current = !1
  }, [E]), (0, i.useFormReset)(e.inputRef, t.value, t.setValue);
  let C = (0, i.filterDOMProps)(e);
  return {
    labelProps: {
      ...l,
      onClick: () => {
        E.focusFirst()
      }
    },
    fieldProps: (0, i.mergeProps)(C, d, M, v, {
      onKeyDown(t) {
        e.onKeyDown && e.onKeyDown(t)
      },
      onKeyUp(t) {
        e.onKeyUp && e.onKeyUp(t)
      }
    }),
    inputProps: {
      type: "hidden",
      name: e.name,
      value: (null === (u = t.value) || void 0 === u ? void 0 : u.toString()) || ""
    },
    descriptionProps: g,
    errorMessageProps: b
  }
}

function ee(e, t, n) {
  var r;
  let i = Q(e, t, n);
  return i.inputProps.value = (null === (r = t.timeValue) || void 0 === r ? void 0 : r.toString()) || "", i
}

function et(e, t, n) {
  let u = (0, i.useId)(),
    d = (0, i.useId)(),
    l = (0, i.useId)(),
    f = (0, c.useLocalizedStringFormatter)(p(h)),
    {
      labelProps: g,
      fieldProps: b,
      descriptionProps: v,
      errorMessageProps: m
    } = (0, s.useField)({
      ...e,
      labelElementType: "span"
    }),
    y = Y(t, n),
    x = b["aria-labelledby"] || b.id,
    {
      locale: w
    } = (0, c.useLocale)(),
    S = t.formatValue(w, {
      month: "long"
    }),
    k = S ? f.format("selectedDateDescription", {
      date: S
    }) : "",
    _ = (0, i.useDescription)(k),
    E = [_["aria-describedby"], b["aria-describedby"]].filter(Boolean).join(" ") || void 0,
    M = (0, i.filterDOMProps)(e),
    D = (0, o.useMemo)(() => (0, r.createFocusManager)(n), [n]),
    {
      focusWithinProps: C
    } = (0, a.useFocusWithin)({
      ...e,
      isDisabled: t.isOpen,
      onBlurWithin: e.onBlur,
      onFocusWithin: e.onFocus,
      onFocusWithinChange: e.onFocusChange
    });
  return {
    groupProps: (0, i.mergeProps)(M, y, b, _, C, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-labelledby": x,
      "aria-describedby": E,
      onKeyDown(n) {
        !t.isOpen && e.onKeyDown && e.onKeyDown(n)
      },
      onKeyUp(n) {
        !t.isOpen && e.onKeyUp && e.onKeyUp(n)
      }
    }),
    labelProps: {
      ...g,
      onClick: () => {
        D.focusFirst()
      }
    },
    fieldProps: {
      ...b,
      id: l,
      [$]: "presentation",
      "aria-describedby": E,
      value: t.value,
      onChange: t.setValue,
      minValue: e.minValue,
      maxValue: e.maxValue,
      placeholderValue: e.placeholderValue,
      hideTimeZone: e.hideTimeZone,
      hourCycle: e.hourCycle,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros,
      granularity: e.granularity,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isRequired: e.isRequired,
      isInvalid: t.isInvalid,
      autoFocus: e.autoFocus,
      name: e.name
    },
    descriptionProps: v,
    errorMessageProps: m,
    buttonProps: {
      ..._,
      id: u,
      "aria-haspopup": "dialog",
      "aria-label": f.format("calendar"),
      "aria-labelledby": "".concat(u, " ").concat(x),
      "aria-describedby": E,
      "aria-expanded": t.isOpen || void 0,
      onPress: () => t.setOpen(!0)
    },
    dialogProps: {
      id: d,
      "aria-labelledby": "".concat(u, " ").concat(x)
    },
    calendarProps: {
      autoFocus: !0,
      value: t.dateValue,
      onChange: t.setDateValue,
      minValue: e.minValue,
      maxValue: e.maxValue,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isDateUnavailable: e.isDateUnavailable,
      defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
      isInvalid: t.isInvalid,
      errorMessage: e.errorMessage
    }
  }
}
class en {
  of(e) {
    return this.dictionary.getStringForLocale(e, this.locale)
  }
  constructor(e) {
    this.locale = e, this.dictionary = new f.LocalizedStringDictionary(p(h))
  }
}

function er(e, t, n) {
  let r = (0, o.useRef)(""),
    {
      locale: s
    } = (0, c.useLocale)(),
    a = function() {
      let {
        locale: e
      } = (0, c.useLocale)();
      return (0, o.useMemo)(() => {
        try {
          return new Intl.DisplayNames(e, {
            type: "dateTimeField"
          })
        } catch (t) {
          return new en(e)
        }
      }, [e])
    }(),
    {
      ariaLabel: f,
      ariaLabelledBy: p,
      ariaDescribedBy: h,
      focusManager: g
    } = X.get(t),
    b = e.isPlaceholder ? "" : e.text,
    v = (0, o.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
    m = (0, c.useDateFormatter)({
      month: "long",
      timeZone: v.timeZone
    }),
    y = (0, c.useDateFormatter)({
      hour: "numeric",
      hour12: v.hour12,
      timeZone: v.timeZone
    });
  if ("month" !== e.type || e.isPlaceholder) "hour" === e.type && !e.isPlaceholder && (b = y.format(t.dateValue));
  else {
    let e = m.format(t.dateValue);
    b = e !== b ? "".concat(b, " – ").concat(e) : e
  }
  let {
    spinButtonProps: x
  } = (0, l.useSpinButton)({
    value: e.value,
    textValue: b,
    minValue: e.minValue,
    maxValue: e.maxValue,
    isDisabled: t.isDisabled,
    isReadOnly: t.isReadOnly || !e.isEditable,
    isRequired: t.isRequired,
    onIncrement: () => {
      r.current = "", t.increment(e.type)
    },
    onDecrement: () => {
      r.current = "", t.decrement(e.type)
    },
    onIncrementPage: () => {
      r.current = "", t.incrementPage(e.type)
    },
    onDecrementPage: () => {
      r.current = "", t.decrementPage(e.type)
    },
    onIncrementToMax: () => {
      r.current = "", t.setSegment(e.type, e.maxValue)
    },
    onDecrementToMin: () => {
      r.current = "", t.setSegment(e.type, e.minValue)
    }
  }), w = (0, o.useMemo)(() => new d.NumberParser(s, {
    maximumFractionDigits: 0
  }), [s]), S = () => {
    if (!w.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder) "dayPeriod" === e.type && t.clearSegment(e.type);
    else {
      let n = e.text.slice(0, -1),
        i = w.parse(n);
      0 === n.length || 0 === i ? t.clearSegment(e.type) : t.setSegment(e.type, i), r.current = n
    }
  }, {
    startsWith: k
  } = (0, c.useFilter)({
    sensitivity: "base"
  }), _ = (0, c.useDateFormatter)({
    hour: "numeric",
    hour12: !0
  }), E = (0, o.useMemo)(() => {
    let e = new Date;
    return e.setHours(0), _.formatToParts(e).find(e => "dayPeriod" === e.type).value
  }, [_]), M = (0, o.useMemo)(() => {
    let e = new Date;
    return e.setHours(12), _.formatToParts(e).find(e => "dayPeriod" === e.type).value
  }, [_]), D = (0, c.useDateFormatter)({
    year: "numeric",
    era: "narrow",
    timeZone: "UTC"
  }), C = (0, o.useMemo)(() => {
    if ("era" !== e.type) return [];
    let n = (0, u.toCalendar)(new u.CalendarDate(1, 1, 1), t.calendar),
      r = t.calendar.getEras().map(e => {
        let t = n.set({
          year: 1,
          month: 1,
          day: 1,
          era: e
        }).toDate("UTC");
        return {
          era: e,
          formatted: D.formatToParts(t).find(e => "era" === e.type).value
        }
      }),
      i = function(e) {
        e.sort();
        let t = e[0],
          n = e[e.length - 1];
        for (let e = 0; e < t.length; e++)
          if (t[e] !== n[e]) return e;
        return 0
      }(r.map(e => e.formatted));
    if (i)
      for (let e of r) e.formatted = e.formatted.slice(i);
    return r
  }, [D, t.calendar, e.type]), P = n => {
    if (t.isDisabled || t.isReadOnly) return;
    let i = r.current + n;
    switch (e.type) {
      case "dayPeriod":
        if (k(E, n)) t.setSegment("dayPeriod", 0);
        else if (k(M, n)) t.setSegment("dayPeriod", 12);
        else break;
        g.focusNext();
        break;
      case "era": {
        let e = C.find(e => k(e.formatted, n));
        e && (t.setSegment("era", e.era), g.focusNext());
        break
      }
      case "day":
      case "hour":
      case "minute":
      case "second":
      case "month":
      case "year": {
        if (!w.isValidPartialNumber(i)) return;
        let o = w.parse(i),
          s = o,
          a = 0 === e.minValue;
        if ("hour" === e.type && t.dateFormatter.resolvedOptions().hour12) {
          switch (t.dateFormatter.resolvedOptions().hourCycle) {
            case "h11":
              o > 11 && (s = w.parse(n));
              break;
            case "h12":
              a = !1, o > 12 && (s = w.parse(n))
          }
          e.value >= 12 && o > 1 && (o += 12)
        } else o > e.maxValue && (s = w.parse(n));
        if (isNaN(o)) return;
        let c = 0 !== s || a;
        c && t.setSegment(e.type, s), Number(o + "0") > e.maxValue || i.length >= String(e.maxValue).length ? (r.current = "", c && g.focusNext()) : r.current = i
      }
    }
  }, T = (0, o.useRef)("");
  (0, i.useEvent)(n, "beforeinput", r => {
    switch (r.preventDefault(), r.inputType) {
      case "deleteContentBackward":
      case "deleteContentForward":
        w.isValidPartialNumber(e.text) && !t.isReadOnly && S();
        break;
      case "insertCompositionText":
        T.current = n.current.textContent, n.current.textContent = n.current.textContent;
        break;
      default:
        null != r.data && P(r.data)
    }
  }), (0, i.useEvent)(n, "input", e => {
    let {
      inputType: t,
      data: r
    } = e;
    if ("insertCompositionText" === t) n.current.textContent = T.current, (k(E, r) || k(M, r)) && P(r)
  }), (0, i.useLayoutEffect)(() => {
    let e = n.current;
    return () => {
      document.activeElement === e && !g.focusPrevious() && g.focusNext()
    }
  }, [n, g]);
  let A = (0, i.isIOS)() || "timeZoneName" === e.type ? {
    role: "textbox",
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuetext": null,
    "aria-valuenow": null
  } : {};
  e !== (0, o.useMemo)(() => t.segments.find(e => e.isEditable), [t.segments]) && !t.isInvalid && (h = void 0);
  let R = (0, i.useId)(),
    I = !t.isDisabled && !t.isReadOnly && e.isEditable,
    O = "literal" === e.type ? "" : a.of(e.type),
    j = (0, i.useLabels)({
      "aria-label": "".concat(O).concat(f ? ", ".concat(f) : "").concat(p ? ", " : ""),
      "aria-labelledby": p
    });
  return "literal" === e.type ? {
    segmentProps: {
      "aria-hidden": !0
    }
  } : {
    segmentProps: (0, i.mergeProps)(x, j, {
      id: R,
      ...A,
      "aria-invalid": t.isInvalid ? "true" : void 0,
      "aria-describedby": h,
      "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
      "data-placeholder": e.isPlaceholder || void 0,
      contentEditable: I,
      suppressContentEditableWarning: I,
      spellCheck: I ? "false" : void 0,
      autoCapitalize: I ? "off" : void 0,
      autoCorrect: I ? "off" : void 0,
      [parseInt(o.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: I ? "next" : void 0,
      inputMode: t.isDisabled || "dayPeriod" === e.type || "era" === e.type || !I ? void 0 : "numeric",
      tabIndex: t.isDisabled ? void 0 : 0,
      onKeyDown: e => {
        if ("a" === e.key && ((0, i.isMac)() ? e.metaKey : e.ctrlKey) && e.preventDefault(), !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) switch (e.key) {
          case "Backspace":
          case "Delete":
            e.preventDefault(), e.stopPropagation(), S()
        }
      },
      onFocus: () => {
        r.current = "", (0, i.scrollIntoViewport)(n.current, {
          containingElement: (0, i.getScrollParent)(n.current)
        }), window.getSelection().collapse(n.current)
      },
      style: {
        caretColor: "transparent"
      },
      onPointerDown(e) {
        e.stopPropagation()
      },
      onMouseDown(e) {
        e.stopPropagation()
      }
    })
  }
}

function ei(e, t, n) {
  var u, d;
  let l = (0, c.useLocalizedStringFormatter)(p(h)),
    {
      labelProps: f,
      fieldProps: g,
      descriptionProps: b,
      errorMessageProps: v
    } = (0, s.useField)({
      ...e,
      labelElementType: "span"
    }),
    m = g["aria-labelledby"] || g.id,
    {
      locale: y
    } = (0, c.useLocale)(),
    x = t.formatValue(y, {
      month: "long"
    }),
    w = x ? l.format("selectedRangeDescription", {
      startDate: x.start,
      endDate: x.end
    }) : "",
    S = (0, i.useDescription)(w),
    k = {
      "aria-label": l.format("startDate"),
      "aria-labelledby": m
    },
    _ = {
      "aria-label": l.format("endDate"),
      "aria-labelledby": m
    },
    E = (0, i.useId)(),
    M = (0, i.useId)(),
    D = Y(t, n),
    C = [S["aria-describedby"], g["aria-describedby"]].filter(Boolean).join(" ") || void 0,
    P = (0, o.useMemo)(() => (0, r.createFocusManager)(n, {
      accept: e => e.id !== E
    }), [n, E]),
    T = {
      [J]: P,
      [$]: "presentation",
      "aria-describedby": C,
      minValue: e.minValue,
      maxValue: e.maxValue,
      placeholderValue: e.placeholderValue,
      hideTimeZone: e.hideTimeZone,
      hourCycle: e.hourCycle,
      granularity: e.granularity,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isRequired: e.isRequired,
      isInvalid: t.isInvalid
    },
    A = (0, i.filterDOMProps)(e),
    {
      focusWithinProps: R
    } = (0, a.useFocusWithin)({
      ...e,
      isDisabled: t.isOpen,
      onBlurWithin: e.onBlur,
      onFocusWithin: e.onFocus,
      onFocusWithinChange: e.onFocusChange
    });
  return {
    groupProps: (0, i.mergeProps)(A, D, g, S, R, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-describedby": C,
      onKeyDown(n) {
        !t.isOpen && e.onKeyDown && e.onKeyDown(n)
      },
      onKeyUp(n) {
        !t.isOpen && e.onKeyUp && e.onKeyUp(n)
      }
    }),
    labelProps: {
      ...f,
      onClick: () => {
        P.focusFirst()
      }
    },
    buttonProps: {
      ...S,
      id: E,
      "aria-haspopup": "dialog",
      "aria-label": l.format("calendar"),
      "aria-labelledby": "".concat(E, " ").concat(m),
      "aria-describedby": C,
      "aria-expanded": t.isOpen || void 0,
      onPress: () => t.setOpen(!0)
    },
    dialogProps: {
      id: M,
      "aria-labelledby": "".concat(E, " ").concat(m)
    },
    startFieldProps: {
      ...k,
      ...T,
      value: null === (u = t.value) || void 0 === u ? void 0 : u.start,
      onChange: e => t.setDateTime("start", e),
      autoFocus: e.autoFocus,
      name: e.startName
    },
    endFieldProps: {
      ..._,
      ...T,
      value: null === (d = t.value) || void 0 === d ? void 0 : d.end,
      onChange: e => t.setDateTime("end", e),
      name: e.endName
    },
    descriptionProps: b,
    errorMessageProps: v,
    calendarProps: {
      autoFocus: !0,
      value: t.dateRange,
      onChange: t.setDateRange,
      minValue: e.minValue,
      maxValue: e.maxValue,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isDateUnavailable: e.isDateUnavailable,
      allowsNonContiguousRanges: e.allowsNonContiguousRanges,
      defaultFocusedValue: t.dateRange ? void 0 : e.placeholderValue,
      isInvalid: t.isInvalid,
      errorMessage: e.errorMessage
    }
  }
}