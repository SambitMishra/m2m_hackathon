

C:\Users\Administrator\Desktop\m2m_hackathon\m2m_hackathon

cf login -a api.run.pivotal.io -u prashanth.mukkera@one.verizon.com	-p Shanth#9

cf push m2m-hackathon -m 1G -i 1 -p C:/Users/Administrator/Desktop/m2m_hackathon/m2m_hackathon/M2M_Hackathon.war -n m2m-hackathon001


cf push m2m-hackathon -m 1G -i 1 -p C:\Users\Administrator\Desktop\m2m_hackathon\m2m_hackathon\war\m2mHackathon2.war -n m2m-hackathon-static

cf push m2m-hackathon -m 1G -i 1 -p C:\Users\Administrator\Desktop\m2m_hackathon\m2m_hackathon\war\m2mHackathon2.war -n m2m-hackathon-static -b https://github.com/cloudfoundry/java-buildpack.git#9e5b563

cf push m2m-hackathon -m 512M -i 1 -p C:/Users/Administrator/Desktop/m2m_hackathon/m2m_hackathon/index.zip -n m2m-hackathon-static

//Need to replace it with GIT URl

C:/Users/Administrator/Desktop/m2m_hackathon/m2m_hackathon/M2M_Hackathon.war


 m2m-hackathon001.cfapps.io
 
 
 need python
 npm install -g node-gyp
 
 karma start C:/Users/Administrator/Desktop/m2m_hackathon/m2m_hackathon/my.conf.js
 
  karma start C:/Users/Administrator/Desktop/m2m_hackathon/m2m_hackathon/karma.conf.js
 
 C:\Users\Administrator\Desktop\m2m_hackathon\m2m_hackathon
 
 gem install travis -v 1.7.6
 
 ruby
 travis
 add git to environment(2 entry- user/......./git/bin & user/...../cmd)
 go to project
 travis setup cloudfoundry
 
 karma-cli is added
 
 before-install add permission in .yml
	before_script:
- add sudo: required in yml
- npm install
- chmod +x ./node_modules/karma/bin/karma

