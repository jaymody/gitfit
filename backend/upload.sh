mv /Users/start/Downloads/Live/input/*.mp4 /Users/start/Downloads/Live/input/input.mp4 
scp /Users/start/Downloads/Live/input/input.mp4  jay@104.45.149.130:/home/jay/data/input_videos/
ssh jay@104.45.149.130 "bash /home/jay/code/run.sh"
wait
scp jay@104.45.149.130:/home/jay/data/output_videos/output.mp4 /Users/start/Downloads/Live/output/
open -n "/Applications/QuickTime Player.app"
rm -rf /Users/start/Downloads/Live/input/input.mp4