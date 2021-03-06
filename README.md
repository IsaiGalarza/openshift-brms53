JBoss Business Rules Management System puts BPM in the Cloud
==============================================================
Want to play with the JBoss BRMS product, it has never been easier!

This git repository helps you get up and running quickly with the BRMS 
BRM and Web Designer components in OpenShift. Easy to demo or just test
drive.

Running on OpenShift
----------------------

Create an account at http://openshift.redhat.com/

Create a jbosseap-6.0 application

    rhc app create -a brms5 -t jbosseap-6.0 -g medium --from-code https://github.com/eschabell/openshift-brms53.git
    
That's it, you can now checkout your gear homepage at:

    http://brms5-$your_domain.rhcloud.com

But you are not done... there is a configuration step needed right now until we sort out 
the OpenShift variable needed to identify this gears among a few other things. See the 
following Configuration Notes to get this finished. We hope to automate these steps soon.

CONFIGURATION NOTES:

1) You need modify the host ip in profiles/jbpm.xml in designer.war It should have the value of $OPENSHIFT_INTERNAL_IP, which you
can find by ssh'ing into the instance, then running cmd 'export' to find variable. Put that value in the host attribute:

				<!-- update host, ssh into instance, run cmd 'export', locate variable OPENSHIFT_INTERNAL_IP, fill in for host.  -->
        <externalloadurl protocol="http" host="127.8.133.1:8080" subdomain="jboss-brms/org.drools.guvnor.Guvnor/oryxeditor" usr="admin"
        pwd="brms"/ -->

Note: should you want to play with adding in business central and/or human task server, then you need to ssh into your instance and 
change the .skipdeploy to .dodeploy by hand right now (protects memory usage). You will need to adjust localhost settings in
components like business-central-server.war/WEB-INF/classes/jbpm.console.properties.

That is really it now, once it starts up your BRMS 5.3 product is available at:

    http://brms5-$your_domain.rhcloud.com/jboss-brms

Finally, you can import the demo application by importing the file import_demo_to_brms.zip into the Administration -> Import Export
tab from the console.


Released Versions
-----------------

See the tagged releases for the following versions:

- v1.0 is EAP 6 cartridge running BRMS 5.3.1 deployable jboss-brms + designer only.

- v1.1 is EAP 6 cartride running BRMS 5.3.1 deployable jboss-brms + designer active and biz-central / human-task server inactive.

