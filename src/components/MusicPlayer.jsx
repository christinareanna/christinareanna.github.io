import React, { useState, useRef, useEffect } from 'react';
import { LuPlay, LuPause, LuSkipBack, LuSkipForward } from "react-icons/lu";
import './MusicPlayer.css';

const playlist = [
    { id: 1, title: 'Meet me in the woods', artist: 'Lord Huron', url: '/assets/music/MeetMeInTheWoods.mp3' },
    { id: 2, title: 'Hate that I made you love me (acapella)', artist: 'Ariana Grande', url: '/assets/music/HateThatIMadeYouLoveMe.mp3' },
    { id: 3, title: 'Change', artist: 'Djo', url: '/assets/music/Change.mp3' },
    { id: 4, title: 'One Way', artist: 'Twenty One Pilots', url: '/assets/music/OneWay.mp3' },
    { id: 5, title: 'Frozen Pines', artist: 'Lord Huron', url: '/assets/music/FrozenPines.mp3' },
]

export default function MusicPlayer() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const currentSong = playlist[currentTrackIndex];

    const handleNext = () => {
        if (currentTrackIndex < playlist.length - 1) {
            setCurrentTrackIndex((prev) => prev + 1);
        } else {
            setCurrentTrackIndex(0);
        }
    };


    const handlePrev = () => {
        if (currentTrackIndex > 0) {
            setCurrentTrackIndex((prev) => prev - 1);
        } else {
            setCurrentTrackIndex(playlist.length - 1);
        }
    };

    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.play().catch((err) => {
                console.warn('oh no girly pop we got error:', err);
                setIsPlaying(false);
            });
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentTrackIndex]);

    if (!currentSong) return null;

    return (
        <div className="player">
            <div className="music">
                <audio
                    ref={audioRef}
                    src={currentSong.url}
                    onEnded={handleNext}
                />
                <div className="song">
                    <div>
                        <h4 className="title">{currentSong.title}</h4>
                        <p className="artist">{currentSong.artist}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={handlePrev} className="previous-button"><LuSkipBack/></button>
                    <button onClick={() => setIsPlaying(!isPlaying)} className="play-button">
                        {isPlaying ? (
                            <span style={{margin: '1px 1px 0 0'}}><LuPause/></span>
                        ) : (
                            <span style={{ margin: '0 0 0 1px' }}><LuPlay/></span>
                        )}
                    </button>
                    <button onClick={handleNext} className="next-button"><LuSkipForward/></button>
                </div>
            </div>
        </div>
    );
};