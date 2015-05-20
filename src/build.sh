#!/bin/bash
#chrome
#no need

#firefox
cp greasemonkey/goodOldLiU.user.js firefox/content/goodoldliu.js
rm goodoldliu.xpi
cd firefox/
zip -r goodoldliu.xpi *
cd ..
mv firefox/goodoldliu.xpi .
