INPUT_FPATH="/home/jay/data/input_videos/input.mp4"
OUTPUT_JSON_DIR="/home/jay/data/output_jsons/"
PROPER_JSON_DIR="/home/jay/data/lifts/overhead/"
OPENPOSE_DIR="/home/jay/code/openpose"
CODE_DIR="/home/jay/code/"
OUTPUT_AVI="/home/jay/data/output_videos/output.avi"
OUTPUT_MP4="/home/jay/data/output_videos/output.mp4"

rm -rf ${OUTPUT_JSON_DIR}*
rm -rf ${OUTPUT_AVI}
rm -rf ${OUTPUT_MP4}

rm log.txt
touch log.txt

cd $OPENPOSE_DIR && ./build/examples/openpose/openpose.bin --video $INPUT_FPATH --display 0 --render_pose 0 --write_json $OUTPUT_JSON_DIR >> log.txt

cd $CODE_DIR
python3 process.py $INPUT_FPATH $OUTPUT_JSON_DIR $OUTPUT_AVI $PROPER_JSON_DIR >> log.txt

ffmpeg -y -loglevel info -i $OUTPUT_AVI $OUTPUT_MP4 >> log.txt

rm -rf ${INPUT_FPATH}
