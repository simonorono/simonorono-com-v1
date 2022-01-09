export function title(prefix: string = '') {
  let title = 'Simón Oroño — simonorono.com'

  if (prefix) {
    title = `${prefix} — ${title}`
  }

  return title
}
