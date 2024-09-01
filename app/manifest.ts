import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Donets Application',
    short_name: 'Donets App',
    description: 'Donets shop project',
    start_url: '/',
  }
}
