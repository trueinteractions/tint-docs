 #!/bin/sh
 cd build/images/
 for file in *_screen.png; do convert $file -resize 25% $file; done
