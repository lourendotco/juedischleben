"use client";
import { useEffect } from "react";

export function Video({ videoId }) {

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {
         new window.YT.Player(videoId, {
          videoId,
          width: "100%",
          height: "100%",
          playerVars: {
            rel: 0,
          },
        });
      };
    } else {
      new window.YT.Player(videoId, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          rel: 0,
        },
      });
    }
  }, [videoId]);

  return (
    <div id={videoId} />
  );
}
