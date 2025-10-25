const { readFile,writeFile } = require('fs/promises')
const { app } = require('electron');

const DIR_PATH = process.env.NODE_ENV === 'development' 
  ? '.' 
  : app.getPath('userData');

function getFilepath(filename) {
  return `${DIR_PATH}/${filename}.json`
}

async function loadFileContent(filename) {
  const filepath = getFilepath(filename)
  
  try {
    const fileContent = await readFile(filepath, 'utf8')
    const data = JSON.parse(fileContent)
    return data
  } catch(err) {
    console.warn(err)
    return {}
  }
}

async function writeFileContent(filename, content) {
  const filepath = getFilepath(filename)
  const jsonString = JSON.stringify(content, null, 2)
  return writeFile(filepath, jsonString)
}

async function editFileContent(filename, newContent) {
  const oldContent = await loadFileContent(filename)
  const content = Object.assign(oldContent, newContent)
  return writeFileContent(filename, content)
}

module.exports = {
  loadFileContent,
  writeFileContent,
  editFileContent
}
