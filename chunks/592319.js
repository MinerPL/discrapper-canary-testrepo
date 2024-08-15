var r;
(r = 0),
	(function (e) {
		e.defineLocale('he', {
			months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
			monthsShort:
				'ינו\u05F3_פבר\u05F3_מרץ_אפר\u05F3_מאי_יוני_יולי_אוג\u05F3_ספט\u05F3_אוק\u05F3_נוב\u05F3_דצמ\u05F3'.split('_'),
			weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
			weekdaysShort: 'א\u05F3_ב\u05F3_ג\u05F3_ד\u05F3_ה\u05F3_ו\u05F3_ש\u05F3'.split('_'),
			weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
			longDateFormat: {
				LT: 'HH:mm',
				LTS: 'HH:mm:ss',
				L: 'DD/MM/YYYY',
				LL: 'D [ב]MMMM YYYY',
				LLL: 'D [ב]MMMM YYYY HH:mm',
				LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
				l: 'D/M/YYYY',
				ll: 'D MMM YYYY',
				lll: 'D MMM YYYY HH:mm',
				llll: 'ddd, D MMM YYYY HH:mm'
			},
			calendar: {
				sameDay: '[היום ב\u05BE]LT',
				nextDay: '[מחר ב\u05BE]LT',
				nextWeek: 'dddd [בשעה] LT',
				lastDay: '[אתמול ב\u05BE]LT',
				lastWeek: '[ביום] dddd [האחרון בשעה] LT',
				sameElse: 'L'
			},
			relativeTime: {
				future: 'בעוד %s',
				past: 'לפני %s',
				s: 'מספר שניות',
				ss: '%d שניות',
				m: 'דקה',
				mm: '%d דקות',
				h: 'שעה',
				hh: function (e) {
					return 2 === e ? 'שעתיים' : e + ' שעות';
				},
				d: 'יום',
				dd: function (e) {
					return 2 === e ? 'יומיים' : e + ' ימים';
				},
				M: 'חודש',
				MM: function (e) {
					return 2 === e ? 'חודשיים' : e + ' חודשים';
				},
				y: 'שנה',
				yy: function (e) {
					return 2 === e ? 'שנתיים' : e % 10 == 0 && 10 !== e ? e + ' שנה' : e + ' שנים';
				}
			},
			meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
			isPM: function (e) {
				return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
			},
			meridiem: function (e, t, n) {
				if (e < 5) return 'לפנות בוקר';
				if (e < 10) return 'בבוקר';
				if (e < 12) return n ? 'לפנה"צ' : 'לפני הצהריים';
				else if (e < 18) return n ? 'אחה"צ' : 'אחרי הצהריים';
				else return 'בערב';
			}
		});
	})(n(913527));
