// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

export default function safeURI(term: string): string {
  return encodeURIComponent(term)
    .replace(/['()]/g, escape)
    .replace(/\*/g, "%2A")
    .replace(/%(?:7C|60|5E)/g, unescape);
}
