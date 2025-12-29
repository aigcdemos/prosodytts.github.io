// js/audio.js
// 音频播放控制（可选）
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayers = document.querySelectorAll('audio');
    
    // 实现点击播放时暂停其他音频
    audioPlayers.forEach(player => {
        player.addEventListener('play', function() {
            audioPlayers.forEach(other => {
                if (other !== player && !other.paused) {
                    other.pause();
                }
            });
        });
    });

    // 添加音频加载错误处理
    audioPlayers.forEach(player => {
        player.addEventListener('error', function() {
            const errorMsg = document.createElement('span');
            errorMsg.textContent = '❌ 音频加载失败';
            errorMsg.style.color = '#e74c3c';
            errorMsg.style.fontSize = '12px';
            this.parentNode.appendChild(errorMsg);
            this.style.display = 'none';
        });
    });
});