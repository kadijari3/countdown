function startCountdown(targetTime) {
            function updateCountdown() {
                const now = new Date();
                const target = new Date();
                
                // Set target time (misal: 24 jam dari sekarang)
                target.setHours(target.getHours() + targetTime);
                
                const difference = target - now;
                
                if (difference <= 0) {
                    document.getElementById('countdown').textContent = "00:00:00";
                    return;
                }
                
                // Hitung jam, menit, detik
                const hours = Math.floor(difference / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                
                // Format dengan leading zero
                const formatTime = (time) => time.toString().padStart(2, '0');
                
                document.getElementById('countdown').textContent = 
                    `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
            }
            
            // Update setiap detik
            updateCountdown();
            setInterval(updateCountdown, 1000);
        }
        
        // Mulai countdown 24 jam
        startCountdown(24);
