import { useEffect, useRef } from "react";

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

const JitsiMeetComponent = ({ roomName }) => {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI) return;

    const domain = "meet.jit.si";

    const options = {
      roomName: roomName,
      width: "100%",
      height: "100vh",
      parentNode: jitsiContainerRef.current,
      configOverwrite: {
        startWithAudioMuted: true,
        startWithVideoMuted: false,
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
      },
      userInfo: {
        displayName: "Your Name",
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose(); // cleanup on unmount
  }, [roomName]);

  return <div ref={jitsiContainerRef} />;
};

export default JitsiMeetComponent;
