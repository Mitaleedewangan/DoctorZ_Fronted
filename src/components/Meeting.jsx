import React from 'react'
import {JitsiMeeting} from '@jitsi/react-sdk'

function Meeting() {
  return (
    <JitsiMeeting
    domain = { "meet.jit.si" }
    roomName = "appointment"
    configOverwrite = {{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false
    }}
    interfaceConfigOverwrite = {{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
    }}
    userInfo = {{
        displayName: 'Doctor'
    }}
    onApiReady = { (externalApi) => {
        // here you can attach custom event listeners to the Jitsi Meet External API
        // you can also store it locally to execute commands
    } }
    getIFrameRef = { (iframeRef) => { iframeRef.style.height = '100vh'; } }
/>
  )
}

export default Meeting