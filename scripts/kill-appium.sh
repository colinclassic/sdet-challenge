#!/bin/sh

echo `ps aux | grep appium`

appiumprocess=`ps aux | grep appium | awk 'FNR==2{print $2}'`

kill -9 $appiumprocess

