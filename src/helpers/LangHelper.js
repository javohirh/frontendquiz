function detectLang(lang, uz, ru, en) {
  return lang == "uz" ? uz : lang == "ru" ? ru : en;
}
export default detectLang;
