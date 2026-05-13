'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './CodecPlayer.module.css';

interface CodecPlayerProps {
  dialogues: Array<string>;
  leftImage?: string;
  rightImage?: string;
}

export default function CodecPlayer({
  dialogues,
  leftImage = 'http://placekitten.com/100/139',
  rightImage = 'http://placekitten.com/100/140',
}: CodecPlayerProps) {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [volumeHeight, setVolumeHeight] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const volumeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Initialize and start volume animation
  useEffect(() => {
    setIsAnimating(true);

    // Start volume bar animation after delay
    const timeoutId = setTimeout(() => {
      volumeIntervalRef.current = setInterval(() => {
        setVolumeHeight(Math.random() * 100);
      }, 300);
    }, 1500);

    // Play audio
    if (audioRef.current) {
      setTimeout(() => {
        audioRef.current?.play();
      }, 400);
    }

    return () => {
      clearTimeout(timeoutId);
      if (volumeIntervalRef.current) {
        clearInterval(volumeIntervalRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (currentDialogueIndex < dialogues.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  return (
    <div className={styles.codecContainer} onClick={handleClick}>
      <div className={styles.codecBackground}>
        {/* Volume indicators */}
        <div className={styles.volumeIndicatorTotal}></div>
        <div
          className={styles.volumeIndicator}
          style={{ height: `${volumeHeight}%` }}
        ></div>

        {/* Left side images */}
        <div className={styles.actorOverlayLeft}></div>
        <img
          src="http://cdn.stocksnap.io/img-thumbs/960w/fuzzy.gif"
          alt="fuzzy animation left"
          className={styles.leftCover}
        />
        <img
          src={leftImage}
          alt="actor left"
          className={styles.imgLeft}
        />

        {/* Right side images */}
        <div className={styles.actorOverlayRight}></div>
        <img
          src="http://cdn.stocksnap.io/img-thumbs/960w/fuzzy.gif"
          alt="fuzzy animation right"
          className={styles.rightCover}
        />
        <img
          src={rightImage}
          alt="actor right"
          className={styles.imgRight}
        />

        {/* Transcription/Dialogue */}
        <div className={styles.transcription}>
          {dialogues.map((dialogue, index) => (
            <p
              key={index}
              className={index === currentDialogueIndex ? styles.active : ''}
              dangerouslySetInnerHTML={{ __html: dialogue }}
            />
          ))}
        </div>
      </div>

      {/* Audio element */}
      <audio ref={audioRef}>
        <source src="/assets/codec.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
