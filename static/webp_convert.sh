for file in images/*; do cwebp -q 75 "$file" -o "${file%.*}.webp"; done
