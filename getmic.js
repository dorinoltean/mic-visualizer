module.exports = getMic
function getMic()
{
  return navigator.mediaDevices.enumerateDevices().then((devices) => {
    let mediaOptions = {
      video: false,
      audio: false
    }
    devices.forEach((device) => {
      if (device.kind === 'audioinput') { mediaOptions.audio = true }
    })

    return initHardware(mediaOptions)
  })

  function initHardware(options) {
    console.log(options)
    return navigator.mediaDevices.getUserMedia(options).then((stream) => {
      return stream
    }).catch((error) => {
      console.error(error)
    })
  }
}