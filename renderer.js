const versionInfo = document.getElementById('version-info')
const timeInfo = document.getElementById('render-time-info')

versionInfo.innerText = `This app is using Chrome v${versions.chrome()}, Node v${versions.node()} and Electron v${versions.electron()}.`

window.versions.renderTime().then(seconds => {
    timeInfo.innerText = `Rendered in ${seconds} milliseconds.`
})