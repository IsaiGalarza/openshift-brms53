#!/bin/bash

# The purpose of this script is to reload the BRMS war files in
# the OpenShift deployment directory. This is needed to refresh 
# any longer running instance that has failed due to memory 
# consumption.
#
# To make use of this, log into the OpenShift instance via:
# ssh UUID@[app-name]-[domain].rhcloud.com 
# 
# Then you need to execute this script located here:
# ./[app-name]/jbosseap-6.0/standalone/configuration/reload_demo.sh
########################################################
$deployhome="{$HOME}/brms53/jbosseap-6.0/standalone/deployments"

echo "Checking if artifacts are already deployed."
echo
if [ -e $deployhome/designer.war.deployed ]; then
	echo "Found deployed designer.war, undeploying this artifact."
  echo
	rm $deployhome/designer.war.deployed
	sleep 5s
	echo "Finished with undeploy!"
	echo
fi

if [ -e $deployhome/jboss-brms.war.deployed ]; then
	echo "Found deployed jboss-brms.war, undeploying this artifact."
  echo
	rm $deployhome/jboss-brms.war.deployed
	sleep 4s
	echo "Waiting for undeploy to finish..."
	sleep 4s
	echo "Waiting for undeploy to finish..."
	sleep 4s
	echo "Finished with undeploy!"
	echo
fi

echo "Setup for delay of BRMS Designer deployment."
touch $deployhome/designer.war.dodeploy.delayed
echo

echo "In a few minutes the BRMS BRM will be available."
if [ -e $deployhome/jboss-brms.war.undeployed ]; then
	mv $deployhome/jboss-brms.war.undeployed $deployhome/jboss-brms.war.dodeploy
else
	touch $deployhome/jboss-brms.war.dodeploy
fi
echo

# delay until memory free again.
sleep 20s
echo "Wait for it..."
sleep 20s
echo "Wait for it..."
sleep 20s
echo "Wait for it..."
echo
sleep 20s
echo "Almost there..."
sleep 20s
echo "Almost there..."
sleep 20s
echo "Almost there..."
echo
sleep 20s
echo "Just about got it done..."
sleep 20s
echo "Are you ready for it..."
sleep 20s
echo "Here we go!"
echo
sleep 3s

# start designer deployment.
mv $deployhome/designer.war.dodeploy.delayed $deployhome/designer.war.dodeploy

echo "In a few minutes the BRMS Designer will be available."
echo
