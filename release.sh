#!/bin/sh

# $1 = host
# $2 = path
# $3 = user

if [ "$1" != "" ]; then
	mv build docs
	scp -r docs/ $3@$1:$2
	mv docs build
else
	echo "./release host path user"
fi
