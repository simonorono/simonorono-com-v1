interface Project {
  name: string,
  description: string,
  url: string,
  vcs: string,
  tags: string[],
  wip: boolean,
}

interface Document {
  lazyLoadInstance: any
}
