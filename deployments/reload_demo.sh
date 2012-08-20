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

# set delay to wait for deployment.
#
sleep_delay="3m"

echo "Setup for delay of BRMS Designer deployment."
touch designer.war.dodeploy.delayed

echo "In a few minutes the BRMS BRM will be available."
touch jboss-brms.war.dodeploy

# delay until memory free again.
sleep $sleep_delay

# start designer deployment.
mv designer.war.dodeploy.delayed designer.war.dodeploy

echo "In a few minutes the BRMS Designer will be available."
