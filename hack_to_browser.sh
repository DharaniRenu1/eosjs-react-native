ex -s -c '6i|var self = this;' -c x ./node_modules/isomorphic-fetch/fetch-npm-browserify.js
./node_modules/.bin/rn-nodeify --hack --install
react-native link
