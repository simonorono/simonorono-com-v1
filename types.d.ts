interface Project {
  name: string,
  description: string,
  url?: string,
  vcs: string,
  tags: string[],
}

interface Document {
  lazyLoadInstance: any
}
