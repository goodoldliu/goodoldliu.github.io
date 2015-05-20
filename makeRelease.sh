#!/bin/bash
#chrome
cp src/greasemonkey/goodOldLiU.user.js release/chrome/goodOldLiU.user.js

#firefox
cd src/
sh build.sh
cd ..
cp src/goodoldliu.xpi release/firefox/goodoldliu.xpi
