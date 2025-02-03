<script>
        function updateUTCTime() 
            const now = new Date();
            document.getElementById('utc-time').innerText = UTC Time: ${now.toUTCString()};
        updateUTCTime();
    </script>