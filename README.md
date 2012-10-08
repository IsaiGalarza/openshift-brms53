JBoss BRMS 5.3 product: BRM component & Web Designer OpenShift 
==============================================================
Want to play with the JBoss BRMS 5.3 product, it has never been easier!

This git repository helps you get up and running quickly with the BRMS 
BRM and Web Designer components in OpenShift. Easy to demo or just test
drive.

Running on OpenShift
----------------------

Create an account at http://openshift.redhat.com/

Create a jbosseap-6.0 application

    rhc app create -a brms53 -t jbosseap-6.0 -g medium

Add this upstream openshift-brms53 repo.

    cd brms53
    git remote add upstream -m master https://github.com/eschabell/openshift-brms53.git
    git pull -s recursive -X theirs upstream master
    
Then push the repo upstream

    git push

That's it, you can now checkout your application at:

    http://brms53-$your_domain.rhcloud.com

But you are not done... there is a configuration step needed right now until we sort out 
the OpenShift variable needed to identify this gears among a few other things. See the 
following Configuration Notes to get this finished. We hope to automate these steps soon.

CONFIGURATION NOTES:

This project was fully researched and created initially by Kaushik Bhattacharya, give him
a shout of thanks over at his project headquarters: https://github.com/kbhattac/brms53

Some steps:

1) You need to specify the jackrabbit repo location in components.xml of jboss-brms.war.  It should be configured to use Openshift
environment variables, on TODO list. For now you can find it in the UUID displayed in this command:

    rhc app show -a brms53
   
    Application Info
    ================
    brms53
    Framework: jbossas-7
    Creation: 2012-06-24T08:44:30-04:00
    UUID: [some-big-number-here]
    Git URL: ssh://[some-big-number-here]@brms53-onthe.rhcloud.com/~/git/brms53.git/
    Public URL: http://brms53-$your_domain.rhcloud.com/
    Embedded: None

So in this case, need to add in the UUID number to the componets.xml.

2) You need modify the host ip in profiles/jbpm.xml in designer.war It should have the value of $OPENSHIFT_INTERNAL_IP, which you
can find by ssh'ing into the instance, then running cmd 'export' to find variable. Put that value in the host attribute:

				<!-- update host, ssh into instance, run cmd 'export', locate variable OPENSHIFT_INTERNAL_IP, fill in for host.  -->
        <externalloadurl protocol="http" host="127.8.133.1:8080" subdomain="jboss-brms/org.drools.guvnor.Guvnor/oryxeditor" usr="admin"
        pwd="brms"/ -->

3) Due to memory issues, deploying jboss-brms.war and designer.war at the same time doesn't work. So by default, we have
configured only jboss-brms.war to deploy automatically. After jboss-brms.war is deployed, you need to rename the file 
'designer.war.dodeploy.delayed' to 'designer.war.dodeploy' to trigger the deployment of the designer app.

    $ ssh [UUID]@brms53-$your_domain.rhcloud.com
    $ mv brms53/jbosseap-6.0/standalone/deployments/designer.war.dodeploy.delayed  /
         brms53/jbosseap-6.0/standalone/deployments/designer.war.dodeploy

You should see the web designer war deploy if you are watching the logs:

    $ rhc-tail-files -a brms53

4) I have added a deployments/reload_demo.sh script that you can run to reset the deployed artifacts as they sometimes fail due to
memory constraints. Just execute the following script and wait for it to complete:

    $ ssh [UUID]@brms53-$your_domain.rhcloud.com
		$ ./brms53/jbosseap-6.0/standalone/deployments/reload_demo.sh

That is really it now, once it starts up your BRMS 5.3 product is available at:

    http://brms53-$your_domain.rhcloud.com/jboss-brms

Finally, you can import the demo application by importing the file import_demo_to_brms.zip into the Administration -> Import Export
tab from the console.
