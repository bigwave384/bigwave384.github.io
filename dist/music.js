const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random', 
    preload: 'auto', 
    volume: 0.7,
    mutex: true, 
    listFolded: true,
    listMaxHeight: 60,
    lrcType: 3,
    audio: [
        {
            name: '神保町哀歌',
            artist: '鈴木愛奈 (すずき あいな)',
            url: 'music/鈴木愛奈 - 神保町哀歌.mp3',
            cover: 'music/1.jpg',

            
        },

    ]
    
});
