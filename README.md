# Smarter Advocacy

This cloud-native microservice, is part of a set which comprise a 'Smarter Advocacy' capability. More details about this will follow soon.

# The microservice in this repo

The simple goal for this microservice is to provide a CouchDB instance. It can be directly administered using the bundled Fauxton client.

**For you to build and deploy:**  
- see [separate BLOG](https://medium.com/nikcanvin/how-to-develop-update-a-docker-microservice-in-a-git-repo-a6118da2d92f), for how to develop changes to this cloud-native express/node.js microservice in 4 simple steps.
- see [separate BLOG](https://medium.com/nikcanvin/how-to-build-a-docker-microservice-application-and-deploy-to-openshift-fdb0769f1b9f), for how to deploy the latest microservice into production (an OpenShift Kubernetes cluster).

**Only within IBM, this microservice is already deployed:**  
- [Fauxton client login here](http://datastore-default.apps.riffled.os.fyre.ibm.com/_utils/index.html#login)
- which is: [deployed on a OpenShift cluster here](http://datastore-default.apps.riffled.os.fyre.ibm.com/)

**Notes:**
1. the CouchDB instance deployed withing IBM is not yet persistent, so for now, built reports (which includes all the periodic history data) are backedup to https://github.com/IBM/smarteradvocacy-build-report/tree/master/public

...

![Codewind logo](images/codewind.png?raw=true "Codewind logo")

***This microservice was created and iteratively developed using [Codewind](https://www.eclipse.org/codewind/).***  
*Codewind is an open source plugin for Eclispe and VS Code IDEs, that simplifies and enhances development in containers by extending industry standard IDEs with features to write, debug, and deploy cloud-native applications.* 
