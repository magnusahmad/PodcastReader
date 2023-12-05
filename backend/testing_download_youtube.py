import yt_dlp
import sys
import os
import subprocess
import whisper
from urllib.parse import unquote


if __name__ == "__main__":
    print(sys.argv[1])
    print('hello')
    encoded_url = sys.argv[1]
    url = unquote(encoded_url)
    print(url)