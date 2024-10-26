function detectLang(lang:string, uz:string,ru:string,en:string):string{
    return lang == "uz" ? uz : lang == "ru" ? ru : en
}
export default detectLang
