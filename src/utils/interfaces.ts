export default interface Project {
  title: string
  description: string
  longDescription: string
  image: string
  videoId: string
  technologies: string[]
  links: {
    github: string
    githubBackend?: string // <-- Agregamos esta propiedad como opcional
    live: string
  }
}