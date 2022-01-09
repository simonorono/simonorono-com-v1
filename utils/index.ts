export function title(prefix: string = '') {
  let title = 'Simón Oroño — mcbodev.com'

  if (prefix) {
    title = `${prefix} — ${title}`
  }

  return title
}
