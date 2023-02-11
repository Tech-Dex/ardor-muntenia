for file in images/*; do if [[ $file != *.webp ]]; then cwebp -q 75 "$file" -o "${file%.*}.webp"; fi; done
