import { FaSpotify, FaLinkedin, FaGithub, FaBasketballBall, FaCode, FaGamepad, FaPlay, FaFileDownload } from 'react-icons/fa';
import { IoMdFitness } from 'react-icons/io';
import { MdTravelExplore } from 'react-icons/md';
import { useState, useEffect } from 'react';


const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const client_id = '39ac934f21104fa5bc9e3d8dbeb7ea00';
const client_secret = 'c6f5ae3df0634acfbbbdd863ac20b5d7';
const refresh_token = 'AQC5soIa9PWwGNZcfFP-Iz6SOsBUz5r4ZIE4eddE1IjuMBaIo96-D0HdR2M4yA_kztGOpfEjFIsKCl2dTnbzun5uxrRM0fIIWgyHNMPOV8pbgs1XpfvpQ8BXh8usRL4a40c';

export const getAccessToken = async (client_id, client_secret, refresh_token) => {
    const basic = btoa(`${client_id}:${client_secret}`);

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    return response.json();
};

export const getNowPlaying = async () => {
    try {
        const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        if (!response.ok) {
            if (response.status === 204) {
                return {
                    isPlaying: false,
                    title: '',
                    artist: '',
                    albumImageUrl: '',
                    songUrl: '',
                    timePlayed: 0,
                    timeTotal: 0,
                    artistUrl: ''
                };
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const song = await response.json();

        if (!song.item) {
            return {
                isPlaying: false,
                title: '',
                artist: '',
                albumImageUrl: '',
                songUrl: '',
                timePlayed: 0,
                timeTotal: 0,
                artistUrl: ''
            };
        }

        const albumImageUrl = song.item.album.images[0].url;
        const artist = song.item.artists.map((artist) => artist.name).join(', ');
        const isPlaying = song.is_playing;
        const songUrl = song.item.external_urls.spotify;
        const title = song.item.name;
        const timePlayed = song.progress_ms;
        const timeTotal = song.item.duration_ms;
        const artistUrl = song.item.album.artists[0].external_urls.spotify;

        return {
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
            timePlayed,
            timeTotal,
            artistUrl
        };
    } catch (error) {
        console.error('Error fetching currently playing song: ', error);
        return {
            isPlaying: false,
            title: '',
            artist: '',
            albumImageUrl: '',
            songUrl: '',
            timePlayed: 0,
            timeTotal: 0,
            artistUrl: ''
        };
    }
};

const About = () => {
    const [githubStats, setGithubStats] = useState({
        public_repos: 0,
        followers: 0,
        following: 0,
        bio: '',
        avatar_url: '',
        name: ''
    });

    const [currentTrack, setCurrentTrack] = useState({
        isPlaying: false,
        title: '',
        artist: '',
        albumArt: '',
        songUrl: '',
        timePlayed: 0,
        timeTotal: 0,
        artistUrl: ''
    });

    useEffect(() => {
        fetch('https://api.github.com/users/Dielldev')
            .then(response => response.json())
            .then(data => {
                setGithubStats({
                    public_repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    bio: data.bio,
                    avatar_url: data.avatar_url,
                    name: data.name
                });
            })
            .catch(error => console.error('Error fetching GitHub stats:', error));
    }, []);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const data = await getNowPlaying();
                // Only update state if we have valid data
                if (data && typeof data === 'object') {
                    setCurrentTrack({
                        isPlaying: data.isPlaying,
                        title: data.title || '',
                        artist: data.artist || '',
                        albumArt: data.albumImageUrl || '',
                        songUrl: data.songUrl || '',
                        timePlayed: data.timePlayed || 0,
                        timeTotal: data.timeTotal || 0,
                        artistUrl: data.artistUrl || ''
                    });
                }
            } catch (error) {
                console.error('Error in fetchNowPlaying:', error);
            }
        };

        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 5000); // Changed to 5 seconds to avoid rate limiting

        return () => clearInterval(interval);
    }, []);

    const hobbies = [
        { name: "Basketball", icon: <FaBasketballBall /> },
        { name: "Fitness", icon: <IoMdFitness /> },
        { name: "Coding", icon: <FaCode /> },
        { name: "Gaming", icon: <FaGamepad /> },
        { name: "Traveling", icon: <MdTravelExplore /> },
    ];

    return (
        <section className="bg-[#0e1420] text-white py-16 section-transition" id="about">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-accent uppercase tracking-wider mb-4 text-sm">GET TO KNOW ME</p>
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Beyond coding, I'm passionate about various activities and always eager to learn new things.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main About Card */}
                    <div className="lg:col-span-2 bg-[#131B2E]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
                        <h3 className="text-2xl font-bold mb-6 text-accent">Hello, World! 👋</h3>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                I'm a passionate software developer based in Kosovo. With a strong foundation in both frontend and backend development, I love creating seamless digital experiences that make a difference.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or engaging in my various hobbies.
                            </p>
                            
                            <a
                                href="/CV/CV_Diell_Govori.pdf"
                                download="CV_Diell_Govori.pdf"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-all duration-300 mt-4"
                            >
                                <FaFileDownload />
                                Download CV
                            </a>
                        </div>

                        {/* Hobbies Section */}
                        <div className="mt-8">
                            <h4 className="text-xl font-semibold mb-4 text-accent">Hobbies & Interests</h4>
                            <div className="flex flex-wrap gap-4">
                                {hobbies.map((hobby, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg text-accent hover:bg-accent/20 transition-all duration-300"
                                    >
                                        {hobby.icon}
                                        <span>{hobby.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Side Cards */}
                    <div className="space-y-8">
                        {/* Spotify Card */}
                        <div className="bg-gradient-to-br from-[#131B2E]/80 to-[#0f1623]/90 backdrop-blur-sm rounded-2xl p-3 border border-white/5 hover:border-white/10 transition-all duration-300 group">
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-1.5">
                                    <FaSpotify className="text-[#1DB954] text-lg animate-pulse" />
                                    <h4 className="text-xs font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        {currentTrack.isPlaying ? 'Now Playing' : 'Not Playing'}
                                    </h4>
                                </div>
                                <div className="text-[9px] text-gray-500 bg-white/5 px-1.5 py-0.5 rounded-full">
                                    Spotify
                                </div>
                            </div>
                            {currentTrack.title ? (
                                <a 
                                    href={currentTrack.songUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-4 hover:bg-white/5 rounded-lg transition-all p-1 mx-1"
                                >
                                    <div className="relative h-24 w-24">
                                        <img 
                                            src={currentTrack.albumArt} 
                                            alt="Album Art"
                                            className="w-full h-full object-cover rounded-md group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300"
                                        />
                                        {currentTrack.isPlaying && (
                                            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#1DB954] rounded-full flex items-center justify-center">
                                                <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div>
                                            <p className="font-medium text-white text-xs truncate -my- group-hover:text-emerald-400 transition-colors duration-300">
                                                {currentTrack.title}
                                            </p>
                                            <p className="text-[9px] text-gray-400 truncate">
                                                {currentTrack.artist}
                                            </p>
                                        </div>
                                        {currentTrack.timePlayed && currentTrack.timeTotal && (
                                            <div className="mt-1">
                                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-300"
                                                        style={{ width: `${(currentTrack.timePlayed / currentTrack.timeTotal) * 100}%` }}
                                                    />
                                                </div>
                                                <p className="text-[8px] text-gray-500 mt-0.5">
                                                    {formatTime(currentTrack.timePlayed)} / {formatTime(currentTrack.timeTotal)}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </a>
                            ) : (
                                <div className="flex items-center justify-center h-20 text-gray-400 text-sm">
                                    <p className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                                        Nothing playing right now
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* LinkedIn Card */}
                        <a 
                            href="https://www.linkedin.com/in/diell-govori-3a32b528b/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block bg-[#131B2E]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <FaLinkedin className="text-[#0077B5] text-2xl" />
                                <h4 className="text-lg font-semibold">Let's Connect!</h4>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Feel free to reach out for collaborations or just a friendly chat about tech and development.
                            </p>
                        </a>

                        {/* GitHub Stats Card */}
                        <div className="bg-[#131B2E]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <FaGithub className="text-white text-2xl" />
                                <h4 className="text-lg font-semibold">GitHub Stats</h4>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <img 
                                    src={githubStats.avatar_url} 
                                    alt="GitHub Profile" 
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{githubStats.name}</h3>
                                    <div className="flex gap-4 text-sm text-gray-400">
                                        <span>Public Repos: {githubStats.public_repos}</span>
                                        <span>Followers: {githubStats.followers}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default About;
