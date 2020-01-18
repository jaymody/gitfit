# Imports
import os
import json
import glob
import argparse

import cv2
import numpy as np

# Argument Parser
parser = argparse.ArgumentParser()
parser.add_argument("input_video_fpath", type=str) 
parser.add_argument("input_json_dir", type=str) 
parser.add_argument("output_video_fpath", type=str)
parser.add_argument("proper_json_dir", type=str)

def read_from_video(video_fpath):
  # Read from video
  cap = cv2.VideoCapture(video_fpath)
  frames = []
  
  while (cap.isOpened()):
    ret, frame = cap.read()
    if ret:
      frames.append(frame)
    else:
      break

  height, width, n_channels = frames[0].shape
  return frames, width, height

def serialize_points(points):
  points = [tuple(points[i:i+3]) for i in range(0,len(points),3)]
  return [(int(point[0]), int(point[1]), point[2]) for point in points]

def draw_over_frame(frame, points, color=(0,0,255)):
  pairs = [
      [1,8], 
      [1,2], 
      [1,5], 
      [2,3], 
      [3,4], 
      [5,6], 
      [6,7], 
      [8,9], 
      [9,10], 
      [10,11], 
      [8,12], 
      [12,13], 
      [13,14], 
      [1,0], 
      [0,15], 
      [15,17], 
      [0,16],
      [16,18], 
      [2,17],
      [5,18], 
      [14,19],
      [19,20],
      [14,21],
      [11,22],
      [22,23],
      [11,24]
  ]
  
  for p1,p2 in pairs:
    cv2.line(frame, points[p1][:2], points[p2][:2], color, thickness=2)
  
  return frame

def center(good_points, bad_points):
  waist = 9
  
  translate_x = bad_points[waist][0] - good_points[waist][0]
  translate_y = bad_points[waist][1] - good_points[waist][1]
  
  return [(point[0] + translate_x, point[1] + translate_y, point[2]) for point in good_points]

def load_points_dicts(output_dir):
  fpaths = sorted(glob.glob(os.path.join(output_dir, "*.json")))
  points_dicts = []

  for fpath in fpaths:
    with open(fpath, 'r') as fi:
      points_dicts.append(json.load(fi))
      
  return points_dicts

if __name__ == "__main__":
  args = parser.parse_args()

  # parser.add_argument("input_video_fpath", type=str) 
  # parser.add_argument("input_json_fpath", type=str) 
  # parser.add_argument("output_video_fpath", type=str)
  # parser.add_argument("proper_json_fpath", type=str)

  input_frames, width, height = read_from_video(args.input_video_fpath)
  input_points_dicts = load_points_dicts(args.input_json_dir)

  proper_points_dicts = load_points_dicts(args.proper_json_dir)
  
  out = cv2.VideoWriter(args.output_video_fpath, cv2.VideoWriter_fourcc('M','J','P','G'), 30, (width, height))

  for input_points_dict, proper_points_dict, input_frame in zip(input_points_dicts, proper_points_dicts, input_frames):
    proper_points = serialize_points(proper_points_dict["people"][0]["pose_keypoints_2d"])
    input_points = serialize_points(input_points_dict["people"][0]["pose_keypoints_2d"])

    proper_points = center(proper_points, input_points)
    out.write(draw_over_frame(input_frame, proper_points, color=(0,255,0)))
    out.write(draw_over_frame(input_frame, input_points))

  out.release()