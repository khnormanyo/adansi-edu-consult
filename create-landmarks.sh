#!/bin/bash

# Directory path
LANDMARKS_DIR="/mnt/c/Users/jalav/Desktop/adansi/adansiedu-site/public/images/landmarks"

# Ensure landmarks directory exists
mkdir -p "$LANDMARKS_DIR"

# Function to create a colored rectangle with text as a placeholder
create_placeholder() {
  local country="$1"
  local color="$2"
  local landmark_text="$3"
  local output_file="$LANDMARKS_DIR/$country.jpg"

  # Create a colored rectangle with text using ImageMagick (if available)
  # If not available, echo a message
  if command -v convert &> /dev/null; then
    convert -size 800x600 "gradient:${color}1-${color}2" \
      -gravity center \
      -pointsize 36 \
      -fill white \
      -font Arial \
      -draw "text 0,0 '${landmark_text}'" \
      -quality 90 \
      "$output_file"
    echo "Created placeholder for $country: $output_file"
  else
    echo "ImageMagick not found. Creating empty file for $country at $output_file"
    # Create an empty file as a placeholder
    touch "$output_file"
  fi
}

# Create placeholders for each country with distinctive colors
create_placeholder "uk" "#1e4b94" "Big Ben & Parliament"
create_placeholder "usa" "#b22234" "Statue of Liberty"
create_placeholder "turkey" "#e30a17" "Hagia Sophia"
create_placeholder "canada" "#d52b1e" "CN Tower, Toronto"
create_placeholder "australia" "#00843d" "Sydney Opera House"
create_placeholder "germany" "#dd0000" "Brandenburg Gate"
create_placeholder "france" "#002395" "Eiffel Tower, Paris"
create_placeholder "spain" "#aa151b" "La Sagrada Familia"

echo "Done creating placeholder landmark images!"