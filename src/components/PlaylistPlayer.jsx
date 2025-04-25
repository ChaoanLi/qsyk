import React, { useEffect, useRef } from 'react';
import { APlayer } from 'aplayer-ts';
import 'aplayer-ts/dist/APlayer.min.css';

export default function PlaylistPlayer({ tracks }) {
    const container = useRef();
    useEffect(() => {
        const ap = new APlayer({
            container: container.current,
            audio: tracks,
            listFolded: false,
            listMaxHeight: '400px',
        });
        return () => ap.destroy();
    }, [tracks]);
    return <div ref={container} />;
}