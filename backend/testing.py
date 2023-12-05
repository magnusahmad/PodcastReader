import yt_dlp

url = ''
ydl_opts = {}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    try:
        ydl.download([url])
    except Exception as e: 
        print(f"Error downloading video: {e}", file=sys.stderr)