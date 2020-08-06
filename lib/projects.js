import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllProjectIds() {
  const fileNames = fs.readdirSync('projects')
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getProjectData(id) {
  const fullPath = path.join('projects', `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}
