JBoss BRMS 5.3 product: BRM component & Web Designer OpenShift 
==============================================================
Want to play with the JBoss BRMS 5.3 product, it has never been easier!

This git repository helps you get up and running quickly with the BRMS 
BRM and Web Designer components in OpenShift. Easy to demo or just test
drive.

Running on OpenShift
----------------------

Create an account at http://openshift.redhat.com/

Create a jbossas-7.0 application

    rhc app create -a brms53 -t jbossas-7.0

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

1) You need to specify the jackrabbit repo location in components.xml of jboss-brms.war. 
   It should be configured to use Openshift environment variables, on TODO list.
   For now need to check logs with your git push for these lines:

  remote: Emptying tmp dir: /var/lib/stickshift/669390da10374198ba87862d87aca1ef/brms53/jbossas-7/standalone/tmp/auth
  remote: Emptying tmp dir: /var/lib/stickshift/669390da10374198ba87862d87aca1ef/brms53/jbossas-7/standalone/tmp/vfs
  remote: Emptying tmp dir: /var/lib/stickshift/669390da10374198ba87862d87aca1ef/brms53/jbossas-7/standalone/tmp/work
  remote: Syncing Git deployments directory [/var/lib/stickshift/669390da10374198ba87862d87aca1ef/app-root/runtime/repo//deployments/]

  So in this case, need to add in the number following 'stickshift' to the componets.xml.

2) You need modify the host ip in profiles/jbpm.xml in designer.war It should have the value of. $OPENSHIFT_INTERNAL_IP. 
   Again the variable did not resolve, so had to hard code, on TODO list.

3) Due to memory issues, deploying jboss-brms.war and designer.war at the same time doesn't work. So by default, we have
   configured only jboss-brms.war to deploy automatically. After jboss-brms.war is deployed, you need to rename the file 
   'designer.war.dodeploy.delayed' to 'designer.war.dodeploy' to trigger the deployment of the designer app.

That is really it now, once it starts up your BRMS 5.3 product is available at:

    http://brms53-$your_domain.rhcloud.com/jboss-brms

